import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// In-memory rate limiting store
// key: IP address, value: array of request timestamps
const rateLimitMap = new Map<string, number[]>();

// Cleanup rateLimitMap periodically to prevent memory leak
setInterval(() => {
  const now = Date.now();
  for (const [ip, timestamps] of rateLimitMap.entries()) {
    const validTimestamps = timestamps.filter(t => now - t < 60000);
    if (validTimestamps.length === 0) {
      rateLimitMap.delete(ip);
    } else {
      rateLimitMap.set(ip, validTimestamps);
    }
  }
}, 300000); // Clean up every 5 minutes

function getClientIp(req: NextRequest): string {
  const forwardedFor = req.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }
  const realIp = req.headers.get('x-real-ip');
  if (realIp) {
    return realIp.trim();
  }
  return '127.0.0.1';
}

function sanitizeInput(str: string): string {
  if (!str) return '';
  // Strip HTML tags and remove potentially dangerous characters
  return str
    .replace(/<[^>]*>/g, '') // remove HTML tags
    .trim();
}

function validatePhoneNumber(phone: string): boolean {
  // Check if it's exactly 10 digits
  return /^[0-9]{10}$/.test(phone);
}

export async function POST(req: NextRequest) {
  try {
    // 1. Rate Limiting Check (5 requests per IP per minute)
    const ip = getClientIp(req);
    const now = Date.now();
    const windowStart = now - 60000; // 1 minute window

    let timestamps = rateLimitMap.get(ip) || [];
    timestamps = timestamps.filter(t => t > windowStart);
    
    if (timestamps.length >= 5) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in a minute.' },
        { status: 429 }
      );
    }

    timestamps.push(now);
    rateLimitMap.set(ip, timestamps);

    // 2. Geolocation Country Check (fail silently for non-India requests to prevent bot spam)
    const country = req.headers.get('x-vercel-ip-country');
    if (country && country.toUpperCase() !== 'IN') {
      return NextResponse.json({
        success: true,
        data: {
          name: 'Enquiry Received',
          phone: '9912373373',
          area: 'Kukatpally',
        },
      });
    }

    // 3. Parse Request Body
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ error: 'Invalid payload.' }, { status: 400 });
    }

    // 3. Honeypot check (anti-spam)
    // If 'website' or 'email_trap' is filled, it's a bot
    if (body.website || body.email_trap) {
      return NextResponse.json({ success: true, message: 'Enquiry queued' }); // Fail silently to confuse bots
    }

    // 4. Sanitize and Validate Input Fields
    const rawName = body.name;
    const rawPhone = body.phone;
    const rawArea = body.area;
    const recaptchaToken = body.recaptchaToken;

    if (!rawName || !rawPhone || !rawArea) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const name = sanitizeInput(rawName);
    const phone = sanitizeInput(rawPhone);
    const area = sanitizeInput(rawArea);

    if (name.length < 2 || name.length > 100) {
      return NextResponse.json({ error: 'Name must be between 2 and 100 characters.' }, { status: 400 });
    }

    if (!validatePhoneNumber(phone)) {
      return NextResponse.json({ error: 'Please enter a valid 10-digit mobile number.' }, { status: 400 });
    }

    if (area.length < 2 || area.length > 80) {
      return NextResponse.json({ error: 'Area must be between 2 and 80 characters.' }, { status: 400 });
    }

    // Check for spam/phishing URLs or keyword lists in the fields
    const spamRegex = /(https?:\/\/[^\s]+|www\.[^\s]+|href=|src=|<script)/i;
    if (spamRegex.test(name) || spamRegex.test(area) || spamRegex.test(phone)) {
      return NextResponse.json({ error: 'Suspicious payload content detected.' }, { status: 400 });
    }

    // 5. Optional Google reCAPTCHA Verification
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (recaptchaSecret && recaptchaToken) {
      try {
        const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `secret=${recaptchaSecret}&response=${recaptchaToken}`,
        });

        const verifyData = await verifyRes.json();
        if (!verifyData.success || (verifyData.score !== undefined && verifyData.score < 0.5)) {
          return NextResponse.json({ error: 'reCAPTCHA verification failed. Please try again.' }, { status: 400 });
        }
      } catch (err) {
        console.error('reCAPTCHA validation error:', err);
        // Do not block form submission if Google API is unreachable, to maintain user UX
      }
    }

    // 6. Return Success Response
    // We send sanitized inputs back to the client so it can securely build the WhatsApp URL
    return NextResponse.json({
      success: true,
      data: {
        name,
        phone,
        area,
      },
    });

  } catch (error) {
    // Log privately on server
    console.error('Contact Form error:', error);
    // Generic message, never expose stack traces to production client
    return NextResponse.json({ error: 'Internal Server Error.' }, { status: 500 });
  }
}

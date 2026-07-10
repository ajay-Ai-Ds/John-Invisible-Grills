# John Invisible Grills — Premium Next.js Website

This is a production-ready, highly optimized, and SEO-optimized business website for **John Invisible Grills** (based in KPHB, Kukatpally, Hyderabad). The website is built using Next.js 14+ App Router, TypeScript, and Tailwind CSS. It is configured for static export (SSG), allowing direct deployment on Vercel or GitHub Pages with zero server cost.

---

## Features

- **Mega Menu Navigation**: Fully accessible dropdown headers for both safety services and Hyderabad locations.
- **Dynamic Services Pages (14 Solutions)**: Statically pre-rendered pages detailing balcony, window, stair, villa, apartment, and child safety grills.
- **Dynamic Location Pages (31 Areas)**: Dynamic generation of SEO-optimized landing pages for 31 Hyderabad neighborhoods with area-specific paragraphs.
- **Integrated Lightbox Gallery**: A high-performance responsive image masonry grid with an interactive preview lightbox.
- **No-Backend Forms**: Direct lead submissions to `johninvisiblegrills3717@gmail.com` using AJAX and FormSubmit.co.
- **Live Chat Integration**: Direct embed for Tawk.to.
- **Full Schema Markup**: LocalBusiness (with KPHB Kukatpally geo-coordinates), Organization, WebSite, and ContactPoint JSON-LD schema sitewide.
- **Mobile First Design**: Fully responsive across all major devices (320px to 1440px) with custom styling and a steel cable background pattern.

---

## Getting Started

### 1. Installation

Clone this repository and install the dependencies:

```bash
# Navigate to the project directory
cd john-invisible-grills-website

# Install packages
npm install
```

### 2. Local Development

Run the development server locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the website live.

### 3. Production Build & Static Export

To verify typescript safety, link structure, and generate the optimized static export bundle:

```bash
# Compile and build the application
npm run build
```

---

## Configuration & Customization Guide

### A. Updating Contact Details & Location Address

To edit the phone numbers, email address, or physical address, edit the following files:
- [UtilityBar.tsx](file:///C:/Users/thepl/.gemini/antigravity/scratch/john-invisible-grills-website/components/UtilityBar.tsx): Top utility strip.
- [Navbar.tsx](file:///C:/Users/thepl/.gemini/antigravity/scratch/john-invisible-grills-website/components/Navbar.tsx): Call button numbers.
- [Footer.tsx](file:///C:/Users/thepl/.gemini/antigravity/scratch/john-invisible-grills-website/components/Footer.tsx): Address, hours of operation, and links.
- [ContactPage (app/contact/page.tsx)](file:///C:/Users/thepl/.gemini/antigravity/scratch/john-invisible-grills-website/app/contact/page.tsx): Main contact details cards.

### B. Configuring FormSubmit.co

Our forms send submissions to `johninvisiblegrills3717@gmail.com` using FormSubmit.co.
1. When you deploy the site and submit a form for the first time, FormSubmit will send a **confirmation email** to `johninvisiblegrills3717@gmail.com`.
2. Click the verification link in that email to activate the form.
3. No backend coding or credit card is required. All form settings like subjects, templating, and redirects are already configured inside [ContactForm.tsx](file:///C:/Users/thepl/.gemini/antigravity/scratch/john-invisible-grills-website/components/ContactForm.tsx).

### C. Integrating Tawk.to Live Chat

The live chat script is integrated inside the root layout:
1. Open [app/layout.tsx](file:///C:/Users/thepl/.gemini/antigravity/scratch/john-invisible-grills-website/app/layout.tsx).
2. Locate the `<Script id="tawk-to-integration">` tag at the bottom of the file.
3. Replace the placeholder URL `'https://embed.tawk.to/YOUR_TAWKTO_PROPERTY_ID/YOUR_TAWKTO_WIDGET_ID'` with your actual Tawk.to widget code.

### D. Adding a New Service Location

The 30+ service location pages are generated dynamically:
1. Open [lib/locationsData.ts](file:///C:/Users/thepl/.gemini/antigravity/scratch/john-invisible-grills-website/lib/locationsData.ts).
2. Add a new object to the `locationsData` array following this structure:
   ```typescript
   {
     name: "Tolichowki",
     slug: "invisible-grills-in-tolichowki-hyderabad",
     responseTime: "3 Hours",
     notes: "Serving all premium high-rises and commercial hubs near Tolichowki road."
   }
   ```
3. Save the file. The next time you run `npm run build`, Next.js will automatically compile the new page at `/locations/invisible-grills-in-tolichowki-hyderabad` and inject it into your header, footer, and dynamic sitemap.

### E. Replacing Gallery & Banner Images

All imagery assets are located in the `/public/images/` directory:
- `hero_balcony_grill.png`: Balcony slider and background.
- `child_safety_grill.png`: Child/pet safety sliders and illustrations.
- Replace these files with your custom photos keeping the same filenames, or edit the paths in [HeroSlider.tsx](file:///C:/Users/thepl/.gemini/antigravity/scratch/john-invisible-grills-website/components/HeroSlider.tsx) and [GalleryPage](file:///C:/Users/thepl/.gemini/antigravity/scratch/john-invisible-grills-website/app/gallery/page.tsx).

---

## Deployment Guide

### Deploying to GitHub & Vercel (Recommended)

Vercel provides native support for Next.js App Router projects with zero server configuration:
1. Push your local codebase to a GitHub repository.
2. Sign in to your [Vercel Dashboard](https://vercel.com).
3. Click **Add New** &rarr; **Project** and import your GitHub repository.
4. Vercel will auto-detect Next.js. Click **Deploy**.
5. Connect your custom domain `johninvisiblegrills.com` in Vercel's project settings (Settings &rarr; Domains).

---

## SEO Customization Guide

Each page generates its metadata dynamically:
- To modify meta titles and descriptions for services, edit the `metaTitle` and `metaDesc` properties inside [lib/servicesData.ts](file:///C:/Users/thepl/.gemini/antigravity/scratch/john-invisible-grills-website/lib/servicesData.ts).
- To modify meta titles and descriptions for location pages, edit the generator logic in [app/locations/\[slug\]/page.tsx](file:///C:/Users/thepl/.gemini/antigravity/scratch/john-invisible-grills-website/app/locations/[slug]/page.tsx).
- Sitewide metadata (and Twitter/OG tags) can be updated inside the metadata export at the top of [app/layout.tsx](file:///C:/Users/thepl/.gemini/antigravity/scratch/john-invisible-grills-website/app/layout.tsx).
- Geo-coordinates and schemas are customized inside [JsonLd.tsx](file:///C:/Users/thepl/.gemini/antigravity/scratch/john-invisible-grills-website/components/JsonLd.tsx).

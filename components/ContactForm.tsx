"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

interface ContactFormProps {
  embedded?: boolean;
  prefilledService?: string;
  prefilledArea?: string;
}

export default function ContactForm({ embedded = false, prefilledService = "", prefilledArea = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: prefilledArea || "",
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/johninvisiblegrills@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: formData.name,
          Phone: formData.phone,
          Area: formData.area,
          _subject: `New Invisible Grill Enquiry - ${formData.area || "Hyderabad"}`,
          _template: "basic",
          _captcha: "false"
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("There was an error sending your enquiry. Please try calling us directly at 9912373373.");
      }
    } catch {
      alert("Network error. Please contact us via phone or WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-md text-center flex flex-col items-center justify-center space-y-4 py-16 animate-fade-in">
        <CheckCircle2 size={48} className="text-brass animate-bounce" />
        <h3 className="text-xl font-bold text-graphite">Enquiry Submitted Successfully!</h3>
        <p className="text-sm text-steel max-w-sm">
          Thank you for contacting John Invisible Grills. Our safety specialists from Kukatpally will call you shortly to arrange a free site measurement visit.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-xs font-bold text-brass uppercase hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-lg border border-gray-100 shadow-md ${embedded ? "p-6" : "p-8 md:p-10"}`}>
      <h3 className="text-lg font-bold text-graphite mb-2 uppercase tracking-wide">
        Book Free Site Visit & Quote
      </h3>
      <p className="text-xs text-steel mb-6 leading-relaxed">
        Fill out this form and our engineers will visit your property for a professional measurement, showcase material samples, and provide an instant quotation.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-xs font-bold text-graphite uppercase tracking-wide mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            required
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 text-sm text-graphite focus:bg-white focus:border-brass focus:ring-0 transition-colors"
          />
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-xs font-bold text-graphite uppercase tracking-wide mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            required
            pattern="[0-9]{10}"
            placeholder="10-digit mobile number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 text-sm text-graphite focus:bg-white focus:border-brass focus:ring-0 transition-colors"
          />
        </div>

        {/* Area / Location Field */}
        <div>
          <label htmlFor="area" className="block text-xs font-bold text-graphite uppercase tracking-wide mb-1">
            Area in Hyderabad *
          </label>
          <input
            type="text"
            id="area"
            required
            placeholder="e.g. Miyapur, Kondapur, KPHB"
            value={formData.area}
            onChange={(e) => setFormData({ ...formData, area: e.target.value })}
            className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 text-sm text-graphite focus:bg-white focus:border-brass focus:ring-0 transition-colors"
          />
        </div>



        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-brass hover:bg-graphite text-white font-bold tracking-wide uppercase py-4 rounded-sm shadow-md transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
        >
          {loading ? (
            <span>Sending...</span>
          ) : (
            <>
              <span>Book Free Site Visit</span>
              <Send size={14} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

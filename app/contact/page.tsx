import React from "react";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import EmailLink from "@/components/UI/EmailLink";

export const metadata = {
  title: "Contact Us | John Invisible Grills Hyderabad",
  description: "Get in touch with John Invisible Grills. Call 9912373373 or 9951666645. Visit our Kukatpally (KPHB) office or book a free home measurement visit today.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-graphite text-white py-16 md:py-20 relative overflow-hidden select-none">
        <div className="absolute inset-0 opacity-5 bg-repeating-linear-gradient" style={{
          backgroundImage: "repeating-linear-gradient(45deg, #B08D57 0px, #B08D57 1px, transparent 1px, transparent 18px)"
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs font-bold text-brass uppercase tracking-widest block">Get In Touch</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Contact Our Safety Team
          </h1>
          <p className="text-sm text-gray-300 max-w-xl mx-auto font-medium">
            Based in Kukatpally (KPHB), serving all of Hyderabad with immediate responses and free site visits.
          </p>
        </div>
      </section>

      {/* Main Info and Form Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Contact Details Column */}
          <div className="space-y-8 lg:col-span-1">
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-graphite uppercase tracking-wide border-b border-gray-150 pb-2">
                Headquarters Info
              </h2>
              <p className="text-sm text-steel leading-relaxed">
                Contact our Kukatpally safety center directly for material queries, corporate invoicing, or immediate site visit bookings.
              </p>
            </div>

            {/* Structured Contact info cards */}
            <div className="space-y-4">
              {/* Phones */}
              <div className="flex items-start space-x-4 p-4 bg-white border border-gray-150 rounded-lg shadow-xxs">
                <Phone className="text-brass w-5 h-5 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xxs font-bold text-steel uppercase tracking-wider">Phone Numbers</span>
                  <a href="tel:+919912373373" className="text-sm font-bold text-graphite hover:text-brass transition-colors mt-1">
                    9912373373 (Primary)
                  </a>
                  <a href="tel:+919951666645" className="text-sm font-bold text-graphite hover:text-brass transition-colors mt-0.5">
                    9951666645 (Secondary)
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 p-4 bg-white border border-gray-150 rounded-lg shadow-xxs">
                <Mail className="text-brass w-5 h-5 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xxs font-bold text-steel uppercase tracking-wider">Email Address</span>
                  <EmailLink className="text-sm font-bold text-graphite hover:text-brass transition-colors mt-1" />
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4 p-4 bg-white border border-gray-150 rounded-lg shadow-xxs">
                <MapPin className="text-brass w-5 h-5 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xxs font-bold text-steel uppercase tracking-wider">Main Workshop</span>
                  <span className="text-xs font-semibold text-graphite leading-relaxed mt-1">
                    KPHB (Kukatpally), Hyderabad, Telangana, 500072
                  </span>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start space-x-4 p-4 bg-white border border-gray-150 rounded-lg shadow-xxs">
                <Clock className="text-brass w-5 h-5 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xxs font-bold text-steel uppercase tracking-wider">Working Hours</span>
                  <span className="text-xs font-semibold text-graphite leading-relaxed mt-1">
                    Mon - Sun: 8:00 AM - 9:00 PM <br />
                    (Open 365 Days)
                  </span>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Link card */}
            <div className="bg-green-50 border border-green-200/50 p-6 rounded-lg space-y-4">
              <div className="flex items-center space-x-2 text-green-700">
                <MessageSquare size={20} />
                <h4 className="text-xs font-bold uppercase tracking-wider">WhatsApp Support</h4>
              </div>
              <p className="text-xxs text-green-800 leading-relaxed">
                Send balcony dimensions or window photos on WhatsApp for instant ballpark estimates.
              </p>
              <a
                href="https://wa.me/919912373373"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#25D366] hover:bg-green-600 text-white font-bold text-xs uppercase tracking-wide py-3 rounded-sm shadow-sm transition-colors text-center"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2 space-y-8" id="quote-form">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Embedded Map Section */}
      <section className="w-full h-[450px] border-t border-gray-150 relative">
        <iframe
          title="John Invisible Grills Kukatpally Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.275949547514!2d78.39058347585098!3d17.494348600378873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90bf9e34a2e5%3A0xb3514a385f0ef352!2sKukatpally%20Housing%20Board%20Colony%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
      </section>
    </div>
  );
}

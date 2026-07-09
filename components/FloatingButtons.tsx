"use client";

import React, { useState, useEffect } from "react";
import { Phone, ArrowUp } from "lucide-react";

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const whatsappUrl = "https://wa.me/919912373373?text=Hi%20John%20Invisible%20Grills,%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20invisible%20grills%20installation.";

  return (
    <>
      {/* All Floating Buttons (Left Side) */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col space-y-3 items-start select-none">

        {/* Scroll to Top Button — shown when scrolled down */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="bg-graphite text-white hover:bg-brass p-3.5 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brass animate-fade-in"
            aria-label="Back to Top"
          >
            <ArrowUp size={22} />
          </button>
        )}

        {/* Direct Call Button (Mobile visible primarily) */}
        <a
          href="tel:+919912373373"
          className="lg:hidden bg-[#1E6AE9] text-white p-3.5 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#1E6AE9]"
          aria-label="Call John Invisible Grills"
        >
          <Phone size={22} />
        </a>

        {/* Floating WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-label="Chat on WhatsApp with John Invisible Grills"
        >
          {/* Customized SVG for WhatsApp logo */}
          <svg
            className="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.792 1.451 5.485.002 9.952-4.466 9.955-9.956.002-2.661-1.026-5.163-2.898-7.036-1.874-1.874-4.377-2.903-7.039-2.904-5.489 0-9.957 4.468-9.96 9.959-.002 1.701.444 3.364 1.294 4.814l-.973 3.553 3.641-.956zm10.963-7.399c-.3-.15-1.77-.875-2.046-.975-.276-.1-.477-.15-.677.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-1.25-.625-2.046-1.25-2.868-2.663-.175-.3-.075-.463.075-.613.138-.138.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.677-1.631-.927-2.231-.243-.587-.492-.507-.677-.516-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8.376-.275.3-1.05 1.026-1.05 2.502 0 1.477 1.075 2.903 1.225 3.102.15.2 2.11 3.22 5.111 4.517.714.309 1.272.494 1.707.633.717.228 1.368.196 1.884.118.575-.088 1.77-.724 2.02-1.427.25-.702.25-1.3.175-1.427-.075-.125-.275-.2-.575-.35z" />
          </svg>
        </a>
      </div>
    </>
  );
}

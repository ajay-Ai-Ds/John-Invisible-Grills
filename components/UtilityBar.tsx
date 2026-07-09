import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function UtilityBar() {
  return (
    <div className="w-full bg-foreground text-gray-300 text-xs border-b border-black select-none z-50 relative">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-10 min-h-10 py-2 sm:py-0 flex justify-between items-center">
        {/* Left Side - Main Number */}
        <a
          href="tel:+919912373373"
          className="flex items-center space-x-2 hover:text-white transition-colors duration-200"
          aria-label="Call Primary Phone 9912373373"
        >
          <Phone size={12} className="text-primary" />
          <span className="font-medium tracking-wide">9912373373</span>
        </a>

        {/* Right Side - Email */}
        <a
          href="mailto:johninvisiblegrills@gmail.com"
          className="flex items-center space-x-2 hover:text-white transition-colors duration-200"
          aria-label="Email johninvisiblegrills@gmail.com"
        >
          <Mail size={12} className="text-primary" />
          <span className="font-medium tracking-wide">johninvisiblegrills@gmail.com</span>
        </a>
      </div>
    </div>
  );
}

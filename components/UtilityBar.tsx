import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function UtilityBar() {
  return (
    <div className="w-full bg-foreground text-gray-300 text-xs border-b border-black select-none z-50 relative">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-10 min-h-10 py-2 sm:py-0 flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <a
            href="tel:+919912373373"
            className="flex items-center space-x-2 hover:text-white transition-colors duration-200"
            aria-label="Call Primary Phone 9912373373"
          >
            <Phone size={12} className="text-primary" />
            <span className="font-medium tracking-wide">9912373373</span>
          </a>
          <a
            href="tel:+919951666645"
            className="flex items-center space-x-2 hover:text-white transition-colors duration-200"
            aria-label="Call Secondary Phone 9951666645"
          >
            <Phone size={12} className="text-primary" />
            <span className="font-medium tracking-wide">9951666645</span>
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <a
            href="mailto:johninvisiblegrills@gmail.com"
            className="flex items-center space-x-2 hover:text-white transition-colors duration-200"
            aria-label="Email johninvisiblegrills@gmail.com"
          >
            <Mail size={12} className="text-primary" />
            <span className="font-medium tracking-wide">johninvisiblegrills@gmail.com</span>
          </a>
          <div className="flex items-center space-x-2 text-gray-400">
            <MapPin size={12} className="text-primary/70" />
            <span className="font-medium tracking-wide hidden sm:inline">KPHB, Kukatpally, Hyderabad</span>
            <span className="font-medium tracking-wide sm:hidden">Kukatpally, Hyd</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react";
import { servicesData } from "@/lib/servicesData";
import { locationsData } from "@/lib/locationsData";
import EmailLink from "@/components/UI/EmailLink";

export default function Footer() {
  const sortedLocations = [...locationsData].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <footer className="bg-light-bg text-foreground border-t border-black/5 select-none pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-20">
          {/* Brand Column */}
          <div className="flex flex-col space-y-8">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="12" y1="6" x2="12" y2="20" stroke="currentColor" strokeWidth="1" strokeDasharray="1 1.5" opacity="0.5" />
                  <line x1="16" y1="6" x2="16" y2="20" stroke="currentColor" strokeWidth="1" strokeDasharray="1 1.5" opacity="0.5" />
                  <line x1="20" y1="6" x2="20" y2="20" stroke="currentColor" strokeWidth="1" strokeDasharray="1 1.5" opacity="0.5" />
                  <path d="M18 8V20C18 22.2091 16.2091 24 14 24C11.7909 24 10 22.2091 10 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="18" cy="4.5" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight leading-tight text-foreground">
                  John Invisible
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed font-medium">
              Hyderabad's premier installer of premium, high-tensile 316 marine-grade stainless steel invisible grills. We protect your family and pets without blocking your panoramic views.
            </p>
            <div className="flex items-center space-x-2 text-xs font-semibold text-primary bg-primary/5 p-3 rounded-xl border border-primary/10 w-fit">
              <Shield size={16} />
              <span>Certified SS 316 Marine Grade</span>
            </div>
          </div>

          {/* Service Pages Links Column */}
          <div>
            <h3 className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-6">
              Our Safety Services
            </h3>
            <ul className="space-y-4 text-sm font-medium text-gray-600">
              {servicesData.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-primary transition-colors duration-200 block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact Block Column */}
          <div>
            <h3 className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-5 text-sm font-medium text-gray-600">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-gray-400 flex-shrink-0 mt-0.5" />
                <span>
                  KPHB (Kukatpally), Hyderabad, Telangana, 500072
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-gray-400 flex-shrink-0" />
                <div className="flex flex-col space-y-1">
                  <a href="tel:+919912373373" className="hover:text-primary transition-colors">
                    9912373373 (HQ)
                  </a>
                  <a href="tel:+919951666645" className="hover:text-primary transition-colors">
                    9951666645
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-gray-400 flex-shrink-0" />
                <EmailLink className="hover:text-primary transition-colors" />
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-gray-500 flex-shrink-0 mt-0.5" />
                <span>
                  Mon - Sun: 8:00 AM - 9:00 PM <br />
                  <span className="text-xs text-gray-600 mt-1 block">Open 365 Days</span>
                </span>
              </li>
            </ul>
          </div>

          {/* About us snippet / Location Quick Nav */}
          <div>
            <h3 className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-6">
              Primary Areas Served
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm font-medium text-gray-600">
              {locationsData.slice(0, 10).map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="hover:text-primary transition-colors duration-150 truncate block"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              className="text-xs text-primary hover:text-accent font-bold tracking-widest mt-6 block uppercase transition-colors"
            >
              All Hyderabad locations &rarr;
            </Link>
          </div>
        </div>

        {/* Extended Location list footer sub-panel */}
        <div className="pt-10 border-t border-black/5">
          <span className="text-xs font-bold text-gray-600 uppercase tracking-widest block mb-6">
            Service Coverage Area (Across Hyderabad City)
          </span>
          <div className="flex flex-wrap gap-x-4 gap-y-3 text-xs text-gray-600 font-medium leading-relaxed">
            {sortedLocations.map((loc, idx) => (
              <span key={loc.slug} className="flex items-center">
                <Link href={`/locations/${loc.slug}`} className="hover:text-primary transition-colors duration-150">
                  Invisible Grills in {loc.name}
                </Link>
                {idx < sortedLocations.length - 1 && <span className="mx-2 text-gray-300">/</span>}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center text-xs font-medium text-gray-600">
          <p>&copy; {new Date().getFullYear()} John Invisible Grills. All Rights Reserved. Headquartered in KPHB Kukatpally.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <Link href="/works" className="hover:text-primary transition-colors">Recent Works</Link>
            <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
            <Link href="/faq" className="hover:text-primary transition-colors">FAQs</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

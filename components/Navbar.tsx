"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageCircle, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/UI/Button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services/balcony-invisible-grills" },
    { name: "Gallery", href: "/gallery" },
    { name: "Projects", href: "/works" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="sticky top-0 left-0 w-full z-40 glass-nav h-[72px] md:h-[80px] flex items-center transition-all duration-[400ms] select-none">
        <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-[8px] md:gap-[12px] group">
                {/* Premium Animated Icon */}
                <div className="relative w-[56px] h-[56px] md:w-[64px] md:h-[64px] group-hover:scale-105 transition-transform duration-[400ms] ease-out shrink-0">
                  <Image 
                    src="/images/logo-icon.png" 
                    alt="John Invisible Grills Logo" 
                    fill 
                    className="object-contain scale-[1.25] md:scale-100"
                    priority
                  />
                </div>
                {/* Premium Typographic Wordmark */}
                <div className="flex flex-col justify-center mt-0.5">
                  <span className="text-[14.5px] sm:text-[16px] md:text-lg font-heading font-[800] tracking-[-0.02em] text-[#111111] leading-none">
                    JOHN INVISIBLE
                  </span>
                  <span className="block text-[8.5px] sm:text-[10px] md:text-[12px] font-[600] tracking-[0.45em] text-[#E91E63] uppercase leading-none mt-1.5 md:mt-1.5">
                    GRILLS
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Center Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-semibold transition-colors duration-200 ${
                      isActive ? "text-primary" : "text-gray-600 hover:text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Desktop Right CTAs */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:+919912373373" className="flex items-center justify-center w-10 h-10 rounded-full transition-colors bg-gray-100 text-foreground hover:bg-gray-200">
                <Phone size={18} />
              </a>
              <a href="https://wa.me/919912373373" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full transition-colors bg-green-100 text-green-600 hover:bg-green-200">
                <MessageCircle size={18} />
              </a>
              <Button href="/contact#quote-form" variant="primary" className="py-2.5 px-6 text-sm">
                Get Free Quote
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-lg focus:outline-none text-foreground bg-gray-50 hover:bg-gray-100"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden"
          >
            {/* Mobile Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute top-0 right-0 w-[85%] max-w-sm h-full bg-white shadow-2xl flex flex-col"
            >
              <div className="p-6 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 8V20C18 22.2091 16.2091 24 14 24C11.7909 24 10 22.2091 10 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-lg font-bold text-foreground">Menu</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 bg-gray-50 rounded-full text-gray-500 hover:text-foreground"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col space-y-4">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-xl font-bold transition-colors p-3 rounded-xl ${
                        isActive ? "text-primary bg-primary/5" : "text-gray-500 hover:bg-gray-50 hover:text-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              {/* Fixed Bottom CTA */}
              <div className="p-6 bg-gray-50 border-t border-gray-100 space-y-3">
                <a href="tel:+919912373373" className="flex items-center justify-center space-x-2 w-full py-3 bg-white border border-gray-200 rounded-full font-bold text-foreground hover:bg-gray-50 transition-colors">
                  <Phone size={18} />
                  <span>Call 9912373373</span>
                </a>
                <a href="mailto:johninvisiblegrills@gmail.com" className="flex items-center justify-center space-x-2 w-full py-3 bg-white border border-gray-200 rounded-full font-bold text-foreground hover:bg-gray-50 transition-colors">
                  <Mail size={18} />
                  <span>Email Us</span>
                </a>
                <Button href="/contact#quote-form" variant="primary" className="w-full">
                  Get Free Quote
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

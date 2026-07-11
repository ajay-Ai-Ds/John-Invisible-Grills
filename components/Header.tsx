"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Brand Tokens ─────────────────────────────────────────────────────────────
const BRAND = {
  primary: "#E91048",
  primaryDark: "#8C0A2E",
  neutralDark: "#1A1A1A",
  background: "#FAFAFA",
} as const;

const PHONE_RAW = "+919912373373";
const PHONE_DISPLAY = "+91 99123 73373";
const EMAIL = "johninvisiblegrills3717@gmail.com";
const WHATSAPP_URL = "https://wa.me/919912373373";

// ─── Nav Links ────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services/balcony-invisible-grills" },
  { name: "Gallery", href: "/gallery" },
  { name: "Projects", href: "/works" },
  { name: "Contact", href: "/contact" },
] as const;

// ─── ContactBar ───────────────────────────────────────────────────────────────
function ContactBar() {
  return (
    <div
      className="w-full relative z-50 select-none"
      style={{
        backgroundColor: BRAND.neutralDark,
        borderBottom: `1px solid ${BRAND.primary}40`,
        minHeight: "38px",
      }}
      role="complementary"
      aria-label="Contact information"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 h-[38px] flex items-center justify-between gap-3">
        {/* Phone */}
        <a
          href={`tel:${PHONE_RAW}`}
          aria-label={`Call us at ${PHONE_DISPLAY}`}
          className="flex items-center gap-1.5 text-xs font-semibold tracking-wide transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E91048] rounded-sm group"
          style={{ color: "#F0F0F0" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = BRAND.primary;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = "#F0F0F0";
          }}
        >
          <Phone
            size={12}
            aria-hidden="true"
            style={{ color: BRAND.primary }}
          />
          <span>{PHONE_DISPLAY}</span>
        </a>

        {/* Divider */}
        <span
          className="hidden sm:block h-3 w-px"
          style={{ backgroundColor: `${BRAND.primary}50` }}
          aria-hidden="true"
        />

        {/* Email */}
        <a
          href={`mailto:${EMAIL}`}
          aria-label={`Email us at ${EMAIL}`}
          className="flex items-center gap-1.5 text-xs font-semibold tracking-wide transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E91048] rounded-sm"
          style={{ color: "#F0F0F0" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = BRAND.primary;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = "#F0F0F0";
          }}
        >
          <Mail
            size={12}
            aria-hidden="true"
            style={{ color: BRAND.primary }}
          />
          <span>{EMAIL}</span>
        </a>
      </div>
    </div>
  );
}

// ─── HamburgerIcon — morphs ≡ ↔ ✕ in ~220ms ──────────────────────────────────
function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className="relative w-[20px] h-[16px] flex flex-col justify-between"
      aria-hidden="true"
    >
      <motion.span
        animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.22, ease: "easeInOut" }}
        className="block h-[2px] w-full rounded-full origin-center"
        style={{ backgroundColor: BRAND.primary }}
      />
      <motion.span
        animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.16 }}
        className="block h-[2px] w-full rounded-full"
        style={{ backgroundColor: BRAND.primary }}
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.22, ease: "easeInOut" }}
        className="block h-[2px] w-full rounded-full origin-center"
        style={{ backgroundColor: BRAND.primary }}
      />
    </div>
  );
}

// ─── MobileMenu ───────────────────────────────────────────────────────────────
function MobileMenu({
  isOpen,
  onClose,
  pathname,
}: {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}) {
  const menuRef = useRef<HTMLDivElement>(null);

  // Lock scroll when open
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const firstEl = menuRef.current?.querySelector<HTMLElement>(
      "a, button, [tabindex]:not([tabindex='-1'])"
    );
    firstEl?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Escape to close
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[55] bg-black/35 backdrop-blur-[2px] lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            key="mobile-panel"
            ref={menuRef}
            id="mobile-nav-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-0 right-0 z-[60] lg:hidden flex flex-col overflow-hidden shadow-2xl"
            style={{
              top: "106px", /* 38px contact bar + 68px nav */
              backgroundColor: BRAND.background,
              maxHeight: "calc(100dvh - 106px)",
              borderTop: `2px solid ${BRAND.primary}22`,
            }}
          >
            {/* Nav list */}
            <nav
              aria-label="Mobile navigation"
              className="flex-1 overflow-y-auto"
            >
              <ul role="list" className="divide-y divide-black/[0.05]">
                {NAV_LINKS.map((link, i) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <li key={link.name}>
                      <motion.div
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.04 + i * 0.04, duration: 0.2 }}
                      >
                        <Link
                          href={link.href}
                          onClick={onClose}
                          aria-current={isActive ? "page" : undefined}
                          className="flex items-center justify-between px-6 py-[14px] min-h-[52px] text-[15px] font-bold tracking-wide transition-colors duration-150 focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2"
                          style={{
                            color: isActive ? BRAND.primary : BRAND.neutralDark,
                            backgroundColor: isActive
                              ? `${BRAND.primary}08`
                              : "transparent",
                          }}
                          onMouseEnter={(e) => {
                            if (!isActive) {
                              (e.currentTarget as HTMLElement).style.backgroundColor =
                                `${BRAND.primary}06`;
                              (e.currentTarget as HTMLElement).style.color = BRAND.primary;
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isActive) {
                              (e.currentTarget as HTMLElement).style.backgroundColor =
                                "transparent";
                              (e.currentTarget as HTMLElement).style.color = BRAND.neutralDark;
                            }
                          }}
                        >
                          <span>{link.name}</span>
                          <ChevronRight
                            size={16}
                            aria-hidden="true"
                            style={{
                              color: isActive ? BRAND.primary : "#C0C0C0",
                            }}
                          />
                        </Link>
                      </motion.div>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Bottom CTA strip */}
            <div
              className="px-5 pb-7 pt-4 space-y-3"
              style={{
                borderTop: "1px solid #E8E8E8",
                backgroundColor: "#F5F5F5",
              }}
            >
              {/* Quick-action pills */}
              <div className="flex gap-2.5">
                <a
                  href={`tel:${PHONE_RAW}`}
                  aria-label="Call us now"
                  className="flex-1 flex items-center justify-center gap-2 min-h-[48px] rounded-2xl text-sm font-bold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E91048]"
                  style={{
                    border: `1.5px solid ${BRAND.primary}`,
                    color: BRAND.primary,
                    backgroundColor: "white",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = BRAND.primary;
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "white";
                    (e.currentTarget as HTMLElement).style.color = BRAND.primary;
                  }}
                >
                  <Phone size={15} aria-hidden="true" />
                  <span>Call Now</span>
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  className="flex-1 flex items-center justify-center gap-2 min-h-[48px] rounded-2xl text-sm font-bold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A1A1A]"
                  style={{
                    border: `1.5px solid #D0D0D0`,
                    color: BRAND.neutralDark,
                    backgroundColor: "white",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = BRAND.neutralDark;
                    (e.currentTarget as HTMLElement).style.backgroundColor = BRAND.neutralDark;
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#D0D0D0";
                    (e.currentTarget as HTMLElement).style.backgroundColor = "white";
                    (e.currentTarget as HTMLElement).style.color = BRAND.neutralDark;
                  }}
                >
                  <MessageCircle size={15} aria-hidden="true" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Primary CTA */}
              <Link
                href="/contact#quote-form"
                onClick={onClose}
                className="flex items-center justify-center w-full min-h-[52px] rounded-2xl text-white text-[15px] font-bold tracking-wide shadow-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E91048]"
                style={{ backgroundColor: BRAND.primary }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = BRAND.primaryDark;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = BRAND.primary;
                }}
              >
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── MainNavbar ───────────────────────────────────────────────────────────────
function MainNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = useCallback(() => setMenuOpen((p) => !p), []);
  const close = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <nav
        aria-label="Main navigation"
        className="sticky top-0 left-0 w-full z-40 select-none transition-shadow duration-300"
        style={{
          backgroundColor: BRAND.background,
          borderBottom: "1px solid #EEEEEE",
          boxShadow: scrolled
            ? "0 4px 20px 0 rgba(26,26,26,0.07), 0 1px 4px 0 rgba(26,26,26,0.04)"
            : "none",
        }}
      >
        <div className="max-w-[1400px] w-full mx-auto px-5 sm:px-6 lg:px-10 h-[68px] flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            aria-label="John Invisible Grills — go to home page"
            className="flex items-center gap-2.5 shrink-0 group rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E91048] focus-visible:ring-offset-2"
          >
            <div
              className="relative shrink-0 transition-transform duration-200 group-hover:scale-[1.04]"
              style={{ width: "58px", height: "58px" }}
            >
              <Image
                src="/images/logoicon.png"
                alt=""
                fill
                sizes="58px"
                className="object-contain"
                priority
                aria-hidden="true"
              />
            </div>
            <div className="flex flex-col justify-center gap-[3px] leading-none">
              <span
                className="font-heading font-black tracking-[-0.02em] leading-none"
                style={{
                  color: BRAND.neutralDark,
                  fontSize: "clamp(20px, 2.8vw, 26px)",
                }}
              >
                JOHN
              </span>
              <span
                className="font-sans font-extrabold uppercase leading-none"
                style={{
                  color: BRAND.primary,
                  fontSize: "clamp(7.5px, 0.9vw, 9.5px)",
                  letterSpacing: "0.30em",
                }}
              >
                Invisible Grills
              </span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <ul
            role="list"
            className="hidden lg:flex items-center gap-6 xl:gap-8"
          >
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className="relative py-1 text-sm font-semibold tracking-wide transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E91048] focus-visible:ring-offset-2 rounded-sm"
                    style={{
                      color: isActive ? BRAND.primary : "#606060",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive)
                        (e.currentTarget as HTMLElement).style.color =
                          BRAND.neutralDark;
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive)
                        (e.currentTarget as HTMLElement).style.color = "#606060";
                    }}
                  >
                    {link.name}
                    {isActive && (
                      <span
                        className="absolute -bottom-[2px] left-0 right-0 h-[2px] rounded-full"
                        style={{ backgroundColor: BRAND.primary }}
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${PHONE_RAW}`}
              aria-label={`Call ${PHONE_DISPLAY}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold border transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E91048] focus-visible:ring-offset-2"
              style={{
                color: BRAND.neutralDark,
                borderColor: "#DEDEDE",
                backgroundColor: "white",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = BRAND.primary;
                el.style.color = BRAND.primary;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#DEDEDE";
                el.style.color = BRAND.neutralDark;
              }}
            >
              <Phone size={14} aria-hidden="true" />
              <span>{PHONE_DISPLAY}</span>
            </a>

            <Link
              href="/contact#quote-form"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-white text-sm font-bold tracking-wide shadow-md hover:-translate-y-[1px] hover:shadow-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E91048] focus-visible:ring-offset-2"
              style={{ backgroundColor: BRAND.primary }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  BRAND.primaryDark;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  BRAND.primary;
              }}
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={toggle}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E91048] focus-visible:ring-offset-1"
            style={{
              backgroundColor: menuOpen ? `${BRAND.primary}12` : "transparent",
            }}
          >
            <HamburgerIcon isOpen={menuOpen} />
          </button>
        </div>
      </nav>

      {/* Mobile menu rendered at this level so it escapes nav stacking context */}
      <MobileMenu isOpen={menuOpen} onClose={close} pathname={pathname} />
    </>
  );
}

// ─── Header — default export (single reusable component) ─────────────────────
export default function Header() {
  return (
    <header className="w-full" id="site-header">
      <ContactBar />
      <MainNavbar />
    </header>
  );
}

"use client";

import {
  useRef,
  useState,
  useCallback,
  useEffect,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Shield,
  Award,
  CheckCircle,
  Star,
  Phone,
  MessageSquare,
} from "lucide-react";

// ─── Slide Data ──────────────────────────────────────────────────────────────
const AUTOPLAY_DELAY = 3500;
const TRANSITION_DURATION = 0.85;

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  tagline: string;
  ctaText: string;
  ctaLink: string;
  ctaSecondaryText: string;
  ctaSecondaryLink: string;
  bgImage: string;
  accentColor: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Premium Invisible Grills for Modern Homes",
    subtitle:
      "Unblocked views, maximum ventilation & absolute family protection with marine-grade SS 316 steel wires.",
    tagline: "Safety Without Enclosure",
    ctaText: "Get Free Quote",
    ctaLink: "/contact#quote-form",
    ctaSecondaryText: "Our Services",
    ctaSecondaryLink: "/services/balcony-invisible-grills",
    bgImage: "/images/carousl2.jpg",
    accentColor: "#E91E63",
    Icon: Shield,
  },
  {
    id: 2,
    title: "Absolute Child Safety for Balconies & Windows",
    subtitle:
      "Narrow-gap structural wire grids engineered to withstand up to 400 kg tension. Keep your toddlers safe in high-rise apartments.",
    tagline: "Toddler & Kids Safety Specialist",
    ctaText: "Book Site Visit",
    ctaLink: "/contact#quote-form",
    ctaSecondaryText: "Child Safety Grills",
    ctaSecondaryLink: "/services/child-safety-invisible-grills",
    bgImage: "/images/carousel3.jpg",
    accentColor: "#3B82F6",
    Icon: Award,
  },
  {
    id: 3,
    title: "Premium Pet Safety Systems",
    subtitle:
      "Ultra-narrow spacing grids that keep active cats and dogs safe from high-altitude falls while ensuring fresh air and light.",
    tagline: "Cat & Dog Safe Balconies",
    ctaText: "View Pet Solutions",
    ctaLink: "/services/pet-safety-invisible-grills",
    ctaSecondaryText: "Get Free Quote",
    ctaSecondaryLink: "/contact#quote-form",
    bgImage: "/images/carousel.jpg",
    accentColor: "#10B981",
    Icon: CheckCircle,
  },
  {
    id: 4,
    title: "Modern French Window Protection",
    subtitle:
      "Tailor-made wire grids matching floor-to-ceiling glass profiles — open, bright, and absolutely secure.",
    tagline: "Architectural Elegance",
    ctaText: "Explore French Windows",
    ctaLink: "/services/french-window-invisible-grills",
    ctaSecondaryText: "Call Now",
    ctaSecondaryLink: "tel:+919912373373",
    bgImage: "/images/birdgrill.jpg",
    accentColor: "#8B5CF6",
    Icon: Star,
  },
  {
    id: 5,
    title: "Custom Grill Solutions for Every Space",
    subtitle:
      "From staircases to terraces — fully customised invisible grill designs crafted to fit any architecture.",
    tagline: "Fully Customisable Designs",
    ctaText: "Get Custom Quote",
    ctaLink: "/contact#quote-form",
    ctaSecondaryText: "View Gallery",
    ctaSecondaryLink: "/gallery",
    bgImage: "/images/customgrill.jpg",
    accentColor: "#F59E0B",
    Icon: Shield,
  },
  {
    id: 6,
    title: "Terrace Invisible Grills — Open Sky, Total Safety",
    subtitle:
      "Enjoy your rooftop terrace without barriers. Our terrace grills provide 360° protection while keeping your views completely unobstructed.",
    tagline: "Terrace Safety Specialist",
    ctaText: "Explore Terrace Grills",
    ctaLink: "/services/terrace-invisible-grills",
    ctaSecondaryText: "Get Free Quote",
    ctaSecondaryLink: "/contact#quote-form",
    bgImage: "/images/johnterracegrill.webp",
    accentColor: "#06B6D4",
    Icon: Star,
  },
];

const TOTAL = slides.length;

// ─── Component ───────────────────────────────────────────────────────────────
export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [progressKey, setProgressKey] = useState(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const dragStartX = useRef(0);

  // ── Autoplay — always running, resets on manual navigation ─────────────
  const resetTimer = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % TOTAL);
      setProgressKey((k) => k + 1);
    }, AUTOPLAY_DELAY);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => { if (autoplayRef.current) clearInterval(autoplayRef.current); };
  }, [resetTimer]);

  // ── Navigation ──────────────────────────────────────────────────────────
  const goTo = useCallback(
    (index: number, dir?: number) => {
      const resolvedDir = dir ?? (index > current ? 1 : -1);
      setDirection(resolvedDir);
      setCurrent((index + TOTAL) % TOTAL);
      setProgressKey((k) => k + 1);
      resetTimer();
    },
    [current, resetTimer]
  );

  const goPrev = useCallback(() => goTo(current - 1, -1), [current, goTo]);
  const goNext = useCallback(() => goTo(current + 1, 1), [current, goTo]);

  // ── Keyboard ───────────────────────────────────────────────────────────────
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goPrev, goNext]);

  // ── Touch swipe ──────────────────────────────────────────────────────────
  const onTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = dragStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) delta > 0 ? goNext() : goPrev();
  };

  // ── Slide variants ─────────────────────────────────────────────────────────
  const variants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "tween", ease: [0.25, 0.46, 0.45, 0.94], duration: TRANSITION_DURATION },
        opacity: { duration: 0.3 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: {
        x: { type: "tween", ease: [0.25, 0.46, 0.45, 0.94], duration: TRANSITION_DURATION },
        opacity: { duration: 0.2 },
      },
    }),
  };

  // ── Content animation ──────────────────────────────────────────────────────
  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: "easeOut" },
    }),
  };

  const slide = slides[current];
  const { Icon } = slide;

  return (
    <section
      aria-label="Hero image carousel"
      className="relative w-full h-[520px] sm:h-[640px] lg:h-[90vh] lg:min-h-[720px] overflow-hidden select-none bg-gray-900"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* ── Slides ──────────────────────────────────────────────────────────── */}
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={slide.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full"
          style={{ willChange: "transform" }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <Image
              src={slide.bgImage}
              alt={slide.title}
              fill
              priority={current === 0}
              loading={current === 0 ? "eager" : "lazy"}
              className="object-cover object-center lg:object-top scale-[1.04] hero-ken-burns brightness-[1.1] contrast-[1.02]"
              sizes="100vw"
              quality={85}
            />
          </div>

          {/* Gradient overlays — Lightened to reveal details */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none z-10 sm:hidden" />

          {/* Slide Content */}
          <div className="absolute inset-0 z-20 flex flex-col justify-end sm:justify-center pb-16 sm:pb-0">
            <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-10 lg:px-14">
              <div className="max-w-xl lg:max-w-2xl space-y-4 sm:space-y-5 lg:space-y-7">

                {/* Tagline badge */}
                <motion.div
                  custom={0.1}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/25 backdrop-blur-sm text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white"
                  style={{ background: `${slide.accentColor}35` }}
                >
                  <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span>{slide.tagline}</span>
                </motion.div>

                {/* Title */}
                <motion.h1
                  custom={0.22}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-extrabold text-white tracking-tight leading-[1.1] drop-shadow-lg"
                >
                  {slide.title}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  custom={0.34}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  className="hidden sm:block text-sm sm:text-base lg:text-lg text-white/80 font-medium leading-relaxed max-w-lg"
                >
                  {slide.subtitle}
                </motion.p>

                {/* CTAs */}
                <motion.div
                  custom={0.46}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  className="pt-1 sm:pt-2"
                >
                  {/* Mobile: Call + WhatsApp side-by-side, Request Quote centered below */}
                  {/* Desktop: all in one flex-wrap row */}
                  <div className="flex flex-wrap gap-3 sm:flex-nowrap sm:gap-3">

                    {/* Call Button */}
                    <a
                      href="tel:+919912373373"
                      className="flex items-center justify-center gap-2 text-white font-bold px-5 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl text-xs sm:text-sm flex-1 sm:flex-none"
                      style={{
                        background: slide.accentColor,
                        boxShadow: `0 4px 24px ${slide.accentColor}55`,
                      }}
                    >
                      <Phone className="w-4 h-4 shrink-0" />
                      <span>Call 99123 73373</span>
                    </a>

                    {/* WhatsApp Button */}
                    <a
                      href="https://wa.me/919912373373?text=Hi%20John%20Invisible%20Grills,%20I%20would%20like%20to%20request%20a%20free%20site%2520visit."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#10B981] text-white font-bold px-5 py-3 rounded-full hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl text-xs sm:text-sm flex-1 sm:flex-none"
                    >
                      <MessageSquare className="w-4 h-4 fill-white/10 shrink-0" />
                      <span>WhatsApp Quote</span>
                    </a>

                    {/* Request Quote — full width below on mobile, inline on desktop */}
                    <Link
                      href="#quote-form"
                      className="flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold px-5 py-3 rounded-full transition-all border border-white/30 backdrop-blur-xs text-xs sm:text-sm w-full sm:w-auto"
                    >
                      <span>Request Quote</span>
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ── Navigation Arrows ────────────────────────────────────────────────── */}
      <button
        onClick={goPrev}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30 group w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-black/25 hover:bg-white hover:scale-110 active:scale-95 border border-white/20 backdrop-blur-sm shadow-lg"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-gray-900 transition-colors" />
      </button>

      <button
        onClick={goNext}
        aria-label="Next slide"
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 group w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-black/25 hover:bg-white hover:scale-110 active:scale-95 border border-white/20 backdrop-blur-sm shadow-lg"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-gray-900 transition-colors" />
      </button>

      {/* ── Pagination Dots ──────────────────────────────────────────────────── */}
      <div
        className="absolute bottom-5 sm:bottom-7 left-0 right-0 z-30 flex items-center justify-center gap-2"
        role="tablist"
        aria-label="Slide navigation"
      >
        {slides.map((_, idx) => {
          const isActive = idx === current;
          return (
            <button
              key={idx}
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => goTo(idx)}
              className={`relative overflow-hidden rounded-full transition-all duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
                isActive
                  ? "w-8 sm:w-10 h-2 sm:h-2.5 bg-white/30"
                  : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/40 hover:bg-white/70"
              }`}
            >
              {isActive && (
                <span
                  key={progressKey}
                  className="absolute inset-0 rounded-full origin-left bg-white hero-progress-fill"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* ── Slide counter ─────────────────────────────────────────────────────── */}
      <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-30 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-sm border border-white/10">
        <span className="text-white font-bold text-xs tabular-nums">
          {String(current + 1).padStart(2, "0")}
        </span>
        <span className="text-white/40 text-xs">/</span>
        <span className="text-white/50 text-xs tabular-nums">
          {String(TOTAL).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}

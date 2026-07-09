"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Shield, Award, CheckCircle } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  tagline: string;
  ctaText: string;
  ctaLink: string;
  bgImage: string;
  gradient: string;
  icon: React.ReactNode;
}

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const slides: Slide[] = [
    {
      id: 1,
      title: "Premium Invisible Grills for Modern Homes",
      subtitle: "Unblocked views, maximum ventilation, and absolute family protection. Made with high-tensile marine-grade SS 316 steel wires.",
      tagline: "Safety Without Enclosure",
      ctaText: "Get Free Quote",
      ctaLink: "/contact#quote-form",
      bgImage: "/images/carousel.webp",
      gradient: "from-black/90 via-black/60 to-transparent",
      icon: <Shield className="text-brass w-5 h-5" />
    },
    {
      id: 2,
      title: "Absolute Child Safety for Balconies & Windows",
      subtitle: "Narrow-gap structural wire grids engineered to withstand up to 400kg tension. Keep your curious toddlers safe in high-rise apartments.",
      tagline: "Toddler & Kids Safety Specialist",
      ctaText: "Book Site Visit",
      ctaLink: "/contact#quote-form",
      bgImage: "/images/johnterracegrill.webp",
      gradient: "from-black/90 via-black/55 to-transparent",
      icon: <Award className="text-brass w-5 h-5" />
    },
    {
      id: 3,
      title: "Premium Pet Safety Systems",
      subtitle: "Ultra-narrow spacing grids that keep active cats and dogs safe from high-altitude falls while ensuring fresh air and light.",
      tagline: "Cat & Dog Safe Balconies",
      ctaText: "View Pet Solutions",
      ctaLink: "/services/pet-safety-invisible-grills",
      bgImage: "/images/carousel3.webp",
      gradient: "from-black/95 via-black/60 to-transparent",
      icon: <CheckCircle className="text-brass w-5 h-5" />
    },
    {
      id: 4,
      title: "Modern French Window Protection",
      subtitle: "Tailor-made wire grids matching floor-to-ceiling glass profiles. Keep your premium interiors open, bright, and secure.",
      tagline: "Architectural Elegance",
      ctaText: "Explore French Windows",
      ctaLink: "/services/french-window-invisible-grills",
      bgImage: "/images/birdgrill.jpg",
      gradient: "from-black/90 via-black/60 to-transparent",
      icon: <Shield className="text-brass w-5 h-5" />
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000); // 6 seconds auto-rotate
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => setIsPaused(false);

  return (
    <div 
      className="relative w-full aspect-[4/5] sm:aspect-auto sm:h-[600px] md:h-[650px] lg:h-[700px] overflow-hidden bg-graphite select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={handleTouchStart}
      onMouseLeave={handleTouchEnd}
    >
      <div 
        className="flex h-full w-full transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className="relative w-full h-full flex-shrink-0"
              aria-hidden={!isActive}
            >
              {/* Background Image with zoom animation */}
              <div className="absolute inset-0 w-full h-full">
                <motion.div
                  initial={false}
                  animate={{ scale: isActive && !shouldReduceMotion ? 1 : 1.05 }}
                  transition={{ duration: 6, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={slide.bgImage}
                    alt={slide.title}
                    fill
                    priority // Preloads all images since they are in the DOM
                    className="object-cover object-[70%_center] md:object-center"
                    sizes="100vw"
                  />
                </motion.div>
                {/* Dark & Gradient Overlay for readability */}
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent sm:hidden" />
                <div className="absolute inset-0 bg-black/35" />
              </div>

            {/* Slide Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-white">
              <div className="max-w-xl md:max-w-2xl space-y-6">
                <motion.div
                  initial={false}
                  animate={isActive && !shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ delay: isActive ? 0.2 : 0, duration: 0.5 }}
                  className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-bold uppercase tracking-wider text-brass"
                >
                  {slide.icon}
                  <span>{slide.tagline}</span>
                </motion.div>
                
                <motion.h1
                  initial={false}
                  animate={isActive && !shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: isActive ? 0.3 : 0, duration: 0.6 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
                >
                  {slide.title}
                </motion.h1>
                
                <motion.p
                  initial={false}
                  animate={isActive && !shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: isActive ? 0.4 : 0, duration: 0.6 }}
                  className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed font-medium"
                >
                  {slide.subtitle}
                </motion.p>
                
                <motion.div
                  initial={false}
                  animate={isActive && !shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: isActive ? 0.5 : 0, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 pt-2"
                >
                  <Link
                    href={slide.ctaLink}
                    className={`bg-brass hover:bg-white hover:text-graphite text-white font-bold tracking-wide uppercase px-8 py-4 rounded-xs shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                      !isActive ? "pointer-events-none" : ""
                    }`}
                  >
                    <span>{slide.ctaText}</span>
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href="tel:+919912373373"
                    className={`border border-white/30 bg-white/5 backdrop-blur-xs hover:bg-white/20 text-white font-bold tracking-wide uppercase px-8 py-4 rounded-xs transition-all duration-300 text-center ${
                      !isActive ? "pointer-events-none" : ""
                    }`}
                  >
                    Call Now: 9912373373
                  </a>
                </motion.div>
              </div>
            </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-brass text-white p-2.5 rounded-full backdrop-blur-xs border border-white/10 transition-colors duration-200 focus:outline-none"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-brass text-white p-2.5 rounded-full backdrop-blur-xs border border-white/10 transition-colors duration-200 focus:outline-none"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
              idx === currentSlide ? "w-8 bg-brass" : "w-2 bg-white/40 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Star, ShieldCheck, ChevronDown, Phone } from "lucide-react";
import Button from "@/components/UI/Button";

const heroImages = [
  "/images/carousl2.jpg",
  "/images/carousel3.jpg",
  "/images/customgrill.jpg",
  "/images/carousel.jpg",
  "/images/hero_balcony_grill.png",
];

export default function Hero() {
  const ref = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-looping carousel logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, []);

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x > 50) {
      setCurrentImageIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
    } else if (info.offset.x < -50) {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={ref} className="relative w-full h-screen min-h-[500px] sm:min-h-[700px] flex items-center justify-center overflow-hidden bg-background selection:bg-primary/30">

      {/* Background Architectural Carousel (Fixed Crossfade) */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 1.2, ease: "easeInOut" },
              scale: { duration: 8, ease: "linear" }
            }}
            className="absolute inset-0 touch-pan-y"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
          >
            <Image
              src={heroImages[currentImageIndex]}
              alt="Premium Invisible Grill Installation"
              fill
              priority={currentImageIndex === 0}
              quality={100}
              className="object-cover object-top"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        {/* Soft Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 pointer-events-none sm:hidden" />
      </div>

      {/* Floating Glass Cards / Badges */}
      <div className="absolute inset-0 z-20 pointer-events-none max-w-[1400px] mx-auto px-6 lg:px-10 hidden lg:block">

        {/* Google Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          className="absolute top-32 right-12 glass-badge px-4 py-3 rounded-2xl flex items-center space-x-3 pointer-events-auto"
        >
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
            <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
          </div>
          <div>
            <div className="flex items-center space-x-1">
              <span className="font-bold text-foreground">5.0</span>
              <div className="flex text-yellow-400">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </div>
            </div>
            <span className="text-xs font-medium text-gray-500">Google Reviews</span>
          </div>
        </motion.div>

        {/* Floating Statistic */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 right-20 glass-badge px-6 py-4 rounded-2xl flex flex-col items-center pointer-events-auto"
        >
          <span className="text-3xl font-extrabold text-primary">400<span className="text-xl">kg</span></span>
          <span className="text-xs font-bold text-gray-600 uppercase tracking-wider mt-1">Tensile Strength</span>
        </motion.div>
      </div>



      {/* Main Content (Masterclass Premium Animated Top Text) */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-start pointer-events-none px-6 pt-32 sm:pt-48 md:pt-56">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col items-center text-center space-y-4 sm:space-y-6 max-w-4xl"
        >
          {/* Cinematic Headline */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] drop-shadow-2xl"
          >
            Seamless <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300">Safety.</span><br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Flawless <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#ffdf73]">Views.</span>
          </motion.h1>

          {/* Meaningful Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="text-base sm:text-lg lg:text-xl text-gray-200 font-medium max-w-2xl leading-relaxed drop-shadow-md px-4"
          >
            Protect your loved ones with premium 316 marine-grade stainless steel invisible grills, preserving the beauty of your home without compromise.
          </motion.p>

          {/* Re-animating Mobile Number */}
          <div className="pt-8 h-[80px] flex md:hidden items-center justify-center overflow-hidden w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, x: -60, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 60, scale: 0.95 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/20 shadow-2xl pointer-events-auto hover:bg-white/20 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-[#1E6AE9] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={20} className="text-white fill-current" />
                </div>
                <a href="tel:+919912373373" className="text-white font-extrabold text-xl sm:text-3xl tracking-widest">
                  991 237 3373
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Main Content (Masterclass Premium Animated Bottom Buttons) */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-end pointer-events-none px-6 pb-32 sm:pb-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col items-center text-center space-y-6 sm:space-y-8 max-w-5xl pointer-events-auto"
        >



          {/* Premium Animated Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
            className="pt-6 sm:pt-10 flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
          >
            <a
              href="https://wa.me/919912373373?text=Hi%20John%20Invisible%20Grills,%20I%20would%20like%20to%20book%20a%20free%20site%20visit%20for%20invisible%20grills."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-10 py-4.5 min-h-[56px] text-sm font-bold text-white transition-all duration-500 bg-[#25D366]/20 border border-[#25D366]/50 backdrop-blur-lg rounded-full overflow-hidden hover:scale-105 hover:shadow-[0_0_40px_rgba(37,211,102,0.4)] w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center space-x-2 tracking-[0.1em] uppercase group-hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.792 1.451 5.485.002 9.952-4.466 9.955-9.956.002-2.661-1.026-5.163-2.898-7.036-1.874-1.874-4.377-2.903-7.039-2.904-5.489 0-9.957 4.468-9.96 9.959-.002 1.701.444 3.364 1.294 4.814l-.973 3.553 3.641-.956zm10.963-7.399c-.3-.15-1.77-.875-2.046-.975-.276-.1-.477-.15-.677.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-1.25-.625-2.046-1.25-2.868-2.663-.175-.3-.075-.463.075-.613.138-.138.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.677-1.631-.927-2.231-.243-.587-.492-.507-.677-.516-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8.376-.275.3-1.05 1.026-1.05 2.502 0 1.477 1.075 2.903 1.225 3.102.15.2 2.11 3.22 5.111 4.517.714.309 1.272.494 1.707.633.717.228 1.368.196 1.884.118.575-.088 1.77-.724 2.02-1.427.25-.702.25-1.3.175-1.427-.075-.125-.275-.2-.575-.35z" />
                </svg>
                <span>Book a Free Site Visit</span>
              </span>
              <div className="absolute inset-0 h-full w-full bg-[#25D366] scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-x-100"></div>
            </a>
            
            <a
              href="/works"
              className="inline-flex items-center justify-center px-10 py-4.5 min-h-[56px] text-sm font-bold text-white transition-all duration-300 border border-white/20 bg-black/40 backdrop-blur-md rounded-full hover:bg-white/20 hover:border-white/50 hover:scale-105 w-full sm:w-auto tracking-[0.15em] uppercase"
            >
              View Portfolio
            </a>
          </motion.div>
        </motion.div>
      </div>
      {/* Carousel Navigation Dots */}
      <div className="absolute bottom-16 right-10 z-30 hidden lg:flex space-x-3 pointer-events-auto">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImageIndex(idx)}
            className={`transition-all duration-300 rounded-full ${idx === currentImageIndex ? "w-8 h-2 bg-primary" : "w-2 h-2 bg-white/50 hover:bg-white/80"
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 hidden sm:flex flex-col items-center text-white/50 space-y-2 pointer-events-none"
      >
        <span className="text-xs font-bold uppercase tracking-widest">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>

      {/* Infinite Scrolling Ticker (Bottom Bar) */}
      <div className="absolute bottom-0 w-full z-40 bg-black/70 backdrop-blur-md border-t border-white/10 py-3.5 overflow-hidden flex items-center pointer-events-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {/* Duplicate the items array to create a seamless infinite loop */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center space-x-12 px-6 shrink-0">
              <span className="text-white text-xs sm:text-sm font-bold uppercase tracking-[0.2em] flex items-center space-x-2">
                <ShieldCheck size={16} className="text-primary" />
                <span>ISO 9001:2015 Certified</span>
              </span>
              <span className="text-[#25D366] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] flex items-center space-x-2">
                <Star size={16} className="fill-current" />
                <span>Free Site Visit</span>
              </span>
              <span className="text-white text-xs sm:text-sm font-bold uppercase tracking-[0.2em] flex items-center space-x-2">
                <ShieldCheck size={16} className="text-primary" />
                <span>316 Marine Grade Steel</span>
              </span>
              <span className="text-[#1E6AE9] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] flex items-center space-x-2">
                <span>Call: 991 237 3373</span>
              </span>
              <span className="text-white text-xs sm:text-sm font-bold uppercase tracking-[0.2em] flex items-center space-x-2">
                <Star size={16} className="text-primary fill-primary" />
                <span>Lifetime Warranty</span>
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

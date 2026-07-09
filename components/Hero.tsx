"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Star, ShieldCheck, ChevronDown } from "lucide-react";
import Button from "@/components/UI/Button";

const heroImages = [
  "/images/carousl2.webp",
  "/images/carousel3.webp",
  "/images/customgrill.jpg",
  "/images/carousel.webp",
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

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={ref} className="relative w-full h-screen min-h-[500px] sm:min-h-[700px] flex items-center justify-center overflow-hidden bg-background selection:bg-primary/30">
      
      {/* Background Architectural Carousel with Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentImageIndex]}
              alt="Premium Invisible Grill Installation"
              fill
              priority={currentImageIndex === 0}
              className="object-cover object-[center_20%] md:object-center"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        {/* Soft Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 pointer-events-none sm:hidden" />
      </motion.div>

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
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
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

      {/* Main Content */}
      <motion.div 
        style={{ y: textY }}
        className="relative z-30 max-w-[1400px] w-full mx-auto px-6 lg:px-10 flex flex-col justify-end sm:justify-center h-full pb-24 sm:pb-0 pt-32 sm:pt-20 pointer-events-none"
      >
        <div className="max-w-3xl space-y-5 sm:space-y-8 pointer-events-auto mt-auto sm:mt-0">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white shadow-sm"
          >
            <ShieldCheck size={16} className="text-primary" />
            <span className="text-xs font-bold uppercase tracking-widest">Premium Safety Solutions</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]"
          >
            Architectural Safety, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Uncompromised Views.
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed max-w-2xl"
          >
            Elevate your home with our high-tensile 316 marine-grade stainless steel invisible grills. Maximum ventilation, absolute family protection, and zero enclosure feeling.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-5 pt-4"
          >
            <Button href="/contact#quote-form" variant="primary">
              Book a Site Visit
            </Button>
            <Button href="/works" variant="secondary">
              View Our Portfolio
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 hidden sm:flex flex-col items-center text-white/50 space-y-2 pointer-events-none"
      >
        <span className="text-xs font-bold uppercase tracking-widest">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>

      {/* Carousel Navigation Dots */}
      <div className="absolute bottom-10 right-10 z-30 hidden lg:flex space-x-3 pointer-events-auto">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImageIndex(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === currentImageIndex ? "w-8 h-2 bg-primary" : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

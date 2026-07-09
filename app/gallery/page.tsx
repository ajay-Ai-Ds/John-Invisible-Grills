"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2, Shield } from "lucide-react";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: string;
}

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: "/images/balconygrill.webp",
      title: "Premium Balcony Invisible Grills in Gachibowli",
      category: "Balcony Solutions"
    },
    {
      id: 2,
      src: "/images/childrengrill.jpg",
      title: "Child Safety Balcony Grill in Miyapur",
      category: "Child Safety"
    },
    {
      id: 3,
      src: "/images/service_pet_safety.png",
      title: "Pet Protection Safety Wires in Kondapur",
      category: "Pet Safety"
    },
    {
      id: 4,
      src: "/images/windowgrill.webp",
      title: "Window Invisible Grill Installation in Kukatpally",
      category: "Window Solutions"
    },
    {
      id: 5,
      src: "/images/customgrill.jpg",
      title: "French Window Safety Wires in Hitech City",
      category: "Window Solutions"
    },
    {
      id: 6,
      src: "/images/antibirdbalcony.webp",
      title: "Anti-Pigeon Safety Grill Wires in Nizampet",
      category: "Bird Protection"
    },
    {
      id: 7,
      src: "/images/service_terrace.png",
      title: "Rooftop Terrace Safety Wires in Kokapet",
      category: "Terrace Solutions"
    },
    {
      id: 8,
      src: "/images/service_staircase.png",
      title: "Floating Marble Staircase Safety Wires in Jubilee Hills",
      category: "Staircase Safety"
    },
    {
      id: 9,
      src: "/images/villagrill.jpg",
      title: "Luxury Villa Balcony Safety Wires in Tellapur",
      category: "Villa Solutions"
    }
  ];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-graphite text-white py-16 md:py-20 relative overflow-hidden select-none">
        <div className="absolute inset-0 opacity-5 bg-repeating-linear-gradient" style={{
          backgroundImage: "repeating-linear-gradient(45deg, #B08D57 0px, #B08D57 1px, transparent 1px, transparent 18px)"
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs font-bold text-brass uppercase tracking-widest block">Project Showcase</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Our Installation Gallery
          </h1>
          <p className="text-sm text-gray-300 max-w-xl mx-auto font-medium">
            Explore verified photos of our invisible safety grill installations across balconies, windows, and staircases in Hyderabad.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative h-80 rounded-lg overflow-hidden border border-gray-150 shadow-xs cursor-pointer bg-graphite"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                loading="lazy"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Overlay Hover Details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 select-none">
                <span className="text-xxs font-bold text-brass uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                <span className="text-[10px] text-gray-400 flex items-center space-x-1">
                  <Maximize2 size={10} />
                  <span>Click to view large</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X size={32} />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors focus:outline-none"
            aria-label="Previous Image"
          >
            <ChevronLeft size={36} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors focus:outline-none"
            aria-label="Next Image"
          >
            <ChevronRight size={36} />
          </button>

          {/* Image Display */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl h-[70vh] flex flex-col items-center justify-center select-none"
          >
            <div className="relative w-full h-full">
              <Image
                src={galleryItems[currentIndex].src}
                alt={galleryItems[currentIndex].title}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
            
            {/* Lightbox caption */}
            <div className="text-center mt-4 space-y-1 text-white">
              <span className="text-xxs font-bold text-brass uppercase tracking-widest block">
                {galleryItems[currentIndex].category}
              </span>
              <h4 className="text-sm font-bold">
                {galleryItems[currentIndex].title}
              </h4>
            </div>
          </div>
        </div>
      )}

      {/* Certifications Banner Section */}
      <section className="bg-warm-bg py-16 border-t border-gray-150">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="p-3 bg-white border border-gray-150 rounded-full w-fit mx-auto">
            <Shield className="text-brass w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-graphite uppercase tracking-wide">
            100% Certified SS 316 Stainless Steel Core Wires
          </h3>
          <p className="text-xs text-steel max-w-lg mx-auto leading-relaxed">
            All photos shown are genuine installations by John Invisible Grills in Hyderabad. We only use high-tensile 316 marine-grade steel wires coated with UV-resistant nylon membrane to prevent scaling, rust, and cuts.
          </p>
        </div>
      </section>
    </div>
  );
}

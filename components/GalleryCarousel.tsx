"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowRight, Maximize2 } from "lucide-react";

const galleryImages = [
  { src: "/images/carousel.jpg", alt: "Invisible Grill Showcase 1", isProject: false },
  { src: "/images/carousl2.jpg", alt: "Invisible Grill Showcase 2", isProject: false },
  { src: "/images/carousel3.jpg", alt: "Invisible Grill Showcase 3", isProject: false },
  { src: "/works/work-gachibowli-french-window.png", alt: "Gachibowli French Window Invisible Grill", isProject: true },
  { src: "/works/work-hitech-pet-safety.png", alt: "Hitech City Pet Safety Grill", isProject: true },
  { src: "/works/work-jubilee-terrace.png", alt: "Jubilee Hills Terrace Grill", isProject: true },
  { src: "/works/work-kondapur-balcony.png", alt: "Kondapur Balcony Safety", isProject: true },
  { src: "/works/work-kphb-balcony.png", alt: "KPHB Balcony Installation", isProject: true },
  { src: "/works/work-madhapur-staircase.png", alt: "Madhapur Staircase Grill", isProject: true },
  { src: "/images/installation_closeup.png", alt: "Invisible Grill Installation Closeup", isProject: false },
  { src: "/images/customgrill.jpg", alt: "Custom Invisible Grill Design", isProject: false },
  { src: "/images/service_balcony.png", alt: "Premium Balcony Safety", isProject: false },
  { src: "/images/service_villa.png", alt: "Luxury Villa Invisible Grill", isProject: false },
];

export default function GalleryCarousel() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  // We duplicate the images to create a seamless infinite loop
  const duplicatedImages = [...galleryImages, ...galleryImages];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div className="space-y-4 max-w-2xl">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block">Showcase</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Our Gallery & Recent Projects
          </h2>
          <p className="text-base text-gray-500 font-medium leading-relaxed">
            Explore our premium installations across luxury apartments and villas. Experience the perfect blend of architectural aesthetics and robust safety.
          </p>
        </div>
        <Link
          href="/gallery"
          className="inline-flex items-center space-x-2 text-sm font-bold bg-foreground text-white px-6 py-3 rounded-full hover:bg-primary transition-colors flex-shrink-0 w-fit"
        >
          <span>View Full Gallery</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Infinite Carousel Container */}
      <div className="relative w-full overflow-hidden group">
        {/* Fading Edges for premium look */}
        <div className="absolute top-0 left-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex gap-4 w-max animate-infinite-scroll">
          {duplicatedImages.map((image, idx) => (
            <div
              key={idx}
              className="relative w-[calc(50vw-24px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-24px)] xl:w-[260px] aspect-[4/3] flex-shrink-0 cursor-pointer overflow-hidden rounded-[16px] shadow-sm hover:shadow-lg transition-shadow border border-black/5"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full text-foreground shadow-sm transform scale-90 hover:scale-100 transition-transform">
                  <Maximize2 size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-300">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          <div className="relative w-full max-w-5xl aspect-square sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
          
          {selectedImage.isProject && (
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
              <Link
                href="/gallery"
                onClick={() => setSelectedImage(null)}
                className="flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-primary/90 transition-colors"
              >
                <span>View Project Details</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

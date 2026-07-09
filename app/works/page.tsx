"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  CalendarDays,
  CheckCircle,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Filter,
  Star,
} from "lucide-react";

interface WorkProject {
  id: number;
  image: string;
  title: string;
  location: string;
  locality: string;
  type: string;
  category: string;
  completedDate: string;
  details: string[];
  rating: number;
  clientName: string;
}

const projects: WorkProject[] = [
  {
    id: 1,
    image: "/works/work-kphb-balcony.png",
    title: "High-Rise Balcony Safety Grills",
    location: "KPHB Colony, Kukatpally",
    locality: "Kukatpally",
    type: "Balcony Invisible Grills",
    category: "Balcony",
    completedDate: "June 2025",
    details: ["SS 316 marine-grade cable", "2-inch gap spacing", "4-sided track system", "1-year warranty"],
    rating: 5,
    clientName: "Mr. Ravi K.",
  },
  {
    id: 2,
    image: "/works/work-gachibowli-french-window.png",
    title: "French Window Child Safety Grills",
    location: "My Home Vihanga, Gachibowli",
    locality: "Gachibowli",
    type: "French Window Invisible Grills",
    category: "Window",
    completedDate: "May 2025",
    details: ["Floor-to-ceiling cable coverage", "Child-safe 2-inch gap", "Nylon-coated cables", "Same-day installation"],
    rating: 5,
    clientName: "Mrs. Ananya R.",
  },
  {
    id: 3,
    image: "/works/work-kondapur-balcony.png",
    title: "Luxury Balcony Invisible Grills",
    location: "Aparna Sarovar, Kondapur",
    locality: "Kondapur",
    type: "Balcony Invisible Grills",
    category: "Balcony",
    completedDate: "May 2025",
    details: ["High-tensile SS 316 wires", "Open city view preserved", "Rust-proof fittings", "Professional team"],
    rating: 5,
    clientName: "Mr. Suresh M.",
  },
  {
    id: 4,
    image: "/works/work-hitech-pet-safety.png",
    title: "Pet Safety Window Grills",
    location: "Prestige High Fields, Hitech City",
    locality: "Hitech City",
    type: "Pet Safety Invisible Grills",
    category: "Pet Safety",
    completedDate: "April 2025",
    details: ["Narrow 1.5-inch gap for pets", "Tension-tested cables", "Anti-escape design", "Transparent finish"],
    rating: 5,
    clientName: "Ms. Priya N.",
  },
  {
    id: 5,
    image: "/works/work-madhapur-staircase.png",
    title: "Interior Staircase Safety Railing",
    location: "Vertex Villa, Madhapur",
    locality: "Madhapur",
    type: "Staircase Invisible Grills",
    category: "Staircase",
    completedDate: "April 2025",
    details: ["Custom curved track fitting", "Vertical cable arrangement", "Child-fall prevention", "Premium matte finish"],
    rating: 5,
    clientName: "Mr. Kiran B.",
  },
  {
    id: 6,
    image: "/works/work-jubilee-terrace.png",
    title: "Rooftop Terrace Safety Enclosure",
    location: "Green Villas, Jubilee Hills",
    locality: "Jubilee Hills",
    type: "Terrace Invisible Grills",
    category: "Terrace",
    completedDate: "March 2025",
    details: ["Full perimeter coverage", "400kg tensile strength", "Wind-resistant installation", "10-year cable warranty"],
    rating: 5,
    clientName: "Mr. Aditya S.",
  },
];

const categories = ["All", "Balcony", "Window", "Pet Safety", "Staircase", "Terrace"];

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "8+", label: "Years Experience" },
  { number: "50+", label: "Areas Covered" },
];

export default function RecentWorksPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);
  const prevImage = () => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);
  const nextImage = () => setLightboxIndex((i) => (i + 1) % filtered.length);

  return (
    <div className="w-full">
      {/* ── Hero Banner ── */}
      <section className="relative bg-graphite overflow-hidden py-20 md:py-28 select-none">
        {/* Animated diagonal pink-blue gradient background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "repeating-linear-gradient(-45deg, #E91E8C 0px, #E91E8C 1px, transparent 1px, transparent 18px)",
          }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: "linear-gradient(135deg, #E91E8C 0%, #1E6AE9 100%)",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block text-xs font-bold text-brass uppercase tracking-widest bg-brass/10 px-4 py-1.5 rounded-full border border-brass/20">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Our Recent{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #E91E8C 0%, #1E6AE9 100%)",
              }}
            >
              Completed Works
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A showcase of premium invisible grill installations completed across Hyderabad by our expert team. Every project is backed by our craftsmanship guarantee.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/contact#quote-form"
              className="bg-brass hover:bg-white hover:text-graphite text-white font-bold tracking-wide uppercase px-8 py-3.5 rounded-xs shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+919912373373"
              className="border border-white/30 bg-white/5 hover:bg-white/10 text-white font-bold tracking-wide uppercase px-8 py-3.5 rounded-xs transition-all duration-300"
            >
              Call: 9912373373
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="bg-brass py-8 select-none">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-extrabold">{s.number}</div>
                <div className="text-sm font-medium opacity-80 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filter Tabs ── */}
      <section className="py-10 bg-white border-b border-gray-100 sticky top-[80px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide">
            <Filter size={16} className="text-brass flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-bold tracking-wide uppercase transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-brass text-white shadow-md"
                    : "bg-gray-100 text-graphite hover:bg-brass/10 hover:text-brass"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects Grid ── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, idx) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Image */}
              <div
                className="relative w-full aspect-video overflow-hidden cursor-pointer"
                onClick={() => openLightbox(idx)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                {/* Category badge */}
                <span className="absolute top-3 left-3 bg-brass text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {project.category}
                </span>
                {/* Expand icon */}
                <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Maximize2 size={14} />
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Location */}
                <div className="flex items-center space-x-1.5 text-steel text-xs font-medium">
                  <MapPin size={13} className="text-brass" />
                  <span>{project.location}</span>
                </div>

                <h2 className="text-lg font-extrabold text-graphite leading-snug">
                  {project.title}
                </h2>

                {/* Type & Date */}
                <div className="flex items-center justify-between text-xs text-steel">
                  <span className="font-semibold text-graphite/70">{project.type}</span>
                  <div className="flex items-center space-x-1">
                    <CalendarDays size={12} className="text-brass" />
                    <span>{project.completedDate}</span>
                  </div>
                </div>

                {/* Details checklist */}
                <ul className="grid grid-cols-2 gap-1.5">
                  {project.details.map((d, i) => (
                    <li key={i} className="flex items-start space-x-1.5 text-xs text-steel">
                      <CheckCircle size={12} className="text-brass flex-shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                {/* Client & Rating */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-steel font-medium">Completed for</p>
                    <p className="text-sm font-bold text-graphite">{project.clientName}</p>
                  </div>
                  <div className="flex text-brass">
                    {Array.from({ length: project.rating }).map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-steel">
            <p className="text-lg font-semibold">No projects in this category yet.</p>
          </div>
        )}
      </section>

      {/* ── CTA Banner ── */}
      <section
        className="py-20 relative overflow-hidden select-none"
        style={{ background: "linear-gradient(135deg, #E91E8C 0%, #1E6AE9 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 16px)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Ready to Transform Your Home?
          </h2>
          <p className="text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            Join 500+ happy families across Hyderabad who trust John Invisible Grills for safety, beauty, and peace of mind. Book your free site visit today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <Link
              href="/contact#quote-form"
              className="w-full sm:w-auto bg-white text-graphite font-bold tracking-wide uppercase px-8 py-4 rounded-xs shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Book Free Site Visit</span>
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+919912373373"
              className="w-full sm:w-auto border-2 border-white/50 text-white font-bold tracking-wide uppercase px-8 py-4 rounded-xs hover:bg-white/10 transition-all duration-300 text-center"
            >
              Call: 9912373373
            </a>
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightboxOpen && filtered[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white/70 hover:text-white p-2 transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X size={28} />
            </button>

            {/* Image */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden">
              <Image
                src={filtered[lightboxIndex].image}
                alt={filtered[lightboxIndex].title}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Caption */}
            <div className="mt-4 flex items-center justify-between text-white">
              <div>
                <p className="font-bold text-lg">{filtered[lightboxIndex].title}</p>
                <p className="text-sm text-white/60 flex items-center space-x-1 mt-0.5">
                  <MapPin size={12} />
                  <span>{filtered[lightboxIndex].location}</span>
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={prevImage}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

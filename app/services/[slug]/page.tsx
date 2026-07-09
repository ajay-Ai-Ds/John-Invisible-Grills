import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Check, Sparkles, MapPin, ChevronRight, Phone } from "lucide-react";
import { servicesData, Service } from "@/lib/servicesData";
import { locationsData } from "@/lib/locationsData";
import ContactForm from "@/components/ContactForm";
import Accordion from "@/components/UI/Accordion";

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static params for all 14 services to enable Static Site Generation (SSG)
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug
  }));
}

// Dynamic SEO metadata generation
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDesc,
    alternates: {
      canonical: `/services/${slug}`
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDesc,
      url: `https://johninvisiblegrills.com/services/${slug}`,
      type: "article"
    }
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Get 4 other related services for internal linking
  const relatedServices = servicesData.filter((s) => s.slug !== slug).slice(0, 4);

  // Get 8 popular locations to link to
  const popularLocations = locationsData.slice(0, 8);

  return (
    <article className="w-full">
      {/* Page Header */}
      <section className="bg-graphite text-white py-16 md:py-20 relative overflow-hidden select-none">
        <div className="absolute inset-0 opacity-5 bg-repeating-linear-gradient" style={{
          backgroundImage: "repeating-linear-gradient(45deg, #B08D57 0px, #B08D57 1px, transparent 1px, transparent 18px)"
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 text-center lg:text-left space-y-4">
              <div className="inline-flex items-center space-x-2 bg-brass/25 border border-brass/35 text-brass text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-sm">
                <ShieldCheck size={12} />
                <span>Premium Safety Solution</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                {service.title}
              </h1>
              <p className="text-sm text-gray-300 max-w-2xl font-medium">
                {service.shortDesc}
              </p>
            </div>
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative w-full max-w-xs mx-auto aspect-square lg:aspect-auto lg:h-80 lg:max-w-md rounded-lg overflow-hidden border border-brass/20 shadow-xl bg-graphite/50">
                <Image
                  src={service.image}
                  alt={`${service.title} in Hyderabad`}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Detailed Info Column */}
          <div className="lg:col-span-2 space-y-10">
            {/* Long Description */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-graphite uppercase tracking-wide border-b border-gray-150 pb-2">
                Overview & Safety Performance
              </h2>
              <p className="text-sm text-steel leading-relaxed">
                {service.longDesc}
              </p>
            </div>

            {/* Benefits & Key Advantages */}
            <div className="space-y-4 bg-warm-bg p-6 rounded-lg border border-gray-100 shadow-xs">
              <h2 className="text-xl font-bold text-graphite uppercase tracking-wide flex items-center space-x-2">
                <Sparkles className="text-brass w-5 h-5" />
                <span>Key Benefits & Features</span>
              </h2>
              <ul className="space-y-3.5 pt-2">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-xs text-steel">
                    <Check className="text-brass w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service-Specific FAQs */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-graphite uppercase tracking-wide border-b border-gray-150 pb-2">
                Frequently Asked Questions
              </h2>
              <Accordion items={service.faqs} />
            </div>

            {/* Internal Links to Locations */}
            <div className="space-y-4 pt-6">
              <h3 className="text-xs font-bold text-brass uppercase tracking-widest flex items-center space-x-1.5">
                <MapPin size={14} />
                <span>Service Locations across Hyderabad</span>
              </h3>
              <p className="text-xxs text-steel leading-relaxed">
                We install {service.title} in all residential and commercial buildings across Hyderabad. Our KPHB head office ensures fast delivery in Kukatpally, Miyapur, Kondapur, and Gachibowli. Select your area below for details:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {popularLocations.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/locations/${loc.slug}`}
                    className="text-xxs bg-white hover:bg-brass hover:text-white border border-gray-200 px-3 py-1.5 rounded-sm transition-all text-steel font-medium shadow-xxs"
                  >
                    {loc.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Form & Sidebar Column */}
          <div className="space-y-8">
            {/* Embedded Form (Prefilled with service name) */}
            <div className="sticky top-28">
              <ContactForm embedded={true} prefilledService={service.title} />
              
              {/* Quick Call Out */}
              <div className="mt-6 bg-graphite text-white p-6 rounded-lg border border-brass/25 relative overflow-hidden select-none">
                <div className="absolute inset-0 opacity-5 bg-repeating-linear-gradient" style={{
                  backgroundImage: "repeating-linear-gradient(45deg, #B08D57 0px, #B08D57 1px, transparent 1px, transparent 12px)"
                }} />
                <div className="relative z-10 space-y-4 text-center">
                  <h4 className="text-sm font-bold text-brass uppercase tracking-wider">Need Immediate Help?</h4>
                  <p className="text-xxs text-gray-300 leading-relaxed">
                    Our safety consultants from Kukatpally are available for immediate calls.
                  </p>
                  <a
                    href="tel:+919912373373"
                    className="block bg-brass hover:bg-white hover:text-graphite text-white font-bold text-xs uppercase py-3 rounded-sm transition-colors"
                  >
                    Call HQ: 9912373373
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services List */}
      <section className="bg-warm-bg py-16 border-t border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-graphite uppercase tracking-wide mb-8 text-center">
            Other Safety Grill Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedServices.map((rel) => (
              <div
                key={rel.slug}
                className="bg-white border border-gray-150 p-5 rounded-lg shadow-xxs hover:shadow-xs transition-shadow flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-graphite mb-1.5">{rel.title}</h4>
                  <p className="text-xxs text-steel leading-relaxed mb-4 line-clamp-2">
                    {rel.shortDesc}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-auto pt-3">
                  <Link
                    href={`/services/${rel.slug}`}
                    className="text-xxs font-bold text-brass hover:text-graphite flex items-center space-x-1 group"
                    aria-label={`Explore ${rel.title}`}
                  >
                    <span>Explore</span>
                    <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <a
                    href="tel:+919912373373"
                    className="flex items-center space-x-1 text-[10px] font-bold bg-brass text-white hover:bg-graphite px-2.5 py-1 rounded-full transition-colors"
                  >
                    <Phone size={10} className="fill-current" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}

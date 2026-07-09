import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, ShieldCheck, Phone, CheckCircle2, ChevronRight, Clock } from "lucide-react";
import { locationsData, generateLocationContent } from "@/lib/locationsData";
import { servicesData } from "@/lib/servicesData";
import ContactForm from "@/components/ContactForm";

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static params for all 31 Hyderabad areas to enable Static Site Generation (SSG)
export async function generateStaticParams() {
  return locationsData.map((loc) => ({
    slug: loc.slug
  }));
}

// Dynamic SEO metadata generation per location page
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const location = locationsData.find((loc) => loc.slug === slug);
  if (!location) return {};

  const title = `Best Invisible Grills in ${location.name} Hyderabad | John Invisible Grills`;
  const desc = `Looking for top-quality invisible safety grills in ${location.name} Hyderabad? Headquartered in KPHB, we offer fast ${location.responseTime} response times. Request a free quote!`;

  return {
    title,
    description: desc,
    alternates: {
      canonical: `/locations/${slug}`
    },
    openGraph: {
      title,
      description: desc,
      url: `https://johninvisiblegrills.com/locations/${slug}`,
      type: "article"
    }
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = locationsData.find((loc) => loc.slug === slug);

  if (!location) {
    notFound();
  }

  const { intro, body1, body2, conclusion } = generateLocationContent(location);
  const otherLocations = locationsData.filter((l) => l.slug !== slug).slice(0, 10);
  const sampleServices = servicesData.slice(0, 6);

  return (
    <article className="w-full">
      {/* Page Header */}
      <section className="bg-graphite text-white py-16 md:py-20 relative overflow-hidden select-none">
        <div className="absolute inset-0 opacity-5 bg-repeating-linear-gradient" style={{
          backgroundImage: "repeating-linear-gradient(45deg, #B08D57 0px, #B08D57 1px, transparent 1px, transparent 18px)"
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brass/25 border border-brass/35 text-brass text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-sm">
            <MapPin size={12} className="text-brass" />
            <span>Service Location: {location.name}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Invisible Grills in {location.name} Hyderabad
          </h1>
          <p className="text-sm text-gray-300 max-w-2xl font-medium">
            Professional high-tensile safety wire installations. Site survey and response time: <span className="text-brass font-bold">{location.responseTime}</span>.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* SEO Localized Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-graphite uppercase tracking-wide border-b border-gray-150 pb-2">
                Premium Invisible Grill Installation in {location.name}
              </h2>
              
              <p className="text-sm text-steel leading-relaxed">
                {intro}
              </p>
              
              <div className="p-6 bg-warm-bg border border-gray-100 rounded-lg shadow-xxs">
                <div className="flex items-start space-x-4">
                  <Clock className="text-brass w-6 h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-graphite mb-1">Local Response details for {location.name}</h3>
                    <p className="text-xs text-steel leading-relaxed">
                      Our safety survey engineers are allocated based on location. For residents in <strong>{location.name}</strong>, our standard turnaround time is <strong>{location.responseTime}</strong>. We bring sample steel cables, track profiles, and fasteners directly to your location.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-steel leading-relaxed">
                {body1}
              </p>

              <p className="text-sm text-steel leading-relaxed">
                {body2}
              </p>

              <div className="bg-graphite text-white p-6 rounded-lg border border-brass/25 relative overflow-hidden select-none">
                <div className="absolute inset-0 opacity-5 bg-repeating-linear-gradient" style={{
                  backgroundImage: "repeating-linear-gradient(-45deg, #B08D57 0px, #B08D57 1px, transparent 1px, transparent 15px)"
                }} />
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div>
                    <h3 className="text-sm font-bold text-brass uppercase tracking-wider mb-1">Looking for a direct quote?</h3>
                    <p className="text-xxs text-gray-300 max-w-md leading-relaxed">
                      Speak with our safety specialist based in Kukatpally to get instant estimations for {location.name}.
                    </p>
                  </div>
                  <a
                    href="tel:+919912373373"
                    className="bg-brass hover:bg-white hover:text-graphite text-white text-xs font-bold uppercase py-3.5 px-6 rounded-sm transition-colors text-center w-full md:w-auto"
                  >
                    Call: 9912373373
                  </a>
                </div>
              </div>

              <p className="text-sm text-steel leading-relaxed">
                {conclusion}
              </p>
            </div>

            {/* Quick Link Services */}
            <div className="space-y-4 pt-6 border-t border-gray-150">
              <h3 className="text-xs font-bold text-brass uppercase tracking-widest">
                Grill Solutions Available in {location.name}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {sampleServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="p-3 bg-white hover:bg-warm-bg border border-gray-200 rounded-sm text-xxs font-bold text-graphite hover:text-brass transition-all flex items-center justify-between"
                  >
                    <span>{service.title.replace(" Invisible Grills", "")}</span>
                    <ChevronRight size={10} className="text-brass" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Form & Local Info Sidebar */}
          <div className="space-y-8">
            <div className="sticky top-28">
              {/* Pre-filled form with current location area */}
              <ContactForm embedded={true} prefilledArea={location.name} />
              
              {/* Local Base Trust Card */}
              <div className="mt-6 border border-gray-150 p-6 rounded-lg bg-white space-y-4">
                <div className="flex items-center space-x-2 text-brass">
                  <ShieldCheck size={18} />
                  <h4 className="text-xs font-bold uppercase tracking-wider">Trusted Safety Partner</h4>
                </div>
                <ul className="space-y-3.5 text-xxs text-steel">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 size={12} className="text-brass" />
                    <span>HQ: KPHB Kukatpally (Fastest response)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 size={12} className="text-brass" />
                    <span>Nylon-shielded SS 316 steel wires</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 size={12} className="text-brass" />
                    <span>Completed 350+ Hyderabad installations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 size={12} className="text-brass" />
                    <span>Certified anti-rust warranty card</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Service Areas Section */}
      <section className="bg-warm-bg py-16 border-t border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-sm font-bold text-graphite uppercase tracking-wide mb-6 text-center">
            Other Service Areas Nearby
          </h3>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {otherLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="text-[10px] bg-white hover:bg-brass hover:text-white border border-gray-200 px-3.5 py-2 rounded-sm transition-all text-steel font-semibold shadow-xxs"
              >
                Invisible Grills in {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}

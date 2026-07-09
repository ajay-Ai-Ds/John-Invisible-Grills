import React from "react";
import Link from "next/link";
import { ShieldAlert, Users, Award, MapPin, CheckCircle } from "lucide-react";

export const metadata = {
  title: "About Us | John Invisible Grills Hyderabad",
  description: "Learn more about John Invisible Grills. Headquartered in KPHB Kukatpally, we are Hyderabad's trusted expert for high-tensile SS 316 invisible safety grill installations.",
  alternates: {
    canonical: "/about"
  }
};

export default function AboutPage() {
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "350+", label: "KPHB Installs Completed" },
    { value: "1200+", label: "Clients Citywide" },
    { value: "100%", label: "SS 316 Quality Shield" }
  ];

  const values = [
    {
      icon: <Users className="text-brass w-6 h-6" />,
      title: "Family Protection First",
      desc: "Our primary objective is to create worry-free environments for families with kids and active pets in high-rise buildings."
    },
    {
      icon: <Award className="text-brass w-6 h-6" />,
      title: "Premium Materials Only",
      desc: "We never compromise on safety. We only install high-tensile SS 316 marine-grade steel cores with thick nylon shields."
    },
    {
      icon: <MapPin className="text-brass w-6 h-6" />,
      title: "Proudly Local (KPHB HQ)",
      desc: "Headquartered in Kukatpally, we offer immediate local site visits, factory-direct pricing, and instant warranty support."
    }
  ];

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-graphite text-white py-16 md:py-20 relative overflow-hidden select-none">
        <div className="absolute inset-0 opacity-5 bg-repeating-linear-gradient" style={{
          backgroundImage: "repeating-linear-gradient(45deg, #B08D57 0px, #B08D57 1px, transparent 1px, transparent 18px)"
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs font-bold text-brass uppercase tracking-widest block">Our Company</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            About John Invisible Grills
          </h1>
          <p className="text-sm text-gray-300 max-w-xl mx-auto font-medium">
            Securing balconies and windows across Hyderabad with premium architectural stainless steel safety wire systems.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-graphite uppercase tracking-wide border-b border-gray-150 pb-2">
              Our Journey & Roots
            </h2>
            <p className="text-sm text-steel leading-relaxed">
              John Invisible Grills was founded with a clear, singular focus: to solve the safety risks of high-rise apartment living in Hyderabad without making homes feel like caged enclosures. While traditional iron bars make rooms look dark and small, our ultra-sleek invisible grills offer 100% safety with zero visual blockage.
            </p>
            <p className="text-sm text-steel leading-relaxed">
              Headquartered in the bustling residential hub of <strong>KPHB (Kukatpally), Hyderabad</strong>, we began by securing balconies for our neighbors in Kukatpally Housing Board colony. Thanks to our commitment to premium marine-grade materials (SS 316) and clean installation techniques, we quickly grew to serve clients citywide. Today, our mobile installation units travel daily across Gachibowli, Kondapur, Madhapur, Miyapur, Kokapet, Secunderabad, and beyond.
            </p>
            <p className="text-sm text-steel leading-relaxed">
              Because safety is a matter of life, we focus 100% of our energy on invisible grill solutions. We do not manufacture safety nets, clotheslines, or insect screens. This dedicated focus ensures that our team of safety engineers and installers are the absolute best in the industry.
            </p>
          </div>

          {/* Stats Box */}
          <div className="bg-graphite text-white p-8 md:p-10 rounded-lg border border-brass/25 relative overflow-hidden select-none">
            <div className="absolute inset-0 opacity-5 bg-repeating-linear-gradient" style={{
              backgroundImage: "repeating-linear-gradient(-45deg, #B08D57 0px, #B08D57 1px, transparent 1px, transparent 15px)"
            }} />
            <div className="relative z-10 space-y-8">
              <h3 className="text-lg font-bold text-brass uppercase tracking-wide">John by the Numbers</h3>
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="text-3xl md:text-4xl font-extrabold text-white block">{stat.value}</span>
                    <span className="text-xxs text-gray-400 font-semibold uppercase tracking-wider block">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-warm-bg border-y border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-brass uppercase tracking-widest block">Corporate Pillars</span>
            <h2 className="text-3xl font-extrabold text-graphite tracking-tight">
              Values That Drive Us
            </h2>
            <p className="text-sm text-steel">
              Our safety solutions are built upon three core operational values that separate us from local competitors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-gray-100 shadow-xs space-y-4">
                <div className="p-3 bg-warm-bg rounded-md w-fit">{v.icon}</div>
                <h3 className="text-base font-bold text-graphite">{v.title}</h3>
                <p className="text-xs text-steel leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locally Anchored trust CTA */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center space-x-2 text-brass border border-brass/25 px-3 py-1 bg-brass/5 rounded-full text-xs font-bold uppercase tracking-wider">
          <ShieldAlert size={14} />
          <span>Kukatpally Base</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-graphite tracking-tight">
          Supporting the Kukatpally & KPHB Community
        </h2>
        <p className="text-sm text-steel leading-relaxed">
          As a business born in Kukatpally, our home-base advantages are passed directly to our customers. Our workshop stock levels remain full, meaning we do not depend on external supply lines. We deliver safety wire installations with zero intermediaries, passing direct savings to you.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="bg-brass hover:bg-graphite text-white font-bold text-xs uppercase tracking-wide px-8 py-4 rounded-sm shadow-md transition-colors"
          >
            Contact KPHB HQ
          </Link>
          <a
            href="tel:+919912373373"
            className="border border-gray-300 hover:bg-gray-50 text-graphite font-bold text-xs uppercase tracking-wide px-8 py-4 rounded-sm transition-colors"
          >
            Call: 9912373373
          </a>
        </div>
      </section>
    </div>
  );
}

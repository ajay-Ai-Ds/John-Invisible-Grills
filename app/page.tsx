import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  ShieldCheck,
  CheckCircle,
  Phone,
  Grid,
  ChevronRight,
  Flame,
  Award,
  Eye,
  Activity,
  MapPin,
  CalendarDays,
  Baby,
  Layers,
  HeartHandshake
} from "lucide-react";
import { servicesData } from "@/lib/servicesData";

const Hero = dynamic(() => import("@/components/Hero"));
const ContactForm = dynamic(() => import("@/components/ContactForm"));
const Accordion = dynamic(() => import("@/components/UI/Accordion"));

// Accent colors mapping based on globals.css variables
function getServiceColor(slug: string) {
  switch (slug) {
    case "balcony-invisible-grills":
      return "text-[#EC4899]"; // service-balcony
    case "child-safety-invisible-grills":
      return "text-[#3B82F6]"; // service-child
    case "pet-safety-invisible-grills":
      return "text-[#10B981]"; // service-pet
    case "window-invisible-grills":
    case "french-window-invisible-grills":
      return "text-[#8B5CF6]"; // service-window
    case "bird-protection-invisible-grills":
      return "text-[#F97316]"; // service-bird
    case "terrace-invisible-grills":
    case "staircase-invisible-grills":
      return "text-[#06B6D4]"; // service-stair
    default:
      return "text-[#F59E0B]"; // service-custom
  }
}

function getServiceIcon(slug: string, className: string) {
  switch (slug) {
    case "balcony-invisible-grills":
      return <Layers className={className} />;
    case "child-safety-invisible-grills":
      return <Baby className={className} />;
    case "pet-safety-invisible-grills":
      return <HeartHandshake className={className} />;
    case "window-invisible-grills":
    case "french-window-invisible-grills":
      return <Grid className={className} />;
    case "bird-protection-invisible-grills":
      return <ShieldCheck className={className} />;
    case "terrace-invisible-grills":
    case "staircase-invisible-grills":
      return <Layers className={className} />;
    default:
      return <Award className={className} />;
  }
}

export default function HomePage() {
  const homeFaqs = [
    {
      question: "Why should I choose John Invisible Grills over traditional iron grills?",
      answer: "Traditional iron grills block your view, block sunlight, rust easily under monsoon rains, require periodic painting, and look like enclosures. John Invisible Grills use marine-grade, nylon-coated SS 316 cables which are completely rust-proof, support up to 400kg of tension, are virtually invisible from a distance, and can be cut using wire cutters during emergency evacuations."
    },
    {
      question: "Are your invisible grills strong enough to protect my children and pets?",
      answer: "Absolutely. Our invisible grills are made of high-tensile 316 stainless steel wires, tensioned to support up to 400kg. For children and pets, we recommend a gap spacing of 2 inches (50mm) to 3 inches (75mm), making it impossible for toddlers or pets to slip through or climb over."
    },
    {
      question: "Where is John Invisible Grills based and which areas do you serve?",
      answer: "Our head office is in KPHB (Kukatpally), Hyderabad. We provide direct installation and support services all across Hyderabad city, including Miyapur, Kondapur, Gachibowli, Madhapur, Hitech City, Banjara Hills, Jubilee Hills, Secunderabad, and more. Our Kukatpally location ensures the fastest response time in western Hyderabad."
    },
    {
      question: "Do you offer a warranty on the invisible safety grills?",
      answer: "Yes, we provide an official warranty on our SS 316 safety cables and fittings. This covers rusting, track alignment, and tension adjustments. Contact our KPHB service branch for details."
    },
    {
      question: "How long does a typical installation take?",
      answer: "A standard apartment balcony installation takes about 3 to 5 hours. Our professional installation squad uses dust-free drilling equipment to keep your home tidy during the process."
    }
  ];

  const processSteps = [
    { num: "01", title: "Enquiry", desc: "Submit your details or call our team to register your query." },
    { num: "02", title: "Phone Consultation", desc: "A consultant reviews your sizes and outlines estimates." },
    { num: "03", title: "Free Site Visit", desc: "Our KPHB-based safety engineer visits your home in Hyderabad." },
    { num: "04", title: "Measurement", desc: "Precise dimensions and material samples are shared." },
    { num: "05", title: "Quotation", desc: "You receive an transparent, instant quote." },
    { num: "06", title: "Installation", desc: "Professional squad anchors tracks and tension-fits wires." },
    { num: "07", title: "Final Inspection", desc: "Our supervisor runs rigorous safety checks on all tension lines." },
    { num: "08", title: "Customer Satisfaction", desc: "Project is handed over with the official warranty card." }
  ];

  return (
    <div className="w-full">
      {/* 1. Premium Parallax Hero */}
      <Hero />

      {/* 2. Trust Indicators Strip */}
      <section className="bg-primary py-8 text-white select-none">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6 text-center">
            {[
              "Free Site Visit",
              "Premium Steel",
              "Rust Free (316)",
              "Pro Installation",
              "HQ Kukatpally",
              "10-Yr Warranty"
            ].map((text, idx) => (
              <div key={idx} className="text-[10px] sm:text-sm font-bold tracking-widest uppercase flex items-center justify-center space-x-1.5 sm:space-x-2 leading-tight">
                <CheckCircle size={14} className="text-white/80 shrink-0 sm:w-4 sm:h-4" />
                <span className="whitespace-normal break-words">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Premium Service Cards Grid */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-10 bg-white">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block">Our Expertise</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Premium Safety Solutions
          </h2>
          <p className="text-base text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
            Architecturally designed safety systems tailored for high-end apartments, luxury villas, and premium commercial spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.slug}
              className="premium-card p-4 group flex flex-col justify-between h-full"
            >
              <div>
                {/* Premium Image Container */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[4/3] rounded-[20px] overflow-hidden mb-6 bg-light-bg flex items-center justify-center">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  {/* Floating Glass Badges */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-wrap gap-2 pr-3">
                    <div className="glass-badge px-2.5 py-1.5 rounded-full">
                      <span className="text-[9px] font-bold text-foreground uppercase tracking-widest">Premium</span>
                    </div>
                    <div className="glass-badge px-2.5 py-1.5 rounded-full">
                      <span className="text-[9px] font-bold text-foreground uppercase tracking-widest">316 Marine Grade</span>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex flex-wrap gap-2 pr-3">
                    <div className="glass-badge px-2.5 py-1.5 rounded-full flex items-center space-x-1">
                      <ShieldCheck size={12} className={getServiceColor(service.slug)} />
                      <span className="text-[9px] font-bold text-foreground uppercase tracking-widest">Child Safe</span>
                    </div>
                    <div className="glass-badge px-2.5 py-1.5 rounded-full">
                      <span className="text-[9px] font-bold text-foreground uppercase tracking-widest">10Y Warranty</span>
                    </div>
                  </div>
                </div>
                
                <div className="px-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`p-2 rounded-xl bg-gray-50 border border-gray-100 ${getServiceColor(service.slug)}`}>
                      {getServiceIcon(service.slug, "w-5 h-5")}
                    </div>
                    <h3 className="text-xl font-bold text-foreground leading-tight">{service.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed mb-6 line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>
              </div>
              <div className="px-4 pb-4">
                <Link
                  href={`/services/${service.slug}`}
                  className={`text-sm font-bold flex items-center space-x-2 w-fit ${getServiceColor(service.slug)} group/link`}
                  aria-label={`Explore ${service.title}`}
                >
                  <span>Explore Solution</span>
                  <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center group-hover/link:bg-current transition-colors">
                    <ChevronRight size={12} className="text-foreground group-hover/link:text-white transition-colors" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Why Invisible Grills (Visual comparison) */}
      <section className="py-24 bg-light-bg border-y border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold text-primary uppercase tracking-widest block">Aesthetic Evolution</span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
                  Why Transition to Invisible Safety Grills?
                </h2>
                <p className="text-base text-gray-500 font-medium leading-relaxed">
                  Traditional metal structures block sunlight, decay under rain, obstruct your skyline views, and look like prisons. John Invisible Grills combine architectural beauty with robust security.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-black/5 flex-shrink-0">
                    <Eye className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground">Unblocked Views</h3>
                    <p className="text-sm text-gray-500 font-medium mt-1">2mm stainless steel lines disappear from a distance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-black/5 flex-shrink-0">
                    <Flame className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground">Emergency Safe</h3>
                    <p className="text-sm text-gray-500 font-medium mt-1">Easily cut during emergencies with a wire cutter.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-black/5 flex-shrink-0">
                    <ShieldCheck className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground">Anti-Rust SS 316</h3>
                    <p className="text-sm text-gray-500 font-medium mt-1">Marine-grade steel with thick nylon sleeve protects against rain.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-black/5 flex-shrink-0">
                    <Activity className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground">Zero Maintenance</h3>
                    <p className="text-sm text-gray-500 font-medium mt-1">No painting or anti-corrosion treatments required.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual comparison illustration */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 bg-white rounded-3xl border border-black/5 shadow-xl overflow-hidden">
              <div className="p-8 space-y-6 bg-gray-50">
                <div className="bg-red-100 text-red-700 font-bold text-xs tracking-widest px-4 py-2 rounded-full uppercase w-fit">
                  Traditional Iron
                </div>
                <ul className="space-y-4 text-sm font-medium text-gray-500">
                  <li className="flex items-center space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm">✗</span>
                    <span>Blocks 50%+ natural light</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm">✗</span>
                    <span>Corrodes & stains walls</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm">✗</span>
                    <span>Traps residents in fires</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm">✗</span>
                    <span>Looks heavy and cage-like</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 space-y-6 bg-white border-t sm:border-t-0 sm:border-l border-black/5">
                <div className="bg-green-100 text-green-700 font-bold text-xs tracking-widest px-4 py-2 rounded-full uppercase w-fit">
                  John Invisible Grills
                </div>
                <ul className="space-y-4 text-sm font-medium text-gray-600">
                  <li className="flex items-center space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm">✓</span>
                    <span>100% Light & air flow</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm">✓</span>
                    <span>Nylon-shielded SS 316</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm">✓</span>
                    <span>Emergency cut option</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm">✓</span>
                    <span>Premium aesthetics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Installation Process */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block">Seamless Execution</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Our Professional Journey
          </h2>
          <p className="text-base text-gray-500 font-medium">
            From the initial consultation to final inspection, we follow a rigorous 8-step process.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {processSteps.map((step, idx) => (
            <div key={idx} className="relative group p-6 bg-white border border-black/5 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <span className="absolute -top-5 -right-2 text-5xl font-extrabold text-gray-100 group-hover:text-primary/10 transition-colors pointer-events-none">
                {step.num}
              </span>
              <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Contact Form & Google Map */}
      <section id="quote-form" className="py-24 bg-light-bg">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form Column */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-black/5">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground">Request a Quote</h3>
                <p className="text-sm text-gray-500 font-medium mt-2">Fill in your details, and our team will get back to you promptly.</p>
              </div>
              <ContactForm />
            </div>

            {/* Address & Map Column */}
            <div className="space-y-10 flex flex-col justify-center">
              <div className="space-y-6">
                <span className="text-xs font-bold text-primary uppercase tracking-widest block">Local HQ</span>
                <h3 className="text-3xl font-extrabold text-foreground tracking-tight">
                  Based in Kukatpally (KPHB)
                </h3>
                <p className="text-base text-gray-500 font-medium leading-relaxed">
                  Our main showroom and workshop is located at Kukatpally Housing Board (KPHB), Kukatpally. We serve all areas across Hyderabad.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-bold text-foreground pt-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle size={16} className="text-primary" />
                    </div>
                    <span>HQ Office: KPHB</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle size={16} className="text-primary" />
                    </div>
                    <span>Free Site Visits</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle size={16} className="text-primary" />
                    </div>
                    <span>Ready SS 316 Stock</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle size={16} className="text-primary" />
                    </div>
                    <span>Same-day Inspection</span>
                  </div>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="w-full h-80 rounded-3xl overflow-hidden border border-black/5 shadow-md relative">
                <iframe
                  title="John Invisible Grills Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.275949547514!2d78.39058347585098!3d17.494348600378873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90bf9e34a2e5%3A0xb3514a385f0ef352!2sKukatpally%20Housing%20Board%20Colony%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

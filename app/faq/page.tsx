import React from "react";
import Accordion from "@/components/UI/Accordion";
import { HelpCircle, Phone, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Frequently Asked Questions (FAQs) | John Invisible Grills",
  description: "Read detailed answers to the 15+ most common questions about invisible safety grills, including materials, strength, rust-proofing, and installation across Hyderabad.",
  alternates: {
    canonical: "/faq"
  }
};

export default function FAQPage() {
  const faqs = [
    {
      question: "1. What is an invisible grill and how does it work?",
      answer: "An invisible grill is a modern, high-strength safety system that replaces traditional bulky metal window grids. It is composed of high-tensile 316 marine-grade stainless steel cables (typically 2mm thick) tensioned across specialized powder-coated aluminum tracks anchored to walls. The spacing between the wires is narrow enough to prevent falls, while the thin profile of the cables makes them virtually invisible from a short distance."
    },
    {
      question: "2. Can invisible grills rust, and are they suitable for Hyderabad monsoons?",
      answer: "Our invisible grills will not rust. We use exclusively SS 316 marine-grade stainless steel, which contains molybdenum for superior resistance against pitting and rusting. The wire core is coated in a durable nylon/membrane layer which acts as an extra moisture barrier, making them highly suited to Hyderabad's heavy monsoon rains and high-temperature summers."
    },
    {
      question: "3. What is the tension and weight limit of the safety cables?",
      answer: "Each individual cable in our invisible grill setups is tensioned to support a load capacity of up to 400kg. This ensures that children, adults, or pets cannot push the cables apart or snap them under accidental impact."
    },
    {
      question: "4. What is the recommended gap spacing for children and pets?",
      answer: "For standard balconies and child safety, we recommend a gap spacing of 2 inches (50mm) to 3 inches (75mm). For pet safety (especially cats and small dogs), we suggest an ultra-narrow spacing of 1.5 to 2 inches (38mm to 50mm) to ensure pets cannot slip their heads or bodies through."
    },
    {
      question: "5. Can burglaries be prevented using invisible safety grills?",
      answer: "While their primary purpose is fall prevention (safety), invisible grills act as a strong deterrent. The high-tensile SS 316 steel wires cannot be cut with household scissors or pocket knives. A specialized heavy-duty wire cutter is required to sever them, making silent, forced entry extremely difficult for intruders."
    },
    {
      question: "6. How do I escape in case of fire or other emergencies?",
      answer: "Unlike traditional iron grills that trap residents and require a gas cutter to remove, invisible grills are designed with emergency evacuation in mind. The cables can be snipped in seconds using a wire cutter (which we recommend keeping in an accessible location), facilitating rapid escape or rescue access."
    },
    {
      question: "7. Do you charge for the site visit and measurement in Hyderabad?",
      answer: "No, John Invisible Grills provides 100% free site visits, consultations, and measurements across all locations in Hyderabad. Our local safety engineers travel from Kukatpally directly to your doorstep."
    },
    {
      question: "8. How long does the installation take for a standard balcony?",
      answer: "For a standard balcony (approximately 100 to 150 sq ft), the installation is typically completed in 3 to 5 hours. Larger spans or multi-balcony projects may take a full day. Our teams work efficiently to minimize disruption."
    },
    {
      question: "9. Can invisible grills be installed on sliding glass doors and French windows?",
      answer: "Yes. We install invisible grills on sliding windows, UPVC casements, large French windows, and sliding glass partitions. The mounting tracks are slim (only about 2 inches wide) and are mounted on the outer concrete frame, ensuring your windows and sliding screens can operate smoothly without blocking."
    },
    {
      question: "10. Are your invisible grills approved by apartment welfare associations (WAs)?",
      answer: "Yes. Most premium apartment complexes and high-rises in Hyderabad recommend invisible grills over traditional iron grills. Because they do not block natural light or alter the building's exterior façade, they maintain a clean, uniform look for the property."
    },
    {
      question: "11. What is the lifetime or durability of the safety wires?",
      answer: "Our premium nylon-coated SS 316 invisible safety grills have a lifespan of over 15 to 20 years. They do not fade under sunlight, scale under rain, or lose their tension over time."
    },
    {
      question: "12. Do you offer different track colors to match our home interiors?",
      answer: "Yes, we powder-coat our high-grade aluminum anchoring tracks in various finishes including Charcoal Gray, Off-White, Dark Brown, and Black, matching your window frames or balcony railings perfectly."
    },
    {
      question: "13. Are they difficult to clean or maintain?",
      answer: "They require zero maintenance. Unlike traditional iron grills that need periodic rust-brushing and repainting, invisible grills only need to be wiped down with a damp cloth occasionally to remove dust."
    },
    {
      question: "14. How are your invisible grills priced?",
      answer: "Pricing is calculated on a per-square-foot basis, which covers the SS 316 cables, aluminum tracks, anchor bolts, and professional installation. Our headquarters in KPHB, Kukatpally manages local assembly, allowing us to offer highly competitive pricing across Hyderabad with no middleman margins."
    },
    {
      question: "15. Where is your home base, and how quickly can you reach my area?",
      answer: "We are based in KPHB, Kukatpally, Hyderabad. For Kukatpally and adjoining areas like Miyapur, Nizampet, and Kondapur, we can reach you within 1-2 hours. For other parts of Hyderabad (like LB Nagar, Uppal, or Alwal), we coordinate visits within 3-4 hours or on the same day."
    },
    {
      question: "16. Can these grills be installed on open terraces or staircases?",
      answer: "Yes, we customize our installations for open terraces, rooftop penthouses, internal duplex voids, and open-sided staircases. We fabricate custom framing brackets to anchor the cables securely on any surface."
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
          <div className="p-3 bg-white/5 border border-white/10 rounded-full w-fit mx-auto">
            <HelpCircle className="text-brass w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-gray-300 max-w-xl mx-auto font-medium">
            Find immediate answers regarding materials, safety load, installation details, warranties, and locations.
          </p>
        </div>
      </section>

      {/* Accordion container */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Accordion items={faqs} />
      </section>

      {/* Support Box */}
      <section className="bg-warm-bg py-16 border-t border-gray-150">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="text-lg font-bold text-graphite uppercase tracking-wide">
            Still Have Questions?
          </h3>
          <p className="text-xs text-steel max-w-md mx-auto leading-relaxed">
            Our local safety experts in KPHB, Kukatpally, Hyderabad are happy to clear up any doubts. Contact us directly for phone consultations or to request a free material sample.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="tel:+919912373373"
              className="w-full sm:w-auto bg-brass hover:bg-graphite text-white font-bold text-xs uppercase px-8 py-3.5 rounded-sm shadow-md transition-colors"
            >
              Call HQ: 9912373373
            </a>
            <a
              href="https://wa.me/919912373373"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-green-600 text-white font-bold text-xs uppercase px-8 py-3.5 rounded-sm shadow-md transition-colors text-center"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

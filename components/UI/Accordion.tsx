"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ question, answer, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border-b border-gray-200 py-4 select-none">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-2 focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-base font-bold text-graphite hover:text-brass transition-colors duration-150">
          {question}
        </span>
        <ChevronDown
          size={18}
          className={`text-steel transform transition-transform duration-300 ${isOpen ? "rotate-180 text-brass" : ""}`}
        />
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[300px] opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm text-steel leading-relaxed pb-2">
          {answer}
        </p>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: { question: string; answer: string }[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full divide-y divide-gray-150 bg-white px-6 py-4 rounded-lg border border-gray-100 shadow-xs">
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === idx}
          onClick={() => handleToggle(idx)}
        />
      ))}
    </div>
  );
}

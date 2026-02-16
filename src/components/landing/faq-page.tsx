"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQPageProps {
  /** Page title */
  title?: string;
  /** Page subtitle */
  subtitle?: string;
  /** FAQ items */
  faqs: FAQItem[];
  /** Contact info for questions */
  contactEmail?: string;
  /** Primary brand color */
  primaryColor?: string;
}

export function FAQPage({
  title = "Ofte stilte spørsmål",
  subtitle = "",
  faqs = [],
  contactEmail = "",
  primaryColor = "#2B7FFF",
}: FAQPageProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{title}</h1>
          {subtitle && (
            <p className="text-xl text-gray-600">{subtitle}</p>
          )}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        {contactEmail && (
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">
              Finner du ikke svaret du leter etter?
            </p>
            <a 
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center gap-2 font-medium"
              style={{ color: primaryColor }}
            >
              Kontakt oss →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

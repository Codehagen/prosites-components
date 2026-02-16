import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";

export interface ServiceItem {
  title: string;
  description: string;
  features?: string[];
  image?: string;
}

export interface ServicesPageProps {
  /** Page title */
  title?: string;
  /** Page subtitle */
  subtitle?: string;
  /** Intro content */
  intro?: string;
  /** Services list */
  services?: ServiceItem[];
  /** CTA text */
  ctaText?: string;
  /** CTA link */
  ctaHref?: string;
  /** Primary brand color */
  primaryColor?: string;
}

export function ServicesPage({
  title = "Våre tjenester",
  subtitle = "",
  intro = "",
  services = [],
  ctaText = "Kontakt oss",
  ctaHref = "#contact",
  primaryColor = "#2B7FFF",
}: ServicesPageProps) {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{title}</h1>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">{subtitle}</p>
          )}
          {intro && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">{intro}</p>
          )}
        </div>
      </div>

      {/* Services List */}
      {services.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  {service.image ? (
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="rounded-xl shadow-xl w-full h-80 object-cover"
                    />
                  ) : (
                    <div 
                      className="rounded-xl shadow-xl w-full h-80 flex items-center justify-center"
                      style={{ backgroundColor: `${primaryColor}10` }}
                    >
                      <div 
                        className="w-20 h-20 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: primaryColor }}
                      >
                        <span className="text-3xl text-white font-bold">{index + 1}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {service.features && service.features.length > 0 && (
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <div 
                            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ backgroundColor: primaryColor }}
                          >
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <a 
                    href={ctaHref}
                    className="inline-flex items-center gap-2 font-medium"
                    style={{ color: primaryColor }}
                  >
                    Les mer <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 px-6" style={{ backgroundColor: "#101828" }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Trenger du hjelp med noe av dette?</h2>
          <p className="text-gray-400 mb-8">Ta kontakt med oss så hjelper vi deg.</p>
          <a
            href={ctaHref}
            className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-white font-medium transition-opacity hover:opacity-90"
            style={{ backgroundColor: primaryColor }}
          >
            {ctaText} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}

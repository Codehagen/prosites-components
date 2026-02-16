import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

export interface PriceFeature {
  name: string;
  included: boolean;
}

export interface PricePlan {
  name: string;
  description: string;
  price: string;
  period?: string;
  features: PriceFeature[];
  highlighted?: boolean;
  ctaText?: string;
}

export interface PricesPageProps {
  /** Page title */
  title?: string;
  /** Page subtitle */
  subtitle?: string;
  /** Price plans */
  plans: PricePlan[];
  /** Contact email */
  contactEmail?: string;
  /** Primary brand color */
  primaryColor?: string;
}

export function PricesPage({
  title = "Priser",
  subtitle = "Velg den løsningen som passer best for deg",
  plans = [],
  contactEmail = "",
  primaryColor = "#2B7FFF",
}: PricesPageProps) {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{title}</h1>
          {subtitle && (
            <p className="text-xl text-gray-600">{subtitle}</p>
          )}
        </div>

        {/* Price Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative ${
                plan.highlighted 
                  ? "border-2 shadow-xl" 
                  : "border-gray-200"
              }`}
              style={plan.highlighted ? { borderColor: primaryColor } : {}}
            >
              {plan.highlighted && (
                <div 
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-sm font-medium"
                  style={{ backgroundColor: primaryColor }}
                >
                  Mest populær
                </div>
              )}
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-500">/{plan.period}</span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <div 
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          feature.included 
                            ? "" 
                            : "bg-gray-100"
                        }`}
                        style={feature.included ? { backgroundColor: `${primaryColor}20` } : {}}
                      >
                        {feature.included ? (
                          <Check 
                            className="w-3 h-3" 
                            style={{ color: primaryColor }} 
                          />
                        ) : (
                          <span className="text-gray-400 text-xs">×</span>
                        )}
                      </div>
                      <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <a 
                  href={contactEmail ? `mailto:${contactEmail}` : "#contact"}
                  className="block w-full text-center py-3 rounded-lg font-medium transition-colors"
                  style={{ 
                    backgroundColor: plan.highlighted ? primaryColor : 'transparent',
                    color: plan.highlighted ? '#fff' : primaryColor,
                    border: plan.highlighted ? 'none' : `2px solid ${primaryColor}`
                  }}
                >
                  {plan.ctaText || "Kontakt oss"} <ArrowRight className="inline w-4 h-4 ml-2" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Quote CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Trenger du en tilpasset løsning?
          </p>
          <a 
            href={contactEmail ? `mailto:${contactEmail}` : "#contact"}
            className="inline-flex items-center gap-2 font-medium"
            style={{ color: primaryColor }}
          >
            Kontakt oss for tilbud <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

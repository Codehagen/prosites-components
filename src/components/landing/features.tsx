import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon, Check } from "lucide-react";

export interface Feature {
  /** Feature title */
  title: string;
  /** Feature description */
  description: string;
}

export interface FeaturesProps {
  /** Section title */
  title?: string;
  /** Section subtitle */
  subtitle?: string;
  /** Array of features */
  features: Feature[];
  /** Whether to show checkmarks */
  showChecks?: boolean;
  /** Primary brand color */
  primaryColor?: string;
  /** Layout: grid or list */
  layout?: "grid" | "list";
}

export function Features({
  title = "Hvorfor velge oss?",
  subtitle = "",
  features = [],
  showChecks = true,
  primaryColor = "#2B7FFF",
  layout = "grid",
}: FeaturesProps) {
  return (
    <section className="py-20 px-6 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#101828] mb-4">{title}</h2>
          {subtitle && (
            <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>

        {layout === "grid" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-6">
                  {showChecks && (
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${primaryColor}15` }}
                    >
                      <Check className="w-4 h-4" style={{ color: primaryColor }} />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-[#101828] mb-2">{feature.title}</h3>
                  <p className="text-[#6B7280]">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-100">
                {showChecks && (
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: primaryColor }}
                  >
                    <Check className="w-3 h-3 text-white" />
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-[#101828] mb-1">{feature.title}</h3>
                  <p className="text-[#6B7280] text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

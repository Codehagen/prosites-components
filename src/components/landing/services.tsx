import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon?: string;
}

export interface ServicesProps {
  /** Section title */
  title?: string;
  /** Section subtitle */
  subtitle?: string;
  /** List of services */
  services: Service[];
  /** Primary brand color */
  primaryColor?: string;
  /** Custom icon mapping */
  iconMap?: Record<string, LucideIcon>;
}

const defaultIcons: Record<string, LucideIcon> = {
  default: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
};

export function Services({
  title = "Våre tjenester",
  subtitle = "",
  services = [],
  primaryColor = "#2B7FFF",
  iconMap = {},
}: ServicesProps) {
  return (
    <section className="py-20 px-6 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#101828] mb-4">{title}</h2>
          {subtitle && (
            <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon ? iconMap[service.icon] || defaultIcons.default : defaultIcons.default;
            
            return (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${primaryColor}15` }}
                  >
                    <IconComponent className="w-6 h-6" style={{ color: primaryColor }} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#101828] mb-2">{service.title}</h3>
                  <p className="text-[#6B7280]">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

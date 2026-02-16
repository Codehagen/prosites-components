import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export interface Testimonial {
  /** Quote text */
  quote: string;
  /** Author name */
  author: string;
  /** Author title/role */
  role?: string;
  /** Author image (optional) */
  image?: string;
}

export interface TestimonialsProps {
  /** Section title */
  title?: string;
  /** Section subtitle */
  subtitle?: string;
  /** Array of testimonials */
  testimonials: Testimonial[];
  /** Primary brand color */
  primaryColor?: string;
}

export function Testimonials({
  title = "Hva våre kunder sier",
  subtitle = "",
  testimonials = [],
  primaryColor = "#2B7FFF",
}: TestimonialsProps) {
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
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-gray-200">
              <CardContent className="p-6">
                <Quote 
                  className="w-8 h-8 mb-4 opacity-20" 
                  style={{ color: primaryColor }} 
                />
                <p className="text-[#6B7280] mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  {testimonial.image && (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <div className="font-semibold text-[#101828]">
                      {testimonial.author}
                    </div>
                    {testimonial.role && (
                      <div className="text-sm text-[#6B7280]">
                        {testimonial.role}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";

export interface CTASectionProps {
  /** Section title */
  title?: string;
  /** Description text */
  description?: string;
  /** Primary CTA text */
  ctaText?: string;
  /** Primary CTA link */
  ctaHref?: string;
  /** Secondary CTA text */
  ctaSecondary?: string;
  /** Secondary CTA link */
  ctaSecondaryHref?: string;
  /** Primary brand color */
  primaryColor?: string;
}

export function CTASection({
  title = "Klar for å komme i gang?",
  description = "Ta kontakt med oss i dag så hjelper vi deg med dine behov.",
  ctaText = "Kontakt oss",
  ctaHref = "#contact",
  ctaSecondary = "Les mer",
  ctaSecondaryHref = "#more",
  primaryColor = "#2B7FFF",
}: CTASectionProps) {
  return (
    <section 
      className="py-20 px-6"
      style={{ backgroundColor: "#101828" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          {title}
        </h2>
        <p 
          className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: primaryColor }}
          >
            {ctaText}
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          
          {ctaSecondary && (
            <a
              href={ctaSecondaryHref}
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-sm font-medium text-white hover:bg-white hover:text-black transition-colors bg-transparent"
            >
              {ctaSecondary}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

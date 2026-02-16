import { ChevronDown, ArrowRight } from "lucide-react";

export interface HeroProps {
  /** Company name or tagline */
  subtitle?: string;
  /** Main headline */
  headline: string;
  /** Description text */
  description?: string;
  /** CTA button text */
  ctaText?: string;
  /** CTA button link */
  ctaHref?: string;
  /** Secondary CTA text */
  ctaSecondary?: string;
  /** Secondary CTA link */
  ctaSecondaryHref?: string;
  /** Background image URL */
  backgroundImage?: string;
  /** Primary brand color */
  primaryColor?: string;
}

export function Hero({
  subtitle = "",
  headline,
  description = "",
  ctaText = "Kontakt oss",
  ctaHref = "#contact",
  ctaSecondary = "Les mer",
  ctaSecondaryHref = "#more",
  backgroundImage = "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80",
  primaryColor = "#2B7FFF",
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(16, 24, 40, 0.75), rgba(16, 24, 40, 0.75)), url('${backgroundImage}')` }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
        {subtitle && (
          <p 
            className="hero-fade-up text-sm font-medium uppercase tracking-[0.2em] text-white/70 mb-6"
            style={{ animationDelay: "100ms" }}
          >
            {subtitle}
          </p>
        )}
        
        <h1 
          className="hero-fade-up text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-6"
          style={{ animationDelay: "250ms" }}
          dangerouslySetInnerHTML={{ __html: headline }}
        />
        
        {description && (
          <p 
            className="hero-fade-up text-lg sm:text-xl leading-relaxed text-white/80 max-w-2xl mx-auto mb-10"
            style={{ animationDelay: "400ms" }}
          >
            {description}
          </p>
        )}
        
        <div 
          className="hero-fade-up flex flex-col sm:flex-row gap-4 justify-center" 
          style={{ animationDelay: "550ms" }}
        >
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium tracking-wide hover:opacity-90 active:scale-[0.97] transition-all duration-150"
            style={{ backgroundColor: primaryColor, color: "#fff" }}
          >
            {ctaText}
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          
          {ctaSecondary && (
            <a
              href={ctaSecondaryHref}
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-150 bg-transparent"
            >
              {ctaSecondary}
            </a>
          )}
        </div>
      </div>

      <a 
        href={ctaHref}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
        aria-label="Scroll ned"
      >
        <span className="animate-gentle-float inline-block">
          <ChevronDown className="size-6" />
        </span>
      </a>
    </section>
  );
}

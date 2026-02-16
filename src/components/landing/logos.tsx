export interface LogoItem {
  /** Image URL */
  src: string;
  /** Alt text */
  alt: string;
}

export interface LogosProps {
  /** Section title */
  title?: string;
  /** Subtitle */
  subtitle?: string;
  /** Array of logos */
  logos: LogoItem[];
  /** Background pattern (optional) */
  backgroundPattern?: boolean;
  /** Custom background color */
  backgroundColor?: string;
  /** Text color */
  textColor?: string;
}

export function Logos({
  title = "",
  subtitle = "",
  logos = [],
  backgroundPattern = false,
  backgroundColor = "#f8f5ef",
  textColor = "#264756",
}: LogosProps) {
  return (
    <section 
      className="relative py-20 px-6 overflow-hidden"
      style={{ backgroundColor }}
    >
      {backgroundPattern && (
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} 
        />
      )}

      <div className="relative mx-auto max-w-7xl">
        {title && (
          <div className="text-center mb-12">
            {subtitle && (
              <p 
                className="text-sm font-medium uppercase tracking-[0.2em] mb-4"
                style={{ color: `${textColor}99` }}
              >
                {subtitle}
              </p>
            )}
            <h2 
              className="text-3xl sm:text-4xl font-light tracking-tight"
              style={{ color: textColor }}
            >
              {title}
            </h2>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-12 md:h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

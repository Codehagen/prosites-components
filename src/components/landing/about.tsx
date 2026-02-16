export interface AboutProps {
  /** Section title */
  title?: string;
  /** Section content - can be HTML */
  content?: string;
  /** Image URL */
  image?: string;
  /** Primary brand color */
  primaryColor?: string;
}

export function About({
  title = "Om oss",
  content = "",
  image = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80",
  primaryColor = "#2B7FFF",
}: AboutProps) {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#101828] mb-6">{title}</h2>
            <div 
              className="text-lg text-[#6B7280] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br rounded-2xl opacity-0 lg:opacity-100" style={{ backgroundColor: `${primaryColor}20` }} />
            <img 
              src={image} 
              alt={title}
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

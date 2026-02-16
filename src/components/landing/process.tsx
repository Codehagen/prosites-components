export interface ProcessStep {
  /** Step title */
  title: string;
  /** Step description */
  description: string;
}

export interface ProcessProps {
  /** Section title */
  title?: string;
  /** Section subtitle */
  subtitle?: string;
  /** Array of steps */
  steps: ProcessStep[];
  /** Primary brand color */
  primaryColor?: string;
}

export function Process({
  title = "Vår proses",
  subtitle = "",
  steps = [],
  primaryColor = "#2B7FFF",
}: ProcessProps) {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#101828] mb-4">{title}</h2>
          {subtitle && (
            <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-center gap-4 mb-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: primaryColor }}
                >
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block flex-1 h-0.5 bg-gray-200" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-[#101828] mb-2">{step.title}</h3>
              <p className="text-[#6B7280]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

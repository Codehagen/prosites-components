export interface Stat {
  /** Large number value */
  value: string;
  /** Label description */
  label: string;
}

export interface StatsProps {
  /** Array of stats */
  stats: Stat[];
  /** Primary brand color */
  primaryColor?: string;
}

export function Stats({
  stats = [],
  primaryColor = "#2B7FFF",
}: StatsProps) {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div 
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: primaryColor }}
              >
                {stat.value}
              </div>
              <div className="text-[#6B7280]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

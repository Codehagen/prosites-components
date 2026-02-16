import { ArrowRight } from "lucide-react";

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
  email?: string;
  phone?: string;
}

export interface AboutPageProps {
  /** Company name */
  companyName?: string;
  /** About content - can contain HTML */
  content?: string;
  /** Mission text */
  mission?: string;
  /** Vision text */
  vision?: string;
  /** Values array */
  values?: string[];
  /** Team members */
  team?: TeamMember[];
  /** Background image for hero */
  heroImage?: string;
  /** Primary brand color */
  primaryColor?: string;
}

export function AboutPage({
  companyName = "Bedrift",
  content = "",
  mission = "",
  vision = "",
  values = [],
  team = [],
  heroImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
  primaryColor = "#2B7FFF",
}: AboutPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-24 pb-16 px-6">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('${heroImage}')` }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Om {companyName}</h1>
          {content && (
            <p className="text-xl text-white/90 max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: content }} />
          )}
        </div>
      </section>

      {/* Mission & Vision */}
      {(mission || vision) && (
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {mission && (
                <div>
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${primaryColor}15` }}
                  >
                    <svg className="w-6 h-6" style={{ color: primaryColor }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Vår mission</h2>
                  <p className="text-gray-600 leading-relaxed">{mission}</p>
                </div>
              )}
              {vision && (
                <div>
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${primaryColor}15` }}
                  >
                    <svg className="w-6 h-6" style={{ color: primaryColor }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4M12 8h.01" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Vår visjon</h2>
                  <p className="text-gray-600 leading-relaxed">{vision}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Values */}
      {values.length > 0 && (
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Våre verdier</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white"
                    style={{ backgroundColor: primaryColor }}
                  >
                    {index + 1}
                  </div>
                  <p className="text-gray-700 font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Team */}
      {team.length > 0 && (
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Vårt team</h2>
              <p className="text-gray-600">Møt menneskene bak {companyName}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                  {member.image && (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                  )}
                  <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-gray-600 mb-2">{member.role}</p>
                  {member.email && (
                    <a 
                      href={`mailto:${member.email}`} 
                      className="text-sm hover:opacity-80"
                      style={{ color: primaryColor }}
                    >
                      {member.email}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 px-6" style={{ backgroundColor: "#101828" }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Vil du vite mer om oss?</h2>
          <p className="text-gray-400 mb-8">Ta kontakt med oss så forteller vi mer.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-white font-medium transition-opacity hover:opacity-90"
            style={{ backgroundColor: primaryColor }}
          >
            Kontakt oss <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}

import { ArrowRight } from "lucide-react";

export interface PrivacySection {
  title: string;
  content: string;
}

export interface PrivacyPageProps {
  /** Company name */
  companyName?: string;
  /** Company email */
  email?: string;
  /** Effective date */
  effectiveDate?: string;
  /** Privacy sections */
  sections?: PrivacySection[];
  /** Primary brand color */
  primaryColor?: string;
}

export function PrivacyPage({
  companyName = "Bedrift",
  email = "",
  effectiveDate = "",
  sections = [],
  primaryColor = "#2B7FFF",
}: PrivacyPageProps) {
  const defaultSections: PrivacySection[] = [
    {
      title: "Innsamling av personopplysninger",
      content: "Vi samler inn personopplysninger du gir oss direkte, for eksempel når du fyller ut kontakt skjema eller melder deg på vårt nyhetsbrev."
    },
    {
      title: "Bruk av opplysninger",
      content: "Vi bruker opplysningene til å kommunisere med deg, svare på dine henvendelser og forbedre våre tjenester."
    },
    {
      title: "Deling av opplysninger",
      content: "Vi deler ikke personopplysninger med tredjeparter, med unntak av nødvendige tjenesteleverandører som hjelper oss drifte nettsiden."
    },
    {
      title: "Lagring av opplysninger",
      content: "Vi lagrer personopplysninger så lenge det er nødvendig for formålet de ble samlet inn for, eller så lenge loven krever det."
    },
    {
      title: "Dine rettigheter",
      content: "Du har rett til å be om innsyn, retting eller sletting av dine personopplysninger. Kontakt oss for å utøve disse rettighetene."
    },
    {
      title: "Kontaktinformasjon",
      content: `Ta kontakt med oss hvis du har spørsmål om vår personvernpraksis: ${email || companyName}`
    }
  ];

  const finalSections = sections.length > 0 ? sections : defaultSections;

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Personvern
          </h1>
          <p className="text-xl text-gray-600">
            Hvordan vi håndterer dine personopplysninger
          </p>
          {effectiveDate && (
            <p className="text-sm text-gray-500 mt-2">
              Sist oppdatert: {effectiveDate}
            </p>
          )}
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {finalSections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 p-8 bg-gray-50 rounded-xl text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Spørsmål om personvern?
          </h3>
          <p className="text-gray-600 mb-4">
            Ta kontakt med oss hvis du har spørsmål.
          </p>
          {email && (
            <a 
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 font-medium"
              style={{ color: primaryColor }}
            >
              Kontakt oss <ArrowRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

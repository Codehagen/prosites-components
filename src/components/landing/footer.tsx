import Link from "next/link";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  /** Company name */
  companyName?: string;
  /** Short description */
  description?: string;
  /** Contact info */
  contact?: {
    phone?: string;
    email?: string;
    address?: string;
  };
  /** Footer columns with links */
  columns?: FooterColumn[];
  /** Copyright text */
  copyright?: string;
  /** Primary brand color */
  primaryColor?: string;
}

export function Footer({
  companyName = "Bedrift",
  description = "",
  contact = {},
  columns = [],
  copyright = "",
  primaryColor = "#2B7FFF",
}: FooterProps) {
  const { phone = "", email = "", address = "" } = contact;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        {/* Company Info */}
        <div className="mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] mb-2">
            {companyName}
          </h2>
          {description && (
            <p className="text-sm text-white/60 max-w-md">
              {description}
            </p>
          )}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Contact Column */}
          {(phone || email || address) && (
            <div>
              <h3 className="text-xs font-medium uppercase tracking-wider text-white/40 mb-4">
                Kontakt
              </h3>
              {phone && (
                <p className="text-sm text-white/70 leading-relaxed mb-2">
                  {phone}
                </p>
              )}
              {email && (
                <p className="text-sm text-white/70 leading-relaxed mb-2">
                  {email}
                </p>
              )}
              {address && (
                <p className="text-sm text-white/70 leading-relaxed">
                  {address}
                </p>
              )}
            </div>
          )}

          {/* Link Columns */}
          {columns.map((column, index) => (
            <div key={index}>
              <h3 className="text-xs font-medium uppercase tracking-wider text-white/40 mb-4">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs text-white/40">
            © {year} {companyName}. {copyright || "Alle rettigheter reservert."}
          </p>
        </div>
      </div>
    </footer>
  );
}

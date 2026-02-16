export interface FooterProps {
  /** Company name */
  companyName?: string;
  /** Copyright text */
  copyright?: string;
  /** Social links */
  socials?: {
    label: string;
    href: string;
  }[];
  /** Primary brand color */
  primaryColor?: string;
}

export function Footer({
  companyName = "Bedrift",
  copyright = "",
  socials = [],
  primaryColor = "#2B7FFF",
}: FooterProps) {
  const year = new Date().getFullYear();
  const defaultCopyright = `© ${year} ${companyName}. Alle rettigheter reservert.`;

  return (
    <footer className="py-12 px-6 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: primaryColor }}
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth="2">
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                <path d="m3.3 7 8.7 5 8.7-5" />
                <path d="M12 22V12" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-[#101828]">{companyName}</span>
          </div>
          
          <div className="text-[#6B7280] text-sm">
            {copyright || defaultCopyright}
          </div>
          
          {socials.length > 0 && (
            <div className="flex gap-6">
              {socials.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="text-[#6B7280] hover:opacity-70 transition-opacity"
                  style={{ color: primaryColor }}
                >
                  {social.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}

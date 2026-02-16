"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface HeaderProps {
  /** Company name */
  companyName?: string;
  /** Logo SVG or image URL */
  logo?: string;
  /** Navigation links */
  navLinks?: NavLink[];
  /** CTA button text */
  ctaText?: string;
  /** CTA button link */
  ctaHref?: string;
  /** Primary brand color */
  primaryColor?: string;
}

export function Header({
  companyName = "Bedrift",
  logo,
  navLinks = [],
  ctaText = "Kontakt oss",
  ctaHref = "#contact",
  primaryColor = "#2B7FFF",
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {logo ? (
            typeof logo === "string" && logo.startsWith("http") ? (
              <img src={logo} alt={companyName} className="h-8" />
            ) : (
              <span className="text-xl font-semibold">{logo}</span>
            )
          ) : (
            <>
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
            </>
          )}
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href} 
              className="text-[#6B7280] hover:text-[#101828] transition-colors"
            >
              {link.label}
            </a>
          ))}
          {ctaText && (
            <Button 
              className="text-white"
              style={{ backgroundColor: primaryColor }}
              asChild
            >
              <a href={ctaHref}>{ctaText}</a>
            </Button>
          )}
        </nav>

        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 mobile-nav-enter">
          {navLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href} 
              className="text-[#6B7280]"
            >
              {link.label}
            </a>
          ))}
          {ctaText && (
            <Button 
              className="w-full text-white"
              style={{ backgroundColor: primaryColor }}
            >
              <a href={ctaHref}>{ctaText}</a>
            </Button>
          )}
        </div>
      )}
    </header>
  );
}

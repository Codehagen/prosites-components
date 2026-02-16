"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface HeaderProps {
  /** Company name */
  companyName?: string;
  /** Logo - can be text or image URL */
  logo?: string;
  /** Navigation links */
  navLinks?: NavLink[];
  /** CTA button text */
  ctaText?: string;
  /** CTA button link */
  ctaHref?: string;
  /** Primary brand color */
  primaryColor?: string;
  /** Make header transparent (for hero page) */
  transparent?: boolean;
  /** Current pathname for active state */
  pathname?: string;
}

export function Header({
  companyName = "Bedrift",
  logo,
  navLinks = [],
  ctaText = "Kontakt oss",
  ctaHref = "#contact",
  primaryColor = "#2B7FFF",
  transparent = false,
  pathname = "",
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent 
          ? "bg-transparent" 
          : "bg-white/95 backdrop-blur-md border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {logo ? (
            typeof logo === "string" && logo.startsWith("http") ? (
              <img src={logo} alt={companyName} className="h-8" />
            ) : (
              <span className={`text-xl font-semibold ${transparent ? "text-white" : "text-gray-800"}`}>
                {logo}
              </span>
            )
          ) : (
            <>
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg"
                style={{ backgroundColor: primaryColor, color: "#fff" }}
              >
                {companyName.charAt(0)}
              </div>
              <span className={`text-lg font-semibold ${transparent ? "text-white" : "text-gray-800"}`}>
                {companyName}
              </span>
            </>
          )}
        </div>
        
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <Link 
              key={index}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                transparent 
                  ? "text-white/80 hover:text-white" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {ctaText && (
            <Link href={ctaHref}>
              <Button 
                size="sm"
                className="text-white"
                style={{ backgroundColor: primaryColor }}
              >
                {ctaText}
              </Button>
            </Link>
          )}
        </nav>

        <button 
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className={`w-6 h-6 ${transparent ? "text-white" : "text-gray-800"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${transparent ? "text-white" : "text-gray-800"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md absolute left-0 right-0 top-full mobile-nav-enter">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link, index) => (
              <Link 
                key={index}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium uppercase tracking-wider text-white/80 hover:text-white py-3 transition-colors border-b border-white/10"
              >
                {link.label}
              </Link>
            ))}
            {ctaText && (
              <Link 
                href={ctaHref}
                onClick={() => setMobileMenuOpen(false)}
                className="py-4"
              >
                <Button 
                  className="w-full text-white"
                  style={{ backgroundColor: primaryColor }}
                >
                  {ctaText}
                </Button>
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

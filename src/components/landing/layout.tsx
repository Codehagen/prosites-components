"use client";

import { Header, HeaderProps } from "./header";
import { Footer, FooterProps } from "./footer";

export interface LayoutProps {
  /** Page content */
  children: React.ReactNode;
  /** Header props */
  headerProps?: HeaderProps;
  /** Footer props */
  footerProps?: FooterProps;
  /** Hide header */
  hideHeader?: boolean;
  /** Hide footer */
  hideFooter?: boolean;
}

export function Layout({
  children,
  headerProps,
  footerProps,
  hideHeader = false,
  hideFooter = false,
}: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {!hideHeader && <Header {...headerProps} />}
      
      <main className="flex-1">
        {children}
      </main>
      
      {!hideFooter && <Footer {...footerProps} />}
    </div>
  );
}

# Prosites Components

A reusable component library for building modern landing pages with Next.js, Tailwind CSS, and shadcn/ui.

## Installation

```bash
npm install prosites-components lucide-react clsx tailwind-merge class-variance-authority @radix-ui/react-slot
```

## Quick Start

```tsx
// app/page.tsx
import { 
  Layout, 
  Hero, 
  Services, 
  Contact, 
  CTASection 
} from "prosites-components";

export default function Page() {
  return (
    <Layout
      headerProps={{
        companyName: "Min Bedrift",
        navLinks: [
          { label: "Tjenester", href: "/tjenester" },
          { label: "Om oss", href: "/om-oss" },
          { label: "Kontakt", href: "/kontakt" },
        ],
        ctaText: "Kontakt oss",
        ctaHref: "/kontakt",
        primaryColor: "#2B7FFF",
        transparent: true,
      }}
      footerProps={{
        companyName: "Min Bedrift AS",
        description: "Vi leverer fantastiske løsninger.",
        contact: {
          phone: "+47 00 00 00 00",
          email: "hei@bedrift.no",
          address: "Osloveien 1, 0150 Oslo"
        },
        primaryColor: "#2B7FFF",
        columns: [
          { title: "Tjenester", links: [...] },
          { title: "Om oss", links: [...] },
        ]
      }}
    >
      <Hero
        subtitle="Bedriftsnavn"
        headline="Vi leverer <span style='color:#2B7FFF'>fantastiske</span> løsninger"
        description="Din partner for suksess"
        ctaText="Kontakt oss"
        ctaHref="/kontakt"
        primaryColor="#2B7FFF"
      />
      
      <Services
        services={[
          { title: "Tjeneste 1", description: "Beskrivelse" },
          { title: "Tjeneste 2", description: "Beskrivelse" },
        ]}
        primaryColor="#2B7FFF"
      />
      
      <Contact contact={{ email: "hei@bedrift.no" }} primaryColor="#2B7FFF" />
    </Layout>
  );
}
```

## Components

### Layout
- `Layout` - Main wrapper with persistent Header + Footer

### Page Sections
- `Hero` - Hero section with background image and animations
- `Services` - Services grid
- `About` - About section
- `Contact` - Contact form section
- `CTASection` - Call-to-action section
- `Stats` - Statistics counter section
- `Features` - Features grid or list
- `Process` - Process steps
- `Testimonials` - Customer testimonials
- `Logos` - Logo carousel

### Page Templates
- `ContactPage` - Full contact page with form
- `AboutPage` - Full about page with team
- `ServicesPage` - Services listing page

## Brand Colors

The `primaryColor` prop controls the main accent color throughout components.

```tsx
<Hero primaryColor="#2B7FFF" />
```

## Available Props

### Header
```tsx
{
  companyName: string,
  logo?: string,
  navLinks: { label: string, href: string }[],
  ctaText?: string,
  ctaHref?: string,
  primaryColor: string,
  transparent?: boolean  // for hero page
}
```

### Footer
```tsx
{
  companyName: string,
  description?: string,
  contact?: { phone?, email?, address? },
  columns?: { title: string, links: { label, href }[] }[],
  primaryColor: string
}
```

### Hero
```tsx
{
  subtitle?: string,
  headline: string,
  description?: string,
  ctaText?: string,
  ctaHref?: string,
  ctaSecondary?: string,
  ctaSecondaryHref?: string,
  backgroundImage?: string,
  primaryColor: string
}
```

## Tech Stack

- Next.js 14+
- Tailwind CSS 4
- shadcn/ui components
- Lucide icons

## License

MIT

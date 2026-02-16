import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export interface ContactInfo {
  email?: string;
  phone?: string;
  address?: string;
}

export interface ContactProps {
  /** Section title */
  title?: string;
  /** Contact information */
  contact?: ContactInfo;
  /** Primary brand color */
  primaryColor?: string;
}

export function Contact({
  title = "Kontakt oss",
  contact = {},
  primaryColor = "#2B7FFF",
}: ContactProps) {
  const { email = "", phone = "", address = "" } = contact;

  return (
    <section id="contact" className="py-20 px-6 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#101828] mb-4">{title}</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-[#101828] mb-6">Ta kontakt</h3>
            
            <div className="space-y-4">
              {email && (
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${primaryColor}15` }}
                  >
                    <Mail className="w-5 h-5" style={{ color: primaryColor }} />
                  </div>
                  <a href={`mailto:${email}`} className="text-[#6B7280] hover:text-[#101828] transition-colors">
                    {email}
                  </a>
                </div>
              )}
              
              {phone && (
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${primaryColor}15` }}
                  >
                    <Phone className="w-5 h-5" style={{ color: primaryColor }} />
                  </div>
                  <a href={`tel:${phone}`} className="text-[#6B7280] hover:text-[#101828] transition-colors">
                    {phone}
                  </a>
                </div>
              )}
              
              {address && (
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${primaryColor}15` }}
                  >
                    <MapPin className="w-5 h-5" style={{ color: primaryColor }} />
                  </div>
                  <span className="text-[#6B7280]">{address}</span>
                </div>
              )}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-gray-200">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#101828] mb-2">Navn</label>
                    <Input placeholder="Ditt navn" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#101828] mb-2">E-post</label>
                    <Input type="email" placeholder="din@epost.no" className="w-full" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#101828] mb-2">Melding</label>
                  <Textarea placeholder="Hvordan kan vi hjelpe deg?" className="w-full min-h-[120px]" />
                </div>
                
                <Button 
                  className="w-full text-white"
                  style={{ backgroundColor: primaryColor }}
                >
                  Send melding
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

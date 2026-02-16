"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export interface ContactPageProps {
  /** Company name */
  companyName?: string;
  /** Contact information */
  contact?: {
    email?: string;
    phone?: string;
    address?: string;
    postalAddress?: string;
  };
  /** Opening hours */
  openingHours?: string;
  /** Primary brand color */
  primaryColor?: string;
}

export function ContactPage({
  companyName = "Bedrift",
  contact = {},
  openingHours = "08:00 - 16:00 mandag til fredag",
  primaryColor = "#2B7FFF",
}: ContactPageProps) {
  const { email = "", phone = "", address = "", postalAddress = "" } = contact;

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Kontakt oss</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vi vil gjerne høre fra deg. Ta kontakt så hjelper vi deg med dine behov.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Kontaktinformasjon</h2>
            
            <div className="space-y-6">
              {email && (
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${primaryColor}15` }}
                  >
                    <Mail className="w-5 h-5" style={{ color: primaryColor }} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800 mb-1">E-post</div>
                    <a href={`mailto:${email}`} className="text-gray-600 hover:opacity-80">
                      {email}
                    </a>
                  </div>
                </div>
              )}
              
              {phone && (
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${primaryColor}15` }}
                  >
                    <Phone className="w-5 h-5" style={{ color: primaryColor }} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800 mb-1">Telefon</div>
                    <a href={`tel:${phone}`} className="text-gray-600 hover:opacity-80">
                      {phone}
                    </a>
                  </div>
                </div>
              )}
              
              {address && (
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${primaryColor}15` }}
                  >
                    <MapPin className="w-5 h-5" style={{ color: primaryColor }} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800 mb-1">Besøksadresse</div>
                    <div className="text-gray-600">{address}</div>
                  </div>
                </div>
              )}

              {postalAddress && (
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${primaryColor}15` }}
                  >
                    <MapPin className="w-5 h-5" style={{ color: primaryColor }} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800 mb-1">Postadresse</div>
                    <div className="text-gray-600">{postalAddress}</div>
                  </div>
                </div>
              )}
              
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${primaryColor}15` }}
                >
                  <Clock className="w-5 h-5" style={{ color: primaryColor }} />
                </div>
                <div>
                  <div className="font-medium text-gray-800 mb-1">Åpningstider</div>
                  <div className="text-gray-600">{openingHours}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-gray-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send oss en melding</h2>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Navn</label>
                    <Input placeholder="Ditt navn" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">E-post</label>
                    <Input type="email" placeholder="din@epost.no" className="w-full" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                  <Input type="tel" placeholder="+47 00 00 00 00" className="w-full" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Emne</label>
                  <Input placeholder="Hva gjelder det?" className="w-full" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Melding</label>
                  <Textarea placeholder="Skriv din melding her..." className="w-full min-h-[150px]" />
                </div>
                
                <Button 
                  className="w-full text-white py-6"
                  style={{ backgroundColor: primaryColor }}
                >
                  Send melding
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

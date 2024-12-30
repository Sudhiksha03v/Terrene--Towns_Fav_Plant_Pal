"use client";

import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <MainNav />
      <main className="pt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-serif mb-4">Contact Us</h1>
            <p className="text-gray-600">
              Have questions? We'd love to hear from you. Send us a message
              and we'll respond as soon as possible.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
"use client";

import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <MainNav />
      <main className="pt-24">
        {/* Our Story Section */}
        <section className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-serif mb-6">Our Story</h1>
            <p className="text-lg text-gray-600">
              Founded in 2023, Plantify began with a simple mission: to bring the beauty and benefits of plants into every home.
            </p>
          </div>
        </section>

        {/* Curated Plants Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[600px]">
                <Image
                  src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
                  alt="Our nursery"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-serif">Carefully Curated</h2>
                <p className="text-gray-600">
                  Every plant in our collection is hand-picked and nurtured in our state-of-the-art nursery. We ensure each plant meets our high standards for health and vitality before it reaches your home.
                </p>
                <Button size="lg">Visit Our Shop</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[ 
                { title: "Sustainability", description: "We're committed to eco-friendly practices in everything we do." },
                { title: "Quality", description: "Only the healthiest plants make it to our collection." },
                { title: "Education", description: "We empower our customers with plant care knowledge." }
              ].map((value) => (
                <div key={value.title} className="text-center">
                  <h3 className="text-xl font-medium mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="py-16 bg-gradient-to-r from-green-50 to-white">
          <div className="container mx-auto px-4 text-center space-y-8">
            <h2 className="text-4xl font-serif text-green-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-700 max-w-xl mx-auto mb-8">
              We’d love to hear from you! Whether you have questions, feedback, or just want to chat about plants, send us a message.
            </p>
            
            {/* Contact Form */}
            <form className="max-w-3xl mx-auto space-y-6">
              {/* Name and Email Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="w-full space-y-2">
                  <label htmlFor="name" className="text-lg font-semibold text-gray-700">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    className="w-full p-4 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="w-full space-y-2">
                  <label htmlFor="email" className="text-lg font-semibold text-gray-700">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-4 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-lg font-semibold text-gray-700">Your Message</label>
                <textarea
                  id="message"
                  className="w-full p-4 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <Button type="submit" size="lg" className="w-full bg-green-900 text-white hover:bg-green-700 focus:ring-2 focus:ring-green-500 transition-all">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

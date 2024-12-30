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
            <h1 className="text-4xl font-serif mb-6">A Lil' Fashback?</h1>
            <p className="text-lg text-gray-700">
              Welcome to Terrene, where luxury meets nature! Founded in 2020, we are on a mission to bring bold, handpicked plants into your home, turning any space into a fresh, vibrant oasis. Not just about décor—it is about living with style, greenery, and a little extra oxygen. Ready to elevate your space? Let Terrene do the greenifying!
            </p>
          </div>
        </section>

        {/* Curated Plants Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[600px]">
                <Image
                  src="/images/aboutus.jpg"
                  alt="Our nursery"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-serif">The Terrene Story...</h2>
                <h3 className="text-3xl font-serif mt-4">Two Friends. One Wild Idea🪴</h3>
                <p className="text-lg text-gray-700">
                  Maya, a designer from Delhi, and Drake, a plant enthusiast from Goa, shared a common dream: to bring the lush, untold beauty of the world's plants into homes with a touch of luxury and Indian flair. Tired of the ordinary, they traveled from Himalayan peaks to coastal jungles, uncovering rare plants and meeting artisans who crafted quirky, elegant planters. <br /> <br />
                  From their journey, Terrene was born—a brand that blends global treasures with a dash of Indian spirit, bringing plants that tell stories and planters that are works of art! 🌿
                </p>
                <br />
                <Button
                  size="lg"
                  className="w-full bg-green-900 text-white hover:bg-green-700 focus:ring-2 focus:ring-green-700 transition-all text-xl font-medium"
                >
                  Connect with the team behind the scenes!
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif text-center mb-12 text-gray-800">What Drives Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Earth First, Always", description: "We’re not just about plants—we’re on a mission to keep the planet thriving with every leaf." },
                { title: "Only the Best", description: "No drama, just drama-free plants. We handpick only the healthiest, happiest ones for you." },
                { title: "From Novice to Ninja", description: "Whether you're a plant rookie or a leaf legend, we'd make you the best plant parent." }
              ].map((value) => (
                <div key={value.title} className="text-center group hover:bg-gray-200 p-6 rounded-lg shadow-md transition-all duration-300">
                  <h3 className="text-2xl font-medium text-gray-800 group-hover:text-green-600 mb-4">{value.title}</h3>
                  <p className="text-lg text-gray-700 group-hover:text-gray-800">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="py-16 bg-gray-200">
          <div className="container mx-auto px-4 text-center space-y-8">
            <h2 className="text-4xl font-serif text-gray-900 mb-4">Say Hi?</h2>
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
                <label htmlFor="message" className="text-lg font-semibold text-gray-700">Text whatever you'd wanna say...</label>
                <textarea
                  id="message"
                  className="w-full p-4 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-green-800 text-white hover:bg-green-700 focus:ring-2 focus:ring-green-800 transition-all text-xl font-medium"
                >
                  Send us a Message!
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

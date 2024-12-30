"use client";

// IMPORTS
import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/footer";
import { ProductGrid } from "@/components/product-grid";
import { Carousel } from "@/components/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// EXPORTED FUNCTION & MAIN NAVIGATION
export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <MainNav />

      {/* HERO SECTION CAROUSEL ELEMENT */}
      <Carousel /> <br />

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-serif mb-8 text-center">Top Favs of the Town!</h2>
        <br />
     
        <ProductGrid />
      </section>

      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[500px]">
              <Image
                src="/images/deck2img.jpg"
                alt="Indoor plant care"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-serif"> Breathe Life into Your Space 🌿</h2>
              <br />
              <br />
              <p className="text-lg text-muted-foreground">
                Say hello to our handpicked lineup of chic indoor plants to level up your space. Handpicked, pampered, and ready to thrive, these leafy beauties will bring all the zen, style, and good vibes you need. <br />
                Totally low-maintenance stunners, chosen with care, so all you have to do is enjoy the vibes. <br /> <br />
                We do the picking, pampering, and prepping—you just sit back and watch your space come alive.
              </p>
              <br />
              <Button size="lg" className="font-serif text-lg px-8 py-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-green-700 hover:text-white border-2 border-green-700">
                Shop Collection
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-12 text-center">🌱Why We're Your Green Dream Team?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Plant Parent Toolkit",
                description: "Dive into expert care tips with every plant, so you’re always set up for success.",
              },
              {
                title: "Only the Best for Your Nest",
                description: "We hand-pick the healthiest, most vibrant plants that are guaranteed to thrive.",
              },
              {
                title: "Eco-Express Delivery",
                description: "Your plants arrive fast, fresh, and safely packed—ready to shine in your space.",
              },
              {
                title: "Stylish & Sustainable",
                description: "Our plants and pots are curated with style and eco-consciousness in mind, elevating your space while caring for the planet.",
              },
            ].map((feature, index) => (
              <div key={feature.title} className="text-center">
                <h3 className="text-2xl font-large mb-4">{feature.title}</h3>
                <p className="text-gray-1000 max-w-md mx-auto">{feature.description}</p>
                {index === 1 && <br />}
                {index === 1 && <br />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS SECTION */}
        <section className="bg-muted py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-serif mb-12 text-green-800">What Our Customers Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[{ 
          quote: "This is the best plant shop I have ever come across. The quality is unmatched!", 
          name: "Emily R.", 
          avatar: "https://randomuser.me/api/portraits/women/45.jpg" 
        },
        { 
          quote: "My indoor space feels so much more alive thanks to their amazing collection.", 
          name: "Michael K.", 
          avatar: "https://randomuser.me/api/portraits/men/32.jpg" 
        },
        { 
          quote: "Fast delivery and healthy plants. I'm beyond impressed!", 
          name: "Sophia L.", 
          avatar: "https://randomuser.me/api/portraits/women/21.jpg" 
        }]
        .map((testimonial, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
            <div className="flex justify-center mb-6">
              <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover border-4 border-green-500" />
            </div>
            <p className="italic text-lg text-gray-700 mb-4">“{testimonial.quote}”</p>
            <h4 className="font-medium text-xl text-green-700">{testimonial.name}</h4>
          </div>
        ))}
      </div>
    </div>
  </section>



      {/* NEWSLETTER SECTION */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-serif mb-4">Join the Green Revolution 🌿</h2>
          <p className="text-lg text-muted-foreground">Get the latest plant care tips, new arrivals, and exclusive offers delivered right to your inbox!</p>
          <form className="max-w-xl mx-auto flex justify-center items-center space-x-4">
            <input
              type="email"
              placeholder="Your email address"
              className="p-4 w-full max-w-md rounded-lg border border-muted-foreground text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Button type="submit" size="lg" className="font-serif bg-green-900 text-white hover:bg-green-700">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

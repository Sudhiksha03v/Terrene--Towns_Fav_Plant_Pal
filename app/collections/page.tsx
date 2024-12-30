"use client";

import { useState } from "react";
import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    id: 1,
    name: "Kentia Palm",
    description: "A low-light legend that turns your space into an air-purifying haven. Tropical vibes, zero effort",
    image: "/images/kentia.jpg",
    count: 12,
  },
  {
    id: 2,
    name: "Pilea Peperomioides",
    description: "The money magnet vibes & fortune wavelengths in every leaf",
    image:"/images/pilea.jpg",
    count: 8,
  },
  {
    id: 3,
    name: "Jade Bonsai",
    description: "A power-packed mini-tree that grows stronger with time. Patience meets prosperity",
    image:"/images/Jade.jpg",
    count: 15,
  },
  {
    id: 4,
    name: "Cast Iron Rubber",
    description: "Unstoppable resilience. The atomic plant that survives everything and still shines",
    image:"/images/rubber.jpg",
    count: 20,
  },
  {
    id: 5,
    name: "Monstera Deliciosa",
    description: "Leaf perfection, evolved. A natural photosynthesis machine with style",
    image:"/images/monstera.jpg",
    count: 10,
  },
  {
    id: 6,
    name: "Dracaena Lisa",
    description: "Elegance meets air-purification. The plant that refreshes your space effortlessly.",
    image: "/images/dracena.jpg",
    count: 18,
  },
  {
    id: 7,
    name: "Fiddle Leaf Fig",
    description: "A statement plant with bold, large leaves that add an instant tropical vibe.",
    image: "/images/fiddleleaf.jpg",
    count: 10,
  },
  {
    id: 8,
    name: "Spider Plant",
    description: "A resilient and charming plant, perfect for beginners and pet-friendly homes.",
    image: "/images/spiderplant.jpg",
    count: 13,
  },
  // Add more items as needed
];

export default function CollectionsPage() {
  const [visible, setVisible] = useState(6); // Initial visible items

  const handleLoadMore = () => {
    setVisible(visible + 6); // Show 6 more items on "Load More" click
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MainNav />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-4xl font-serif text-gray-800 mb-12 text-center">
            Explore Our Themed Variants of the Month
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {collections.slice(0, visible).map((collection) => (
              <Link href={`/collections/${collection.id}`} key={collection.id}>
                <div className="group cursor-pointer relative overflow-hidden rounded-xl shadow-md transform transition-all hover:scale-105 hover:shadow-xl hover:opacity-95">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={collection.image}
                      alt={collection.name}
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30 group-hover:opacity-40 transition-opacity duration-300" />
                  <div className="relative z-10 p-6 space-y-3 text-center">
                    <h3 className="text-2xl font-serif font-semibold text-white group-hover:text-green-700 transition-all duration-300">
                      {collection.name}
                    </h3>
                    <p className="text-base text-white group-hover:text-gray-100 transition-all duration-300">
                      {collection.description}
                    </p>
                    <p className="text-sm text-gray-300">{collection.count} plants</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          {visible < collections.length && (
            <div className="flex justify-center mt-12">
              <button
                onClick={handleLoadMore}
                className="px-8 py-4 rounded-lg text-lg font-medium bg-green-700 text-white hover:bg-green-800 transition duration-300"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

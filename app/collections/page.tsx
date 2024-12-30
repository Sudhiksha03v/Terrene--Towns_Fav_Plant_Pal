"use client";

import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    id: 1,
    name: "Low Light Plants",
    description: "Perfect for spaces with minimal natural light",
    image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8",
    count: 12,
  },
  {
    id: 2,
    name: "Pet Friendly",
    description: "Safe for homes with furry friends",
    image: "https://images.unsplash.com/photo-1491147334573-44cbb4602074",
    count: 8,
  },
  {
    id: 3,
    name: "Air Purifying",
    description: "NASA-approved plants for cleaner air",
    image: "https://images.unsplash.com/photo-1545241047-6083a3684587",
    count: 15,
  },
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen">
      <MainNav />
      <main className="pt-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-serif mb-8">Collections</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <Link href={`/collections/${collection.id}`} key={collection.id}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-4">
                    <Image
                      src={collection.image}
                      alt={collection.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-2">{collection.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">{collection.description}</p>
                  <p className="text-sm text-gray-500">{collection.count} plants</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
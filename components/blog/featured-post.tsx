import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FeaturedPost() {
  return (
    <div className="relative rounded-lg overflow-hidden mb-16">
      <div className="aspect-[21/9] relative">
        <Image
          src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b"
          alt="Plant care basics"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 p-8 text-white">
        <p className="text-sm mb-2">Featured Post</p>
        <h2 className="text-3xl font-serif mb-4">Essential Plant Care Tips for Beginners</h2>
        <p className="mb-6 max-w-2xl">
          Discover the fundamental care techniques that will help your indoor plants thrive.
          From watering schedules to light requirements, we cover everything you need to know.
        </p>
        <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
          Read More
        </Button>
      </div>
    </div>
  );
}
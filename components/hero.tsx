import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center">
      <Image
        src="https://images.unsplash.com/photo-1470058869958-2a77ade41c02"
        alt="Hero image"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">
            Bring Nature Inside
          </h1>
          <p className="text-xl mb-8">
            Transform your space with our collection of beautiful indoor plants
          </p>
          <Button size="lg" className="font-serif">
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  );
}
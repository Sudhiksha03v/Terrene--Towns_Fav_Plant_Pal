import Image from "next/image";
import Link from "next/link";

export function FeaturedPost() {
  return (
    <div className="relative rounded-lg overflow-hidden mb-16 shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="aspect-[21/9] relative">
        <Image
          src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b"
          alt="Plant care basics"
          fill
          className="object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 p-8 text-white">
        <p className="text-base mb-2 opacity-80 font-serif">Featured Post</p>
        <h2 className="text-4xl font-serif mb-4">
          Plant Parenthood 101: Thriving Tips for Newbie Green Thumbs
        </h2>
        <p className="mb-6 max-w-2xl text-base opacity-90">
          Ready to turn your space into a plant paradise? We’ve got the scoop on keeping your leafy BFFs happy and healthy—think watering hacks, light vibes, and all the must-knows to help your indoor jungle flourish!
        </p>

        {/* Button */}
        <Link
          href="/blog/featured"
          className="px-6 py-3 rounded-lg text-base font-medium bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

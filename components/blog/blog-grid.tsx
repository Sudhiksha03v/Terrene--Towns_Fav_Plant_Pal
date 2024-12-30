import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type Post = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  formattedDate?: string;
};

const posts: Post[] = [
  {
    id: 2,
    title: "Plant Light Demystified",
    excerpt:
      "Not all plants are sun-chasers! Discover which ones thrive in the spotlight and which prefer a cozy, low-key corner. Let’s match your greens with their perfect lighting vibe!",
    image: "/images/blog1.jpeg",
    date: "2024-09-10",
  },
  {
    id: 3,
    title: "Plant Problems? We've Got the Fix!",
    excerpt:
      "Don't let common plant troubles get you down! From yellowing leaves to pesky pests, we got the solutions to help your indoor plants bounce back and thrive.",
    image: "/images/blog2.jpeg",
    date: "2024-07-05",
  },
  {
    id: 4,
    title: "Your New Plant BFF Needs You!",
    excerpt:
      "From watering tips to lighting hacks, we’ve got everything you need to know to make sure your indoor jungle is looking fab.",
    image: "/images/blog3.jpeg",
    date: "2024-03-01",
  },
  {
    id: 5,
    title: "The Secret Sauce to Perfect Plant Hydration",
    excerpt:
      "No more stressed-out plants! Learn the simple steps to make sure your green friends get just the right amount of H2O, and watch them grow into your lush, indoor oasis.",
    image: "/images/blog4.jpeg",
    date: "2024-01-15",
  },
  {
    id: 6,
    title: "The Ultimate Guide to Indoor Plant Care",
    excerpt:
      "From watering schedules to light requirements, this guide covers everything you need to keep your indoor plants happy and thriving.",
    image: "/images/blog5.jpeg",
    date: "2023-12-10",
  },
  {
    id: 7,
    title: "Reviving Your Droopy Indoor Plants",
    excerpt:
      "Got droopy leaves? Find out the causes and solutions to revive your indoor plants and restore them to their healthy, vibrant selves.",
    image: "/images/blog6.jpeg",
    date: "2023-11-20",
  },
];

export function BlogGrid() {
  const [visiblePosts, setVisiblePosts] = useState(3); // Initially, show 3 posts
  const [formattedPosts, setFormattedPosts] = useState(posts); // To store posts with formatted dates

  useEffect(() => {
    // Format the dates on the client-side after initial render
    const formatted = posts.map(post => ({
      ...post,
      formattedDate: new Date(post.date).toLocaleDateString("en-US") // Using a consistent format
    }));
    setFormattedPosts(formatted);
  }, []);

  const loadMorePosts = () => {
    setVisiblePosts((prev) => prev + 3); // Show 3 more posts when "Load More" is clicked
  };

  return (
    <div className="space-y-16">
      <div className="container mx-auto px-6">
        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {formattedPosts.slice(0, visiblePosts).map((post) => (
            <div
              key={post.id}
              className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <div className="relative w-full h-72">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="intrinsic"
                  width={500}
                  height={300}
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <p className="text-sm text-gray-500 font-serif">
                  {post.formattedDate}
                </p>
                <h3 className="text-xl font-serif font-semibold text-gray-800">
                  {post.title}
                </h3>
                <p className="text-base text-gray-600 line-clamp-3">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visiblePosts < formattedPosts.length && (
          <div className="flex justify-center mt-8 mb-16">
            <button
              onClick={loadMorePosts}
              className="py-3 px-8 bg-transparent text-green-600 border border-green-600 rounded-lg hover:bg-green-800 hover:text-white transition duration-300"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

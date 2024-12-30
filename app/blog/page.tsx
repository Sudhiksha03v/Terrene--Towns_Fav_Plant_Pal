"use client";

import { MainNav } from "@/components/navigation/main-nav";
import Footer from "@/components/footer";
import { BlogGrid } from "@/components/blog/blog-grid";
import { FeaturedPost } from "@/components/blog/featured-post";

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <MainNav />
      <main className="pt-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif mb-8">✒️Blogs from our plant parents...</h1>
          <FeaturedPost />
          <BlogGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
}
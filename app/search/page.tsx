"use client";

import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/footer";
import { SearchResults } from "@/components/search/search-results";
import { SearchBar } from "@/components/search/search-bar";
import { useState } from "react";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen">
      <MainNav />
      <main className="pt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto mb-12">
            <h1 className="text-4xl font-serif text-center mb-8">Search Products</h1>
            <SearchBar query={query} setQuery={setQuery} />
          </div>
          <SearchResults query={query} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
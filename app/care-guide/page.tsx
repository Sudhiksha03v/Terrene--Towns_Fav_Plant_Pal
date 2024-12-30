"use client";

import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/footer";
import { CareGuideGrid } from "@/components/care-guide/care-guide-grid";
import { SearchGuide } from "@/components/care-guide/search-guide";

export default function CareGuidePage() {
  return (
    <div className="min-h-screen">
      <MainNav />
      <main className="pt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-serif mb-4">Plant Care Guide</h1>
            <p className="text-gray-600">
              Find detailed care instructions for all your plants. Search by plant name
              or browse our comprehensive guide.
            </p>
          </div>
          <SearchGuide />
          <CareGuideGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
}
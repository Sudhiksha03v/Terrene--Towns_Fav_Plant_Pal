"use client";

import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/footer";
import { ProductGrid } from "@/components/product-grid";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MainNav />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center mb-10">
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-serif text-green-800 mb-2">
              Plants That Fit Your Vibe
              </h1>
              <p className="text-lg text-gray-600">
              Browse our curated collection of indoor plants and add some fresh vibes to your space.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Select defaultValue="featured">
                <SelectTrigger className="w-[200px] text-gray-700 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-high">Price: Newest Picks</SelectItem>
                  <SelectItem value="featured">Featured Bestsellers</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="newest">Most Popular</SelectItem>
                  <SelectItem value="price-low">Price: Mid Range</SelectItem>
                  <SelectItem value="price-low">Price: High to Low</SelectItem> 
                  
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Product Grid */}
          <ProductGrid />

          {/* Load More Button */}
          <div className="flex justify-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-green-900 hover:text-white transition-colors duration-300 text-lg px-6 py-3 rounded-lg border-2 border-green-700"
            >
              Load More
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

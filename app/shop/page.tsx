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
    <div className="min-h-screen">
      <MainNav />
      <main className="pt-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-serif">All Plants</h1>
            <div className="flex items-center space-x-4">
              <Select defaultValue="featured">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <ProductGrid />
          <div className="flex justify-center mt-12">
            <Button variant="outline" size="lg">Load More</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
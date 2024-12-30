"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const allProducts = [
  {
    id: 1,
    name: "Olive Bush",
    image: "/images/olive.jpg",
    category: "Low Light Plants",
  },
  {
    id: 2,
    name: "Fiddle Leaf Fig Tree",
    image: "/images/fiddle.jpg",
    category: "Popular Plants",
  },
  {
    id: 3,
    name: "Lady Palm",
    image: "/images/ladypalm.jpg",
    category: "Air Purifying",
  },
  {
    id: 4,
    name: "Dragon Tree",
    image: "/images/dragon.jpg",
    category: "Large Plants",
  },
];

interface SearchResultsProps {
  query: string;
}

export function SearchResults({ query }: SearchResultsProps) {
  const filteredProducts = allProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
  );

  const [visibleProducts, setVisibleProducts] = useState(filteredProducts.slice(0, 4));

  const handleLoadMore = () => {
    const nextProducts = filteredProducts.slice(visibleProducts.length, visibleProducts.length + 4);
    setVisibleProducts([...visibleProducts, ...nextProducts]);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {visibleProducts.map((product) => (
          <Card
            key={product.id}
            className="transition-all transform hover:scale-105 hover:shadow-xl rounded-xl overflow-hidden bg-white shadow-lg"
          >
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 transform hover:scale-110"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-3 p-6">
              <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
              <p className="text-base text-gray-500">{product.category}</p> {/* Increased font size */}
              <Button
                variant="outline"
                className="w-full py-3 text-sm text-green-700 border-green-700 rounded-lg hover:bg-green-700 hover:text-white transition-all duration-300 ease-in-out"
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {visibleProducts.length < filteredProducts.length && (
        <div className="text-center mb-12">
          <Button
            onClick={handleLoadMore}
            className="py-3 px-6 text-sm text-white bg-green-600 rounded-full hover:bg-green-700 hover:shadow-lg transition duration-300 transform hover:scale-105"
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}

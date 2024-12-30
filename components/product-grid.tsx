"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Low Maintenance Indoor",
    image: "/images/lowmaintenance.jpg",
  },
  {
    id: 2,
    name: "Air Purificant Variants",
    image: "/images/airpuree.jpg",
  },
  {
    id: 3,
    name: "Pet Friendly Plants",
    image: "/images/petfriendly.jpg",
  },
  {
    id: 4,
    name: "Low Light Survivors",
    image:"/images/lowlight.jpg",
  },
];

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-xl">
          <CardContent className="p-0 relative">
            <div className="relative aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform rounded-lg"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-center space-y-4 p-6">
            <h3 className="font-s=medium text-xl text-gray-900 text-center">{product.name}</h3>
            <Button
              variant="outline"
              className="w-full text-lg font-medium py-3 transition-colors hover:bg-green-700 hover:text-white"
            >
              Check Collection
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

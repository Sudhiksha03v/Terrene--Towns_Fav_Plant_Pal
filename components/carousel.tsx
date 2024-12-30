"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    image: "/images/carousel1.jpg", 
    title: "Leaf the Ordinary Behind",
    description: "Step up your decor game with our gorgeous plant collection",
  },
  {
    id: 2,
    image: "/images/carousel2.jpg", 
    title: "Rooted in Style",
    description: "Bring the wild, untamed beauty of nature into your home",
  },
  {
    id: 3,
    image: "/images/carousel3.png",
    title: "The Zen Garden",
    description: "Minimalist plants that promote calm and balance",
  },
  {
    id: 4,
    image: "/images/carousel4.jpg",
    title: "Home Grown Love",
    description: "Modern plants for the fast-paced, urban space",
  },
  {
    id: 5,
    image: "/images/carousel5.jpg",
    title: "Into the Wild",
    description: "For those who just want to relax with some greenery",
  },
];

export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative h-[80vh]">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center text-white">
              <h2 className="text-5xl md:text-6xl font-serif mb-4 font-uchen">{slide.title}</h2>
              <p className="text-xl mb-8 font-uchen">{slide.description}</p>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-2 border-white bg-transparent font-uchen text-lg rounded-md transition-colors duration-300 hover:bg-white hover:text-black hover:border-black z-20"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white z-30"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white z-30"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

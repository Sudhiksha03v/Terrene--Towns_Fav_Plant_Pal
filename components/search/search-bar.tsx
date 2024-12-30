"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
}

export function SearchBar({ query, setQuery }: SearchBarProps) {
  return (
    <div className="relative max-w-lg mx-auto mb-8">
      <div className="relative flex items-center">
        {/* Search Icon */}
        <Search className="absolute left-3 text-gray-400 h-5 w-5" />
        
        {/* Input Field */}
        <Input
          type="text"
          placeholder="Search for plants..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 bg-white text-gray-700 text-base focus:ring-2 focus:ring-green-900 focus:outline-none transition duration-300 ease-in-out shadow-sm hover:shadow-md" // Increased font size here
        />
      </div>
    </div>
  );
}

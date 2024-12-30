"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function SearchGuide() {
  const [search, setSearch] = useState("");

  return (
    <div className="max-w-xl mx-auto mb-12">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
        <Input
          type="text"
          placeholder="Search for a plant..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-12 py-3 pr-4 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300 w-full"
        />
      </div>
    </div>
  );
}

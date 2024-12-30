"use client";

import { ShoppingCart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import Link from "next/link";

export function NavIcons() {
  const { itemCount } = useCart();

  return (
    <div className="flex items-center space-x-4">
      <Link href="/search">
        <Button variant="ghost" size="icon" className="hover:green-700">
          <Search className="h-6 w-6" />
        </Button>
      </Link>
      <Link href="/cart">
        <Button variant="ghost" size="icon" className="hover:green-700">
          <ShoppingCart className="h-6 w-6" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </Button>
      </Link>
    </div>
  );
}
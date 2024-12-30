"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { MobileNav } from "./mobile-nav";
import { NavLinks } from "./nav-links";
import { NavIcons } from "./nav-icons";
import Link from "next/link";

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <MobileNav setIsOpen={setIsOpen} />
            </SheetContent>
          </Sheet>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </nav>

          <Link href="/" className="absolute left-1/2 -translate-x-1/2 font-serif text-3xl">
            Terrene
          </Link>

          <NavIcons />
        </div>
      </div>
    </header>
  );
}
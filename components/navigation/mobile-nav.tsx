"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface MobileNavProps {
  setIsOpen: (value: boolean) => void;
}

export function MobileNav({ setIsOpen }: MobileNavProps) {
  const links = [
    { href: "/shop", label: "Shop" },
    { href: "/collections", label: "Collections" },
    { href: "/about", label: "About" },
  ];

  return (
    <div className="flex flex-col space-y-4 mt-8">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => setIsOpen(false)}
          className="text-lg font-medium py-2"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
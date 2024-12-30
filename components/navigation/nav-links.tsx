import Link from "next/link";

export function NavLinks() {
  const links = [
    { href: "/shop", label: "Explore" },
    { href: "/collections", label: "Collections" },
    { href: "/about", label: "Our Story" },
    { href: "/blog", label: "Blog" },          
   
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-lg font-medium hover:text-green-700 transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}

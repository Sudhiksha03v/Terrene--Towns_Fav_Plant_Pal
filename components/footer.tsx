import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Plantify Brand Section */}
          <div className="space-y-4">
            <h3 className="font-serif text-3xl text-green-900">Terrene</h3>
            <p className="text-base text-gray-600">
              Bring the outdoors in!
            </p>
            <p className="text-base text-gray-600">
              Live wild & free!
            </p>
            <div className="flex space-x-8 text-gray-600 hover:text-green-700 transition-colors">
              <Button variant="ghost" size="icon">
                <Facebook className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Shop Section */}
          <div>
            <h4 className="font-medium text-xl text-green-700 mb-4">Check these out!</h4>
            <ul className="space-y-2">
              <li><Link href="/shop" className="text-sm text-gray-600 hover:text-gray-900">Bestsellers of the month</Link></li>
              <li><Link href="/shop" className="text-sm text-gray-600 hover:text-gray-900">New Arrivals in town</Link></li>
              <li><Link href="/shop" className="text-sm text-gray-600 hover:text-gray-900">Our Plant Gallery</Link></li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h4 className="font-medium text-xl text-green-700 mb-4">Help Desk</h4>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-sm text-gray-600 hover:text-gray-900">FAQs</Link></li>
              <li><Link href="/shipping" className="text-sm text-gray-600 hover:text-gray-900">Shipping Details</Link></li>
              <li><Link href="/returns" className="text-sm text-gray-600 hover:text-gray-900">Returns & Orders</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-medium text-xl text-green-700 mb-4">Leafy Abode</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">2468 GrootWood Lane, Brookyln Street 616, </li>
              <li className="text-sm text-gray-600">Xandar District, VVest Asgard, NYC</li>
              <li className="text-sm text-gray-600">sayhiplants@terrene.com</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t mt-8 pt-8">
          <p className="text-sm text-gray-600 text-center">
           <span className="font-medium text-black">Terrene. [2024] / All rights reserved © </span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
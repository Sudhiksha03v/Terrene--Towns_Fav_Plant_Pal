"use client";

import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/footer";
import { CartItems } from "@/components/cart/cart-items";
import { CartSummary } from "@/components/cart/cart-summary";
import { useCart } from "@/hooks/use-cart";

export default function CartPage() {
  const { items, itemCount } = useCart();

  return (
    <div className="min-h-screen">
      <MainNav />
      <main className="pt-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif text-center mb-8">Shopping Cart</h1>
          {itemCount === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">Your cart is empty</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <CartItems />
              </div>
              <div>
                <CartSummary />
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
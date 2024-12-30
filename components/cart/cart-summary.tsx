"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCart } from "@/hooks/use-cart";

export function CartSummary() {
  const { items } = useCart();
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

  return (
    <Card className="p-6 rounded-xl shadow-xl border bg-white">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8">Order Summary</h2>
      <div className="space-y-6">
        <div className="flex justify-between items-center text-lg text-gray-700">
          <span>Subtotal</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center text-lg text-gray-700">
          <span>Shipping</span>
          <span className="font-medium">${shipping.toFixed(2)}</span>
        </div>
        <div className="border-t pt-4 mt-6">
          <div className="flex justify-between items-center text-xl font-semibold text-gray-900">
            <span>Total</span>
            <span className="font-bold text-green-600">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <Button className="w-full py-3 mt-8 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ease-in-out">
        Proceed to Checkout
      </Button>
    </Card>
  );
}

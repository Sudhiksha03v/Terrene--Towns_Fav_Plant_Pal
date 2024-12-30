"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartStore {
  items: CartItem[];
  itemCount: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export const useCart = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      itemCount: 0,
      addItem: (item) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);
          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
              itemCount: state.itemCount + 1,
            };
          }
          return {
            items: [...state.items, { ...item, quantity: 1 }],
            itemCount: state.itemCount + 1,
          };
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
          itemCount: state.itemCount - (state.items.find((i) => i.id === id)?.quantity || 0),
        })),
      clearCart: () => set({ items: [], itemCount: 0 }),
    }),
    {
      name: 'cart-storage',
    }
  )
);
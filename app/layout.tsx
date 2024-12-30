// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Uchen } from 'next/font/google'; // Import Uchen font

const uchen = Uchen({ weight: '400', subsets: ['latin'], variable: '--font-uchen' }); // Define Uchen font

export const metadata: Metadata = {
  title: 'Plantify - Indoor Plants & Home Decor',
  description: 'Transform your space with our collection of beautiful indoor plants',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${uchen.variable} font-serif`}> {/* Apply Uchen font */}
        {children}
      </body>
    </html>
  );
}
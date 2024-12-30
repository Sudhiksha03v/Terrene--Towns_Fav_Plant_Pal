import './globals.css';
import type { Metadata } from 'next';
import { Uchen } from 'next/font/google'; // Import Uchen font

const uchen = Uchen({ weight: '400', subsets: ['latin'], variable: '--font-uchen' }); // Define Uchen font

export const metadata: Metadata = {
  title: 'Terrene | Your Plant Bud',
  description: 'Transform your space with our collection of beautiful indoor plants',
  icons: {
    icon: '/images/favicon.ico', 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${uchen.variable} font-serif`}> {/* Apply Uchen font */}
        {children}
      </body>
    </html>
  );
}

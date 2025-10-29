import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // ✅ importamos ambas fuentes
import "./globals.css";

// Fuente Inter (texto general)
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Fuente Playfair Display (para títulos elegantes)
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Moon Cosmetics",
  description: "Tu sitio de cosméticos con Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* ✅ activamos ambas variables */}
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}


import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Headless WP Landing",
  description: "Headless WordPress to Next.js demo landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">{children}</body>
    </html>
  );
}
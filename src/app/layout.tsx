import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer.tsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shafique Malik - Front End Developer",
  description:
    "Shafique Malik - Front End Developer. React, Next.js, TypeScript, Tailwind CSS, Node.js, Express, MongoDB, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth">
      <body className={inter.className} style={{ overflowX: "hidden" }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

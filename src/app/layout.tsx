"use client";
import Link from "next/link";
import { useState } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
    
        <header className="bg-green-600 text-white p-4">
          <div className="flex justify-between items-center max-w-6xl mx-auto">
            <h1 className="text-xl font-bold">Next.js Assignment</h1>

          
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/about" className="hover:underline">About</Link>
              <Link href="/blog" className="hover:underline">Blog</Link>
            </nav>

         
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? "✖" : "☰"}
            </button>
          </div>

        
          {isMenuOpen && (
            <nav className="flex flex-col mt-2 space-y-2 md:hidden max-w-6xl mx-auto">
              <Link href="/" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="/about" className="hover:underline" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link href="/blog" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            </nav>
          )}
        </header>

        
        <main className="flex-1 p-4 md:p-6 max-w-6xl mx-auto w-full">
          {children}
        </main>

        <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
          © 2025 Marie Grace NIYIGENA
        </footer>
      </body>
    </html>
  );
}


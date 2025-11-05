import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
       
        <header className="bg-blue-600 text-white p-4">
          <nav className="flex space-x-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/blog" className="hover:underline">Blog</Link>
          </nav>
        </header>

     
        <main className="flex-1 p-6">
          {children}
        </main>

    
        <footer className="bg-gray-800 text-white text-center p-4">
          © 2025 Next.js Assignment
        </footer>
      </body>
    </html>
  );
}

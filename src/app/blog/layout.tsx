import { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
     
      <aside className="w-full md:w-1/4 bg-gray-100 p-4">
        <h2 className="text-lg font-bold mb-4">Categories</h2>
        <ul className="space-y-2">
          <li className="hover:text-green-600 cursor-pointer">Tech</li>
          <li className="hover:text-green-600 cursor-pointer">Lifestyle</li>
          <li className="hover:text-green-600 cursor-pointer">Education</li>
        </ul>
      </aside>

   
      <div className="flex-1 p-4">
        {children}
      </div>
    </div>
  );
}

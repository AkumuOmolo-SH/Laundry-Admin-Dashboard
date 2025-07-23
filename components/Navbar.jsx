import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
     <div className="min-h-screen bg-[url('/background.png')]>
      <p className="text-gray-800 ">Kneat Laundries</p>
    <nav className="flex items-center justify-center flex gap-8 justify-center p-8 mt-6 px-4 py-2 bg-white border border-gray-300 rounded-full w-96">
     
        <ul className="flex space-x-12 ">
          <Link
            href="/About"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/AddOrder"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
          >
            Add Order
          </Link>
          <Link
            href="/Order"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
          >
            All Orders
          </Link>
        </ul>
     
    </nav>
     </div>
  );
}

import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-center">
      <nav className="flex items-center justify-center flex gap-8 justify-center p-8 mt-6 px-4 py-2 bg-white border border-gray-300 rounded-full w-94">
        <ul className="flex space-x-12 ">
          <Link
            href="/Home"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/AddOrder"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
          >
            Add Order
          </Link>
          <Link
            href="/OrderItem"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
          >
            All Orders
          </Link>
        </ul>
      </nav>
    </div>
  );
}

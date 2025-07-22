import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-8  mt-6">
      <div className="flex justify-center items-center ">
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
      </div>
    </nav>
  );
}

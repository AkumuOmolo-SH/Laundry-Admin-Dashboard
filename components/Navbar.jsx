import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div>
        <ul className="flex space-x-4">
          <Link href="/About">About</Link>
          <Link href="/AddOrder">Add Order</Link>
          <Link href="/Order">All Orders</Link>
        </ul>
      </div>
    </nav>
  );
}

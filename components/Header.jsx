import react from "react";
import Image from "next/image";
import Navbar from "./Navbar";

function Header() {
 return (
    <div className="flex items-center justify-between px-8 py-4">
      <div className="w-50 h-10 relative mix-blend-multiply">
        <Image
          src="/logo.png" 
          alt="Business Logo"
          fill
          className="object-contain"
        />
      </div>
      <Navbar />
    </div>
  );
}

export default Header;

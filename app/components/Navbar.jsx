"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger and close icons

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/About", label: "About Us" },
  { href: "/Services", label: "Services" },
  { href: "/Clientele", label: "Clientele" },
  { href: "/Blogs", label: "Blogs" },
  { href: "/Contact", label: "Contact Us" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="sticky top-0 z-50 bg-[#fbfcf82c] backdrop-blur-2xl shadow-md w-full px-5 md:px-20 flex items-center justify-between h-18">
      {/* Logo */}
      <Link href="/" onClick={() => setMenuOpen(false)}>
        <img src="/images/eTab.png" className="h-12 md:h-14" alt="eTab-logo" />
      </Link>

      <div className="flex items-center gap-5 md:gap-8">
        <Link
          href="tel:+918299898209"
          className="lg:hidden bg-orange-400 text-sm selection:bg-blue-500 hover:bg-orange-500 !text-white p-2 rounded-xl transition-all duration-300"
        >
          +91 8299898209
        </Link>

        {/* Hamburger icon */}
        <div
          className="lg:hidden text-3xl  cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Links - Desktop */}
      <ul className="hidden lg:flex text-lg font-semibold gap-6 items-center">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`transition-all duration-300 ${
                pathname === link.href
                  ? "text-orange-500"
                  : "text-black hover:text-orange-500"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <Link
          href="tel:+918299898209"
          className="bg-orange-400 selection:bg-blue-500 hover:bg-orange-500 !text-white p-2 rounded-xl transition-all duration-300"
        >
          +91 8299898209
        </Link>
      </ul>

      {/* Mobile Menu */}

      <>
        <div
          className={`absolute z-40 top-16 left-0 right-0 bg-white backdrop-blur-[10px] lg:hidden flex items-center flex-col gap-4 py-8 transition-all duration-500 ease-out ${
            menuOpen
              ? "translate-x-[0%] opacity-100 pointer-events-auto"
              : "translate-x-[20%] opacity-0 pointer-events-none"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block text-xl sm:text-2xl font-medium transition-colors duration-300 ${
                pathname === link.href
                  ? "text-orange-500 font-semibold"
                  : "text-black hover:text-orange-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </>
    </div>
  );
};

export default Navbar;

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "SHOP", href: "/shop" },
  { label: "CATEGORIES", href: "/categories" },
  { label: "ABOUT", href: "/about" },
];

const MOBILE_NAV_LINKS = [
  { label: "SHOP", href: "/shop" },
  { label: "CATEGORIES", href: "/categories" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        role="banner"
        className={`fixed top-8 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F7F5F1]/95 backdrop-blur-sm shadow-[0_1px_0_0_#D9D5CE]"
            : "bg-[#F7F5F1]/90 backdrop-blur-sm border-b border-[#D9D5CE]"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-5 lg:px-10">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl tracking-[0.2em] font-semibold text-[#171717] hover:text-[#9A7653] transition-colors duration-200"
              aria-label="FORMEN — Home"
            >
              FORMEN
            </Link>

            {/* Desktop Nav — Center */}
            <nav
              className="hidden lg:flex items-center gap-8"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`text-xs tracking-[0.15em] transition-colors duration-200 font-medium ${
                      isActive
                        ? "text-[#171717]"
                        : "text-[#6B6862] hover:text-[#171717]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right — Search + Contact */}
            <div className="hidden lg:flex items-center gap-6">
              <form
                action="/search"
                method="get"
                className="flex items-center border-b border-[#D9D5CE] focus-within:border-[#171717]"
              >
                <label htmlFor="navbar-search" className="sr-only">
                  Search products
                </label>
                <input
                  id="navbar-search"
                  name="q"
                  type="search"
                  placeholder="Search products..."
                  className="w-32 bg-transparent py-2 text-xs text-[#171717] outline-none placeholder:text-[#6B6862]"
                />
                <button
                  type="submit"
                  aria-label="Search products"
                  className="text-[#6B6862] transition-colors duration-200 hover:text-[#171717]"
                >
                  <SearchIcon />
                </button>
              </form>
              <Link
                href="/contact"
                className="text-xs tracking-[0.15em] text-[#6B6862] hover:text-[#171717] transition-colors duration-200 font-medium"
              >
                CONTACT
              </Link>
            </div>

            {/* Mobile Right — Search + Hamburger */}
            <div className="flex lg:hidden items-center gap-4">
              <Link
                href="/search"
                aria-label="Search products"
                className="text-[#6B6862] hover:text-[#171717] transition-colors duration-200"
              >
                <SearchIcon />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
                className="text-[#171717] hover:text-[#9A7653] transition-colors duration-200 p-1"
              >
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#171717]/40"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer */}
          <div className="absolute top-0 right-0 h-full w-72 bg-[#F7F5F1] flex flex-col">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-[#D9D5CE]">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg tracking-[0.2em] font-semibold text-[#171717]"
              >
                FORMEN
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
                className="text-[#6B6862] hover:text-[#171717] transition-colors duration-200 p-1"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Drawer Links */}
            <nav
              className="flex flex-col px-6 pt-8 gap-1"
              aria-label="Mobile navigation"
            >
              {MOBILE_NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`text-sm tracking-[0.15em] transition-colors duration-200 py-4 border-b border-[#D9D5CE]/60 font-medium ${
                      isActive
                        ? "text-[#171717]"
                        : "text-[#6B6862] hover:text-[#171717]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

function SearchIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

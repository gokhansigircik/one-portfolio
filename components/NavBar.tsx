"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import ThemeToggle from "@/components/ThemeToggle";

const sections = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const NavBar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => setIsOpen((prev) => !prev);
  const handleCloseMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/75 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/75">
      <div className="container flex items-center justify-between gap-4 py-4">
        <Link href="/" aria-label="Go to homepage" className="font-semibold">
          GS
        </Link>

        <nav className="hidden gap-6 md:flex" aria-label="Primary">
          {sections.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleCloseMenu}
              className={clsx(
                "text-sm font-medium text-gray-600 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              )}
              aria-label={`Navigate to ${item.label}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
          type="button"
          onClick={handleToggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="inline-flex items-center rounded-md border border-gray-300 p-2 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-900 md:hidden"
          >
            <span className="sr-only">Toggle Menu</span>
            ☰
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 md:hidden">
          <nav className="container flex flex-col py-4" aria-label="Mobile">
            {sections.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleCloseMenu}
                className="px-2 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-900"
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
};

export default NavBar;

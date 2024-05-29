"use client";

import { navigationData } from "@/data/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="z-50 absolute flex flex-row bg-white w-full">
      <div className="flex flex-col mx-auto md:px-4 md:py-2 w-screen max-w-screen-xl">
        <input type="checkbox" className="hidden peer" id="navbar-open" />
        <label
          htmlFor="navbar-open"
          className="md:hidden ml-auto px-4 py-6 cursor-pointer"
        >
          <svg
            width="30"
            height="20"
            viewBox="0 0 30 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 1H30" stroke="#21243D" strokeWidth="1.6" />
            <path d="M0 10H30" stroke="#21243D" strokeWidth="1.6" />
            <path d="M0 19H30" stroke="#21243D" strokeWidth="1.6" />
          </svg>
        </label>
        <nav
          className="peer-checked:block w-full md:w-auto max-h-0 md:max-h-full peer-checked:max-h-60 transition-all overflow-hidden"
          id="navbar-menu"
        >
          <ul className="md:flex md:flex-row md:justify-end md:gap-2 bg-slate-50 md:bg-transparent mb-2 md:mb-0 p-4 md:p-2 w-full">
            {navigationData.map((route) => (
              <li key={`nav-${route.label}`}>
                <Link href={route.path}>
                  <p
                    className={cn(
                      "bg-brand-highlight-50 md:bg-transparent mb-2 p-3 md:p-2 rounded-lg font-semibold text-brand-text",
                      { "text-brand-accent": pathname === route.path }
                    )}
                  >
                    {route.label}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

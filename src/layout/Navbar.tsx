import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-[#0d0d0d]/95 border-b-4 border-[#00ff88] z-50 backdrop-blur-lg">
      <div className="max-w-[1400px] mx-auto h-full flex justify-between items-center px-6 md:px-12 lg:px-16">
        <Link
          to="/"
          className="flex items-center gap-3 text-[#00ff88] font-display font-bold text-lg md:text-xl uppercase tracking-wider transition-all hover:text-white"
        >
          <span className="w-2.5 h-2.5 bg-[#00ff88] rounded-full animate-pulse"></span>
          <span>Collins</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`relative py-2 font-mono text-sm font-semibold uppercase tracking-wider transition-all hover:text-[#00ff88] ${
                loc.pathname === n.to ? "text-[#00ff88]" : "text-[#666]"
              }`}
            >
              {n.label}
              {loc.pathname === n.to && (
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#00ff88]"></span>
              )}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-[#00ff88] p-2 border-2 border-[#00ff88] transition-all hover:bg-[#00ff88] hover:text-[#0d0d0d]"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0d0d0d] border-t-2 border-[#2d2d2d]">
          <div className="flex flex-col px-6 py-4 gap-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={`font-mono text-sm font-semibold uppercase tracking-wider transition-all py-2 border-l-4 pl-4 ${
                  loc.pathname === n.to
                    ? "border-[#00ff88] text-[#00ff88]"
                    : "border-transparent text-[#666] hover:text-[#00ff88] hover:border-[#00ff88]"
                }`}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
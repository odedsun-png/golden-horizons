"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, X, Menu } from "lucide-react";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <span className="text-xl md:text-2xl tracking-tight">
              <span className="font-light text-foreground/80">golden</span>
              <span className="font-bold text-foreground">horizons</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 md:gap-6">
            {/* Destinations Link */}
            <Link
              href="/destinations"
              className="text-sm font-semibold tracking-wide uppercase text-foreground/80 hover:text-foreground transition-colors"
            >
              Rankings
            </Link>

            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-foreground/70 hover:text-foreground transition-colors"
            >
              {isSearchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
            </button>

            {/* Subscribe Button */}
            <Link
              href="#subscribe"
              className="px-5 py-2.5 bg-foreground text-background text-sm font-semibold tracking-wide uppercase rounded hover:bg-foreground/90 transition-colors"
            >
              Subscribe
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground/70 hover:text-foreground transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4 animate-in slide-in-from-top-2 duration-200">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search destinations, tips, and more..."
                className="w-full pl-12 pr-4 py-3 bg-muted rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 border-t border-border/50 pt-4 animate-in slide-in-from-top-2 duration-200">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-12 pr-4 py-3 bg-muted rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            {/* Mobile Rankings Link */}
            <Link
              href="/destinations"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left px-3 py-2 mb-4 bg-primary/10 rounded-lg text-primary font-semibold"
            >
              Top Retirement Destinations
            </Link>

            {/* Mobile Subscribe */}
            <Link
              href="#subscribe"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center px-5 py-3 bg-foreground text-background text-sm font-semibold tracking-wide uppercase rounded hover:bg-foreground/90 transition-colors"
            >
              Subscribe
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

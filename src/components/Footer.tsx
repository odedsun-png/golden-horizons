"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1f2326] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] sm:text-xs text-white/50">
            <Link href="/privacy-policy" className="hover:text-white/80 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/30">|</span>
            <Link href="/terms-of-use" className="hover:text-white/80 transition-colors">
              Terms of Use
            </Link>
            <span className="text-white/30">|</span>
            <Link href="/disclaimer" className="hover:text-white/80 transition-colors">
              Disclaimer
            </Link>
            <span className="text-white/30">|</span>
            <a href="mailto:hello@goldenhorizons.com" className="hover:text-white/80 transition-colors">
              Contact
            </a>
          </div>

          {/* Brand */}
          <div className="text-[11px] sm:text-xs text-white/40">
            <span className="font-light">golden</span>
            <span className="font-semibold">horizons</span>
          </div>

          {/* Address */}
          <p className="text-[11px] sm:text-xs text-white/40">
            21-14 Greenwood Dr, Fair Lawn, NJ 07410, USA
          </p>

          {/* Copyright */}
          <p className="text-[11px] sm:text-xs text-white/40">
            © 2026 Golden Horizons — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

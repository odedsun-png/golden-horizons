"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1f2326] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] sm:text-xs text-white/50">
            <Link href="/privacy-policy" className="hover:text-white/80 transition-colors">Privacy Policy</Link>
            <span className="text-white/30">|</span>
            <Link href="/terms-of-use" className="hover:text-white/80 transition-colors">Terms of Use</Link>
            <span className="text-white/30">|</span>
            <Link href="/disclaimer" className="hover:text-white/80 transition-colors">Disclaimer</Link>
            <span className="text-white/30">|</span>
            <a href="mailto:hello@goldenhorizons.com" className="hover:text-white/80 transition-colors">Contact</a>
          </div>

          {/* Logo — gold version for dark background */}
          <Link href="/" className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 52" width="160" height="52">
              <g transform="translate(24, 26)">
                <line x1="0" y1="-16" x2="0" y2="-12" stroke="#D4A84B" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="7.5" y1="-14" x2="5.7" y2="-10.8" stroke="#D4A84B" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="14" y1="-7.5" x2="10.8" y2="-5.7" stroke="#D4A84B" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="-7.5" y1="-14" x2="-5.7" y2="-10.8" stroke="#D4A84B" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="-14" y1="-7.5" x2="-10.8" y2="-5.7" stroke="#D4A84B" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="16" y1="0" x2="12" y2="0" stroke="#D4A84B" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="-16" y1="0" x2="-12" y2="0" stroke="#D4A84B" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="-16" y1="4" x2="16" y2="4" stroke="#D4A84B" strokeWidth="1.2"/>
                <path d="M -9 4 A 9 9 0 0 1 9 4" fill="#D4A84B" stroke="#C8923A" strokeWidth="0.8"/>
              </g>
              <text x="48" y="24" fontFamily="Georgia, 'Times New Roman', serif" fontSize="15" fontWeight="bold" letterSpacing="2.5" fill="#D4A84B" textAnchor="start">GOLDEN HORIZONS</text>
              <text x="49" y="37" fontFamily="Georgia, 'Times New Roman', serif" fontSize="6.5" letterSpacing="2" fill="#8B7355" textAnchor="start">YOUR GUIDE TO RETIREMENT ABROAD</text>
            </svg>
          </Link>

          <p className="text-[11px] sm:text-xs text-white/40">21-14 Greenwood Dr, Fair Lawn, NJ 07410, USA</p>
          <p className="text-[11px] sm:text-xs text-white/40">© 2026 Golden Horizons — All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

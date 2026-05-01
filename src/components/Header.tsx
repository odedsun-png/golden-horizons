"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, background: '#1a1d21', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ background: '#1e1408', padding: '10px 36px', borderBottom: '3px solid #8b6914' }}>
        <div style={{ maxWidth: '980px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <div>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 900, color: '#c9a84c', lineHeight: 1, letterSpacing: '-1px' }}>
                Golden Horizons
              </div>
              <div style={{ fontFamily: 'EB Garamond, serif', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#8b6914', marginTop: '2px' }}>
                The Retirement Abroad Magazine
              </div>
            </div>
          </Link>

          <nav style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: '#faf5e9', fontSize: '13px', textDecoration: 'none', fontFamily: 'EB Garamond, serif', letterSpacing: '1px', transition: 'color 0.15s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c9a84c'} onMouseLeave={(e) => e.currentTarget.style.color = '#faf5e9'}>
              Home
            </Link>
            <Link href="/articles" style={{ color: '#faf5e9', fontSize: '13px', textDecoration: 'none', fontFamily: 'EB Garamond, serif', letterSpacing: '1px', transition: 'color 0.15s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c9a84c'} onMouseLeave={(e) => e.currentTarget.style.color = '#faf5e9'}>
              Articles
            </Link>
            <Link href="/destinations" style={{ color: '#faf5e9', fontSize: '13px', textDecoration: 'none', fontFamily: 'EB Garamond, serif', letterSpacing: '1px', transition: 'color 0.15s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c9a84c'} onMouseLeave={(e) => e.currentTarget.style.color = '#faf5e9'}>
              Destinations
            </Link>
            <a href="/#free-guide" style={{ background: '#c9a84c', color: '#1e1408', padding: '10px 18px', borderRadius: '4px', fontWeight: 700, fontSize: '13px', textDecoration: 'none', fontFamily: 'Playfair Display, serif', transition: 'background 0.15s' }} onMouseEnter={(e) => e.currentTarget.style.background = '#e0c46c'} onMouseLeave={(e) => e.currentTarget.style.background = '#c9a84c'}>
              Get Free Guide
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

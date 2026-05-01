"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ width: '100%', background: '#1e1408', padding: '42px 36px', borderTop: '4px solid #c9a84c', textAlign: 'center' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 700, color: '#faf5e9', marginBottom: '8px', letterSpacing: '-1px' }}>
          Golden Horizons
        </div>
        
        <p style={{ fontSize: '14px', color: '#c9a84c', marginBottom: '20px', fontFamily: 'EB Garamond, serif', maxWidth: '600px', margin: '0 auto 20px', lineHeight: 1.6 }}>
          The retirement abroad magazine for Americans who aren&rsquo;t done yet.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px 16px', fontSize: '13px', color: '#c9a84c', fontFamily: 'EB Garamond, serif', marginBottom: '20px' }}>
          <Link href="/about" style={{ color: '#c9a84c', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'} onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}>
            About
          </Link>
          <span style={{ opacity: 0.35 }}>|</span>
          <Link href="/privacy-policy" style={{ color: '#c9a84c', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'} onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}>
            Privacy Policy
          </Link>
          <span style={{ opacity: 0.35 }}>|</span>
          <Link href="/terms-of-use" style={{ color: '#c9a84c', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'} onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}>
            Terms of Use
          </Link>
          <span style={{ opacity: 0.35 }}>|</span>
          <Link href="/disclaimer" style={{ color: '#c9a84c', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'} onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}>
            Disclaimer
          </Link>
          <span style={{ opacity: 0.35 }}>|</span>
          <Link href="/contact" style={{ color: '#c9a84c', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'} onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}>
            Contact
          </Link>
        </div>

        <p style={{ fontSize: '11px', color: '#8b6914', fontFamily: 'EB Garamond, serif', opacity: 0.7 }}>
          © 2026 Golden Horizons — All rights reserved
        </p>
      </div>
    </footer>
  );
}

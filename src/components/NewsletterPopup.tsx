'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const STORAGE_KEY = 'gh_popup_dismissed';

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, '1');
    setVisible(false);
  }

  function handleCTA() {
    dismiss();
    if (pathname === '/') {
      const box = document.getElementById('subscribe-box');
      if (box) {
        box.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          (document.getElementById('sb-email') as HTMLInputElement | null)?.focus();
        }, 650);
      }
    } else {
      window.location.href = '/#subscribe-box';
    }
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Newsletter signup"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        backgroundColor: 'rgba(10, 18, 28, 0.72)',
        backdropFilter: 'blur(2px)',
      }}
      onClick={dismiss}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '440px',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 24px 64px rgba(0,0,0,0.55)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background image */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/Bahamas.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
          }}
        />
        {/* Gradient overlay for readability */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(170deg, rgba(8,35,55,0.76) 0%, rgba(22,12,4,0.88) 100%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            padding: '40px 36px 32px',
            textAlign: 'center',
          }}
        >
          {/* Close button */}
          <button
            onClick={dismiss}
            aria-label="Close newsletter popup"
            style={{
              position: 'absolute',
              top: '14px',
              right: '14px',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.2)',
              background: 'transparent',
              color: 'rgba(255,255,255,0.6)',
              cursor: 'pointer',
              fontSize: '14px',
              lineHeight: 1,
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.12)';
              (e.currentTarget as HTMLButtonElement).style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
              (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.6)';
            }}
          >
            ✕
          </button>

          {/* Top rule */}
          <div
            aria-hidden="true"
            style={{
              margin: '0 auto 20px',
              width: '44px',
              height: '1px',
              background: 'rgba(196,158,80,0.7)',
            }}
          />

          {/* Kicker */}
          <p
            style={{
              fontFamily: 'var(--font-garamond), Georgia, serif',
              fontSize: '10px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(220,180,90,0.9)',
              marginBottom: '14px',
            }}
          >
            Golden Horizons Newsletter
          </p>

          {/* Headline */}
          <h2
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(26px, 6vw, 34px)',
              lineHeight: 1.2,
              color: '#ffffff',
              marginBottom: '12px',
              fontWeight: 700,
            }}
          >
            Follow Your Dream
          </h2>

          {/* Subheadline */}
          <p
            style={{
              fontFamily: 'var(--font-garamond), Georgia, serif',
              fontSize: '18px',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.88)',
              marginBottom: '16px',
              lineHeight: 1.4,
            }}
          >
            Looking for ideas on where to retire?
          </p>

          {/* Body text */}
          <p
            style={{
              fontFamily: 'var(--font-garamond), Georgia, serif',
              fontSize: '14px',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.72)',
              maxWidth: '320px',
              margin: '0 auto 28px',
            }}
          >
            Get inspired with retirement destinations, lifestyle guides,
            cost-of-living ideas, and weekly Golden Horizons insights.
          </p>

          {/* CTA Button */}
          <button
            onClick={handleCTA}
            style={{
              width: '100%',
              padding: '13px 24px',
              background: '#c8912e',
              border: '2px solid #c8912e',
              borderRadius: '4px',
              color: '#faf5e9',
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'background 0.2s, border-color 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = '#b07d24';
              (e.currentTarget as HTMLButtonElement).style.borderColor = '#b07d24';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = '#c8912e';
              (e.currentTarget as HTMLButtonElement).style.borderColor = '#c8912e';
            }}
          >
            Subscribe &amp; Explore
          </button>

          {/* No thanks */}
          <button
            onClick={dismiss}
            style={{
              display: 'block',
              width: '100%',
              marginTop: '14px',
              background: 'transparent',
              border: 'none',
              fontFamily: 'var(--font-garamond), Georgia, serif',
              fontSize: '12px',
              color: 'rgba(255,255,255,0.35)',
              cursor: 'pointer',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.6)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.35)';
            }}
          >
            No thanks
          </button>

          {/* Bottom rule */}
          <div
            aria-hidden="true"
            style={{
              margin: '20px auto 0',
              width: '44px',
              height: '1px',
              background: 'rgba(196,158,80,0.7)',
            }}
          />
        </div>
      </div>
    </div>
  );
}

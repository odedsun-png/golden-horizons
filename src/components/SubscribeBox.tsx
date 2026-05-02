// src/components/SubscribeBox.tsx
'use client';

import { useState } from 'react';

interface SubscribeBoxProps {
  variant?: 'sidebar' | 'inline';
}

export default function SubscribeBox({ variant = 'sidebar' }: SubscribeBoxProps) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          firstName: firstName || undefined, 
          lastName: lastName || undefined 
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage('Welcome! Check your inbox to confirm.');
        setEmail('');
        setFirstName('');
        setLastName('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  const isSidebar = variant === 'sidebar';

  return (
    <div
      className={`bg-[#faf5e9] border-2 border-[#2d2416] ${
        isSidebar ? 'p-6' : 'p-8 md:p-12'
      }`}
    >
      {/* Top accent line */}
      <div className="w-16 h-[2px] bg-[#a68d5c] mx-auto mb-4"></div>

      {/* Eyebrow */}
      <p 
        className={`text-[#6b5d47] text-center uppercase tracking-[0.15em] ${
          isSidebar ? 'text-[9px] mb-2' : 'text-[10px] mb-3'
        }`}
        style={{ fontFamily: 'var(--font-garamond)' }}
      >
        Every morning. In your inbox. Free.
      </p>

      {/* Headline */}
      <h3
        className={`text-[#1e1408] text-center leading-tight ${
          isSidebar ? 'text-2xl mb-3' : 'text-4xl md:text-5xl mb-5'
        }`}
        style={{ fontFamily: 'var(--font-playfair)' }}
      >
        We find the place.
        <br />
        You live the life.
      </h3>

      {/* Body */}
      <p
        className={`text-[#4a3f2f] text-center leading-relaxed ${
          isSidebar ? 'text-sm mb-5' : 'text-base md:text-lg mb-6'
        }`}
        style={{ fontFamily: 'var(--font-garamond)' }}
      >
        Each morning we send one story — a real place, real costs, real people who made the move. No fluff. Just the truth about what's possible.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className={`${isSidebar ? 'space-y-2' : 'space-y-3 max-w-xl mx-auto'}`}>
        <input
          type="text"
          placeholder="First Name (optional)"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={`w-full bg-white text-[#1e1408] placeholder-[#9b8c6f] border border-[#c9b896] ${
            isSidebar ? 'px-3 py-2 text-sm' : 'px-4 py-3'
          } focus:outline-none focus:border-[#a68d5c]`}
          style={{ fontFamily: 'var(--font-garamond)' }}
        />
        <input
          type="text"
          placeholder="Last Name (optional)"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className={`w-full bg-white text-[#1e1408] placeholder-[#9b8c6f] border border-[#c9b896] ${
            isSidebar ? 'px-3 py-2 text-sm' : 'px-4 py-3'
          } focus:outline-none focus:border-[#a68d5c]`}
          style={{ fontFamily: 'var(--font-garamond)' }}
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={`w-full bg-white text-[#1e1408] placeholder-[#9b8c6f] border border-[#c9b896] ${
            isSidebar ? 'px-3 py-2 text-sm' : 'px-4 py-3'
          } focus:outline-none focus:border-[#a68d5c]`}
          style={{ fontFamily: 'var(--font-garamond)' }}
        />

        <button
          type="submit"
          disabled={status === 'loading'}
          className={`w-full bg-[#2d2416] text-[#faf5e9] uppercase tracking-[0.1em] border-2 border-[#2d2416] transition-colors ${
            isSidebar ? 'px-4 py-2.5 text-xs' : 'px-6 py-3.5 text-sm'
          } hover:bg-[#1e1408] hover:border-[#1e1408] disabled:opacity-50 disabled:cursor-not-allowed`}
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          {status === 'loading' ? 'Subscribing...' : 'Start My Free Subscription →'}
        </button>
      </form>

      {/* Status message */}
      {message && (
        <p
          className={`text-center mt-3 ${
            status === 'success' ? 'text-[#5a7a4d]' : 'text-[#8b4a3d]'
          } ${isSidebar ? 'text-xs' : 'text-sm'}`}
          style={{ fontFamily: 'var(--font-garamond)' }}
        >
          {message}
        </p>
      )}

      {/* Bottom accent line */}
      <div className="w-16 h-[2px] bg-[#a68d5c] mx-auto mt-5 mb-3"></div>

      {/* Trust line */}
      <p
        className={`text-[#6b5d47] text-center ${isSidebar ? 'text-[9px]' : 'text-[10px]'}`}
        style={{ fontFamily: 'var(--font-garamond)' }}
      >
        ◆ Join 5,000+ readers planning their next chapter ◆
      </p>
    </div>
  );
}

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
  const [showThankYou, setShowThankYou] = useState(false);

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
        setShowThankYou(true);
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
    <>
      <div
        className={`bg-[#faf5e9] border-2 border-[#2d2416] overflow-hidden ${
          isSidebar ? '' : ''
        }`}
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1400)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className={`grid ${isSidebar ? 'grid-cols-1' : 'md:grid-cols-2'} gap-0`}>
          
          {/* Box A - Form Section */}
          <div 
            className={`bg-[#faf5e9]/95 backdrop-blur-sm ${
              isSidebar ? 'p-6' : 'p-8 md:p-10'
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
                isSidebar ? 'text-xl mb-3' : 'text-3xl md:text-4xl mb-5'
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
                isSidebar ? 'text-sm mb-5' : 'text-base mb-6'
              }`}
              style={{ fontFamily: 'var(--font-garamond)' }}
            >
              Each morning we send one story — a real place, real costs, real people who made the move.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
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
            {message && status === 'error' && (
              <p
                className={`text-center mt-3 text-[#8b4a3d] ${isSidebar ? 'text-xs' : 'text-sm'}`}
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

          {/* Box B - PDF Offer Section */}
          {!isSidebar && (
            <div 
              className="bg-[#2d2416]/90 backdrop-blur-sm p-8 md:p-10 flex flex-col justify-center"
            >
              <div className="text-center">
                {/* Icon/Accent */}
                <div className="w-20 h-20 mx-auto mb-6 bg-[#a68d5c]/20 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#a68d5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>

                {/* Headline */}
                <h4
                  className="text-[#faf5e9] text-2xl md:text-3xl mb-4 leading-tight"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Get Your Free Retirement Checklist
                </h4>

                {/* Body */}
                <p
                  className="text-[#c9b896] text-base leading-relaxed mb-6"
                  style={{ fontFamily: 'var(--font-garamond)' }}
                >
                  New subscribers receive our complete retirement abroad checklist — covering visas, healthcare, banking, taxes, and everything else you need before making the move.
                </p>

                {/* Benefits list */}
                <div className="text-left max-w-sm mx-auto space-y-3 mb-6">
                  {[
                    'Visa requirements for 12 top countries',
                    'Healthcare coverage & costs breakdown',
                    'Banking & money transfer strategies',
                    'Tax obligations & treaties explained',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#a68d5c] rounded-full mt-2 flex-shrink-0"></div>
                      <p 
                        className="text-[#c9b896] text-sm"
                        style={{ fontFamily: 'var(--font-garamond)' }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <p
                  className="text-[#a68d5c] text-sm uppercase tracking-wider"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  ← Subscribe to download instantly
                </p>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Thank You Popup */}
      {showThankYou && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowThankYou(false)}
        >
          <div 
            className="bg-[#faf5e9] border-2 border-[#2d2416] max-w-md w-full p-8 md:p-10 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowThankYou(false)}
              className="absolute top-4 right-4 text-[#6b5d47] hover:text-[#2d2416] transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Top accent line */}
            <div className="w-16 h-[2px] bg-[#a68d5c] mx-auto mb-6"></div>

            {/* Checkmark icon */}
            <div className="w-16 h-16 mx-auto mb-6 bg-[#5a7a4d]/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-[#5a7a4d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            {/* Headline */}
            <h3
              className="text-[#1e1408] text-center text-3xl md:text-4xl mb-4 leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Welcome to Golden Horizons
            </h3>

            {/* Appreciation */}
            <p
              className="text-[#4a3f2f] text-center text-base leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-garamond)' }}
            >
              Thank you for joining us. We're grateful you're here, and we're committed to helping you find the place where your next chapter begins.
            </p>

            {/* What to expect */}
            <div className="bg-[#f5ede0] border border-[#c9b896] p-6 mb-6">
              <h4
                className="text-[#2d2416] text-sm uppercase tracking-wider mb-4 text-center"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                What Happens Next
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#a68d5c] text-[#faf5e9] rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">1</div>
                  <p 
                    className="text-[#4a3f2f] text-sm leading-relaxed"
                    style={{ fontFamily: 'var(--font-garamond)' }}
                  >
                    <strong>Check your inbox</strong> — you'll receive a confirmation email within the next few minutes
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#a68d5c] text-[#faf5e9] rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">2</div>
                  <p 
                    className="text-[#4a3f2f] text-sm leading-relaxed"
                    style={{ fontFamily: 'var(--font-garamond)' }}
                  >
                    <strong>Confirm your subscription</strong> — click the link to activate your account
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#a68d5c] text-[#faf5e9] rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">3</div>
                  <p 
                    className="text-[#4a3f2f] text-sm leading-relaxed"
                    style={{ fontFamily: 'var(--font-garamond)' }}
                  >
                    <strong>Get your free checklist</strong> — instant download once confirmed
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#a68d5c] text-[#faf5e9] rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">4</div>
                  <p 
                    className="text-[#4a3f2f] text-sm leading-relaxed"
                    style={{ fontFamily: 'var(--font-garamond)' }}
                  >
                    <strong>Tomorrow morning</strong> — your first story arrives at 7 AM
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="w-16 h-[2px] bg-[#a68d5c] mx-auto mb-4"></div>

            {/* Close button */}
            <button
              onClick={() => setShowThankYou(false)}
              className="w-full bg-[#2d2416] text-[#faf5e9] uppercase tracking-[0.1em] border-2 border-[#2d2416] px-6 py-3 text-sm hover:bg-[#1e1408] transition-colors"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Continue Reading
            </button>
          </div>
        </div>
      )}
    </>
  );
}

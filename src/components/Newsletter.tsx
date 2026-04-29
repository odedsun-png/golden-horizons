"use client";
import { useState } from "react";

export default function Newsletter() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@300;400;500;600;700&display=swap');

        .nl-section {
          background: #3a3d41;
          padding: 80px 24px;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* subtle texture overlay */
        .nl-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(220,183,112,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        .nl-inner {
          max-width: 680px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Social proof bar */
        .nl-proof-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-bottom: 32px;
        }

        .nl-avatars {
          display: flex;
          margin-right: 4px;
        }

        .nl-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 2px solid #3a3d41;
          background: #dcb770;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 700;
          color: #1a1a1a;
          margin-left: -8px;
          flex-shrink: 0;
        }

        .nl-avatar:first-child { margin-left: 0; background: #c8a84e; }
        .nl-avatar:nth-child(2) { background: #dcb770; }
        .nl-avatar:nth-child(3) { background: #e8c980; }
        .nl-avatar:nth-child(4) { background: #f0d898; color: #8a6a00; }

        .nl-proof-text {
          font-size: 13px;
          color: rgba(255,255,255,0.70);
          letter-spacing: 0.01em;
        }

        .nl-proof-text strong {
          color: #dcb770;
          font-weight: 600;
        }

        /* Main headline */
        .nl-headline {
          font-family: 'Playfair Display', serif;
          font-size: 42px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          letter-spacing: -0.02em;
          text-align: center;
          margin: 0 0 16px;
        }

        .nl-headline em {
          font-style: italic;
          color: #dcb770;
        }

        .nl-subhead {
          font-size: 17px;
          font-weight: 300;
          color: rgba(255,255,255,0.70);
          text-align: center;
          line-height: 1.65;
          margin: 0 0 36px;
          max-width: 520px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Benefits */
        .nl-benefits {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 12px;
          margin-bottom: 36px;
        }

        .nl-benefit {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          padding: 16px 14px;
          text-align: center;
        }

        .nl-benefit-icon {
          font-size: 20px;
          margin-bottom: 8px;
          display: block;
        }

        .nl-benefit-title {
          font-size: 13px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 4px;
          display: block;
        }

        .nl-benefit-desc {
          font-size: 11px;
          color: rgba(255,255,255,0.70);
          line-height: 1.5;
        }

        /* Form */
        .nl-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 14px;
        }

        .nl-input {
          width: 100%;
          height: 52px;
          padding: 0 18px;
          background: rgba(255,255,255,0.07);
          border: 1.5px solid rgba(255,255,255,0.15);
          border-radius: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          color: #fff;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          box-sizing: border-box;
        }

        .nl-input::placeholder { color: rgba(255,255,255,0.35); }
        .nl-input:focus {
          border-color: #dcb770;
          background: rgba(220,183,112,0.06);
        }

        .nl-btn {
          height: 52px;
          padding: 0 28px;
          background: #dcb770;
          color: #1a1a1a;
          border: none;
          border-radius: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.2s, transform 0.15s;
          flex-shrink: 0;
        }

        .nl-btn:hover { background: #e8c980; transform: translateY(-1px); }
        .nl-btn:active { transform: translateY(0); }

        .nl-trust {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .nl-trust-item {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          color: rgba(255,255,255,0.70);
          letter-spacing: 0.02em;
        }

        .nl-trust-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(255,255,255,0.20);
          flex-shrink: 0;
        }

        /* Success state */
        .nl-success {
          text-align: center;
          padding: 48px 24px;
        }

        .nl-success-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(220,183,112,0.15);
          border: 1.5px solid rgba(220,183,112,0.40);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-size: 22px;
        }

        .nl-success-title {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          color: #fff;
          margin: 0 0 10px;
        }

        .nl-success-sub {
          font-size: 15px;
          color: rgba(255,255,255,0.50);
          line-height: 1.6;
        }

        @media (max-width: 600px) {
          .nl-headline { font-size: 30px; }
          .nl-benefits { grid-template-columns: 1fr; gap: 8px; }
          .nl-form { flex-direction: column; }
          .nl-btn { height: 48px; }
        }
      `}</style>

      <section className="nl-section">
        <div className="nl-inner">
          {submitted ? (
            <div className="nl-success">
              <div className="nl-success-icon">✓</div>
              <h2 className="nl-success-title">You're in. Welcome aboard.</h2>
              <p className="nl-success-sub">
                Check your inbox — your first guide is on its way.<br />
                One short email a day. Unsubscribe anytime.
              </p>
            </div>
          ) : (
            <>
              {/* Social proof avatars */}
              <div className="nl-proof-bar">
                <div className="nl-avatars">
                  <div className="nl-avatar">JM</div>
                  <div className="nl-avatar">SR</div>
                  <div className="nl-avatar">DK</div>
                  <div className="nl-avatar">+</div>
                </div>
                <span className="nl-proof-text">
                  <strong>📘 Free Retirement Abroad Guide</strong> — included when you join
                </span>
              </div>

              {/* Headline */}
              <h2 className="nl-headline">
                Your best years<br />
                <em>are still ahead.</em>
              </h2>

              <p className="nl-subhead">
                Real destinations. Real costs. One short email a day —
                and instant access to the Free Retirement Abroad Guide.
              </p>

              {/* 3 benefit cards */}
              <div className="nl-benefits">
                <div className="nl-benefit">
                  <span className="nl-benefit-icon">💰</span>
                  <span className="nl-benefit-title">Real cost breakdowns</span>
                  <span className="nl-benefit-desc">$1,500–$3,000/mo destinations backed by expat data</span>
                </div>
                <div className="nl-benefit">
                  <span className="nl-benefit-icon">🏥</span>
                  <span className="nl-benefit-title">Healthcare guides</span>
                  <span className="nl-benefit-desc">Which countries give Americans world-class care for less</span>
                </div>
                <div className="nl-benefit">
                  <span className="nl-benefit-icon">✈️</span>
                  <span className="nl-benefit-title">Visa made simple</span>
                  <span className="nl-benefit-desc">Step-by-step for the easiest retirement visas available</span>
                </div>
              </div>

              {/* Email form */}
              <form className="nl-form" onSubmit={handleSubmit}>
                <div style={{ display: "flex", gap: 10 }}>
                  <input
                    type="text"
                    className="nl-input"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    style={{ flex: 1, minWidth: 0 }}
                  />
                  <input
                    type="text"
                    className="nl-input"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    style={{ flex: 1, minWidth: 0 }}
                  />
                </div>
                <input
                  type="email"
                  className="nl-input"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="nl-btn">
                  Get the Free Guide →
                </button>
              </form>

              {/* Trust signals */}
              <div className="nl-trust">
                <span className="nl-trust-item">Instant access</span>
                <span className="nl-trust-dot" />
                <span className="nl-trust-item">No spam, ever</span>
                <span className="nl-trust-dot" />
                <span className="nl-trust-item">Unsubscribe anytime</span>
                <span className="nl-trust-dot" />
                <span className="nl-trust-item">100% free</span>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

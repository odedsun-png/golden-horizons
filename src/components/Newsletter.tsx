"use client";
import { useState } from "react";

export default function Newsletter() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, lastName }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@300;400;500;600;700&display=swap');

        .nl-section {
          background: #2f3236;
          padding: 52px 24px;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(220,183,112,0.18);
        }

        .nl-inner {
          max-width: 980px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 36px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .nl-kicker {
          color: #dcb770;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .nl-headline {
          font-family: 'Playfair Display', serif;
          font-size: 32px;
          line-height: 1.18;
          color: #fff;
          margin: 0 0 12px;
        }

        .nl-subhead {
          font-size: 16px;
          line-height: 1.65;
          color: rgba(255,255,255,0.72);
          margin: 0;
          max-width: 520px;
        }

        .nl-benefits {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 10px;
          margin-top: 24px;
        }

        .nl-benefit {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 12px;
          padding: 14px 12px;
          color: rgba(255,255,255,0.82);
          font-size: 12px;
          line-height: 1.45;
        }

        .nl-benefit strong {
          display: block;
          color: #fff;
          font-size: 13px;
          margin-bottom: 3px;
        }

        .nl-card {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.13);
          border-radius: 18px;
          padding: 22px;
          box-shadow: 0 18px 50px rgba(0,0,0,0.18);
        }

        .nl-form-title {
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 14px;
        }

        .nl-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .nl-name-row {
          display: flex;
          gap: 10px;
        }

        .nl-input {
          width: 100%;
          height: 48px;
          padding: 0 15px;
          background: rgba(255,255,255,0.08);
          border: 1.5px solid rgba(255,255,255,0.15);
          border-radius: 8px;
          font-size: 14px;
          color: #fff;
          outline: none;
          box-sizing: border-box;
        }

        .nl-input::placeholder {
          color: rgba(255,255,255,0.38);
        }

        .nl-input:focus {
          border-color: #dcb770;
          background: rgba(220,183,112,0.07);
        }

        .nl-btn {
          height: 50px;
          background: #dcb770;
          color: #1a1a1a;
          border: none;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 800;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
        }

        .nl-btn:hover:not(:disabled) {
          background: #e8c980;
          transform: translateY(-1px);
        }

        .nl-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .nl-error {
          font-size: 13px;
          color: #ff7b7b;
          margin: 0;
          padding: 8px 12px;
          background: rgba(255,80,80,0.1);
          border-radius: 6px;
          border: 1px solid rgba(255,80,80,0.2);
        }

        .nl-trust {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 14px;
          margin-top: 14px;
          font-size: 11px;
          color: rgba(255,255,255,0.66);
        }

        .nl-success {
          text-align: center;
          padding: 24px;
        }

        .nl-success-icon {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(220,183,112,0.15);
          border: 1.5px solid rgba(220,183,112,0.40);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          font-size: 22px;
          color: #dcb770;
        }

        .nl-success-title {
          font-family: 'Playfair Display', serif;
          font-size: 24px;
          color: #fff;
          margin: 0 0 8px;
        }

        .nl-success-sub {
          font-size: 14px;
          color: rgba(255,255,255,0.60);
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 900px) {
          .nl-inner {
            grid-template-columns: 1fr;
          }

          .nl-benefits {
            grid-template-columns: 1fr;
          }

          .nl-headline {
            font-size: 28px;
          }

          .nl-name-row {
            flex-direction: column;
          }
        }
      `}</style>

      <section className="nl-section" id="subscribe">
        <div className="nl-inner">
          <div>
            <div className="nl-kicker">Free Retirement Abroad Guide</div>

            <h2 className="nl-headline">
              Get the free guide before choosing where to retire.
            </h2>

            <p className="nl-subhead">
              See where $2,000/month can go further, which countries are easier for Americans,
              and what to check before making a move abroad.
            </p>

            <div className="nl-benefits">
              <div className="nl-benefit">
                <strong>💰 Real costs</strong>
                Monthly lifestyle ranges by destination.
              </div>
              <div className="nl-benefit">
                <strong>🏥 Healthcare</strong>
                Countries with strong care for less.
              </div>
              <div className="nl-benefit">
                <strong>✈️ Visa basics</strong>
                Simple starting points before you move.
              </div>
            </div>
          </div>

          <div className="nl-card">
            {submitted ? (
              <div className="nl-success">
                <div className="nl-success-icon">✓</div>
                <h3 className="nl-success-title">You&apos;re in.</h3>
                <p className="nl-success-sub">
                  Check your inbox — your free guide is on its way.
                </p>
              </div>
            ) : (
              <>
                <h3 className="nl-form-title">Send me the free guide</h3>

                <form className="nl-form" onSubmit={handleSubmit}>
                  <div className="nl-name-row">
                    <input
                      type="text"
                      className="nl-input"
                      placeholder="First name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      className="nl-input"
                      placeholder="Last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
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

                  {error && <p className="nl-error">{error}</p>}

                  <button
                    type="submit"
                    className="nl-btn"
                    disabled={loading}
                  >
                    {loading ? "Subscribing…" : "Get My Free Guide →"}
                  </button>
                </form>

                <div className="nl-trust">
                  <span>Instant access</span>
                  <span>No spam</span>
                  <span>Unsubscribe anytime</span>
                  <span>100% free</span>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

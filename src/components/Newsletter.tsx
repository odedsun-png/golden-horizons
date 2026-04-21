"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const response = await fetch("/.netlify/functions/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, lastName }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
        setFirstName("");
        setLastName("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="subscribe" className="bg-[#1f2326] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Phone Mockup */}
          <div className="relative flex justify-center md:justify-start">
            <div className="relative w-64 md:w-72">
              <div className="relative bg-white rounded-[2.5rem] p-3 shadow-2xl">
                <div className="bg-gray-100 rounded-[2rem] overflow-hidden">
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm font-bold text-gray-800">golden</span>
                      <span className="text-sm font-light text-gray-500">horizons</span>
                    </div>
                    <div className="text-xs text-gray-500 mb-2">Latest Article</div>
                    <div className="rounded-lg overflow-hidden mb-3">
                      <img
                        src="https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=400&q=80"
                        alt="Featured destination"
                        className="w-full h-32 object-cover"
                      />
                    </div>
                    <h4 className="font-bold text-gray-800 text-sm mb-1">
                      Portugal's Hidden Coastal Gems
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Discover charming towns beyond Lisbon where retirees are finding their perfect slice of paradise...
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-lg" />
            </div>
          </div>

          {/* Content */}
          <div className="text-white text-center md:text-left">

            {status === "success" ? (
              /* ── STRONG SUCCESS CONFIRMATION ── */
              <div style={{
                background: "linear-gradient(135deg, #1a3a2a 0%, #0f2419 100%)",
                border: "2px solid #c8a84e",
                borderRadius: "12px",
                padding: "40px 36px",
                textAlign: "center",
              }}>
                <div style={{
                  width: "64px",
                  height: "64px",
                  background: "#c8a84e",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                }}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M7 16.5L13 22.5L25 10" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: "0.65rem",
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  color: "#c8a84e",
                  fontWeight: 700,
                  marginBottom: "10px",
                }}>You're subscribed</div>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  lineHeight: 1.3,
                  marginBottom: "12px",
                }}>Welcome to Golden Horizons!</h3>
                <p style={{
                  fontSize: "1rem",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.7,
                  marginBottom: "20px",
                }}>
                  Your first issue is on its way. Check your inbox — and your spam folder just in case.
                </p>
                <div style={{
                  display: "inline-block",
                  background: "rgba(200,168,78,0.15)",
                  border: "1px solid rgba(200,168,78,0.3)",
                  borderRadius: "8px",
                  padding: "10px 20px",
                  fontSize: "0.85rem",
                  color: "#c8a84e",
                  fontWeight: 600,
                }}>
                  Next step: Add newsletter@golden-horizons.org to your contacts
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 leading-tight">
                  What if your best years are still ahead?
                </h2>
                <p className="text-white/70 mb-8 max-w-md mx-auto md:mx-0 leading-relaxed" style={{ fontSize: "18px" }}>
                  Get simple ideas each day about places where your retirement could feel easier, more affordable, and more enjoyable.
                </p>

                <form onSubmit={handleSubmit} className="max-w-md mx-auto md:mx-0">

                  {/* ── NAME FIELDS ── */}
                  <div className="flex gap-3 mb-3">
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First Name"
                      className="flex-1 px-5 bg-white/10 border border-white/20 rounded text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 transition-colors"
                      style={{ fontSize: "15px", paddingTop: "12px", paddingBottom: "12px" }}
                      disabled={status === "loading"}
                    />
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Last Name"
                      className="flex-1 px-5 bg-white/10 border border-white/20 rounded text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 transition-colors"
                      style={{ fontSize: "15px", paddingTop: "12px", paddingBottom: "12px" }}
                      disabled={status === "loading"}
                    />
                  </div>

                  {/* ── EMAIL + SUBMIT ── */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email Address"
                      className="flex-1 px-5 bg-white/10 border border-white/20 rounded text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 transition-colors"
                      style={{ fontSize: "17px", paddingTop: "14px", paddingBottom: "14px" }}
                      required
                      disabled={status === "loading"}
                    />
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="px-8 bg-white text-foreground font-semibold tracking-wide rounded hover:bg-white/90 transition-colors disabled:opacity-70 whitespace-nowrap"
                      style={{ fontSize: "15px", paddingTop: "14px", paddingBottom: "14px" }}
                    >
                      {status === "loading" ? "Subscribing..." : "Send me new ideas →"}
                    </button>
                  </div>

                  {status === "error" && (
                    <p className="text-red-400 mt-3" style={{ fontSize: "16px" }}>
                      Something went wrong. Please try again.
                    </p>
                  )}
                  <p className="text-white/40 mt-4" style={{ fontSize: "15px" }}>
                    One short email. No pressure. Just ideas worth considering.
                  </p>
                </form>
              </>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}

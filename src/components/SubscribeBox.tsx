// src/components/SubscribeBox.tsx
"use client";

import { useState } from "react";

interface SubscribeBoxProps {
  variant?: "sidebar" | "inline";
}

export default function SubscribeBox({
  variant = "sidebar",
}: SubscribeBoxProps) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const isSidebar = variant === "sidebar";

  const bonusItems = [
    "Monthly budget checklist",
    "Visa questions to ask first",
    "Healthcare comparison guide",
    "Housing and rental red flags",
    "Country shortlist worksheet",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          firstName: firstName || "",
          lastName: lastName || "",
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage("Welcome! Check your inbox to confirm.");
        setEmail("");
        setFirstName("");
        setLastName("");
        setShowThankYou(true);
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <>
      <section
        className={[
          "overflow-hidden border-2 border-[#2d2416] bg-[#faf5e9]",
          isSidebar ? "" : "my-0",
        ].join(" ")}
      >
        <div
          className={[
            "grid gap-0",
            isSidebar
              ? "grid-cols-1"
              : "grid-cols-1 md:grid-cols-[1.2fr_0.8fr]",
          ].join(" ")}
        >
          {/* Form side */}
          <div
            className={[
              "bg-[#faf5e9]",
              isSidebar ? "p-5" : "p-5 md:p-7",
            ].join(" ")}
          >
            <div className="mx-auto mb-3 h-[2px] w-14 bg-[#a68d5c]" />

            <p
              className={[
                "text-center uppercase tracking-[0.18em] text-[#8b6914]",
                isSidebar ? "mb-2 text-[9px]" : "mb-2 text-[10px]",
              ].join(" ")}
              style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
            >
              Free Guide + Daily Story
            </p>

            <h3
              className={[
                "text-center leading-tight text-[#1e1408]",
                isSidebar ? "mb-3 text-xl" : "mb-3 text-2xl md:text-3xl",
              ].join(" ")}
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Find your next chapter
              <br />
              before you choose a country.
            </h3>

            <p
              className={[
                "mx-auto text-center leading-relaxed text-[#4a3f2f]",
                isSidebar
                  ? "mb-4 text-sm"
                  : "mb-5 max-w-xl text-sm md:text-[15px]",
              ].join(" ")}
              style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
            >
              Get one real retirement-abroad story every morning — plus the free
              starter kit to compare costs, visas, healthcare, housing, and
              lifestyle before you move.
            </p>

            <form
              onSubmit={handleSubmit}
              className={isSidebar ? "space-y-2.5" : "space-y-3"}
            >
              <div
                className={
                  isSidebar
                    ? "space-y-2.5"
                    : "grid grid-cols-1 gap-3 md:grid-cols-3"
                }
              >
                <input
                  type="text"
                  placeholder="First Name (optional)"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={[
                    "w-full border border-[#b89a5a] bg-[#fffaf0] text-[#1e1408] placeholder-[#8d7b5f] focus:border-[#2d2416] focus:outline-none",
                    isSidebar ? "px-3 py-2 text-sm" : "px-3 py-2.5 text-sm",
                  ].join(" ")}
                  style={{
                    fontFamily: "var(--font-garamond), Georgia, serif",
                  }}
                />

                <input
                  type="text"
                  placeholder="Last Name (optional)"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={[
                    "w-full border border-[#b89a5a] bg-[#fffaf0] text-[#1e1408] placeholder-[#8d7b5f] focus:border-[#2d2416] focus:outline-none",
                    isSidebar ? "px-3 py-2 text-sm" : "px-3 py-2.5 text-sm",
                  ].join(" ")}
                  style={{
                    fontFamily: "var(--font-garamond), Georgia, serif",
                  }}
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={[
                    "w-full border border-[#b89a5a] bg-[#fffaf0] text-[#1e1408] placeholder-[#8d7b5f] focus:border-[#2d2416] focus:outline-none",
                    isSidebar ? "px-3 py-2 text-sm" : "px-3 py-2.5 text-sm",
                  ].join(" ")}
                  style={{
                    fontFamily: "var(--font-garamond), Georgia, serif",
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className={[
                  "w-full border-2 border-[#2d2416] bg-[#2d2416] uppercase tracking-[0.1em] text-[#faf5e9] transition-colors hover:border-[#1e1408] hover:bg-[#1e1408] disabled:cursor-not-allowed disabled:opacity-50",
                  isSidebar
                    ? "px-4 py-2.5 text-xs"
                    : "px-5 py-3 text-xs md:text-sm",
                ].join(" ")}
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {status === "loading"
                  ? "Sending..."
                  : "Get the Free Starter Kit →"}
              </button>
            </form>

            {message && status === "error" && (
              <p
                className={[
                  "mt-3 text-center text-[#8b4a3d]",
                  isSidebar ? "text-xs" : "text-sm",
                ].join(" ")}
                style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
              >
                {message}
              </p>
            )}

            <p
              className={[
                "mt-3 text-center text-[#6b5d47]",
                isSidebar ? "text-[9px]" : "text-[10px]",
              ].join(" ")}
              style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
            >
              ◆ Join 5,000+ readers planning their next chapter ◆
            </p>
          </div>

          {/* Bonus side */}
          {!isSidebar && (
            <aside className="flex items-center border-t-2 border-[#2d2416] bg-[#2d2416] p-5 md:border-l-2 md:border-t-0 md:p-7">
              <div className="w-full">
                <p
                  className="mb-2 text-center text-[10px] uppercase tracking-[0.18em] text-[#c9a84c]"
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                  }}
                >
                  Free Reader Bonus
                </p>

                <div className="mx-auto mb-5 max-w-[210px] border border-[#c9a84c] bg-[#faf5e9] px-4 py-5 text-center shadow-sm">
                  <div
                    className="mb-2 text-[10px] uppercase tracking-[0.18em] text-[#8b6914]"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                    }}
                  >
                    Golden Horizons
                  </div>

                  <div
                    className="text-xl leading-tight text-[#1e1408]"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                    }}
                  >
                    Retirement Abroad
                    <br />
                    Starter Kit
                  </div>

                  <div
                    className="mt-3 text-[11px] uppercase tracking-[0.14em] text-[#8b6914]"
                    style={{
                      fontFamily: "var(--font-garamond), Georgia, serif",
                    }}
                  >
                    2026 Edition
                  </div>
                </div>

                <h4
                  className="mb-3 text-center text-xl leading-tight text-[#faf5e9] md:text-2xl"
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                  }}
                >
                  Retirement Abroad Starter Kit
                </h4>

                <div className="space-y-2">
                  {bonusItems.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a84c]" />
                      <p
                        className="text-sm leading-snug text-[#d9c8a6]"
                        style={{
                          fontFamily: "var(--font-garamond), Georgia, serif",
                        }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <p
                  className="mt-4 text-center text-[11px] uppercase tracking-[0.12em] text-[#c9a84c]"
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                  }}
                >
                  Delivered instantly when you subscribe
                </p>
              </div>
            </aside>
          )}
        </div>
      </section>

      {/* Thank You Popup */}
      {showThankYou && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setShowThankYou(false)}
        >
          <div
            className="relative w-full max-w-md border-2 border-[#2d2416] bg-[#faf5e9] p-7 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowThankYou(false)}
              className="absolute right-4 top-4 text-[#6b5d47] transition-colors hover:text-[#2d2416]"
              aria-label="Close"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="mx-auto mb-5 h-[2px] w-14 bg-[#a68d5c]" />

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#5a7a4d]/10">
              <svg
                className="h-8 w-8 text-[#5a7a4d]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h3
              className="mb-3 text-center text-3xl leading-tight text-[#1e1408]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Welcome to Golden Horizons
            </h3>

            <p
              className="mb-5 text-center text-base leading-relaxed text-[#4a3f2f]"
              style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
            >
              Thank you for joining us. Check your inbox for your next step and
              the free Retirement Abroad Starter Kit.
            </p>

            <div className="mb-5 border border-[#c9b896] bg-[#f5ede0] p-5">
              <h4
                className="mb-3 text-center text-sm uppercase tracking-wider text-[#2d2416]"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                }}
              >
                What Happens Next
              </h4>

              <div className="space-y-3">
                {[
                  "Check your inbox for confirmation.",
                  "Confirm your subscription.",
                  "Receive your free starter kit.",
                ].map((item, index) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#a68d5c] text-xs font-bold text-[#faf5e9]">
                      {index + 1}
                    </div>
                    <p
                      className="text-sm leading-relaxed text-[#4a3f2f]"
                      style={{
                        fontFamily: "var(--font-garamond), Georgia, serif",
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setShowThankYou(false)}
              className="w-full border-2 border-[#2d2416] bg-[#2d2416] px-6 py-3 text-sm uppercase tracking-[0.1em] text-[#faf5e9] transition-colors hover:bg-[#1e1408]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Continue Reading
            </button>
          </div>
        </div>
      )}
    </>
  );
}

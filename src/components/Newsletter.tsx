"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const response = await fetch("/.netlify/functions/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
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
              {/* Phone Frame */}
              <div className="relative bg-white rounded-[2.5rem] p-3 shadow-2xl">
                <div className="bg-gray-100 rounded-[2rem] overflow-hidden">
                  {/* Phone Screen Content */}
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
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-lg" />
            </div>
          </div>

          {/* Content */}
          <div className="text-white text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
              Your next chapter is waiting.
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-md mx-auto md:mx-0">
              Golden Horizons is your guide to the world's best retirement destinations. Start exploring today.
            </p>

            {status === "success" ? (
              <div className="bg-accent/20 border border-accent/30 rounded-lg p-4 max-w-md mx-auto md:mx-0">
                <p className="text-accent font-semibold">
                  You're in!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto md:mx-0">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email Address"
                    className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 rounded text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 transition-colors"
                    required
                    disabled={status === "loading"}
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="px-8 py-3.5 bg-white text-foreground font-semibold tracking-wide uppercase text-sm rounded hover:bg-white/90 transition-colors disabled:opacity-70"
                  >
                    {status === "loading" ? "..." : "Join"}
                  </button>
                </div>
                {status === "error" && (
                  <p className="text-red-400 text-sm mt-3">
                    Something went wrong. Please try again.
                  </p>
                )}
                <p className="text-white/40 text-xs mt-4">
                  By subscribing you agree to our{" "}
                  <a href="#" className="underline hover:text-white/60">Privacy Policy</a>
                  {" "}and{" "}
                  <a href="#" className="underline hover:text-white/60">Terms of Use</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

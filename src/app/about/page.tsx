import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "About Us | Golden Horizons",
  description: "Golden Horizons helps Americans 55+ explore retirement destinations where their money goes further and their everyday life gets better.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>

        {/* Hero */}
        <section className="bg-[#1a3a2a] py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-xs font-semibold tracking-widest uppercase text-white/70">
                About Golden Horizons
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-white leading-tight mb-6">
              What if your best years<br />are still ahead?
            </h1>
            <p className="text-white/70 leading-relaxed max-w-2xl mx-auto" style={{ fontSize: "19px" }}>
              At Golden Horizons, we believe retirement isn't just about when you stop working — it's about where and how you choose to live next.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Intro */}
            <p className="text-foreground/75 leading-relaxed mb-6" style={{ fontSize: "18px" }}>
              Most people spend decades planning their finances… but very little time thinking about the <em>place</em> where they'll actually live those years.
            </p>
            <p className="text-foreground/75 leading-relaxed mb-12" style={{ fontSize: "18px" }}>
              And that decision can shape everything.
            </p>

            <div className="w-16 h-1 bg-primary mb-12" />

            {/* Section 1 */}
            <h2 className="text-2xl md:text-3xl font-bold font-serif mb-5">
              The place you retire will shape the life you live
            </h2>
            <p className="text-foreground/75 leading-relaxed mb-6" style={{ fontSize: "18px" }}>
              We created Golden Horizons to help you explore something many people never fully consider:
            </p>
            <div className="bg-[#faf8f2] border-l-4 border-amber-400 rounded-r-lg px-6 py-4 mb-8">
              <p className="font-semibold text-foreground" style={{ fontSize: "18px" }}>
                👉 You may have more retirement options than you think.
              </p>
            </div>
            <p className="text-foreground/75 leading-relaxed mb-4" style={{ fontSize: "18px" }}>
              Around the world, there are places where:
            </p>
            <ul className="space-y-3 mb-8 pl-0" style={{ listStyle: "none" }}>
              {[
                "Your savings can go further",
                "Your daily life can feel simpler",
                "Your time can feel more your own",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground/75" style={{ fontSize: "18px" }}>
                  <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-foreground/75 leading-relaxed mb-12" style={{ fontSize: "18px" }}>
              We're not here to tell you to leave the United States. We're here to help you see what's possible — so you can make the decision that's right for you.
            </p>

            <div className="w-16 h-1 bg-primary mb-12" />

            {/* Section 2 */}
            <h2 className="text-2xl md:text-3xl font-bold font-serif mb-5">
              A different way to think about retirement
            </h2>
            <p className="text-foreground/75 leading-relaxed mb-6" style={{ fontSize: "18px" }}>
              Many people retire where they're familiar. Few take the time to ask:
            </p>
            <div className="bg-[#faf8f2] border-l-4 border-amber-400 rounded-r-lg px-6 py-5 mb-8">
              <p className="font-serif font-bold text-foreground/90 italic" style={{ fontSize: "19px" }}>
                "Is this really the best place for the life I want?"
              </p>
            </div>
            <p className="text-foreground/75 leading-relaxed mb-6" style={{ fontSize: "18px" }}>
              Golden Horizons exists to gently challenge that idea — not with pressure, but with thoughtful insights.
            </p>
            <p className="text-foreground/75 leading-relaxed mb-4" style={{ fontSize: "18px" }}>
              We share simple, clear information to help you:
            </p>
            <ul className="space-y-3 mb-12 pl-0" style={{ listStyle: "none" }}>
              {[
                "Discover new locations",
                "Understand cost of living differences",
                "Explore lifestyle possibilities",
                "Think through your options with confidence",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground/75" style={{ fontSize: "18px" }}>
                  <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="w-16 h-1 bg-primary mb-12" />

            {/* Section 3 */}
            <h2 className="text-2xl md:text-3xl font-bold font-serif mb-5">
              What you'll get
            </h2>
            <p className="text-foreground/75 leading-relaxed mb-6" style={{ fontSize: "18px" }}>
              We send short, easy-to-read emails with ideas worth considering:
            </p>
            <ul className="space-y-3 mb-8 pl-0" style={{ listStyle: "none" }}>
              {[
                "New retirement destinations around the world",
                "Real examples of how far your money can go",
                "Insights into lifestyle, comfort, and daily living",
                "Opportunities you may not have come across otherwise",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground/75" style={{ fontSize: "18px" }}>
                  <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-foreground/60 italic leading-relaxed mb-12" style={{ fontSize: "17px" }}>
              Nothing overwhelming. Nothing pushy. Just useful ideas to help you make the most of your retirement.
            </p>

            <div className="w-16 h-1 bg-primary mb-12" />

            {/* Section 4 */}
            <h2 className="text-2xl md:text-3xl font-bold font-serif mb-5">
              Why we do this
            </h2>
            <p className="text-foreground/75 leading-relaxed mb-6" style={{ fontSize: "18px" }}>
              Because too many people reach retirement… and realize later they had more options than they ever explored.
            </p>
            <p className="text-foreground/75 leading-relaxed mb-8" style={{ fontSize: "18px" }}>
              And sometimes, the difference isn't small.
            </p>
            <div className="bg-[#faf8f2] border-l-4 border-amber-400 rounded-r-lg px-6 py-5 mb-8">
              <p className="font-serif font-bold text-foreground/90 italic" style={{ fontSize: "19px" }}>
                What if your retirement savings could last longer… and your lifestyle could improve?
              </p>
              <p className="text-foreground/60 mt-3" style={{ fontSize: "16px" }}>
                In some places, that's exactly what happens.
              </p>
            </div>

            <div className="w-16 h-1 bg-primary mb-12" />

            {/* Section 5 */}
            <h2 className="text-2xl md:text-3xl font-bold font-serif mb-5">
              Take your time — just start thinking
            </h2>
            <p className="text-foreground/75 leading-relaxed mb-6" style={{ fontSize: "18px" }}>
              You don't need to make any big decisions today.
            </p>
            <p className="text-foreground/75 leading-relaxed mb-8" style={{ fontSize: "18px" }}>
              But it may be worth asking:
            </p>
            <div className="bg-[#faf8f2] border-l-4 border-amber-400 rounded-r-lg px-6 py-5 mb-8">
              <p className="font-serif font-bold text-foreground/90 italic" style={{ fontSize: "19px" }}>
                Are you retiring where you truly want… or just where you're used to?
              </p>
            </div>
            <p className="text-foreground/75 leading-relaxed mb-16" style={{ fontSize: "18px" }}>
              A few minutes of thinking now could shape years of your life later.
            </p>

            {/* CTA */}
            <div className="bg-[#1a3a2a] rounded-lg p-8 md:p-10 text-center">
              <div className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-3">
                Golden Horizons
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-serif text-white mb-4 leading-tight">
                Helping you explore where your retirement could feel more comfortable, more affordable, and more fulfilling.
              </h3>
              <p className="text-white/60 mb-8" style={{ fontSize: "17px" }}>
                One idea at a time.
              </p>
              <Link
                href="/#subscribe"
                className="inline-block px-8 py-4 bg-amber-400 text-black font-bold rounded hover:bg-amber-300 transition-colors"
                style={{ fontSize: "15px" }}
              >
                Send me new ideas →
              </Link>
              <p className="text-white/35 mt-4" style={{ fontSize: "13px" }}>
                One short email. No pressure. Just ideas worth considering.
              </p>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

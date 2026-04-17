import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-[#0f172a] py-24 md:py-36 overflow-hidden">

      {/* Subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="text-xs font-semibold tracking-widest uppercase text-white/70">
            Retirement Travel Guide
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold font-serif text-white leading-[1.15] mb-6">
          The best retirement of your life might not be in the U.S.
        </h1>

        {/* Hook */}
        <p className="text-lg md:text-xl text-white/75 font-light leading-relaxed mb-4 max-w-2xl mx-auto">
          We&apos;re not here to tell you to leave America — just to show you the retirement options most Americans never realize they have.
        </p>

        {/* Subheadline */}
        <p className="text-base text-white/45 leading-relaxed mb-10 max-w-xl mx-auto">
          Discover where your 401(k) and Social Security can go further — and your everyday life can get better.
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4">
          <Link
            href="/articles"
            className="inline-block px-10 py-4 bg-amber-400 text-black font-bold text-sm tracking-wide rounded-full hover:bg-amber-300 hover:scale-[1.03] transition-all duration-200"
          >
            Explore Where Your Money Goes Further →
          </Link>
          <p className="text-sm text-white/35">
            See what $2,000/month gets you around the world
          </p>
        </div>

      </div>
    </section>
  );
}

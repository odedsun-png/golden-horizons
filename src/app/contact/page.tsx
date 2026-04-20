import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us | Golden Horizons",
  description: "Get in touch with the Golden Horizons team. We read every email and respond within 2 business days.",
};

export default function ContactPage() {
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
                Get in Touch
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-white leading-tight mb-6">
              We'd love to hear from you.
            </h1>
            <p className="text-white/70 leading-relaxed max-w-xl mx-auto" style={{ fontSize: "19px" }}>
              We read every email and get back to you within 2 business days.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Email card */}
            <div className="bg-[#1a3a2a] rounded-lg p-8 md:p-10 text-center mb-14">
              <div className="text-4xl mb-4">✉️</div>
              <h2 className="text-2xl font-bold font-serif text-white mb-3">
                Send us an email
              </h2>
              <p className="text-white/60 mb-6 leading-relaxed" style={{ fontSize: "17px" }}>
                For questions, story ideas, advertising inquiries, or just to say hello.
              </p>
              <a
                href="mailto:newsletter@golden-horizons.org"
                className="inline-block bg-amber-400 text-black font-bold rounded hover:bg-amber-300 transition-colors px-8 py-4"
                style={{ fontSize: "16px" }}
              >
                newsletter@golden-horizons.org
              </a>
            </div>

            {/* What we can help with */}
            <h2 className="text-2xl md:text-3xl font-bold font-serif mb-8">
              What can we help with?
            </h2>

            <div className="space-y-4 mb-14">
              {[
                {
                  icon: "📬",
                  title: "Newsletter questions",
                  desc: "Trouble subscribing, unsubscribing, or updating your email preferences.",
                },
                {
                  icon: "✍️",
                  title: "Story suggestions",
                  desc: "A destination you'd like us to cover, or a topic you'd find useful.",
                },
                {
                  icon: "📢",
                  title: "Advertising & partnerships",
                  desc: "Interested in reaching our audience of 55+ Americans planning retirement.",
                },
                {
                  icon: "💬",
                  title: "Reader feedback",
                  desc: "Something we got right, something we missed — we want to hear it all.",
                },
                {
                  icon: "🤝",
                  title: "General questions",
                  desc: "Anything else on your mind — we're happy to hear from you.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 p-5 bg-[#faf8f2] border border-[#e8dfc8] rounded-lg"
                >
                  <span style={{ fontSize: "24px", lineHeight: 1, flexShrink: 0, marginTop: "2px" }}>
                    {item.icon}
                  </span>
                  <div>
                    <div className="font-semibold mb-1" style={{ fontSize: "17px" }}>
                      {item.title}
                    </div>
                    <div className="text-foreground/60 leading-relaxed" style={{ fontSize: "15px" }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Response time note */}
            <div className="border-l-4 border-amber-400 bg-[#faf8f2] rounded-r-lg px-6 py-5 mb-14">
              <p className="text-foreground/70 leading-relaxed" style={{ fontSize: "17px" }}>
                <strong>Response time:</strong> We typically reply within 1–2 business days. For newsletter delivery issues, please also check your spam folder and add <strong>newsletter@golden-horizons.org</strong> to your contacts.
              </p>
            </div>

            {/* Address */}
            <div className="text-center text-foreground/40 border-t border-border pt-8">
              <p style={{ fontSize: "14px" }} className="leading-relaxed">
                Golden Horizons<br />
                21-14 Greenwood Dr, Fair Lawn, NJ 07410, USA<br />
                <a
                  href="mailto:newsletter@golden-horizons.org"
                  className="hover:text-foreground/60 transition-colors"
                >
                  newsletter@golden-horizons.org
                </a>
              </p>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-bold font-serif mb-8">Terms of Use</h1>
        <p className="text-muted-foreground mb-8">Last updated: March 2026</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-bold font-serif mb-4">Informational Purpose</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              The content on Golden Horizons is provided for general informational purposes only. Our articles, guides, and tools are intended to educate and inspire, not to serve as professional advice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-4">No Professional Advice</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Nothing on this website constitutes financial, legal, tax, immigration, or medical advice. Always consult qualified professionals before making retirement, relocation, or financial decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-4">Intellectual Property</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              All content, including text, images, graphics, and design elements, is owned by Golden Horizons or its licensors. You may not reproduce, distribute, or republish any content without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-4">Newsletter Terms</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              By subscribing to our newsletter, you agree to receive periodic emails from Golden Horizons. You may unsubscribe at any time. We reserve the right to modify or discontinue the newsletter service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-4">Limitation of Liability</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Golden Horizons is not liable for any damages arising from your use of this website or reliance on its content. Use of this site is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-4">Contact</h2>
            <p className="text-foreground/80 leading-relaxed">
              Questions about these terms? Email us at{" "}
              <a href="mailto:hello@goldenhorizons.com" className="text-primary hover:underline">
                hello@goldenhorizons.com
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

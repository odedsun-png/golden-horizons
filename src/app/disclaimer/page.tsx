import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-bold font-serif mb-8">Disclaimer</h1>
        <p className="text-muted-foreground mb-8">Last updated: March 2026</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-bold font-serif mb-4">Informational Content Only</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              All content on Golden Horizons is provided for informational and educational purposes only. Our articles, rankings, cost estimates, and country guides reflect general research and should not be considered definitive or comprehensive.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-4">No Responsibility for Decisions</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Golden Horizons assumes no responsibility for any financial, retirement, relocation, tax, legal, or healthcare decisions you make based on our content. Costs, visa requirements, and country conditions change frequently and may differ from what is presented here.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-4">Act at Your Own Risk</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Any actions you take based on information found on this website are strictly at your own risk. We strongly recommend consulting with qualified financial advisors, immigration attorneys, tax professionals, and healthcare providers before making any major life decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-4">External Links</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Our website may contain links to external sites. We are not responsible for the content, accuracy, or practices of any third-party websites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-4">Contact</h2>
            <p className="text-foreground/80 leading-relaxed">
              If you have questions about this disclaimer, contact us at{" "}
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

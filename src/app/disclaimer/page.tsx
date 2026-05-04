import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Disclaimer | Golden Horizons",
  description:
    "Read the Golden Horizons disclaimer. Our retirement abroad articles, destination guides, cost estimates, healthcare notes, visa information, and newsletters are for general informational purposes only.",
  alternates: {
    canonical: "https://golden-horizons.org/disclaimer",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground mb-3">
          Legal Notice
        </p>

        <h1 className="text-3xl md:text-4xl font-bold font-serif mb-6">
          Disclaimer
        </h1>

        <p className="text-muted-foreground mb-10">Last updated: May 2026</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-bold font-serif mb-4">
              General Information Only
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Golden Horizons is an editorial publication. All content on this
              website, including articles, rankings, destination guides, cost
              estimates, healthcare summaries, visa discussions, housing
              information, safety notes, lifestyle commentary, newsletters,
              downloadable guides, calculators, and other resources, is provided
              for general informational and educational purposes only.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              The information on this website is not personalized to your
              individual financial situation, health needs, immigration status,
              tax position, family circumstances, or retirement goals.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-4">
              No Legal, Financial, Tax, Medical, or Immigration Advice
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Golden Horizons does not provide legal, financial, tax, medical,
              insurance, immigration, investment, real estate, or retirement
              planning advice. Nothing on this website should be interpreted as
              professional advice, a recommendation, or a guarantee.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Before making any major decision involving relocation, retirement,
              visas, residency, taxes, healthcare, insurance, investments,
              housing, or finances, you should consult qualified professionals,
              including licensed financial advisors, tax professionals,
              immigration attorneys, healthcare providers, insurance
              professionals, and other appropriate experts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-4">
              Costs, Laws, Healthcare, and Local Conditions Change
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Cost-of-living estimates, rent prices, healthcare access, insurance
              options, visa requirements, residency rules, tax rules, exchange
              rates, safety conditions, government policies, and local laws can
              change frequently and without notice.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              We make reasonable editorial efforts to provide useful and current
              information, but we do not guarantee that any information on this
              website is accurate, complete, current, available, or applicable to
              your specific situation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-4">
              No Guarantees of Results
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Golden Horizons may discuss potential retirement lifestyles,
              estimated monthly budgets, healthcare access, destination rankings,
              quality of life, safety, housing, and affordability. These are
              editorial estimates and opinions only.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Your personal experience may differ based on lifestyle, location,
              health needs, legal status, exchange rates, housing choices,
              income, family needs, language ability, and other factors outside
              our control.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-4">
              Use of Calculators, Rankings, and Estimates
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Any calculators, rankings, comparison tools, checklists, or cost
              estimates on Golden Horizons are provided for general planning and
              educational purposes only. They are not a substitute for
              professional advice and should not be relied on as the sole basis
              for any retirement, relocation, legal, tax, healthcare, housing, or
              financial decision.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-4">
              Use at Your Own Risk
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Any decisions you make based on information from Golden Horizons
              are made at your own risk. Golden Horizons, its owners, editors,
              writers, contributors, partners, affiliates, and service providers
              are not responsible for losses, damages, costs, legal issues,
              medical issues, tax consequences, financial outcomes, relocation
              problems, or other issues that may result from your use of the
              website or reliance on its content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-4">
              External Links and Third-Party Resources
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              This website may link to third-party websites, government pages,
              service providers, travel resources, advertisers, sponsors,
              affiliate partners, or other external resources. We are not
              responsible for the accuracy, content, policies, availability,
              products, services, claims, or practices of any third-party website
              or service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-4">
              Affiliate, Advertising, and Sponsor Disclosure
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Golden Horizons may earn revenue from advertising, sponsorships,
              affiliate links, partnerships, lead generation, or other commercial
              relationships. If you click certain links or purchase products or
              services through links on our website or emails, we may receive
              compensation at no additional cost to you.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Sponsored content, partner features, affiliate links, or paid
              placements should be understood as commercial content. We aim to
              keep editorial content independent, but readers should always do
              their own research before purchasing any product or service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-4">
              Newsletter and Email Content
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Golden Horizons newsletters are provided for general informational
              and editorial purposes only. Newsletter content may include
              articles, destination ideas, estimates, links, sponsor messages,
              affiliate links, or promotional content. You may unsubscribe from
              marketing emails at any time using the unsubscribe link included in
              our emails.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-4">
              Corrections and Updates
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              We may update, revise, remove, or correct content at any time
              without notice. If you believe something on Golden Horizons is
              inaccurate, outdated, or misleading, please contact us and we will
              review it when appropriate.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-4">Contact</h2>
            <p className="text-foreground/80 leading-relaxed">
              If you have questions about this disclaimer or believe something
              on the site is inaccurate or outdated, contact us at{" "}
              <a
                href="mailto:hello@golden-horizons.org"
                className="text-primary hover:underline"
              >
                hello@golden-horizons.org
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

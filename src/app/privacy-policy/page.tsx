import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Golden Horizons",
  description:
    "How Golden Horizons collects, uses, stores, and protects your personal information.",
};

const LAST_UPDATED = "May 4, 2026";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#1a3a2a] py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-white leading-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-white/60" style={{ fontSize: "15px" }}>
              Last updated: {LAST_UPDATED}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-10">
              <div>
                <p
                  className="text-foreground/70 leading-relaxed"
                  style={{ fontSize: "17px" }}
                >
                  Golden Horizons (&quot;we,&quot; &quot;us,&quot; or
                  &quot;our&quot;) operates golden-horizons.org and publishes a
                  free email newsletter focused on retirement abroad, travel,
                  lifestyle, cost-of-living information, healthcare
                  considerations, visa topics, and related general-interest
                  content.
                </p>

                <p
                  className="text-foreground/70 leading-relaxed mt-4"
                  style={{ fontSize: "17px" }}
                >
                  This Privacy Policy explains what information we collect, how
                  we use it, how we protect it, and what rights you may have
                  regarding your personal information.
                </p>
              </div>

              {[
                {
                  title: "1. Information We Collect",
                  content: [
                    "Email address — collected when you subscribe to our newsletter, request a free guide, download content, or submit a form on our website.",
                    "Voluntary information — if you contact us directly, we may receive information you choose to provide, such as your name, email address, message content, or other details included in your communication.",
                    "Usage data — we may collect limited, anonymized, or aggregated data about how visitors interact with our website, including pages viewed, time spent on pages, referral source, device type, browser type, and general location information.",
                    "Cookies and similar technologies — our website may use cookies or similar technologies to improve functionality, analyze traffic, and understand reader engagement.",
                    "We do not knowingly collect sensitive personal information, payment information, Social Security numbers, government identification numbers, or detailed financial information through this website.",
                  ],
                },
                {
                  title: "2. How We Use Your Information",
                  content: [
                    "To send you our free newsletter, updates, guides, and related content.",
                    "To deliver free downloads, resources, or email sequences you requested.",
                    "To improve our website, articles, newsletters, and reader experience.",
                    "To understand which topics, destinations, and resources are most useful to readers.",
                    "To respond to questions, requests, or messages sent to us.",
                    "To monitor website performance, security, and technical functionality.",
                    "To comply with applicable legal obligations.",
                    "We do not sell or rent your personal information.",
                  ],
                },
                {
                  title: "3. Email Service Provider",
                  content: [
                    "We use Brevo, formerly Sendinblue, to manage newsletter subscriptions and send emails.",
                    "When you subscribe, your email address may be stored and processed by Brevo in accordance with its privacy and data protection practices. You can review Brevo’s privacy policy on Brevo’s official website.",
                    "Every marketing email we send includes an unsubscribe link. You may unsubscribe at any time.",
                  ],
                },
                {
                  title: "4. Cookies and Analytics",
                  content: [
                    "Our website may use cookies, analytics tools, or similar technologies to understand how visitors use the site and to improve performance.",
                    "Cookies may help us understand which pages are visited, how users navigate the site, what content performs best, and general traffic or referral patterns.",
                    "You can disable cookies through your browser settings. Some parts of the website may not function properly if cookies are disabled.",
                    "We do not use cookies to collect sensitive personal information.",
                  ],
                },
                {
                  title: "5. Third-Party Links, Affiliate Links, and Sponsored Content",
                  content: [
                    "Golden Horizons may contain links to third-party websites, services, offers, affiliate partners, advertisers, or sponsored content.",
                    "When you click a third-party link, you may be taken to a website that we do not control.",
                    "We are not responsible for the privacy practices, security, accuracy, policies, or content of third-party websites.",
                    "We encourage you to review the privacy policies and terms of any third-party websites you visit.",
                    "Some links may be affiliate links, meaning we may earn a commission if you click a link or make a purchase, at no additional cost to you.",
                  ],
                },
                {
                  title: "6. How We Share Information",
                  content: [
                    "We may share limited information only when necessary with email service providers, website hosting providers, analytics tools, security tools, technical service providers, legal authorities, or service providers who help us operate the website and newsletter.",
                    "We do not sell, rent, or trade your email address to third parties for their own marketing purposes.",
                  ],
                },
                {
                  title: "7. Data Retention",
                  content: [
                    "We retain your email address and subscription information for as long as you remain subscribed to our newsletter.",
                    "If you unsubscribe, request deletion, or ask us to remove your data, we will remove your information from active mailing lists within a reasonable period, generally within 30 days.",
                    "Some limited information may be retained if required for legal, security, backup, or compliance purposes.",
                  ],
                },
                {
                  title: "8. Your Rights",
                  content: [
                    "Depending on your location, you may have the right to access the personal information we hold about you.",
                    "You may request correction of inaccurate information.",
                    "You may request deletion of your personal information.",
                    "You may unsubscribe from marketing emails at any time.",
                    "You may object to or restrict certain types of processing where applicable.",
                    "You may request a copy of your data.",
                    "You may withdraw consent where processing is based on consent.",
                    "To make a request, contact us at newsletter@golden-horizons.org.",
                    "If you are located in the European Economic Area, United Kingdom, or another jurisdiction with privacy laws, you may have additional rights under applicable data protection laws.",
                  ],
                },
                {
                  title: "9. Email Communications",
                  content: [
                    "By subscribing to Golden Horizons, you agree to receive email communications from us.",
                    "These emails may include newsletter content, retirement abroad articles, destination guides, free resources, website updates, sponsored messages, partner content, affiliate links, or promotional links.",
                    "You can unsubscribe at any time by clicking the unsubscribe link included in every email.",
                  ],
                },
                {
                  title: "10. Security",
                  content: [
                    "We use reasonable administrative, technical, and organizational measures to help protect personal information.",
                    "However, no website, email system, database, or online transmission is completely secure. We cannot guarantee absolute security of your information.",
                  ],
                },
                {
                  title: "11. Children’s Privacy",
                  content: [
                    "Golden Horizons is intended for adults aged 18 and older.",
                    "We do not knowingly collect personal information from children under 13.",
                    "If we become aware that we have collected personal information from a child under 13, we will take reasonable steps to delete it.",
                  ],
                },
                {
                  title: "12. International Visitors",
                  content: [
                    "Golden Horizons is operated from the United States.",
                    "If you access the website from outside the United States, your information may be processed and stored in the United States or by service providers located in other jurisdictions.",
                    "By using the website or subscribing to the newsletter, you understand that your information may be transferred to and processed in countries outside your place of residence.",
                  ],
                },
                {
                  title: "13. Changes to This Privacy Policy",
                  content: [
                    "We may update this Privacy Policy from time to time.",
                    "When we make changes, we will update the Last updated date at the top of this page.",
                    "Continued use of the website or newsletter after updates means you accept the revised Privacy Policy.",
                  ],
                },
                {
                  title: "14. Contact Us",
                  content: [
                    "If you have questions about this Privacy Policy or how we handle your information, contact us at newsletter@golden-horizons.org.",
                  ],
                },
              ].map((section, i) => (
                <div key={i}>
                  <h2
                    className="text-xl font-bold font-serif mb-4"
                    style={{ color: "#1a1a1a" }}
                  >
                    {section.title}
                  </h2>
                  <ul className="space-y-3">
                    {section.content.map((point, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-foreground/70 leading-relaxed"
                        style={{ fontSize: "17px" }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="border-t border-border pt-8">
                <p
                  className="text-foreground/50 text-center"
                  style={{ fontSize: "14px" }}
                >
                  Golden Horizons · 21-14 Greenwood Dr, Fair Lawn, NJ 07410, USA
                  · newsletter@golden-horizons.org
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

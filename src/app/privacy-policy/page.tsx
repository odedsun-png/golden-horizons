import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Golden Horizons",
  description: "How Golden Horizons collects, uses, and protects your personal information.",
};

const LAST_UPDATED = "April 19, 2026";

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
                <p className="text-foreground/70 leading-relaxed" style={{ fontSize: "17px" }}>
                  Golden Horizons ("we", "us", or "our") operates the website golden-horizons.org and publishes a free email newsletter. This Privacy Policy explains what information we collect, how we use it, and what rights you have regarding your data.
                </p>
              </div>

              {[
                {
                  title: "1. Information we collect",
                  content: [
                    "Email address — collected when you subscribe to our newsletter via our website or any subscription form.",
                    "Usage data — we may collect anonymized data about how visitors interact with our website (pages viewed, time spent, referral source) using analytics tools. This data does not identify you personally.",
                    "We do not collect your name, phone number, mailing address, or payment information unless you explicitly provide it by contacting us.",
                  ],
                },
                {
                  title: "2. How we use your information",
                  content: [
                    "To send you our free daily or weekly newsletter containing retirement destination guides, cost breakdowns, and expat tips.",
                    "To improve our content and understand what topics our readers find most useful.",
                    "To respond to inquiries you send to newsletter@golden-horizons.org.",
                    "We do not sell, rent, or share your email address with third parties for marketing purposes.",
                  ],
                },
                {
                  title: "3. Email service provider",
                  content: [
                    "We use Brevo (formerly Sendinblue) to send our newsletter. Your email address is stored securely on Brevo's servers. Brevo is GDPR-compliant. You can review Brevo's privacy policy at brevo.com.",
                  ],
                },
                {
                  title: "4. Cookies",
                  content: [
                    "Our website may use cookies to improve your browsing experience and collect anonymized analytics data. You can disable cookies in your browser settings at any time.",
                    "We do not use cookies to track you across other websites or serve targeted advertising.",
                  ],
                },
                {
                  title: "5. Your rights",
                  content: [
                    "Unsubscribe at any time — every email we send includes an unsubscribe link at the bottom.",
                    "Request deletion — email us at newsletter@golden-horizons.org and we will remove your data from our systems within 30 days.",
                    "Access your data — you may request a copy of the personal information we hold about you at any time.",
                    "If you are located in the European Economic Area, you have additional rights under the GDPR including the right to data portability and the right to lodge a complaint with a supervisory authority.",
                  ],
                },
                {
                  title: "6. Data retention",
                  content: [
                    "We retain your email address for as long as you are subscribed to our newsletter. Upon unsubscription or deletion request, your data is removed from our active lists within 30 days.",
                  ],
                },
                {
                  title: "7. Third-party links",
                  content: [
                    "Our articles and emails may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.",
                  ],
                },
                {
                  title: "8. Children's privacy",
                  content: [
                    "Our website and newsletter are intended for adults aged 18 and over. We do not knowingly collect personal information from children under 13.",
                  ],
                },
                {
                  title: "9. Changes to this policy",
                  content: [
                    "We may update this Privacy Policy from time to time. When we do, we will update the 'Last updated' date at the top of this page. Continued use of our website or newsletter after changes constitutes acceptance of the updated policy.",
                  ],
                },
                {
                  title: "10. Contact us",
                  content: [
                    "If you have any questions about this Privacy Policy or how we handle your data, please contact us at newsletter@golden-horizons.org.",
                  ],
                },
              ].map((section, i) => (
                <div key={i}>
                  <h2 className="text-xl font-bold font-serif mb-4" style={{ color: "#1a1a1a" }}>
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
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="border-t border-border pt-8">
                <p className="text-foreground/50 text-center" style={{ fontSize: "14px" }}>
                  Golden Horizons · 21-14 Greenwood Dr, Fair Lawn, NJ 07410, USA · newsletter@golden-horizons.org
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

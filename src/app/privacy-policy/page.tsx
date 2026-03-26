import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-bold font-serif mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: March 2026</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-bold font-serif mb-4">Information We Collect</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              When you subscribe to our newsletter, we collect your email address. We also use analytics tools to understand how visitors interact with our website, including pages viewed, time spent on site, and general geographic location.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-4">How We Use Your Data</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Your email address is used solely to send you our newsletter containing retirement destination guides, tips, and updates. Analytics data helps us improve our content and user experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-4">Data Sharing</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We do not sell, trade, or share your personal information with third parties for marketing purposes. Your email is processed through Brevo (formerly Sendinblue) for newsletter delivery.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-4">Your Rights</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              You can unsubscribe from our newsletter at any time by clicking the unsubscribe link in any email. To request deletion of your data, contact us at hello@goldenhorizons.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-4">Contact</h2>
            <p className="text-foreground/80 leading-relaxed">
              For privacy-related questions, email us at{" "}
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

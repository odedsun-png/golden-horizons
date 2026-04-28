import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedStories from "@/components/FeaturedStories";
import Newsletter from "@/components/Newsletter";
import RecentStories from "@/components/RecentStories";
import HeroSection from "@/components/HeroSection";
import RetirementFinder from "@/components/RetirementFinder";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />

        {/* Finder — anchor matches href="#finder" in hero button */}
        <section id="finder" className="py-10 bg-muted/30 scroll-mt-4">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-6">
              <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground/60 mb-2">
                Retirement Destination Finder
              </h2>
              <div className="w-10 h-0.5 bg-primary mx-auto" />
            </div>
            <RetirementFinder />
          </div>
        </section>

        <FeaturedStories />
        <Newsletter />
        <RecentStories />
      </main>
      <Footer />
    </div>
  );
}

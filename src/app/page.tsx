import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedStories from "@/components/FeaturedStories";
import Newsletter from "@/components/Newsletter";
import RecentStories from "@/components/RecentStories";
import RetirementFinder from "@/components/RetirementFinder";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Retirement Finder — replaces HeroSection */}
        <section className="bg-[#1f2326] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-white mb-3">
              Find Your Perfect Retirement Destination
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Answer 6 quick questions — we'll match you to the best countries for your budget and lifestyle.
            </p>
          </div>
          <div className="max-w-2xl mx-auto px-4">
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

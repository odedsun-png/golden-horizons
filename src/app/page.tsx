import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedStories from "@/components/FeaturedStories";
import Newsletter from "@/components/Newsletter";
import RecentStories from "@/components/RecentStories";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <HeroSection />
        <FeaturedStories />
        <RecentStories />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}

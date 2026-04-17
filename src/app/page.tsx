import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedStories from "@/components/FeaturedStories";
import Newsletter from "@/components/Newsletter";
import RecentStories from "@/components/RecentStories";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedStories />
        <Newsletter />
        <RecentStories />
      </main>
      <Footer />
    </div>
  );
}

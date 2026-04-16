import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import FeaturedStories from "@/components/FeaturedStories";
import RecentStories from "@/components/RecentStories";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSlider />
        <FeaturedStories />
        <RecentStories />
      </main>
      <Footer />
    </div>
  );
}

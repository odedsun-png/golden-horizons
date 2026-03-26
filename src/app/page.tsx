import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import FeaturedStories from "@/components/FeaturedStories";
import Newsletter from "@/components/Newsletter";
import RecentStories from "@/components/RecentStories";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSlider />
        <FeaturedStories />
        <Newsletter />
        <RecentStories />
      </main>
      <Footer />
    </div>
  );
}

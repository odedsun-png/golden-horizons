import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import FeaturedStories from "@/components/FeaturedStories";
import Newsletter from "@/components/Newsletter";
import RecentStories from "@/components/RecentStories";
import { getArticleCards } from "@/lib/markdown";

export default async function Home() {
  const heroArticles = getArticleCards(3);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSlider articles={heroArticles} />
        <FeaturedStories />
        <Newsletter />
        <RecentStories />
      </main>
      <Footer />
    </div>
  );
}

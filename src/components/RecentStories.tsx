// src/app/page.tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedStories />
        <Newsletter />
        <WorldMap />   {/* ← keep this, delete RecentStories import + usage */}
      </main>
      <Footer />
    </div>
  );
}

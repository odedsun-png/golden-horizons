import WorldMap from "@/components/WorldMap";

export default function RecentStories() {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground/70 mb-3">
            Explore Destinations
          </h2>
          <div className="w-12 h-1 bg-primary" />
          <p className="text-muted-foreground mt-3 text-sm">
            Tap any pin to explore retirement destinations, costs, and our articles.
          </p>
        </div>
        <WorldMap />
      </div>
    </section>
  );
}

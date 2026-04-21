"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const DESTINATIONS = [
  {
    id: "portugal", name: "Portugal", flag: "🇵🇹", rank: 1,
    lat: 39.4, lng: -8.2,
    cost: "$2,500–$4,000/mo", region: "Europe",
    tagline: "#1 International Living 2026",
    articles: [
      { cat: "Beach", title: "Beach Retirement Living in Lagos vs Albufeira", slug: "portugal-beach-retirement-living-in-lagos-vs-albufeira" },
    ],
  },
  {
    id: "mexico", name: "Mexico", flag: "🇲🇽", rank: 2,
    lat: 23.6, lng: -102.5,
    cost: "$1,500–$3,000/mo", region: "North America",
    tagline: "Close to home, far cheaper",
    articles: [],
  },
  {
    id: "costa-rica", name: "Costa Rica", flag: "🇨🇷", rank: 3,
    lat: 9.7, lng: -83.7,
    cost: "$2,000–$3,500/mo", region: "Central America",
    tagline: "Pura Vida lifestyle",
    articles: [
      { cat: "Culture", title: "Food, Nature, and Pura Vida Culture for Retirees", slug: "costa-rica-food-nature-and-pura-vida-culture-for-retirees" },
    ],
  },
  {
    id: "spain", name: "Spain", flag: "🇪🇸", rank: 4,
    lat: 40.4, lng: -3.7,
    cost: "$2,500–$4,500/mo", region: "Europe",
    tagline: "Mediterranean lifestyle",
    articles: [
      { cat: "Beach", title: "Mediterranean Oceanfront Living in Málaga Province", slug: "spain-mediterranean-oceanfront-living-in-malaga-province" },
      { cat: "Beach", title: "Beach Retirement Living on Costa del Sol", slug: "spain-beach-retirement-living-on-costa-del-sol" },
    ],
  },
  {
    id: "panama", name: "Panama", flag: "🇵🇦", rank: 5,
    lat: 8.9, lng: -79.5,
    cost: "$2,500–$4,500/mo", region: "Central America",
    tagline: "Uses US dollar, Pensionado discounts",
    articles: [
      { cat: "Safety", title: "Safest Areas for Retirees in Panama", slug: "panama-safest-areas-for-retirees-in-panama" },
      { cat: "Expat", title: "Expat Life in Boquete's Coffee Highlands", slug: "panama-expat-life-in-boquetes-coffee-highlands" },
    ],
  },
  {
    id: "thailand", name: "Thailand", flag: "🇹🇭", rank: 6,
    lat: 15.8, lng: 100.9,
    cost: "$1,500–$3,000/mo", region: "SE Asia",
    tagline: "Extremely affordable, world-class medical",
    articles: [],
  },
  {
    id: "ecuador", name: "Ecuador", flag: "🇪🇨", rank: 7,
    lat: -1.8, lng: -78.2,
    cost: "$1,500–$2,500/mo", region: "South America",
    tagline: "Uses US dollar, diverse climates",
    articles: [],
  },
  {
    id: "malaysia", name: "Malaysia", flag: "🇲🇾", rank: 8,
    lat: 4.2, lng: 108.0,
    cost: "$1,500–$2,800/mo", region: "SE Asia",
    tagline: "Modern, English-speaking, affordable",
    articles: [
      { cat: "Best Cities", title: "Best Cities for Retirees: Penang vs Kuala Lumpur", slug: "malaysia-best-cities-for-retirees-penang-vs-kuala-lumpur" },
    ],
  },
  {
    id: "greece", name: "Greece", flag: "🇬🇷", rank: 9,
    lat: 39.1, lng: 21.8,
    cost: "$2,000–$3,500/mo", region: "Europe",
    tagline: "Island lifestyle, Mediterranean diet",
    articles: [
      { cat: "Best Cities", title: "Best Cities for Retirees: Thessaloniki vs Athens", slug: "greece-best-cities-for-retirees-thessaloniki-vs-athens" },
    ],
  },
  {
    id: "colombia", name: "Colombia", flag: "🇨🇴", rank: 10,
    lat: 4.6, lng: -74.1,
    cost: "$1,500–$2,800/mo", region: "South America",
    tagline: "Eternal spring climate in Medellín",
    articles: [],
  },
  {
    id: "vietnam", name: "Vietnam", flag: "🇻🇳", rank: null,
    lat: 14.0, lng: 108.3,
    cost: "$1,000–$1,800/mo", region: "SE Asia",
    tagline: "Southeast Asia's best value",
    articles: [
      { cat: "Best Cities", title: "Best Cities for Retirees: Da Nang vs Hội An", slug: "vietnam-best-cities-for-retirees-da-nang-vs-hoi-an" },
      { cat: "Hidden Gems", title: "Hidden Riverside Towns Beyond the Tourist Trail", slug: "vietnam-hidden-riverside-towns-beyond-the-tourist-trail" },
    ],
  },
  {
    id: "italy", name: "Italy", flag: "🇮🇹", rank: null,
    lat: 42.5, lng: 12.5,
    cost: "$2,500–$5,000/mo", region: "Europe",
    tagline: "€100k flat tax & world's best food",
    articles: [
      { cat: "Cost", title: "What $3,000 a Month Gets You in Sicily", slug: "italy-what-3000-a-month-gets-you-in-sicily" },
    ],
  },
  {
    id: "france", name: "France", flag: "🇫🇷", rank: null,
    lat: 46.2, lng: 2.2,
    cost: "$3,000–$6,000/mo", region: "Europe",
    tagline: "World's #1 healthcare system",
    articles: [],
  },
  {
    id: "new-zealand", name: "New Zealand", flag: "🇳🇿", rank: null,
    lat: -40.9, lng: 174.9,
    cost: "$3,500–$6,000/mo", region: "Pacific",
    tagline: "#2 safest country on Earth",
    articles: [],
  },
  {
    id: "malta", name: "Malta", flag: "🇲🇹", rank: null,
    lat: 35.9, lng: 14.4,
    cost: "$2,500–$4,000/mo", region: "Europe",
    tagline: "Only English-speaking EU country",
    articles: [
      { cat: "Expat", title: "Expat Life on Gozo's Slower Island Pace", slug: "malta-expat-life-on-gozos-slower-island-pace" },
    ],
  },
  {
    id: "belize", name: "Belize", flag: "🇧🇿", rank: null,
    lat: 17.2, lng: -88.5,
    cost: "$1,500–$2,500/mo", region: "Central America",
    tagline: "English-speaking Caribbean retirement",
    articles: [],
  },
  {
    id: "argentina", name: "Argentina", flag: "🇦🇷", rank: null,
    lat: -38.4, lng: -63.6,
    cost: "$1,000–$2,000/mo", region: "South America",
    tagline: "Paris of South America",
    articles: [],
  },
  {
    id: "bolivia", name: "Bolivia", flag: "🇧🇴", rank: null,
    lat: -16.3, lng: -63.6,
    cost: "$800–$1,400/mo", region: "South America",
    tagline: "South America's most affordable",
    articles: [],
  },
  {
    id: "cambodia", name: "Cambodia", flag: "🇰🇭", rank: null,
    lat: 12.6, lng: 104.9,
    cost: "$1,000–$1,800/mo", region: "SE Asia",
    tagline: "Easiest visa in Asia, USD economy",
    articles: [],
  },
  {
    id: "northern-cyprus", name: "N. Cyprus", flag: "🇨🇾", rank: null,
    lat: 35.1, lng: 33.4,
    cost: "$1,200–$2,200/mo", region: "Mediterranean",
    tagline: "Mediterranean lifestyle at budget prices",
    articles: [],
  },
  {
    id: "philippines", name: "Philippines", flag: "🇵🇭", rank: null,
    lat: 12.9, lng: 121.8,
    cost: "$1,200–$2,500/mo", region: "SE Asia",
    tagline: "English-speaking Asia, no tax on pensions",
    articles: [
      { cat: "Safety", title: "Safest Areas for Retirement in the Philippines", slug: "philippines-safest-areas-for-retirement-in-the-philippines" },
    ],
  },
  {
    id: "panama-azores", name: "Azores", flag: "🇵🇹", rank: null,
    lat: 37.7, lng: -25.5,
    cost: "$1,800–$2,800/mo", region: "Atlantic Islands",
    tagline: "Europe's best-kept secret",
    articles: [],
  },
];

export default function WorldMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const [selected, setSelected] = useState<typeof DESTINATIONS[0] | null>(null);
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    if (!mapRef.current || leafletRef.current) return;

    const linkEl = document.createElement("link");
    linkEl.rel = "stylesheet";
    linkEl.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(linkEl);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.onload = () => {
      const L = (window as any).L;

      const map = L.map(mapRef.current, {
        center: [20, 10],
        zoom: 2,
        zoomControl: true,
        scrollWheelZoom: false,
        attributionControl: false,
      });

      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        maxZoom: 10,
      }).addTo(map);

      leafletRef.current = map;

      DESTINATIONS.forEach((dest) => {
        const isRanked = dest.rank !== null;

        const iconHtml = `
          <div style="
            width: ${isRanked ? 36 : 28}px;
            height: ${isRanked ? 36 : 28}px;
            background: ${isRanked ? "#1a3a2a" : "#ffffff"};
            border: 2px solid ${isRanked ? "#c8a84e" : "#1a3a2a"};
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: ${isRanked ? "16px" : "13px"};
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(0,0,0,0.25);
            transition: transform 0.15s;
          ">${dest.flag}</div>`;

        const icon = L.divIcon({
          html: iconHtml,
          className: "",
          iconSize: [isRanked ? 36 : 28, isRanked ? 36 : 28],
          iconAnchor: [isRanked ? 18 : 14, isRanked ? 18 : 14],
        });

        const marker = L.marker([dest.lat, dest.lng], { icon })
          .addTo(map)
          .on("click", () => {
            setSelected(dest);
            markersRef.current.forEach((m) => {
              const el = m.getElement();
              if (el) el.querySelector("div").style.transform = "scale(1)";
            });
            const el = marker.getElement();
            if (el) el.querySelector("div").style.transform = "scale(1.3)";
          });

        markersRef.current.push(marker);
      });

      setMapReady(true);
    };
    document.head.appendChild(script);

    return () => {
      if (leafletRef.current) {
        leafletRef.current.remove();
        leafletRef.current = null;
      }
    };
  }, []);

  return (
    <div style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
      <div style={{ position: "relative" }}>
        <div
          ref={mapRef}
          style={{
            width: "100%",
            height: "480px",
            borderRadius: "8px",
            overflow: "hidden",
            background: "#e8f0f7",
          }}
        />
        {!mapReady && (
          <div style={{
            position: "absolute", inset: 0, display: "flex",
            alignItems: "center", justifyContent: "center",
            background: "#f0f4f0", borderRadius: "8px",
          }}>
            <p style={{ color: "#888", fontSize: "14px" }}>Loading map...</p>
          </div>
        )}
      </div>

      {/* Legend */}
      <div style={{ display: "flex", gap: "20px", margin: "10px 0 0", padding: "0 4px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#1a3a2a", border: "2px solid #c8a84e" }} />
          <span style={{ fontSize: "12px", color: "#666" }}>Top 10 ranked</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#fff", border: "2px solid #1a3a2a" }} />
          <span style={{ fontSize: "12px", color: "#666" }}>More destinations</span>
        </div>
        <span style={{ fontSize: "12px", color: "#aaa", marginLeft: "auto" }}>Tap a pin to explore</span>
      </div>

      {/* Country card */}
      {selected && (
        <div style={{
          marginTop: "16px",
          background: "#ffffff",
          border: "1px solid #e8e0d0",
          borderLeft: "4px solid #c8a84e",
          borderRadius: "8px",
          padding: "20px 20px 16px",
        }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ fontSize: "32px" }}>{selected.flag}</span>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <h3 style={{ fontSize: "20px", fontWeight: 700, margin: 0, color: "#1a1a1a" }}>{selected.name}</h3>
                  {selected.rank && (
                    <span style={{ fontSize: "11px", fontWeight: 700, background: "#1a3a2a", color: "#c8a84e", padding: "2px 8px", borderRadius: "4px" }}>
                      #{selected.rank} Ranked
                    </span>
                  )}
                </div>
                <p style={{ fontSize: "13px", color: "#888", margin: "2px 0 0" }}>{selected.region} · {selected.cost} couple</p>
              </div>
            </div>
            <button
              onClick={() => setSelected(null)}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: "18px", color: "#aaa", padding: "0 0 0 8px" }}
            >×</button>
          </div>

          <p style={{ fontSize: "14px", color: "#555", margin: "0 0 14px", fontStyle: "italic" }}>{selected.tagline}</p>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "14px" }}>
            <Link
              href={`/destinations/${selected.id}`}
              style={{
                display: "inline-block", background: "#1a3a2a", color: "#ffffff",
                fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px",
                textTransform: "uppercase", textDecoration: "none",
                padding: "10px 18px", borderRadius: "6px",
              }}
            >
              View Full Profile →
            </Link>
          </div>

          {selected.articles.length > 0 && (
            <div style={{ borderTop: "1px solid #f0ece4", paddingTop: "12px" }}>
              <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#aaa", margin: "0 0 8px" }}>
                Related Articles
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {selected.articles.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/articles/${a.slug}`}
                    style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}
                  >
                    <span style={{
                      fontSize: "10px", fontWeight: 700, background: "#e8f4ed",
                      color: "#0f6e56", padding: "2px 7px", borderRadius: "3px", flexShrink: 0,
                    }}>{a.cat}</span>
                    <span style={{ fontSize: "13px", color: "#333" }}>{a.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {selected.articles.length === 0 && (
            <p style={{ fontSize: "13px", color: "#bbb", margin: 0, borderTop: "1px solid #f0ece4", paddingTop: "10px" }}>
              No articles yet for {selected.name} — more coming soon.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

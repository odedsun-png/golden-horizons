/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface Article {
  cat: string;
  title: string;
  slug: string;
}

interface Destination {
  id: string;
  name: string;
  flag: string;
  rank: number | null;
  lat: number;
  lng: number;
  cost: string;
  region: string;
  tagline: string;
  articles: Article[];
}

const DESTINATIONS: Destination[] = [
  { id: "portugal", name: "Portugal", flag: "🇵🇹", rank: 1, lat: 39.4, lng: -8.2, cost: "$2,500–$4,000/mo", region: "Europe", tagline: "#1 International Living 2026", articles: [{ cat: "Beach", title: "Beach Retirement Living in Lagos vs Albufeira", slug: "portugal-beach-retirement-living-in-lagos-vs-albufeira" }] },
  { id: "mexico", name: "Mexico", flag: "🇲🇽", rank: 2, lat: 23.6, lng: -102.5, cost: "$1,500–$3,000/mo", region: "North America", tagline: "Close to home, far cheaper", articles: [] },
  { id: "costa-rica", name: "Costa Rica", flag: "🇨🇷", rank: 3, lat: 9.7, lng: -83.7, cost: "$2,000–$3,500/mo", region: "Central America", tagline: "Pura Vida lifestyle", articles: [{ cat: "Culture", title: "Food, Nature, and Pura Vida Culture for Retirees", slug: "costa-rica-food-nature-and-pura-vida-culture-for-retirees" }] },
  { id: "spain", name: "Spain", flag: "🇪🇸", rank: 4, lat: 40.4, lng: -3.7, cost: "$2,500–$4,500/mo", region: "Europe", tagline: "Mediterranean lifestyle", articles: [{ cat: "Beach", title: "Mediterranean Oceanfront Living in Málaga Province", slug: "spain-mediterranean-oceanfront-living-in-malaga-province" }] },
  { id: "panama", name: "Panama", flag: "🇵🇦", rank: 5, lat: 8.9, lng: -79.5, cost: "$2,500–$4,500/mo", region: "Central America", tagline: "Uses US dollar, Pensionado discounts", articles: [{ cat: "Safety", title: "Safest Areas for Retirees in Panama", slug: "panama-safest-areas-for-retirees-in-panama" }] },
  { id: "thailand", name: "Thailand", flag: "🇹🇭", rank: 6, lat: 15.8, lng: 100.9, cost: "$1,500–$3,000/mo", region: "SE Asia", tagline: "Extremely affordable, world-class medical", articles: [] },
  { id: "ecuador", name: "Ecuador", flag: "🇪🇨", rank: 7, lat: -1.8, lng: -78.2, cost: "$1,500–$2,500/mo", region: "South America", tagline: "Uses US dollar, diverse climates", articles: [] },
  { id: "malaysia", name: "Malaysia", flag: "🇲🇾", rank: 8, lat: 4.2, lng: 108.0, cost: "$1,500–$2,800/mo", region: "SE Asia", tagline: "Modern, English-speaking, affordable", articles: [{ cat: "Best Cities", title: "Best Cities for Retirees: Penang vs Kuala Lumpur", slug: "malaysia-best-cities-for-retirees-penang-vs-kuala-lumpur" }] },
  { id: "greece", name: "Greece", flag: "🇬🇷", rank: 9, lat: 39.1, lng: 21.8, cost: "$2,000–$3,500/mo", region: "Europe", tagline: "Island lifestyle, Mediterranean diet", articles: [{ cat: "Best Cities", title: "Best Cities for Retirees: Thessaloniki vs Athens", slug: "greece-best-cities-for-retirees-thessaloniki-vs-athens" }] },
  { id: "colombia", name: "Colombia", flag: "🇨🇴", rank: 10, lat: 4.6, lng: -74.1, cost: "$1,500–$2,800/mo", region: "South America", tagline: "Eternal spring climate in Medellín", articles: [] },
  { id: "vietnam", name: "Vietnam", flag: "🇻🇳", rank: null, lat: 14.0, lng: 108.3, cost: "$1,000–$1,800/mo", region: "SE Asia", tagline: "Southeast Asia's best value", articles: [{ cat: "Best Cities", title: "Best Cities for Retirees: Da Nang vs Hội An", slug: "vietnam-best-cities-for-retirees-da-nang-vs-hoi-an" }] },
  { id: "italy", name: "Italy", flag: "🇮🇹", rank: null, lat: 42.5, lng: 12.5, cost: "$2,500–$5,000/mo", region: "Europe", tagline: "World's best food and culture", articles: [{ cat: "Cost", title: "What $3,000 a Month Gets You in Sicily", slug: "italy-what-3000-a-month-gets-you-in-sicily" }] },
  { id: "france", name: "France", flag: "🇫🇷", rank: null, lat: 46.2, lng: 2.2, cost: "$3,000–$6,000/mo", region: "Europe", tagline: "World-class healthcare and lifestyle", articles: [] },
  { id: "new-zealand", name: "New Zealand", flag: "🇳🇿", rank: null, lat: -40.9, lng: 174.9, cost: "$3,500–$6,000/mo", region: "Pacific", tagline: "#2 safest country on Earth", articles: [] },
  { id: "malta", name: "Malta", flag: "🇲🇹", rank: null, lat: 35.9, lng: 14.4, cost: "$2,500–$4,000/mo", region: "Europe", tagline: "Only English-speaking EU country", articles: [{ cat: "Expat", title: "Expat Life on Gozo's Slower Island Pace", slug: "malta-expat-life-on-gozos-slower-island-pace" }] },
  { id: "belize", name: "Belize", flag: "🇧🇿", rank: null, lat: 17.2, lng: -88.5, cost: "$1,500–$2,500/mo", region: "Central America", tagline: "English-speaking Caribbean retirement", articles: [] },
  { id: "argentina", name: "Argentina", flag: "🇦🇷", rank: null, lat: -38.4, lng: -63.6, cost: "$1,000–$2,000/mo", region: "South America", tagline: "Paris of South America", articles: [] },
  { id: "bolivia", name: "Bolivia", flag: "🇧🇴", rank: null, lat: -16.3, lng: -63.6, cost: "$800–$1,400/mo", region: "South America", tagline: "South America's most affordable", articles: [] },
  { id: "cambodia", name: "Cambodia", flag: "🇰🇭", rank: null, lat: 12.6, lng: 104.9, cost: "$1,000–$1,800/mo", region: "SE Asia", tagline: "Easiest visa in Asia", articles: [] },
  { id: "northern-cyprus", name: "N. Cyprus", flag: "🇨🇾", rank: null, lat: 35.1, lng: 33.4, cost: "$1,200–$2,200/mo", region: "Mediterranean", tagline: "Mediterranean lifestyle at budget prices", articles: [] },
  { id: "philippines", name: "Philippines", flag: "🇵🇭", rank: null, lat: 12.9, lng: 121.8, cost: "$1,200–$2,500/mo", region: "SE Asia", tagline: "English-speaking Asia", articles: [{ cat: "Safety", title: "Safest Areas for Retirement in the Philippines", slug: "philippines-safest-areas-for-retirement-in-the-philippines" }] },
  { id: "azores", name: "Azores", flag: "🇵🇹", rank: null, lat: 37.7, lng: -25.5, cost: "$1,800–$2,800/mo", region: "Atlantic Islands", tagline: "Europe's best-kept secret", articles: [] },
];

export default function WorldMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const [selected, setSelected] = useState<Destination | null>(null);
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    if (!mapRef.current || leafletMapRef.current) return;

    const existingLeafletCss = document.querySelector('link[href*="leaflet.css"]');
    if (!existingLeafletCss) {
      const linkEl = document.createElement("link");
      linkEl.rel = "stylesheet";
      linkEl.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(linkEl);
    }

    const loadMap = () => {
      const L = (window as any).L;
      if (!mapRef.current || !L || leafletMapRef.current) return;

      const map = L.map(mapRef.current, {
        center: [20, 10],
        zoom: 2,
        minZoom: 2,
        maxZoom: 5,
        zoomControl: true,
        scrollWheelZoom: false,
        attributionControl: false,
        worldCopyJump: false,
        maxBounds: [
          [-70, -180],
          [85, 180],
        ],
        maxBoundsViscosity: 1.0,
      });

      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        noWrap: true,
        bounds: [
          [-90, -180],
          [90, 180],
        ],
        maxZoom: 5,
      }).addTo(map);

      leafletMapRef.current = map;

      DESTINATIONS.forEach((dest) => {
        const isRanked = dest.rank !== null;
        const size = isRanked ? 36 : 28;
        const half = size / 2;

        const iconHtml = `<div style="width:${size}px;height:${size}px;background:${isRanked ? "#1a3a2a" : "#ffffff"};border:2px solid ${isRanked ? "#c8a84e" : "#1a3a2a"};border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:${isRanked ? 16 : 13}px;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.25);transition:transform .15s ease;">${dest.flag}</div>`;

        const icon = L.divIcon({
          html: iconHtml,
          className: "",
          iconSize: [size, size],
          iconAnchor: [half, half],
        });

        const marker = L.marker([dest.lat, dest.lng], { icon })
          .addTo(map)
          .on("click", () => {
            setSelected(dest);

            markersRef.current.forEach((m) => {
              const el = m.getElement();
              const inner = el?.querySelector("div") as HTMLElement | null;
              if (inner) inner.style.transform = "scale(1)";
            });

            const el = marker.getElement();
            const inner = el?.querySelector("div") as HTMLElement | null;
            if (inner) inner.style.transform = "scale(1.3)";
          });

        markersRef.current.push(marker);
      });

      setMapReady(true);

      setTimeout(() => {
        map.invalidateSize();
      }, 250);
    };

    if ((window as any).L) {
      loadMap();
    } else {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.onload = loadMap;
      document.head.appendChild(script);
    }

    return () => {
      markersRef.current = [];
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
  }, []);

  return (
    <section className="world-map-section">
      <style>{`
        .world-map-section {
          background: #f7f3ed;
          padding: 56px 24px 64px;
          overflow: hidden;
        }

        .world-map-inner {
          max-width: 980px;
          margin: 0 auto;
        }

        .world-map-kicker {
          font-size: 11px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #b8873a;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .world-map-heading {
          font-family: Georgia, serif;
          font-size: 30px;
          line-height: 1.15;
          color: #1f2326;
          margin: 0 0 6px;
        }

        .world-map-subtitle {
          font-size: 14px;
          color: #7a746b;
          margin: 0 0 24px;
        }

        .world-map-card {
          width: 100%;
          border-radius: 14px;
          overflow: hidden;
          background: #e8f0f7;
          border: 1px solid rgba(31,35,38,0.08);
          box-shadow: 0 18px 50px rgba(0,0,0,0.08);
        }

        .world-map-box {
          width: 100%;
          height: 420px;
          overflow: hidden;
          background: #e8f0f7;
        }

        .world-map-loading {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f0f4f0;
          z-index: 10;
        }

        .world-map-legend {
          display: flex;
          gap: 20px;
          align-items: center;
          padding: 12px 14px;
          background: #ffffff;
          border-top: 1px solid rgba(31,35,38,0.08);
        }

        .world-map-legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: #666;
        }

        .world-map-legend-tip {
          margin-left: auto;
          font-size: 12px;
          color: #aaa;
        }

        .world-map-selected {
          margin-top: 18px;
          background: #ffffff;
          border: 1px solid #e8e0d0;
          border-left: 4px solid #c8a84e;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 12px 34px rgba(0,0,0,0.06);
        }

        @media (max-width: 700px) {
          .world-map-section {
            padding: 40px 14px 46px;
          }

          .world-map-box {
            height: 340px;
          }

          .world-map-heading {
            font-size: 24px;
          }

          .world-map-legend {
            flex-wrap: wrap;
          }

          .world-map-legend-tip {
            width: 100%;
            margin-left: 0;
          }
        }
      `}</style>

      <div className="world-map-inner">
        <div className="world-map-kicker">Explore Destinations</div>
        <h2 className="world-map-heading">Retirement destinations at a glance</h2>
        <p className="world-map-subtitle">
          Tap any pin to explore costs, regions, and related articles.
        </p>

        <div className="world-map-card">
          <div style={{ position: "relative" }}>
            <div ref={mapRef} className="world-map-box" />

            {!mapReady && (
              <div className="world-map-loading">
                <p style={{ color: "#888", fontSize: "14px" }}>Loading map...</p>
              </div>
            )}
          </div>

          <div className="world-map-legend">
            <div className="world-map-legend-item">
              <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#1a3a2a", border: "2px solid #c8a84e" }} />
              <span>Top 10 ranked</span>
            </div>

            <div className="world-map-legend-item">
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#fff", border: "2px solid #1a3a2a" }} />
              <span>More destinations</span>
            </div>

            <span className="world-map-legend-tip">Tap a pin to explore</span>
          </div>
        </div>

        {selected && (
          <div className="world-map-selected">
            <div style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
              <div style={{ display: "flex", gap: 12 }}>
                <span style={{ fontSize: "32px" }}>{selected.flag}</span>
                <div>
                  <h3 style={{ fontSize: "20px", fontWeight: 700, margin: 0, color: "#1a1a1a" }}>
                    {selected.name}
                  </h3>
                  <p style={{ fontSize: "13px", color: "#888", margin: "2px 0 0" }}>
                    {selected.region} · {selected.cost} couple
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelected(null)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "22px",
                  color: "#aaa",
                }}
              >
                ×
              </button>
            </div>

            <p style={{ fontSize: "14px", color: "#555", margin: "14px 0", fontStyle: "italic" }}>
              {selected.tagline}
            </p>

            <Link
              href={`/destinations/${selected.id}`}
              style={{
                display: "inline-block",
                background: "#1a3a2a",
                color: "#ffffff",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "10px 18px",
                borderRadius: "6px",
              }}
            >
              View Full Profile →
            </Link>

            {selected.articles.length > 0 && (
              <div style={{ borderTop: "1px solid #f0ece4", paddingTop: "12px", marginTop: "14px" }}>
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
                      <span style={{ fontSize: "10px", fontWeight: 700, background: "#e8f4ed", color: "#0f6e56", padding: "2px 7px", borderRadius: "3px", flexShrink: 0 }}>
                        {a.cat}
                      </span>
                      <span style={{ fontSize: "13px", color: "#333" }}>{a.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {selected.articles.length === 0 && (
              <p style={{ fontSize: "13px", color: "#bbb", margin: "10px 0 0", borderTop: "1px solid #f0ece4", paddingTop: "10px" }}>
                More {selected.name} articles coming soon.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

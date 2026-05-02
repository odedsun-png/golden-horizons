"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SubscribeBox from "@/components/SubscribeBox";

const slides = [
  {
    image:
      "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1400",
    kicker: "Cover Story · The Destination Report",
    title: "Where $2,000 a month can still buy a beautiful life",
    sub:
      "Warm evenings, walkable towns, better healthcare access, and a slower rhythm — the retirement dream is moving overseas.",
  },
  {
    image:
      "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1400",
    kicker: "The Expat File",
    title:
      "The old-town life people dream about — cafés, shade, and slow golden evenings",
    sub:
      "A real European street, real cafés, real texture — the kind of daily life retirement should make possible.",
  },
  {
    image:
      "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1400",
    kicker: "The Money Page",
    title: "Seaside towns where every morning feels like a postcard",
    sub:
      "Historic streets, sea views, walkable neighborhoods, and a softer rhythm — with the numbers checked before the dream begins.",
  },
];

const destinationMiniCards = [
  {
    name: "Portugal",
    cost: "from $1,800/mo",
    tag: "Top Ranked",
    anchor: "portugal",
  },
  {
    name: "Panama",
    cost: "from $1,600/mo",
    tag: "Best Healthcare",
    anchor: "panama",
  },
  {
    name: "Mexico",
    cost: "from $1,400/mo",
    tag: "Most Popular",
    anchor: "mexico",
  },
  {
    name: "Vietnam",
    cost: "from $1,200/mo",
    tag: "Best Value",
    anchor: "vietnam",
  },
  {
    name: "Belize",
    cost: "from $1,700/mo",
    tag: "English Only",
    anchor: "belize",
  },
  {
    name: "Ecuador",
    cost: "from $1,300/mo",
    tag: "Hidden Gem",
    anchor: "ecuador",
  },
];

const featuredDestinations = [
  {
    id: "portugal",
    name: "Portugal",
    cost: "from $1,800/mo",
    tag: "Top Ranked",
    image:
      "https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Old-world charm meets modern healthcare in coastal towns with centuries-old cafés, affordable living, and a thriving expat community.",
    highlights: [
      "Golden Visa program",
      "Top-tier healthcare",
      "English-friendly",
      "Coastal & inland options",
    ],
  },
  {
    id: "panama",
    name: "Panama",
    cost: "from $1,600/mo",
    tag: "Best Healthcare",
    image:
      "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "World-class hospitals, pensionado discounts, and a tropical climate make Panama the healthcare capital for American retirees.",
    highlights: [
      "Pensionado visa",
      "U.S. dollar economy",
      "Medical tourism hub",
      "Close to U.S.",
    ],
  },
  {
    id: "mexico",
    name: "Mexico",
    cost: "from $1,400/mo",
    tag: "Most Popular",
    image:
      "https://images.pexels.com/photos/1481105/pexels-photo-1481105.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Easy access, vibrant culture, and affordable living in colonial cities, beach towns, and mountain villages across the country.",
    highlights: [
      "Temporary resident visa",
      "Low cost of living",
      "Short flights home",
      "Huge expat networks",
    ],
  },
  {
    id: "vietnam",
    name: "Vietnam",
    cost: "from $1,200/mo",
    tag: "Best Value",
    image:
      "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Coastal cities with French colonial architecture, incredible food, and living costs that stretch every dollar.",
    highlights: [
      "Ultra-low cost",
      "Rich culture",
      "Safe for foreigners",
      "Fresh food daily",
    ],
  },
  {
    id: "belize",
    name: "Belize",
    cost: "from $1,700/mo",
    tag: "English Only",
    image:
      "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "English-speaking Caribbean paradise with reef diving, jungle adventures, and a retirement program that welcomes Americans.",
    highlights: [
      "English official language",
      "QRP retirement visa",
      "Caribbean beaches",
      "No language barrier",
    ],
  },
  {
    id: "ecuador",
    name: "Ecuador",
    cost: "from $1,300/mo",
    tag: "Hidden Gem",
    image:
      "https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Mountain towns with perfect weather year-round, affordable healthcare, and a pensioner visa that's easy to get.",
    highlights: [
      "Eternal spring climate",
      "Affordable healthcare",
      "U.S. dollar",
      "Retiree discounts",
    ],
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <main className="mag-page">
      <div className="site">
        <div className="topbar">
          <span>Vol. I, No. 1</span>
          <span className="hide-mob">
            golden-horizons.org · The Retirement Abroad Magazine
          </span>
          <span>April 2026</span>
        </div>

        <div className="masthead">
          <div className="dateline">
            <span>The Retirement Abroad Magazine</span>
            <span className="hide-mob">
              For Americans Who Are Ready for What&apos;s Next
            </span>
            <span>April 2026 · Issue 1</span>
          </div>

          <Link href="/" className="mastname">
            Golden Horizons
          </Link>

          <div className="issue-line">
            <span className="issue-tag">
              <strong>This Issue:</strong> Where $2,000/month buys a life worth
              living
            </span>
            <span className="issue-tag">
              <strong>Inside:</strong> The Money Page · The Destination Report ·
              The Health File
            </span>
          </div>
        </div>

        <nav className="nav">
          <Link href="/" className="active">
            Cover
          </Link>
          <Link href="/articles">All Stories</Link>
          <Link href="/destinations">Destinations</Link>
          <a href="#subscribe" style={{ textDecoration: "none", color: "inherit" }}>
            Subscribe Free
          </a>
        </nav>

        <div className="hero-wrap">
          {slides.map((slide, i) => (
            <div
              key={slide.title}
              className="hero-slide"
              style={{
                opacity: currentSlide === i ? 1 : 0,
                transition: "opacity 1.2s ease-in-out",
              }}
            >
              <img src={slide.image} alt="" className="hero-img" />
              <div className="hero-overlay" />
              <div className="hero-text">
                <div className="hero-kicker">{slide.kicker}</div>
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-sub">{slide.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="hero-caption">
          <p>
            Three windows into the Golden Horizons promise: old-world charm, sea
            air, richer days, and a retirement lifestyle that still feels
            possible.
          </p>
        </div>

        <div className="cover-story">
          <div className="mag-label">Cover Story · The Destination Report</div>
          <h2 className="cover-headline">
            The places where your money sets you free — and why more Americans
            are finding them every day
          </h2>
          <div className="byline">
            By the Editors of Golden Horizons · Cover Story · April 2026
          </div>

          <p className="body-text">
            There are places in the world where $2,000 a month buys the kind of
            life most Americans spend their entire career chasing. A terrace
            overlooking the sea. Fresh food every morning. A doctor you can
            actually afford to see. These places are not secrets — they are
            simply overlooked.
          </p>

          <p className="body-text">
            Golden Horizons exists to change that. Every morning we find one of
            these places, dig into the real numbers, and bring it straight to
            you. No hype. No sales pitch. Just the truth about what is possible —
            and what it actually costs.
          </p>

          <Link href="/articles" className="read-more">
            Read all stories in this issue →
          </Link>
        </div>

        <div className="pullquote">
          <p>
            &ldquo;Most people plan carefully for retirement. Almost none plan{" "}
            <em>where</em> to live it. That decision changes everything.&rdquo;
          </p>
          <cite>— The Golden Horizons Editors</cite>
        </div>

        <div id="subscribe">
          <SubscribeBox variant="inline" />
        </div>

        <div className="section-banner">Inside This Issue</div>

        <div className="below-fold">
          <div className="bf-col">
            <div className="mag-section-label">The Money Page</div>

            <div className="story-item">
              <img
                className="story-img"
                src="https://images.pexels.com/photos/32754142/pexels-photo-32754142.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Albania"
              />
              <div className="story-cat">Cost of Living · Albania</div>
              <Link
                href="/articles/albania-what-1000-a-month-gets-you-in-gjirokastr-v2"
                style={{ textDecoration: "none" }}
              >
                <div className="story-title">
                  What $1,000 a Month Gets You in Gjirokastër
                </div>
              </Link>
              <Link
                href="/articles/albania-what-1000-a-month-gets-you-in-gjirokastr-v2"
                className="story-read"
              >
                Read this story →
              </Link>
            </div>

            <div className="story-item">
              <img
                className="story-img"
                src="https://images.pexels.com/photos/15894001/pexels-photo-15894001.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Cambodia"
              />
              <div className="story-cat">Cost of Living · Cambodia</div>
              <Link
                href="/articles/cambodia-what-1000-a-month-gets-you-in-siem-reap-v2"
                style={{ textDecoration: "none" }}
              >
                <div className="story-title">
                  What $1,000 a Month Gets You in Siem Reap
                </div>
              </Link>
              <Link
                href="/articles/cambodia-what-1000-a-month-gets-you-in-siem-reap-v2"
                className="story-read"
              >
                Read this story →
              </Link>
            </div>
          </div>

          <div className="bf-col">
            <div className="mag-section-label">The Visa File</div>

            <div className="story-item">
              <img
                className="story-img"
                src="https://images.pexels.com/photos/154241/pexels-photo-154241.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Ireland"
              />
              <div className="story-cat">Visas &amp; Residency · Ireland</div>
              <Link
                href="/articles/ireland-residency-options-for-american-retirees-v2"
                style={{ textDecoration: "none" }}
              >
                <div className="story-title">
                  Residency Options for American Retirees in Ireland
                </div>
              </Link>
              <Link
                href="/articles/ireland-residency-options-for-american-retirees-v2"
                className="story-read"
              >
                Read this story →
              </Link>
            </div>

            <div className="story-item">
              <img
                className="story-img"
                src="https://images.pexels.com/photos/20813456/pexels-photo-20813456.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Georgia"
              />
              <div className="story-cat">Visas &amp; Residency · Georgia</div>
              <Link
                href="/articles/georgia-residency-options-for-us-retirees"
                style={{ textDecoration: "none" }}
              >
                <div className="story-title">
                  Residency Options for U.S. Retirees in Georgia
                </div>
              </Link>
              <Link
                href="/articles/georgia-residency-options-for-us-retirees"
                className="story-read"
              >
                Read this story →
              </Link>
            </div>
          </div>

          <div className="bf-col">
            <div className="sb-pull">
              <p>
                &ldquo;I kept waiting for the right time. Then I realized — this{" "}
                <em>is</em> the right time.&rdquo;
              </p>
              <cite>— Barbara, 63 · Lisbon, $1,900/mo</cite>
            </div>

            <SubscribeBox variant="sidebar" />
          </div>
        </div>

        <div className="section-banner">The Destination Report · At a Glance</div>

        <div className="dest-strip">
          <div className="dest-label">
            Best value destinations for Americans retiring abroad
          </div>

          <div className="dest-row">
            {destinationMiniCards.map((destination) => (
              <a
                key={destination.name}
                href={`#${destination.anchor}`}
                className="dest-card"
                style={{ textDecoration: "none" }}
              >
                <div className="dest-name">{destination.name}</div>
                <div className="dest-cost">{destination.cost}</div>
                <div className="dest-tag">{destination.tag}</div>
              </a>
            ))}
          </div>
        </div>

        <div className="section-banner">Featured Destinations</div>

        <div className="dest-cards-full">
          {featuredDestinations.map((destination) => (
            <div
              key={destination.id}
              id={destination.id}
              className="dest-card-full"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="dest-card-img"
              />

              <div className="dest-card-content">
                <div className="dest-card-header">
                  <div>
                    <h3 className="dest-card-name">{destination.name}</h3>
                    <div className="dest-card-cost">{destination.cost}</div>
                  </div>

                  <div className="dest-card-badge">{destination.tag}</div>
                </div>

                <p className="dest-card-desc">{destination.description}</p>

                <div className="dest-card-highlights">
                  {destination.highlights.map((item) => (
                    <div key={item} className="dest-highlight">
                      <div className="dest-bullet">✦</div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="ornament">— ✦ —</div>

        <footer className="mag-footer">
          <div className="footer-name">Golden Horizons</div>
          <p>
            The retirement abroad magazine for Americans who aren&apos;t done
            yet.
          </p>

          <div className="footer-links">
            <Link href="/">Website</Link>
            <span>|</span>
            <Link href="/articles">All Stories</Link>
            <span>|</span>
            <Link href="/destinations">Destinations</Link>
            <span>|</span>
            <Link href="/about">About</Link>
            <span>|</span>
            <Link href="/privacy-policy">Privacy</Link>
            <span>|</span>
            <Link href="/contact">Contact</Link>
            <span>|</span>
            <Link href="/terms-of-use">Terms</Link>
          </div>

          <p style={{ marginTop: 12, fontSize: 11, opacity: 0.5 }}>
            © 2026 Golden Horizons — All rights reserved
          </p>
        </footer>
      </div>
    </main>
  );
}

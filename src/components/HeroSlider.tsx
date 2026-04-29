"use client";

import { useEffect, useState, useCallback } from "react";
import RetirementFinder from "@/components/RetirementFinder";

const SLIDES = [
  {
    slogan: "Same money. Better life. Different country.",
    support: "There are places where your money buys freedom, not stress.",
    trigger: "What if retirement could cost less… and feel like more?",
    bg: "https://images.pexels.com/photos/36463421/pexels-photo-36463421.jpeg?auto=compress&cs=tinysrgb&w=1800",
  },
  {
    slogan: "Most people don’t choose where they retire. They default.",
    support: "There are places where your money — and life — go further.",
    trigger: "Are you retiring where you want… or just where you’re used to?",
    bg: "https://images.stockcake.com/public/6/c/5/6c59ecc6-8ff5-490a-981c-574d81c26c24_large/sunlit-outdoor-dining-stockcake.jpg",
  },
  {
    slogan: "You don’t need more money — you need a better plan.",
    support: "Less stress. More freedom. Same income.",
    trigger: "What if your savings could last longer… and your lifestyle could improve?",
    bg: "https://images.pexels.com/photos/12832297/pexels-photo-12832297.jpeg?auto=compress&cs=tinysrgb&w=1800",
  },
];

const DELAY = 8000;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(0);
  const [finderOpen, setFinderOpen] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setVisible(current), 50);
    return () => clearTimeout(t);
  }, [current]);

  useEffect(() => {
    const t = setInterval(next, DELAY);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="gh-hero">
      <style>{`
        .gh-hero {
          position: relative;
          width: 100%;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #1a1d21;
        }

        .gh-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 1.4s ease;
        }

        .gh-bg.active {
          opacity: 1;
        }

        .gh-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.58);
        }

        .gh-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 960px;
          width: 100%;
          padding: 90px 20px;
        }

        .gh-slogan {
          font-family: Georgia, serif;
          font-size: 54px;
          font-weight: 700;
          color: #fff;
          line-height: 1.12;
          margin: 0 0 16px;
        }

        .gh-support {
          font-size: 20px;
          color: rgba(255,255,255,0.78);
          margin: 0 0 10px;
        }

        .gh-trigger {
          font-size: 15px;
          color: #dcb770;
          margin: 0 0 34px;
        }

        .gh-btn {
          background: linear-gradient(135deg, #dcb770, #e8c980);
          color: #1a1a1a;
          padding: 18px 38px;
          border-radius: 8px;
          font-weight: 800;
          font-size: 16px;
          border: none;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(220,183,112,0.3);
        }

        .gh-btn:hover {
          transform: translateY(-2px);
        }

        .gh-finder-wrap {
          margin: 28px auto 0;
          max-width: 760px;
          width: 100%;
        }

        @media (max-width: 800px) {
          .gh-slogan {
            font-size: 36px;
          }

          .gh-support {
            font-size: 17px;
          }
        }
      `}</style>

      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`gh-bg ${visible === i ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.bg})` }}
        />
      ))}

      <div className="gh-overlay" />

      <div className="gh-content">
        <h1 className="gh-slogan">{SLIDES[visible].slogan}</h1>
        <p className="gh-support">{SLIDES[visible].support}</p>
        <p className="gh-trigger">{SLIDES[visible].trigger}</p>

        {!finderOpen && (
          <button className="gh-btn" onClick={() => setFinderOpen(true)}>
            🎯 Find My Retirement Destination
          </button>
        )}

        {finderOpen && (
          <div className="gh-finder-wrap">
            <RetirementFinder defaultOpen={true} />
          </div>
        )}
      </div>
    </section>
  );
}

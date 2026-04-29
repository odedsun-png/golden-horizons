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

// KEEP your same DESTINATIONS array here — do not change it.

export default function WorldMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const [selected, setSelected] = useState<Destination | null>(null);
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    if (!mapRef.current || leafletMapRef.current) return;

    const linkEl = document.createElement("link");
    linkEl.rel = "stylesheet";
    linkEl.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(linkEl);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";

    script.onload = () => {
      const L = (window as any).L;
      if (!mapRef.current) return;

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

        const iconHtml = `<div style="width:${size}px;height:${size}px;background:${isRanked ? "#1a3a2a" : "#ffffff"};border:2px solid ${isRanked ? "#c8a84e" : "#1a3a2a"};border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:${isRanked ? 16 : 13}px;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.25);">${dest.flag}</div>`;

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
              if (el) {
                const inner = el.querySelector("div") as HTMLElement | null;
                if (inner) inner.style.transform = "scale(1)";
              }
            });

            const el = marker.getElement();
            if (el) {
              const inner = el.querySelector("div") as HTMLElement | null;
              if (inner) inner.style.transform = "scale(1.3)";
            }
          });

        markersRef.current.push(marker);
      });

      setMapReady(true);

      setTimeout(() => {
        map.invalidateSize();
      }, 200);
    };

    document.head.appendChild(script);

    return () => {
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

        .world-map-title {
          font-size: 11px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #b8873a;
          font-weight: 700;
          margin-bottom: 8px;
       

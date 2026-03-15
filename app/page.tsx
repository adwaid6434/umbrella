// page.tsx
"use client";
import React from "react";
import Hero from "@/components/Hero";

import { Menu } from "lucide-react";
import FeatureSection from "@/components/FeatureSection";
import ProductShowcase from "@/components/ProductShowcase";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <header className="nav">
        <div>
          <span className={styles.logo}>ÆTHER.UMBRELLA.</span>
          <Menu size={24} strokeWidth={1} />
        </div>

        <div className="nav-links">
          <span>COLLECTION</span>
          <span>TECHNOLOGY</span>
        </div>
        <div className="menu" aria-label="Toggle menu" role="button">
          <span></span>
          <span></span>
        </div>
      </header>

      <Hero />
      <FeatureSection />
      {/* The new page scrolls into view here */}
      <ProductShowcase />

      {/* Move the fixed star here */}
      <div className="corner-star">✦</div>
    </main>
  );
}

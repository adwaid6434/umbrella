"use client";

import React from "react";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import ProductShowcase from "@/components/ProductShowcase";
import ContactSection from "@/components/ContactSection";

import { Menu } from "lucide-react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      {/* NAVBAR */}
      <header className={styles.nav}>
        {/* LEFT */}
        <div className={styles.navLeft}>
          <span className={styles.logo}>ÆTHER.UMBRELLA.</span>
        </div>

        {/* CENTER LINKS */}
        <nav className={styles.navLinks}>
          <span>COLLECTION</span>
          <span>TECHNOLOGY</span>
        </nav>

        {/* RIGHT MENU ICON */}
        <button className={styles.menuButton} aria-label="Toggle menu">
          <Menu size={26} strokeWidth={1.5} />
        </button>
      </header>

      {/* PAGE CONTENT */}
      <Hero />
      <FeatureSection />
      <ProductShowcase />
      <ContactSection />
    </main>
  );
}

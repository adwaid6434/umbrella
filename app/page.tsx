// page.tsx
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";

export default function Home() {
  return (
    <main>
      {/* Move the Nav here (or into its own component) */}
      <header className="nav">
        <div className="logo">ÆTHER.UMBRELLA.</div>
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

      {/* Move the fixed star here */}
      <div className="corner-star">✦</div>
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section className="hero">
      <header className="nav">
        <div className="logo">ÆTHER.UMBRELLA.</div>

        <div className="nav-links">
          <span>COLLECTION</span>
          <span>TECHNOLOGY</span>
        </div>

        <div className="menu">
          <span></span>
          <span></span>
        </div>
      </header>

      <div className="hero-left">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          THE LIQUID
          <br />
          GLASS SHIELD.
        </motion.h1>

        <p className="sub">Zero permeability.</p>

        <MagneticButton>EXPLORE</MagneticButton>
      </div>

      <div className="hero-right">
        <motion.img
          src="/umbrella.png"
          className="umbrella"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -12, 0],
          }}
          transition={{
            duration: 1.2,
            y: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      </div>

      <div className="corner-star">✦</div>
    </section>
  );
}

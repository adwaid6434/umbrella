"use client"; // <-- This is required for Framer Motion!

import { motion } from "framer-motion";
import Image from "next/image";
import MagneticButton from "./MagneticButton";

// Create a motion-enabled Next.js Image component
const MotionImage = motion(Image);

export default function Hero() {
  return (
    <section className="hero">
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
        <MotionImage
          src="/umbrella.png"
          alt="Aether Umbrella"
          className="umbrella"
          width={750}
          height={750}
          priority
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
    </section>
  );
}

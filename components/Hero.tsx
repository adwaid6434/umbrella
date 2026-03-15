"use client"; // <-- This is required for Framer Motion!

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MagneticButton from "./MagneticButton";

// Create a motion-enabled Next.js Image component
const MotionImage = motion(Image);

export default function Hero() {
  const [imgError, setImgError] = useState(false);

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
        {imgError ? (
          <div
            className="umbrella image-placeholder"
            style={{ width: 750, height: 750 }}
            title="Place umbrella.png in the public folder"
          />
        ) : (
          <MotionImage
            src="/umbrella.png"
            alt="Aether Umbrella"
            className="umbrella"
            width={750}
            height={750}
            sizes="(max-width: 900px) 100vw, (max-width: 1400px) 600px, 750px"
            priority
            unoptimized
            onError={() => setImgError(true)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -12, 0],
            }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
            }}
          />
        )}
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
// import { motion } from "framer-motion";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import MagneticButton from "./MagneticButton";

const MotionImage = motion(Image);

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const textReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 14,
    },
  },
};

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="hero">
      <motion.div
        className="hero-left"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={textReveal}>
          THE LIQUID
          <br />
          GLASS SHIELD.
        </motion.h1>

        <motion.p className="sub" variants={textReveal}>
          Zero permeability.
        </motion.p>

        <motion.div variants={textReveal}>
          <MagneticButton>EXPLORE</MagneticButton>
        </motion.div>
      </motion.div>

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
            initial={{ opacity: 0, scale: 0.94, y: 40 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 12,
              mass: 0.8,
            }}
            style={{ willChange: "transform" }}
          />
        )}

        {/* floating loop animation */}
        {!imgError && (
          <motion.div
            className="umbrella-float"
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </div>
    </section>
  );
}

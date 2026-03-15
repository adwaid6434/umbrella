"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./ProductShowcase.module.css";
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const cardAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const imageAnimation: Variants = {
  hidden: {
    opacity: 0,
    rotate: -8,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const textAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const ProductShowcase = () => {
  return (
    <motion.section
      className={styles.container}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Header */}
      <nav className={styles.nav}>
        <span className={styles.logo}>ÆTHER.UMBRELLA.</span>
      </nav>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* PRODUCT CARD */}
        <motion.div
          className={styles.imageCard}
          variants={cardAnimation}
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <motion.div variants={imageAnimation}>
            <Image
              src="/umbrella.png"
              alt="The Aether Umbrella"
              width={500}
              height={500}
              className={styles.productImg}
              priority
            />
          </motion.div>
        </motion.div>

        {/* TEXT REVEAL */}
        <motion.div variants={textAnimation}>
          <h2 className={styles.seriesTitle}>
            SERIES 01: <br />
            <span>THE ÆTHER.</span>
          </h2>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.leftControls}>
          <button className={styles.iconBtn}>
            <ChevronLeft size={20} />
          </button>

          <button className={`${styles.iconBtn} ${styles.activeBtn}`}>
            <ChevronRight size={20} />
          </button>
        </div>

        <p className={styles.caption}>Fluid motion. Seamless protection.</p>

        <div className={styles.rightControls}>
          <div className={styles.pagination}>
            <span className={`${styles.dot} ${styles.activeDot}`}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
          </div>

          <button className={styles.iconBtn}>
            <ChevronRight size={20} />
          </button>
        </div>
      </footer>
    </motion.section>
  );
};

export default ProductShowcase;

"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
import styles from "./ProductShowcase.module.css";

const ProductShowcase = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={styles.container}
    >
      {/* Header / Nav Area */}
      <nav className={styles.nav}>
        <span className={styles.logo}>ÆTHER.UMBRELLA.</span>
        {/* <Menu size={24} strokeWidth={1} /> */}
      </nav>

      {/* Background Ghost Images */}
      <div className={styles.ghostBackground}>
        <img
          src="/umbrella-outline-left.png"
          className={styles.ghostLeft}
          alt=""
        />
        <img
          src="/umbrella-handle-right.png"
          className={styles.ghostRight}
          alt=""
        />
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.textContent}>
          <h2 className={styles.seriesTitle}>
            SERIES 01: <br />
            <span>THE ÆTHER.</span>
          </h2>
        </div>

        <div className={styles.imageCard}>
          <img
            src="/main-umbrella.jpg"
            alt="The Aether Umbrella"
            className={styles.productImg}
          />
        </div>
      </div>

      {/* Footer Controls */}
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
            <span className={styles.dot}></span>
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

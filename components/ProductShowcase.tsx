"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./ProductShowcase.module.css";

const ProductShowcase = () => {
  return (
    <section className={styles.container}>
      {/* Header */}
      <nav className={styles.nav}>
        <span className={styles.logo}>ÆTHER.UMBRELLA.</span>
      </nav>

      {/* MAIN */}
      <div className={styles.mainContent}>
        {/* PRODUCT CARD */}
        <motion.div
          className={styles.imageCard}
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
        >
          <motion.div
            initial={{ rotate: -8, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
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

        {/* TITLE APPEARS AFTER PRODUCT */}
        <motion.h2
          className={styles.seriesTitle}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          SERIES 01: <br />
          <span>THE ÆTHER.</span>
        </motion.h2>
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
    </section>
  );
};

export default ProductShowcase;

"use client";

import { motion } from "framer-motion";

export default function FeatureSection() {
  return (
    <section className="feature-section">
      <div className="feature-left">
        {/* Text slides up from the bottom when scrolled into view */}
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of it is visible
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} // Smooth deceleration
        >
          FORM.
          <br />
          FUNCTION.
        </motion.h2>

        <motion.p
          className="sub"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Ethereal structure.
        </motion.p>
      </div>

      <div className="feature-right">
        {/* Image is static, so it just appears normally while scrolling */}
        <img
          src="/model-umbrella.png" /* Replace with your actual image name */
          alt="Model holding umbrella"
          className="model-img"
        />
      </div>
    </section>
  );
}

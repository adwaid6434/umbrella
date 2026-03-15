"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // 1. Import the Image component

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
        {/* 2. Use the Image component */}
        <Image
          src="/model-umbrella.png"
          alt="Model holding umbrella"
          className="model-img"
          width={800} // 3. Add expected width
          height={1200} // 4. Add expected height
          priority // 5. Optional: adds high priority if this is at the top of the page
        />
      </div>
    </section>
  );
}

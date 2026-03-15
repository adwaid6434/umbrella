"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FeatureSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="feature-section">
      <div className="feature-left">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
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
        {imgError ? (
          <div
            className="model-img image-placeholder"
            style={{ width: 750, height: 1200 }}
            title="Place model-umbrella.png in the public folder"
          />
        ) : (
          <Image
            src="/model-umbrella.png"
            alt="Model holding umbrella"
            className="model-img"
            width={800}
            height={1200}
            sizes="(max-width: 900px) 100vw, 750px"
            loading="lazy"
            unoptimized
            onError={() => setImgError(true)}
          />
        )}
      </div>
    </section>
  );
}

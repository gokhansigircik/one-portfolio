"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import clsx from "clsx";

type SectionProps = {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const Section = ({ id, title, children, className }: SectionProps) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <section id={id} ref={ref} className={clsx("section", className)}>
      <div className="container">
        {title ? (
          <h2 className="mb-8 text-3xl font-semibold md:text-4xl">{title}</h2>
        ) : null}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;

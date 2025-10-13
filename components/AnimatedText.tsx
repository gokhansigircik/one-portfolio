"use client";

import { motion } from "framer-motion";
import { ElementType } from "react";
import clsx from "clsx";

type AnimatedTextProps = {
  as?: ElementType;
  text: string;
  className?: string;
};

const AnimatedText = ({ as: Tag = "h2", text, className }: AnimatedTextProps) => {
  const characters = Array.from(text);
  const MotionSpan: any = motion.span;

  return (
    <Tag className={clsx("inline-block", className)}>
      {characters.map((character, index) => (
        <MotionSpan
          key={`${character}-${index}`}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.02, type: "spring", stiffness: 120, damping: 12 }}
          className="inline-block will-change-transform"
        >
          {character}
        </MotionSpan>
      ))}
    </Tag>
  );
};

export default AnimatedText;

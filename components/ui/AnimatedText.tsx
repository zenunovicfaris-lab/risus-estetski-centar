"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroContainer, heroLineReveal, viewportOnce } from "@/lib/motion";

interface AnimatedTextProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  as?: "h1" | "h2" | "h3" | "p";
  triggerOnce?: boolean;
}

export default function AnimatedText({
  lines,
  className,
  lineClassName,
  as: Tag = "h1",
  triggerOnce = true,
}: AnimatedTextProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <Tag className={className}>
        {lines.map((line, i) => (
          <span key={i} className={`block ${lineClassName ?? ""}`}>
            {line}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <motion.div
      variants={heroContainer}
      initial="hidden"
      whileInView="visible"
      viewport={triggerOnce ? viewportOnce : { once: false }}
      className={className}
    >
      {lines.map((line, i) => (
        <motion.span
          key={i}
          variants={heroLineReveal}
          className={`block ${lineClassName ?? ""}`}
        >
          {line}
        </motion.span>
      ))}
    </motion.div>
  );
}

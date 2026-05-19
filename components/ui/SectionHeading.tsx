"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  headline: string;
  subtext?: string;
  align?: "left" | "center";
  className?: string;
  headlineClassName?: string;
}

export default function SectionHeading({
  label,
  headline,
  subtext,
  align = "center",
  className,
  headlineClassName,
}: SectionHeadingProps) {
  const prefersReducedMotion = useReducedMotion();

  const animProps = prefersReducedMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: viewportOnce,
      };

  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", className)}>
      {label && (
        <motion.p
          {...animProps}
          variants={prefersReducedMotion ? undefined : fadeUp}
          className="font-sans text-[11px] font-400 tracking-[0.2em] uppercase text-accent mb-4"
        >
          {label}
        </motion.p>
      )}
      <motion.h2
        {...animProps}
        variants={prefersReducedMotion ? undefined : fadeUp}
        style={label ? { transitionDelay: "0.08s" } : undefined}
        className={cn(
          "font-serif font-400 leading-[1.15] tracking-[-0.01em] text-text-primary",
          "text-[clamp(2rem,4vw,3rem)]",
          headlineClassName
        )}
      >
        {headline}
      </motion.h2>
      {subtext && (
        <motion.p
          {...animProps}
          variants={prefersReducedMotion ? undefined : fadeUp}
          style={{ transitionDelay: label ? "0.16s" : "0.08s" }}
          className={cn(
            "font-sans font-300 text-text-muted leading-relaxed mt-4",
            "text-[clamp(0.9375rem,1.5vw,1.0625rem)]",
            align === "center" ? "max-w-xl mx-auto" : "max-w-xl"
          )}
        >
          {subtext}
        </motion.p>
      )}
    </div>
  );
}

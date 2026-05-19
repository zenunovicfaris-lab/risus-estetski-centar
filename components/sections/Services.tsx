"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { SERVICES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const activeIdx = hoveredIndex ?? 0;

  return (
    <section
      id="usluge"
      className="bg-bg-surface py-24 md:py-36"
      aria-labelledby="services-heading"
    >
      <div className="max-w-content mx-auto px-6 md:px-10">

        <SectionHeading
          label="Tretmani"
          headline="Naše usluge"
          align="left"
          className="mb-14 md:mb-18"
          headlineClassName="text-[clamp(2rem,4vw,3rem)]"
        />

        <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] gap-0 md:gap-16 items-start">

          {/* ── Left: editorial index list ────────────────────────────────── */}
          <motion.div
            variants={prefersReducedMotion ? undefined : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {SERVICES.map((service, index) => {
              const paddedNum = String(index + 1).padStart(2, "0");
              const isHovered = hoveredIndex === index;

              return (
                <motion.div
                  key={service.id}
                  variants={prefersReducedMotion ? undefined : fadeUp}
                  className="group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="border-t border-border py-7 md:py-8 flex items-start gap-6 cursor-default">
                    {/* Number */}
                    <span className={[
                      "font-sans text-[11px] tracking-[0.12em] mt-1.5 flex-shrink-0 transition-colors duration-200",
                      isHovered ? "text-accent" : "text-accent/50",
                    ].join(" ")}>
                      {paddedNum}
                    </span>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className={[
                        "font-serif font-400 leading-tight transition-colors duration-200",
                        "text-[clamp(1.5rem,2.5vw,2rem)]",
                        isHovered ? "text-accent" : "text-text-primary",
                      ].join(" ")}>
                        {service.name}
                      </h3>
                      <p className="font-sans font-300 text-text-muted text-[0.875rem] mt-1.5 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Mobile: image always visible below description */}
                      <div className="mt-4 md:hidden relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.imageAlt}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 90vw, 0vw"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            <div className="border-t border-border" />
          </motion.div>

          {/* ── Right: sticky image panel (desktop only) ─────────────────── */}
          <div className="hidden md:block sticky top-[110px]">
            <div className="relative overflow-hidden" style={{ height: "520px" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={prefersReducedMotion ? undefined : { opacity: 0 }}
                  animate={prefersReducedMotion ? undefined : { opacity: 1 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={SERVICES[activeIdx].image}
                    alt={SERVICES[activeIdx].imageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="400px"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(53,42,34,0.65)] to-transparent px-6 py-5">
                    <p className="font-sans text-[10px] font-400 tracking-[0.14em] uppercase text-white/80">
                      {SERVICES[activeIdx].name}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

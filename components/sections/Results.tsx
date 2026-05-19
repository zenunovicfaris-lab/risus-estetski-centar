"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { scaleReveal, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { RESULTS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Results() {
  const prefersReducedMotion = useReducedMotion();

  const itemAnim = prefersReducedMotion
    ? {}
    : { variants: scaleReveal };

  return (
    <section
      id="rezultati"
      className="bg-bg-primary py-24 md:py-36"
      aria-labelledby="results-heading"
    >
      <div className="max-w-content mx-auto px-6 md:px-10">

        <SectionHeading
          label="Rezultati"
          headline={RESULTS.headline}
          subtext={RESULTS.subtext}
          align="center"
          className="mb-16 md:mb-20"
        />

        {/* 2×2 uniform grid, aspect 4:5 */}
        <motion.div
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-3 md:gap-5"
        >
          {RESULTS.images.map((img, i) => (
            <motion.div
              key={img.src}
              {...itemAnim}
              className="group relative overflow-hidden ring-1 ring-[#E9DDCF]/50"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className={[
                    "object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]",
                    i === 3 ? "[filter:grayscale(0.2)_sepia(0.15)]" : "",
                  ].join(" ")}
                  sizes="(max-width: 768px) 50vw, 38vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUH/8QAIRAAAgIBBAMBAAAAAAAAAAAAAQIDBAUREiExQVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AqOp8ivaXJ3VYs5b5T7lMt1MkuIxt4rwBH4Yjg0Aez6QAAB//2Q=="
                />
              </div>
              <p className="mt-2 font-sans text-[10px] md:text-[11px] font-400 tracking-[0.1em] uppercase text-text-muted">
                {img.caption}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={prefersReducedMotion ? undefined : fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 text-center font-sans text-[12px] font-300 tracking-[0.04em] text-text-muted"
        >
          Rezultati mogu varirati od osobe do osobe.
        </motion.p>
      </div>
    </section>
  );
}

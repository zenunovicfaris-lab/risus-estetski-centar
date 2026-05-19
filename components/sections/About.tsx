"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { slideFromLeft, slideFromRight, fadeUp, viewportOnce } from "@/lib/motion";
import { ABOUT } from "@/lib/constants";

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  const leftAnim = prefersReducedMotion
    ? {}
    : { variants: slideFromLeft, initial: "hidden", whileInView: "visible", viewport: viewportOnce };

  const rightAnim = prefersReducedMotion
    ? {}
    : { variants: slideFromRight, initial: "hidden", whileInView: "visible", viewport: viewportOnce };

  const fadeAnim = prefersReducedMotion
    ? {}
    : { variants: fadeUp, initial: "hidden", whileInView: "visible", viewport: viewportOnce };

  return (
    <section
      id="o-nama"
      className="bg-bg-primary py-24 md:py-36 overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">

          {/* ── Left column: large portrait ─────────────────────────────────── */}
          <motion.div {...leftAnim} className="relative">
            {/* Decorative gold offset frame */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full border border-accent/20 pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/team/risus-founder-portrait-01.jpg"
                alt="Stručnjak Risus Estetskog centra"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUH/8QAIRAAAgIBBAMBAAAAAAAAAAAAAQIDBAUREiExQVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AqOp8ivaXJ3VYs5b5T7lMt1MkuIxt4rwBH4Yjg0Aez6QAAB//2Q=="
              />
            </div>
          </motion.div>

          {/* ── Right column: pull-quote + body + offset image ───────────────── */}
          <motion.div {...rightAnim} className="flex flex-col justify-center md:pt-16">

            {/* Eyebrow label */}
            <p className="font-sans text-[11px] font-400 tracking-[0.2em] uppercase text-accent mb-6">
              O nama
            </p>

            {/* Pull quote */}
            <blockquote className="font-serif italic font-300 text-accent leading-[1.25] mb-8"
              style={{ fontSize: "clamp(2.5rem, 3.5vw, 2.75rem)" }}>
              &ldquo;{ABOUT.pullQuote}&rdquo;
            </blockquote>

            {/* Headline */}
            <h2
              id="about-heading"
              className="font-serif font-400 text-text-primary leading-[1.15] tracking-[-0.01em] mb-6"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              {ABOUT.headline}
            </h2>

            {/* Body */}
            <p className="font-sans font-300 text-text-muted leading-[1.75]"
              style={{ fontSize: "clamp(0.9375rem, 1.4vw, 1.0625rem)" }}>
              {ABOUT.body}
            </p>

            {/* Offset second image — desktop only */}
            <motion.div
              {...fadeAnim}
              className="hidden md:block ml-16 mt-10 relative aspect-[4/3] overflow-hidden"
              style={{ transitionDelay: "0.2s" }}
            >
              <Image
                src="/images/team/risus-skin-consultation-01.jpg"
                alt="Konzultacija u Risus Estetskom centru"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 80vw, 35vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUH/8QAIRAAAgIBBAMBAAAAAAAAAAAAAQIDBAUREiExQVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AqOp8ivaXJ3VYs5b5T7lMt1MkuIxt4rwBH4Yjg0Aez6QAAB//2Q=="
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

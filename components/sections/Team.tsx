"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { slideFromLeft, slideFromRight, viewportOnce } from "@/lib/motion";
import { TEAM } from "@/lib/constants";

export default function Team() {
  const prefersReducedMotion = useReducedMotion();

  const leftAnim = prefersReducedMotion
    ? {}
    : { variants: slideFromLeft, initial: "hidden" as const, whileInView: "visible" as const, viewport: viewportOnce };

  const rightAnim = prefersReducedMotion
    ? {}
    : { variants: slideFromRight, initial: "hidden" as const, whileInView: "visible" as const, viewport: viewportOnce };

  return (
    <section
      id="tim"
      className="bg-bg-surface py-24 md:py-36 overflow-hidden"
      aria-labelledby="team-heading"
    >
      <div className="max-w-content mx-auto px-6 md:px-10">

        {/* Section label */}
        <p className="font-sans text-[11px] font-400 tracking-[0.2em] uppercase text-accent mb-14 md:mb-16">
          {TEAM.headline}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,480px)_1fr] gap-12 md:gap-16 lg:gap-24 items-center">

          {/* ── Left: portrait ───────────────────────────────────────────────── */}
          <motion.div {...leftAnim} className="relative max-w-[480px]">
            {/* Gold accent line */}
            <div
              className="absolute -left-3 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent"
              aria-hidden="true"
            />
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={TEAM.expert.image}
                alt={TEAM.expert.imageAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 90vw, 38vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUH/8QAIRAAAgIBBAMBAAAAAAAAAAAAAQIDBAUREiExQVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AqOp8ivaXJ3VYs5b5T7lMt1MkuIxt4rwBH4Yjg0Aez6QAAB//2Q=="
              />
            </div>
          </motion.div>

          {/* ── Right: interview-style text ───────────────────────────────────── */}
          <motion.div {...rightAnim} className="flex flex-col">

            {/* Title — small caps */}
            <p className="font-sans text-[11px] font-500 tracking-[0.18em] uppercase text-text-muted mb-6">
              {TEAM.expert.title}
            </p>

            {/* Large pull quote */}
            <blockquote
              id="team-heading"
              className="font-serif italic font-300 text-text-primary leading-[1.3] mb-8"
              style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.25rem)" }}
            >
              &ldquo;{TEAM.expert.quote}&rdquo;
            </blockquote>

            {/* Decorative gold rule */}
            <div className="w-12 h-px bg-accent mb-8" aria-hidden="true" />

            {/* Subtext */}
            <p className="font-sans font-300 text-text-muted leading-[1.75]"
              style={{ fontSize: "clamp(0.9375rem, 1.4vw, 1.0625rem)" }}>
              {TEAM.subtext}
            </p>

            <p className="mt-8 font-sans text-[12px] font-300 tracking-[0.04em] text-text-muted">
              Medicinski certificirani tretmani
              <span className="mx-3 text-accent/70">·</span>
              Individualni pristup
              <span className="mx-3 text-accent/70">·</span>
              Kontinuirana edukacija
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

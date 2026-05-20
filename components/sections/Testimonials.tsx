"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { TESTIMONIALS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

const GoogleG = () => (
  <svg width="13" height="13" viewBox="0 0 48 48" aria-label="Google" role="img" style={{ flexShrink: 0 }}>
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

const GoogleBadge = () => (
  <div className="flex items-center gap-1.5 mt-0.5">
    <GoogleG />
    <span className="font-sans text-[10px] text-text-muted font-300 tracking-[0.04em]">★★★★★ Google</span>
  </div>
);

type Testimonial = typeof TESTIMONIALS[number];

const CiteBlock = ({ t, small = false }: { t: Testimonial; small?: boolean }) => (
  <div className={["border-t border-border flex items-center gap-3", small ? "mt-4 pt-4" : "mt-5 pt-5"].join(" ")}>
    <img
      src={t.avatar}
      alt={t.name}
      width={small ? 32 : 36}
      height={small ? 32 : 36}
      className="rounded-full object-cover flex-shrink-0"
      style={{ width: small ? 32 : 36, height: small ? 32 : 36 }}
    />
    <cite className="not-italic flex flex-col">
      <span className={["font-sans font-400 text-text-primary", small ? "text-[11px]" : "text-[12px]"].join(" ")}>
        {t.name}
      </span>
      <GoogleBadge />
    </cite>
  </div>
);

export default function Testimonials() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="recenzije"
      className="bg-bg-primary py-24 md:py-36 overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-content mx-auto px-6 md:px-10">

        <SectionHeading
          label="Recenzije"
          headline="Što kažu naše klientice"
          align="center"
          className="mb-14 md:mb-20"
        />

        {/* ── 3-column grid (desktop) ───────────────────────────────────── */}
        <motion.div
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="hidden md:grid md:grid-cols-3 gap-x-10 gap-y-12"
        >
          {TESTIMONIALS.map((t) => (
            <motion.blockquote
              key={t.id}
              variants={prefersReducedMotion ? undefined : fadeUp}
              className="relative flex flex-col"
            >
              <span
                className="block font-serif text-[4rem] leading-none text-accent opacity-[0.12] mb-1 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p
                className="font-serif italic font-300 text-text-primary leading-[1.6] flex-1"
                style={{ fontSize: "clamp(0.9375rem, 1.2vw, 1.0625rem)" }}
              >
                {t.text}
              </p>
              <CiteBlock t={t} />
            </motion.blockquote>
          ))}
        </motion.div>

        {/* ── Mobile: 2 columns ─────────────────────────────────────────── */}
        <motion.div
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="md:hidden grid grid-cols-2 gap-x-5 gap-y-8"
        >
          {TESTIMONIALS.map((t) => (
            <motion.blockquote
              key={t.id}
              variants={prefersReducedMotion ? undefined : fadeUp}
              className="relative flex flex-col border-b border-border pb-8"
            >
              <span
                className="block font-serif text-[3rem] leading-none text-accent opacity-[0.12] mb-1 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="font-serif italic font-300 text-text-primary leading-[1.6] text-[0.875rem] flex-1">
                {t.text}
              </p>
              <CiteBlock t={t} small />
            </motion.blockquote>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

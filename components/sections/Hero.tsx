"use client";

import Image from "next/image";
import { HERO } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full min-h-[100svh] bg-bg-primary overflow-hidden"
      aria-label="Hero sekcija"
    >
      {/* ══ Desktop: 2-column split ═══════════════════════════════════════════ */}
      <div className="hidden md:grid md:grid-cols-[55%_45%] min-h-[100svh]">

        {/* Left — text panel */}
        <div className="bg-bg-primary flex flex-col justify-center pl-[8%] pr-8 lg:pl-[10%] xl:pl-[12%] pt-[104px] pb-16">
          <div className="max-w-[520px]">

            <p className="font-sans text-[11px] font-400 tracking-[0.2em] uppercase text-accent mb-6">
              Estetski centar — Zadar
            </p>

            <h1
              className="font-serif italic font-300 leading-[1.1] tracking-[-0.03em] text-text-primary"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              <span className="block">{HERO.headlineLine1}</span>
              <span className="block">{HERO.headlineLine2}</span>
            </h1>

            <p
              className="mt-6 font-sans font-300 text-text-muted leading-[1.75]"
              style={{ fontSize: "clamp(0.9375rem, 1.4vw, 1.0625rem)", maxWidth: "38ch" }}
            >
              {HERO.subtext}
            </p>

            <div>
              <div className="w-[60px] h-px bg-accent my-7" aria-hidden="true" />
              <p className="font-sans text-[11px] font-300 tracking-[0.06em] text-text-muted">
                01 — Hydrafacial · 02 — Dermapen · 03 — Laser · 04 — Medisculpt
              </p>
            </div>

            <div className="mt-10">
              <a
                href="#kontakt"
                className="group inline-flex items-center gap-2 font-sans text-[13px] font-500 tracking-[0.04em] text-accent hover:text-accent-hover transition-colors duration-200"
              >
                Zakažite konzultaciju
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right — image panel */}
        <div className="relative overflow-hidden">
          <Image
            src="/images/brand/risus-brand-skincare-beauty-01.jpg"
            alt="Risus Estetski centar — luksuzna njega kože"
            fill
            priority
            className="object-cover object-center"
            sizes="45vw"
          />
          <div
            className="absolute inset-y-0 left-0 w-20 pointer-events-none"
            style={{ background: "linear-gradient(to right, rgba(251,248,243,1) 0%, rgba(251,248,243,0) 100%)" }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
            style={{ background: "linear-gradient(to top, rgba(42,31,24,0.22) 0%, transparent 100%)" }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* ══ Mobile: full-screen image with text overlay ═══════════════════════ */}
      <div className="md:hidden relative min-h-[100svh]">

        <Image
          src="/images/brand/risus-brand-skincare-beauty-01.jpg"
          alt="Risus Estetski centar — luksuzna njega kože"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(20,13,8,0.55)" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, rgba(20,13,8,0.30) 0%, transparent 30%)" }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 flex flex-col justify-center px-6 pt-[88px]">

          <p className="font-sans text-[11px] font-400 tracking-[0.2em] uppercase text-accent mb-5">
            Estetski centar — Zadar
          </p>

          <h1
            className="font-serif italic font-300 leading-[1.1] tracking-[-0.03em] text-white"
            style={{ fontSize: "clamp(2.25rem, 7vw, 3rem)" }}
          >
            <span className="block">{HERO.headlineLine1}</span>
            <span className="block">{HERO.headlineLine2}</span>
          </h1>

          <p className="mt-4 font-sans font-300 text-white/75 leading-[1.75] text-[0.9375rem]">
            {HERO.subtext}
          </p>

          <div>
            <div className="w-[50px] h-px bg-accent my-5" aria-hidden="true" />
            <p className="font-sans text-[10px] font-300 tracking-[0.05em] text-white/55">
              01 — Hydrafacial · 02 — Dermapen · 03 — Laser · 04 — Medisculpt
            </p>
          </div>

          <div className="mt-7">
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-2 font-sans text-[13px] font-500 tracking-[0.04em] text-accent hover:text-accent-hover transition-colors duration-200"
            >
              Zakažite konzultaciju
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

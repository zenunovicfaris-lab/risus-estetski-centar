"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  navbarFadeIn,
  mobileMenuOverlay,
  mobileMenuContainer,
  mobileMenuItem,
} from "@/lib/motion";
import { NAV_LINKS, HERO } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        variants={prefersReducedMotion ? undefined : navbarFadeIn}
        initial="hidden"
        animate="visible"
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-bg-primary/95 backdrop-blur-sm shadow-warm-sm"
            : "bg-bg-primary/80 backdrop-blur-sm",
        ].join(" ")}
      >
        <div className="max-w-content mx-auto px-6 md:px-10 h-[64px] md:h-[80px] flex items-center justify-between">
          {/* Logo */}
          <a href="#" aria-label="Risus Estetski centar — početna">
            <Image
              src="/images/logo/logo-png1.png"
              alt="Risus Estetski centar"
              width={80}
              height={80}
              className="h-[56px] md:h-[72px] w-auto object-contain [mix-blend-mode:multiply] transition-all duration-300"
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Glavna navigacija">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-[13px] font-300 tracking-[0.04em] text-text-primary hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#kontakt"
            className="hidden md:inline-flex items-center font-sans text-[11px] font-500 tracking-[0.08em] uppercase px-5 py-2.5 bg-accent text-white hover:bg-accent-hover transition-all duration-200"
          >
            {HERO.ctaPrimary}
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Zatvori izbornik" : "Otvori izbornik"}
            aria-expanded={menuOpen}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] text-text-primary"
          >
            <span
              className={[
                "block h-px w-6 bg-current transition-all duration-300 origin-center",
                menuOpen ? "rotate-45 translate-y-[8.5px]" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block h-px w-6 bg-current transition-all duration-300",
                menuOpen ? "opacity-0 scale-x-0" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block h-px w-6 bg-current transition-all duration-300 origin-center",
                menuOpen ? "-rotate-45 -translate-y-[8.5px]" : "",
              ].join(" ")}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            variants={prefersReducedMotion ? undefined : mobileMenuOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-bg-primary flex flex-col"
          >
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />

            <div className="flex-1 flex flex-col justify-center px-10 pb-16">
              <motion.nav
                variants={prefersReducedMotion ? undefined : mobileMenuContainer}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col gap-2"
                aria-label="Mobilna navigacija"
              >
                {NAV_LINKS.map((link) => (
                  <motion.div
                    key={link.href}
                    variants={prefersReducedMotion ? undefined : mobileMenuItem}
                  >
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className="font-serif text-[2.25rem] font-300 text-text-primary leading-tight hover:text-accent transition-colors duration-200 block py-2"
                    >
                      {link.label}
                    </a>
                  </motion.div>
                ))}

                <motion.div
                  variants={prefersReducedMotion ? undefined : mobileMenuItem}
                  className="mt-8"
                >
                  <a
                    href="#kontakt"
                    onClick={closeMenu}
                    className="inline-flex items-center font-sans text-[11px] font-500 tracking-[0.08em] uppercase px-6 py-3 bg-accent text-white hover:bg-accent-hover transition-colors duration-200"
                  >
                    {HERO.ctaPrimary}
                  </a>
                </motion.div>
              </motion.nav>

              <motion.div
                variants={prefersReducedMotion ? undefined : mobileMenuItem}
                initial="hidden"
                animate="visible"
                className="mt-auto pt-12 border-t border-border"
              >
                <p className="font-sans text-[12px] font-300 tracking-[0.08em] uppercase text-text-muted mb-1">
                  Zadar, Hrvatska
                </p>
                <a
                  href="tel:+385996750722"
                  className="font-sans text-sm text-text-primary hover:text-accent transition-colors"
                >
                  +385 99 675 0722
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

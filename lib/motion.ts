import type { Variants } from "framer-motion";

// ─── Base variants — no scroll animations, content visible immediately ─────────

export const fadeUp: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

export const scaleReveal: Variants = {
  hidden: { opacity: 1, scale: 1, y: 0 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

export const slideFromLeft: Variants = {
  hidden: { opacity: 1, x: 0 },
  visible: { opacity: 1, x: 0 },
};

export const slideFromRight: Variants = {
  hidden: { opacity: 1, x: 0 },
  visible: { opacity: 1, x: 0 },
};

// ─── Container ────────────────────────────────────────────────────────────────

export const staggerContainer: Variants = {
  hidden: {},
  visible: {},
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {},
};

// ─── Hero-specific ────────────────────────────────────────────────────────────

export const heroLineReveal: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

export const heroContainer: Variants = {
  hidden: {},
  visible: {},
};

// ─── Navbar ───────────────────────────────────────────────────────────────────

export const navbarFadeIn: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

// ─── Mobile menu ─────────────────────────────────────────────────────────────

export const mobileMenuOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.18, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.15, ease: "easeIn" } },
};

export const mobileMenuContainer: Variants = {
  hidden: {},
  visible: {},
  exit: {},
};

export const mobileMenuItem: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, transition: { duration: 0.12 } },
};

// ─── Shared viewport config ───────────────────────────────────────────────────

export const viewportOnce = { once: true, margin: "-40px" } as const;

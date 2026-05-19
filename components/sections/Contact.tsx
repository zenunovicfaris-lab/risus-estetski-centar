"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { CONTACT } from "@/lib/constants";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    contact: "",
    treatment: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI demo — no actual submission
    setSubmitted(true);
  };

  const fadeAnim = prefersReducedMotion
    ? {}
    : { variants: fadeUp, initial: "hidden" as const, whileInView: "visible" as const, viewport: viewportOnce };

  return (
    <section
      id="kontakt"
      className="bg-bg-surface py-24 md:py-36"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-content mx-auto px-6 md:px-10">

        {/* Heading */}
        <motion.div {...fadeAnim} className="mb-16 md:mb-20">
          <p className="font-sans text-[11px] font-400 tracking-[0.2em] uppercase text-accent mb-4">
            Rezervacija
          </p>
          <h2
            id="contact-heading"
            className="font-serif font-400 text-text-primary leading-[1.15]"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            Zakažite termin
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 lg:gap-28">

          {/* ── Left: contact information ────────────────────────────────────── */}
          <motion.div
            variants={prefersReducedMotion ? undefined : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-8"
          >
            <motion.div
              variants={prefersReducedMotion ? undefined : fadeUp}
              className="mb-10"
            >
              <p className="font-sans font-300 text-text-muted leading-[1.75]"
                style={{ fontSize: "clamp(0.9375rem, 1.4vw, 1.0625rem)" }}>
                Konzultacije u Risus centru su besplatne i bez obveze.
                Javite nam se kako bismo razgovarali o tretmanu koji
                najbolje odgovara vašoj koži.
              </p>
            </motion.div>

            {/* Address */}
            <motion.div
              variants={prefersReducedMotion ? undefined : fadeUp}
              className="flex gap-4 items-start"
            >
              <MapPin size={16} className="text-accent mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-sans text-[11px] tracking-[0.1em] uppercase text-text-muted mb-1">
                  Adresa
                </p>
                <p className="font-sans font-300 text-text-primary text-[0.9375rem] leading-relaxed">
                  {CONTACT.address}
                </p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              variants={prefersReducedMotion ? undefined : fadeUp}
              className="flex gap-4 items-start"
            >
              <Phone size={16} className="text-accent mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-sans text-[11px] tracking-[0.1em] uppercase text-text-muted mb-1">
                  Telefon
                </p>
                <a
                  href={CONTACT.phoneHref}
                  className="font-sans font-300 text-text-primary text-[0.9375rem] hover:text-accent transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              variants={prefersReducedMotion ? undefined : fadeUp}
              className="flex gap-4 items-start"
            >
              <Mail size={16} className="text-accent mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-sans text-[11px] tracking-[0.1em] uppercase text-text-muted mb-1">
                  E-mail
                </p>
                <a
                  href={CONTACT.emailHref}
                  className="font-sans font-300 text-text-primary text-[0.9375rem] hover:text-accent transition-colors"
                >
                  {CONTACT.email}
                </a>
              </div>
            </motion.div>

            {/* Working hours */}
            <motion.div
              variants={prefersReducedMotion ? undefined : fadeUp}
              className="flex gap-4 items-start"
            >
              <Clock size={16} className="text-accent mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-sans text-[11px] tracking-[0.1em] uppercase text-text-muted mb-3">
                  Radno vrijeme
                </p>
                <table className="w-full" aria-label="Radno vrijeme">
                  <tbody>
                    {CONTACT.hours.map((h) => (
                      <tr key={h.days} className="align-top">
                        <td className="font-sans font-300 text-text-muted text-[0.875rem] pr-6 pb-1.5 whitespace-nowrap">
                          {h.days}
                        </td>
                        <td className={[
                          "font-sans text-[0.875rem] pb-1.5",
                          h.time === "Zatvoreno" ? "text-text-muted font-300" : "text-text-primary font-400",
                        ].join(" ")}>
                          {h.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: booking form ───────────────────────────────────────────── */}
          <motion.div {...fadeAnim}>
            {submitted ? (
              /* Success state */
              <motion.div
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-start justify-center h-full min-h-[320px]"
                role="status"
                aria-live="polite"
              >
                <div className="w-10 h-px bg-accent mb-6" aria-hidden="true" />
                <h3 className="font-serif font-400 text-text-primary mb-3"
                  style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)" }}>
                  Rezervacija zaprimljena.
                </h3>
                <p className="font-sans font-300 text-text-muted leading-relaxed text-[0.9375rem]">
                  Kontaktirat ćemo vas u roku 24 sata za potvrdu termina.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", contact: "", treatment: "", message: "" }); }}
                  className="mt-8 font-sans text-[12px] font-500 tracking-[0.08em] uppercase text-accent hover:text-accent-hover transition-colors"
                >
                  Nova rezervacija
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-8">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block font-sans text-[11px] font-400 tracking-[0.1em] uppercase text-text-muted mb-2">
                    Ime i prezime <span className="text-accent">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="Vaše ime i prezime"
                    className="input-line"
                    autoComplete="name"
                  />
                </div>

                {/* Contact */}
                <div>
                  <label htmlFor="contact" className="block font-sans text-[11px] font-400 tracking-[0.1em] uppercase text-text-muted mb-2">
                    Telefon ili e-mail <span className="text-accent">*</span>
                  </label>
                  <input
                    id="contact"
                    type="text"
                    required
                    value={form.contact}
                    onChange={(e) => setForm((f) => ({ ...f, contact: e.target.value }))}
                    placeholder="Kako vas možemo kontaktirati?"
                    className="input-line"
                    autoComplete="tel email"
                  />
                </div>

                {/* Treatment dropdown */}
                <div>
                  <label htmlFor="treatment" className="block font-sans text-[11px] font-400 tracking-[0.1em] uppercase text-text-muted mb-2">
                    Koji tretman vas zanima?
                  </label>
                  <div className="relative">
                    <select
                      id="treatment"
                      value={form.treatment}
                      onChange={(e) => setForm((f) => ({ ...f, treatment: e.target.value }))}
                      className="input-line appearance-none cursor-pointer pr-6"
                      style={{ background: "transparent" }}
                    >
                      <option value="">Odaberite tretman</option>
                      {CONTACT.serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none text-xs">
                      ↓
                    </span>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block font-sans text-[11px] font-400 tracking-[0.1em] uppercase text-text-muted mb-2">
                    Poruka / napomena <span className="text-text-muted font-300">(nije obavezno)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder="Vaša poruka..."
                    className="input-line resize-none"
                    style={{ lineHeight: "1.75" }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center justify-center font-sans text-[12px] font-500 tracking-[0.08em] bg-accent text-white px-10 py-4 hover:bg-accent-hover hover:shadow-[0_4px_20px_rgba(207,166,76,0.35)] hover:scale-[1.02] transition-all duration-300 active:scale-[0.98]"
                >
                  Rezerviraj termin
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* ── Map ──────────────────────────────────────────────────────────────── */}
        <div className="mt-16 md:mt-20 border-t border-border pt-12">
          <p className="font-sans text-[11px] font-400 tracking-[0.2em] uppercase text-text-muted mb-4">
            Pronađite nas
          </p>
          <div className="relative w-full overflow-hidden" style={{ height: "380px" }}>
            <iframe
              src="https://maps.google.com/maps?q=Bo%C5%BEe+Peri%C4%8Di%C4%87a+14%2C+Zadar%2C+Hrvatska&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Risus Estetski centar — lokacija"
              aria-label="Google karta lokacije Risus Estetskog centra"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

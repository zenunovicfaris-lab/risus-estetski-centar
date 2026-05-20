"use client";

import Image from "next/image";

const BRANDS = [
  { src: "/images/brendovi/hydrafacial.png",     alt: "HydraFacial" },
  { src: "/images/brendovi/dermapen4.png",        alt: "Dermapen 4" },
  { src: "/images/brendovi/btl-aesthetics.png",   alt: "BTL Aesthetics" },
  { src: "/images/brendovi/mesoestetic.png",      alt: "Mesoestetic" },
  { src: "/images/brendovi/dermalogica.png",      alt: "Dermalogica" },
  { src: "/images/brendovi/skinceuticals.png",    alt: "SkinCeuticals" },
  { src: "/images/brendovi/candela.png",          alt: "Candela" },
];

export default function Brands() {
  return (
    <section
      className="bg-bg-surface border-y border-border py-14 md:py-16"
      aria-label="Brendovi i oprema"
    >
      <div className="max-w-content mx-auto px-6 md:px-10">

        <p className="text-center font-sans text-[11px] font-400 tracking-[0.2em] uppercase text-accent mb-2">
          Certificirana oprema i brendovi
        </p>
        <p className="text-center font-sans font-300 text-text-muted text-[0.875rem] mb-10 md:mb-12">
          Koristimo isključivo provjerene medicinske brendove i uređaje.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-7 md:gap-x-16 md:gap-y-8">
          {BRANDS.map((brand) => (
            <div
              key={brand.alt}
              className="relative h-8 md:h-10 transition-all duration-300"
              style={{ opacity: 0.85 }}
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                height={40}
                width={140}
                className="h-full w-auto object-contain"
                style={{ maxWidth: "140px" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

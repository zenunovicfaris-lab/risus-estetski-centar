import Image from "next/image";
import { Instagram, Facebook } from "lucide-react";
import { FOOTER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#3D3026] text-[#FBF8F3]" role="contentinfo">
      <div className="h-px w-full bg-[#CFA64C]/40" />
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20">

        {/* Logo */}
        <div className="flex justify-center mb-14">
          <div className="overflow-hidden">
            <Image
              src="/images/logo/logo-png1.png"
              alt="Risus Estetski centar"
              width={160}
              height={160}
              className="h-24 w-auto object-contain [mix-blend-mode:screen] opacity-90"
            />
          </div>
        </div>

        {/* Nav links */}
        <nav
          aria-label="Footer navigacija"
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10"
        >
          {FOOTER.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-[12px] font-300 tracking-[0.08em] text-[#FBF8F3]/55 hover:text-[#FBF8F3] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Contact line */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-5 mb-8">
          <a
            href={`mailto:${FOOTER.email}`}
            className="font-sans text-[13px] font-300 text-[#FBF8F3]/65 hover:text-[#FBF8F3] transition-colors"
          >
            {FOOTER.email}
          </a>
          <span className="hidden sm:block w-px h-3 bg-[#FBF8F3]/20" aria-hidden="true" />
          <a
            href="tel:+385996750722"
            className="font-sans text-[13px] font-300 text-[#FBF8F3]/65 hover:text-[#FBF8F3] transition-colors"
          >
            {FOOTER.phone}
          </a>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-5 mb-10">
          <a href="https://instagram.com" aria-label="Instagram" className="text-[#FBF8F3]/45 hover:text-[#FBF8F3] transition-colors">
            <Instagram size={18} />
          </a>
          <a href="https://facebook.com" aria-label="Facebook" className="text-[#FBF8F3]/45 hover:text-[#FBF8F3] transition-colors">
            <Facebook size={18} />
          </a>
        </div>

        {/* Gold divider */}
        <div
          className="w-full h-px bg-gradient-to-r from-transparent via-[#CFA64C]/35 to-transparent mb-8"
          aria-hidden="true"
        />

        {/* Copyright */}
        <p className="text-center font-sans text-[11px] font-300 tracking-[0.06em] text-[#FBF8F3]/35">
          {FOOTER.copyright}
        </p>
      </div>
    </footer>
  );
}

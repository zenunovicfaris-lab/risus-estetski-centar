interface LogoProps {
  className?: string;
  size?: "sm" | "md";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const heightClass = size === "sm" ? "h-11" : "h-12";

  return (
    <svg
      viewBox="0 0 220 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Risus Estetski centar"
      role="img"
      className={`${heightClass} w-auto ${className}`}
    >
      {/* RISUS wordmark — inherits currentColor from parent, uses loaded Cormorant Garamond */}
      <text
        x="110"
        y="28"
        fontFamily="var(--font-cormorant), Georgia, serif"
        fontSize="28"
        fontWeight="300"
        letterSpacing="10"
        fill="currentColor"
        textAnchor="middle"
      >
        RISUS
      </text>

      {/* Gold rule + diamond — always gold regardless of context */}
      <line x1="38" y1="36" x2="104" y2="36" stroke="#CFA64C" strokeWidth="0.75" />
      <polygon points="110,33 113,36 110,39 107,36" fill="#CFA64C" />
      <line x1="116" y1="36" x2="182" y2="36" stroke="#CFA64C" strokeWidth="0.75" />

      {/* ESTETSKI CENTAR descriptor — inherits currentColor, muted */}
      <text
        x="110"
        y="50"
        fontFamily="var(--font-inter), system-ui, sans-serif"
        fontSize="7"
        fontWeight="400"
        letterSpacing="4.5"
        fill="currentColor"
        opacity="0.5"
        textAnchor="middle"
      >
        ESTETSKI CENTAR
      </text>
    </svg>
  );
}

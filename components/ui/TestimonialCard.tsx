interface TestimonialCardProps {
  text: string;
}

export default function TestimonialCard({ text }: TestimonialCardProps) {
  return (
    <article className="bg-bg-surface border border-border p-8 md:p-10 flex flex-col h-full select-none">
      <p
        className="font-serif italic font-300 text-text-primary leading-[1.6] flex-1"
        style={{ fontSize: "clamp(1rem, 1.6vw, 1.1875rem)" }}
      >
        {text}
      </p>
      <div className="mt-6 pt-5 border-t border-border">
        <p className="font-sans text-[11px] font-400 tracking-[0.1em] uppercase text-text-muted">
          Iskustva klijentica
        </p>
      </div>
    </article>
  );
}

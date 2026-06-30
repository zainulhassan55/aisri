import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function SectionHeading({ badge, title, subtitle, align = "center" }) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`reveal mb-12 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full border border-cyan-500/30 text-cyan-400 bg-cyan-500/5">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{title}</h2>
      {subtitle && (
        <p className={`text-slate-400 text-lg max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
      <div className={`section-divider mt-6 ${align === "center" ? "mx-auto w-24" : "w-24"}`} />
    </div>
  );
}

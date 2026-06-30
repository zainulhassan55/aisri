import AnimatedBackground from "./AnimatedBackground";

export default function PageHero({ title, subtitle, badge }) {
  return (
    <section className="relative pt-32 pb-16 page-hero-bg overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full border border-cyan-500/30 text-cyan-400 bg-cyan-500/5 animate-fade-in">
            {badge}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-up">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-slate-400 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

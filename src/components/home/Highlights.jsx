import { Link } from "react-router-dom";
import { highlights, stats } from "../../data/conferenceData";
import SectionHeading from "../ui/SectionHeading";
import { useScrollReveal } from "../../hooks/useScrollReveal";

function HighlightCard({ item, index }) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      className="reveal glass-card rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="text-4xl mb-4">{item.icon}</div>
      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
    </div>
  );
}

function StatItem({ stat, index }) {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="reveal text-center" style={{ transitionDelay: `${index * 0.1}s` }}>
      <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
      <div className="text-sm text-slate-400">{stat.label}</div>
    </div>
  );
}

export default function Highlights() {
  return (
    <>
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Why Attend"
            title="Conference Highlights"
            subtitle="Join the premier gathering of minds shaping the future of AI-powered cyber security."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <HighlightCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <StatItem key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            badge="Get Started"
            title="Ready to Participate?"
            subtitle="Submit your research, register for the event, or explore our program."
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/paper-submission" className="btn-primary px-8 py-3 rounded-xl font-semibold text-white">
              Submit Paper
            </Link>
            <Link to="/paper-registration" className="btn-outline px-8 py-3 rounded-xl font-semibold text-cyan-400">
              Register Now
            </Link>
            <Link to="/important-dates" className="text-slate-400 hover:text-cyan-400 transition-colors font-medium">
              View Important Dates →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

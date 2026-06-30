import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import { importantDates } from "../data/conferenceData";
import { useScrollReveal } from "../hooks/useScrollReveal";

function DateCard({ item, index }) {
  const ref = useScrollReveal();
  const isHighlight = item.status === "highlight";

  return (
    <div
      ref={ref}
      className={`reveal relative pl-8 timeline-line pb-8 last:pb-0`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="timeline-dot relative">
        <div
          className={`glass-card rounded-xl p-5 ${
            isHighlight ? "border-cyan-500/30 bg-cyan-500/5" : ""
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h3 className={`font-semibold ${isHighlight ? "text-cyan-400" : "text-white"}`}>
              {item.event}
            </h3>
            <span
              className={`text-sm font-medium px-3 py-1 rounded-full ${
                isHighlight
                  ? "bg-cyan-500/20 text-cyan-400"
                  : "bg-slate-800 text-slate-400"
              }`}
            >
              {item.date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ImportantDates() {
  return (
    <>
      <PageHero
        badge="Conference"
        title="Important Dates"
        subtitle="Mark your calendar with these key deadlines and milestones."
      />

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Key Deadlines"
            subtitle="All deadlines are 11:59 PM AoE (Anywhere on Earth) unless otherwise stated."
          />

          <div className="ml-6">
            {importantDates.map((item, i) => (
              <DateCard key={item.event} item={item} index={i} />
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            Dates are subject to change. Please check this page regularly for updates.
          </p>
        </div>
      </section>
    </>
  );
}

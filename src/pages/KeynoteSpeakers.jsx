import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import { keynoteSpeakers } from "../data/conferenceData";
import { useScrollReveal } from "../hooks/useScrollReveal";

function SpeakerCard({ speaker, index }) {
  const ref = useScrollReveal();
  const initials = speaker.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      ref={ref}
      className="reveal glass-card rounded-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className="h-48 speaker-avatar flex items-center justify-center relative overflow-hidden">
        <span className="text-5xl font-bold text-gradient opacity-60">{initials}</span>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-1">{speaker.name}</h3>
        <p className="text-sm text-cyan-400 mb-1">{speaker.title}</p>
        <p className="text-sm text-slate-500 mb-4">{speaker.affiliation}</p>
        <div className="px-3 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 mb-4">
          <p className="text-xs text-purple-300 font-medium">Keynote Topic</p>
          <p className="text-sm text-white mt-1">{speaker.topic}</p>
        </div>
        <p className="text-sm text-slate-400 leading-relaxed">{speaker.bio}</p>
      </div>
    </div>
  );
}

export default function KeynoteSpeakers() {
  return (
    <>
      <PageHero
        badge="Conference"
        title="Keynote Speakers"
        subtitle="Learn from world-renowned experts leading the AI and cyber security revolution."
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Featured Speakers"
            subtitle="Speaker lineup is being finalized. More announcements coming soon."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keynoteSpeakers.map((speaker, i) => (
              <SpeakerCard key={speaker.name} speaker={speaker} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

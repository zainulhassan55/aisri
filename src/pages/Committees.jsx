import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import { committees } from "../data/conferenceData";
import { useScrollReveal } from "../hooks/useScrollReveal";

function CommitteeSection({ title, members, index }) {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="reveal mb-12" style={{ transitionDelay: `${index * 0.1}s` }}>
      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
        <span className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-purple-600 rounded-full" />
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.map((member) => (
          <div key={member.name} className="glass-card rounded-xl p-5 hover:border-cyan-500/20 transition-colors">
            <h4 className="font-semibold text-white">{member.name}</h4>
            <p className="text-sm text-cyan-400 mt-1">{member.role}</p>
            <p className="text-sm text-slate-500 mt-1">{member.affiliation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Committees() {
  const sections = [
    { title: "General Chairs", members: committees.general },
    { title: "Program Committee", members: committees.program },
    { title: "Technical Committee", members: committees.technical },
    { title: "Local Organizing Committee", members: committees.local },
  ];

  return (
    <>
      <PageHero
        badge="Conference"
        title="Organizing Committees"
        subtitle="Meet the dedicated team behind AISRI 2026."
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sections.map((section, i) => (
            <CommitteeSection
              key={section.title}
              title={section.title}
              members={section.members}
              index={i}
            />
          ))}
        </div>
      </section>
    </>
  );
}

import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import { topics, conference } from "../data/conferenceData";
import { useScrollReveal } from "../hooks/useScrollReveal";

function TopicTag({ topic, index }) {
  const ref = useScrollReveal();
  return (
    <span
      ref={ref}
      className="reveal inline-block px-4 py-2 rounded-lg glass-card text-sm text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors cursor-default"
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      {topic}
    </span>
  );
}

export default function CallForPapers() {
  return (
    <>
      <PageHero
        badge="Submission"
        title="Call for Papers"
        subtitle="We invite original, unpublished research contributions on AI and cyber security innovations."
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left" badge="Overview" title="About the Call" />

          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p>
              The {conference.fullName} ({conference.shortName}) invites researchers,
              practitioners, and industry experts to submit high-quality papers presenting
              novel research, innovative applications, and insightful surveys in the fields
              of artificial intelligence and cyber security.
            </p>
            <p>
              All accepted papers will be included in the conference proceedings and
              submitted for indexing in major digital libraries. Selected papers may be
              invited for extension to journal special issues.
            </p>
          </div>

          <div id="guidelines" className="mt-16">
            <SectionHeading align="left" badge="Guidelines" title="Submission Guidelines" />
            <div className="grid gap-4">
              {[
                "Papers must be written in English and not exceed 8 pages (IEEE format).",
                "Submissions must be original and not under review elsewhere.",
                "All papers undergo a rigorous double-blind peer review process.",
                "At least one author must register and present the paper at the conference.",
                "Use the official AISRI 2026 template available on the submission portal.",
                "Supplementary materials may be uploaded but are not mandatory.",
              ].map((rule, i) => (
                <div key={i} className="flex gap-3 glass-card rounded-xl p-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </span>
                  <p className="text-sm text-slate-300">{rule}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <SectionHeading align="left" badge="Topics" title="Topics of Interest" />
            <div className="flex flex-wrap gap-3">
              {topics.map((topic, i) => (
                <TopicTag key={topic} topic={topic} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

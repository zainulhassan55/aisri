import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import { reviewProcess } from "../data/conferenceData";
import { useScrollReveal } from "../hooks/useScrollReveal";

function ReviewStep({ step, index }) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      className="reveal glass-card rounded-2xl p-6 relative overflow-hidden group"
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center font-bold text-white flex-shrink-0">
          {step.step}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
          <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function PaperReview() {
  return (
    <>
      <PageHero
        badge="Submission"
        title="Paper Review Process"
        subtitle="A rigorous, fair, and transparent peer review ensures the highest quality of accepted papers."
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Review Stages"
            subtitle="Every submission goes through our structured four-stage review pipeline."
          />

          <div className="grid gap-6">
            {reviewProcess.map((step, i) => (
              <ReviewStep key={step.step} step={step} index={i} />
            ))}
          </div>

          <div className="mt-12 glass-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Review Criteria</h3>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-400">
              {[
                "Originality and significance of contribution",
                "Technical soundness and methodology",
                "Clarity of presentation and organization",
                "Relevance to conference scope and themes",
                "Quality of experimental evaluation",
                "Appropriate citation of related work",
              ].map((criterion) => (
                <li key={criterion} className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">✓</span>
                  {criterion}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

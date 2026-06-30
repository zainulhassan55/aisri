import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import { conference } from "../data/conferenceData";

export default function PaperSubmission() {
  return (
    <>
      <PageHero
        badge="Submission"
        title="Paper Submission"
        subtitle="Submit your research through our online submission system."
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left" title="How to Submit" subtitle="Follow these steps to submit your paper to AISRI 2026." />

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Prepare Your Manuscript",
                desc: "Format your paper using the official IEEE conference template. Ensure all author information is removed for blind review.",
              },
              {
                step: "02",
                title: "Create an Account",
                desc: "Register on the AISRI 2026 submission portal using your institutional email address.",
              },
              {
                step: "03",
                title: "Upload Your Paper",
                desc: "Upload your PDF manuscript, select the appropriate track, and provide keywords and abstract.",
              },
              {
                step: "04",
                title: "Confirm Submission",
                desc: "Review all details and confirm your submission. You will receive a confirmation email with your paper ID.",
              },
            ].map((item) => (
              <div key={item.step} className="glass-card rounded-2xl p-6 flex gap-6 items-start">
                <span className="text-3xl font-bold text-gradient flex-shrink-0">{item.step}</span>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#"
              className="btn-primary inline-flex px-10 py-4 rounded-xl font-semibold text-white text-lg"
            >
              Go to Submission Portal
            </a>
            <p className="mt-4 text-sm text-slate-500">
              Portal link will be activated soon. Contact {conference.email} for inquiries.
            </p>
          </div>

          <div id="camera-ready" className="mt-16">
            <SectionHeading align="left" badge="Final" title="Camera-Ready Submission" />
            <div className="glass-card rounded-2xl p-6 text-slate-300 text-sm leading-relaxed">
              <p>
                Accepted authors must submit the final camera-ready version by the deadline
                specified in Important Dates. Include all reviewer-requested revisions and
                complete the IEEE copyright form through the submission portal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

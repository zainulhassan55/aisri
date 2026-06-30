import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import { registrationFees, conference } from "../data/conferenceData";

export default function PaperRegistration() {
  return (
    <>
      <PageHero
        badge="Registration"
        title="Paper Registration"
        subtitle="Register to present your accepted paper and attend AISRI 2026."
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Registration Fees"
            subtitle="Early bird rates are available until August 1, 2026. All fees are in USD."
          />

          <div className="overflow-x-auto">
            <table className="w-full glass-card rounded-2xl overflow-hidden">
              <thead>
                <tr className="border-b border-cyan-500/10">
                  <th className="text-left p-4 text-sm font-semibold text-slate-300">Category</th>
                  <th className="text-center p-4 text-sm font-semibold text-cyan-400">Early Bird</th>
                  <th className="text-center p-4 text-sm font-semibold text-slate-300">Regular</th>
                </tr>
              </thead>
              <tbody>
                {registrationFees.map((fee, i) => (
                  <tr
                    key={fee.category}
                    className={i < registrationFees.length - 1 ? "border-b border-slate-800/50" : ""}
                  >
                    <td className="p-4 text-sm text-white">{fee.category}</td>
                    <td className="p-4 text-sm text-center text-cyan-400 font-semibold">{fee.early}</td>
                    <td className="p-4 text-sm text-center text-slate-400">{fee.regular}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">What's Included</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                {[
                  "Conference proceedings (digital)",
                  "Access to all keynote sessions",
                  "Coffee breaks & welcome reception",
                  "Certificate of participation",
                  "Hybrid streaming access (virtual)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-emerald-400">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Payment Methods</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                {[
                  "Credit/Debit Card (Visa, MasterCard)",
                  "Bank Transfer (details upon request)",
                  "Institutional Purchase Order",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="#" className="btn-primary inline-flex px-10 py-4 rounded-xl font-semibold text-white text-lg">
              Register Now
            </a>
            <p className="mt-4 text-sm text-slate-500">
              For registration inquiries, contact {conference.email}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

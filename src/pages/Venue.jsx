import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import { venueInfo, conference } from "../data/conferenceData";

export default function Venue() {
  return (
    <>
      <PageHero
        badge="Conference"
        title="Venue & Travel"
        subtitle={`Join us at ${venueInfo.name}, ${conference.location}`}
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left" title={venueInfo.name} />

          <div className="glass-card rounded-2xl p-8 mb-12">
            <div className="flex items-start gap-3 mb-4">
              <svg className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-slate-300">{venueInfo.address}</p>
            </div>
            <p className="text-slate-400 leading-relaxed">{venueInfo.description}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <div>
              <SectionHeading align="left" badge="Facilities" title="Conference Facilities" />
              <ul className="space-y-3">
                {venueInfo.facilities.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="text-emerald-400 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionHeading align="left" badge="Travel" title="Getting There" />
              <div className="space-y-4">
                {venueInfo.travel.map((item) => (
                  <div key={item.mode} className="glass-card rounded-xl p-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-1">{item.mode}</h4>
                    <p className="text-sm text-slate-400">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 text-center">
            <p className="text-slate-400 text-sm">
              <span className="text-white font-medium">{conference.mode}</span> — Virtual participants
              will receive streaming links and access to all recorded sessions after the event.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

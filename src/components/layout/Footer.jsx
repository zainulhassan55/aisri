import { Link } from "react-router-dom";
import { conference, navigation } from "../../data/conferenceData";

export default function Footer() {
  const flatLinks = navigation.flatMap((item) =>
    item.children ? item.children : [item]
  );

  return (
    <footer className="relative bg-slate-950 border-t border-cyan-500/10">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center font-bold text-white text-sm">
                AI
              </div>
              <span className="text-xl font-bold text-white">{conference.shortName}</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              {conference.fullName}
            </p>
            <p className="text-sm text-slate-500">
              {conference.dates} · {conference.location}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {flatLinks.slice(0, 5).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              More
            </h4>
            <ul className="space-y-2">
              {flatLinks.slice(5).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <p className="text-sm text-slate-400 mb-2">
              <a href={`mailto:${conference.email}`} className="hover:text-cyan-400 transition-colors">
                {conference.email}
              </a>
            </p>
            <p className="text-sm text-slate-500 mb-4">{conference.mode}</p>
            <div className="flex gap-3">
              {Object.entries(conference.social).map(([platform]) => (
                <a
                  key={platform}
                  href="#"
                  className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors text-xs uppercase"
                  aria-label={platform}
                >
                  {platform[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="section-divider my-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; 2026 {conference.shortName}. All rights reserved.</p>
          <p>Designed for academic excellence in AI & Cyber Security</p>
        </div>
      </div>
    </footer>
  );
}

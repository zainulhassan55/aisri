import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { navigation, conference } from "../../data/conferenceData";

function NavDropdown({ item, mobile = false, onNavigate }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (mobile) {
    return (
      <div className="border-b border-slate-800/50">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between w-full py-3 text-slate-300 hover:text-cyan-400 transition-colors"
        >
          {item.label}
          <svg
            className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {open && (
          <div className="pl-4 pb-2 space-y-1 dropdown-enter">
            {item.children.map((child) => (
              <Link
                key={child.path}
                to={child.path}
                onClick={onNavigate}
                className="block py-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        className="flex items-center gap-1 px-3 py-2 text-sm text-slate-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-white/5"
      >
        {item.label}
        <svg
          className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div
          className="absolute top-full left-0 mt-1 w-56 py-2 glass-card rounded-xl shadow-2xl dropdown-enter z-50"
          onMouseLeave={() => setOpen(false)}
        >
          {item.children.map((child) => (
            <Link
              key={child.path}
              to={child.path}
              className="block px-4 py-2.5 text-sm text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/5 transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-cyan-500/10 shadow-lg shadow-cyan-500/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center font-bold text-white text-sm group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-shadow">
              AI
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-white">{conference.shortName}</span>
              <span className="block text-[10px] text-slate-400 tracking-wider uppercase">
                Cyber Security Symposium
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) =>
              item.children ? (
                <NavDropdown key={item.label} item={item} />
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? "text-cyan-400 bg-cyan-500/10"
                      : "text-slate-300 hover:text-cyan-400 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          <Link
            to="/paper-submission"
            className="hidden lg:inline-flex btn-primary px-5 py-2 rounded-lg text-sm font-semibold text-white"
          >
            Submit Paper
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-cyan-400"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-t border-cyan-500/10 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 py-4">
            {navigation.map((item) =>
              item.children ? (
                <NavDropdown
                  key={item.label}
                  item={item}
                  mobile
                  onNavigate={() => setMobileOpen(false)}
                />
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-slate-300 hover:text-cyan-400 border-b border-slate-800/50 transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              to="/paper-submission"
              onClick={() => setMobileOpen(false)}
              className="block mt-4 btn-primary text-center px-5 py-3 rounded-lg text-sm font-semibold text-white"
            >
              Submit Paper
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

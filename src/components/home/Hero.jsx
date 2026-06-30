import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { conference, importantDates } from "../../data/conferenceData";
import AnimatedBackground from "../ui/AnimatedBackground";

function CountdownUnit({ value, label }) {
  return (
    <div className="glass-card rounded-xl p-4 text-center min-w-[70px]">
      <div className="text-2xl md:text-3xl font-bold text-gradient">{String(value).padStart(2, "0")}</div>
      <div className="text-[10px] uppercase tracking-wider text-slate-500 mt-1">{label}</div>
    </div>
  );
}

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    function tick() {
      const diff = Math.max(0, new Date(targetDate) - new Date());
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}

export default function Hero() {
  const countdown = useCountdown("2026-09-18T09:00:00");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cyber-dark" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass-card animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-cyan-400 font-medium">{conference.mode}</span>
            <span className="text-slate-600">|</span>
            <span className="text-sm text-slate-400">{conference.dates}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up">
            <span className="text-white">International Symposium on</span>
            <br />
            <span className="text-gradient">AI & Cyber Security</span>
            <br />
            <span className="text-white">and Innovations</span>
          </h1>

          <p className="text-xl md:text-2xl font-semibold text-cyan-400/80 mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            {conference.shortName}
          </p>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {conference.tagline}
          </p>

          <div className="flex items-center justify-center gap-2 text-slate-300 mb-10 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{conference.location}</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Link to="/paper-submission" className="btn-primary px-8 py-3.5 rounded-xl font-semibold text-white text-lg">
              Submit Your Paper
            </Link>
            <Link to="/call-for-papers" className="btn-outline px-8 py-3.5 rounded-xl font-semibold text-cyan-400 text-lg">
              Call for Papers
            </Link>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-4">
              Conference Starts In
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <CountdownUnit value={countdown.days} label="Days" />
              <CountdownUnit value={countdown.hours} label="Hours" />
              <CountdownUnit value={countdown.minutes} label="Minutes" />
              <CountdownUnit value={countdown.seconds} label="Seconds" />
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto animate-float-delay">
          {importantDates.slice(0, 3).map((item) => (
            <div key={item.event} className="glass-card rounded-xl p-4 text-center">
              <p className="text-xs text-cyan-400 font-medium mb-1">{item.date}</p>
              <p className="text-sm text-slate-300">{item.event}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-cyan-500/30 flex items-start justify-center p-1.5">
          <div className="w-1 h-2.5 bg-cyan-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}

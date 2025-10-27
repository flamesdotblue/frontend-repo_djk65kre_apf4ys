import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {/* Sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-sky-100 to-amber-100 dark:from-[#0a2540] dark:via-[#0a2540] dark:to-[#1b2a35]" />

      {/* Soft sun glow */}
      <div className="absolute -top-24 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-amber-200/60 blur-3xl opacity-60" />

      {/* Subtle moving waves (SVG) */}
      <svg className="absolute bottom-0 left-0 right-0 h-64 text-sky-300/50" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="currentColor">
          <animate
            attributeName="d"
            dur="12s"
            repeatCount="indefinite"
            values="
            M0,160 C240,200 480,120 720,160 C960,200 1200,280 1440,240 L1440,340 L0,340 Z;
            M0,180 C240,140 480,200 720,170 C960,140 1200,220 1440,200 L1440,340 L0,340 Z;
            M0,160 C240,200 480,120 720,160 C960,200 1200,280 1440,240 L1440,340 L0,340 Z
            "
          />
        </path>
      </svg>

      {/* Sand gradient strip */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-amber-200/80 via-amber-100/60 to-transparent" />

      {/* Palm silhouettes */}
      <svg className="absolute bottom-10 right-6 h-24 w-24 text-emerald-950/20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 22c-.6 0-1-.4-1-1v-6.1c-1.3.7-2.9.8-4.2.2-.5-.2-.7-.8-.4-1.2.2-.4.7-.6 1.1-.4 1.3.6 2.8.3 3.8-.7V9.5c-1.3.7-2.9.8-4.2.2-.5-.2-.7-.8-.4-1.2.2-.4.7-.6 1.1-.4 1.3.6 2.8.3 3.8-.7V5c0-.6.4-1 1-1s1 .4 1 1v1.4c1-.9 2.5-1.2 3.8-.7.5.2.8.8.6 1.3-.2.5-.8.7-1.3.5-1.1-.5-2.4-.2-3.1.7v2.6c1-.9 2.5-1.2 3.8-.7.5.2.8.8.6 1.3-.2.5-.8.7-1.3.5-1.1-.5-2.4-.2-3.1.7V21c0 .6-.4 1-1 1Z">
          <animate attributeName="opacity" values="0.6;0.9;0.6" dur="6s" repeatCount="indefinite" />
        </path>
      </svg>
    </div>
  );
}

function App() {
  return (
    <div className="relative min-h-screen font-sans text-slate-800 dark:text-white">
      <Background />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Projects />
          <Contact />
        </main>
        <footer className="py-10 text-center text-sm text-slate-600/70 dark:text-white/60">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default App;

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Github, Linkedin } from 'lucide-react';

const skills = [
  'React',
  'TypeScript',
  'FastAPI',
  'Node.js',
  'Tailwind CSS',
  'Framer Motion',
  'MongoDB',
  'Vite',
];

const Hero = () => {
  return (
    <section id="home" className="relative pt-36 pb-16 sm:pt-40 sm:pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900/90 dark:text-white/90">
              A light, fresh and professional portfolio
            </h1>
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-slate-700/80 dark:text-white/70">
              I craft sleek, minimal interfaces and performant web experiences. Clean architecture, thoughtful
              motion, and attention to detail — with a calm beach vibe.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-sky-600/90 px-5 py-2.5 text-white shadow-lg shadow-sky-900/20 transition hover:bg-sky-600"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 dark:border-white/15 bg-white/50 dark:bg-white/10 px-5 py-2.5 text-slate-800/80 dark:text-white/80 backdrop-blur-xl transition hover:border-sky-300/60 hover:text-sky-700 dark:hover:text-sky-300"
              >
                Contact
                <Mail className="h-4 w-4" />
              </a>
              <span className="mx-2 hidden sm:inline h-6 w-px bg-slate-900/10 dark:bg-white/15" />
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 dark:border-white/15 bg-white/50 dark:bg-white/10 px-4 py-2 text-slate-800/80 dark:text-white/80 backdrop-blur-xl transition hover:border-sky-300/60 hover:text-sky-700 dark:hover:text-sky-300"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 dark:border-white/15 bg-white/50 dark:bg-white/10 px-4 py-2 text-slate-800/80 dark:text-white/80 backdrop-blur-xl transition hover:border-sky-300/60 hover:text-sky-700 dark:hover:text-sky-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>

            <div className="mt-10">
              <h2 className="text-sm uppercase tracking-widest text-slate-700/60 dark:text-white/50">Skills</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/20 bg-white/50 dark:bg-white/10 px-3 py-1 text-xs text-slate-800/80 dark:text-white/80 backdrop-blur-xl transition hover:border-sky-300/60 hover:text-sky-700 dark:hover:text-sky-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-5"
          >
            <div className="relative mx-auto aspect-square w-64 sm:w-72 md:w-80 rounded-3xl border border-white/20 bg-white/40 dark:bg-white/10 p-2 backdrop-blur-2xl shadow-2xl shadow-sky-900/10">
              <div className="h-full w-full rounded-2xl bg-gradient-to-br from-sky-200/80 via-amber-100/80 to-rose-100/70 dark:from-sky-400/20 dark:via-amber-300/10 dark:to-rose-300/10" />
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/30" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

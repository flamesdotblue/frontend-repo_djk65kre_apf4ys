import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Coastal Commerce',
    desc: 'A modern ecommerce experience with blazing-fast product browsing and a serene UI.',
    tags: ['React', 'Stripe', 'Tailwind'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Waveforms Studio',
    desc: 'Audio visualization playground with smooth, tactile interactions and motion.',
    tags: ['Framer Motion', 'Canvas', 'Vite'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Sands of Time',
    desc: 'Minimal time tracking app with glassy surfaces and delightful micro-interactions.',
    tags: ['FastAPI', 'MongoDB', 'React'],
    live: '#',
    repo: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900/90 dark:text-white/90">Selected Projects</h2>
          <p className="mt-2 text-slate-700/70 dark:text-white/60 max-w-2xl">
            Crisp, modern interfaces with a focus on performance and usability.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative rounded-3xl border border-white/15 bg-white/50 dark:bg-white/10 p-5 backdrop-blur-xl shadow-lg shadow-sky-900/10 hover:shadow-2xl hover:shadow-sky-900/20 transition"
            >
              <div className="h-36 w-full rounded-2xl bg-gradient-to-br from-sky-200/80 via-amber-100/70 to-rose-100/60 dark:from-sky-400/20 dark:via-amber-300/10 dark:to-rose-300/10 mb-4" />
              <h3 className="text-lg font-semibold text-slate-900/90 dark:text-white/90">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-700/80 dark:text-white/70">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/60 dark:bg-white/10 border border-white/20 px-2.5 py-1 text-xs text-slate-700/80 dark:text-white/70">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={p.live}
                  className="inline-flex items-center gap-1.5 text-sm text-sky-700 dark:text-sky-300 hover:underline"
                >
                  Live <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href={p.repo}
                  className="inline-flex items-center gap-1.5 text-sm text-slate-700/80 dark:text-white/70 hover:underline"
                >
                  Code <Github className="h-4 w-4" />
                </a>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/30 opacity-0 group-hover:opacity-100 transition" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

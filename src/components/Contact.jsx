import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900/90 dark:text-white/90">Let’s Connect</h2>
          <p className="mt-2 text-slate-700/70 dark:text-white/60">
            Open to collaborations, opportunities, and friendly chats.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white/15 bg-white/50 dark:bg-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-lg shadow-sky-900/10"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <a
              href="mailto:you@example.com"
              className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/60 dark:bg-white/10 p-4 backdrop-blur-xl transition hover:border-sky-300/60 hover:shadow-lg hover:shadow-sky-900/10"
            >
              <Mail className="h-5 w-5 text-sky-600" />
              <div>
                <div className="text-sm text-slate-600/80 dark:text-white/70">Email</div>
                <div className="font-medium">you@example.com</div>
              </div>
            </a>
            <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/60 dark:bg-white/10 p-4 backdrop-blur-xl">
              <Github className="h-5 w-5 text-slate-700" />
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="font-medium hover:underline">
                github.com/yourhandle
              </a>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/60 dark:bg-white/10 p-4 backdrop-blur-xl sm:col-span-2">
              <Linkedin className="h-5 w-5 text-sky-700" />
              <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer" className="font-medium hover:underline">
                linkedin.com/in/yourhandle
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

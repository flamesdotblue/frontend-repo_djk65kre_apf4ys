import { motion } from 'framer-motion';

const Header = () => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[92%] sm:w-auto"
    >
      <div className="flex items-center justify-between gap-6 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-xl shadow-lg shadow-sky-900/5">
        <a href="#home" className="font-semibold tracking-tight text-slate-900/90 dark:text-white/90">
          <span className="text-sky-600">//</span> Your Name
        </a>
        <nav className="hidden sm:flex items-center gap-4 text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-slate-700/80 dark:text-white/80 hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;

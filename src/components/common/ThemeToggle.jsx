import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { HiSun, HiMoon } from 'react-icons/hi';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('portfolio-theme');
    return stored || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        className="theme-toggle__icon"
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {theme === 'dark' ? <HiSun /> : <HiMoon />}
      </motion.div>
    </motion.button>
  );
}

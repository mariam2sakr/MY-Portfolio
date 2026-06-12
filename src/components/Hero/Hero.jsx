import { motion } from 'motion/react';
import { FaArrowDown, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import Button from '../common/Button';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero section">
      {/* Animated Background */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grid" />
      </div>

      <div className="hero__container container">
        <div className="hero__content">
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="hero__badge-dot" />
            Available for work
          </motion.div>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Hi, I'm <span className="gradient-text">Mariam</span>
            <br />
            <span className="hero__title-role">Frontend Developer</span>
          </motion.h1>

          <motion.p
            className="hero__description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            I craft modern, responsive, and pixel-perfect web experiences using{' '}
            <strong>React</strong> and cutting-edge frontend technologies.
            Turning ideas into interactive digital realities.
          </motion.p>

          <motion.div
            className="hero__buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button href="#projects" variant="primary">
              View My Work
            </Button>
            <Button href={`${import.meta.env.BASE_URL}CV-frontend.pdf`}  download="CV-frontend.pdf" variant="outline" icon={HiDownload} >
              Download CV
            </Button>
          </motion.div>

          <motion.div
            className="hero__socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <motion.a
              href="https://github.com/mariam2sakr"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mariam-2-sakr/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <FaLinkedinIn />
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span>Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FaArrowDown />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

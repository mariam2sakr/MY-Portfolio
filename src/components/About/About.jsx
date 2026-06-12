import { motion } from 'motion/react';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import { FaCode, FaPalette, FaRocket, FaMobileAlt } from 'react-icons/fa';
import './About.css';

const highlights = [
  { icon: FaCode, title: 'Clean Code', description: 'Writing maintainable, scalable code' },
  { icon: FaPalette, title: 'UI/UX Focus', description: 'Pixel-perfect, user-centered design' },
  { icon: FaRocket, title: 'Performance', description: 'Optimized for speed and efficiency' },
  { icon: FaMobileAlt, title: 'Responsive', description: 'Seamless across all devices' },
];

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <SectionTitle
          subtitle="About Me"
          title="Passionate about building great web experiences"
          description="I'm a Frontend Developer who loves turning ideas into beautiful, functional interfaces."
        />

        <div className="about__content">
          <ScrollReveal direction="left" className="about__image-wrapper">
            <div className="about__image-card">
              <div className="about__image-placeholder">
                <span className="about__image-emoji">👩‍💻</span>
              </div>
              <div className="about__image-accent" />
            </div>
            <div className="about__experience-badge">
              <span className="about__experience-number">+1</span>
              <span className="about__experience-text">Year of<br/>Experience</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="about__text-wrapper">
            <h3 className="about__intro">
              I build things for the <span className="gradient-text">web</span>
            </h3>
            <p className="about__bio">
              I'm a frontend developer based in Egypt, specializing in building
              exceptional digital experiences with React. I enjoy creating
              intuitive, dynamic user interfaces that make a real impact.
            </p>
            <p className="about__bio">
              My journey started with curiosity about how websites work, and it
              evolved into a passion for crafting pixel-perfect, performant web
              applications. I'm always eager to learn new technologies and
              improve my skills.
            </p>

            <div className="about__highlights">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="about__highlight-card glass"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <item.icon className="about__highlight-icon" />
                  <div>
                    <h4 className="about__highlight-title">{item.title}</h4>
                    <p className="about__highlight-desc">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

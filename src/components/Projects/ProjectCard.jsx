import { motion } from 'motion/react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './ProjectCard.css';

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Image / Placeholder */}
      <div className="project-card__image">
        {project.image ? (
          <img src={project.image} alt={project.title} className="project-card__img" />
        ) : (
          <div className="project-card__placeholder">
            <span className="project-card__placeholder-icon">🚀</span>
            <span className="project-card__placeholder-text">{project.title}</span>
          </div>
        )}
        <div className="project-card__overlay">
          <div className="project-card__links">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link"
                aria-label="View code on GitHub"
              >
                <FaGithub />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link"
                aria-label="View live demo"
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="project-card__info">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
        <div className="project-card__tech">
          {project.techStack.map((tech) => (
            <span key={tech} className="project-card__tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

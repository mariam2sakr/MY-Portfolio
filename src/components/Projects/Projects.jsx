import { motion } from 'motion/react';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from './ProjectCard';
import projects from '../../data/projects';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <SectionTitle
          subtitle="My Work"
          title="Featured Projects"
          description="A selection of projects I've built, showcasing my skills in React and modern web development."
        />

        {/* Projects Grid */}
        <motion.div
          className="projects__grid"
          layout
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

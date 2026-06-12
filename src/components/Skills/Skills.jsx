import SectionTitle from '../common/SectionTitle';
import SkillCard from './SkillCard';
import skills from '../../data/skills';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <SectionTitle
          subtitle="My Skills"
          title="Technologies I Work With"
          description="Constantly learning and expanding my toolkit to build better web experiences."
        />

        <div className="skills__grid">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import './SkillCard.css';

export default function SkillCard({ skill, index }) {
  const Icon = skill.icon;

  return (
    <motion.div
      className="skill-card glass"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -6,
        transition: { duration: 0.25 },
      }}
    >
      <motion.div
        className="skill-card__icon-wrapper"
        style={{ '--skill-color': skill.color }}
        whileHover={{ scale: 1.15, rotate: 15 }}
        transition={{ type: 'spring', stiffness: 300, damping: 10 }}
      >
        <Icon className="skill-card__icon" />
      </motion.div>
      <h4 className="skill-card__name">{skill.name}</h4>
      <div className="skill-card__bar-bg">
        <motion.div
          className="skill-card__bar-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.3 + index * 0.06, ease: 'easeOut' }}
          style={{
            background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
          }}
        />
      </div>
      <span className="skill-card__level">{skill.level}%</span>
    </motion.div>
  );
}

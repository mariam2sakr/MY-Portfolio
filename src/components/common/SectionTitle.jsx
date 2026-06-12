import ScrollReveal from './ScrollReveal';
import './SectionTitle.css';

export default function SectionTitle({ subtitle, title, description }) {
  return (
    <div className="section-title">
      <ScrollReveal>
        <span className="section-title__subtitle">{subtitle}</span>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2 className="section-title__heading">
          {title}
        </h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal delay={0.2}>
          <p className="section-title__description">{description}</p>
        </ScrollReveal>
      )}
    </div>
  );
}

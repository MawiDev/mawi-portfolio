import { technologyIcons } from '../data/portfolio.js';

export default function StackCard({ group }) {
  return (
    <article className="stack-card">
      <h3>{group.title}</h3>
      <ul className="technology-grid" aria-label={group.title}>
        {group.technologies.map((technology) => (
          <li key={technology}>
            <img src={technologyIcons[technology]} width="40" height="40" alt="" loading="lazy" decoding="async" />
            <span>{technology}</span>
          </li>
        ))}
      </ul>
      <div className="stack-tools">
        <p>{group.toolLabel}</p>
        <ul className="tags" aria-label={`${group.title} ${group.toolLabel.toLowerCase()}`}>
          {group.tools.map((tool) => <li key={tool}>{tool}</li>)}
        </ul>
      </div>
    </article>
  );
}

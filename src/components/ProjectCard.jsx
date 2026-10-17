import ExternalLink, { ArrowIcon } from './ExternalLink.jsx';

export default function ProjectCard({ project }) {
  return (
    <article className={`project-card project-card--${project.tone}${project.featured ? ' project-card--featured' : ''}`}>
      <div className="project-preview">
        <img src={project.image} alt={`${project.name} website preview`} loading="lazy" decoding="async" width={project.featured ? 1440 : 700} height={project.featured ? 960 : 440} />
      </div>
      <div className="project-content">
        <p className="eyebrow">{project.featured ? 'Current project' : project.category}</p>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="tags" aria-label={`${project.name} technologies`}>
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <div className="project-links">
          {project.archived ? (
            <p className="project-archive">Archived project</p>
          ) : (
            <ExternalLink href={project.url}>
              {project.featured ? 'Explore the project' : 'Visit website'}<span className="sr-only"> for {project.name}</span> <ArrowIcon />
            </ExternalLink>
          )}
          {project.repository && (
            <ExternalLink href={project.repository}>
              Source<span className="sr-only"> for {project.name}</span> <ArrowIcon />
            </ExternalLink>
          )}
        </div>
      </div>
    </article>
  );
}

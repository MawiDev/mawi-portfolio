import ExternalLink, { ArrowIcon } from './components/ExternalLink.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import StackCard from './components/StackCard.jsx';
import { education, openSource, profile, projects, socialLinks, stackGroups } from './data/portfolio.js';

function SectionHeading({ id, title }) {
  return <h2 className="sr-only" id={id}>{title}</h2>;
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <main id="main" tabIndex={-1}>
        <section className="hero section-shell" id="home" aria-labelledby="hero-title">
          <div className="hero-copy bento-card">
            <p className="hero-role">{profile.role} <span aria-hidden="true">/</span> {profile.location}</p>
            <h1 id="hero-title">Hi, I’m Mawi.<br />I build for <span>the web.</span></h1>
            <p className="hero-description">I’m {profile.name}. I work with React and Laravel, with an interest in backend, DevOps and security.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <span aria-hidden="true">↓</span></a>
              <a className="text-link" href="#contact">Get in touch</a>
            </div>
          </div>

          <aside className="profile-card" aria-label="About MawiDev">
            <div className="profile-identity">
              <img src="/avatar.jpg" width="72" height="72" alt="MawiDev’s GitHub avatar" fetchPriority="high" />
              <div><strong>{profile.handle}</strong><span>{profile.role.toLowerCase()}</span></div>
            </div>
            <dl className="profile-details">
              <div><dt>Currently working on</dt><dd><ExternalLink href={profile.currentProject.url}>tenkaichibeerpong.it <ArrowIcon /></ExternalLink></dd></div>
              <div><dt>Learning</dt><dd>{profile.learning}</dd></div>
            </dl>
          </aside>

          <article className="education-card" aria-labelledby="education-title">
            <div>
              <p className="eyebrow">Education</p>
              <div lang="it">
                <h2 id="education-title">{education.qualification}</h2>
                <ExternalLink className="education-school" href={education.url}>{education.institution} <ArrowIcon /></ExternalLink>
              </div>
            </div>
            <p className="education-location" lang="it">{education.location}</p>
          </article>
        </section>

        <section className="stack-section section-shell" id="stack" aria-labelledby="stack-title">
          <SectionHeading id="stack-title" title="Stack" />
          <div className="stack-grid">
            {stackGroups.map((group) => <StackCard group={group} key={group.title} />)}
          </div>
        </section>

        <section className="work-section section-shell" id="work" aria-labelledby="work-title">
          <SectionHeading id="work-title" title="Selected work" />
          <div className="project-grid">
            {projects.map((project) => <ProjectCard key={project.name} project={project} />)}
          </div>
        </section>

        <section className="source-section section-shell" aria-labelledby="source-title">
          <SectionHeading id="source-title" title="Open source" />
          <div className="source-grid">
            {openSource.map((project) => (
              <article className="source-card" key={project.name}>
                <p className="eyebrow">{project.type}</p>
                <h3><ExternalLink href={project.url}>{project.name} <ArrowIcon /></ExternalLink></h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
          <ExternalLink className="text-link all-repos" href={`${profile.github}?tab=repositories`}>Explore all repositories <ArrowIcon /></ExternalLink>
        </section>

        <section className="contact-section section-shell" id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">Let’s connect.</h2>
          <div className="social-links">{socialLinks.map((link) => <ExternalLink key={link.name} href={link.url} rel={link.rel} className={`social-link social-link--${link.name.toLowerCase()}`}>{link.name} <ArrowIcon /></ExternalLink>)}</div>
        </section>
      </main>
    </>
  );
}

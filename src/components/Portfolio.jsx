import { useEffect, useState } from 'react';
import { ArrowUpRight, CheckCircle2, Eye, X } from 'lucide-react';
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS } from '../data/siteData';

export default function Portfolio({ onSelectInquiry }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredItems =
    activeCategory === 'All'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedProject]);

  const handleRequestSimilar = (project) => {
    setSelectedProject(null);
    onSelectInquiry({
      service: 'Custom Flagship',
      note: `Interested in a bespoke website with a similar feel to "${project.title}" (${project.category}).`,
    });
  };

  return (
    <section id="work" className="section section--subtle">
      <div className="container">
        <div className="work-header">
          <div className="section-header work-header__copy">
            <span className="eyebrow">Selected Work</span>
            <h2 className="section-title">
              Curated concepts &amp; <span className="serif-accent">flagship</span> web experiences.
            </h2>
            <p className="section-subtitle">
              A look at the visual discipline, responsive structure, and clean UX architecture we
              bring to every client website.
            </p>
          </div>

          <div className="filter-pills" role="tablist" aria-label="Filter projects by category">
            {PORTFOLIO_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                className={`filter-pill ${activeCategory === category ? 'filter-pill--active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="portfolio-grid">
          {filteredItems.map((project) => (
            <article key={project.id} className="work-card">
              <button
                type="button"
                className="work-card__preview-btn"
                onClick={() => setSelectedProject(project)}
                aria-label={`Inspect ${project.title} project details`}
              >
                <div className={`work-mockup work-mockup--${project.theme}`}>
                  <div className="work-mockup__chrome">
                    <span className="work-mockup__dots" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                    </span>
                    <span className="work-mockup__url">{project.urlPreview}</span>
                  </div>

                  <div className="work-mockup__canvas">
                    <div className="work-mockup__topbar">
                      <span className="work-mockup__badge">{project.mockupData.badge}</span>
                      <span className="work-mockup__year">{project.year}</span>
                    </div>
                    <h4 className="work-mockup__headline">{project.mockupData.headline}</h4>
                    <div className="work-mockup__footer">
                      <span className="work-mockup__stat">{project.mockupData.statA}</span>
                      <span className="work-mockup__stat">{project.mockupData.statB}</span>
                    </div>
                  </div>

                  <span className="work-mockup__hover-pill">
                    <Eye size={14} aria-hidden="true" />
                    Preview Case
                  </span>
                </div>
              </button>

              <div className="work-card__body">
                <div className="work-card__meta">
                  <span className="work-card__cat">{project.category}</span>
                  <span className="work-card__metric">{project.metrics}</span>
                </div>
                <h3 className="work-card__title">{project.title}</h3>
                <p className="work-card__summary">{project.summary}</p>
                <div className="work-card__bottom">
                  <span className="work-card__loc">{project.location}</span>
                  <button
                    type="button"
                    className="work-card__action"
                    onClick={() => setSelectedProject(project)}
                  >
                    Details
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Accessible Case Study Preview Modal */}
      {selectedProject && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          onClick={() => setSelectedProject(null)}
        >
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-card__close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project preview"
            >
              <X size={20} />
            </button>

            <div className={`work-mockup work-mockup--${selectedProject.theme} work-mockup--modal`}>
              <div className="work-mockup__chrome">
                <span className="work-mockup__dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="work-mockup__url">{selectedProject.urlPreview}</span>
              </div>
              <div className="work-mockup__canvas">
                <div className="work-mockup__topbar">
                  <span className="work-mockup__badge">{selectedProject.mockupData.badge}</span>
                  <span className="work-mockup__year">{selectedProject.year}</span>
                </div>
                <h4 className="work-mockup__headline">{selectedProject.mockupData.headline}</h4>
                <div className="work-mockup__footer">
                  <span className="work-mockup__stat">{selectedProject.mockupData.statA}</span>
                  <span className="work-mockup__stat">{selectedProject.mockupData.statB}</span>
                </div>
              </div>
            </div>

            <div className="modal-card__content">
              <div className="work-card__meta">
                <span className="work-card__cat">
                  {selectedProject.category} • {selectedProject.location}
                </span>
                <span className="work-card__metric">{selectedProject.metrics}</span>
              </div>
              <h3 id="modal-project-title" className="modal-card__title">
                {selectedProject.title}
              </h3>
              <p className="modal-card__desc">{selectedProject.summary}</p>

              <div className="modal-card__deliverables">
                <span className="modal-card__label">Key Deliverables</span>
                <ul>
                  {selectedProject.deliverables.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={16} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-card__actions">
                <button
                  type="button"
                  className="btn btn--dark"
                  onClick={() => handleRequestSimilar(selectedProject)}
                >
                  Request a Similar Website
                  <ArrowUpRight size={16} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="btn btn--outline-light"
                  onClick={() => setSelectedProject(null)}
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


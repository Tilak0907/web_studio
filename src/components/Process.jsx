import { PROCESS_STEPS } from '../data/siteData';

export default function Process() {
  return (
    <section id="process" className="section section--obsidian">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow eyebrow--dark">How We Work</span>
          <h2 className="section-title section-title--dark">
            A calm, structured path from <span className="serif-accent">idea</span> to launch.
          </h2>
          <p className="section-subtitle section-subtitle--dark">
            No guesswork, no bloated agency timelines. Our four-stage workflow keeps you informed
            and confident at every milestone.
          </p>
        </div>

        <div className="process-grid">
          {PROCESS_STEPS.map((item) => (
            <article key={item.step} className="process-card">
              <div className="process-card__top">
                <span className="process-card__step">{item.step}</span>
                <span className="process-card__duration">{item.duration}</span>
              </div>
              <h3 className="process-card__title">{item.title}</h3>
              <p className="process-card__desc">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


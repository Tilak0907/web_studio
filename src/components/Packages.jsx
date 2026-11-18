import { ArrowUpRight, Check } from 'lucide-react';
import { PACKAGES } from '../data/siteData';

export default function Packages({ onSelectInquiry }) {
  return (
    <section id="packages" className="section section--light">
      <div className="container">
        <div className="section-header section-header--center">
          <span className="eyebrow">Transparent Investment</span>
          <h2 className="section-title">
            Clear packages tailored to your <span className="serif-accent">stage</span> of growth.
          </h2>
          <p className="section-subtitle">
            Honest pricing with zero hidden fees. Every package includes full mobile responsiveness,
            modern frontend craft, and direct collaboration.
          </p>
        </div>

        <div className="packages-grid">
          {PACKAGES.map((pkg) => (
            <article
              key={pkg.id}
              className={`package-card ${pkg.highlighted ? 'package-card--featured' : ''}`}
            >
              <div className="package-card__header">
                <span className="package-card__badge">{pkg.badge}</span>
                <h3 className="package-card__name">{pkg.name}</h3>
                <div className="package-card__pricing">
                  <span className="package-card__price">{pkg.price}</span>
                  <span className="package-card__period">{pkg.period}</span>
                </div>
                <p className="package-card__desc">{pkg.description}</p>
              </div>

              <ul className="package-card__list">
                {pkg.features.map((feature) => (
                  <li key={feature}>
                    <span className="package-card__check" aria-hidden="true">
                      <Check size={14} strokeWidth={2.5} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`btn ${pkg.highlighted ? 'btn--primary' : 'btn--outline-light'} package-card__cta`}
                onClick={() =>
                  onSelectInquiry({
                    service: pkg.name,
                    note: `I would like to inquire about the ${pkg.name} package (${pkg.price}).`,
                  })
                }
              >
                Choose {pkg.name}
                <ArrowUpRight size={16} aria-hidden="true" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


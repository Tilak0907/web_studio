import { ArrowUpRight, CheckCircle2, MapPin, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, HERO_METRICS, STUDIO_BANNERS } from '../data/siteData';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div
        className="hero__bg-photo"
        style={{ backgroundImage: `url(${STUDIO_BANNERS.heroBackdrop})` }}
        aria-hidden="true"
      />
      <div className="hero__bg-grid" aria-hidden="true" />
      <div className="hero__bg-glow" aria-hidden="true" />

      <div className="container hero__grid">
        <div className="hero__content">
          <div className="hero__pill">
            <span className="hero__pill-dot" aria-hidden="true" />
            <span>Accepting New Website Projects • Oshawa, Ontario</span>
          </div>

          <h1 className="hero__title">
            Websites crafted with{' '}
            <span className="serif-accent hero__title-accent">timeless precision</span> to grow
            your business.
          </h1>

          <p className="hero__lead">
            <strong>{BUSINESS_INFO.operatingName}</strong>, led by{' '}
            <strong>{BUSINESS_INFO.ownerName}</strong>, designs high-performing, completely
            mobile-responsive websites that combine refined aesthetics with effortless user
            experience.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">
              Start Your Project
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a href="#work" className="btn btn--outline-dark">
              Explore Selected Work
            </a>
          </div>

          <div className="hero__trust">
            <span className="hero__trust-item">
              <MapPin size={15} aria-hidden="true" />
              129 Guelph Street, Oshawa, ON
            </span>
            <span className="hero__trust-divider" aria-hidden="true" />
            <span className="hero__trust-item">
              <ShieldCheck size={15} aria-hidden="true" />
              Direct Owner-Led Studio
            </span>
          </div>
        </div>

        {/* Hero Editorial Studio Photography */}
        <div className="hero__visual">
          <div className="hero-photo-stage">
            <div className="hero-photo-frame">
              <img
                src={STUDIO_BANNERS.heroShowcase}
                alt={STUDIO_BANNERS.heroShowcaseAlt}
                className="hero-photo-frame__img"
                loading="eager"
                onError={(e) => {
                  if (e.currentTarget.src !== STUDIO_BANNERS.heroShowcaseFallback) {
                    e.currentTarget.src = STUDIO_BANNERS.heroShowcaseFallback;
                  }
                }}
              />
              <div className="hero-photo-frame__gloss" aria-hidden="true" />
            </div>

            <div className="floating-badge">
              <div className="floating-badge__icon" aria-hidden="true">
                <CheckCircle2 size={18} />
              </div>
              <div>
                <div className="floating-badge__title">Pixel-Perfect UX</div>
                <div className="floating-badge__sub">Desktop • Tablet • Mobile</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Metrics Band */}
      <div className="container">
        <div className="hero__metrics">
          {HERO_METRICS.map((metric) => (
            <div key={metric.label} className="hero-metric">
              <span className="hero-metric__value">{metric.value}</span>
              <span className="hero-metric__label">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

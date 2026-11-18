import { ArrowUpRight, MonitorSmartphone } from 'lucide-react';
import { BUSINESS_INFO, STUDIO_BANNERS } from '../data/siteData';

export default function StudioBanner() {
  return (
    <section className="studio-banner-section" aria-label="Studio Visual Banner">
      <div className="container">
        <div className="studio-banner">
          <img
            src={STUDIO_BANNERS.featureBanner}
            alt={STUDIO_BANNERS.featureAlt}
            className="studio-banner__img"
            loading="eager"
          />
          <div className="studio-banner__scrim" aria-hidden="true" />

          <div className="studio-banner__content">
            <div className="studio-banner__copy">
              <span className="studio-banner__eyebrow">
                <MonitorSmartphone size={14} aria-hidden="true" />
                {BUSINESS_INFO.operatingName} • {BUSINESS_INFO.businessType}
              </span>
              <h2 className="studio-banner__title">
                Where thoughtful UI design meets{' '}
                <span className="serif-accent">modern web engineering</span>.
              </h2>
              <p className="studio-banner__desc">
                Designed in Oshawa, Ontario by {BUSINESS_INFO.ownerName} — crafted to look sharp on
                desktop monitors and effortless on mobile screens.
              </p>
            </div>

            <a href="#contact" className="btn btn--primary studio-banner__cta">
              Book a Design Consultation
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


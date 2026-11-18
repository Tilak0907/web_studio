import {
  Layout,
  Smartphone,
  Compass,
  ShoppingBag,
  Sparkles,
  Gauge,
} from 'lucide-react';
import { SERVICES } from '../data/siteData';

const ICONS = {
  Layout,
  Smartphone,
  Compass,
  ShoppingBag,
  Sparkles,
  Gauge,
};

export default function Services() {
  return (
    <section id="services" className="section section--light">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Capabilities & Services</span>
          <h2 className="section-title">
            Website design built for <span className="serif-accent">clarity</span>, beauty, and
            results.
          </h2>
          <p className="section-subtitle">
            Every engagement blends modern visual craft with intuitive navigation so visitors
            immediately trust your brand and know how to take action.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service) => {
            const IconComponent = ICONS[service.icon] || Layout;
            return (
              <article key={service.id} className="service-card">
                <div className="service-card__top">
                  <div className="service-card__icon" aria-hidden="true">
                    <IconComponent size={22} strokeWidth={1.75} />
                  </div>
                  <span className="service-card__num">{service.number}</span>
                </div>

                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>

                <ul className="service-card__tags" aria-label={`${service.title} highlights`}>
                  {service.tags.map((tag) => (
                    <li key={tag} className="service-tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}


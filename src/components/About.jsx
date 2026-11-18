import { Award, Building2, MapPin, Mail, Phone, UserCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

const PRINCIPLES = [
  {
    title: 'Direct Owner Collaboration',
    detail:
      'Every design decision is handled personally by Sean Koppel—ensuring consistency, speed, and accountability.',
  },
  {
    title: 'Craft Over Clutter',
    detail:
      'We eliminate unnecessary visual noise so your services, brand story, and contact pathways stand out unmistakably.',
  },
  {
    title: 'Engineered for Every Screen',
    detail:
      'From handheld phones on the go to large desktop displays, your site stays crisp, readable, and effortless to navigate.',
  },
];

export default function About() {
  return (
    <section id="about" className="section section--subtle">
      <div className="container about-grid">
        <div className="about-copy">
          <span className="eyebrow">About the Studio</span>
          <h2 className="section-title">
            Local Ontario professionalism, <span className="serif-accent">studio-grade</span> web
            design.
          </h2>
          <p className="section-subtitle">
            Founded and operated by <strong>{BUSINESS_INFO.ownerName}</strong> under{' '}
            <strong>{BUSINESS_INFO.operatingName}</strong>, our Oshawa website design company helps
            modern businesses make an unforgettable first impression online.
          </p>
          <p className="about-copy__body">
            We believe great websites should feel effortless to use and unmistakably credible. By
            combining modern React architecture, responsive CSS engineering, and refined editorial
            design, we deliver digital storefronts that earn customer trust from the very first
            scroll.
          </p>

          <div className="principles-list">
            {PRINCIPLES.map((item) => (
              <div key={item.title} className="principle-item">
                <h3 className="principle-item__title">{item.title}</h3>
                <p className="principle-item__detail">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Corporate Profile Card */}
        <aside className="studio-dossier" aria-label="Business Profile Details">
          <div className="studio-dossier__header">
            <div className="studio-dossier__monogram" aria-hidden="true">
              {BUSINESS_INFO.shortMark}
            </div>
            <div>
              <span className="studio-dossier__label">REGISTERED ONTARIO STUDIO</span>
              <h3 className="studio-dossier__name">{BUSINESS_INFO.operatingName}</h3>
            </div>
          </div>

          <dl className="studio-dossier__list">
            <div className="studio-dossier__row">
              <dt>
                <UserCheck size={16} aria-hidden="true" />
                Owner / Principal
              </dt>
              <dd>{BUSINESS_INFO.ownerName}</dd>
            </div>

            <div className="studio-dossier__row">
              <dt>
                <Building2 size={16} aria-hidden="true" />
                Business Type
              </dt>
              <dd>{BUSINESS_INFO.businessType}</dd>
            </div>

            <div className="studio-dossier__row">
              <dt>
                <MapPin size={16} aria-hidden="true" />
                Studio Address
              </dt>
              <dd>
                129 Guelph Street
                <br />
                Oshawa, Ontario, L1H 6H8
                <br />
                Canada
              </dd>
            </div>

            <div className="studio-dossier__row">
              <dt>
                <Phone size={16} aria-hidden="true" />
                Direct Phone
              </dt>
              <dd>
                <a href={BUSINESS_INFO.phoneHref} className="dossier-link">
                  {BUSINESS_INFO.phone}
                </a>
              </dd>
            </div>

            <div className="studio-dossier__row">
              <dt>
                <Mail size={16} aria-hidden="true" />
                Direct Email
              </dt>
              <dd>
                <a href={BUSINESS_INFO.emailHref} className="dossier-link">
                  {BUSINESS_INFO.email}
                </a>
              </dd>
            </div>

            <div className="studio-dossier__row">
              <dt>
                <Award size={16} aria-hidden="true" />
                Service Region
              </dt>
              <dd>{BUSINESS_INFO.serviceArea}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}


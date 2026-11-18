import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO, NAV_LINKS } from '../data/siteData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#top" className="brand">
              <span className="brand__mark" aria-hidden="true">
                {BUSINESS_INFO.shortMark}
              </span>
              <span className="brand__text">
                <span className="brand__name">{BUSINESS_INFO.brandName}</span>
                <span className="brand__sub">{BUSINESS_INFO.operatingName}</span>
              </span>
            </a>
            <p className="footer__summary">
              Owned and operated by <strong>{BUSINESS_INFO.ownerName}</strong>. Crafting modern,
              mobile-responsive websites for ambitious businesses in Oshawa, Durham Region, and
              across Canada.
            </p>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Navigation</h3>
            <ul className="footer__links">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Studio Contact</h3>
            <ul className="footer__contact-list">
              <li>
                <MapPin size={15} aria-hidden="true" />
                <span>{BUSINESS_INFO.address.full}</span>
              </li>
              <li>
                <Phone size={15} aria-hidden="true" />
                <a href={BUSINESS_INFO.phoneHref}>{BUSINESS_INFO.phone}</a>
              </li>
              <li>
                <Mail size={15} aria-hidden="true" />
                <a href={BUSINESS_INFO.emailHref}>{BUSINESS_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {currentYear} {BUSINESS_INFO.operatingName} • Owner: {BUSINESS_INFO.ownerName}. All
            rights reserved.
          </p>
          <a href="#top" className="back-to-top" aria-label="Back to top">
            <span>Back to top</span>
            <ArrowUp size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}


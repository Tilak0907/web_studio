import { useEffect, useState } from 'react';
import { Menu, X, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, NAV_LINKS } from '../data/siteData';

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">
          <a href="#top" className="brand" aria-label={`${BUSINESS_INFO.brandName} — Home`}>
            <span className="brand__mark" aria-hidden="true">
              {BUSINESS_INFO.shortMark}
            </span>
            <span className="brand__text">
              <span className="brand__name">{BUSINESS_INFO.brandName}</span>
              <span className="brand__sub">Website Design • Oshawa, ON</span>
            </span>
          </a>

          <nav className="navbar__nav" aria-label="Primary Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`navbar__link ${activeSection === link.id ? 'navbar__link--active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="navbar__actions">
            <a href={BUSINESS_INFO.phoneHref} className="navbar__phone" aria-label={`Call ${BUSINESS_INFO.phone}`}>
              <Phone size={15} aria-hidden="true" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <a href="#contact" className="btn btn--primary btn--sm">
              Start a Project
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          <button
            type="button"
            className="navbar__toggle"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay & Slide-Over Drawer */}
      <div
        className={`mobile-backdrop ${menuOpen ? 'mobile-backdrop--open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
      <aside
        id="mobile-menu"
        className={`mobile-drawer ${menuOpen ? 'mobile-drawer--open' : ''}`}
        aria-label="Mobile Navigation"
        aria-hidden={!menuOpen}
      >
        <div className="mobile-drawer__header">
          <div className="brand">
            <span className="brand__mark" aria-hidden="true">
              {BUSINESS_INFO.shortMark}
            </span>
            <span className="brand__text">
              <span className="brand__name">{BUSINESS_INFO.brandName}</span>
              <span className="brand__sub">By {BUSINESS_INFO.ownerName}</span>
            </span>
          </div>
          <button
            type="button"
            className="mobile-drawer__close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="mobile-drawer__nav">
          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`mobile-drawer__link ${activeSection === link.id ? 'mobile-drawer__link--active' : ''}`}
              onClick={handleLinkClick}
            >
              <span className="mobile-drawer__num">0{idx + 1}</span>
              <span>{link.label}</span>
              <ArrowUpRight size={18} className="mobile-drawer__arrow" aria-hidden="true" />
            </a>
          ))}
        </nav>

        <div className="mobile-drawer__footer">
          <a href="#contact" className="btn btn--primary mobile-drawer__cta" onClick={handleLinkClick}>
            Request a Free Consultation
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>

          <div className="mobile-drawer__direct">
            <a href={BUSINESS_INFO.phoneHref} className="mobile-drawer__contact-item">
              <Phone size={15} aria-hidden="true" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <a href={BUSINESS_INFO.emailHref} className="mobile-drawer__contact-item">
              <Mail size={15} aria-hidden="true" />
              <span>{BUSINESS_INFO.email}</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}


import { useEffect, useState } from 'react';
import {
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Send,
  User,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  service: 'Business Growth',
  message: '',
};

export default function Contact({ prefilledInquiry }) {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  useEffect(() => {
    if (prefilledInquiry) {
      setSubmitted(false);
      setFormData((prev) => ({
        ...prev,
        service: prefilledInquiry.service || prev.service,
        message: prefilledInquiry.note || prev.message,
      }));
    }
  }, [prefilledInquiry]);

  const handleCopy = async (value, field) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      setCopiedField(null);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      nextErrors.message = 'Please share a brief note about your website project (10+ characters).';
    }
    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const buildMailtoLink = () => {
    const subject = encodeURIComponent(
      `Website Design Inquiry (${formData.service}) — ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hello Sean,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${
        formData.phone || 'Not provided'
      }\nSelected Package / Service: ${formData.service}\n\nProject Details:\n${formData.message}`
    );
    return `mailto:${BUSINESS_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section section--subtle">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Start a Conversation</span>
          <h2 className="section-title">
            Let’s design a website you are <span className="serif-accent">proud</span> to share.
          </h2>
          <p className="section-subtitle">
            Reach out directly to Sean Koppel at {BUSINESS_INFO.operatingName} by phone, email, or
            the quick project brief below.
          </p>
        </div>

        <div className="contact-grid">
          {/* Direct Business Contact Card */}
          <div className="contact-info-card">
            <div className="contact-info-card__top">
              <span className="contact-info-card__kicker">DIRECT STUDIO CONTACT</span>
              <h3 className="contact-info-card__title">{BUSINESS_INFO.operatingName}</h3>
              <p className="contact-info-card__owner">
                <User size={15} aria-hidden="true" />
                <span>
                  {BUSINESS_INFO.ownerName} — {BUSINESS_INFO.ownerTitle}
                </span>
              </p>
            </div>

            <div className="contact-channels">
              <div className="contact-channel">
                <div className="contact-channel__icon" aria-hidden="true">
                  <Phone size={18} />
                </div>
                <div className="contact-channel__body">
                  <span className="contact-channel__label">Phone</span>
                  <a href={BUSINESS_INFO.phoneHref} className="contact-channel__value">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={() => handleCopy(BUSINESS_INFO.phone, 'phone')}
                  aria-label="Copy phone number"
                >
                  {copiedField === 'phone' ? <Check size={15} /> : <Copy size={15} />}
                </button>
              </div>

              <div className="contact-channel">
                <div className="contact-channel__icon" aria-hidden="true">
                  <Mail size={18} />
                </div>
                <div className="contact-channel__body">
                  <span className="contact-channel__label">Email</span>
                  <a href={BUSINESS_INFO.emailHref} className="contact-channel__value">
                    {BUSINESS_INFO.email}
                  </a>
                </div>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={() => handleCopy(BUSINESS_INFO.email, 'email')}
                  aria-label="Copy email address"
                >
                  {copiedField === 'email' ? <Check size={15} /> : <Copy size={15} />}
                </button>
              </div>

              <div className="contact-channel contact-channel--address">
                <div className="contact-channel__icon" aria-hidden="true">
                  <MapPin size={18} />
                </div>
                <div className="contact-channel__body">
                  <span className="contact-channel__label">Office Address</span>
                  <address className="contact-channel__address">
                    129 Guelph Street
                    <br />
                    Oshawa, Ontario, L1H 6H8
                    <br />
                    Canada
                  </address>
                  <a
                    href={BUSINESS_INFO.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="maps-link"
                  >
                    Open in Google Maps
                    <ExternalLink size={13} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-info-card__footer">
              <span className="availability-dot" aria-hidden="true" />
              <span>Typical response time: within 1 business day.</span>
            </div>
          </div>

          {/* Interactive Frontend Project Brief Form */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="form-success" role="status" aria-live="polite">
                <div className="form-success__icon" aria-hidden="true">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="form-success__title">Project Brief Ready</h3>
                <p className="form-success__text">
                  Thank you, <strong>{formData.name}</strong>. Your inquiry details for{' '}
                  <strong>{formData.service}</strong> have been prepared. Click below to send it
                  directly via your email client to{' '}
                  <strong>{BUSINESS_INFO.email}</strong>, or call us at{' '}
                  <a href={BUSINESS_INFO.phoneHref} className="dossier-link">
                    {BUSINESS_INFO.phone}
                  </a>
                  .
                </p>

                <div className="form-success__actions">
                  <a href={buildMailtoLink()} className="btn btn--primary">
                    Send via Email App
                    <Mail size={16} aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    className="btn btn--outline-light"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData(INITIAL_FORM);
                    }}
                  >
                    Start Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="contact-form__head">
                  <h3>Tell us about your website</h3>
                  <p>Share a few details and we will follow up with a clear plan and timeline.</p>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="contact-name">
                      Your Name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Alex Morgan"
                      value={formData.name}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.name)}
                      required
                    />
                    {errors.name && <span className="field-error">{errors.name}</span>}
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-email">
                      Email Address <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="alex@yourbusiness.ca"
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.email)}
                      required
                    />
                    {errors.email && <span className="field-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="contact-phone">Phone Number (Optional)</label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="437-000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-service">Package or Service</label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="Essential Presence">Essential Presence ($1,450 CAD)</option>
                      <option value="Business Growth">Business Growth ($2,900 CAD)</option>
                      <option value="Custom Flagship">Custom Flagship (Bespoke Scope)</option>
                      <option value="Website Redesign">Website Redesign &amp; Modernization</option>
                      <option value="General Consultation">General Website Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="contact-message">
                    Project Overview <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your business, desired sections, timeline, or an existing website you'd like to upgrade..."
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    required
                  />
                  {errors.message && <span className="field-error">{errors.message}</span>}
                </div>

                <div className="contact-form__submit">
                  <button type="submit" className="btn btn--dark">
                    Prepare Project Inquiry
                    <Send size={16} aria-hidden="true" />
                  </button>
                  <span className="contact-form__note">
                    No obligation • Free initial design consultation
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


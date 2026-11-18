import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/siteData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section id="faq" className="section section--light">
      <div className="container faq-layout">
        <div className="section-header faq-header">
          <span className="eyebrow">Common Questions</span>
          <h2 className="section-title">
            Everything you need to know before we <span className="serif-accent">begin</span>.
          </h2>
          <p className="section-subtitle">
            Have a specific project requirement? Reach out directly by phone or email and we will
            happily walk through your options.
          </p>
        </div>

        <div className="faq-list">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={item.question} className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
                <button
                  type="button"
                  className="faq-item__trigger"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                  id={`faq-trigger-${idx}`}
                  onClick={() => toggleItem(idx)}
                >
                  <span>{item.question}</span>
                  <ChevronDown size={19} className="faq-item__chevron" aria-hidden="true" />
                </button>
                <div
                  id={`faq-panel-${idx}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${idx}`}
                  className="faq-item__panel"
                  hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


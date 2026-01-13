// FAQ.js
import { useState } from "react";

const FAQS = [
  { q: "How do I register interest?", a: "Go to Register and submit your name, email, and course selection." },
  { q: "Is registration the same as enrolment?", a: "No. This portal records interest; official enrolment follows school instructions." },
  { q: "Can I favourite modules?", a: "Yes. Click ☆ to save, ★ to remove." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="container">
      <h1>Frequently Asked Questions</h1>

      <div className="faq">
        {FAQS.map((item, idx) => {
          const open = openIndex === idx;
          return (
            <div className="faq-item" key={item.q}>
              <button
                className="faq-question"
                type="button"
                onClick={() => setOpenIndex(open ? null : idx)}
              >
                {item.q} <span>{open ? "−" : "+"}</span>
              </button>
              {open && <p className="faq-answer">{item.a}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

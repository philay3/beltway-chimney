'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Prompt, polite, and finished the job in a timely manner. I would recommend to family and friends.",
    author: "Sonya Owens",
    location: "Clinton, MD",
    rating: 5
  },
  {
    quote: "Although we had to pay more than estimated due to major damage found while cleaning the chimney, it put me and my family at ease after he explained how the house could have caught fire as well as the high levels of carbon monoxide that were seeping into the home. Thank you Beltway Chimney!",
    author: "The Buckman Family",
    location: "Washington, DC",
    rating: 5
  },
  {
    quote: "Great attitude and very knowledgeable. I felt very comfortable leaving to run errands. The job was finished as estimated in the quote.",
    author: "Reginald Hampton",
    location: "Arlington, VA",
    rating: 5
  },
  {
    quote: "Happy to tell others of the prompt and reliable service that I received. He offered several ways to save money, time, and create an energy-efficient atmosphere for the future use of my chimney. Parts and labor cost were very reasonable and fit into my budget.",
    author: "Yuesef Minor",
    location: "Woodbridge, VA",
    rating: 5
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <section className="testimonials-section section-alt" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Client Success</span>
          <h2>What Our Customers Say</h2>
        </div>

        <div className="testimonial-slider-container">
          <button className="slider-arrow prev" onClick={handlePrev} aria-label="Previous Testimonial">
            <ChevronLeft size={24} />
          </button>

          <div className="testimonial-card animate-fade-in">
            <div className="quote-icon-container">
              <Quote className="quote-icon" />
            </div>
            
            <div className="rating-stars">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="star-icon" />
              ))}
            </div>

            <p className="quote-text">&ldquo;{current.quote}&rdquo;</p>
            
            <div className="author-info">
              <span className="author-name">{current.author}</span>
              <span className="author-location">{current.location}</span>
            </div>
          </div>

          <button className="slider-arrow next" onClick={handleNext} aria-label="Next Testimonial">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="slider-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? 'active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          background-color: var(--primary-light);
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .subtitle {
          color: var(--primary);
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.85rem;
          letter-spacing: 2px;
          display: block;
          margin-bottom: 12px;
        }

        h2 { font-size: clamp(1.7rem, 5.4vw, 2.25rem); color: var(--text-dark); }

        .testimonial-slider-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 800px;
          margin: 0 auto;
          gap: 20px;
        }

        .testimonial-card {
          background: var(--light-surface);
          border: 1px solid var(--light-border);
          border-radius: var(--border-radius-lg);
          padding: 48px;
          box-shadow: var(--box-shadow-lg);
          text-align: center;
          flex-grow: 1;
          position: relative;
          min-height: 280px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .quote-icon-container {
          background: var(--primary-light);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .quote-icon {
          color: var(--primary);
          width: 22px;
          height: 22px;
        }

        .rating-stars {
          display: flex;
          gap: 4px;
          margin-bottom: 20px;
        }

        .star-icon {
          color: var(--accent);
          fill: var(--accent);
          width: 18px;
          height: 18px;
        }

        .quote-text {
          font-size: 1.15rem;
          line-height: 1.7;
          color: var(--text-dark);
          margin-bottom: 24px;
          font-weight: 500;
          font-style: italic;
        }

        .author-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .author-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--text-dark);
        }

        .author-location {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .slider-arrow {
          background: var(--light-surface);
          border: 1px solid var(--light-border);
          color: var(--text-dark);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
          box-shadow: var(--box-shadow);
          flex-shrink: 0;
        }

        .slider-arrow:hover {
          background: var(--primary);
          color: #fff;
          border-color: var(--primary);
        }

        .slider-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 32px;
        }

        .dot {
          background: var(--light-border);
          border: none;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          cursor: pointer;
          padding: 0;
          transition: var(--transition);
        }

        .dot.active {
          background: var(--primary);
          width: 24px;
          border-radius: 4px;
        }

        @media (max-width: 600px) {
          .testimonial-card {
            padding: 32px 20px;
          }
          .slider-arrow {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .testimonial-card { min-height: 0; padding: 28px 20px; }
          .quote-text { font-size: 1.02rem; }
        }
      `}</style>
    </section>
  );
}

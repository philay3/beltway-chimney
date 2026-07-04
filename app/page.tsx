'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Flame, ShieldAlert, BadgeCheck, ShieldCheck, CheckCircle2, ChevronRight, Phone, MessageSquare, ArrowRight, X } from 'lucide-react';
import Testimonials from '../components/Testimonials';

const services = [
  {
    id: 'gas-flue',
    title: 'Gas Flue Cleaning',
    short: 'Prevent deadly Carbon Monoxide venting failures from blocked or poorly vented flues.',
    desc: 'Flue gas is the gas exiting to the atmosphere via a flue, conveying exhaust gases from a fireplace, oven, furnace, boiler, or steam generator. A blocked or poorly vented gas flue won’t catch fire, but it may leak deadly, odorless Carbon Monoxide into your home.',
    icon: Flame,
    color: '#e06a3b'
  },
  {
    id: 'oil-flue',
    title: 'Oil Flue Sweeping',
    short: 'Soot removal from oil-fired heating appliances to prevent blockage and venting failure.',
    desc: 'During the winter, oil-fired appliances produce oil soot that adheres to the sides of the chimney and falls to the base. This build-up blocks the exhaust pathway and produces toxic carbon monoxide. Regular cleanings keep the heating system drawing correctly and safely.',
    icon: ShieldAlert,
    color: '#ff9254'
  },
  {
    id: 'factory-built',
    title: 'Factory Built Systems',
    short: 'Metal fireplace and chimney flue inspections to verify insulation & safety systems.',
    desc: 'Unlike traditional masonry, factory-built fireplaces are made of engineered metal and use insulated walls, air-cooled pipes, and blowers to circulate heat. Annual inspection and sweeping are critical to ensure joints and cooling pathways remain functional and clean.',
    icon: BadgeCheck,
    color: '#ffd166'
  },
  {
    id: 'fireplace-insert',
    title: 'Fireplace Inserts',
    short: 'Maximize fireplace heat efficiency with properly swept and maintained inserts.',
    desc: 'Fireplace inserts fit into existing masonry fireplaces to turn inefficient fires into highly efficient room heaters. Regular maintenance is necessary to clear creosote accumulation from the connecting stovepipe and liner system.',
    icon: CheckCircle2,
    color: '#10b981'
  },
  {
    id: 'free-standing',
    title: 'Free-standing Stoves',
    short: 'Maintain freestanding wood or pellet stove pipes for clean, high-output heating.',
    desc: 'Free-standing stoves provide cozy, direct heat. A dirty stove can fill your room with ash and smoke. Regular cleaning—about every two weeks to a month—keeps the stove burning cleanly, increases heating efficiency, and ensures safe operation.',
    icon: Flame,
    color: '#e06a3b'
  },
  {
    id: 'glazed-creosote',
    title: 'Rotary Glazed Creosote',
    short: 'Removal of highly combustible glazed tar build-up from flue liners.',
    desc: 'Liquid creosote can seep through joints or cracks in flue tiles, accumulating on the outside of the chimney liner. During a chimney fire, this hidden creosote ignites and causes an uncontrolled house fire. Our advanced rotary cleaning removes this hazardous glazed tar.',
    icon: ShieldAlert,
    color: '#ef4444'
  }
];

export default function Home() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => setContactSubmitted(false), 5000);
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <Image
            src="/hero_background.png"
            alt="Warm fireplace living room"
            fill
            priority
            quality={90}
            className="hero-img"
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="container hero-content animate-fade-in-up">
          <div className="badge">
            <ShieldCheck size={14} />
            <span>Protecting People, Property, and Peace of Mind</span>
          </div>
          <h1>Professional Chimney Safety &amp; Sweeping</h1>
          <p className="hero-subtitle">
            Expert chimney sweep, flue inspection, and creosote cleaning services across the D.C., Maryland, and Virginia Metropolitan area.
          </p>
          <div className="hero-ctas">
            <Link href="/appointments" className="btn btn-primary">
              Book Service <ArrowRight size={18} />
            </Link>
            <a href="#services" className="btn btn-outline">
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Welcome / Education Section */}
      <section className="section welcome-section" id="about">
        <div className="container welcome-grid">
          <div className="welcome-text">
            <span className="section-tag">Welcome to Beltway Chimney</span>
            <h2>Why Chimney Maintenance is Critical</h2>
            <p>
              Many homeowners don't realize how important annual chimney sweeps are. Fireplaces are designed to safely contain fire, but they also collect creosote—a highly flammable tar-like residue. Over time, creosote build-up can trigger destructive chimney fires.
            </p>
            <div className="warning-card">
              <ShieldAlert className="warning-icon" />
              <div>
                <h4>The Threat of Carbon Monoxide</h4>
                <p>
                  Carbon Monoxide (CO) is a silent killer—odorless, tasteless, and colorless. Heating systems (gas, oil, and wood alike) are leading sources of CO poisoning. A blocked or poorly drafting flue won't catch fire, but it can leak deadly gases into your home.
                </p>
              </div>
            </div>
            <p className="highlight-desc">
              Chimney servicing is labor-intensive, dirty, and requires expert tools. That's why residents across the DMV Metro trust **Beltway Chimney** to get the job done right.
            </p>
            <div className="welcome-ctas">
              <a href="tel:240-241-3439" className="btn btn-secondary">
                <Phone size={18} /> Call Now for a Quote
              </a>
            </div>
          </div>

          <div className="welcome-image-container">
            <div className="image-wrapper shadow-lg">
              <Image
                src="/chimney_service.png"
                alt="Professional masonry chimney"
                width={500}
                height={500}
                className="welcome-img"
              />
            </div>
            <div className="stat-overlay">
              <span className="stat-num">100%</span>
              <span className="stat-label">Certified & Insured Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section services-section" id="services">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Professional Care</span>
            <h2>Our Chimney & Flue Services</h2>
            <p className="section-desc">
              From traditional wood fireplaces to modern gas flues, we provide full-spectrum safety cleanings and inspections. Click any card below to read detailed information.
            </p>
          </div>

          <div className="grid grid-3 services-grid">
            {services.map((service) => (
              <div
                key={service.id}
                className="card service-card"
                onClick={() => setSelectedService(service)}
              >
                <div className="service-icon-box" style={{ backgroundColor: `${service.color}15`, color: service.color }}>
                  <service.icon size={28} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.short}</p>
                <span className="learn-more">
                  Learn Details <ChevronRight size={16} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Component */}
      <Testimonials />

      {/* Quick Contact Form Section */}
      <section className="section contact-section" id="contact">
        <div className="container contact-container">
          <div className="glass contact-card">
            <h2>Have Questions? Get in Touch</h2>
            <p>Need a consultation or general price estimate? Send a message and our specialists will assist you.</p>

            {contactSubmitted ? (
              <div className="success-toast animate-fade-in">
                <CheckCircle2 size={24} />
                <span>Thank you! Your inquiry was sent successfully. We will call you shortly.</span>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="contact-form">
                <div className="form-row">
                  <input type="text" placeholder="Your Name" required className="form-input" />
                  <input type="tel" placeholder="Phone Number" required className="form-input" />
                </div>
                <input type="email" placeholder="Email Address" required className="form-input" />
                <textarea placeholder="How can we help you?" rows={4} required className="form-input"></textarea>
                <button type="submit" className="btn btn-primary form-submit">
                  Send Message <MessageSquare size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-content glass animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedService(null)}>
              <X size={24} />
            </button>
            <div className="modal-icon-header" style={{ color: selectedService.color }}>
              <selectedService.icon size={36} />
            </div>
            <h2>{selectedService.title}</h2>
            <p className="modal-desc">{selectedService.desc}</p>
            <div className="modal-footer">
              <Link href="/appointments" className="btn btn-primary" onClick={() => setSelectedService(null)}>
                Book This Service
              </Link>
              <button className="btn btn-secondary" onClick={() => setSelectedService(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .home-container {
          overflow-x: hidden;
        }

        /* Hero */
        .hero {
          position: relative;
          min-height: 85vh;
          display: flex;
          align-items: center;
          color: #fff;
          padding: 80px 0;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(18, 18, 20, 0.95) 0%, rgba(18, 18, 20, 0.6) 100%);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 680px;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(230, 28, 36, 0.08);
          border: 1px solid rgba(230, 28, 36, 0.4);
          color: #ffffff;
          padding: 8px 18px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 24px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .badge :global(svg) {
          color: var(--primary) !important;
        }

        h1 { font-size: clamp(1.9rem, 6.2vw, 3.5rem); line-height: 1.1; margin-bottom: 20px; letter-spacing: -0.5px; }

        .hero-subtitle {
          font-size: 1.15rem;
          line-height: 1.6;
          color: #d1d1d6;
          margin-bottom: 36px;
        }

        .hero-ctas {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        /* Welcome Section */
        .welcome-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
          gap: 60px;
          align-items: center;
        }

        .welcome-text {
          min-width: 0;
        }

        .section-tag {
          color: var(--primary);
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.85rem;
          letter-spacing: 2px;
          margin-bottom: 12px;
          display: block;
        }

        h2 { font-size: clamp(1.8rem, 5vw, 2.5rem); margin-bottom: 24px; }

        p {
          line-height: 1.7;
          color: var(--text-muted);
          margin-bottom: 20px;
        }

        .warning-card {
          background: #fef2f2;
          border-left: 4px solid var(--error);
          border-radius: var(--border-radius);
          padding: 24px;
          display: flex;
          gap: 16px;
          margin: 30px 0;
        }

        .warning-icon {
          color: var(--error);
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          margin-top: 2px;
        }

        .warning-card h4 {
          color: #991b1b;
          font-size: 1.1rem;
          margin-bottom: 6px;
        }

        .warning-card p {
          margin: 0;
          font-size: 0.95rem;
          color: #7f1d1d;
          line-height: 1.5;
        }

        .highlight-desc {
          font-weight: 600;
          color: var(--text-dark);
        }

        .welcome-image-container {
          position: relative;
          width: 100%;
          min-width: 0;
        }

        .image-wrapper {
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          box-shadow: var(--box-shadow-lg);
          width: 100%;
        }

        /* Next.js <Image> renders its own <img>, which styled-jsx does NOT
           tag with the scoped hash class — so a plain ".welcome-img" rule
           never matches it. Anchor a :global() selector inside the scoped
           wrapper to reach the img without leaking styles globally. */
        .image-wrapper :global(.welcome-img) {
          display: block;
          width: 100%;
          max-width: 100%;
          height: auto;
          object-fit: cover;
        }

        .stat-overlay {
          position: absolute;
          bottom: -20px;
          left: -20px;
          background: var(--dark-surface);
          border: 1px solid var(--dark-border);
          padding: 24px;
          border-radius: var(--border-radius);
          color: #fff;
          display: flex;
          flex-direction: column;
          gap: 4px;
          box-shadow: var(--box-shadow-lg);
        }

        .stat-num {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 800;
          color: var(--secondary);
        }

        .stat-label {
          font-size: 0.8rem;
          color: #a0a0ab;
          font-weight: 600;
        }

        /* Services */
        .section-header {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 60px;
        }

        .section-desc {
          margin-top: 12px;
        }

        .service-card {
          cursor: pointer;
        }

        .service-icon-box {
          width: 60px;
          height: 60px;
          border-radius: var(--border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .service-card h3 {
          font-size: 1.3rem;
          margin-bottom: 12px;
        }

        .service-card p {
          font-size: 0.95rem;
          margin-bottom: 20px;
        }

        .learn-more {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: var(--primary);
          font-weight: 700;
          font-size: 0.9rem;
        }

        /* Contact Section */
        .contact-section {
          background: linear-gradient(135deg, #121214 0%, #1e1e24 100%);
          color: #fff;
        }

        .contact-container {
          max-width: 700px;
          margin: 0 auto;
        }

        .contact-card {
          padding: 48px;
          border-radius: var(--border-radius-lg);
          text-align: center;
        }

        .contact-card h2 {
          margin-bottom: 12px;
        }

        .contact-card p {
          color: #a0a0ab;
          margin-bottom: 32px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-input {
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          padding: 14px 20px;
          border-radius: var(--border-radius);
          outline: none;
          transition: var(--transition);
          font-size: 0.95rem;
        }

        textarea.form-input {
          resize: vertical;
        }

        .form-input::placeholder {
          color: #52525b;
        }

        .form-input:focus {
          border-color: var(--primary);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 0 2px rgba(224, 106, 59, 0.2);
        }

        .form-submit {
          padding: 16px;
          font-size: 1rem;
        }

        .success-toast {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid var(--success);
          color: var(--success);
          padding: 20px;
          border-radius: var(--border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-weight: 600;
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 1000;
        }

        .modal-content {
          max-width: 550px;
          width: 100%;
          padding: 40px;
          position: relative;
          border-radius: var(--border-radius-lg);
          text-align: center;
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: transparent;
          border: none;
          color: var(--text-dark);
          cursor: pointer;
        }

        .modal-icon-header {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }

        .modal-desc {
          font-size: 1.05rem;
          line-height: 1.7;
          margin: 20px 0 32px;
        }

        .modal-footer {
          display: flex;
          justify-content: center;
          gap: 16px;
        }

        /* Responsiveness */
        @media (max-width: 900px) {
          .welcome-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 40px;
          }
          .welcome-image-container {
            max-width: 100%;
            margin: 0 auto;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .contact-card {
            padding: 32px 20px;
          }
        }

        @media (max-width: 600px) {
          .stat-overlay { left: 14px; right: auto; bottom: -16px; padding: 18px 20px; }
          .stat-num { font-size: 1.65rem; }
        }

        @media (max-width: 480px) {
          .hero { min-height: 78vh; padding: 56px 0; }
          .badge { font-size: 0.72rem; padding: 7px 14px; letter-spacing: 0.3px; }
          .hero-subtitle { font-size: 1.02rem; margin-bottom: 28px; }
          .warning-card { padding: 18px 16px; gap: 12px; margin: 20px 0; }
          .contact-card  { padding: 28px 18px; }
          .modal-content { padding: 26px 20px; }
          .modal-footer  { flex-direction: column; }
          .modal-footer :global(.btn) { width: 100%; }
        }
      `}</style>
    </div>
  );
}

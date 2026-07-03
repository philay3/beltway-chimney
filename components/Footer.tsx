'use client';

import Link from 'next/link';
import { Phone, Mail, Clock, ShieldCheck } from 'lucide-react';

const BeltwayLogo = () => (
  <svg viewBox="0 0 100 100" width="44" height="44" className="logo-svg">
    {/* Shield Outer White Border */}
    <path
      d="M 50 6 Q 78 6 88 17 C 98 33 98 58 83 78 Q 68 93 50 98 Q 32 93 17 78 C 2 58 2 33 12 17 Q 22 6 50 6"
      fill="none"
      stroke="#ffffff"
      strokeWidth="4"
    />
    {/* Shield Blue Body */}
    <path
      d="M 50 8 Q 76 8 86 18 C 95 33 95 56 81 75 Q 67 89 50 94 Q 33 89 19 75 C 5 56 5 33 14 18 Q 24 8 50 8"
      fill="#1b3a60"
    />
    {/* Top Red Section */}
    <path
      d="M 50 8 Q 76 8 86 18 C 87.5 21 88.5 25 89 29.5 L 11 29.5 C 11.5 25 12.5 21 14 18 Q 24 8 50 8"
      fill="#e61c24"
    />
    {/* Black Road at the Bottom */}
    <path
      d="M 50 62 L 72 82 C 65.5 87.5 58 91.5 50 94 C 42 91.5 34.5 87.5 28 82 Z"
      fill="#121214"
      stroke="#ffffff"
      strokeWidth="2"
    />
    {/* Road Center Dotted Lines */}
    <line x1="50" y1="67" x2="50" y2="73" stroke="#ffffff" strokeWidth="2.5" strokeDasharray="1 1" />
    <line x1="50" y1="77" x2="50" y2="85" stroke="#ffffff" strokeWidth="2.5" strokeDasharray="1 1" />
    {/* Text Inside Shield */}
    <text x="50" y="44" fill="#ffffff" fontSize="10.5" fontWeight="900" fontFamily="system-ui, sans-serif" textAnchor="middle" letterSpacing="0.2">BELTWAY</text>
    <text x="50" y="55" fill="#ffffff" fontSize="10.5" fontWeight="900" fontFamily="system-ui, sans-serif" textAnchor="middle" letterSpacing="0.2">CHIMNEY</text>
  </svg>
);

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Info Column */}
        <div className="footer-col brand-col">
          <Link href="/" className="footer-logo">
            <BeltwayLogo />
            <span>Beltway <span className="text-primary">Chimney</span></span>
          </Link>
          <p className="footer-motto">Protecting People, Property, and Peace of Mind</p>
          <p className="footer-desc">
            Certified and experienced chimney sweeps serving the Maryland, Washington D.C., and Northern Virginia Metropolitan areas. Keeping your home safe and warm.
          </p>
          <div className="certifications">
            <ShieldCheck size={20} className="cert-icon" />
            <span>Certified Chimney Professionals</span>
          </div>
        </div>

        {/* Links Column */}
        <div className="footer-col">
          <h3 className="footer-heading">Services</h3>
          <ul className="footer-links">
            <li><Link href="/#services">Gas Flue Cleaning</Link></li>
            <li><Link href="/#services">Oil Flue Sweeping</Link></li>
            <li><Link href="/#services">Factory Built Fireplaces</Link></li>
            <li><Link href="/#services">Fireplace Inserts & Stoves</Link></li>
            <li><Link href="/#services">Glazed Creosote Removal</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-col">
          <h3 className="footer-heading">Contact & Hours</h3>
          <ul className="footer-info">
            <li>
              <Phone size={18} className="info-icon" />
              <a href="tel:240-241-3439" className="hover-accent">240-241-3439</a>
            </li>
            <li>
              <Mail size={18} className="info-icon" />
              <a href="mailto:info@beltwaychimney.com" className="hover-accent">info@beltwaychimney.com</a>
            </li>
            <li>
              <Clock size={18} className="info-icon" />
              <div>
                <p>Monday - Saturday</p>
                <p className="highlight-text">8:00 AM - 6:00 PM</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-container">
          <p>&copy; {new Date().getFullYear()} Beltway Chimney. All Rights Reserved.</p>
          <div className="bottom-links">
            <Link href="/appointments">Book Appointment</Link>
            <Link href="/pay">Pay Invoice</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          background-color: #121214;
          color: #a0a0ab;
          padding: 80px 0 30px;
          border-top: 1px solid #1e1e24;
          font-size: 0.95rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.2fr;
          gap: 60px;
          margin-bottom: 60px;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .brand-col {
          max-width: 440px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: #fff;
        }

        .logo-svg {
          width: 44px;
          height: 44px;
          filter: drop-shadow(0 0 6px rgba(230, 28, 36, 0.2));
        }

        .footer-motto {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 700;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 4px;
          border-left: 3px solid var(--primary);
          padding-left: 10px;
          line-height: 1.3;
        }

        .text-primary {
          color: var(--primary);
        }

        .footer-desc {
          line-height: 1.6;
        }

        .certifications {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--accent);
          font-weight: 600;
        }

        .cert-icon {
          color: var(--accent);
        }

        .footer-heading {
          color: #fff;
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .footer-links, .footer-info {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 0;
        }

        .footer-links a {
          color: #a0a0ab;
          transition: var(--transition);
        }

        .footer-links a:hover {
          color: #fff;
          padding-left: 4px;
        }

        .footer-info li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          line-height: 1.4;
        }

        .info-icon {
          color: var(--primary);
          margin-top: 2px;
          flex-shrink: 0;
        }

        .hover-accent:hover {
          color: #fff;
        }

        .highlight-text {
          color: #fff;
          font-weight: 600;
        }

        .footer-bottom {
          border-top: 1px solid #1e1e24;
          padding-top: 30px;
          font-size: 0.85rem;
        }

        .bottom-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .bottom-links {
          display: flex;
          gap: 24px;
        }

        .bottom-links a {
          color: #a0a0ab;
        }

        .bottom-links a:hover {
          color: #fff;
        }
      `}</style>
    </footer>
  );
}

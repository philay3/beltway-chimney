'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Calendar, Menu, X, CreditCard } from 'lucide-react';

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

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Book', href: '/appointments', icon: Calendar },
    { name: 'Pay', href: '/pay', icon: CreditCard },
  ];

  return (
    <header className="glass-nav">
      <div className="container nav-container">
        <Link href="/" className="nav-logo" onClick={() => setMobileMenuOpen(false)}>
          <BeltwayLogo />
          <span className="logo-text">
            Beltway <span className="logo-accent">Chimney</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                {item.icon && <item.icon className="nav-item-icon" />}
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Actions */}
        <div className="nav-actions">
          <a href="tel:240-241-3439" className="phone-cta">
            <Phone className="phone-icon animate-pulse" />
            <span>240-241-3439</span>
          </a>
          <Link href="/appointments" className="btn btn-primary nav-book-btn">
            Schedule Now
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer animate-fade-in-up">
          <nav className="mobile-nav">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`mobile-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.icon && <item.icon size={20} />}
                  <span>{item.name}</span>
                </Link>
              );
            })}
            <div className="mobile-cta-group">
              <a href="tel:240-241-3439" className="phone-cta">
                <Phone size={18} />
                <span>240-241-3439</span>
              </a>
              <Link
                href="/appointments"
                className="btn btn-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Schedule Appointment
              </Link>
            </div>
          </nav>
        </div>
      )}

      <style jsx>{`
        .glass-nav {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(18, 18, 20, 0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          height: 190px;
          display: flex;
          align-items: center;
          color: #fdfbf7;
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .logo-svg {
          width: 44px;
          height: 44px;
          filter: drop-shadow(0 0 6px rgba(230, 28, 36, 0.3));
        }

        .logo-text {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.4rem;
          letter-spacing: -0.5px;
        }

        .logo-accent {
          color: var(--primary);
        }

        .desktop-nav {
          display: flex;
          gap: 32px;
          align-items: center;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.95rem;
          font-weight: 500;
          color: #a0a0ab;
          transition: var(--transition);
        }

        .nav-link:hover, .nav-link.active {
          color: #ffffff;
        }

        .nav-link.active {
          border-bottom: 2px solid var(--primary);
          padding-bottom: 4px;
        }

        .nav-item-icon {
          width: 16px;
          height: 16px;
          color: var(--primary);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .phone-cta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          color: var(--secondary);
          font-size: 0.95rem;
        }

        .phone-icon {
          width: 18px;
          height: 18px;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .animate-pulse {
          animation: pulse 2s infinite ease-in-out;
        }

        :global(.nav-book-btn) {
          padding: 10px 20px;
          font-size: 0.85rem;
        }

        .mobile-toggle {
          display: none;
          background: transparent;
          border: none;
          color: #fdfbf7;
          cursor: pointer;
        }

        /* Drawer */
        .mobile-drawer {
          position: absolute;
          top: 190px;
          left: 0;
          right: 0;
          background: #1e1e24;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 24px;
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .mobile-link {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          color: #a0a0ab;
          padding: 8px 0;
        }

        .mobile-link.active {
          color: #fff;
          border-left: 3px solid var(--primary);
          padding-left: 8px;
        }

        .mobile-cta-group {
          margin-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        @media (max-width: 768px) {
          .desktop-nav, :global(.nav-book-btn) {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
        @media (max-width: 480px) {
          .logo-text   { font-size: 1.15rem; }
          .nav-actions { gap: 10px; }

          .phone-cta span { display: none; }          /* hide the number, keep the icon */
          .phone-cta {
            color: var(--primary);
            gap: 0;
            padding: 9px;
            min-width: 42px;
            min-height: 42px;
            justify-content: center;
            border-radius: 50%;
            background: rgba(230, 28, 36, 0.12);
          }
        }
        @media (max-width: 360px) {
          .phone-cta { display: none; }               /* ultra-narrow: drawer has the number */
        }
      `}</style>
    </header>
  );
}

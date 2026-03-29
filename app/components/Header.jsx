"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

const councilConfig = {
  "/Clubs/Academic": {
    logo: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1774034302/WhatsApp_Image_2026-03-20_at_22.28.16_ba88mk.jpg",
    label: "Academic Council",
  },
  "/Clubs/Cultural": {
    logo: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1774034435/IMG_7874_yknzvz.png",
    label: "Cultural Council",
  },
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const activeCouncil = councilConfig[pathname] ?? null;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navItems = [
    { label: "Home",             href: "/" },
    { label: "General Council",  href: "/Clubs/General" },
    { label: "Academic Council", href: "/Clubs/Academic" },
    { label: "Cultural Council", href: "/Clubs/Cultural" },
    { label: "Sports Council",   href: "/Clubs/Sports" },
    { label: "Hostels",          href: "/hostels" },
    { label: "Messes",           href: "/messes" },
    { label: "Flagship Events",  href: "/Flagship-events" },
    { label: "Announcements",    href: "/announcements" },
    { label: "Team",             href: "/Team" },
    { label: "Contact Us",       href: "/Contact-Us" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Outfit:wght@300;400;500;600&display=swap');

        :root {
          --iitj-blue:       #003087;
          --iitj-blue-dark:  #001f5c;
          --iitj-blue-mid:   #00419e;
          --iitj-saffron:    #FF6B00;
          --iitj-saffron-lt: #FF8C3A;
          --iitj-white:      #ffffff;
          --iitj-offwhite:   #f4f7ff;
          --iitj-text-nav:   rgba(255,255,255,0.88);
        }

        .sac-header * { box-sizing: border-box; margin: 0; padding: 0; }

        .sac-header {
          font-family: 'Outfit', sans-serif;
          position: sticky;
          top: 0;
          z-index: 100;
          background: var(--iitj-white);
          transition: box-shadow 0.4s ease;
        }
        .sac-header.scrolled {
          box-shadow: 0 6px 32px rgba(0, 48, 135, 0.18);
        }
        .sac-header:not(.scrolled) {
          box-shadow: 0 2px 12px rgba(0, 48, 135, 0.10);
        }

        /* Tricolor top bar */
        .tricolor-bar {
          display: flex;
          height: 4px;
        }
        .tricolor-bar span { flex: 1; }
        .tricolor-bar .tc-saffron { background: #FF9933; }
        .tricolor-bar .tc-white   { background: #ffffff; border-top: 1px solid #e0e0e0; }
        .tricolor-bar .tc-green   { background: #138808; }

        /* ── Top row: 3-column grid ── */
        .header-top {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          padding: 14px 36px;
          background: var(--iitj-white);
          position: relative;
        }

        /* LEFT: IIT Jammu logo */
        .iit-logo-link {
          justify-self: start;
          display: block;
          transition: transform 0.28s ease;
        }
        .iit-logo-link:hover { transform: scale(1.05); }

        /* CENTER: SAC logo | text | Sports Council logo */
        .brand-center {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 18px;
        }

        /* Each logo wrapper — no animation rings */
        .logo-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 95px;
          height: 95px;
          flex-shrink: 0;
        }

        /* Text block between the two logos */
        .brand-text-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }

        .brand-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          color: var(--iitj-blue);
          text-align: center;
          line-height: 1;
          white-space: nowrap;
        }

        .brand-sub {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--iitj-saffron);
          white-space: nowrap;
        }
        .brand-sub::before,
        .brand-sub::after {
          content: '';
          display: block;
          width: 24px;
          height: 1.5px;
          background: var(--iitj-saffron);
          opacity: 0.6;
          border-radius: 2px;
        }

        /* Logo label below each logo */
        .logo-label {
          font-size: 0.52rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--iitj-blue);
          text-align: center;
          margin-top: 4px;
          opacity: 0.7;
        }

        .logo-col {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* ── RIGHT: Dynamic council logo slot ── */
        .council-logo-slot {
          justify-self: end;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 96px;
        }

        .council-logo-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0;
          transform: translateX(14px) scale(0.88);
          transition: opacity 0.38s ease, transform 0.38s ease;
          pointer-events: none;
        }
        .council-logo-slot.visible .council-logo-inner {
          opacity: 1;
          transform: translateX(0) scale(1);
          pointer-events: auto;
        }

        /* Mobile menu button */
        .mobile-menu-btn {
          display: none;
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          align-items: center;
          justify-content: center;
          background: var(--iitj-offwhite);
          border: 1.5px solid rgba(0, 48, 135, 0.2);
          border-radius: 10px;
          padding: 8px;
          cursor: pointer;
          color: var(--iitj-blue);
          transition: all 0.22s ease;
        }
        .mobile-menu-btn:hover {
          background: var(--iitj-blue);
          border-color: var(--iitj-blue);
          color: white;
        }

        /* ── Blue nav band ── */
        .nav-band {
          background: linear-gradient(135deg, var(--iitj-blue-dark) 0%, var(--iitj-blue) 60%, var(--iitj-blue-mid) 100%);
          position: relative;
          overflow: hidden;
        }
        .nav-band::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            -55deg,
            transparent,
            transparent 40px,
            rgba(255,255,255,0.015) 40px,
            rgba(255,255,255,0.015) 80px
          );
          pointer-events: none;
        }
        .nav-band::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg,
            transparent,
            var(--iitj-saffron) 20%,
            var(--iitj-saffron-lt) 50%,
            var(--iitj-saffron) 80%,
            transparent
          );
          opacity: 0.7;
        }

        .desktop-nav {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 2px;
          padding: 9px 32px 11px;
          position: relative;
        }

        .nav-link {
          position: relative;
          font-size: 0.78rem;
          font-weight: 400;
          letter-spacing: 0.04em;
          padding: 6px 14px;
          border-radius: 5px;
          color: var(--iitj-text-nav);
          text-decoration: none;
          transition: color 0.2s ease, background 0.2s ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 55%;
          height: 2px;
          background: var(--iitj-saffron);
          border-radius: 2px;
          transition: transform 0.25s ease;
        }
        .nav-link:hover {
          color: #ffffff;
          background: rgba(255,255,255,0.1);
        }
        .nav-link:hover::after { transform: translateX(-50%) scaleX(1); }

        .nav-link.active {
          color: #ffffff;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.14);
          border: 1px solid rgba(255,255,255,0.22);
          box-shadow: 0 2px 12px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.1);
        }
        .nav-link.active::after { transform: translateX(-50%) scaleX(1); }

        /* ── Mobile menu ── */
        .mobile-menu {
          background: linear-gradient(180deg, var(--iitj-blue) 0%, var(--iitj-blue-dark) 100%);
          border-top: 2px solid var(--iitj-saffron);
          padding: 14px 0 22px;
          animation: slideDown 0.26s ease;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mobile-menu-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }
        .mobile-nav-link {
          font-size: 0.88rem;
          font-weight: 400;
          color: rgba(255,255,255,0.82);
          text-decoration: none;
          padding: 10px 32px;
          border-radius: 8px;
          width: 82%;
          text-align: center;
          letter-spacing: 0.04em;
          transition: background 0.2s, color 0.2s;
        }
        .mobile-nav-link:hover {
          background: rgba(255,255,255,0.1);
          color: #ffffff;
        }
        .mobile-nav-link.active {
          background: rgba(255,255,255,0.15);
          color: #ffffff;
          font-weight: 600;
          border: 1px solid rgba(255,255,255,0.22);
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .brand-center { gap: 10px; }
          .logo-wrap    { width: 75px; height: 75px; }
          .brand-title  { font-size: 1rem; letter-spacing: 0.14em; }
        }

        @media (max-width: 768px) {
          .mobile-menu-btn    { display: flex; }
          .desktop-nav        { display: none; }
          .header-top         { padding: 12px 16px; padding-right: 56px; }
          .council-logo-slot  { display: none; }
          .brand-center       { gap: 12px; }
          .logo-wrap          { width: 68px; height: 68px; }
          .brand-title        { font-size: 0.9rem; }
        }

        @media (max-width: 480px) {
          .logo-label  { display: none; }
          .brand-title { font-size: 0.82rem; letter-spacing: 0.1em; }
        }
      `}</style>

      <header className={`sac-header${scrolled ? " scrolled" : ""}`}>

        {/* Tricolor strip */}
        <div className="tricolor-bar">
          <span className="tc-saffron" />
          <span className="tc-white" />
          <span className="tc-green" />
        </div>

        {/* Top row */}
        <div className="header-top">

          {/* LEFT: IIT Jammu Logo */}
          <Link href="https://www.iitjammu.ac.in/" className="iit-logo-link" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://res.cloudinary.com/dabviijid/image/upload/v1765904866/fpaupa6aw4eid7vza2h4.png"
              alt="IIT Jammu Logo"
              width={180}
              height={100}
              priority
            />
          </Link>

          {/* CENTER: SAC Logo | Brand Text | Sports Council Logo */}
          <div className="brand-center">

            {/* SAC Logo */}
            <div className="logo-col">
              <div className="logo-wrap">
                <Image
                  src="https://res.cloudinary.com/dabviijid/image/upload/v1773993041/WhatsApp_Image_2026-03-11_at_11.24.42_AM-removebg-preview_tddjlb.png"
                  alt="Student Affairs Council Logo"
                  width={120}
                  height={120}
                />
              </div>
              <span className="logo-label">Student Affairs</span>
            </div>

            {/* Brand Text */}
            <div className="brand-text-block">
              <p className="brand-title">STUDENT AFFAIRS</p>
              <p className="brand-sub">IIT Jammu</p>
            </div>

            {/* Sports Council Logo */}
            <div className="logo-col">
              <div className="logo-wrap">
                <Image
                  src="https://res.cloudinary.com/dveqd1vm1/image/upload/v1774033659/Untitled_460_x_800_px_xklc46.png"
                  alt="Sports Council Logo"
                  width={85}
                  height={85}
                />
              </div>
              <span className="logo-label">Sports Council</span>
            </div>

          </div>

          {/* RIGHT: Dynamic council logo */}
          <div className={`council-logo-slot${activeCouncil ? " visible" : ""}`}>
            <div className="council-logo-inner">
              {activeCouncil && (
                <div className="logo-col">
                  <div className="logo-wrap">
                    <Image
                      src={activeCouncil.logo}
                      alt={`${activeCouncil.label} Logo`}
                      width={85}
                      height={85}
                    />
                  </div>
                  <span className="logo-label">{activeCouncil.label}</span>
                </div>
              )}
            </div>
          </div>

          {/* Mobile hamburger */}
          <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>

        </div>

        {/* Blue nav band */}
        <div className="nav-band">
          <nav className="desktop-nav">
            {navItems.map((item, idx) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className={`nav-link${isActive ? " active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-inner">
              {navItems.map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`mobile-nav-link${isActive ? " active" : ""}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}

      </header>
    </>
  );
};

export default Header;
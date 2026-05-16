import React, { useState, useEffect } from "react";
import "./Home.css";
import goodOne from "../../assets/goodone.jpg";
import craftImage from "../../assets/interior5.jpg";
import logo from "../../assets/logo.jpg";
import video from "../../assets/video1.mp4";

const CALL_NUMBER = "9866858310";
const CALL_HREF = "tel:+919866858310";
const WHATSAPP_DISPLAY = "+91 81434 23272";
const WHATSAPP_HREF = "https://wa.me/918143423272";
const INSTAGRAM_URL =
  "https://instagram.com/mssports1225/profilecard/?igshid=dHRjZDJyM2p1ajF1";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="ms-home">
      <header className={`ms-header ${scrolled ? "ms-header--scrolled" : ""}`}>
        <nav className="ms-nav">
          <a href="#home" className="ms-logo" onClick={closeMenu}>
            <img src={logo} alt="MS Sports logo" />
            <span>MS SPORTS</span>
          </a>

          <ul className="ms-nav-links ms-nav-links--desktop">
            <li>
              <a href="#aboutUs">About</a>
            </li>
            <li>
              <a href="#why">Why Us</a>
            </li>
            <li>
              <a href="#customize">Customize</a>
            </li>
            <li>
              <a href="#contact" className="ms-nav-cta">
                <i className="fa-solid fa-phone" aria-hidden="true" />
                Contact
              </a>
            </li>
          </ul>

          <button
            type="button"
            className="ms-menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i
              className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}
              aria-hidden="true"
            />
          </button>
        </nav>

        {menuOpen && (
          <div className="ms-nav-mobile">
            <a href="#aboutUs" onClick={closeMenu}>
              About
            </a>
            <a href="#why" onClick={closeMenu}>
              Why Us
            </a>
            <a href="#customize" onClick={closeMenu}>
              Customize
            </a>
            <a href="#contact" className="ms-nav-cta" onClick={closeMenu}>
              Contact
            </a>
          </div>
        )}
      </header>

      <section className="ms-hero" id="home">
        <div className="ms-hero-content">
          <span className="ms-hero-badge">Premium Cricket Equipment</span>
          <h1>Crafted for Performance, Designed for Champions</h1>
          <p className="ms-hero-sub">
            Pure Kashmir willow bats — lightweight, well balanced, and built for
            every shot. Quality you can trust, delivered across India.
          </p>
          <div className="ms-hero-actions">
            <a href={CALL_HREF} className="ms-btn ms-btn--primary">
              <i className="fa-solid fa-phone" aria-hidden="true" />
              Call {CALL_NUMBER}
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              className="ms-btn ms-btn--whatsapp"
            >
              <i className="fa-brands fa-whatsapp" aria-hidden="true" />
              WhatsApp Us
            </a>
            <a href="#aboutUs" className="ms-btn ms-btn--outline">
              Explore Bats
            </a>
          </div>
        </div>
        <div className="ms-hero-visual">
          <img src={goodOne} alt="MS Sports premium cricket bat" />
        </div>
      </section>

      <section className="ms-features" id="aboutUs">
        <div className="ms-features-inner">
          <div>
            <p className="ms-section-label">Our Craft</p>
            <h2>Crafted With Excellent Material</h2>
            <ul className="ms-feature-list">
              <li>
                <i className="fa-solid fa-check" aria-hidden="true" />
                Experience the perfect swing, every time
              </li>
              <li>
                <i className="fa-solid fa-check" aria-hidden="true" />
                Where quality meets affordability
              </li>
              <li>
                <i className="fa-solid fa-check" aria-hidden="true" />
                Pure Kashmir willow — lightweight &amp; well balanced
              </li>
              <li>
                <i className="fa-solid fa-check" aria-hidden="true" />
                All-over India delivery
              </li>
            </ul>
          </div>
          <div className="ms-features-visual">
            <img src={goodOne} alt="MS Sports Kashmir willow cricket bat" />
          </div>
        </div>
      </section>

      <section className="ms-why" id="why">
        <h2>Why Choose MS Sports?</h2>
        <div className="ms-why-grid">
          <article className="ms-why-card">
            <i className="fa-solid fa-bag-shopping" aria-hidden="true" />
            <h3>Easy to Shop</h3>
            <p>
              Simple ordering and direct contact — we reach you as soon as
              possible whenever you need us.
            </p>
          </article>
          <article className="ms-why-card">
            <i className="fa-solid fa-headset" aria-hidden="true" />
            <h3>24/7 Support</h3>
            <p>
              The MS Sports team is available whenever you want to reach out,
              day or night.
            </p>
          </article>
          <article className="ms-why-card">
            <div className="ms-stars" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fa-solid fa-star" aria-hidden="true" />
              ))}
            </div>
            <h3>Best Quality</h3>
            <p>
              Carefully selected materials and full customization — build your
              bat exactly how you want it.
            </p>
          </article>
        </div>
      </section>

      <section className="ms-video-section" id="customize">
        <h2>Customize Your Bats</h2>
        <p>See how we shape excellence — from willow to winning edge.</p>
        <div className="ms-video-wrap">
          <video controls playsInline preload="metadata">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="ms-craft">
        <div className="ms-craft-image">
          <img src={craftImage} alt="MS Sports bat craftsmanship" />
        </div>
        <div className="ms-craft-content">
          <p className="ms-section-label">Excellence in Every Stroke</p>
          <h2>Crafting Excellence for Every Cricket Enthusiast</h2>
          <p>
            With a commitment to quality and customer satisfaction, we empower
            cricket enthusiasts with equipment that inspires confidence and
            precision on the field. Whether you&apos;re a budding cricketer or a
            seasoned player, our bats are built to help you ace every shot.
          </p>
        </div>
      </section>

      <footer className="ms-footer" id="contact">
        <div className="ms-footer-inner">
          <h2>Get in Touch</h2>
          <p className="ms-footer-tagline">
            Thank you for choosing MS Sports — tell us how we can help you.
          </p>

          <div className="ms-contact-grid">
            <a href={CALL_HREF} className="ms-contact-card">
              <i className="fa-solid fa-phone" aria-hidden="true" />
              <span className="ms-contact-label">For Calls</span>
              <span className="ms-contact-value">{CALL_NUMBER}</span>
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              className="ms-contact-card"
            >
              <i className="fa-brands fa-whatsapp" aria-hidden="true" />
              <span className="ms-contact-label">For WhatsApp</span>
              <span className="ms-contact-value">{WHATSAPP_DISPLAY}</span>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="ms-contact-card"
            >
              <i className="fa-brands fa-instagram" aria-hidden="true" />
              <span className="ms-contact-label">Instagram</span>
              <span className="ms-contact-value">@mssports1225</span>
            </a>
          </div>

          <p className="ms-footer-bottom">
            &copy; {new Date().getFullYear()} MS Sports. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

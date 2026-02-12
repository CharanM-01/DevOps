import React, { useEffect } from "react";
import "./App.css";

export default function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">BrandX</h2>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">Build Stunning Websites 🚀</h1>
        <p className="hero-subtitle">
          Modern, animated, and fully responsive React landing page.
        </p>
        <div className="hero-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section fade-in">
        <h2>Our Features</h2>
        <div className="cards">
          <div className="card">
            <h3>⚡ Fast</h3>
            <p>Optimized performance and lightning-fast loading.</p>
          </div>
          <div className="card">
            <h3>🎨 Modern Design</h3>
            <p>Beautiful UI with smooth animations.</p>
          </div>
          <div className="card">
            <h3>📱 Responsive</h3>
            <p>Works perfectly on all devices.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section fade-in">
        <h2>About Us</h2>
        <p>
          We create high-quality web experiences using modern technologies.
          Our mission is to help businesses stand out online.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section fade-in">
        <h2>Contact Us</h2>
        <p>Email: contact@brandx.com</p>
        <button className="primary-btn">Send Message</button>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 BrandX. All rights reserved.</p>
      </footer>
    </div>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/news-events", label: "News & Events" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-content">
          <Link href="/" className="nav-logo">
            <div className="nav-logo-text">
              <span className="serif-s">MS</span>
              <span className="serif-s absolute">MS</span>
            </div>
            <div className="nav-logo-background" />
          </Link>

          <div className={`nav-menu-wrapper ${mobileMenuOpen ? "mobile-open" : ""}`}>
            <div className="nav-menu">
              <div className="nav-menu-items">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="nav-menu-item">
                    <div className="nav-menu-item-text">
                      <span className="regular-s">{item.label}</span>
                      <span className="regular-s absolute">{item.label}</span>
                    </div>
                    <div className="nav-menu-item-background" />
                  </Link>
                ))}
              </div>

              <Link href="/contact" className="button small-button" style={{ flex: "0 auto" }}>
                <div className="button-text-wrapper">
                  <span className="regular-s">Contact Us</span>
                  <span className="regular-s absolute">Contact Us</span>
                </div>
                <div className="button-background bg-primary" />
              </Link>
            </div>
          </div>

          <button
            className="hamburger-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Image
              src="/images/Menu.svg"
              alt=""
              width={24}
              height={24}
              className="menu-icon open-menu"
            />
            <Image
              src="/images/Close.svg"
              alt=""
              width={24}
              height={24}
              className="menu-icon close-menu"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

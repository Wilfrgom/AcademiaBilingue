import Link from "next/link";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/news-events", label: "News & Events" },
  { href: "/contact", label: "Contact Us" },
];

const contactInfo = [
  { label: "Phone", value: "(555) 123-4567" },
  { label: "Email", value: "info@mindspringacademy.edu" },
  { label: "Address", value: "123 Education Lane" },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo-block">
        <div className="footer-logo-text-wrapper">
          <span className="large-text">MS</span>
        </div>
        <span className="serif-m">MindSpring Academy</span>
      </div>

      <div className="footer-content">
        <div className="footer-menu">
          <div className="footer-menu-block">
            <span className="serif-m">Quick Links</span>
            <div className="footer-menu-items">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="footer-menu-item">
                  <span className="regular-s">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-menu-block">
            <span className="serif-m">Contact Info</span>
            <div className="footer-menu-items">
              {contactInfo.map((info) => (
                <div key={info.label} className="footer-menu-item">
                  <span className="regular-s color-grey">{info.label}: </span>
                  <span className="regular-s">{info.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <span className="regular-s">
            &copy; {new Date().getFullYear()} MindSpring Academy. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

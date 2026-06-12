import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { HiHeart } from 'react-icons/hi';
import './Footer.css';

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/mariam2sakr', label: 'GitHub' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/mariam-2-sakr/', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://www.instagram.com/mariiam_sakrr_/', label: 'Instagram' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__top">
          <a href="#home" className="footer__logo">
            <span className="footer__logo-bracket">&lt; </span>
            <span className="footer__logo-name">Mariam</span>
            <span className="footer__logo-slash"> /</span>
            <span className="footer__logo-bracket">&gt;</span>
          </a>

          <div className="footer__socials">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label={link.label}
              >
                <link.icon />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Mariam. All rights reserved.
          </p>
          <p className="footer__made">
            Made with <HiHeart className="footer__heart" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
}

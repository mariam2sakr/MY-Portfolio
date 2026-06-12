import { useState } from 'react';
import { motion } from 'motion/react';
import Swal from 'sweetalert2';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import Button from '../common/Button';
import {
  HiMail,
  HiLocationMarker,
  HiPhone,
} from 'react-icons/hi';
import { FaGithub, FaLinkedinIn, FaInstagram, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const contactInfo = [
  { icon: HiMail, label: 'Email', value: 'mariiamsakr222@gmail.com', href: 'mailto:mariiamsakr222@gmail.com' },
  { icon: HiLocationMarker, label: 'Location', value: 'Dakahlia, Egypt', href: null },
  { icon: HiPhone, label: 'Phone', value: '+20 102 291 3824', href: 'tel:+201022913824' },
];

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/mariam2sakr', label: 'GitHub' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/mariam-2-sakr/', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://www.instagram.com/mariiam_sakrr_/', label: 'Instagram' }
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const isLight = document.documentElement.getAttribute('data-theme') === 'light';

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_ewrgmli',
          template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_7xff448',
          user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'XxV-b3Ek67t4p-tye',
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            name: formData.name,
            email: formData.email,
          },
        }),
      });

      if (response.ok) {
        setIsSent(true);
        setTimeout(() => setIsSent(false), 3000);
        Swal.fire({
          title: 'Sent successfully!',
          text: 'Thanks for contacting me, I will get back to you as soon as possible.',
          icon: 'success',
          confirmButtonText: 'OK',
          background: isLight ? '#ffffff' : '#12121a',
          color: isLight ? '#0f172a' : '#f1f5f9',
          confirmButtonColor: '#6c63ff',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorText = await response.text();
        throw new Error(`Failed to send email: ${response.status} - ${errorText}`);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      Swal.fire({
        title: 'Failed to send!',
        text: `${error.message}. Please try again or reach out directly.`,
        icon: 'error',
        confirmButtonText: 'OK',
        background: isLight ? '#ffffff' : '#12121a',
        color: isLight ? '#0f172a' : '#f1f5f9',
        confirmButtonColor: '#ea4335',
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <SectionTitle
          subtitle="Get In Touch"
          title="Let's Work Together"
          description="Have a project in mind? Feel free to reach out. I'm always excited to collaborate on new ideas."
        />

        <div className="contact__content">
          {/* Contact Info Side */}
          <ScrollReveal direction="left" className="contact__info-side">
            <div className="contact__info-card glass">
              <h3 className="contact__info-title">Contact Information</h3>
              <p className="contact__info-subtitle">
                Fill out the form and I'll get back to you as soon as possible.
              </p>

              <div className="contact__info-list">
                {contactInfo.map((item) => (
                  <div key={item.label} className="contact__info-item">
                    <div className="contact__info-icon-wrapper">
                      <item.icon className="contact__info-icon" />
                    </div>
                    <div>
                      <span className="contact__info-label">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="contact__info-value">
                          {item.value}
                        </a>
                      ) : (
                        <span className="contact__info-value">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact__socials">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-link"
                    aria-label={link.label}
                  >
                    <link.icon />
                  </a>
                ))}
              </div>

              {/* Decorative */}
              <div className="contact__info-decor" />
            </div>
          </ScrollReveal>

          {/* Form Side */}
          <ScrollReveal direction="right" className="contact__form-side">
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-group">
                <label htmlFor="contact-name" className="contact__label">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Mariam Sakr"
                  required
                  className="contact__input"
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="contact-email" className="contact__label">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="mariam@example.com"
                  required
                  className="contact__input"
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="contact-message" className="contact__label">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="contact__input contact__textarea"
                />
              </div>

              <Button type="submit" variant="primary" icon={FaPaperPlane} disabled={isSending}>
                {isSending ? 'Sending...' : isSent ? 'Message Sent! ✓' : 'Send Message'}
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

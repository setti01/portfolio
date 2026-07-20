import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MapPin, Mail, Phone, ArrowUpRight, Layout } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/design8setti/', label: 'Instagram' },
    { icon: Layout, href: 'https://behance.net/b30072001', label: 'Behance' },
  ];

  const navLinks = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.portfolio'), path: '/portfolio' },
    { label: t('nav.about'), path: '/about' },
    { label: t('nav.services'), path: '/services' },
    { label: t('nav.contact'), path: '/contact' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-2xl font-bold tracking-tight mb-6 block">
              Bilal<span className="text-primary">.</span>
            </Link>
            <p className="text-secondary-foreground/70 leading-relaxed mb-6">
              {t('footer.bio')}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
  <a
    key={social.label}
    href={social.href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={social.label}
    className="w-10 h-10 rounded-full bg-background/50 hover:bg-primary text-secondary-foreground hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
  >
    <social.icon className="w-4 h-4" />
  </a>
))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">{t('nav.home') === 'Home' ? 'Navigation' : 'Navigation'}</h4>
            <ul className="space-y-4">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {item.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">{t('footer.contactTitle')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-secondary-foreground/70">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{t('contact.locationValue')}</span>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/70">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:settibilal1@gmail.com" className="hover:text-primary transition-colors">settibilal1@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/70">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+212620983108" className="hover:text-primary transition-colors">+212 620 983 108</a>
              </li>
            </ul>
          </div>

          {/* Portfolio */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">{t('footer.portfolioTitle')}</h4>
            <p className="text-secondary-foreground/70 mb-4">
              {t('footer.portfolioDesc')}
            </p>
            <Button asChild variant="default" className="w-full gap-2">
              <a href="https://behance.net/b30072001" target="_blank" rel="noopener noreferrer">
                <Layout className="w-4 h-4" />
                {t('contact.behanceBtn')}
              </a>
            </Button>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary-foreground/50">
          <p>© {currentYear} Bilal ESSATTE. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
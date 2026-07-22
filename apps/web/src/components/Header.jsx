import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Layout, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'es', label: 'ES' },
];

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.portfolio'), path: '/portfolio' },
    { name: t('nav.gallery'), path: '/galerie' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setLangMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border py-3' : 'bg-transparent py-5'}`}>
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold tracking-tight z-10">
            Bilal<span className="text-primary">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  isActive(link.path) ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground border border-border hover:border-primary/50 transition-all duration-200"
              >
                <Globe className="w-4 h-4" />
                {languages.find((l) => l.code === i18n.language)?.label || 'EN'}
              </button>
              {langMenuOpen && (
                <div className="absolute right-0 top-full mt-2 bg-card border border-border rounded-2xl overflow-hidden shadow-lg min-w-[100px]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`block w-full text-left px-4 py-2.5 text-sm transition-colors duration-200 ${
                        i18n.language === lang.code ? 'text-primary bg-primary/5' : 'text-muted-foreground hover:bg-secondary'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Button asChild variant="default" size="sm" className="gap-2 rounded-full px-6">
              <a href="https://behance.net/b30072001" target="_blank" rel="noopener noreferrer">
                <Layout className="w-4 h-4" />
                Behance
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] border-l-border bg-background/95 backdrop-blur-xl">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <div className="flex flex-col gap-6 mt-12">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors duration-200 block ${
                        isActive(link.path) ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Language Switcher */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex gap-2 pt-2 border-t border-border">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-200 ${
                        i18n.language === lang.code
                          ? 'border-primary text-primary bg-primary/5'
                          : 'border-border text-muted-foreground'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                  <Button asChild className="w-full gap-2 mt-4 rounded-full">
                    <a href="https://behance.net/b30072001" target="_blank" rel="noopener noreferrer">
                      <Layout className="w-4 h-4" />
                      Portfolio Behance
                    </a>
                  </Button>
                </motion.div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Layout } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

const ContactPage = () => {
  const { t } = useTranslation();

  const contactInfo = [
    { icon: Phone, label: t('contact.infoPhone'), value: '+212 620 983 108', href: 'tel:+212620983108' },
    { icon: Mail, label: t('contact.infoEmail'), value: 'settibilal1@gmail.com', href: 'mailto:settibilal1@gmail.com' },
    { icon: MapPin, label: t('contact.infoLocation'), value: t('contact.locationValue'), href: null },
  ];

  return (
    <>
      <Helmet>
        <title>{t('contact.title')}</title>
        <meta name="description" content={t('contact.metaDesc')} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-32 pb-24">
          <div className="container-custom">
            {/* 1. HERO SECTION */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="text-center mb-16 pt-10"
            >
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">{t('contact.heroTitle')}</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t('contact.heroDesc')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* 2. CONTACT FORM */}
              <motion.div
                initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-3 bg-card rounded-3xl p-8 md:p-10 border border-border shadow-xl"
              >
                <h2 className="text-2xl font-bold mb-8">{t('contact.formTitle')}</h2>
                <ContactForm />
              </motion.div>

              {/* 3. CONTACT INFO & BEHANCE */}
              <motion.div
                initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-2 space-y-8"
              >
                <div className="bg-card rounded-3xl p-8 border border-border">
                  <h2 className="text-2xl font-bold mb-8">{t('contact.infoTitle')}</h2>
                  <div className="space-y-6">
                    {contactInfo.map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} className="font-medium hover:text-primary transition-colors">{item.value}</a>
                          ) : (
                            <p className="font-medium">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-card rounded-3xl p-8 border border-border bg-gradient-to-br from-card to-primary/5">
                  <h2 className="text-2xl font-bold mb-4">{t('contact.portfolioTitle')}</h2>
                  <p className="text-muted-foreground mb-6">
                    {t('contact.portfolioDesc')}
                  </p>
                  <a
                    href="https://behance.net/b30072001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full h-12 rounded-xl bg-foreground text-background hover:bg-foreground/90 transition-colors font-medium"
                  >
                    <Layout className="w-5 h-5" />
                    {t('contact.behanceBtn')}
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
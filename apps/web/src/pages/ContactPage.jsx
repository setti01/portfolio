
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Layout } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

const ContactPage = () => {
  const contactInfo = [
    { icon: Phone, label: 'Téléphone / WhatsApp', value: '+212 620 983 108', href: 'tel:+212620983108' },
    { icon: Mail, label: 'Email', value: 'settibilal1@gmail.com', href: 'mailto:settibilal1@gmail.com' },
    { icon: MapPin, label: 'Localisation', value: 'Tanger, Maroc', href: null },
  ];

  return (
    <>
      <Helmet>
        <title>Contact - Bilal ESSATTE | Discutons de votre projet</title>
        <meta name="description" content="Contactez Bilal ESSATTE par email, téléphone ou via le formulaire pour collaborer sur votre prochain projet de design." />
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
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Contactez-<span className="text-primary">moi</span></h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Vous avez un projet en tête ou souhaitez en savoir plus sur mes services ? N'hésitez pas à me joindre directement.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* 2. CONTACT FORM */}
              <motion.div
                initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-3 bg-card rounded-3xl p-8 md:p-10 border border-border shadow-xl"
              >
                <h2 className="text-2xl font-bold mb-8">Envoyer un message</h2>
                <ContactForm />
              </motion.div>

              {/* 3. CONTACT INFO & BEHANCE */}
              <motion.div
                initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-2 space-y-8"
              >
                <div className="bg-card rounded-3xl p-8 border border-border">
                  <h2 className="text-2xl font-bold mb-8">Informations de contact</h2>
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
                  <h2 className="text-2xl font-bold mb-4">Portfolio Complet</h2>
                  <p className="text-muted-foreground mb-6">
                    Retrouvez mes études de cas détaillées et inspirations sur ma page Behance.
                  </p>
                  <a
                    href="https://behance.net/b30072001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full h-12 rounded-xl bg-foreground text-background hover:bg-foreground/90 transition-colors font-medium"
                  >
                    <Layout className="w-5 h-5" />
                    Voir mon profil Behance
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

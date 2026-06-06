
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const WeProdPage = () => {
  const relatedProjects = [
    {
      title: 'Lamara',
      category: 'Web Design',
      link: '/portfolio/lamara',
    },
    {
      title: 'Omega Sushi Tanger',
      category: 'Branding & Social',
      link: '/portfolio/omega-sushi',
    },
  ];

  return (
    <>
      <Helmet>
        <title>WeProd Maroc - Design & Web | Bilal Essatte</title>
        <meta
          name="description"
          content="Découvrez le projet WeProd Maroc - Création d'une plateforme web complète avec design moderne."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-32 pb-24">
          <div className="container-custom">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link to="/" className="hover:text-primary transition-colors duration-200">
                Accueil
              </Link>
              <span>/</span>
              <Link to="/portfolio" className="hover:text-primary transition-colors duration-200">
                Portfolio
              </Link>
              <span>/</span>
              <span className="text-foreground">WeProd Maroc</span>
            </nav>

            <Button asChild variant="ghost" className="mb-8 gap-2">
              <Link to="/portfolio">
                <ArrowLeft className="w-4 h-4" />
                Retour au portfolio
              </Link>
            </Button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">WeProd Maroc</h1>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Tag className="w-4 h-4" />
                  <span>Design & Web Development</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>2024</span>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                Conception et développement d'une plateforme web complète pour WeProd Maroc, agence de production audiovisuelle basée au Maroc.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden mb-16"
            >
              <img
                src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960"
                alt="WeProd Maroc website design showcase"
                className="w-full h-auto"
              />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              <div className="lg:col-span-2 space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold mb-4">L'objectif</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    WeProd Maroc, agence de production audiovisuelle en pleine croissance, avait besoin d'une plateforme web qui reflète leur expertise créative et facilite la présentation de leur portfolio. Le site devait être à la fois visuellement impressionnant et fonctionnel, permettant aux clients potentiels de découvrir facilement leurs services et réalisations.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold mb-4">La réalisation</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    J'ai créé une plateforme web complète qui met en valeur le travail de WeProd :
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-muted-foreground">Design moderne avec focus sur le contenu visuel</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-muted-foreground">Galerie portfolio avec filtres par catégorie</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-muted-foreground">Intégration vidéo optimisée pour performances</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-muted-foreground">Formulaire de contact et système de devis en ligne</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-muted-foreground">Animations et transitions fluides pour une expérience premium</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="rounded-2xl overflow-hidden"
                >
                  <img
                    src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f"
                    alt="WeProd Maroc website interface on multiple devices"
                    className="w-full h-auto"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold mb-4">Performance</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Le nouveau site a transformé la présence en ligne de WeProd Maroc :
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-card rounded-xl p-6 border border-border">
                      <p className="text-3xl font-bold text-primary mb-2">+189%</p>
                      <p className="text-muted-foreground">Demandes de devis</p>
                    </div>
                    <div className="bg-card rounded-xl p-6 border border-border">
                      <p className="text-3xl font-bold text-primary mb-2">+143%</p>
                      <p className="text-muted-foreground">Temps passé sur le site</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-6">
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="text-lg font-semibold mb-4">Informations projet</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Client</p>
                      <p className="font-medium">WeProd Maroc</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Services</p>
                      <p className="font-medium">Design, Développement, UX/UI</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Technologies</p>
                      <p className="font-medium">React, Tailwind CSS, Framer Motion</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Année</p>
                      <p className="font-medium">2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-8">Découvrez aussi</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedProjects.map((project) => (
                  <Link
                    key={project.title}
                    to={project.link}
                    className="group bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-200"
                  >
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.category}</p>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default WeProdPage;


import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const LamaraPage = () => {
  const relatedProjects = [
    {
      title: 'Allinfes',
      category: 'Web Design',
      link: '/portfolio/allinfes',
    },
    {
      title: 'WeProd Maroc',
      category: 'Design & Web',
      link: '/portfolio/weprod',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Lamara - Projet Web Design | Bilal Essatte</title>
        <meta
          name="description"
          content="Découvrez le projet Lamara - Création d'une expérience web élégante et performante."
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
              <span className="text-foreground">Lamara</span>
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Lamara</h1>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Tag className="w-4 h-4" />
                  <span>Web Design & Development</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>2024</span>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                Développement d'une plateforme web élégante pour Lamara, combinant esthétique raffinée et fonctionnalités avancées pour une expérience utilisateur exceptionnelle.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden mb-16"
            >
              <img
                src="https://images.unsplash.com/photo-1617451588899-7ac8679908c7"
                alt="Lamara web design project showcase"
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
                  <h2 className="text-2xl font-bold mb-4">Le contexte</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Lamara cherchait à se démarquer dans un marché compétitif avec une présence en ligne qui reflète leur positionnement premium. L'objectif était de créer une expérience web qui allie élégance visuelle et performance technique, tout en facilitant la découverte de leurs produits et services.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold mb-4">L'approche</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    J'ai développé une solution web complète qui met en valeur l'identité de Lamara à travers :
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-muted-foreground">Interface utilisateur élégante avec animations fluides</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-muted-foreground">Architecture responsive adaptée à tous les écrans</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-muted-foreground">Optimisation SEO pour une meilleure visibilité</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-muted-foreground">Système de gestion de contenu intuitif</span>
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
                    src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960"
                    alt="Lamara website interface details"
                    className="w-full h-auto"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold mb-4">Impact</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Le lancement du nouveau site a généré des résultats significatifs pour Lamara :
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-card rounded-xl p-6 border border-border">
                      <p className="text-3xl font-bold text-primary mb-2">+156%</p>
                      <p className="text-muted-foreground">Engagement utilisateur</p>
                    </div>
                    <div className="bg-card rounded-xl p-6 border border-border">
                      <p className="text-3xl font-bold text-primary mb-2">+92%</p>
                      <p className="text-muted-foreground">Demandes de contact</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-6">
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="text-lg font-semibold mb-4">Informations</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Client</p>
                      <p className="font-medium">Lamara</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Services</p>
                      <p className="font-medium">UX/UI Design, Développement Web</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Technologies</p>
                      <p className="font-medium">React, Next.js, Tailwind CSS</p>
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
              <h2 className="text-2xl font-bold mb-8">Autres projets</h2>
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

export default LamaraPage;

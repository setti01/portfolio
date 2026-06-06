
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const AllinfesPage = () => {
  const relatedProjects = [
    {
      title: 'Lamara',
      category: 'Web Design',
      link: '/portfolio/lamara',
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
        <title>Allinfes - Projet Web Design | Bilal Essatte</title>
        <meta
          name="description"
          content="Découvrez le projet Allinfes - Conception et développement d'un site web moderne et responsive."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-32 pb-24">
          <div className="container-custom">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link to="/" className="hover:text-primary transition-colors duration-200">
                Accueil
              </Link>
              <span>/</span>
              <Link to="/portfolio" className="hover:text-primary transition-colors duration-200">
                Portfolio
              </Link>
              <span>/</span>
              <span className="text-foreground">Allinfes</span>
            </nav>

            {/* Back Button */}
            <Button asChild variant="ghost" className="mb-8 gap-2">
              <Link to="/portfolio">
                <ArrowLeft className="w-4 h-4" />
                Retour au portfolio
              </Link>
            </Button>

            {/* Project Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Allinfes</h1>
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
                Conception et développement d'une plateforme web moderne pour Allinfes, offrant une expérience utilisateur fluide et une interface intuitive.
              </p>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden mb-16"
            >
              <img
                src="https://images.unsplash.com/photo-1695634365024-b7513447e4f0"
                alt="Allinfes web design project showcase"
                className="w-full h-auto"
              />
            </motion.div>

            {/* Project Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              <div className="lg:col-span-2 space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold mb-4">Le défi</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Allinfes avait besoin d'une présence en ligne moderne qui reflète leur expertise et facilite l'interaction avec leurs clients. Le défi était de créer une plateforme à la fois professionnelle et accessible, capable de présenter leurs services de manière claire tout en offrant une navigation intuitive.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold mb-4">La solution</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    J'ai conçu et développé un site web responsive avec une architecture claire et une interface utilisateur moderne. L'approche a mis l'accent sur :
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-muted-foreground">Design responsive optimisé pour tous les appareils</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-muted-foreground">Navigation intuitive et structure de contenu claire</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-muted-foreground">Performance optimisée pour un chargement rapide</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-muted-foreground">Intégration de formulaires de contact et fonctionnalités interactives</span>
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
                    alt="Allinfes website mockup on multiple devices"
                    className="w-full h-auto"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold mb-4">Résultats</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Le nouveau site web a considérablement amélioré la présence en ligne d'Allinfes et l'engagement des utilisateurs :
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-card rounded-xl p-6 border border-border">
                      <p className="text-3xl font-bold text-primary mb-2">+127%</p>
                      <p className="text-muted-foreground">Augmentation du trafic</p>
                    </div>
                    <div className="bg-card rounded-xl p-6 border border-border">
                      <p className="text-3xl font-bold text-primary mb-2">+84%</p>
                      <p className="text-muted-foreground">Taux de conversion</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="text-lg font-semibold mb-4">Détails du projet</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Client</p>
                      <p className="font-medium">Allinfes</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Services</p>
                      <p className="font-medium">Web Design, Développement</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Technologies</p>
                      <p className="font-medium">React, Tailwind CSS, Node.js</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Année</p>
                      <p className="font-medium">2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-8">Projets similaires</h2>
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

export default AllinfesPage;

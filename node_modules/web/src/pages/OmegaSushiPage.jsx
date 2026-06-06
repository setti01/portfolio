
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const OmegaSushiPage = () => {
  const relatedProjects = [
    {
      title: 'WeProd Maroc',
      category: 'Design & Web',
      link: '/portfolio/weprod',
    },
    {
      title: 'Allinfes',
      category: 'Web Design',
      link: '/portfolio/allinfes',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Omega Sushi Tanger - Branding & Social Media | Bilal Essatte</title>
        <meta
          name="description"
          content="Découvrez le projet Omega Sushi Tanger - Création d'identité visuelle et stratégie social media."
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
              <span className="text-foreground">Omega Sushi Tanger</span>
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Omega Sushi Tanger</h1>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Tag className="w-4 h-4" />
                  <span>Branding & Social Media</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>2023</span>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                Création d'une identité visuelle complète et stratégie social media pour Omega Sushi Tanger, restaurant japonais moderne à Tanger.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden mb-16"
            >
              <img
                src="https://images.unsplash.com/photo-1495224814653-94f36c0a31ea"
                alt="Omega Sushi Tanger branding materials"
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
                  <h2 className="text-2xl font-bold mb-4">Le brief</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Omega Sushi Tanger, nouveau restaurant japonais à Tanger, avait besoin d'une identité visuelle forte et d'une présence sur les réseaux sociaux pour se faire connaître et attirer une clientèle locale et touristique. Le défi était de créer une image moderne qui respecte l'authenticité de la cuisine japonaise tout en s'adaptant au marché marocain.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold mb-4">La création</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    J'ai développé une identité visuelle complète et une stratégie de contenu social media :
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-muted-foreground">Logo moderne inspiré de l'esthétique japonaise</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-muted-foreground">Charte graphique complète (couleurs, typographies, éléments visuels)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-muted-foreground">Supports print (menus, cartes de visite, signalétique)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-muted-foreground">Templates Instagram et Facebook pour contenu cohérent</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-muted-foreground">Stratégie de contenu et calendrier éditorial</span>
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
                    src="https://images.unsplash.com/photo-1676276376385-3801c9f0a68e"
                    alt="Omega Sushi social media content examples"
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
                    La nouvelle identité et la stratégie social media ont permis à Omega Sushi de :
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-card rounded-xl p-6 border border-border">
                      <p className="text-3xl font-bold text-primary mb-2">3,847</p>
                      <p className="text-muted-foreground">Followers en 3 mois</p>
                    </div>
                    <div className="bg-card rounded-xl p-6 border border-border">
                      <p className="text-3xl font-bold text-primary mb-2">+214%</p>
                      <p className="text-muted-foreground">Engagement moyen</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-6">
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="text-lg font-semibold mb-4">Détails du projet</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Client</p>
                      <p className="font-medium">Omega Sushi Tanger</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Services</p>
                      <p className="font-medium">Branding, Social Media</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Livrables</p>
                      <p className="font-medium">Logo, Charte graphique, Templates, Stratégie</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Année</p>
                      <p className="font-medium">2023</p>
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
              <h2 className="text-2xl font-bold mb-8">Projets connexes</h2>
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

export default OmegaSushiPage;

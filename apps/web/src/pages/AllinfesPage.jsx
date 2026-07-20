import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const AllinfesPage = () => {
  const { t } = useTranslation();
  const metrics = [
    { value: '100%', label: 'Contrôle indépendant du catalogue produit livré au client dès le lancement' },
    { value: 'WooCommerce', label: 'Système e-commerce complet intégré avec gestion des devis et commandes' },
    { value: 'Mobile-first', label: 'Design responsive optimisé pour tous les appareils et marchés internationaux' },
  ];

  const phases = [
    {
      number: '01',
      title: 'Stratégie & Architecture',
      description: 'Analyse du secteur de l\'approvisionnement hôtelier marocain. Définition de l\'architecture de l\'information, des catégories produits, et du parcours utilisateur pour les acheteurs B2B internationaux.',
    },
    {
      number: '02',
      title: 'Design & Identité Visuelle',
      description: 'Conception d\'une interface premium reflétant le positionnement haut de gamme d\'Allinfes. Typographie, palette de couleurs et système visuel conçus pour inspirer confiance aux clients internationaux.',
    },
    {
      number: '03',
      title: 'Développement & Lancement',
      description: 'Développement WordPress + Elementor + WooCommerce avec workflow de demande de devis, organisation des catégories produits, et optimisation des performances pour un chargement rapide.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Allinfes — Plateforme E-commerce B2B | Bilal Essatte</title>
        <meta name="description" content="Conception et développement d'une plateforme WordPress WooCommerce pour Allinfes, marque marocaine d'approvisionnement hôtelier." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-32 pb-24">
          <div className="container-custom">

            {/* Breadcrumb + Back */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/" className="hover:text-primary transition-colors">{t('project.breadcrumbHome')}</Link>
              <span>/</span>
              <Link to="/portfolio" className="hover:text-primary transition-colors">{t('project.breadcrumbPortfolio')}</Link>
              <span>/</span>
              <span className="text-foreground">Allinfes</span>
            </nav>
            <Button asChild variant="ghost" className="mb-12 gap-2">
              <Link to="/portfolio">
                <ArrowLeft className="w-4 h-4" />
                {t('project.backToPortfolio')}
              </Link>
            </Button>

            {/* HERO SECTION */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-16"
            >
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="text-xs font-mono bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">WordPress</span>
                <span className="text-xs font-mono bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">WooCommerce</span>
                <span className="text-xs font-mono bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">Elementor</span>
                <span className="text-xs font-mono bg-secondary text-secondary-foreground px-3 py-1 rounded-full">Avr 2026 — En cours</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
                Allinfes<span className="text-primary">.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Conception et développement d'une plateforme e-commerce B2B pour la marque marocaine d'approvisionnement hôtelier — un système complet permettant aux hôtels et riads de sourcer leurs équipements directement en ligne.
              </p>
            </motion.div>

            {/* HERO IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-3xl overflow-hidden border border-border mb-24 aspect-video bg-secondary"
            >
              <img
                src="https://res.cloudinary.com/dfonsuqx6/image/upload/q_auto/f_auto/v1780690378/Screenshot_q0g6em.png"
                alt="Allinfes plateforme web"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* CHALLENGE + OUTCOME — 2 columns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
            >
              <div className="bg-card border border-border rounded-3xl p-8">
                <p className="text-xs font-mono text-primary uppercase tracking-widest mb-4">Le défi</p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Allinfes, marque marocaine spécialisée dans l'approvisionnement hôtelier, n'avait aucune présence digitale capable de servir des clients B2B internationaux. Les hôtels et riads ne pouvaient pas accéder au catalogue, demander des devis, ou passer commande en ligne.
                </p>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8">
                <p className="text-xs font-mono text-primary uppercase tracking-widest mb-4">La solution</p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Développement d'une plateforme WordPress + WooCommerce sur mesure avec catalogue produit organisé par catégories, système de demande de devis, et interface conçue pour inspirer confiance aux acheteurs internationaux.
                </p>
              </div>
            </motion.div>

            {/* METRICS GRID */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
            >
              {metrics.map((m, i) => (
                <div key={i} className="bg-card border border-border rounded-3xl p-8 text-center">
                  <p className="text-4xl font-bold text-primary mb-3 font-mono">{m.value}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.label}</p>
                </div>
              ))}
            </motion.div>

            {/* 3-PHASE PROCESS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-24"
            >
              <p className="text-xs font-mono text-primary uppercase tracking-widest mb-8">Processus</p>
              <div className="space-y-6">
                {phases.map((phase, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: i * 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 bg-card border border-border rounded-3xl p-8 items-start"
                  >
                    <p className="text-5xl font-bold text-primary/20 font-mono">{phase.number}</p>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* PROJECT DETAILS SIDEBAR ROW */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24"
            >
              {[
                { label: 'Client', value: 'Allinfes' },
                { label: 'Services', value: 'Web Design, WooCommerce' },
                { label: 'Outils', value: 'WordPress, Elementor' },
                { label: 'Statut', value: 'En cours — 2026' },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-5">
                  <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wider">{item.label}</p>
                  <p className="font-semibold text-sm">{item.value}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-primary/5 border border-primary/20 rounded-3xl p-12 text-center mb-24"
            >
              <h2 className="text-3xl font-bold mb-4">Un projet similaire en tête ?</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Je conçois et développe des plateformes web qui convertissent — du site vitrine à l'e-commerce B2B complet.</p>
              <Button asChild size="lg" className="rounded-full px-8 h-14 gap-2">
                <Link to="/contact">Discutons de votre projet</Link>
              </Button>
            </motion.div>

            {/* RELATED PROJECTS */}
            <div>
              <p className="text-xs font-mono text-primary uppercase tracking-widest mb-8">Projets similaires</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Lamara', category: 'Shopify E-commerce', link: '/portfolio/lamara' },
                  { title: 'WeProd Maroc', category: 'Social Media & Print', link: '/portfolio/weprod' },
                ].map((project) => (
                  <Link
                    key={project.title}
                    to={project.link}
                    className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-200"
                  >
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.category}</p>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AllinfesPage;
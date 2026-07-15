import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const OmegaSushiPage = () => {
  const metrics = [
    { value: '1 semaine', label: 'Délai de livraison complet — logo, menu 13 pages, social media, retouche photos' },
    { value: 'Gemini AI', label: 'Photos food de qualité médiocre transformées en visuels professionnels via Nano Banana Pro' },
    { value: 'Meta Suite', label: 'Instagram, Facebook et WhatsApp Business connectés et opérationnels dès le lancement' },
  ];

  const phases = [
    {
      number: '01',
      title: 'Recherche & Direction Créative',
      description: 'Analyse des tendances du secteur restauration japonaise via Gemini Deep Research. Définition d\'une direction visuelle moderne — samurai stylisé en bleu marine dans un cercle orange — qui combine esthétique japonaise et identité forte adaptée au marché de Tanger.',
    },
    {
      number: '02',
      title: 'Identité Visuelle & Menu Design',
      description: 'Création du logo from scratch sur Adobe Illustrator. Développement de la charte graphique complète. Design d\'un menu digital de 13 pages sur Canva/Illustrator. Retouche professionnelle des photos food via Gemini Nano Banana Pro — transformation de photos médiocres en visuels premium prêts pour Glovo et Instagram.',
    },
    {
      number: '03',
      title: 'Lancement Digital & Social Media',
      description: 'Création et configuration des pages Instagram, Facebook et WhatsApp Business, connexion via Meta Business Suite. Production de contenu Instagram (offres promotionnelles, photos food). Copywriting optimisé avec ChatGPT pour maximiser l\'engagement et la portée organique.',
    },
  ];

  const galleryImages = [
    { src: 'https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1781053606/omegasushimorocco_mhomup.png', alt: 'Logo Omega Sushi Tanger', caption: 'Logo — Samurai bleu marine, cercle orange' },
    { src: 'https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1781055113/1_copie_uytlqw.jpg', alt: 'Instagram post Omega Sushi', caption: 'Contenu Instagram — Retouche Gemini AI' },
    { src: 'https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1781055670/5_copie_k2x1bb.jpg', alt: 'Instagram post Omega Sushi', caption: 'Contenu Instagram — Photo food professionnelle' },
    { src: 'https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1781055780/p4_s1_hcjspi.jpg', alt: 'Menu Omega Sushi page 1', caption: 'Menu Digital — Page entrées' },
    { src: 'https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1781055778/p4_s6_y3zqbp.jpg', alt: 'Menu Omega Sushi page 2', caption: 'Menu Digital — Page maki' },
    { src: 'https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1781055767/p4_s2_k9ubsi.jpg', alt: 'Menu Omega Sushi page 3', caption: 'Menu Digital — Page spécialités' },
  ];

  return (
    <>
      <Helmet>
        <title>Omega Sushi Tanger — Branding & Social Media | Bilal Essatte</title>
        <meta name="description" content="Identité visuelle complète, menu design 13 pages, retouche food AI, et lancement digital pour Omega Sushi Tanger — livré en 1 semaine." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-32 pb-24">
          <div className="container-custom">

            {/* Breadcrumb + Back */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
              <span>/</span>
              <Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
              <span>/</span>
              <span className="text-foreground">Omega Sushi Tanger</span>
            </nav>
            <Button asChild variant="ghost" className="mb-12 gap-2">
              <Link to="/portfolio">
                <ArrowLeft className="w-4 h-4" />
                Retour au portfolio
              </Link>
            </Button>

            {/* HERO */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-16"
            >
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="text-xs font-mono bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">Branding</span>
                <span className="text-xs font-mono bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">Menu Design</span>
                <span className="text-xs font-mono bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">Social Media</span>
                <span className="text-xs font-mono bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">AI Photo Retouche</span>
                <span className="text-xs font-mono bg-secondary text-secondary-foreground px-3 py-1 rounded-full">Nov–Déc 2025</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
                Omega Sushi<span className="text-primary">.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
                Identité visuelle complète, menu digital 13 pages, retouche food photography par IA, et lancement sur Instagram, Facebook et Glovo — le tout livré en une semaine.
              </p>
              <Button asChild variant="outline" className="rounded-full gap-2">
                <a href="https://www.instagram.com/omegasushitanger/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Voir sur Instagram
                </a>
              </Button>
            </motion.div>

            {/* HERO IMAGE — Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-3xl overflow-hidden border border-border mb-24 bg-secondary flex items-center justify-center p-16"
            >
              <img
                src="https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1781053606/omegasushimorocco_mhomup.png"
                alt="Logo Omega Sushi Tanger"
                className="max-h-64 object-contain"
              />
            </motion.div>

            {/* CHALLENGE + OUTCOME */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
            >
              <div className="bg-card border border-border rounded-3xl p-8">
                <p className="text-xs font-mono text-primary uppercase tracking-widest mb-4">Le défi</p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Omega Sushi Tanger ouvrait ses portes sans aucune identité visuelle ni présence digitale. Les photos food existantes étaient de mauvaise qualité. Il fallait tout créer from scratch et lancer le restaurant en ligne en un minimum de temps.
                </p>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8">
                <p className="text-xs font-mono text-primary uppercase tracking-widest mb-4">La solution</p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Écosystème visuel complet livré en 1 semaine — logo from scratch, menu digital 13 pages, photos food retouchées via Gemini Nano Banana Pro, et déploiement sur Instagram, Facebook, WhatsApp Business et Glovo.
                </p>
              </div>
            </motion.div>

            {/* METRICS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
            >
              {metrics.map((m, i) => (
                <div key={i} className="bg-card border border-border rounded-3xl p-8 text-center">
                  <p className="text-3xl font-bold text-primary mb-3 font-mono">{m.value}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.label}</p>
                </div>
              ))}
            </motion.div>

            {/* GALLERY */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-24"
            >
              <p className="text-xs font-mono text-primary uppercase tracking-widest mb-8">Galerie du projet</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {galleryImages.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-2xl overflow-hidden border border-border bg-secondary aspect-square"
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </motion.div>
                ))}
              </div>
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

            {/* PROJECT DETAILS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24"
            >
              {[
                { label: 'Client', value: 'Omega Sushi Tanger' },
                { label: 'Services', value: 'Branding, Menu, Social Media' },
                { label: 'Outils', value: 'Illustrator, Photoshop, Canva, Gemini AI' },
                { label: 'Délai', value: '1 semaine — Nov 2025' },
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
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Je crée des identités visuelles complètes et des stratégies digitales pour les restaurants et marques F&B — avec des délais courts et des résultats premium.</p>
              <Button asChild size="lg" className="rounded-full px-8 h-14 gap-2">
                <Link to="/contact">Discutons de votre projet</Link>
              </Button>
            </motion.div>

            {/* RELATED */}
            <div>
              <p className="text-xs font-mono text-primary uppercase tracking-widest mb-8">Projets similaires</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Allinfes', category: 'Web Design & WooCommerce', link: '/portfolio/allinfes' },
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

export default OmegaSushiPage;
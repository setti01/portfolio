
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, PenTool, Globe, Image as ImageIcon, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const ServicesPage = () => {
  const detailedServices = [
    {
      title: 'Brand Identity & Design Graphique',
      desc: 'De l\'idée au système visuel complet — je crée des identités de marque cohérentes qui se démarquent et restent mémorables.',
      icon: PenTool,
      image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1781053606/omegasushimorocco_mhomup.png',
      deliverables: [
        'Logo design & identité visuelle complète',
        'Charte graphique (couleurs, typographie, règles d\'usage)',
        'Menus de restaurant (design complet, print-ready)',
        'Flyers, affiches, brochures',
        'Roll-ups & visuels événementiels',
        'Cartes de visite',
        'Packaging & concepts d\'emballage',
        'Fichiers print-ready (CMJN, formats imprimeur)'
      ]
    },
    {
      title: 'Web Design & Développement',
      desc: 'Des sites web rapides, modernes et orientés conversion — du site vitrine à l\'e-commerce complet.',
      icon: Globe,
      image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783996886/Homepage_hkyuki.png',
      deliverables: [
        'Sites WordPress + Elementor sur-mesure',
        'E-commerce WooCommerce & Shopify',
        'Landing pages haute conversion',
        'Sites corporate & portfolio',
        'Design responsive & mobile-first',
        'Optimisation SEO technique',
        'Maintenance & mises à jour',
        'Layouts bilingues (Arabe / Français / Anglais)'
      ]
    },
    {
      title: 'Social Media & Contenu Digital',
      desc: 'Des visuels qui captent l\'attention, renforcent votre image de marque et engagent votre audience.',
      icon: ImageIcon,
      image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783999178/WhatsApp_Image_2025-05-04_at_00.39.00_1_ifixgo.jpg',
      deliverables: [
        'Création de contenu Instagram & Facebook',
        'Visuels de campagnes publicitaires',
        'Retouche professionnelle de photos produits & food',
        'Génération d\'images par IA pour clients',
        'Adaptation multi-formats & multi-plateformes',
        'Bannières web & assets digitaux',
        'Templates réseaux sociaux réutilisables'
      ]
    },
    {
      title: 'Photographie & Production Visuelle',
      desc: 'Valorisez vos espaces et votre offre avec des images professionnelles adaptées au web et aux réseaux sociaux.',
      icon: Sparkles,
      image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1781055113/1_copie_uytlqw.jpg',
      deliverables: [
        'Photographie de lieux (hôtels, restaurants, commerces)',
        'Retouche et post-production complète',
        'Photos optimisées pour le web & réseaux sociaux',
        'Livrables print-ready haute résolution',
        'Cohérence visuelle avec votre identité de marque'
      ]
    },
    {
      title: 'SEO & Stratégie Digitale',
      desc: 'Rendez votre site visible sur Google et construisez une présence digitale cohérente qui attire les bons clients.',
      icon: ArrowRight,
      image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783996711/Product_listing_page_oh3yxw.png',
      deliverables: [
        'Audit SEO & analyse de positionnement',
        'Optimisation on-page (titres, metas, structure)',
        'Stratégie de mots-clés',
        'SEO local (Google Business Profile)',
        'Intégration d\'outils IA dans les workflows créatifs',
        'Recommandations de contenu pour le référencement'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Bilal ESSATTE | Design Graphique & Web</title>
        <meta name="description" content="Découvrez mes services complets : Design graphique, Web design, Contenu digital et Design assisté par IA." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-32 pb-24">
          <div className="container-custom">
            {/* 1. HERO SECTION */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="text-center mb-24 pt-10"
            >
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Mes <span className="text-primary">Expertises</span></h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Des solutions complètes pour bâtir votre présence visuelle et digitale, de la création de logo à la mise en ligne de votre plateforme e-commerce.
              </p>
            </motion.div>

            {/* 2. DETAILED SERVICES (Zig-Zag) */}
            <div className="space-y-32 mb-32">
              {detailedServices.map((service, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    className={index % 2 !== 0 ? 'lg:order-2' : ''}
                  >
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
                      <service.icon className="w-5 h-5" />
                      Service {index + 1}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{service.desc}</p>
                    
                    <div className="bg-card border border-border rounded-2xl p-6 mb-8">
                      <h3 className="font-semibold mb-4 text-lg">Inclus dans ce service :</h3>
                      <ul className="space-y-3">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button asChild variant="outline" className="rounded-full h-12 px-6">
                      <Link to="/contact">Discuter de vos besoins</Link>
                    </Button>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                    className={`rounded-3xl overflow-hidden aspect-[4/3] border border-border bg-secondary ${index % 2 !== 0 ? 'lg:order-1' : ''}`}
                  >
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" />
                  </motion.div>
                </div>
              ))}
            </div>

            {/* 3. CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-primary/10 border border-primary/20 rounded-3xl p-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Un projet spécifique en tête ?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Je m'adapte à vos besoins pour créer une solution sur-mesure combinant ces différentes expertises.
              </p>
              <Button asChild size="lg" className="rounded-full px-8 h-14 text-lg gap-2">
                <Link to="/contact">
                  Démarrer la discussion <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProjectCard from '@/components/ProjectCard.jsx';
import FilterButton from '@/components/FilterButton.jsx';

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = ['Tous', 'Web Design', 'Branding', 'Social Media'];

  // Full clean data array
  const projects = [
    { title: 'WEPROD MAROC', category: 'Social Media', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1783910220/WhatsApp_Image_2025-05-04_at_00.39.05_3_betqh6.jpg', link: '/portfolio/weprod', description: 'Graphic design, branding and event communication for a Tangier creative agency.' },
    { title: 'SMART SPARES HUB', category: 'Web Design', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1783996886/Homepage_hkyuki.png', link: '/portfolio/smart-spares-hub', description: 'B2B platform for industrial spare parts, branding and web design from scratch.' },
    { title: 'HOTEL FARAH TANGER', category: 'Branding', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1783999178/WhatsApp_Image_2025-05-04_at_00.39.00_1_ifixgo.jpg', link: '/portfolio/hotel-farah', description: 'Luxury hospitality social media design, created via WeProd Maroc.' },
    { title: 'ALLINFES', category: 'Web Design', image: 'https://images.unsplash.com/photo-1695634365024-b7513447e4f0', link: '/portfolio/allinfes', description: 'Développement WordPress WooCommerce pour sourcing hôtelier marocain.' },
    { title: 'OMEGA SUSHI TANGER', category: 'Branding', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1781053606/omegasushimorocco_mhomup.png', link: '/portfolio/omega-sushi', description: 'Identité visuelle complète et design de menu de restaurant.' },
    { title: 'LAMARA', category: 'Web Design', image: 'https://images.unsplash.com/photo-1617451588899-7ac8679908c7', link: '/portfolio/lamara', description: 'Création de site Shopify e-commerce avec retouche images.' },
    { title: 'GLOBAL BITES', category: 'Branding', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1', link: 'https://behance.net/b30072001', description: "Rebranding, redesign d'identité visuelle et assets marketing." },
    { title: 'MIEL CHAHDA', category: 'Branding', image: 'https://images.unsplash.com/photo-1587049352847-81a56d773c1c', link: 'https://behance.net/b30072001', description: "Création d'identité de marque avec direction visuelle moderne." },
    { title: 'FASTASK', category: 'Social Media', image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0', link: 'https://behance.net/b30072001', description: 'Design visuel et création de contenu pour les réseaux sociaux.' },
    { title: 'TTOKLIN COMPANY', category: 'Branding', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0', link: 'https://behance.net/b30072001', description: "Identité de marque complète et création d'assets digitaux." },
  ];

  // Reset the visible count when a new category is selected
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisibleCount(6);
  };

  const filteredProjects = selectedCategory === 'Tous' 
    ? projects 
    : projects.filter((project) => project.category === selectedCategory);

  // Only take the amount of projects we want to show
  const displayedProjects = filteredProjects.slice(0, visibleCount);

  return (
    <>
      <Helmet>
        <title>Portfolio - Bilal ESSATTE | Projets Design & Web</title>
        <meta name="description" content="Découvrez mes études de cas et projets réalisés en branding, e-commerce et design web." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-32 pb-24">
          <div className="container-custom">
            {/* 1. HERO SECTION */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 pt-10"
            >
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Projets <span className="text-primary">Sélectionnés</span></h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                Un aperçu de mon travail pour diverses entreprises innovantes et marques ambitieuses.
              </p>
              <Button asChild size="lg" className="rounded-full px-8 gap-2">
                <a href="https://behance.net/b30072001" target="_blank" rel="noopener noreferrer">
                  <Layout className="w-5 h-5" />
                  Voir le portfolio complet sur Behance
                </a>
              </Button>
            </motion.div>

            {/* 2. FILTER SECTION */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-3 mb-16"
            >
              {categories.map((category) => (
                <FilterButton
                  key={category}
                  label={category}
                  isActive={selectedCategory === category}
                  onClick={() => handleCategoryChange(category)}
                />
              ))}
            </motion.div>

            {/* 3. PROJECT GRID */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
              <AnimatePresence mode="popLayout">
                {displayedProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }} // Removed conflicting delay here
                  >
                    {/* Passed the actual loop index down to the card */}
                    <ProjectCard project={project} index={index} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* 4. LOAD MORE BUTTON */}
            {filteredProjects.length > visibleCount && (
              <div className="flex justify-center mt-16">
                <Button 
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  variant="outline" 
                  size="lg" 
                  className="rounded-full px-8 font-medium transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  Charger plus
                </Button>
              </div>
            )}

            {/* EMPTY STATE */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-24">
                <p className="text-xl text-muted-foreground">Aucun projet trouvé dans cette catégorie.</p>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PortfolioPage;
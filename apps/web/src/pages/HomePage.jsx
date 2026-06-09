import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Quote, Layout } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProjectCard from '@/components/ProjectCard.jsx';
import AnimatedCounter from '@/components/AnimatedCounter.jsx';
import RotatingText from '@/components/RotatingText.jsx';

const HomePage = () => {
  const heroPhrases = [
    "Création d'identités visuelles qui marquent les esprits",
    "Des sites web qui convertissent et inspirent confiance",
    "Du branding pensé pour durer, pas pour suivre les tendances",
    "Design graphique. Web design. Un seul créatif.",
    "Votre marque mérite mieux qu'un design ordinaire"
  ];

const featuredProjects = [
    {
      title: 'Miel Chahda',
      category: 'Web Design & Development',
    image: 'https://res.cloudinary.com/dfonsuqx6/image/upload/q_auto/f_auto/v1780690378/Screenshot_q0g6em.png',
      link: '/portfolio/allinfes',
    },
    {
      title: 'Riad Timrad',
      category: 'Branding & Identité Visuelle',
      image: 'https://res.cloudinary.com/dfonsuqx6/image/upload/q_auto/f_auto/v1780686756/White_Modern_Photo_Collage_Social_Media_Profile_UI_Instagram_Post_5_skfbgx.jpg',
      link: '/portfolio',
    },
    {
      title: 'WeProd Maroc',
      category: 'Social Media & Print Design',
      image: 'https://res.cloudinary.com/dfonsuqx6/image/upload/q_auto/f_auto/v1780632256/WhatsApp_Image_2025-05-04_at_00.39.05_5_kb8ugp.jpg',
      link: '/portfolio',
    },
    {
      title: 'Omega Sushi Tanger',
      category: 'Branding & Identité',
      image: 'https://res.cloudinary.com/dfonsuqx6/image/upload/q_auto/f_auto/v1780632236/White_Modern_Photo_Collage_Social_Media_Profile_UI_Instagram_Post_oqj37i.jpg',
      link: '/portfolio/omega-sushi',
    },
    {
      title: 'Flamant Rose',
      category: 'Social Media & Contenu Digital',
      image: 'https://res.cloudinary.com/dfonsuqx6/image/upload/q_auto/f_auto/v1780632235/White_Modern_Photo_Collage_Social_Media_Profile_UI_Instagram_Post_1_ahtqjn.jpg',
      link: '/portfolio',
    },
    {
      title: 'Hotel Farah Tanger',
      category: 'Marketing Visuel & Print',
      image: 'https://res.cloudinary.com/dfonsuqx6/image/upload/q_auto/f_auto/v1780632236/White_Modern_Photo_Collage_Social_Media_Profile_UI_Instagram_Post_2_hwun84.jpg',
      link: '/portfolio',
    },
  ];

  const testimonials = [
    { 
      name: 'CEO, Riad Timrad', 
      role: 'Secteur Hôtellerie', 
      text: 'Une collaboration exceptionnelle pour la refonte de notre identité visuelle. Notre riad a gagné en prestige grâce à son œil esthétique et son professionnalisme.' 
    },
    { 
      name: 'Hamza, Gérant — Omega Sushi', 
      role: 'Restaurant Japonais, Tanger', 
      text: 'Le nouveau menu et le branding ont complètement transformé l\'image de notre restaurant. Les clients adorent le nouveau design et notre présence en ligne s\'est nettement améliorée.' 
    },
    { 
      name: 'Oussama, CEO — Allinfes', 
      role: 'Hospitality Sourcing, Maroc', 
      text: 'Un travail sérieux et professionnel. Le site web reflète exactement l\'image qu\'on voulait donner à notre marque. Bilal a su comprendre notre vision et la traduire visuellement.' 
    },
  ];

  return (
    <>
      <Helmet>
        <title>Bilal ESSATTE - Designer Graphique & Web | Portfolio</title>
        <meta name="description" content="Portfolio de Bilal ESSATTE, designer graphique et web spécialisé dans la création d'écosystèmes visuels complets." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* 1. HERO SECTION */}
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1688760871131-29afc15029ec"
              alt="Abstract dark background"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
          </div>

          <div className="container-custom relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl mx-auto flex flex-col items-center"
            >
              <motion.div layout className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 max-w-full">
                <Sparkles className="w-4 h-4 text-primary shrink-0" />
                <RotatingText phrases={heroPhrases} className="text-sm font-medium text-primary" />
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight tracking-tight text-balance">
                Construire la <span className="text-primary">confiance</span> par le design
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
                J'aide les marques à se démarquer — identité visuelle, sites web et contenus digitaux qui attirent des clients et inspirent confiance.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="gap-2 rounded-full px-8 h-14 text-base hover:scale-105 transition-transform">
                  <Link to="/portfolio">
                    Voir mes projets
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-base gap-2">
                  <a href="https://behance.net/b30072001" target="_blank" rel="noopener noreferrer">
                    <Layout className="w-5 h-5" />
                    Profil Behance
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. STATISTICS */}
        <section className="py-20 border-y border-border bg-card/30">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
              {[
                { label: 'Années d\'expérience', value: 7, suffix: '+' },
                { label: 'Clients satisfaits', value: 50, suffix: '+' },
                { label: 'Projets complétés', value: 100, suffix: '+' },
                { label: 'Secteurs d\'expertise', value: 8, suffix: '+' },
              ].map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. FEATURED PROJECTS */}
        <section className="py-24 bg-background">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Projets récents</h2>
                <p className="text-muted-foreground max-w-xl">Une sélection de mes réalisations qui aident les entreprises à communiquer efficacement.</p>
              </motion.div>
              <div className="flex gap-4">
                <Button asChild variant="ghost" className="gap-2 group">
                  <Link to="/portfolio">
                    Tous les projets <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* 3.5 SKILLS & TOOLS */}
        <section className="py-24 overflow-hidden bg-card/20 border-y border-border">
          <div className="container-custom mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Outils & Technologies</h2>
              <p className="text-muted-foreground">Les outils que j'utilise pour créer des expériences visuelles exceptionnelles.</p>
            </motion.div>
          </div>

          {/* Row 1 - scrolling left */}
          <div className="relative flex overflow-hidden mb-6">
            <div className="flex gap-6 whitespace-nowrap" style={{ animation: 'marquee-left 50s linear infinite' }}>
              {[
                { name: 'Photoshop', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg' },
                { name: 'Illustrator', icon: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg' },
                { name: 'InDesign', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg' },
                { name: 'Premiere Pro', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg' },
                { name: 'After Effects', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg' },
                { name: 'WordPress', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg' },
                { name: 'Figma', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
                { name: 'Shopify', icon: 'https://cdn.worldvectorlogo.com/logos/shopify.svg' },
                { name: 'Photoshop', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg' },
                { name: 'Illustrator', icon: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg' },
                { name: 'InDesign', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg' },
                { name: 'Premiere Pro', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg' },
                { name: 'After Effects', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg' },
                { name: 'WordPress', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg' },
                { name: 'Figma', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
                { name: 'Shopify', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg' },
              ].map((tool, i) => (
                <div key={i} className="flex items-center gap-3 bg-card border border-border rounded-2xl px-6 py-4 shrink-0 hover:border-primary/50 hover:bg-card/80 transition-all duration-300">
                  <img src={tool.icon} alt={tool.name} className="w-8 h-8 object-contain" />
                  <span className="font-medium text-sm">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - scrolling right */}
          <div className="relative flex overflow-hidden">
            <div className="flex gap-6 whitespace-nowrap" style={{ animation: 'marquee-right 50s linear infinite' }}>
              {[
                { name: 'Canva', icon: 'https://cdn.worldvectorlogo.com/logos/canva-1.svg' },
                { name: 'WooCommerce', icon: 'https://cdn.worldvectorlogo.com/logos/woocommerce.svg' },
                { name: 'ChatGPT', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
                { name: 'Elementor', icon: 'https://cdn.worldvectorlogo.com/logos/elementor.svg' },
                { name: 'CapCut', bg: '#000000', letter: 'CC' },
                { name: 'Leonardo AI', bg: '#1a1a2e', letter: 'L' },
                { name: 'Google AI Studio', bg: '#1a73e8', letter: 'G' },
                { name: 'Claude', bg: '#cc785c', letter: 'C' },
                { name: 'Canva', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg' },
                { name: 'WooCommerce', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/WooCommerce_logo.svg' },
                { name: 'ChatGPT', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
                { name: 'Elementor', icon: 'https://cdn.worldvectorlogo.com/logos/elementor.svg' },
                { name: 'CapCut', icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Capcut-logo.svg' },
                { name: 'Leonardo AI', bg: '#1a1a2e', letter: 'L' },
                { name: 'Google AI Studio', bg: '#1a73e8', letter: 'G' },
                { name: 'Claude', bg: '#cc785c', letter: 'C' },
              ].map((tool, i) => (
                <div key={i} className="flex items-center gap-3 bg-card border border-border rounded-2xl px-6 py-4 shrink-0 hover:border-primary/50 hover:bg-card/80 transition-all duration-300">
                  {tool.icon ? (
                    <img src={tool.icon} alt={tool.name} className="w-8 h-8 object-contain" />
                  ) : (
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: tool.bg }}>
                      {tool.letter}
                    </div>
                  )}
                  <span className="font-medium text-sm">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

{/* 3.6 CLIENTS */}
        <section className="py-20 bg-background">
          <div className="container-custom">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">Ils m'ont fait confiance</p>
              <h2 className="text-3xl md:text-4xl font-bold">Clients & Collaborations</h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'Allinfes',
                'Riad Timrad',
                'Hotel Farah Tanger',
                'Flamant Rose',
                'Omega Sushi',
                'WeProd Maroc',
                'Palais Blanc',
                'Bloom Beauty',
              ].map((client, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card border border-border rounded-2xl px-6 py-5 flex items-center justify-center text-center hover:border-primary/40 transition-all duration-300 group"
                >
                  <p className="font-semibold text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{client}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* 4. TESTIMONIALS */}
        <section className="py-24 bg-secondary/30">
          <div className="container-custom">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Ce que disent mes clients</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Retours d'expérience dans les secteurs de l'hôtellerie, restauration et beauté.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((test, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-card p-8 rounded-3xl border border-border relative flex flex-col h-full"
                >
                  <Quote className="absolute top-8 right-8 w-10 h-10 text-primary/10" />
                  <p className="text-muted-foreground leading-relaxed mb-8 relative z-10 flex-grow">"{test.text}"</p>
                  <div>
                    <h4 className="font-bold">{test.name}</h4>
                    <p className="text-sm text-primary">{test.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CTA SECTION */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="container-custom relative z-10 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Prêt à attirer plus de clients ?</h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Créons ensemble des designs et sites web qui renforcent votre image de marque et convertissent.
              </p>
              <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg">
                <Link to="/contact">Discutons de votre projet</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
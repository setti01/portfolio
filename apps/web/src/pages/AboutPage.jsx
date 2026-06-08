import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Calendar, Globe, GraduationCap, Briefcase, Award } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const AboutPage = () => {
  const experiences = [
    { 
      date: '2025 - Présent', 
      title: 'Graphic Designer & Web Developer', 
      company: 'DishAndRecipe.com',
      description: 'Création d\'interfaces web et conception graphique pour une plateforme culinaire.' 
    },
    { 
      date: 'Juillet 2024 - Novembre 2024', 
      title: 'Infographiste', 
      company: 'WeProd Maroc',
      description: 'Projets notables : Flamant Rose Apartments, Hotel Farah Tanger, Palais Blanc, Bloom Beauty Tanger. Création de supports de communication digitaux et imprimés pour le secteur hôtelier et lifestyle.' 
    },
    { 
      date: '2018 - Présent', 
      title: 'Freelance Designer & Web Developer', 
      company: 'Indépendant',
      description: 'Accompagnement de plus de 50 clients internationaux et locaux dans la création d\'écosystèmes visuels complets (branding, web, réseaux sociaux).' 
    },
  ];

  const education = [
    { date: '2025', title: 'Graphic Design', school: 'ALX' },
    { date: '2024', title: 'Full Stack Software Engineering - Foundations', school: 'ALX', desc: 'Score moyen: 97.57%' },
    { date: '2024', title: 'AI Career Essentials', school: 'ALX' },
    { date: '2019 - 2022', title: 'Licence Économie et Gestion', school: 'FSJES Dhar El Mehraz, Fès' },
    { date: '2019', title: 'Baccalauréat Gestion Comptable', school: 'Lycée Al Wahda, Taounate' },
  ];

  const skillCategories = [
    { title: 'Design Tools', skills: ['Adobe Photoshop', 'Illustrator', 'InDesign', 'Premiere Pro', 'After Effects', 'Audition', 'Canva', 'Figma', 'CapCut'] },
    { title: 'Web Tools', skills: ['WordPress', 'Elementor', 'WooCommerce', 'Shopify'] },
    { title: 'SEO & Marketing', skills: ['SEMrush', 'Ahrefs'] },
    { title: 'AI Tools', skills: ['ChatGPT', 'Leonardo AI', 'Google AI Studio', 'Claude'] },
    { title: 'Office Tools', skills: ['Word', 'Excel', 'PowerPoint'] },
  ];

  const interests = ['Photographie', 'Voyages', 'Football', 'Échecs', 'Gaming'];

  return (
    <>
      <Helmet>
        <title>À propos - Bilal ESSATTE | Profil et Compétences</title>
        <meta name="description" content="Découvrez le parcours de Bilal ESSATTE : Expérience, éducation, compétences techniques et mission professionnelle." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-32 pb-24">
          <div className="container-custom">
            {/* 1. HERO & BIO SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32 pt-10">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">Bilal <span className="text-primary">ESSATTE</span></h1>
                <p className="text-xl text-muted-foreground mb-8">Designer Graphique & Web Developer</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>30 juillet 2001</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Tanger, Maroc</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>+212 620 983 108</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="truncate">settibilal1@gmail.com</span>
                  </div>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl mb-8">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    Langues
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { lang: 'Arabe', level: 'Natif' },
                      { lang: 'Français', level: 'B2 — TCF' },
                      { lang: 'Anglais', level: 'Intermédiaire' },
                    ].map((l, i) => (
                      <div key={i} className="flex flex-col items-center bg-secondary rounded-xl px-4 py-2 border border-border">
                        <span className="font-semibold text-foreground text-sm">{l.lang}</span>
                        <span className="text-xs text-primary mt-1">{l.level}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p className="font-medium text-foreground">Mission Personnelle :</p>
                  <p className="italic border-l-4 border-primary pl-4 py-2 bg-primary/5 rounded-r-lg">
                    "Combiner créativité, technologie et pensée stratégique pour aider les entreprises à construire des marques plus fortes et de meilleures expériences digitales. Mon objectif est l'amélioration continue en design graphique, web design, workflows assistés par IA, branding et communication digitale pour collaborer avec des clients internationaux, des agences créatives et des entreprises innovantes."
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col gap-6"
              >
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] border border-border bg-secondary flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/dfonsuqx6/image/upload/q_auto/f_auto/v1780700743/Gemini_Generated_Image_tz97evtz97evtz97_bcbvnr.png"
                    alt="Bilal ESSATTE Workspace"
                    className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '7+', label: 'Années d\'expérience' },
                    { value: '50+', label: 'Clients satisfaits' },
                    { value: '100+', label: 'Projets complétés' },
                    { value: '5', label: 'Secteurs d\'expertise' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-card border border-border rounded-2xl p-4 text-center">
                      <p className="text-3xl font-bold text-primary">{stat.value}</p>
                      <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* 2 & 3. TIMELINES (Experience & Education) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="flex items-center gap-3 mb-10">
                  <Briefcase className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold">Expérience</h2>
                </div>
                <div className="relative border-l border-border ml-4 space-y-12 py-4">
                  {experiences.map((exp, i) => (
                    <div key={i} className="relative pl-8">
                      <div className="timeline-dot" />
                      <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                        {exp.date}
                      </span>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-sm font-medium text-muted-foreground mb-2">{exp.company}</p>
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="flex items-center gap-3 mb-10">
                  <GraduationCap className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold">Formation</h2>
                </div>
                <div className="relative border-l border-border ml-4 space-y-10 py-4">
                  {education.map((edu, i) => (
                    <div key={i} className="relative pl-8">
                      <div className="timeline-dot" />
                      <span className="text-sm font-bold text-primary mb-1 block">
                        {edu.date}
                      </span>
                      <h3 className="text-lg font-semibold">{edu.title}</h3>
                      <p className="text-muted-foreground">{edu.school}</p>
                      {edu.desc && <p className="text-sm text-primary/80 mt-1">{edu.desc}</p>}
                    </div>
                  ))}
                </div>

                <div className="mt-12 bg-card border border-border p-6 rounded-2xl">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Certifications
                  </h3>
                  {[
                    { name: 'TCF Tout Public B2', org: 'Institut Français', badge: 'Valide : Nov 2027' },
                    { name: 'AI Career Essentials', org: 'ALX', badge: '2024' },
                    { name: 'Licence Économie & Gestion', org: 'FSJES Dhar El Mehraz', badge: '2022' },
                    { name: 'Baccalauréat Gestion Comptable', org: 'Lycée Al Wahda, Taounate', badge: '2019' },
                  ].map((cert, i) => (
                    <div key={i} className="flex items-center justify-between border-b border-border/50 pb-3 mb-3 last:border-0 last:pb-0 last:mb-0">
                      <div>
                        <p className="font-medium">{cert.name}</p>
                        <p className="text-sm text-muted-foreground">{cert.org}</p>
                      </div>
                      <span className="text-xs bg-secondary px-2 py-1 rounded text-secondary-foreground">{cert.badge}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* 4. TECHNICAL SKILLS GRID */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-32">
              <h2 className="text-3xl font-bold mb-12 text-center">Compétences Techniques</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, i) => (
                  <div key={i} className="bg-card p-8 rounded-3xl border border-border">
                    <h3 className="text-xl font-bold mb-6 text-foreground">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, j) => (
                        <span key={j} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 5. INTERESTS */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
              <h2 className="text-3xl font-bold mb-8">Centres d'intérêt</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {interests.map((interest, i) => (
                  <div key={i} className="px-6 py-3 rounded-2xl bg-secondary text-secondary-foreground font-medium">
                    {interest}
                  </div>
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

export default AboutPage;
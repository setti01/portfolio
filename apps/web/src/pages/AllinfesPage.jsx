import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const AllinfesPage = () => {
  const { t } = useTranslation();

  const metrics = [
    { value: t('allinfes.challengeLabel'), label: t('allinfes.challengeDesc') },
    { value: t('services.s2_d4'), label: t('allinfes.solutionDesc') },
    { value: 'Mobile-first', label: t('allinfes.processPhase3Desc') },
  ];

  const phases = [
    {
      number: '01',
      title: t('allinfes.processPhase1'),
      description: t('allinfes.processPhase1Desc'),
    },
    {
      number: '02',
      title: t('allinfes.processPhase2'),
      description: t('allinfes.processPhase2Desc'),
    },
    {
      number: '03',
      title: t('allinfes.processPhase3'),
      description: t('allinfes.processPhase3Desc'),
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t('allinfes.title')}</title>
        <meta name="description" content={t('allinfes.metaDesc')} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://bilalessatte.site/"},
            {"@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://bilalessatte.site/portfolio"},
            {"@type": "ListItem", "position": 3, "name": "Allinfes", "item": "https://bilalessatte.site/portfolio/allinfes"}
          ]
        })}</script>
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
                <span className="text-xs font-mono bg-secondary text-secondary-foreground px-3 py-1 rounded-full">{t('allinfes.heroStatus')}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
                Allinfes<span className="text-primary">.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                {t('allinfes.heroDesc')}
              </p>
            </motion.div>

            {/* HERO IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-3xl overflow-hidden mb-24 aspect-video bg-secondary"
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
                <p className="text-xs font-mono text-primary uppercase tracking-widest mb-4">{t('allinfes.challengeLabel')}</p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('allinfes.challengeDesc')}
                </p>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8">
                <p className="text-xs font-mono text-primary uppercase tracking-widest mb-4">{t('allinfes.solutionLabel')}</p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('allinfes.solutionDesc')}
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
              <p className="text-xs font-mono text-primary uppercase tracking-widest mb-8">{t('allinfes.processLabel')}</p>
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
                { label: t('allinfes.labelClient'), value: 'Allinfes' },
                { label: t('allinfes.labelServices'), value: t('allinfes.heroTags') },
                { label: t('allinfes.labelTools'), value: 'WordPress, Elementor' },
                { label: t('allinfes.labelStatus'), value: t('allinfes.heroStatus') },
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
              <h2 className="text-3xl font-bold mb-4">{t('allinfes.ctaTitle')}</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{t('allinfes.ctaDesc')}</p>
              <Button asChild size="lg" className="rounded-full px-8 h-14 gap-2">
                <Link to="/contact">{t('allinfes.ctaButton')}</Link>
              </Button>
            </motion.div>

            {/* RELATED PROJECTS */}
            <div>
              <p className="text-xs font-mono text-primary uppercase tracking-widest mb-8">{t('allinfes.relatedLabel')}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: t('lamara.allinfesTitle'), category: t('allinfes.lamaraCategory'), link: '/portfolio/lamara' },
                  { title: t('weprod.aboutTitle'), category: t('allinfes.weprodCategory'), link: '/portfolio/weprod' },
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
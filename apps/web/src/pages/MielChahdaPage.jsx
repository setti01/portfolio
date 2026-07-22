import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const MielChahdaPage = () => {
  const { t } = useTranslation();

  const relatedProjects = [
    { title: 'Smart Spares Hub', category: t('project.categoryWeb'), link: '/portfolio/smart-spares-hub' },
    { title: 'WeProd Maroc', category: t('project.categoryGraphicDesign'), link: '/portfolio/weprod' },
  ];

  const productImages = [
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1784601157/Gemini_Generated_Image_8rc6dm8rc6dm8rc6_iligih.png",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1784601145/Gemini_Generated_Image_o9naozo9naozo9na_y4yrny.png",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1784601296/Gemini_Generated_Image_4eyt2w4eyt2w4eyt_a5u11q.png",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1784601294/Gemini_Generated_Image_bma7xxbma7xxbma7_cbrkup.png",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1784601092/Gemini_Generated_Image_vhw5gbvhw5gbvhw5_xwbxv0.png",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1784601035/Gemini_Generated_Image_i5apxdi5apxdi5ap_qnmpqn.png",
  ];

  const perfDesktop = [
    { label: t('mielchahda.perfScore'), before: "49 / 100", after: "71 / 100" },
    { label: t('mielchahda.perfLCP'), before: "16.1 s", after: "2.9 s" },
    { label: t('mielchahda.perfFCP'), before: "1.0 s", after: t('mielchahda.perfImproved') },
    { label: t('mielchahda.perfSpeedIndex'), before: "13.7 s", after: t('mielchahda.perfImproved') },
  ];

  const perfMobile = [
    { label: t('mielchahda.perfScore'), before: "41 / 100", after: "49–55 / 100" },
    { label: t('mielchahda.perfLCP'), before: "72.5 s", after: "13.9 s" },
    { label: t('mielchahda.perfFCP'), before: "6.0 s", after: "2.0–2.7 s" },
    { label: t('mielchahda.perfSpeedIndex'), before: "55.0 s", after: "9.8–9.9 s" },
  ];

  return (
    <>
      <Helmet>
        <title>{t('mielchahda.title')}</title>
        <meta name="description" content={t('mielchahda.metaDesc')} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://bilalessatte.site/"},
            {"@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://bilalessatte.site/portfolio"},
            {"@type": "ListItem", "position": 3, "name": "Miel Chahda", "item": "https://bilalessatte.site/portfolio/miel-chahda"}
          ]
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-32 pb-24">
          <div className="container-custom">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link to="/" className="hover:text-primary transition-colors duration-200">{t('mielchahda.breadcrumbHome')}</Link>
              <span>/</span>
              <Link to="/portfolio" className="hover:text-primary transition-colors duration-200">{t('mielchahda.breadcrumbPortfolio')}</Link>
              <span>/</span>
              <span className="text-foreground">Miel Chahda</span>
            </nav>

            <Button asChild variant="ghost" className="mb-8 gap-2">
              <Link to="/portfolio">
                <ArrowLeft className="w-4 h-4" />
                {t('mielchahda.backBtn')}
              </Link>
            </Button>

            {/* HERO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                {t('mielchahda.heroTitle')}
              </h1>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {t('mielchahda.heroTag')}
                </span>
                <span className="px-4 py-2 rounded-full bg-card border border-border text-sm">
                  {t('mielchahda.heroPeriod')}
                </span>
                <span className="px-4 py-2 rounded-full bg-card border border-border text-sm">
                  {t('mielchahda.heroIndustry')}
                </span>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-6">
                {t('mielchahda.heroDesc')}
              </p>

              <Button asChild variant="outline" className="rounded-full gap-2">
                <a href="https://mielchahda.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  {t('mielchahda.heroBtn')}
                </a>
              </Button>
            </motion.div>

            {/* BEFORE / AFTER */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden border border-border bg-card">
                  <div className="px-4 py-2 bg-red-500/10 border-b border-border flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <span className="text-sm font-medium text-red-400">{t('mielchahda.beforeLabel')}</span>
                  </div>
                  <div className="overflow-y-auto max-h-[500px]">
                    <img
                      src="https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1784601521/screencapture-mielchahda-2026-06-12-00_32_43_oswuhz.png"
                      alt="Miel Chahda homepage before"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden border border-primary/30 bg-card">
                  <div className="px-4 py-2 bg-primary/10 border-b border-border flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm font-medium text-primary">{t('mielchahda.afterLabel')}</span>
                  </div>
                  <div className="overflow-y-auto max-h-[500px]">
                    <img
                      src="https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1784601445/screencapture-mielchahda-2026-07-21-04_02_37_leusvs.png"
                      alt="Miel Chahda homepage after"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ABOUT + SIDEBAR */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold mb-6">{t('mielchahda.aboutTitle')}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {t('mielchahda.aboutDesc1')}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('mielchahda.aboutDesc2')}
                  </p>
                </motion.div>
              </div>

              <div>
                <div className="bg-card rounded-2xl p-6 border border-border sticky top-32">
                  <h3 className="text-lg font-semibold mb-4">{t('mielchahda.infoTitle')}</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{t('mielchahda.infoClient')}</p>
                      <p className="font-medium">{t('mielchahda.infoClientValue')}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{t('mielchahda.infoRole')}</p>
                      <p className="font-medium">{t('mielchahda.infoRoleValue')}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{t('mielchahda.infoTimeline')}</p>
                      <p className="font-medium">{t('mielchahda.infoTimelineValue')}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{t('mielchahda.infoTools')}</p>
                      <p className="font-medium">{t('mielchahda.infoToolsValue')}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{t('mielchahda.infoBudget')}</p>
                      <p className="font-medium">{t('mielchahda.infoBudgetValue')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FULL WIDTH */}
            <div className="space-y-16 mb-16">

              {/* PERFORMANCE */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">{t('mielchahda.perfTitle')}</h2>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                  {t('mielchahda.perfDesc')}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-card rounded-2xl p-6 border border-border">
                    <h3 className="font-semibold text-lg mb-4">{t('mielchahda.perfDesktop')}</h3>
                    <div className="space-y-4">
                      {perfDesktop.map((row) => (
                        <div key={row.label} className="flex items-center justify-between gap-4">
                          <span className="text-sm text-muted-foreground">{row.label}</span>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-red-400 line-through">{row.before}</span>
                            <span className="text-muted-foreground">→</span>
                            <span className="text-primary font-medium">{row.after}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-card rounded-2xl p-6 border border-border">
                    <h3 className="font-semibold text-lg mb-4">{t('mielchahda.perfMobile')}</h3>
                    <div className="space-y-4">
                      {perfMobile.map((row) => (
                        <div key={row.label} className="flex items-center justify-between gap-4">
                          <span className="text-sm text-muted-foreground">{row.label}</span>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-red-400 line-through">{row.before}</span>
                            <span className="text-muted-foreground">→</span>
                            <span className="text-primary font-medium">{row.after}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* PHASE 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <h2 className="text-3xl font-bold mb-2">{t('mielchahda.phase1Title')}</h2>
                <p className="text-muted-foreground mb-6">{t('mielchahda.phase1Period')}</p>
                <ul className="space-y-4">
                  {[1,2,3,4,5,6].map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0"></div>
                      <span className="text-muted-foreground">{t(`mielchahda.phase1Item${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* PHASE 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <h2 className="text-3xl font-bold mb-2">{t('mielchahda.phase2Title')}</h2>
                <p className="text-muted-foreground mb-6">{t('mielchahda.phase2Period')}</p>
                <ul className="space-y-4">
                  {[1,2,3,4,5,6,7,8,9,10].map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0"></div>
                      <span className="text-muted-foreground">{t(`mielchahda.phase2Item${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* PRODUCT IMAGES */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">{t('mielchahda.photoTitle')}</h2>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                  {t('mielchahda.photoDesc')}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {productImages.map((src, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: i * 0.08 }}
                      className="rounded-2xl overflow-hidden border border-border bg-card aspect-square"
                    >
                      <img
                        src={src}
                        alt={`Miel Chahda product ${i + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* KEY LESSON */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <h2 className="text-3xl font-bold mb-6">{t('mielchahda.lessonTitle')}</h2>
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-6">
                  <p className="text-lg font-medium">
                    {t('mielchahda.lessonQuote')}
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {t('mielchahda.lessonDesc')}
                </p>
              </motion.div>

              {/* LOOKING BACK */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <h2 className="text-3xl font-bold mb-6">{t('mielchahda.lookbackTitle')}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('mielchahda.lookbackDesc')}
                </p>
              </motion.div>
            </div>

            {/* NEXT PROJECTS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-8">{t('mielchahda.seeAlso')}</h2>
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

export default MielChahdaPage;
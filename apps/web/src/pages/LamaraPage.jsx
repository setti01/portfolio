import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const LamaraPage = () => {
  const { t } = useTranslation();
  const relatedProjects = [
    {
      title: t('lamara.allinfesTitle'),
      category: t('allinfes.lamaraCategory'),
      link: '/portfolio/allinfes',
    },
    {
      title: t('lamara.weprodTitle'),
      category: t('allinfes.weprodCategory'),
      link: '/portfolio/weprod',
    },
  ];

  const approachItems = [
    t('lamara.approachItem1'),
    t('lamara.approachItem2'),
    t('lamara.approachItem3'),
    t('lamara.approachItem4'),
  ];

  return (
    <>
      <Helmet>
        <title>{t('lamara.title')}</title>
        <meta
          name="description"
          content={t('lamara.metaDesc')}
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-32 pb-24">
          <div className="container-custom">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link to="/" className="hover:text-primary transition-colors duration-200">
                {t('project.breadcrumbHome')}
              </Link>
              <span>/</span>
              <Link to="/portfolio" className="hover:text-primary transition-colors duration-200">
                {t('project.breadcrumbPortfolio')}
              </Link>
              <span>/</span>
              <span className="text-foreground">Lamara</span>
            </nav>

            <Button asChild variant="ghost" className="mb-8 gap-2">
              <Link to="/portfolio">
                <ArrowLeft className="w-4 h-4" />
                {t('project.backToPortfolio')}
              </Link>
            </Button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Lamara</h1>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Tag className="w-4 h-4" />
                  <span>{t('lamara.heroTag')}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{t('lamara.heroYear')}</span>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                {t('lamara.heroDesc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden mb-16"
            >
              <img
                src="https://images.unsplash.com/photo-1617451588899-7ac8679908c7"
                alt="Lamara web design project showcase"
                className="w-full h-auto"
              />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              <div className="lg:col-span-2 space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold mb-4">{t('lamara.contextTitle')}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('lamara.contextDesc')}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold mb-4">{t('lamara.approachTitle')}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t('lamara.approachIntro')}
                  </p>
                  <ul className="space-y-3">
                    {approachItems.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="rounded-2xl overflow-hidden"
                >
                  <img
                    src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960"
                    alt="Lamara website interface details"
                    className="w-full h-auto"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold mb-4">{t('lamara.impactTitle')}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {t('lamara.impactDesc')}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-card rounded-xl p-6 border border-border">
                      <p className="text-3xl font-bold text-primary mb-2">+156%</p>
                      <p className="text-muted-foreground">{t('lamara.impactMetric1')}</p>
                    </div>
                    <div className="bg-card rounded-xl p-6 border border-border">
                      <p className="text-3xl font-bold text-primary mb-2">+92%</p>
                      <p className="text-muted-foreground">{t('lamara.impactMetric2')}</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-6">
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="text-lg font-semibold mb-4">{t('lamara.infoTitle')}</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{t('hotelfarah.labelClient')}</p>
                      <p className="font-medium">Lamara</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{t('allinfes.labelServices')}</p>
                      <p className="font-medium">{t('lamara.heroTag')}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{t('allinfes.labelTools')}</p>
                      <p className="font-medium">React, Next.js, Tailwind CSS</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{t('lamara.labelYear')}</p>
                      <p className="font-medium">2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-8">{t('project.relatedProjects')}</h2>
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

export default LamaraPage;
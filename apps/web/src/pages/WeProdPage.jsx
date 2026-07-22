import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import MaterialsGallery from '@/components/MaterialsGallery.jsx';

const WeProdPage = () => {
  const { t } = useTranslation();
  const relatedProjects = [
    {
      title: 'Lamara',
      category: t('project.categoryWeb'),
      link: '/portfolio/lamara',
    },
    {
      title: 'Omega Sushi Tanger',
      category: t('project.categoryBrandingSocial'),
      link: '/portfolio/omega-sushi',
    },
  ];

  const whatIDid = [
    t('weprod.didItem1'),
    t('weprod.didItem2'),
    t('weprod.didItem3'),
    t('weprod.didItem4'),
    t('weprod.didItem5'),
    t('weprod.didItem6'),
    t('weprod.didItem7'),
    t('weprod.didItem8'),
  ];

  const whatILearned = [
    t('weprod.learnedItem1'),
    t('weprod.learnedItem2'),
    t('weprod.learnedItem3'),
    t('weprod.learnedItem4'),
    t('weprod.learnedItem5'),
  ];

  const catalogueImages = [
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783879675/photo_5_2026-07-10_20-02-35_mlaopi.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783879674/photo_6_2026-07-10_20-02-35_ykairl.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783879671/photo_7_2026-07-10_20-02-35_g2ywx4.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783879674/photo_8_2026-07-10_20-02-35_tqp6ng.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783879677/photo_9_2026-07-10_20-02-35_zbd0ai.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783879683/photo_10_2026-07-10_20-02-35_z0f35a.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783879683/photo_11_2026-07-10_20-02-35_omrcac.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783879684/photo_12_2026-07-10_20-02-35_bfhl46.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783879671/photo_13_2026-07-10_20-02-35_vokvjp.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783879667/photo_14_2026-07-10_20-02-35_e1ankb.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783879683/photo_15_2026-07-10_20-02-35_tucuix.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783879668/photo_16_2026-07-10_20-02-35_fihrej.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783879664/photo_17_2026-07-10_20-02-35_uajlio.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783879658/photo_18_2026-07-10_20-02-35_mudjoz.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783879660/photo_19_2026-07-10_20-02-35_vu6qtc.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783879662/photo_20_2026-07-10_20-02-35_jvv4uf.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783879658/photo_21_2026-07-10_20-02-35_tppm9y.jpg",
  ];

  return (
    <>
      <Helmet>
        <title>{t('weprod.title')}</title>
        <meta
          name="description"
          content={t('weprod.metaDesc')}
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-32 pb-24">
          <div className="container-custom">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link to="/" className="hover:text-primary transition-colors duration-200">{t('project.breadcrumbHome')}</Link>
              <span>/</span>
              <Link to="/portfolio" className="hover:text-primary transition-colors duration-200">{t('project.breadcrumbPortfolio')}</Link>
              <span>/</span>
              <span className="text-foreground">WeProd Maroc</span>
            </nav>

            <Button asChild variant="ghost" className="mb-8 gap-2">
              <Link to="/portfolio">
                <ArrowLeft className="w-4 h-4" />
                {t('project.backToPortfolio')}
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
                WeProd Maroc
              </h1>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {t('weprod.heroTag')}
                </span>
                <span className="px-4 py-2 rounded-full bg-card border border-border text-sm">
                  {t('weprod.heroDuration')}
                </span>
                <span className="px-4 py-2 rounded-full bg-card border border-border text-sm">
                  {t('weprod.heroType')}
                </span>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                {t('weprod.heroDesc')}
              </p>
            </motion.div>

            {/* HERO IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16 rounded-3xl overflow-hidden"
            >
              <img
                src="https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783910220/WhatsApp_Image_2025-05-04_at_00.39.05_3_betqh6.jpg"
                alt="WeProd event stage production with branded lighting"
                className="w-full h-auto"
              />
            </motion.div>

            {/* TOP GRID: About + Sidebar ONLY */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold mb-6">{t('weprod.aboutTitle')}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {t('weprod.aboutDesc1')}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('weprod.aboutDesc2')}
                  </p>
                </motion.div>
              </div>

              <div>
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="text-lg font-semibold mb-4">{t('weprod.projectInfo')}</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{t('weprod.labelAgency')}</p>
                      <p className="font-medium">WeProd Maroc</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{t('weprod.labelRole')}</p>
                      <p className="font-medium">{t('weprod.heroTag')}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{t('weprod.labelDuration')}</p>
                      <p className="font-medium">{t('weprod.heroDuration')}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{t('weprod.labelTools')}</p>
                      <p className="font-medium">Adobe Photoshop, Illustrator, InDesign</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{t('weprod.labelClients')}</p>
                      <p className="font-medium">Hotel Farah, Flamant Rose, Palais Blanc, Bloom Beauty</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FULL WIDTH FROM HERE ON */}
            <div className="space-y-16 mb-16">

              {/* HOW I JOINED */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <h2 className="text-3xl font-bold mb-6">{t('weprod.joinedTitle')}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('weprod.joinedDesc1')}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('weprod.joinedDesc2')}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t('weprod.joinedDesc3')}
                </p>
              </motion.div>

              {/* WHAT I DID */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <h2 className="text-3xl font-bold mb-6">{t('weprod.didTitle')}</h2>
                <ul className="space-y-4">
                  {whatIDid.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* VEHICLE BRANDING */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">{t('weprod.vehicleTitle')}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                  {t('weprod.vehicleDesc')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2 rounded-2xl overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783909807/ChatGPT_Image_13_juil._2026_04_27_21_fvb9ji.png"
                      alt="WeProd company vehicle branding - side view"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783909808/ChatGPT_Image_13_juil._2026_04_19_40_pyppwn.png"
                      alt="WeProd company vehicle branding - front view"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783909807/ChatGPT_Image_13_juil._2026_04_29_42_b2o1g7.png"
                      alt="WeProd company vehicle branding - rear view"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>

              {/* MATERIALS CATALOGUE */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">{t('weprod.catalogueTitle')}</h2>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                  {t('weprod.catalogueDesc')}
                </p>

                <MaterialsGallery images={catalogueImages} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">{t('weprod.campaignsTitle')}</h2>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                  {t('weprod.campaignsDesc')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783910220/WhatsApp_Image_2025-05-04_at_00.39.05_2_pmszto.jpg"
                      alt="WeProd national football team sponsorship campaign"
                      className="w-full h-full object-cover aspect-[4/5]"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783910220/WhatsApp_Image_2025-05-04_at_00.39.05_4_i3s2tl.jpg"
                      alt="WeProd Auto Expo promotional visual"
                      className="w-full h-full object-cover aspect-[4/5]"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783910220/WhatsApp_Image_2025-05-04_at_00.39.05_5_w2bzmn.jpg"
                      alt="WeProd Instagram content mockup"
                      className="w-full h-full object-cover aspect-[4/5]"
                    />
                  </div>
                </div>
              </motion.div>

              {/* FEATURED PROJECT */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <h2 className="text-3xl font-bold mb-6">{t('weprod.featuredTitle')}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('weprod.featuredDesc1')}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('weprod.featuredDesc2')}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t('weprod.featuredDesc3')}
                </p>
              </motion.div>

              {/* WHAT I LEARNED */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <h2 className="text-3xl font-bold mb-6">{t('weprod.learnedTitle')}</h2>

                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-6">
                  <p className="text-lg font-medium">
                    {t('weprod.learnedQuote')}
                  </p>
                </div>

                <ul className="space-y-4">
                  {whatILearned.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* REFLECTION */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <h2 className="text-3xl font-bold mb-6">{t('weprod.reflectionTitle')}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('weprod.reflectionDesc')}
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

export default WeProdPage;
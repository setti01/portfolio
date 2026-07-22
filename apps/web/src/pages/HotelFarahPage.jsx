import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const HotelFarahPage = () => {
  const { t } = useTranslation();
  const relatedProjects = [
    { title: 'Smart Spares Hub', category: t('home.featuredProject2_category'), link: '/portfolio/smart-spares-hub' },
    { title: 'WeProd Maroc', category: t('project.categoryGraphicDesign'), link: '/portfolio/weprod' },
  ];

  const deliverables = [
    t('hotelfarah.designedItem1'),
    t('hotelfarah.designedItem2'),
    t('hotelfarah.designedItem3'),
    t('hotelfarah.designedItem4'),
    t('hotelfarah.designedItem5'),
  ];

  const galleryImages = [
    { src: "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783999181/WhatsApp_Image_2025-05-04_at_00.38.41_duj8lv.jpg", alt: "Hotel Farah Karaoke Night event poster" },
    { src: "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783999151/WhatsApp_Image_2025-05-04_at_00.38.59_xbscj5.jpg", alt: "Hotel Farah national holiday post" },
    { src: "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783999167/WhatsApp_Image_2025-05-04_at_00.38.59_1_ppov6o.jpg", alt: "El Chiringuito special offer, landscape format" },
    { src: "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783999189/WhatsApp_Image_2025-05-04_at_00.39.00_azyoav.jpg", alt: "El Chiringuito special offer, portrait format" },
    { src: "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783999178/WhatsApp_Image_2025-05-04_at_00.39.00_1_ifixgo.jpg", alt: "Hotel Farah Pool Day Pass promotion" },
  ];

  return (
    <>
      <Helmet>
        <title>{t('hotelfarah.title')}</title>
        <meta
          name="description"
          content={t('hotelfarah.metaDesc')}
        />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://bilalessatte.site/"},
            {"@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://bilalessatte.site/portfolio"},
            {"@type": "ListItem", "position": 3, "name": "Hotel Farah Tanger", "item": "https://bilalessatte.site/portfolio/hotel-farah"}
          ]
        })}</script>
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
              <span className="text-foreground">Hotel Farah Tanger</span>
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
                Hotel Farah Tanger
              </h1>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {t('hotelfarah.heroTag')}
                </span>
                <span className="px-4 py-2 rounded-full bg-card border border-border text-sm">
                  {t('hotelfarah.heroType')}
                </span>
                <span className="px-4 py-2 rounded-full bg-card border border-border text-sm">
                  {t('hotelfarah.heroIndustry')}
                </span>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                {t('hotelfarah.heroDesc')}
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
                src="https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783999178/WhatsApp_Image_2025-05-04_at_00.39.00_1_ifixgo.jpg"
                alt="Hotel Farah Pool Day Pass promotion"
                className="w-full h-auto"
              />
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
                  <h2 className="text-3xl font-bold mb-6">{t('hotelfarah.aboutTitle')}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {t('hotelfarah.aboutDesc1')}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('hotelfarah.aboutDesc2')}
                  </p>
                </motion.div>
              </div>

              <div>
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="text-lg font-semibold mb-4">{t('hotelfarah.projectInfo')}</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{t('hotelfarah.labelClient')}</p>
                      <p className="font-medium">Hotel Farah Tanger</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{t('hotelfarah.labelAgency')}</p>
                      <p className="font-medium">WeProd Maroc</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{t('hotelfarah.labelRole')}</p>
                      <p className="font-medium">{t('hotelfarah.heroTag')}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{t('hotelfarah.labelTools')}</p>
                      <p className="font-medium">Adobe Photoshop, Illustrator</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FULL WIDTH FROM HERE */}
            <div className="space-y-16 mb-16">

              {/* DELIVERABLES */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <h2 className="text-3xl font-bold mb-6">{t('hotelfarah.designedTitle')}</h2>
                <ul className="space-y-4">
                  {deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* GALLERY */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
              <h2 className="text-3xl font-bold mb-6">{t('hotelfarah.galleryTitle')}</h2>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                  {t('hotelfarah.galleryDesc')}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {galleryImages.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: i * 0.1 }}
                      className="rounded-2xl overflow-hidden border border-border bg-card"
                    >
                      <img src={img.src} alt={img.alt} className="w-full h-auto" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CHALLENGES */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <h2 className="text-3xl font-bold mb-6">{t('hotelfarah.challengesTitle')}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('hotelfarah.challengesDesc1')}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t('hotelfarah.challengesDesc2')}
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
                <h2 className="text-3xl font-bold mb-6">{t('hotelfarah.lookbackTitle')}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('hotelfarah.lookbackDesc')}
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

export default HotelFarahPage;
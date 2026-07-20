import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, PenTool, Globe, Image as ImageIcon, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const ServicesPage = () => {
  const { t } = useTranslation();

  const detailedServices = [
    {
      title: t('services.s1_title'),
      desc: t('services.s1_desc'),
      icon: PenTool,
      image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1781053606/omegasushimorocco_mhomup.png',
      deliverables: [
        t('services.s1_d1'),
        t('services.s1_d2'),
        t('services.s1_d3'),
        t('services.s1_d4'),
        t('services.s1_d5'),
        t('services.s1_d6'),
        t('services.s1_d7'),
        t('services.s1_d8'),
      ]
    },
    {
      title: t('services.s2_title'),
      desc: t('services.s2_desc'),
      icon: Globe,
      image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783996886/Homepage_hkyuki.png',
      deliverables: [
        t('services.s2_d1'),
        t('services.s2_d2'),
        t('services.s2_d3'),
        t('services.s2_d4'),
        t('services.s2_d5'),
        t('services.s2_d6'),
        t('services.s2_d7'),
        t('services.s2_d8'),
      ]
    },
    {
      title: t('services.s3_title'),
      desc: t('services.s3_desc'),
      icon: ImageIcon,
      image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783999178/WhatsApp_Image_2025-05-04_at_00.39.00_1_ifixgo.jpg',
      deliverables: [
        t('services.s3_d1'),
        t('services.s3_d2'),
        t('services.s3_d3'),
        t('services.s3_d4'),
        t('services.s3_d5'),
        t('services.s3_d6'),
        t('services.s3_d7'),
      ]
    },
    {
      title: t('services.s4_title'),
      desc: t('services.s4_desc'),
      icon: Sparkles,
      image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1781055113/1_copie_uytlqw.jpg',
      deliverables: [
        t('services.s4_d1'),
        t('services.s4_d2'),
        t('services.s4_d3'),
        t('services.s4_d4'),
        t('services.s4_d5'),
      ]
    },
    {
      title: t('services.s5_title'),
      desc: t('services.s5_desc'),
      icon: ArrowRight,
      image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783996711/Product_listing_page_oh3yxw.png',
      deliverables: [
        t('services.s5_d1'),
        t('services.s5_d2'),
        t('services.s5_d3'),
        t('services.s5_d4'),
        t('services.s5_d5'),
        t('services.s5_d6'),
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('services.title')}</title>
        <meta name="description" content={t('services.metaDesc')} />
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
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">{t('services.heroTitle')}</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t('services.heroDesc')}
              </p>
            </motion.div>

            {/* 2. DETAILED SERVICES (Zig-Zag) */}
            <div className="space-y-32 mb-32">
              {detailedServices.map((service, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }}
                    className={index % 2 !== 0 ? 'lg:order-2' : ''}
                  >
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
                      <service.icon className="w-5 h-5" />
                      {t('services.serviceLabel')} {index + 1}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{service.desc}</p>
                    
                    <div className="bg-card border border-border rounded-2xl p-6 mb-8">
                      <h3 className="font-semibold mb-4 text-lg">{t('services.includeLabel')}</h3>
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
                      <Link to="/contact">{t('services.discussBtn')}</Link>
                    </Button>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }}
                    className={`rounded-3xl overflow-hidden aspect-[4/3] border border-border bg-secondary ${index % 2 !== 0 ? 'lg:order-1' : ''}`}
                  >
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" />
                  </motion.div>
                </div>
              ))}
            </div>

            {/* 3. CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
              className="bg-primary/10 border border-primary/20 rounded-3xl p-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('services.ctaTitle')}</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t('services.ctaDesc')}
              </p>
              <Button asChild size="lg" className="rounded-full px-8 h-14 text-lg gap-2">
                <Link to="/contact">
                  {t('services.ctaBtn')} <ArrowRight className="w-5 h-5" />
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
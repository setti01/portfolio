import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const HotelFarahPage = () => {
  const relatedProjects = [
    { title: 'Smart Spares Hub', category: 'Brand & Web Design', link: '/portfolio/smart-spares-hub' },
    { title: 'WeProd Maroc', category: 'Graphic Design', link: '/portfolio/weprod' },
  ];

  const deliverables = [
    "Instagram posts for events and promotions",
    "Instagram stories for daily communication",
    "Facebook visuals",
    "Event tickets when needed",
    "Promotional print materials",
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
        <title>Hotel Farah Tanger - Graphic Designer | Bilal Essatte</title>
        <meta
          name="description"
          content="Luxury hospitality social media and print design for Hotel Farah Tanger, created during my time at WeProd Maroc."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-32 pb-24">
          <div className="container-custom">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link to="/" className="hover:text-primary transition-colors duration-200">Accueil</Link>
              <span>/</span>
              <Link to="/portfolio" className="hover:text-primary transition-colors duration-200">Portfolio</Link>
              <span>/</span>
              <span className="text-foreground">Hotel Farah Tanger</span>
            </nav>

            <Button asChild variant="ghost" className="mb-8 gap-2">
              <Link to="/portfolio">
                <ArrowLeft className="w-4 h-4" />
                Retour au portfolio
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
                  Graphic Designer
                </span>
                <span className="px-4 py-2 rounded-full bg-card border border-border text-sm">
                  Client work via WeProd Maroc
                </span>
                <span className="px-4 py-2 rounded-full bg-card border border-border text-sm">
                  Luxury Hospitality
                </span>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                Social media and print design for one of Tangier's best-known luxury
                hotels — created while working at WeProd Maroc.
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
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold mb-6">About the Project</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Hotel Farah Tanger is a well-known luxury hotel in Tangier. As part of my
                    work at WeProd Maroc, I created ongoing social media and promotional
                    content to keep the hotel's brand image consistent and premium across
                    Instagram and Facebook.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The content covered everything from event promotions like Karaoke Night
                    at Le Jazz Bar, to seasonal offers at El Chiringuito, national holiday
                    posts, and Pool Day Pass promotions.
                  </p>
                </motion.div>
              </div>

              <div>
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="text-lg font-semibold mb-4">Project Info</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Client</p>
                      <p className="font-medium">Hotel Farah Tanger</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Agency</p>
                      <p className="font-medium">WeProd Maroc</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Role</p>
                      <p className="font-medium">Graphic Designer</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Tools</p>
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
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <h2 className="text-3xl font-bold mb-6">What I Designed</h2>
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
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">Selected Work</h2>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                  One thing this project taught me: the same offer often needed to work in
                  more than one format. The El Chiringuito promotion below was designed both
                  as a landscape post and a portrait story, keeping the same identity
                  consistent across both.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {galleryImages.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
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
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <h2 className="text-3xl font-bold mb-6">Challenges</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The biggest challenge wasn't the design itself — it was staying creative
                  with limited source material. The hotel's rooms, pool and restaurant stayed
                  the same, so every new post needed a fresh angle without repeating the last one.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Communication with the hotel's team wasn't always clear, which meant more
                  back-and-forth than usual to get each piece approved.
                </p>
              </motion.div>

              {/* LOOKING BACK */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <h2 className="text-3xl font-bold mb-6">Looking Back</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This project taught me how to keep a luxury brand feeling consistent across
                  dozens of posts, how to adapt one idea into multiple formats, and how to
                  keep producing quality content on a tight, repeating schedule — even when
                  feedback wasn't always clear.
                </p>
              </motion.div>
            </div>

            {/* NEXT PROJECTS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-8">Découvrez aussi</h2>
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
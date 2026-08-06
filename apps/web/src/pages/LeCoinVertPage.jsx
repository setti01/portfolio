import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import MaterialsGallery from '@/components/MaterialsGallery.jsx';

const LeCoinVertPage = () => {
  const relatedProjects = [
    { title: 'Aida Food', category: 'Graphic Design', link: '/portfolio/aida-food' },
    { title: 'Omega Sushi Tanger', category: 'Branding & Visual Identity', link: '/portfolio/omega-sushi' },
  ];

  const menuPages = [
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1785873354/Black_And_Orange_Modern_Food_Menu_Landscape_A4__page-0008_oykhvz.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1785873355/Black_And_Orange_Modern_Food_Menu_Landscape_A4__page-0001_bmckwk.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1785873354/Black_And_Orange_Modern_Food_Menu_Landscape_A4__page-0002_qxgv5u.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1785873355/Black_And_Orange_Modern_Food_Menu_Landscape_A4__page-0003_hen8zp.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1785873355/Black_And_Orange_Modern_Food_Menu_Landscape_A4__page-0004_qf0xce.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1785873353/Black_And_Orange_Modern_Food_Menu_Landscape_A4__page-0005_jcfqto.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1785873354/Black_And_Orange_Modern_Food_Menu_Landscape_A4__page-0006_dtskiq.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1785873354/Black_And_Orange_Modern_Food_Menu_Landscape_A4__page-0007_sxay8m.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1785873354/Black_And_Orange_Modern_Food_Menu_Landscape_A4__page-0008_oykhvz.jpg",
  ];

  const whatIDesigned = [
    "Full 8-page menu design in French and Arabic",
    "Cover page with botanical floral aesthetic",
    "Breakfast formulas — Parisien, Marocain, Espagnol, Hollandaise, Mexicain",
    "Omelettes menu with 6 variations",
    "Hot drinks and cold drinks pages",
    "Fresh juices menu with 21 varieties",
    "Extras and add-ons page",
    "Consistent bilingual (French/Arabic) typography throughout",
    "Food photo retouching using Photoshop",
  ];

  return (
    <>
      <Helmet>
        <title>Le Coin Vert — Menu Design | Bilal Essatte</title>
        <meta
          name="description"
          content="Full bilingual menu design for Le Coin Vert café — 8 pages in French and Arabic, botanical aesthetic, designed in Adobe Illustrator and Photoshop."
        />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://bilalessatte.site/"},
            {"@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://bilalessatte.site/portfolio"},
            {"@type": "ListItem", "position": 3, "name": "Le Coin Vert", "item": "https://bilalessatte.site/portfolio/le-coin-vert"}
          ]
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-32 pb-24">
          <div className="container-custom">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link to="/" className="hover:text-primary transition-colors duration-200">Home</Link>
              <span>/</span>
              <Link to="/portfolio" className="hover:text-primary transition-colors duration-200">Portfolio</Link>
              <span>/</span>
              <span className="text-foreground">Le Coin Vert</span>
            </nav>

            <Button asChild variant="ghost" className="mb-8 gap-2">
              <Link to="/portfolio">
                <ArrowLeft className="w-4 h-4" />
                Back to portfolio
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
                Le Coin Vert
              </h1>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Graphic Designer
                </span>
                <span className="px-4 py-2 rounded-full bg-card border border-border text-sm">
                  January 2026
                </span>
                <span className="px-4 py-2 rounded-full bg-card border border-border text-sm">
                  Café / Restaurant
                </span>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                A complete 8-page bilingual menu for a café in Tangier —
                designed in French and Arabic, with a botanical aesthetic
                and custom food photography retouching.
              </p>
            </motion.div>

            {/* HERO IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16 rounded-3xl overflow-hidden max-w-md mx-auto"
            >
              <img
                src="https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1785873354/Black_And_Orange_Modern_Food_Menu_Landscape_A4__page-0008_oykhvz.jpg"
                alt="Le Coin Vert menu cover page"
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
                  <h2 className="text-3xl font-bold mb-6">About the Project</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Le Coin Vert is a café in Tangier offering breakfasts,
                    fresh juices, hot drinks and light meals. The owner needed
                    a full printed menu that matched the warm, natural character
                    of the place.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I designed all 8 pages from scratch in Adobe Illustrator —
                    a botanical floral aesthetic with a consistent sage green
                    and cream color system, bilingual in French and Arabic
                    throughout, with food photos retouched in Photoshop.
                  </p>
                </motion.div>
              </div>

              <div>
                <div className="bg-card rounded-2xl p-6 border border-border sticky top-32">
                  <h3 className="text-lg font-semibold mb-4">Project Info</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Client</p>
                      <p className="font-medium">Le Coin Vert, Tangier</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Role</p>
                      <p className="font-medium">Graphic Designer</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Date</p>
                      <p className="font-medium">January 2026</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Tools</p>
                      <p className="font-medium">Adobe Illustrator, Photoshop</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Pages</p>
                      <p className="font-medium">8 pages, bilingual FR/AR</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FULL WIDTH */}
            <div className="space-y-16 mb-16">

              {/* WHAT I DESIGNED */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <h2 className="text-3xl font-bold mb-6">What I Designed</h2>
                <ul className="space-y-4">
                  {whatIDesigned.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* MENU GALLERY */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">The Full Menu</h2>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                  Scroll through all 8 pages — drag or swipe to navigate.
                </p>
                <MaterialsGallery images={menuPages} />
              </motion.div>

              {/* LOOKING BACK */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <h2 className="text-3xl font-bold mb-6">Looking Back</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Designing a bilingual menu is a specific challenge —
                  Arabic reads right to left, French left to right, and
                  both have to feel balanced and equally readable on the
                  same page. Getting the typographic hierarchy right across
                  two languages and two scripts, while keeping the botanical
                  aesthetic consistent throughout 8 pages, was the real
                  design problem to solve here.
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
              <h2 className="text-2xl font-bold mb-8">See also</h2>
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

export default LeCoinVertPage;

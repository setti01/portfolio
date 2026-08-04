import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const AidaFoodPage = () => {
  const relatedProjects = [
    { title: 'Hotel Farah Tanger', category: 'Branding & Social Media', link: '/portfolio/hotel-farah' },
    { title: 'WeProd Maroc', category: 'Graphic Design', link: '/portfolio/weprod' },
  ];

  const visuals = [
    { src: "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1785816972/ftor_ramdan_w6ghot.jpg", alt: "Aida Food Ramadan menu display" },
    { src: "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1785816946/burger_tv_copy_lznibf.jpg", alt: "Aida Food burger menu display" },
    { src: "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1785816939/accompliment_pour_ftor_ramdan_lizlky.jpg", alt: "Aida Food Ramadan specials display" },
    { src: "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1785816937/PROMO_BURGER_xfr3uu.jpg", alt: "Aida Food burger promotion display" },
    { src: "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1785816926/pasticcio_promo_2_u1v7st.jpg", alt: "Aida Food pasticcio promotion display" },
    { src: "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1785816924/pasticcio_promo_k2d63x.jpg", alt: "Aida Food pasticcio special display" },
  ];

  const whatIBuilt = [
    "Designed a full set of TV display visuals for the restaurant screens",
    "Created Ramadan special menus — Ftor for 1 and 2 persons",
    "Designed burger menu display with full product catalog",
    "Created promotional visuals for daily and seasonal offers",
    "Delivered and set up the TV screens on-site at the restaurant",
  ];

  return (
    <>
      <Helmet>
        <title>Aida Food — Restaurant TV Visuals | Bilal Essatte</title>
        <meta
          name="description"
          content="TV display visuals designed and delivered for Aida Food restaurant — menus, promotions and seasonal specials, set up on-site."
        />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://bilalessatte.site/"},
            {"@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://bilalessatte.site/portfolio"},
            {"@type": "ListItem", "position": 3, "name": "Aida Food", "item": "https://bilalessatte.site/portfolio/aida-food"}
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
              <span className="text-foreground">Aida Food</span>
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
                Aida Food
              </h1>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Graphic Designer
                </span>
                <span className="px-4 py-2 rounded-full bg-card border border-border text-sm">
                  July 2023
                </span>
                <span className="px-4 py-2 rounded-full bg-card border border-border text-sm">
                  Restaurant / Food & Beverage
                </span>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                A full set of TV display visuals for a restaurant in Tangier —
                designed, delivered, and installed on-site.
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
                src="https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1785816972/ftor_ramdan_w6ghot.jpg"
                alt="Aida Food Ramadan menu TV display"
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
                    Aida Food is a restaurant in Tangier offering burgers, Moroccan
                    specialties and delivery. They wanted to replace their static
                    printed menus with dynamic TV displays — visuals that could
                    rotate through their full menu, promotions and seasonal offers
                    directly on screens inside the restaurant.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I designed the complete set of visuals, then went to the
                    restaurant myself to set up the TV screens and make sure
                    everything displayed correctly on-site.
                  </p>
                </motion.div>
              </div>

              <div>
                <div className="bg-card rounded-2xl p-6 border border-border sticky top-32">
                  <h3 className="text-lg font-semibold mb-4">Project Info</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Client</p>
                      <p className="font-medium">Aida Food, Tangier</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Role</p>
                      <p className="font-medium">Graphic Designer</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Date</p>
                      <p className="font-medium">July 2023</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Tools</p>
                      <p className="font-medium">Adobe Photoshop, Illustrator</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Delivery</p>
                      <p className="font-medium">On-site setup included</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FULL WIDTH */}
            <div className="space-y-16 mb-16">

              {/* WHAT I DID */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <h2 className="text-3xl font-bold mb-6">What I Did</h2>
                <ul className="space-y-4">
                  {whatIBuilt.map((item) => (
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
                <h2 className="text-3xl font-bold mb-6">The Visuals</h2>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                  Each visual was designed to work at TV resolution — high contrast,
                  bold typography, and clear pricing so customers could read from
                  across the restaurant.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {visuals.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: i * 0.08 }}
                      className="rounded-2xl overflow-hidden border border-border bg-card"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-auto"
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </div>
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
                  This was one of the first times I delivered a project that went
                  beyond a screen — I was physically in the restaurant setting up
                  the hardware and seeing the work displayed in its real environment.
                  Designing for TV resolution taught me to think about context:
                  who reads this, from how far, in what lighting, competing with
                  the noise of a busy restaurant.
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

export default AidaFoodPage;

import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BrowserFrame from '@/components/BrowserFrame.jsx';

const SmartSparesHubPage = () => {
  const relatedProjects = [
    { title: 'Hotel Farah Tanger', category: 'Branding & Social', link: '/portfolio/hotel-farah' },
    { title: 'WeProd Maroc', category: 'Graphic Design', link: '/portfolio/weprod' },
  ];

  const whatIBuilt = [
    "Brand identity and logo design",
    "Full homepage design, Apple-inspired direction",
    "Product search and category navigation system",
    "Blog / resources section",
    "B2B structure pages (shop, order, contact)",
    "Responsive design for mobile and desktop",
    "SEO setup: titles, meta descriptions, alt text, sitemap, internal linking",
  ];

  return (
    <>
      <Helmet>
        <title>Smart Spares Hub - Brand & Web Designer | Bilal Essatte</title>
        <meta
          name="description"
          content="A premium B2B platform for industrial spare parts — branding, web design and development from scratch."
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
              <span className="text-foreground">Smart Spares Hub</span>
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
                Smart Spares Hub
              </h1>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Brand & Web Designer
                </span>
                <span className="px-4 py-2 rounded-full bg-card border border-border text-sm">
                  B2B Industrial Platform
                </span>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-6">
                A B2B platform built from scratch for industrial spare parts sourcing —
                branding, web design, development and SEO, all designed and built by me.
              </p>

              <Button asChild variant="outline" className="rounded-full gap-2">
                <a href="https://www.smartspareshub.com/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Visit smartspareshub.com
                </a>
              </Button>
            </motion.div>

            {/* HERO SCREENSHOT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <BrowserFrame
                url="smartspareshub.com"
                image="https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783996886/Homepage_hkyuki.png"
                alt="Smart Spares Hub homepage"
                height="600px"
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
                    Smart Spares Hub is a B2B platform for industrial spare parts and
                    maintenance solutions. My cousin, who runs the business, asked me to
                    build the company's first website — his goal was a premium experience,
                    inspired by the Apple website, that would make procurement simple for
                    industrial clients.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I designed and built the entire project alone: brand identity, UI design,
                    WordPress development, and a printed roll-up for the business.
                  </p>
                </motion.div>
              </div>

              <div>
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="text-lg font-semibold mb-4">Project Info</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Client</p>
                      <p className="font-medium">Smart Spares Hub</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Role</p>
                      <p className="font-medium">Brand & Web Designer</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Duration</p>
                      <p className="font-medium">Logo: 2 days · Website: 10 days · Roll-up: 1 day</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Tools</p>
                      <p className="font-medium">WordPress, Elementor, Custom CSS</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Plugins</p>
                      <p className="font-medium">B2BKing, Wholesale Suite, WPForms, Yoast SEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FULL WIDTH FROM HERE */}
            <div className="space-y-16 mb-16">

              {/* CLIENT GOALS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <h2 className="text-3xl font-bold mb-6">The Goal</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Build the company's first website, with a premium image inspired by Apple's
                  design language. The site needed to present industrial products clearly,
                  build trust with B2B clients, and support the business as it grows.
                </p>
              </motion.div>

              {/* WHAT I BUILT */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <h2 className="text-3xl font-bold mb-6">What I Built</h2>
                <ul className="space-y-4">
                  {whatIBuilt.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* BRAND IDENTITY */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">Brand Identity</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                  I designed the logo and visual identity from scratch — a clean, industrial
                  aesthetic that matches the premium direction the client wanted, while
                  staying simple enough to work at any size, from a favicon to a printed roll-up.
                </p>
                <div className="max-w-sm rounded-2xl overflow-hidden border border-border bg-card p-12 flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783996736/Generated_Image_July_02_2026_-_7_42PM_blpcoz.jpg"
                    alt="Smart Spares Hub logo"
                    className="max-w-full h-auto"
                  />
                </div>
              </motion.div>

              {/* SCREENSHOTS GALLERY */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">The Website</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <BrowserFrame
                    url="smartspareshub.com/shop"
                    image="https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783996711/Product_listing_page_oh3yxw.png"
                    alt="Smart Spares Hub product listing page"
                    height="400px"
                  />
                  <BrowserFrame
                    url="smartspareshub.com/product"
                    image="https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783996716/A_single_product_detail_pag_sin1lx.png"
                    alt="Smart Spares Hub product detail page"
                    height="400px"
                  />
                </div>
                <div className="max-w-sm">
                  <BrowserFrame
                    url="smartspareshub.com (mobile)"
                    image="https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1783996850/Mobile_homepag_lwdbxl.png"
                    alt="Smart Spares Hub mobile homepage"
                    height="500px"
                  />
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
                <h2 className="text-3xl font-bold mb-6">Challenges</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Elementor has real limits when you're chasing a very specific, premium look —
                  I used custom CSS to build things the page builder couldn't do on its own.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The biggest challenge wasn't technical — it was matching my cousin's very
                  specific taste, shaped by studying the Apple website closely. Getting that
                  level of polish right took several rounds of refinement.
                </p>
              </motion.div>

              {/* RESULTS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <h2 className="text-3xl font-bold mb-6">Looking Back</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This project pushed me to build a real design system — consistent spacing,
                  reusable components, and a clear typographic hierarchy — for a B2B platform
                  that had to feel premium, not just functional. It's one of the projects I'm
                  most proud of, because I handled every part of it myself, from the first
                  sketch to the final line of CSS.
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

export default SmartSparesHubPage;
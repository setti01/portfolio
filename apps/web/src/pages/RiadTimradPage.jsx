import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BrowserFrame from '@/components/BrowserFrame.jsx';

const RiadTimradPage = () => {
  const relatedProjects = [
    { title: 'Smart Spares Hub', category: 'Brand & Web Design', link: '/portfolio/smart-spares-hub' },
    { title: 'Miel Chahda', category: 'E-Commerce & Web Design', link: '/portfolio/miel-chahda' },
  ];

  const whatIBuilt = [
    "Full homepage design and development",
    "Suites & rooms pages with individual room descriptions, photos and features",
    "Gallery page with photo grid",
    "Menu page",
    "About Us page",
    "Contact page with booking form and map",
    "Responsive design for mobile and desktop",
    "Written all website copy in English",
    "SEO setup: page titles, meta descriptions, alt text",
  ];

  return (
    <>
      <Helmet>
        <title>Riad Timrad — Hotel Website | Bilal Essatte</title>
        <meta
          name="description"
          content="Full WordPress website design, development and copywriting for Riad Timrad, a luxury riad hotel in Fès, Morocco."
        />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://bilalessatte.site/"},
            {"@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://bilalessatte.site/portfolio"},
            {"@type": "ListItem", "position": 3, "name": "Riad Timrad", "item": "https://bilalessatte.site/portfolio/riad-timrad"}
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
              <span className="text-foreground">Riad Timrad</span>
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
                Riad Timrad
              </h1>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Web Designer & Developer
                </span>
                <span className="px-4 py-2 rounded-full bg-card border border-border text-sm">
                  July 2025 — 21 days
                </span>
                <span className="px-4 py-2 rounded-full bg-card border border-border text-sm">
                  Luxury Hospitality
                </span>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-6">
                A full WordPress website for a luxury riad hotel in Fès — design,
                development, content writing and SEO, all delivered in 21 days.
              </p>

              <Button asChild variant="outline" className="rounded-full gap-2">
                <a href="https://riad-timrad.com/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Visit riad-timrad.com
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
                url="riad-timrad.com"
                image="https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1785797802/screencapture-riad-timrad-2026-08-04-00_55_35_1_icatsn.png"
                alt="Riad Timrad homepage"
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
                    Riad Timrad is a luxury riad hotel located in the heart of Fès,
                    Morocco. The owner wanted a complete online presence — a website
                    that would reflect the premium, authentic Moroccan experience
                    their guests come for.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I handled everything from scratch: the design direction, all page
                    layouts, development in WordPress with Elementor, every line of
                    copy written in English, and the full SEO setup across all pages.
                    The entire project was delivered in 21 days.
                  </p>
                </motion.div>
              </div>

              <div>
                <div className="bg-card rounded-2xl p-6 border border-border sticky top-32">
                  <h3 className="text-lg font-semibold mb-4">Project Info</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Client</p>
                      <p className="font-medium">Riad Timrad, Fès</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Role</p>
                      <p className="font-medium">Web Designer & Developer</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                      <p className="font-medium">July 2025 — 21 days</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Tools</p>
                      <p className="font-medium">WordPress, Elementor</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Scope</p>
                      <p className="font-medium">Design, Development, Copywriting, SEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FULL WIDTH */}
            <div className="space-y-16 mb-16">

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

              {/* ROOMS PAGE */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">Suites & Rooms</h2>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                  The rooms section was the most demanding part of the project.
                  Each suite needed its own page with photos, a feature list,
                  description, and pricing — all while maintaining a consistent
                  luxury feel across 5 different room types.
                </p>
                <BrowserFrame
                  url="riad-timrad.com/rooms"
                  image="https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1785797865/screencapture-riad-timrad-rooms-2026-08-04-00_50_45_1_favoea.png"
                  alt="Riad Timrad suites and rooms page"
                  height="500px"
                />
              </motion.div>

              {/* ABOUT PAGE */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">About the Riad</h2>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                  The About page needed to convey the authentic Moroccan character
                  of the riad — warm, welcoming, and premium. I wrote all the copy
                  from scratch in English to appeal to international guests.
                </p>
                <BrowserFrame
                  url="riad-timrad.com/about-us"
                  image="https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1785797940/screencapture-riad-timrad-about-us-2026-08-04-00_58_23_1_hs5apb.png"
                  alt="Riad Timrad about us page"
                  height="500px"
                />
              </motion.div>

              {/* CHALLENGE */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-6">
                  <p className="text-lg font-medium">
                    The hardest part wasn't the technical work — it was satisfying
                    a client with very specific taste and high expectations for
                    every detail.
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  The client had a clear vision of how the site should feel —
                  premium, warm, and distinctly Moroccan — but translating that
                  into design decisions required constant back-and-forth and
                  careful attention to details most clients wouldn't notice.
                  Getting the balance right between elegance and authenticity
                  across every page was the real challenge of this project.
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
                <h2 className="text-3xl font-bold mb-6">Looking Back</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This project pushed me to think beyond just building a website —
                  I had to consider the guest experience, the brand voice, and how
                  every page would feel to someone discovering the riad for the
                  first time from another country. Writing all the content myself
                  made me a better designer, because I had to understand the
                  business deeply before I could represent it visually.
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

export default RiadTimradPage;

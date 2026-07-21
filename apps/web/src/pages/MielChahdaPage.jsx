import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const MielChahdaPage = () => {
  const relatedProjects = [
    { title: 'Smart Spares Hub', category: 'Brand & Web Design', link: '/portfolio/smart-spares-hub' },
    { title: 'WeProd Maroc', category: 'Graphic Design', link: '/portfolio/weprod' },
  ];

  const phase1Items = [
    "Configured LiteSpeed Cache and enabled browser caching",
    "Set up WebP image delivery via QUIC.cloud",
    "Compressed raw images from 1–3 MB down to 100–300 KB",
    "Minified and deferred non-critical JS/CSS while keeping WooCommerce checkout intact",
    "Identified a heavy slider plugin as the primary mobile bottleneck and removed it",
    "Safely deactivated conflicting plugins without disrupting live Cash-on-Delivery orders",
  ];

  const phase2Items = [
    "Completely rebuilt the homepage layout in Elementor",
    "Removed artificial urgency timers, duplicate sections and clutter",
    "Created 'Nos Variétés de Miel' section with 12 custom botanical illustrations",
    "Integrated 4 client testimonials and fixed the Coffret Chahda section",
    "Audited full WooCommerce catalog — deleted 15 invalid/duplicate products",
    "Created 6 clean product categories: Collection du Miel, Amlou Marocain, Mélange du Miel, Produits de la Ruche, Fruits Secs, Pâte à Tartiner",
    "Configured exact weight variations (125g / 250g / 500g / 1kg) for all products",
    "Retouched and prepared all product images with clean studio-style backgrounds",
    "Deployed Rank Math SEO across all 37 product pages with original French content",
    "Updated footer with real contact numbers, location and partner logos (Carrefour, Aswak Salam, ONSSA)",
  ];

  const productImages = [
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1784601157/Gemini_Generated_Image_8rc6dm8rc6dm8rc6_iligih.png",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1784601145/Gemini_Generated_Image_o9naozo9naozo9na_y4yrny.png",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1784601296/Gemini_Generated_Image_4eyt2w4eyt2w4eyt_a5u11q.png",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1784601294/Gemini_Generated_Image_bma7xxbma7xxbma7_cbrkup.png",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1784601092/Gemini_Generated_Image_vhw5gbvhw5gbvhw5_xwbxv0.png",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1784601035/Gemini_Generated_Image_i5apxdi5apxdi5ap_qnmpqn.png",
  ];

  return (
    <>
      <Helmet>
        <title>Miel Chahda — E-Commerce Turnaround | Bilal Essatte</title>
        <meta
          name="description"
          content="Full WordPress e-commerce recovery for Miel Chahda: speed optimization, WooCommerce restructuring, homepage rebuild and SEO — desktop performance from 49 to 71."
        />
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
              <span className="text-foreground">Miel Chahda</span>
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
                Miel Chahda
              </h1>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Web Designer & Developer
                </span>
                <span className="px-4 py-2 rounded-full bg-card border border-border text-sm">
                  April – June 2026
                </span>
                <span className="px-4 py-2 rounded-full bg-card border border-border text-sm">
                  E-Commerce / Agricultural Cooperative
                </span>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-6">
                A full technical recovery and redesign for a Moroccan honey cooperative —
                fixing a site left in critical condition by a previous developer, without
                a single hour of downtime on live orders.
              </p>

              <Button asChild variant="outline" className="rounded-full gap-2">
                <a href="https://mielchahda.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Visit mielchahda.com
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
                    <span className="text-sm font-medium text-red-400">Before — broken version</span>
                  </div>
                  <div className="overflow-y-auto max-h-[500px]">
                    <img
                      src="https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1784601521/screencapture-mielchahda-2026-06-12-00_32_43_oswuhz.png"
                      alt="Miel Chahda homepage before — cluttered, broken version"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden border border-primary/30 bg-card">
                  <div className="px-4 py-2 bg-primary/10 border-b border-border flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm font-medium text-primary">After — rebuilt version</span>
                  </div>
                  <div className="overflow-y-auto max-h-[500px]">
                    <img
                      src="https://res.cloudinary.com/dvcaobhqt/image/upload/q_auto,f_auto/v1784601445/screencapture-mielchahda-2026-07-21-04_02_37_leusvs.png"
                      alt="Miel Chahda homepage after — clean, rebuilt version"
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
                  <h2 className="text-3xl font-bold mb-6">About the Project</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Coopérative Agricole CHAHDA is a Moroccan honey producer based in
                    El Jadida. I originally built their e-commerce site in 2020. In 2024,
                    the site went offline due to sales challenges. When the owner relaunched,
                    he hired another developer — who left the site in critical condition:
                    over 30 active plugins generating conflicting scripts, uncompressed
                    images weighing up to 3 MB each, broken category structures, and a
                    mobile performance score of 41/100 with a 72.5 second Largest
                    Contentful Paint.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The owner brought me back to fix it. The challenge wasn't rebuilding
                    the site — it was fixing it without taking it down, while live
                    Cash-on-Delivery orders were still coming in.
                  </p>
                </motion.div>
              </div>

              <div>
                <div className="bg-card rounded-2xl p-6 border border-border sticky top-32">
                  <h3 className="text-lg font-semibold mb-4">Project Info</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Client</p>
                      <p className="font-medium">Coopérative Agricole CHAHDA</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Role</p>
                      <p className="font-medium">Web Designer & Developer</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                      <p className="font-medium">April – June 2026</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Tools</p>
                      <p className="font-medium">WordPress, WooCommerce, Elementor, Rank Math SEO, LiteSpeed Cache, Gemini AI, Canva</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Budget</p>
                      <p className="font-medium">2,000 MAD (Speed optimization + Full rebuild)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FULL WIDTH FROM HERE */}
            <div className="space-y-16 mb-16">

              {/* PERFORMANCE RESULTS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">Performance Results</h2>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                  Before touching the design, the priority was stopping the site from
                  bleeding potential customers during load. These are the real numbers
                  from PageSpeed Insights, before and after Phase 1.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Desktop */}
                  <div className="bg-card rounded-2xl p-6 border border-border">
                    <h3 className="font-semibold text-lg mb-4">Desktop</h3>
                    <div className="space-y-4">
                      {[
                        { label: "Performance Score", before: "49 / 100", after: "71 / 100", good: true },
                        { label: "LCP", before: "16.1 s", after: "2.9 s", good: true },
                        { label: "FCP", before: "1.0 s", after: "Improved", good: true },
                        { label: "Speed Index", before: "13.7 s", after: "Improved", good: true },
                      ].map((row) => (
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

                  {/* Mobile */}
                  <div className="bg-card rounded-2xl p-6 border border-border">
                    <h3 className="font-semibold text-lg mb-4">Mobile</h3>
                    <div className="space-y-4">
                      {[
                        { label: "Performance Score", before: "41 / 100", after: "49–55 / 100", good: true },
                        { label: "LCP", before: "72.5 s", after: "13.9 s", good: true },
                        { label: "FCP", before: "6.0 s", after: "2.0–2.7 s", good: true },
                        { label: "Speed Index", before: "55.0 s", after: "9.8–9.9 s", good: true },
                      ].map((row) => (
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
                <h2 className="text-3xl font-bold mb-2">Phase 1 — Speed & Technical Recovery</h2>
                <p className="text-muted-foreground mb-6">April – May 2026</p>
                <ul className="space-y-4">
                  {phase1Items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0"></div>
                      <span className="text-muted-foreground">{item}</span>
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
                <h2 className="text-3xl font-bold mb-2">Phase 2 — Rebuild & Restructure</h2>
                <p className="text-muted-foreground mb-6">May – June 2026</p>
                <ul className="space-y-4">
                  {phase2Items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0"></div>
                      <span className="text-muted-foreground">{item}</span>
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
                <h2 className="text-3xl font-bold mb-6">Product Photography</h2>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                  All product images were retouched and prepared for web — original
                  photos edited with clean studio-style backgrounds (white/cream tones)
                  for a consistent, premium look across the catalog.
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
                <h2 className="text-3xl font-bold mb-6">What Made This Hard</h2>
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-6">
                  <p className="text-lg font-medium">
                    Fixing someone else's mess is harder than building from scratch.
                    Every change carried the risk of breaking a live checkout while
                    real customers were placing orders.
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  The previous developer had left the site with over 30 active plugins
                  generating conflicting scripts and layout breaks. Diagnosing which
                  plugin was causing which problem — without simply deactivating everything
                  at once and breaking the site — required methodical, isolated testing.
                  Every optimization was verified against live WooCommerce functionality
                  before being kept.
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
                  This project confirmed something I already suspected: performance
                  optimization and technical debt recovery require a different mindset
                  than new builds. You have to understand what's already there before
                  you can improve it — and you have to move carefully, because someone's
                  business is running on it while you work.
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

export default MielChahdaPage;
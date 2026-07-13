import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import MaterialsGallery from '@/components/MaterialsGallery.jsx';

const WeProdPage = () => {
  const relatedProjects = [
    {
      title: 'Lamara',
      category: 'Web Design',
      link: '/portfolio/lamara',
    },
    {
      title: 'Omega Sushi Tanger',
      category: 'Branding & Social',
      link: '/portfolio/omega-sushi',
    },
  ];

  const whatIDid = [
    "Designed social media posts and stories",
    "Created roll-ups and print materials",
    "Designed event tickets",
    "Prepared sponsorship dossiers",
    "Retouched photos for marketing campaigns",
    "Created branding assets for multiple clients",
    "Prepared files for professional printing",
    "Worked with community managers, videographers and a 3D designer",
  ];

  const whatILearned = [
    "How a real creative agency works day to day",
    "How to prepare files for large-format printing",
    "How to build a full campaign, not just single posts",
    "How to stay creative under tight, repeating deadlines",
    "How to pitch an idea to a founder and see it become real",
  ];

  const catalogueImages = [
    "https://res.cloudinary.com/dvcaobhqt/image/upload/v1783879675/photo_5_2026-07-10_20-02-35_mlaopi.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/v1783879674/photo_6_2026-07-10_20-02-35_ykairl.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/v1783879671/photo_7_2026-07-10_20-02-35_g2ywx4.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/v1783879674/photo_8_2026-07-10_20-02-35_tqp6ng.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/v1783879677/photo_9_2026-07-10_20-02-35_zbd0ai.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/v1783879683/photo_10_2026-07-10_20-02-35_z0f35a.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/v1783879683/photo_11_2026-07-10_20-02-35_omrcac.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/v1783879684/photo_12_2026-07-10_20-02-35_bfhl46.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/v1783879671/photo_13_2026-07-10_20-02-35_vokvjp.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/v1783879667/photo_14_2026-07-10_20-02-35_e1ankb.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/v1783879683/photo_15_2026-07-10_20-02-35_tucuix.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/v1783879668/photo_16_2026-07-10_20-02-35_fihrej.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/v1783879664/photo_17_2026-07-10_20-02-35_uajlio.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/v1783879658/photo_18_2026-07-10_20-02-35_mudjoz.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/v1783879660/photo_19_2026-07-10_20-02-35_vu6qtc.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/v1783879662/photo_20_2026-07-10_20-02-35_jvv4uf.jpg",
    "https://res.cloudinary.com/dvcaobhqt/image/upload/v1783879658/photo_21_2026-07-10_20-02-35_tppm9y.jpg",
  ];

  return (
    <>
      <Helmet>
        <title>WeProd Maroc - Graphic Designer | Bilal Essatte</title>
        <meta
          name="description"
          content="My first experience inside a creative agency: branding, social media, print and event communication for WeProd Maroc."
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
              <span className="text-foreground">WeProd Maroc</span>
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
                WeProd Maroc
              </h1>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Graphic Designer
                </span>
                <span className="px-4 py-2 rounded-full bg-card border border-border text-sm">
                  July 2024 — November 2024
                </span>
                <span className="px-4 py-2 rounded-full bg-card border border-border text-sm">
                  Communication & Events Agency
                </span>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                My first experience inside a creative agency, where I worked on branding,
                social media, print design and event communication for hotels,
                restaurants and local brands.
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
                src="https://res.cloudinary.com/dvcaobhqt/image/upload/v1783910220/WhatsApp_Image_2025-05-04_at_00.39.05_3_betqh6.jpg"
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
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold mb-6">About WeProd</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    WeProd Maroc is one of the leading communication and event agencies in
                    Tangier. The agency works with hotels, restaurants, beauty brands and
                    companies, creating everything from social media campaigns to large events,
                    branding and print materials.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This was my first experience working inside a professional creative agency.
                    It completely changed the way I see design, teamwork and communication.
                  </p>
                </motion.div>
              </div>

              <div>
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="text-lg font-semibold mb-4">Project Info</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Agency</p>
                      <p className="font-medium">WeProd Maroc</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Role</p>
                      <p className="font-medium">Graphic Designer</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Duration</p>
                      <p className="font-medium">July 2024 — November 2024</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Tools</p>
                      <p className="font-medium">Adobe Photoshop, Illustrator, InDesign</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Clients</p>
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
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <h2 className="text-3xl font-bold mb-6">How I Joined WeProd</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Before joining WeProd, I was working as a freelance graphic designer.
                  Freelancing alone wasn't giving me enough stability, and I wanted real
                  experience inside a creative agency.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A friend who worked at WeProd told me they were looking for a graphic
                  designer. I applied, heard nothing for a few days, and almost forgot about
                  it. Then one morning I woke up to several missed calls. When they called
                  back, the first thing I heard was: "Bilal, I think you don't really want
                  this job!" We both laughed, and a few days later I had my very first job
                  interview.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I passed the interviews with the Community Manager, HR and the founder,
                  and started working that same day.
                </p>
              </motion.div>

              {/* WHAT I DID */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <h2 className="text-3xl font-bold mb-6">What I Did</h2>
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
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">Vehicle Branding</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                  I also designed the full branding for WeProd's own company vehicle — used for
                  events and equipment transport across Tangier. The design included the WeProd
                  logo, contact details, a small map showing the agency's headquarters and
                  operation sites, and a visual built around the agency's core services:
                  sound, stage, lighting and event structures.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2 rounded-2xl overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dvcaobhqt/image/upload/v1783909807/ChatGPT_Image_13_juil._2026_04_27_21_fvb9ji.png"
                      alt="WeProd company vehicle branding - side view"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dvcaobhqt/image/upload/v1783909808/ChatGPT_Image_13_juil._2026_04_19_40_pyppwn.png"
                      alt="WeProd company vehicle branding - front view"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dvcaobhqt/image/upload/v1783909807/ChatGPT_Image_13_juil._2026_04_29_42_b2o1g7.png"
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
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">Event Materials Catalogue</h2>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                  I designed a catalogue covering all the equipment and services used by WeProd's
                  event team: tents and stands (chapiteaux), electrical setup, lighting, sound,
                  audiovisual equipment, decor and furniture, scenography, and printing.
                </p>

                <MaterialsGallery images={catalogueImages} />
              </motion.div>

              {/* CAMPAIGN GALLERY — placeholder heading/copy, pending your answers */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">More Campaigns at WeProd</h2>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                  TEXT PENDING — waiting on your answers below.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dvcaobhqt/image/upload/v1783910220/WhatsApp_Image_2025-05-04_at_00.39.05_2_pmszto.jpg"
                      alt="WeProd national football team sponsorship campaign"
                      className="w-full h-full object-cover aspect-[4/5]"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dvcaobhqt/image/upload/v1783910220/WhatsApp_Image_2025-05-04_at_00.39.05_4_i3s2tl.jpg"
                      alt="WeProd Auto Expo promotional visual"
                      className="w-full h-full object-cover aspect-[4/5]"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dvcaobhqt/image/upload/v1783910220/WhatsApp_Image_2025-05-04_at_00.39.05_5_w2bzmn.jpg"
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
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <h2 className="text-3xl font-bold mb-6">Featured Project: Traditional Women's Event</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The project I'm most proud of at WeProd was a large, traditional
                  women-only event. I had only just joined the agency, but during a team
                  meeting the founder asked everyone for marketing ideas — so I proposed one.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I called it the "Blind Ticket": people could buy their ticket before the
                  guest artist was announced. It created curiosity and got people talking
                  about the event early.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Once the idea was approved, I designed the full campaign around it:
                  the sponsorship dossier, roll-up banners, event tickets, artist
                  announcements and all the Instagram content.
                </p>
              </motion.div>

              {/* WHAT I LEARNED */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <h2 className="text-3xl font-bold mb-6">What I Learned</h2>

                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-6">
                  <p className="text-lg font-medium">
                    "Keep It Stupid Simple" — a colleague taught me this early on, and it
                    changed how I approach every design since.
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
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <h2 className="text-3xl font-bold mb-6">Looking Back</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I joined WeProd mostly thinking of myself as a graphic designer. I left
                  with a much broader view — of branding, print production, event marketing
                  and working as part of a team. This experience confirmed that I enjoy
                  adapting quickly to new challenges and industries.
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

export default WeProdPage;
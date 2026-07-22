import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Calendar, Globe, GraduationCap, Briefcase, Award } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const AboutPage = () => {
  const { t } = useTranslation();

  const experiences = [
    { 
      date: t('about.exp1_date'), 
      title: t('about.exp1_title'), 
      company: t('about.exp1_company'),
      description: t('about.exp1_desc')
    },
    { 
      date: t('about.exp2_date'), 
      title: t('about.exp2_title'), 
      company: t('about.exp2_company'),
      description: t('about.exp2_desc')
    },
    { 
      date: t('about.exp3_date'), 
      title: t('about.exp3_title'), 
      company: t('about.exp3_company'),
      description: t('about.exp3_desc')
    },
  ];

  const education = [
    { date: t('about.edu1_date'), title: t('about.edu1_title'), school: t('about.edu1_school') },
    { date: t('about.edu2_date'), title: t('about.edu2_title'), school: t('about.edu2_school'), desc: t('about.edu2_desc') },
    { date: t('about.edu3_date'), title: t('about.edu3_title'), school: t('about.edu3_school') },
    { date: t('about.edu4_date'), title: t('about.edu4_title'), school: t('about.edu4_school') },
    { date: t('about.edu5_date'), title: t('about.edu5_title'), school: t('about.edu5_school') },
  ];

  const skillCategories = [
    { title: t('about.skill_designTools'), skills: t('about.skill_designTools_list', { returnObjects: true }) },
    { title: t('about.skill_webTools'), skills: t('about.skill_webTools_list', { returnObjects: true }) },
    { title: t('about.skill_seoMarketing'), skills: t('about.skill_seoMarketing_list', { returnObjects: true }) },
    { title: t('about.skill_aiTools'), skills: t('about.skill_aiTools_list', { returnObjects: true }) },
    { title: t('about.skill_officeTools'), skills: t('about.skill_officeTools_list', { returnObjects: true }) },
  ];

  const interests = [
    t('about.interest_photo'),
    t('about.interest_travel'),
    t('about.interest_football'),
    t('about.interest_chess'),
    t('about.interest_gaming')
  ];

  return (
    <>
      <Helmet>
        <title>{t('about.title')}</title>
        <meta name="description" content={t('about.metaDesc')} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-32 pb-24">
          <div className="container-custom">
            {/* 1. HERO & BIO SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32 pt-10">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">Bilal <span className="text-primary">ESSATTE</span></h1>
                <p className="text-xl text-muted-foreground mb-8">{t('about.role')}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>{t('about.birthdate')}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>{t('about.location')}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>+212 620 983 108</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="truncate">settibilal1@gmail.com</span>
                  </div>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl mb-8">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    {t('about.languages')}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { lang: t('about.lang_ar'), level: t('about.lang_arLevel') },
                      { lang: t('about.lang_fr'), level: t('about.lang_frLevel') },
                      { lang: t('about.lang_en'), level: t('about.lang_enLevel') },
                    ].map((l, i) => (
                      <div key={i} className="flex flex-col items-center bg-secondary rounded-xl px-4 py-2 border border-border">
                        <span className="font-semibold text-foreground text-sm">{l.lang}</span>
                        <span className="text-xs text-primary mt-1">{l.level}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p className="font-medium text-foreground">{t('about.missionTitle')}</p>
                  <p className="italic border-l-4 border-primary pl-4 py-2 bg-primary/5 rounded-r-lg">
                    {t('about.missionQuote')}
                  </p>
                </div>
                
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col gap-6"
              >
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] border border-border bg-secondary flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/dfonsuqx6/image/upload/q_auto/f_auto/v1780700743/Gemini_Generated_Image_tz97evtz97evtz97_bcbvnr.png"
                    alt="Bilal ESSATTE Workspace"
                    className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                  />
                </div>
                
              </motion.div>
            </div>

            {/* 2 & 3. TIMELINES (Experience & Education) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
                <div className="flex items-center gap-3 mb-10">
                  <Briefcase className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold">{t('about.expTitle')}</h2>
                </div>
                <div className="relative border-l border-border ml-4 space-y-12 py-4">
                  {experiences.map((exp, i) => (
                    <div key={i} className="relative pl-8">
                      <div className="timeline-dot" />
                      <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                        {exp.date}
                      </span>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-sm font-medium text-muted-foreground mb-2">{exp.company}</p>
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4 mt-12">
                  {[
                    { value: '7+', label: t('about.expYears') },
                    { value: '50+', label: t('about.expClients') },
                    { value: '100+', label: t('about.expProjects') },
                    { value: '5', label: t('about.expSectors') },
                  ].map((stat, i) => (
                    <div key={i} className="bg-card border border-border rounded-2xl p-4 text-center">
                      <p className="text-3xl font-bold text-primary">{stat.value}</p>
                      <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
                <div className="flex items-center gap-3 mb-10">
                  <GraduationCap className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold">{t('about.eduTitle')}</h2>
                </div>
                <div className="relative border-l border-border ml-4 space-y-10 py-4">
                  {education.map((edu, i) => (
                    <div key={i} className="relative pl-8">
                      <div className="timeline-dot" />
                      <span className="text-sm font-bold text-primary mb-1 block">
                        {edu.date}
                      </span>
                      <h3 className="text-lg font-semibold">{edu.title}</h3>
                      <p className="text-muted-foreground">{edu.school}</p>
                      {edu.desc && <p className="text-sm text-primary/80 mt-1">{edu.desc}</p>}
                    </div>
                  ))}
                </div>

                <div className="mt-12 bg-card border border-border p-6 rounded-2xl">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    {t('about.certTitle')}
                  </h3>
                  {[
                    { name: t('about.cert1_name'), org: t('about.cert1_org'), badge: t('about.cert1_badge') },
                    { name: t('about.cert2_name'), org: t('about.cert2_org'), badge: t('about.cert2_badge') },
                    { name: t('about.cert3_name'), org: t('about.cert3_org'), badge: t('about.cert3_badge') },
                    { name: t('about.cert4_name'), org: t('about.cert4_org'), badge: t('about.cert4_badge') },
                  ].map((cert, i) => (
                    <div key={i} className="flex items-center justify-between border-b border-border/50 pb-3 mb-3 last:border-0 last:pb-0 last:mb-0">
                      <div>
                        <p className="font-medium">{cert.name}</p>
                        <p className="text-sm text-muted-foreground">{cert.org}</p>
                      </div>
                      <span className="text-xs bg-secondary px-2 py-1 rounded text-secondary-foreground">{cert.badge}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* 4. TECHNICAL SKILLS GRID */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="mb-32">
              <h2 className="text-3xl font-bold mb-12 text-center">{t('about.skillsTitle')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, i) => (
                  <div key={i} className="bg-card p-8 rounded-3xl border border-border">
                    <h3 className="text-xl font-bold mb-6 text-foreground">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, j) => (
                        <span key={j} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

           
           {/* CV DOWNLOAD */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">{t('about.cvTitle')}</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">

  <a
    href="https://res.cloudinary.com/dvcaobhqt/raw/upload/v1784235856/Bilal_ESSATTE_CV_English_njksbz.docx"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-all duration-300 hover:scale-105"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
    {t('about.cvEnglish')}
  </a>

  <a
    href="https://res.cloudinary.com/dvcaobhqt/raw/upload/v1784235856/Bilal_ESSATTE_CV_Francais_ut3qvg.docx"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border rounded-full font-medium hover:border-primary hover:text-primary transition-all duration-300 hover:scale-105"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
    {t('about.cvFrench')}
  </a>

</div>
            </motion.div>

            {/* 5. INTERESTS */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="text-center">
              <h2 className="text-3xl font-bold mb-8">{t('about.interestsTitle')}</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {interests.map((interest, i) => (
                  <div key={i} className="px-6 py-3 rounded-2xl bg-secondary text-secondary-foreground font-medium">
                    {interest}
                  </div>
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

export default AboutPage;
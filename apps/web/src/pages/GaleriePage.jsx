// Galerie page v2
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FilterButton from '@/components/FilterButton.jsx';

const GaleriePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const categories = ['Tous', 'Nature', 'Mer', 'Lieux', 'Ciel', 'Animaux'];

  const photos = [
    { category: 'Lieux', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1784018121/SaveClip.App_541125018_18288124855269531_7216103234370541825_n_v3fy2h.jpg', title: 'Lumière' },
    { category: 'Lieux', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1784018117/SaveClip.App_673777500_18319370836269531_5696693179457021000_n_lywzmv.jpg', title: 'Rue' },
    { category: 'Lieux', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1784018276/SaveClip.App_657757297_18316395769269531_1877652143440831742_n_gzk93y.jpg', title: 'Nuit' },
    { category: 'Lieux', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1784018110/SaveClip.App_670354793_18317923576269531_3370887816899599063_n_im8vr6.jpg', title: 'Silhouette' },
    { category: 'Animaux', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1784018302/SaveClip.App_658224802_18316647160269531_5989325271558179002_n_jidq9w.jpg', title: 'Oiseaux' },
    { category: 'Lieux', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1784018106/SaveClip.App_589902700_18305967697269531_2287536362436396419_n_dmbxec.jpg', title: 'Minaret' },
    { category: 'Lieux', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1784018103/SaveClip.App_619205942_18306060304269531_1021390996577893692_n_quzz4e.jpg', title: 'Prisme' },
    { category: 'Lieux', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1784018086/SaveClip.App_520015550_18282587833269531_4173893737292823671_n_qsewnr.jpg', title: 'Ville la nuit' },
    { category: 'Ciel', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1784018344/SaveClip.App_514701350_18281375656269531_6690992916962221608_n_cckyy1.jpg', title: 'Tanger' },
    { category: 'Mer', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1784018038/SaveClip.App_540451193_18288502063269531_1236490757285096960_n_jf2wdi.jpg', title: 'Plage' },
    { category: 'Animaux', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1784018378/SaveClip.App_566502108_803162492685752_7773045523321784584_n_svpyki.jpg', title: 'Cheval' },
    { category: 'Lieux', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1784018020/SaveClip.App_504461994_18280452649269531_1946841429243247914_n_mqcmxt.jpg', title: 'Tour' },
    { category: 'Nature', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1784018005/SaveClip.App_504103463_18279991642269531_6533766273608273152_n_tjahp5.jpg', title: 'Champs' },
    { category: 'Lieux', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1784018413/SaveClip.App_565603873_1304764394450210_1511096720988048518_n_lyhdtc.jpg', title: 'Village' },
    { category: 'Nature', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1784017987/SaveClip.App_552533525_2819980004852374_2726305656796955975_n_oz49ii.jpg', title: 'Fleurs' },
    { category: 'Lieux', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1784017980/SaveClip.App_566440746_1358454529329001_5969670664588634323_n_swgsjf.jpg', title: 'Brume' },
    { category: 'Nature', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1784017971/SaveClip.App_566998106_1209611864325079_6986175182801536328_n_hllqby.jpg', title: 'Arbres' },
    { category: 'Nature', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1784018441/SaveClip.App_560538338_1419091089153302_2101968695548538501_n_yckk5z.jpg', title: 'Vue aérienne' },
    { category: 'Lieux', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1784017936/SaveClip.App_569623479_1355773666068003_208051021617588440_n_p6jwww.jpg', title: 'Fenêtre' },
    { category: 'Mer', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1784018504/SaveClip.App_570597051_1437117894827727_7921576588226498028_n_dygpqh.jpg', title: 'Lac' },
    { category: 'Nature', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1784018526/SaveClip.App_587593070_18104712682632468_2946105208115117830_n_zrruqd.jpg', title: 'Vallée' },
    { category: 'Ciel', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1784017927/SaveClip.App_570888672_1311580473563968_7106701734354555327_n_wgqx10.jpg', title: 'Ciel rose' },
    { category: 'Ciel', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1784017921/SaveClip.App_527170385_791520853454247_3508185672207928429_n_q4jtkd.jpg', title: 'Reflet du ciel' },
    { category: 'Nature', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1784018552/SaveClip.App_564639549_18071367077464581_8966811614612323275_n_atdgbu.jpg', title: 'Forêt' },
    { category: 'Ciel', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1784017911/SaveClip.App_566216411_1713245522563817_5254193873614907410_n_z0iutx.jpg', title: 'Nuages' },
    { category: 'Ciel', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1784018237/SaveClip.App_567150333_1513541349792741_1316143962995684124_n_jwjpaj.jpg', title: 'Coucher de soleil' },
    { category: 'Lieux', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1784017829/SaveClip.App_566006239_3152493134953433_1432647048531340387_n_fcugb5.jpg', title: 'Immeuble' },
    { category: 'Lieux', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1784017819/SaveClip.App_572970996_18084782005978422_8475307098351282155_n_o5zjlw.jpg', title: 'Enseigne' },
    { category: 'Nature', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1784017801/SaveClip.App_573389016_18072733208206917_691704868001635834_n_rr1xvc.jpg', title: 'Palmier' },
    { category: 'Lieux', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1784017784/SaveClip.App_576611397_18377794552145439_6632191229761167865_n_jec66d.jpg', title: 'Reflet' },
    { category: 'Nature', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1784017772/SaveClip.App_566442561_18101817493729485_5314417390953335129_n_kxtncm.jpg', title: 'Parc' },
    { category: 'Mer', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1784017758/SaveClip.App_557724611_2591044234605686_8166326519581747869_n_lhzesp.jpg', title: 'Coucher de soleil sur mer' },
    { category: 'Nature', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1784018199/SaveClip.App_560861696_1807700796777787_1974241415027960375_n_djcgpw.jpg', title: 'Montagne' },
    { category: 'Animaux', image: 'https://res.cloudinary.com/dvcaobhqt/image/upload/v1784017715/SaveClip.App_561239491_1474074486983181_7568685457914062246_n_wr2mz5.jpg', title: 'Oiseau' },
  ];

  const filtered = selectedCategory === 'Tous'
    ? photos
    : photos.filter(p => p.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Galerie - Bilal ESSATTE | Photographie</title>
        <meta name="description" content="Galerie photo personnelle de Bilal ESSATTE — Nature, Mer, Lieux, Ciel et Animaux." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-32 pb-24">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 pt-10"
            >
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                Ma <span className="text-primary">Galerie</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Photographie personnelle — un regard sur le monde à travers mon objectif.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-3 mb-16"
            >
              {categories.map((cat) => (
                <FilterButton
                  key={cat}
                  label={cat}
                  isActive={selectedCategory === cat}
                  onClick={() => setSelectedCategory(cat)}
                />
              ))}
            </motion.div>

            <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              <AnimatePresence mode="popLayout">
                {filtered.map((photo, index) => (
                  <motion.div
                    key={photo.title + index}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="break-inside-avoid rounded-2xl overflow-hidden border border-border"
                  >
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default GaleriePage;
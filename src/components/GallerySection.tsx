import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_ITEMS, type GalleryItem } from '../data/academyData';
import { Maximize2, X, Camera } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Classroom', 'Faculty', 'Students', 'Campus'];

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider text-blue-700 bg-blue-100/70 border border-blue-200">
              <Camera className="w-3.5 h-3.5 text-blue-600" />
              Academy Environment & Life
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Our Learning Space & <span className="animate-gradient-text-light">Classroom Gallery</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Take a glance at our real learning atmosphere, small-batch classrooms, individual mentorship, and campus in Kudasan.
            </p>
          </div>
        </AnimatedSection>

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 ${
                activeCategory === cat
                  ? 'text-white shadow-md shadow-blue-600/20'
                  : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200'
              }`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeGalleryCatLightBg"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div layout className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                onClick={() => setActiveImage(item)}
                className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200 cursor-pointer shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] font-black uppercase tracking-widest text-sky-300">
                    {item.category}
                  </span>
                  <h3 className="text-base font-extrabold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-200 line-clamp-1 mt-0.5 font-medium">
                    {item.caption}
                  </p>

                  <div className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-bold text-sky-300">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Expand view</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-rose-600 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative aspect-video max-h-[70vh] bg-black">
                <img
                  src={activeImage.imageUrl}
                  alt={activeImage.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 bg-white space-y-1">
                <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                  {activeImage.category}
                </span>
                <h3 className="text-xl font-black text-slate-900">
                  {activeImage.title}
                </h3>
                <p className="text-sm text-slate-600 font-medium">
                  {activeImage.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

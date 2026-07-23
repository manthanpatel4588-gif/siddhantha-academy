import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2, MessageCircle } from 'lucide-react';
import { REVIEWS, ACADEMY_DATA } from '../data/academyData';
import { AnimatedSection } from './AnimatedSection';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-white text-slate-900 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200">
              Student & Parent Reviews
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              What Our Community Says About <span className="animate-gradient-text-light">Siddhantha Academy</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Real feedback from Google Maps listing reviews by parents and students in Kudasan, Gandhinagar.
            </p>
          </div>
        </AnimatedSection>

        {/* Reviews Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {REVIEWS.map((rev, idx) => (
            <AnimatedSection key={rev.id} direction="up" delay={idx * 0.15}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-50/80 rounded-3xl p-8 border border-slate-200/90 hover:bg-white hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full relative group"
              >
                <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-100 group-hover:text-blue-200 transition-colors pointer-events-none" />

                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Comment */}
                  <blockquote className="mt-5 text-base font-semibold text-slate-800 leading-relaxed italic">
                    "{rev.comment}"
                  </blockquote>
                </div>

                {/* Footer details */}
                <div className="mt-8 pt-5 border-t border-slate-200/80 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-900">{rev.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">{rev.role}</p>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold bg-blue-50 text-blue-700 border border-blue-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>Google Review</span>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Rating Banner */}
        <AnimatedSection direction="up" delay={0.4} className="mt-14">
          <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center font-black text-amber-600 text-2xl shadow-sm">
                5.0 ★
              </div>
              <div>
                <h4 className="text-lg font-extrabold text-slate-900">Rated Excellent on Google Maps</h4>
                <p className="text-xs text-slate-500 font-medium">Based on verified local parent and student reviews in Gandhinagar</p>
              </div>
            </div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={ACADEMY_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Connect on WhatsApp</span>
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

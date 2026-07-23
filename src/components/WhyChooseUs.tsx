import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, TrendingUp, Smile, BookOpenCheck, ShieldCheck, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US, ACADEMY_DATA } from '../data/academyData';
import { AnimatedSection } from './AnimatedSection';

export const WhyChooseUs: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    UserCheck: UserCheck,
    TrendingUp: TrendingUp,
    Smile: Smile,
    BookOpenCheck: BookOpenCheck,
  };

  return (
    <section id="why-us" className="py-24 bg-white text-slate-900 relative overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Our Core Strengths
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Why Parents & Students Trust <span className="animate-gradient-text-light">Siddhantha Academy</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Unlike overcrowded coaching factories, we focus on what truly matters: your child's confidence, conceptual mastery, and personalized support.
            </p>
          </div>
        </AnimatedSection>

        {/* 4 Cards Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComponent = iconMap[item.iconName] || ShieldCheck;
            return (
              <AnimatedSection key={idx} direction="up" delay={idx * 0.15}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-50/80 rounded-3xl p-7 border border-slate-200/90 hover:bg-white hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group relative overflow-hidden"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <h3 className="mt-6 text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-600 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-1.5 text-xs font-bold text-blue-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Guaranteed Standard</span>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <AnimatedSection direction="up" delay={0.4} className="mt-16">
          <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-rose-300 text-xs font-extrabold uppercase tracking-widest">
                <HeartHandshake className="w-4 h-4" />
                Women-Owned & Managed Coaching Center
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white">
                Want to see the difference small batch sizes make?
              </h3>
              <p className="text-sm sm:text-base text-blue-100 max-w-xl">
                Visit our Kudasan academy or talk directly with our faculty today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={ACADEMY_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-lg active:scale-95 text-center"
              >
                Chat on WhatsApp
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`tel:${ACADEMY_DATA.phone}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-bold text-white bg-blue-700/80 hover:bg-blue-700 border border-blue-500/50 transition-all active:scale-95 text-center"
              >
                Call {ACADEMY_DATA.phone}
              </motion.a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

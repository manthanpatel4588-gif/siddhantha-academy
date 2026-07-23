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
    <section id="why-us" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider text-blue-400 bg-blue-950/80 border border-blue-800">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              Our Core Strengths
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Why Parents & Students Trust <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">Siddhantha Academy</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Unlike overcrowded coaching factories, we focus on what truly matters: your child's confidence, conceptual mastery, and personalized support.
            </p>
          </div>
        </AnimatedSection>

        {/* 4 Feature Cards Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComponent = iconMap[item.iconName] || ShieldCheck;
            return (
              <AnimatedSection key={idx} direction="up" delay={idx * 0.15}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-950/80 rounded-3xl p-7 border border-slate-800 hover:border-blue-500/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full backdrop-blur-xl group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/15 transition-colors pointer-events-none" />

                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <h3 className="mt-6 text-xl font-extrabold text-white group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-1.5 text-xs font-bold text-blue-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Guaranteed Standard</span>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <AnimatedSection direction="up" delay={0.4} className="mt-16">
          <div className="rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white p-8 sm:p-12 border border-blue-500/30 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-rose-300 text-xs font-extrabold uppercase tracking-widest">
                <HeartHandshake className="w-4 h-4" />
                Women-Owned & Managed Coaching Center
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white">
                Want to see the difference small batch sizes make?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl">
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
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-xl active:scale-95 text-center"
              >
                Chat on WhatsApp
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`tel:${ACADEMY_DATA.phone}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-bold text-white bg-slate-800/90 hover:bg-slate-800 border border-slate-700 transition-all active:scale-95 text-center"
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

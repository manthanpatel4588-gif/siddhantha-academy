import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, Users, UserCheck, Award, Lightbulb, ArrowRight, MessageCircle } from 'lucide-react';
import { ACADEMY_DATA } from '../data/academyData';
import { AnimatedSection } from './AnimatedSection';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: HeartHandshake,
      title: 'Women-Owned Leadership',
      description: 'Proudly women-led institution fostering a caring, highly disciplined, and nurturing academic environment for all students.',
      color: 'text-rose-400 bg-rose-500/10 border-rose-500/30'
    },
    {
      icon: Users,
      title: 'Small Batch Size Guarantee',
      description: 'Strict limits on batch strength so no student feels left behind in a crowded room.',
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/30'
    },
    {
      icon: UserCheck,
      title: 'Personal Attention to Each Student',
      description: 'Faculty monitors each student’s daily homework, understanding speed, and individual progress.',
      color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30'
    },
    {
      icon: Award,
      title: 'Experienced & Passionate Faculty',
      description: 'Dedicated teachers with years of academic expertise in CBSE & GSEB board curriculum.',
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/30'
    },
    {
      icon: Lightbulb,
      title: 'Root-Level Concept Clarity Focus',
      description: 'We don’t believe in formula memorization; we build true conceptual understanding.',
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Light glow effects */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider text-blue-400 bg-blue-950/80 border border-blue-800">
              About Siddhantha Academy
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Where Personal Attention Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">Academic Excellence</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Located in Kudasan, Gandhinagar, Siddhantha Academy is founded on the principle that every student deserves individual care, friendly guidance, and clear conceptual understanding.
            </p>
          </div>
        </AnimatedSection>

        {/* Grid Content */}
        <div className="mt-16 grid lg:grid-cols-12 gap-12 items-center">
          {/* Visual Showcase Card */}
          <AnimatedSection direction="right" className="lg:col-span-5 space-y-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-800 group"
            >
              <img
                src="/images/faculty_personal_attention.jpg"
                alt="Personal attention at Siddhantha Academy"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90" />

              <div className="absolute bottom-4 left-4 right-4 p-5 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 text-white shadow-xl">
                <div className="flex items-center gap-2 text-xs font-extrabold text-rose-400 uppercase tracking-wider">
                  <HeartHandshake className="w-4 h-4" />
                  Women-Owned Coaching Institute
                </div>
                <p className="mt-1 text-sm font-semibold text-slate-200">
                  "Empowering young minds with patience, dedication, and personal mentorship."
                </p>
              </div>
            </motion.div>

            {/* Quick Pill */}
            <div className="bg-slate-950/80 rounded-2xl p-5 border border-slate-800 flex items-center justify-between backdrop-blur-md">
              <div>
                <span className="text-[10px] text-blue-400 font-extrabold uppercase tracking-widest">Campus Address</span>
                <p className="text-sm font-bold text-white mt-0.5">
                  Keshav Aaradhyam, Kudasan
                </p>
                <p className="text-xs text-slate-400">Gandhinagar, Gujarat</p>
              </div>
              <a
                href={ACADEMY_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-md shadow-emerald-600/20"
              >
                <MessageCircle className="w-4 h-4" />
                Ask Us
              </a>
            </div>
          </AnimatedSection>

          {/* Cards List with Stagger Animations */}
          <div className="lg:col-span-7 space-y-4">
            {highlights.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <AnimatedSection key={idx} direction="left" delay={idx * 0.1}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                    className="p-5 sm:p-6 rounded-2xl border border-slate-800 bg-slate-950/60 hover:bg-slate-800/80 hover:border-blue-500/40 transition-all duration-300 flex items-start gap-4 shadow-lg backdrop-blur-md"
                  >
                    <div className={`p-3.5 rounded-xl border shrink-0 ${item.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate-300 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              );
            })}

            <div className="pt-4 flex items-center gap-4">
              <a
                href={ACADEMY_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 group"
              >
                <span>Inquire about admission & batch timings</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

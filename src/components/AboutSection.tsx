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
      color: 'text-rose-600 bg-rose-50 border-rose-200'
    },
    {
      icon: Users,
      title: 'Small Batch Size Guarantee',
      description: 'Strict limits on batch strength so no student feels left behind in a crowded room.',
      color: 'text-blue-600 bg-blue-50 border-blue-200'
    },
    {
      icon: UserCheck,
      title: 'Personal Attention to Each Student',
      description: 'Faculty monitors each student’s daily homework, understanding speed, and individual progress.',
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200'
    },
    {
      icon: Award,
      title: 'Experienced & Passionate Faculty',
      description: 'Dedicated teachers with years of academic expertise in CBSE & GSEB board curriculum.',
      color: 'text-amber-600 bg-amber-50 border-amber-200'
    },
    {
      icon: Lightbulb,
      title: 'Root-Level Concept Clarity Focus',
      description: 'We don’t believe in formula memorization; we build true conceptual understanding.',
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white text-slate-900 relative overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200">
              About Siddhantha Academy
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Where Personal Attention Meets <span className="animate-gradient-text-light">Academic Excellence</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
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
              className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white group"
            >
              <img
                src="/images/faculty_personal_attention.jpg"
                alt="Personal attention at Siddhantha Academy"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-90" />

              <div className="absolute bottom-4 left-4 right-4 p-5 rounded-2xl glass-card-light text-slate-900 shadow-lg border border-white">
                <div className="flex items-center gap-2 text-xs font-black text-rose-600 uppercase tracking-wider">
                  <HeartHandshake className="w-4 h-4" />
                  Women-Owned Coaching Institute
                </div>
                <p className="mt-1 text-sm font-semibold text-slate-800">
                  "Empowering young minds with patience, dedication, and personal mentorship."
                </p>
              </div>
            </motion.div>

            {/* Address Pill */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex items-center justify-between shadow-sm">
              <div>
                <span className="text-[10px] text-blue-700 font-black uppercase tracking-widest">Campus Address</span>
                <p className="text-sm font-bold text-slate-900 mt-0.5">
                  Keshav Aaradhyam, Kudasan
                </p>
                <p className="text-xs text-slate-500 font-medium">Gandhinagar, Gujarat</p>
              </div>
              <a
                href={ACADEMY_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Ask Us
              </a>
            </div>
          </AnimatedSection>

          {/* Cards List */}
          <div className="lg:col-span-7 space-y-4">
            {highlights.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <AnimatedSection key={idx} direction="left" delay={idx * 0.1}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                    className="p-5 sm:p-6 rounded-2xl border border-slate-200/80 bg-slate-50/60 hover:bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex items-start gap-4"
                  >
                    <div className={`p-3.5 rounded-2xl border shrink-0 ${item.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-slate-900">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.description}</p>
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
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-800 group"
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

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, MapPin, CheckCircle2, HeartHandshake, Sparkles, ShieldCheck, Award, Star } from 'lucide-react';
import { ACADEMY_DATA } from '../data/academyData';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 flex items-center bg-gradient-to-b from-slate-50 via-blue-50/40 to-white text-slate-900 overflow-hidden">
      {/* Background Soft Blue Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl animate-pulse-soft pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl animate-pulse-soft pointer-events-none" style={{ animationDelay: '2s' }} />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Copy Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Pills */}
            <div className="inline-flex flex-wrap items-center gap-2">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Admissions Open for 2026-27
              </motion.span>

              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-blue-50 text-blue-700 border border-blue-200 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                Kudasan, Gandhinagar
              </span>

              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-rose-50 text-rose-700 border border-rose-200 shadow-sm">
                <HeartHandshake className="w-3.5 h-3.5 text-rose-500" />
                Women-Owned
              </span>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-none">
                Siddhantha{' '}
                <span className="animate-gradient-text-light">
                  Academy
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-4 text-xl sm:text-2xl font-black text-blue-700 flex items-center gap-2"
              >
                <Sparkles className="w-6 h-6 text-amber-500 shrink-0" />
                "{ACADEMY_DATA.tagline}"
              </motion.p>
            </div>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
              Empowering students in Gandhinagar through <strong className="text-slate-900 font-bold">small batch sizes</strong>, <strong className="text-slate-900 font-bold">individual faculty care</strong>, and deep <strong className="text-slate-900 font-bold">concept clarity</strong> for CBSE & GSEB school boards.
            </p>

            {/* Feature Bullets */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {[
                'Small Batch Size (Max Individual Care)',
                'Experienced & Dedicated Faculty',
                'Root Concept Clarity & Numerical Skill',
                'Special Focus on Weak Student Improvement',
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex items-center gap-2.5 text-slate-700 text-sm font-semibold"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 border border-blue-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={ACADEMY_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg shadow-emerald-600/25 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Contact on WhatsApp</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={`tel:${ACADEMY_DATA.phone}`}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 shadow-md transition-all"
              >
                <Phone className="w-5 h-5 text-blue-600" />
                <span>Call Now: {ACADEMY_DATA.phone}</span>
              </motion.a>
            </motion.div>

            {/* Trust Note */}
            <p className="text-xs text-slate-500 flex items-center gap-1.5 pt-1 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Direct inquiry • Instant WhatsApp response • Verified Google listing
            </p>
          </motion.div>

          {/* Right Column - Frosted Glass Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Floating Rating Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -left-6 z-20 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl glass-card-light shadow-xl border border-white/80"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-600 font-bold">
                <Star className="w-5 h-5 fill-current text-amber-500" />
              </div>
              <div>
                <div className="text-xs font-black text-slate-900">5.0 Star Rating</div>
                <div className="text-[10px] text-slate-500 font-semibold">Verified Google Reviews</div>
              </div>
            </motion.div>

            {/* Card Showcase */}
            <div className="relative rounded-3xl overflow-hidden glass-card-light shadow-xl border border-white/90 group">
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src="/images/hero_classroom.jpg"
                  alt="Siddhantha Academy Classroom"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                <div className="absolute top-4 right-4 px-3.5 py-1 rounded-full text-xs font-extrabold bg-blue-600 text-white shadow-md">
                  Personal Care Focus
                </div>
              </div>

              <div className="p-6 space-y-4 bg-white/90 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest">
                      Kudasan • Gandhinagar
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                      Small Batch Learning Environment
                    </h3>
                  </div>
                  <span className="p-2 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                    <Award className="w-5 h-5" />
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                    <div className="text-blue-700 font-black text-lg">Small Batches</div>
                    <div className="text-xs text-slate-500 font-medium">100% faculty care</div>
                  </div>
                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                    <div className="text-emerald-700 font-black text-lg">CBSE & GSEB</div>
                    <div className="text-xs text-slate-500 font-medium">Class 8th to 12th</div>
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-600 font-semibold flex items-center gap-2 border-t border-slate-100">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="truncate">Keshav Aaradhyam, B-213-214, Kudasan</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

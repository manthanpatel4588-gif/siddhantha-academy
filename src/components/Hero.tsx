import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, MapPin, CheckCircle2, HeartHandshake, Sparkles, ShieldCheck, Award, Star } from 'lucide-react';
import { ACADEMY_DATA } from '../data/academyData';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 flex items-center bg-slate-950 text-white overflow-hidden">
      {/* Animated Glowing Light Orbs in Background */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse-glow pointer-events-none" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Background Image with Dark Gradient Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_classroom.jpg"
          alt="Siddhantha Academy Classroom"
          className="w-full h-full object-cover object-center opacity-25 filter blur-[1px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-blue-950/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Copy & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Live Status Pill & Badges */}
            <div className="inline-flex flex-wrap items-center gap-2">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 backdrop-blur-md"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Admissions Open for 2026-27
              </motion.span>

              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-500/15 text-blue-300 border border-blue-400/30 backdrop-blur-md">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Kudasan, Gandhinagar
              </span>

              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-rose-500/15 text-rose-300 border border-rose-400/30 backdrop-blur-md">
                <HeartHandshake className="w-3.5 h-3.5 text-rose-400" />
                Women-Owned
              </span>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none">
                Siddhantha{' '}
                <span className="animate-gradient-text">
                  Academy
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-4 text-xl sm:text-2xl font-extrabold text-amber-300 flex items-center gap-2"
              >
                <Sparkles className="w-6 h-6 text-amber-400 shrink-0 animate-spin" style={{ animationDuration: '8s' }} />
                "{ACADEMY_DATA.tagline}"
              </motion.p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Empowering students in Gandhinagar through <strong className="text-white font-semibold">small batch sizes</strong>, <strong className="text-white font-semibold">individual faculty care</strong>, and deep <strong className="text-white font-semibold">concept clarity</strong> for CBSE & GSEB school boards.
            </p>

            {/* Bullet features */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {[
                'Small Batch Size (Max Individual Focus)',
                'Experienced & Dedicated Faculty',
                'Root Concept Clarity & Numerical Skill',
                'Special Focus on Weak Student Improvement',
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex items-center gap-2.5 text-slate-200 text-sm font-medium"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
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
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-xl shadow-emerald-600/30 border border-emerald-400/40 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Contact on WhatsApp</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={`tel:${ACADEMY_DATA.phone}`}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl text-base font-bold text-slate-100 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 backdrop-blur-xl transition-all shadow-lg"
              >
                <Phone className="w-5 h-5 text-blue-400" />
                <span>Call Now: {ACADEMY_DATA.phone}</span>
              </motion.a>
            </motion.div>

            {/* Trust note */}
            <p className="text-xs text-slate-400 flex items-center gap-1.5 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Direct inquiry • Instant WhatsApp chat • Verified Google listing
            </p>
          </motion.div>

          {/* Right Column - Graphical Interactive Card with Floating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Floating Trust Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -left-6 z-20 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/90 border border-blue-500/40 shadow-2xl backdrop-blur-xl"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold">
                <Star className="w-5 h-5 fill-current text-amber-400" />
              </div>
              <div>
                <div className="text-xs font-extrabold text-white">5.0 Star Rating</div>
                <div className="text-[10px] text-slate-400">Verified Google Reviews</div>
              </div>
            </motion.div>

            {/* Main Interactive Showcase Card */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-900/80 shadow-2xl backdrop-blur-xl group">
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src="/images/hero_classroom.jpg"
                  alt="Siddhantha Academy Small Batch Classroom"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-extrabold bg-blue-600/90 text-white shadow-lg border border-blue-400/40 backdrop-blur-md">
                  Personal Care Focus
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-extrabold text-blue-400 uppercase tracking-widest">
                      Kudasan • Gandhinagar
                    </span>
                    <h3 className="text-lg font-bold text-white mt-0.5">
                      Small Batch Learning Environment
                    </h3>
                  </div>
                  <span className="p-2 rounded-xl bg-slate-800 text-blue-400 border border-slate-700">
                    <Award className="w-5 h-5" />
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="bg-slate-950/70 p-3.5 rounded-2xl border border-slate-800">
                    <div className="text-blue-400 font-black text-lg">Small Batches</div>
                    <div className="text-xs text-slate-400">100% faculty attention</div>
                  </div>
                  <div className="bg-slate-950/70 p-3.5 rounded-2xl border border-slate-800">
                    <div className="text-emerald-400 font-black text-lg">CBSE & GSEB</div>
                    <div className="text-xs text-slate-400">Class 8th to 12th</div>
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-300 flex items-center gap-2 border-t border-slate-800/80">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
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

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, MessageCircle, GraduationCap, BookOpen } from 'lucide-react';
import { COURSES, type Course } from '../data/academyData';
import { AnimatedSection } from './AnimatedSection';

export const CoursesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Secondary', 'Higher Secondary', 'Foundation'];

  const filteredCourses =
    selectedCategory === 'All'
      ? COURSES
      : COURSES.filter((c) => c.category === selectedCategory);

  return (
    <section id="courses" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Graphic Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider text-blue-400 bg-blue-950/80 border border-blue-800">
              <BookOpen className="w-3.5 h-3.5 text-blue-400" />
              Offered Programs
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Academic Courses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">Coaching Streams</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Tailored learning programs for CBSE & GSEB school boards with focused small batches and experienced faculty care.
            </p>
          </div>
        </AnimatedSection>

        {/* Animated Filter Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 ${
                selectedCategory === cat
                  ? 'text-white shadow-lg shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white bg-slate-900 border border-slate-800'
              }`}
            >
              {selectedCategory === cat && (
                <motion.div
                  layoutId="activeCategoryBg"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Animated Cards Grid */}
        <motion.div layout className="mt-14 grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course: Course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="bg-slate-900/90 rounded-3xl p-7 sm:p-9 border border-slate-800 hover:border-blue-500/50 shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden backdrop-blur-xl group"
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-colors pointer-events-none" />

                {/* Badge */}
                {course.badge && (
                  <div className="absolute top-6 right-6 px-3.5 py-1 rounded-full text-xs font-black bg-amber-400/10 text-amber-300 border border-amber-400/30">
                    {course.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-3.5">
                    <div className="p-3.5 rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/30 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <GraduationCap className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-xs font-black text-blue-400 uppercase tracking-widest">
                        {course.grades}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                        {course.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Target Boards */}
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-slate-400">Target Boards:</span>
                    {course.boards.map((b, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-950 text-slate-200 border border-slate-800"
                      >
                        {b}
                      </span>
                    ))}
                  </div>

                  {/* Subjects */}
                  <div className="mt-6 pt-5 border-t border-slate-800">
                    <span className="text-xs font-extrabold text-blue-400 uppercase tracking-wider">
                      Core Subjects Included:
                    </span>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {course.subjects.map((sub, i) => (
                        <span
                          key={i}
                          className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-blue-950/80 text-blue-200 border border-blue-800/80 hover:bg-blue-900 transition-colors"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mt-6 space-y-2.5">
                    {course.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 font-medium">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30 mt-0.5">
                          <CheckCircle className="w-3 h-3" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-semibold">Small Batch Guarantee</span>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`https://wa.me/919904432121?text=Hello%20Siddhantha%20Academy,%20I%20want%20to%20inquire%20about%20${encodeURIComponent(
                      course.title
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-lg shadow-emerald-600/20 border border-emerald-400/30"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Inquire on WhatsApp</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

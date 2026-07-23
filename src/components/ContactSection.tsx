import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, ExternalLink, Clock, Navigation, HeartHandshake } from 'lucide-react';
import { ACADEMY_DATA } from '../data/academyData';
import { AnimatedSection } from './AnimatedSection';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider text-blue-400 bg-blue-950/80 border border-blue-800">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Visit Our Kudasan Center or <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">Contact Us</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Have questions regarding batch timings, subject enrollment, or fees? Reach out directly via phone or WhatsApp.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid lg:grid-cols-12 gap-10 items-stretch">
          {/* Details Column */}
          <AnimatedSection direction="right" className="lg:col-span-5 flex">
            <div className="w-full bg-slate-900 border border-slate-800 text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden backdrop-blur-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-8 relative z-10">
                <div>
                  <span className="text-xs font-black text-blue-400 uppercase tracking-widest">
                    Official Contact Info
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                    Siddhantha Academy
                  </h3>
                  <p className="text-xs text-rose-300 font-semibold mt-1 flex items-center gap-1">
                    <HeartHandshake className="w-4 h-4" />
                    Women-Owned Coaching Institute
                  </p>
                </div>

                <div className="space-y-6 text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/30 shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-white text-base">Institute Address</h4>
                      <p className="mt-1 text-slate-300 leading-relaxed">
                        {ACADEMY_DATA.address.fullAddress}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-2xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-white text-base">Phone Number</h4>
                      <a
                        href={`tel:${ACADEMY_DATA.phone}`}
                        className="mt-1 text-emerald-300 font-black text-xl hover:underline block"
                      >
                        {ACADEMY_DATA.phone}
                      </a>
                      <p className="text-xs text-slate-400">Available during coaching hours</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-2xl bg-amber-600/20 text-amber-400 border border-amber-500/30 shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-white text-base">Academy Hours</h4>
                      <p className="mt-1 text-slate-300 text-sm">
                        Monday – Saturday: 8:00 AM – 8:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-8 border-t border-slate-800 space-y-3 relative z-10">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={ACADEMY_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-xl shadow-emerald-600/30 transition-all text-center"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Chat on WhatsApp</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={ACADEMY_DATA.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-bold text-slate-200 bg-slate-950 hover:bg-slate-800 border border-slate-800 transition-all text-center"
                >
                  <Navigation className="w-5 h-5 text-blue-400" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-4 h-4 ml-1 opacity-60" />
                </motion.a>
              </div>
            </div>
          </AnimatedSection>

          {/* Map Column */}
          <AnimatedSection direction="left" className="lg:col-span-7 flex">
            <div className="w-full rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 min-h-[420px] flex flex-col">
              <div className="p-4 bg-slate-950 text-white flex items-center justify-between text-xs sm:text-sm font-semibold border-b border-slate-800">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                  Keshav Aaradhyam, Kudasan, Gandhinagar
                </span>
                <a
                  href={ACADEMY_DATA.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline flex items-center gap-1 shrink-0 font-bold"
                >
                  View Map
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="grow w-full relative">
                <iframe
                  title="Siddhantha Academy Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.4332822453664!2d72.6325!3d23.1905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e830000000001%3A0x0!2sKeshav%20Aaradhyam%2C%20Kudasan%2C%20Gandhinagar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full min-h-[380px] border-0 filter grayscale contrast-125 invert opacity-85"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

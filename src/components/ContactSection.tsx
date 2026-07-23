import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, ExternalLink, Clock, Navigation, HeartHandshake } from 'lucide-react';
import { ACADEMY_DATA } from '../data/academyData';
import { AnimatedSection } from './AnimatedSection';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider text-blue-700 bg-blue-100/70 border border-blue-200">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Visit Our Kudasan Center or <span className="animate-gradient-text-light">Contact Us</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Have questions regarding batch timings, subject enrollment, or fees? Reach out directly via phone or WhatsApp.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid lg:grid-cols-12 gap-10 items-stretch">
          {/* Contact Details Card */}
          <AnimatedSection direction="right" className="lg:col-span-5 flex">
            <div className="w-full bg-white border border-slate-200 text-slate-900 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="space-y-8 relative z-10">
                <div>
                  <span className="text-xs font-black text-blue-600 uppercase tracking-widest">
                    Official Contact Info
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                    Siddhantha Academy
                  </h3>
                  <p className="text-xs text-rose-600 font-bold mt-1 flex items-center gap-1">
                    <HeartHandshake className="w-4 h-4 text-rose-500" />
                    Women-Owned Coaching Institute
                  </p>
                </div>

                <div className="space-y-6 text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-base">Institute Address</h4>
                      <p className="mt-1 text-slate-600 leading-relaxed font-medium">
                        {ACADEMY_DATA.address.fullAddress}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-base">Phone Number</h4>
                      <a
                        href={`tel:${ACADEMY_DATA.phone}`}
                        className="mt-1 text-emerald-600 font-black text-xl hover:underline block"
                      >
                        {ACADEMY_DATA.phone}
                      </a>
                      <p className="text-xs text-slate-500 font-medium">Available during coaching hours</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-2xl bg-amber-50 text-amber-600 border border-amber-100 shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-base">Academy Hours</h4>
                      <p className="mt-1 text-slate-600 text-sm font-medium">
                        Monday – Saturday: 8:00 AM – 8:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-8 border-t border-slate-100 space-y-3 relative z-10">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={ACADEMY_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all text-center"
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
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all text-center"
                >
                  <Navigation className="w-5 h-5 text-blue-600" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-4 h-4 ml-1 opacity-60" />
                </motion.a>
              </div>
            </div>
          </AnimatedSection>

          {/* Map Column */}
          <AnimatedSection direction="left" className="lg:col-span-7 flex">
            <div className="w-full rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-white min-h-[420px] flex flex-col">
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between text-xs sm:text-sm font-semibold">
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
                  className="w-full h-full min-h-[380px] border-0"
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

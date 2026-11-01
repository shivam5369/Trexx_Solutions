import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { CONTACT_INFO } from '../data/siteData';

const SERVICE_OPTIONS = [
  'AI Receptionist & Voice AI Agent',
  'Business & WhatsApp Workflow Automation',
  'Custom Website + Google Maps Listing Setup',
  'Custom Backend, Database & Admin Dashboard',
  'Complete AI & Digital Transformation',
];

export const FinalCTAAndContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    service: SERVICE_OPTIONS[0],
    details: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMsg('Please enter your name and a valid email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    const subject = encodeURIComponent(
      `TREXX Solutions Inquiry — ${formData.service} (${formData.business || formData.name})`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nBusiness: ${formData.business || 'N/A'
      }\nPrimary Interest: ${formData.service}\n\nProject Details:\n${formData.details || 'Interested in discussing a project with TREXX Solutions.'
      }`
    );

    window.open(`mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
  };

  return (
    <>
      {/* SECTION 11: FINAL CTA SECTION */}
      <section className="relative py-28 md:py-36 bg-[#050505] border-t border-white/[0.06] overflow-hidden">
        {/* Radiant Electric Blue Glow Behind Headline */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[820px] h-[420px] rounded-full opacity-35 blur-[145px]"
          style={{
            background:
              'radial-gradient(circle, #0066FF 0%, rgba(0, 75, 220, 0.45) 45%, transparent 75%)',
          }}
        />

        <div className="max-w-[1040px] mx-auto px-6 md:px-10 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] mb-7"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span className="text-[12px] font-medium text-white/85">
              TREXX Solutions · Next-Generation AI &amp; Automation
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="font-display font-bold text-[40px] sm:text-[56px] md:text-[68px] leading-[1.05] tracking-[-0.04em] text-white"
          >
            Ready to make your business work smarter?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="mt-6 text-[17px] md:text-[20px] text-[#8A8F98] max-w-[640px] mx-auto leading-[1.65]"
          >
            Let&apos;s build intelligent systems that give your business more time to focus on what
            matters.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.16 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white text-[#050505] font-semibold text-[15px] tracking-[-0.01em] hover:bg-white/90 transition-all shadow-[0_0_40px_rgba(255,255,255,0.25)]"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-medium text-[15px] tracking-[-0.01em] border border-white/[0.12] transition-all"
            >
              <span>Explore Our Solutions</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* INTERACTIVE CONTACT & DISCOVERY CALL SECTION */}
      <section
        id="contact"
        className="relative py-24 md:py-32 bg-[#050505] border-t border-white/[0.06]"
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Channels & Discovery Call */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4">
                <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
                <span className="text-[11.5px] font-mono-code uppercase tracking-wider text-white/75">
                  Get In Touch
                </span>
              </div>

              <h3 className="font-display font-bold text-[32px] sm:text-[40px] leading-[1.1] tracking-[-0.03em] text-white">
                Let&apos;s architect your next stage of growth.
              </h3>

              <p className="mt-4 text-[15px] text-[#8A8F98] leading-[1.7]">
                Whether you want to deploy a 24/7 AI receptionist, automate repetitive customer
                workflows, or launch a high-converting custom web platform, reach out directly.
              </p>

              <div className="mt-8 space-y-3.5">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#090B10] border border-white/[0.08] hover:border-[#0066FF]/50 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#0066FF]/12 border border-[#0066FF]/30 flex items-center justify-center text-[#38BDF8] group-hover:bg-[#0066FF] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11.5px] font-mono-code uppercase tracking-wider text-[#8A8F98]">
                      Email Us Directly
                    </div>
                    <div className="text-[14.5px] font-semibold text-white mt-0.5">
                      {CONTACT_INFO.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#090B10] border border-white/[0.08] hover:border-[#0066FF]/50 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#0066FF]/12 border border-[#0066FF]/30 flex items-center justify-center text-[#38BDF8] group-hover:bg-[#0066FF] group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11.5px] font-mono-code uppercase tracking-wider text-[#8A8F98]">
                      Call / WhatsApp
                    </div>
                    <div className="text-[14.5px] font-semibold text-white mt-0.5">
                      {CONTACT_INFO.phone}
                    </div>
                  </div>
                </a>

                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-[#0066FF]/20 via-[#0C1222] to-[#090B10] border border-[#0066FF]/40 hover:border-[#38BDF8] transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#0066FF] flex items-center justify-center text-white">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[15px] font-semibold text-white">
                        Book a Discovery Call on WhatsApp
                      </div>
                      <div className="text-[12.5px] text-[#38BDF8] mt-0.5">
                        30 minutes · Free consultation · No commitment
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Right Column: Interactive Project Brief Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <div className="rounded-[26px] bg-[#090B10] border border-white/[0.09] p-7 sm:p-10 shadow-[0_24px_70px_-20px_rgba(0,0,0,0.8)]">
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/35 flex items-center justify-center text-emerald-400 mx-auto mb-5">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="font-display font-bold text-[26px] text-white">
                      Inquiry Ready to Send!
                    </h4>
                    <p className="mt-2.5 text-[15px] text-[#8A8F98] max-w-[440px] mx-auto leading-[1.65]">
                      We&apos;ve opened your email client with your project brief pre-filled, or you can
                      message us directly on WhatsApp for an instant response.
                    </p>
                    <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                      <a
                        href={CONTACT_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0066FF] text-white font-semibold text-[14px] hover:bg-[#0052CC] transition-all"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Chat on WhatsApp Now</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="px-5 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white text-[14px] font-medium border border-white/[0.1] transition-all cursor-pointer"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h4 className="font-display font-bold text-[22px] text-white">
                          Start Your Project or Request an AI Demo
                        </h4>
                        <p className="text-[13.5px] text-[#8A8F98] mt-1">
                          Tell us about your business and what you&apos;d like to automate or build.
                        </p>
                      </div>
                    </div>

                    {errorMsg && (
                      <div className="mb-5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-2.5 text-[13px] text-red-300">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-[12.5px] font-medium text-white/80 mb-1.5"
                        >
                          Your Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          placeholder="Arjun Verma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#050609] border border-white/[0.1] text-white text-[14px] placeholder:text-white/25 focus:outline-none focus:border-[#0066FF] transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-[12.5px] font-medium text-white/80 mb-1.5"
                        >
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          placeholder="arjun@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#050609] border border-white/[0.1] text-white text-[14px] placeholder:text-white/25 focus:outline-none focus:border-[#0066FF] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label
                          htmlFor="contact-business"
                          className="block text-[12.5px] font-medium text-white/80 mb-1.5"
                        >
                          Business / Company Name
                        </label>
                        <input
                          id="contact-business"
                          type="text"
                          placeholder="Your Company Name"
                          value={formData.business}
                          onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#050609] border border-white/[0.1] text-white text-[14px] placeholder:text-white/25 focus:outline-none focus:border-[#0066FF] transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-service"
                          className="block text-[12.5px] font-medium text-white/80 mb-1.5"
                        >
                          Solution of Interest
                        </label>
                        <select
                          id="contact-service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#050609] border border-white/[0.1] text-white text-[14px] focus:outline-none focus:border-[#0066FF] transition-colors"
                        >
                          {SERVICE_OPTIONS.map((opt) => (
                            <option key={opt} value={opt} className="bg-[#090B10] text-white">
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="mt-4">
                      <label
                        htmlFor="contact-details"
                        className="block text-[12.5px] font-medium text-white/80 mb-1.5"
                      >
                        Project Details &amp; Goals
                      </label>
                      <textarea
                        id="contact-details"
                        rows={4}
                        placeholder="Tell us about the calls, workflows, or web platform you want to build or automate..."
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#050609] border border-white/[0.1] text-white text-[14px] placeholder:text-white/25 focus:outline-none focus:border-[#0066FF] transition-colors resize-y"
                      />
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                      <button
                        type="submit"
                        className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#050505] font-semibold text-[14.5px] hover:bg-white/90 transition-all cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send Project Brief</span>
                      </button>
                      <a
                        href={CONTACT_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-medium text-[14px] border border-white/[0.1] transition-all"
                      >
                        <MessageSquare className="w-4 h-4 text-emerald-400" />
                        <span>Direct WhatsApp</span>
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};


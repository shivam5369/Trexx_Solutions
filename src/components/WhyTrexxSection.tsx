import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Target,
  Wrench,
  Layers,
  HeartHandshake,
  TrendingUp,
  Code2,
} from 'lucide-react';
import { SKILLS_AND_STACK } from '../data/siteData';

const WHY_REASONS = [
  {
    icon: Sparkles,
    title: 'AI-First Approach',
    desc: 'We design systems with intelligent agents at the core—not as an afterthought—so voice, data, and workflows operate cohesively.',
  },
  {
    icon: Target,
    title: 'Business-Focused Solutions',
    desc: 'Every voice agent, automation pipeline, and web interface is built to solve real operational bottlenecks and improve daily execution.',
  },
  {
    icon: Wrench,
    title: 'Custom-Built Automation',
    desc: 'No rigid cookie-cutter templates. We architect custom call flows, backend logic, and interfaces around your exact business rules.',
  },
  {
    icon: Layers,
    title: 'Scalable Technology',
    desc: 'Engineered on modern, modular infrastructure that grows effortlessly from your first hundred calls to enterprise-grade operations.',
  },
  {
    icon: HeartHandshake,
    title: 'Save & Retain Every Client',
    desc: 'Stop losing customers to missed calls or long hold times. Instant first-ring answers, effortless rescheduling, and WhatsApp follow-ups keep both new leads and existing clients with you.',
  },
  {
    icon: TrendingUp,
    title: 'Focus on Measurable Business Value',
    desc: 'We prioritize clear outcomes: preventing lost client inquiries, reducing manual front-desk workload, and turning every incoming call into a booked opportunity.',
  },
];

export const WhyTrexxSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-28 md:py-36 bg-[#050505] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Subtle Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 w-[750px] h-[380px] rounded-full opacity-15 blur-[140px]"
        style={{
          background: 'radial-gradient(circle, #0066FF 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <div className="max-w-[780px]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
            <span className="text-[11.5px] font-mono-code uppercase tracking-wider text-white/75">
              Why TREXX Solutions
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-[34px] sm:text-[46px] md:text-[54px] leading-[1.08] tracking-[-0.035em] text-white"
          >
            More than automation.{' '}
            <span className="text-white/50">A smarter way to operate.</span>
          </motion.h2>
        </div>

        {/* 6 Pillars Minimal Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_REASONS.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: idx * 0.07 }}
                className="rounded-[24px] bg-[#090B10] border border-white/[0.08] p-7 glow-card-hover"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.1] flex items-center justify-center text-[#38BDF8] mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-[19px] text-white tracking-[-0.015em]">
                  {reason.title}
                </h3>
                <p className="mt-2.5 text-[14px] text-[#8A8F98] leading-[1.68]">
                  {reason.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Studio Engineering & Leadership Card (Source of truth from existing site) */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mt-16 rounded-[28px] bg-gradient-to-br from-[#0A0E19] via-[#080A0F] to-[#080A0F] border border-white/[0.09] p-8 md:p-11"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[12px] font-mono-code uppercase tracking-wider text-[#38BDF8] mb-3">
                <Code2 className="w-4 h-4" />
                <span>Engineering &amp; Product Leadership</span>
              </div>
              <h3 className="font-display font-bold text-[26px] sm:text-[32px] text-white tracking-[-0.025em]">
                Built by Engineers &amp; Designers Obsessed with Craft
              </h3>
              <p className="mt-3 text-[15px] text-[#8A8F98] leading-[1.72]">
                Led by <span className="text-white font-medium">Shivam</span> (Web Development, AI Systems &amp; Product Design), TREXX Solutions brings technical precision, strategic thinking, and visual soul to every deployment. We specialize in building fast, scalable web platforms, custom backend systems, and autonomous AI voice agents that feel effortless to use.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="text-[11.5px] font-mono-code uppercase tracking-wider text-white/60 mb-3">
                Core Capabilities &amp; Technology Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {SKILLS_AND_STACK.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[12.5px] text-white/85 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


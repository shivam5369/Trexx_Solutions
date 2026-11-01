import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Bot, Workflow, Layers } from 'lucide-react';

const PILLARS = [
  {
    icon: Bot,
    title: 'Autonomous Voice & Chat Agents',
    description:
      'AI systems that answer incoming calls, understand natural human speech, resolve inquiries, and schedule appointments without human intervention.',
  },
  {
    icon: Workflow,
    title: 'Self-Driving Business Workflows',
    description:
      'Eliminate manual copy-pasting and repetitive follow-ups. Connect calls, forms, WhatsApp notifications, and databases into seamless pipelines.',
  },
  {
    icon: Layers,
    title: 'Bespoke Web & Backend Platforms',
    description:
      'High-converting custom websites, SaaS interfaces, databases, and internal admin dashboards engineered specifically around how your business operates.',
  },
];

export const TrustSection: React.FC = () => {
  return (
    <section className="relative py-28 md:py-36 bg-[#050505] border-t border-white/[0.06] overflow-hidden">
      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-[560px] h-[360px] rounded-full opacity-15 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, #0066FF 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Editorial Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08]">
              <Cpu className="w-3.5 h-3.5 text-[#0066FF]" />
              <span className="text-[11.5px] font-mono-code uppercase tracking-wider text-white/75">
                Our Philosophy
              </span>
            </div>
            <p className="mt-5 text-[14px] text-[#8A8F98] leading-[1.7] max-w-[320px]">
              Most businesses are slowed down by disconnected tools, missed phone calls, and repetitive operational busywork. We re-architect how your systems communicate.
            </p>
          </motion.div>

          {/* Right Editorial Statement & Pillars */}
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65 }}
              className="font-display font-bold text-[34px] sm:text-[46px] md:text-[54px] leading-[1.1] tracking-[-0.035em] text-white"
            >
              Technology should work for you,{' '}
              <span className="text-white/45">not the other way around.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="mt-6 text-[17px] md:text-[19px] text-[#8A8F98] leading-[1.7] max-w-[740px]"
            >
              TREXX Solutions combines conversational artificial intelligence, autonomous voice agents,
              workflow automation, and custom full-stack engineering to simplify how modern businesses
              operate—so your team can focus on high-value decisions while intelligent systems handle
              the rest.
            </motion.p>

            {/* Three Architectural Pillars */}
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
              {PILLARS.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.55, delay: idx * 0.1 }}
                    className="group rounded-2xl bg-[#0A0B0F] border border-white/[0.07] p-6 glow-card-hover"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/30 flex items-center justify-center text-[#38BDF8] mb-5 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-semibold text-[17px] text-white tracking-[-0.015em]">
                      {pillar.title}
                    </h3>
                    <p className="mt-2.5 text-[13.5px] text-[#8A8F98] leading-[1.65]">
                      {pillar.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


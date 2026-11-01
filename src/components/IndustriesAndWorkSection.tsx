import React from 'react';
import { motion } from 'framer-motion';
import {
  Stethoscope,
  Building2,
  UtensilsCrossed,
  ShoppingBag,
  Briefcase,
  Cpu,
  Check,
  Terminal,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';
import { INDUSTRY_USE_CASES } from '../data/siteData';

const INDUSTRY_ICONS: Record<string, React.ElementType> = {
  healthcare: Stethoscope,
  realestate: Building2,
  hospitality: UtensilsCrossed,
  ecommerce: ShoppingBag,
  professional: Briefcase,
  startups: Cpu,
};

export const IndustriesAndWorkSection: React.FC = () => {
  return (
    <section
      id="solutions"
      className="relative py-28 md:py-36 bg-[#050505] border-t border-white/[0.06]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
        {/* Industries / Use Cases Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
              <span className="text-[11.5px] font-mono-code uppercase tracking-wider text-white/75">
                Industries &amp; Use Cases
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display font-bold text-[34px] sm:text-[46px] md:text-[54px] leading-[1.08] tracking-[-0.035em] text-white max-w-[700px]"
            >
              Built for high-touch industries that can&apos;t afford missed calls.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-[15.5px] text-[#8A8F98] max-w-[420px] leading-[1.65]"
          >
            Every industry has unique customer inquiries, scheduling logic, and operational workflows.
            We tailor our AI agents, web platforms, and local Google Maps presence to your exact domain.
          </motion.p>
        </div>

        {/* 6 Industry Use-Case Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRY_USE_CASES.map((item, idx) => {
            const Icon = INDUSTRY_ICONS[item.id] || Cpu;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: idx * 0.07 }}
                className="rounded-[24px] bg-[#090B10] border border-white/[0.08] p-7 flex flex-col justify-between glow-card-hover"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#0066FF]/12 border border-[#0066FF]/30 flex items-center justify-center text-[#38BDF8]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono-code uppercase tracking-wider text-white/60 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
                      {item.industry}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-[20px] text-white tracking-[-0.02em] leading-[1.25]">
                    {item.headline}
                  </h3>

                  <p className="mt-2.5 text-[13.5px] text-[#8A8F98] leading-[1.65]">
                    {item.description}
                  </p>

                  <div className="mt-5 space-y-2">
                    {item.workflows.map((wf) => (
                      <div
                        key={wf}
                        className="flex items-start gap-2 text-[12.5px] text-white/80"
                      >
                        <Check className="w-3.5 h-3.5 text-[#0066FF] shrink-0 mt-0.5" />
                        <span>{wf}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Trigger -> Outcome Micro-Box */}
                <div className="mt-6 pt-4 border-t border-white/[0.07]">
                  <div className="rounded-xl bg-[#06070B] border border-white/[0.06] p-3.5">
                    <div className="flex items-center gap-1.5 text-[10.5px] font-mono-code text-[#38BDF8] uppercase mb-1">
                      <Terminal className="w-3 h-3" />
                      <span>Sample AI Workflow</span>
                    </div>
                    <p className="text-[12px] text-white/80 italic leading-[1.45]">
                      {item.sampleCallTrigger}
                    </p>
                    <p className="mt-2 text-[11px] font-mono-code text-emerald-400">
                      → {item.sampleOutcome}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Google Maps Website Integration Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-[24px] bg-gradient-to-r from-[#0A1122] via-[#090B10] to-[#090B10] border border-[#0066FF]/35 p-7 md:p-9 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0066FF]/15 border border-[#0066FF]/40 flex items-center justify-center text-[#38BDF8] shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[11.5px] font-mono-code uppercase tracking-wider text-[#38BDF8]">
                Local Discovery &amp; Google Maps Setup
              </div>
              <h3 className="font-display font-bold text-[21px] sm:text-[24px] text-white mt-1">
                We also add and link your website directly on Google Maps where needed.
              </h3>
              <p className="mt-2 text-[14px] text-[#8A8F98] max-w-[680px] leading-[1.65]">
                For clinics, hospitality venues, real estate offices, and local service businesses, we
                embed interactive maps on your site and connect your website directly to your Google
                Maps listing—so nearby customers can find your business, visit your website, and book
                instantly.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="self-start lg:self-center inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#050505] font-semibold text-[13.5px] hover:bg-white/90 transition-all shrink-0"
          >
            <span>Get Listed &amp; Automated</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

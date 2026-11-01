import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  PhoneCall,
  Workflow,
  Palette,
  Code2,
  Database,
  TrendingUp,
  ArrowUpRight,
  Check,
  Sparkles,
  Layers,
} from 'lucide-react';
import {
  CORE_SERVICES,
  WEB_DEVELOPMENT_TIERS,
  CUSTOM_ADDONS,
} from '../data/siteData';

const SERVICE_ICONS: Record<string, React.ElementType> = {
  'ai-receptionist': PhoneCall,
  'ai-workflow-automation': Workflow,
  'custom-web-design': Palette,
  'fullstack-web-development': Code2,
  'backend-admin-dashboards': Database,
  'seo-conversion-support': TrendingUp,
};

export const ServicesSection: React.FC = () => {
  const [showPackages, setShowPackages] = useState(false);

  const flagshipService = CORE_SERVICES[0];
  const otherServices = CORE_SERVICES.slice(1);

  return (
    <section
      id="services"
      className="relative py-28 md:py-36 bg-[#050505] border-t border-white/[0.06]"
    >
      {/* Subtle Top Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-16 right-1/4 w-[600px] h-[400px] rounded-full opacity-15 blur-[140px]"
        style={{
          background: 'radial-gradient(circle, #0066FF 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4"
            >
              <Layers className="w-3.5 h-3.5 text-[#0066FF]" />
              <span className="text-[11.5px] font-mono-code uppercase tracking-wider text-white/75">
                Capabilities &amp; Offerings
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display font-bold text-[34px] sm:text-[46px] md:text-[54px] leading-[1.08] tracking-[-0.035em] text-white max-w-[680px]"
            >
              Everything your business needs to move forward.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-[15.5px] text-[#8A8F98] max-w-[420px] leading-[1.65]"
          >
            From autonomous 24/7 AI receptionists and workflow automation to custom-engineered web
            platforms, backend databases, and admin dashboards.
          </motion.p>
        </div>

        {/* FLAGSHIP BENTO CARD: AI Receptionists & Voice AI Agents */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group relative rounded-[28px] p-[1px] bg-gradient-to-br from-[#0066FF]/60 via-white/[0.12] to-white/[0.04] mb-6 shadow-[0_24px_80px_-20px_rgba(0,102,255,0.25)]"
        >
          <div className="rounded-[27px] bg-[#080A10] p-7 sm:p-10 md:p-12 relative overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 w-[420px] h-[420px] rounded-full opacity-25 blur-[100px]"
              style={{
                background: 'radial-gradient(circle, #0066FF 0%, transparent 70%)',
              }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              {/* Left Flagship Content */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/40 text-[#38BDF8] text-[12px] font-semibold mb-5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{flagshipService.badge} · Primary Offering</span>
                </div>

                <h3 className="font-display font-bold text-[28px] sm:text-[36px] md:text-[40px] leading-[1.12] tracking-[-0.03em] text-white">
                  {flagshipService.title}
                </h3>

                <p className="mt-4 text-[16px] md:text-[17.5px] text-white/90 font-medium leading-[1.5]">
                  {flagshipService.tagline}
                </p>

                <p className="mt-3 text-[14.5px] md:text-[15.5px] text-[#8A8F98] leading-[1.7]">
                  {flagshipService.description}
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {flagshipService.highlights.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-[13.5px] text-white/85">
                      <span className="mt-1 w-4 h-4 rounded-full bg-[#0066FF]/20 border border-[#0066FF]/40 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#38BDF8]" />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#ai-receptionist"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#050505] font-semibold text-[14px] hover:bg-white/90 transition-all"
                  >
                    <span>Explore AI Receptionist</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-medium text-[14px] border border-white/[0.1] transition-all"
                  >
                    <span>Request Custom Voice Agent</span>
                  </a>
                </div>
              </div>

              {/* Right Flagship Interactive Visual Module */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-[#0C0F17] border border-white/[0.1] p-6 relative overflow-hidden">
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.07]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-[#0066FF] flex items-center justify-center text-white">
                        <PhoneCall className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[13.5px] font-semibold text-white">
                          TREXX Voice Core
                        </div>
                        <div className="text-[11px] font-mono-code text-[#38BDF8]">
                          ACTIVE 24/7 · ZERO HOLD TIME
                        </div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono-code bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      ONLINE
                    </span>
                  </div>

                  {/* Animated Voice Equalizer */}
                  <div className="my-6 py-5 px-4 rounded-xl bg-[#07090E] border border-white/[0.06] flex flex-col items-center">
                    <div className="flex items-center justify-center gap-1.5 h-12">
                      {[18, 34, 24, 44, 30, 48, 22, 38, 46, 28, 40, 20, 32, 16].map((h, i) => (
                        <motion.span
                          key={i}
                          animate={{
                            height: [`${Math.max(8, h * 0.4)}px`, `${h}px`, `${Math.max(8, h * 0.4)}px`],
                          }}
                          transition={{
                            duration: 0.9 + (i % 4) * 0.18,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                          className="w-1.5 rounded-full bg-gradient-to-t from-[#0066FF] to-[#38BDF8]"
                        />
                      ))}
                    </div>
                    <p className="mt-3 text-[12px] font-mono-code text-white/75 text-center">
                      &ldquo;I&apos;ve scheduled your appointment for Thursday at 4:00 PM and sent a confirmation to your WhatsApp.&rdquo;
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {flagshipService.deliverables.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.07] text-[11.5px] text-white/75 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* BENTO GRID OF ALL OTHER EXTRACTED SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherServices.map((service, idx) => {
            const Icon = SERVICE_ICONS[service.id] || Layers;
            const isWide = idx === 0 || idx === 3;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, delay: idx * 0.07 }}
                className={`group rounded-[24px] bg-[#0A0B0F] border border-white/[0.08] p-7 md:p-8 flex flex-col justify-between glow-card-hover ${
                  isWide ? 'lg:col-span-2' : 'lg:col-span-1'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-11 h-11 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/30 flex items-center justify-center text-[#38BDF8] group-hover:bg-[#0066FF] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono-code uppercase tracking-wider text-[#8A8F98] px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-[22px] md:text-[24px] text-white tracking-[-0.02em] leading-[1.2]">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-[14.5px] text-white/85 font-medium leading-[1.5]">
                    {service.tagline}
                  </p>

                  <p className="mt-2.5 text-[13.5px] text-[#8A8F98] leading-[1.68]">
                    {service.description}
                  </p>

                  <div className="mt-5 space-y-2">
                    {service.highlights.map((pt) => (
                      <div
                        key={pt}
                        className="flex items-start gap-2 text-[13px] text-white/75"
                      >
                        <Check className="w-3.5 h-3.5 text-[#0066FF] mt-1 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-7 pt-5 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {service.deliverables.slice(0, 3).map((d) => (
                      <span
                        key={d}
                        className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-[11px] text-[#8A8F98]"
                      >
                        {d}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-white group-hover:text-[#38BDF8] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* TRANSPARENT WEB & ARCHITECTURE PACKAGES + ADD-ONS (From Existing Website Source of Truth) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-[24px] bg-[#090B10] border border-white/[0.08] p-6 sm:p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-[11.5px] font-mono-code uppercase tracking-wider text-[#38BDF8]">
                Transparent Web &amp; System Packages
              </div>
              <h3 className="font-display font-bold text-[22px] sm:text-[26px] text-white mt-1">
                Looking for Web Development Tiers or Custom System Add-Ons?
              </h3>
              <p className="text-[14px] text-[#8A8F98] mt-1">
                Explore our structured website packages (Starter, Growth, Business Pro) and modular backend add-ons alongside custom AI automation builds.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowPackages(!showPackages)}
              className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-[13.5px] font-semibold text-white transition-all cursor-pointer shrink-0"
            >
              {showPackages ? 'Hide Web Packages' : 'View Web Packages & Add-Ons'}
            </button>
          </div>

          {showPackages && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.35 }}
              className="mt-8 pt-8 border-t border-white/[0.08]"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {WEB_DEVELOPMENT_TIERS.map((tier) => (
                  <div
                    key={tier.name}
                    className={`rounded-2xl p-6 flex flex-col justify-between border ${
                      tier.popular
                        ? 'bg-[#0D121F] border-[#0066FF]/50 shadow-[0_0_40px_-15px_rgba(0,102,255,0.3)]'
                        : 'bg-[#06070A] border-white/[0.08]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <h4 className="font-display font-bold text-[19px] text-white">
                          {tier.name}
                        </h4>
                        {tier.popular && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold uppercase tracking-wider bg-[#0066FF] text-white">
                            Most Popular
                          </span>
                        )}
                      </div>
                      <p className="text-[12.5px] text-[#8A8F98] mb-4">
                        Best for: {tier.bestFor}
                      </p>
                      <div className="flex items-baseline gap-2 pb-5 border-b border-white/[0.07]">
                        <span className="font-display font-bold text-[32px] text-white">
                          {tier.price}
                        </span>
                        <span className="text-[13px] text-[#8A8F98]">{tier.period}</span>
                      </div>
                      <ul className="mt-5 space-y-2.5">
                        {tier.inclusions.map((inc) => (
                          <li
                            key={inc}
                            className="flex items-start gap-2.5 text-[13px] text-white/80"
                          >
                            <Check className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href="#contact"
                      className={`mt-7 w-full py-2.5 px-4 rounded-xl text-center text-[13.5px] font-semibold transition-all ${
                        tier.popular
                          ? 'bg-white text-[#050505] hover:bg-white/90'
                          : 'bg-white/[0.06] text-white hover:bg-white/[0.12] border border-white/[0.08]'
                      }`}
                    >
                      {tier.ctaText}
                    </a>
                  </div>
                ))}
              </div>

              {/* Modular Add-Ons */}
              <div className="mt-7 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                <span className="text-[12.5px] font-mono-code uppercase tracking-wider text-[#8A8F98]">
                  Modular System Add-Ons:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {CUSTOM_ADDONS.map((addon) => (
                    <div
                      key={addon.title}
                      className="px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-[12.5px] flex items-center gap-2"
                    >
                      <span className="text-white font-medium">{addon.title}</span>
                      <span className="text-[#0066FF]">→</span>
                      <span className="text-[#8A8F98]">{addon.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};


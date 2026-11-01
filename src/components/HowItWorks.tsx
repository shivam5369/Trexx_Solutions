import React from 'react';
import { motion } from 'framer-motion';
import { Search, Cpu, Rocket, CheckCircle2 } from 'lucide-react';

const STEPS = [
  {
    number: '01',
    title: 'Discover',
    subtitle: 'Architecture & Opportunity Mapping',
    description:
      'Understand the business, its challenges, and automation opportunities. We audit your current call volume, customer touchpoints, manual bottlenecks, and digital presence to define a clear technical roadmap.',
    deliverables: [
      'Requirement & Workflow Audit',
      'Voice Agent & System Scope',
      'Architecture & Tech Stack Blueprint',
    ],
    icon: Search,
  },
  {
    number: '02',
    title: 'Build',
    subtitle: 'Custom Engineering & Integration',
    description:
      'Design and implement intelligent AI systems tailored to the business. We train your custom AI voice receptionist, connect your calendar and WhatsApp workflows, and build your bespoke web or backend platform with live preview links.',
    deliverables: [
      'Custom AI Receptionist Training',
      'Web, Backend & CRM Integration',
      'Private Live Preview & Testing',
    ],
    icon: Cpu,
  },
  {
    number: '03',
    title: 'Scale',
    subtitle: 'Production Launch & Optimization',
    description:
      'Optimize workflows, improve performance, and grow with AI. Once deployed on fast cloud infrastructure, we monitor call transcripts, refine conversion flows, and expand automation as your operations scale.',
    deliverables: [
      'Zero-Downtime Cloud Deployment',
      'Call & Conversion Analytics',
      'Ongoing Support & Iteration',
    ],
    icon: Rocket,
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="relative py-28 md:py-36 bg-[#050505] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <div className="max-w-[720px]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
            <span className="text-[11.5px] font-mono-code uppercase tracking-wider text-white/75">
              Execution Process
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-[34px] sm:text-[46px] md:text-[54px] leading-[1.08] tracking-[-0.035em] text-white"
          >
            From complexity to automation in three steps.
          </motion.h2>
        </div>

        {/* Connected Horizontal 3-Step Pipeline */}
        <div className="mt-16 relative">
          {/* Desktop Connecting Glowing Line */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-[52px] left-[8%] right-[8%] h-[1px] bg-gradient-to-r from-white/[0.06] via-[#0066FF]/60 to-white/[0.06]"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className="group rounded-[24px] bg-[#090B10] border border-white/[0.08] p-7 md:p-8 flex flex-col justify-between glow-card-hover"
                >
                  <div>
                    {/* Step Node Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-[#0D1322] border border-[#0066FF]/40 flex items-center justify-center text-[#38BDF8] shadow-[0_0_25px_-5px_rgba(0,102,255,0.35)]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-mono-code text-[11px] uppercase tracking-widest text-[#38BDF8] block">
                            PHASE {step.number}
                          </span>
                          <span className="text-[12.5px] text-[#8A8F98] font-medium">
                            {step.subtitle}
                          </span>
                        </div>
                      </div>
                      <span className="font-display font-bold text-[36px] text-white/[0.08] group-hover:text-[#0066FF]/30 transition-colors">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-[26px] text-white tracking-[-0.02em]">
                      {step.number} — {step.title}
                    </h3>

                    <p className="mt-3 text-[14.5px] text-[#8A8F98] leading-[1.68]">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-white/[0.06] space-y-2">
                    {step.deliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-[12.5px] text-white/80"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};


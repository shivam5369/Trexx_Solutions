import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, X } from 'lucide-react';
import { CONTACT_INFO, CORE_SERVICES } from '../data/siteData';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="relative bg-[#050505] border-t border-white/[0.08] pt-20 pb-12">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.07]">
          {/* Col 1: Brand & Description (4 cols) */}
          <div className="lg:col-span-4">
            <a href="#home" className="inline-flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/[0.16] flex items-center justify-center shadow-[0_0_20px_rgba(0,102,255,0.15)]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 5H20L16.2 9.5H14.2V19L10.2 16.8V9.5H4V5Z"
                    fill="white"
                  />
                  <path d="M15.4 12.5L19.8 18H15.4V12.5Z" fill="#0066FF" />
                </svg>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display font-extrabold text-[22px] md:text-[24px] tracking-[-0.03em] text-white">
                  TREXX
                </span>
                <span className="text-[16px] md:text-[17px] font-medium text-white/60">
                  Solutions
                </span>
              </div>
            </a>

            <p className="mt-4 text-[14px] text-[#8A8F98] leading-[1.7] max-w-[330px]">
              An AI-powered technology and automation company building 24/7 AI receptionists,
              autonomous voice agents, workflow automation, custom websites, and Google Maps business
              integrations.
            </p>

            <div className="mt-6 space-y-2 text-[13.5px] text-[#8A8F98]">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#0066FF]" />
                <span>{CONTACT_INFO.email}</span>
              </a>
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#0066FF]" />
                <span>{CONTACT_INFO.phone}</span>
              </a>
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Direct Consultation</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[12px] font-mono-code uppercase tracking-wider text-white/75 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-[13.5px] text-[#8A8F98]">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#ai-receptionist" className="hover:text-white transition-colors">
                  AI Receptionist
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: All Extracted Services (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-[12px] font-mono-code uppercase tracking-wider text-white/75 mb-4">
              Services &amp; Capabilities
            </h4>
            <ul className="space-y-2.5 text-[13.5px] text-[#8A8F98]">
              {CORE_SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href={service.id === 'ai-receptionist' ? '#ai-receptionist' : '#services'}
                    className="hover:text-white transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Legal & Status (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[12px] font-mono-code uppercase tracking-wider text-white/75 mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5 text-[13.5px] text-[#8A8F98]">
              <li>
                <button
                  type="button"
                  onClick={() => setLegalModal('privacy')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setLegalModal('terms')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Terms &amp; Conditions
                </button>
              </li>
            </ul>

            <div className="mt-7 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.07]">
              <div className="flex items-center gap-2 text-[11.5px] font-mono-code text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Systems Operational</span>
              </div>
              <p className="mt-1 text-[11.5px] text-[#8A8F98]">
                {CONTACT_INFO.location}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#8A8F98]">
          <div>
            &copy; {new Date().getFullYear()} TREXX Solutions. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setLegalModal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setLegalModal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms and Conditions
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy & Terms Modal */}
      <AnimatePresence>
        {legalModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setLegalModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-[640px] w-full rounded-2xl bg-[#0B0D14] border border-white/[0.12] p-7 md:p-9 max-h-[82vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <h3 className="font-display font-bold text-[22px] text-white">
                  {legalModal === 'privacy'
                    ? 'Privacy Policy — TREXX Solutions'
                    : 'Terms and Conditions — TREXX Solutions'}
                </h3>
                <button
                  type="button"
                  onClick={() => setLegalModal(null)}
                  className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-white/70 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {legalModal === 'privacy' ? (
                <div className="mt-5 space-y-4 text-[14px] text-[#8A8F98] leading-[1.7]">
                  <p>
                    TREXX Solutions respects your privacy and is committed to protecting the
                    business and personal information you share with us when inquiring about our AI
                    receptionists, voice agents, workflow automation, and web development services.
                  </p>
                  <h4 className="text-white font-semibold text-[15px]">
                    1. Information We Collect
                  </h4>
                  <p>
                    We only collect information you voluntarily provide via our contact form, email
                    (<span className="text-white">{CONTACT_INFO.email}</span>), or WhatsApp
                    (<span className="text-white">{CONTACT_INFO.phone}</span>), including your name,
                    business name, email address, and project scope details.
                  </p>
                  <h4 className="text-white font-semibold text-[15px]">
                    2. How We Use Your Information
                  </h4>
                  <p>
                    Your details are used strictly to respond to your project inquiry, schedule
                    discovery consultations, and deliver contracted AI and software engineering
                    services. We never sell or rent your data to third parties.
                  </p>
                  <h4 className="text-white font-semibold text-[15px]">
                    3. Data Security &amp; Contact
                  </h4>
                  <p>
                    For any privacy-related questions or data deletion requests, contact us directly
                    at <span className="text-white">{CONTACT_INFO.email}</span>.
                  </p>
                </div>
              ) : (
                <div className="mt-5 space-y-4 text-[14px] text-[#8A8F98] leading-[1.7]">
                  <p>
                    Welcome to TREXX Solutions. By engaging our services or using this website, you
                    agree to the following project and service terms.
                  </p>
                  <h4 className="text-white font-semibold text-[15px]">
                    1. Scope of Services
                  </h4>
                  <p>
                    TREXX Solutions provides custom AI Receptionists, Voice AI Agents, workflow
                    automation, custom web design, full-stack development, backend databases, and
                    admin dashboards based on a mutually agreed project scope.
                  </p>
                  <h4 className="text-white font-semibold text-[15px]">
                    2. Project Milestones &amp; Delivery
                  </h4>
                  <p>
                    Every project follows a structured workflow: Requirement Discussion, Planning
                    &amp; Strategy, Development &amp; Collaborative Preview Feedback, and Final
                    Deployment. Project timelines and payment milestones are specified in your
                    written proposal.
                  </p>
                  <h4 className="text-white font-semibold text-[15px]">
                    3. Contact Information
                  </h4>
                  <p>
                    For questions regarding project terms, reach out to{' '}
                    <span className="text-white">{CONTACT_INFO.email}</span> or{' '}
                    <span className="text-white">{CONTACT_INFO.phone}</span>.
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};


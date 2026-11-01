import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  PhoneCall,
  Clock,
  MessageSquare,
  Calendar,
  HelpCircle,
  UserPlus,
  FileText,
  GitBranch,
  Workflow,
  Mic,
  Volume2,
  ArrowRight,
  Play,
  Pause,
  CheckCircle2,
  Sparkles,
  PhoneMissed,
  ShieldCheck,
  XCircle,
} from 'lucide-react';

const CAPABILITIES = [
  {
    icon: Clock,
    title: '24/7 Incoming Call Handling',
    desc: 'Answers every call on the first ring—day, night, weekends, and peak hours—so you never lose a customer to voicemail.',
  },
  {
    icon: MessageSquare,
    title: 'Natural Human-Like Conversations',
    desc: 'Converses with natural pacing, context awareness, and polite warmth tailored to your brand voice.',
  },
  {
    icon: Calendar,
    title: 'Appointment Scheduling',
    desc: 'Checks real-time availability, books or reschedules appointments, and prevents double-bookings automatically.',
  },
  {
    icon: HelpCircle,
    title: 'Customer Inquiries & FAQs',
    desc: 'Instantly answers questions about pricing, services, location, operating hours, and policies with accuracy.',
  },
  {
    icon: UserPlus,
    title: 'Lead Capture & Qualification',
    desc: 'Collects caller name, contact details, project scope, and intent before logging structured leads.',
  },
  {
    icon: FileText,
    title: 'Call Summaries & Records',
    desc: 'Generates clean, structured transcripts and action-item summaries the moment a call concludes.',
  },
  {
    icon: GitBranch,
    title: 'Intelligent Call Routing',
    desc: 'Recognizes urgent or complex cases and transfers the caller to the right human team member with full context.',
  },
  {
    icon: Workflow,
    title: 'Integration with Business Workflows',
    desc: 'Connects seamlessly with your calendar, WhatsApp confirmations, and internal databases.',
  },
];

const DEMO_CONVERSATION = [
  {
    speaker: 'ai' as const,
    speakerLabel: 'TREXX AI Receptionist',
    timestamp: '00:03',
    stateLabel: 'Greeting & Intent Detection',
    message:
      'Hello! Thank you for calling Elevate Wellness Clinic. I’m your AI receptionist. Are you calling to book an appointment or do you have a question for our team?',
  },
  {
    speaker: 'caller' as const,
    speakerLabel: 'Incoming Caller (Rohan)',
    timestamp: '00:11',
    stateLabel: 'Caller Inquiry',
    message:
      'Hi, I wanted to ask if you’re open on Saturdays, and if I could book a physiotherapy session for this Saturday morning?',
  },
  {
    speaker: 'ai' as const,
    speakerLabel: 'TREXX AI Receptionist',
    timestamp: '00:18',
    stateLabel: 'FAQ + Live Schedule Lookup',
    message:
      'Yes, we’re open Saturdays from 9:00 AM to 5:00 PM. Looking at Saturday morning, we have physiotherapy slots at 10:00 AM and 11:30 AM. Which time works better for you?',
  },
  {
    speaker: 'caller' as const,
    speakerLabel: 'Incoming Caller (Rohan)',
    timestamp: '00:27',
    stateLabel: 'Slot Confirmation',
    message: '10:00 AM works great for me. My name is Rohan Kapoor.',
  },
  {
    speaker: 'ai' as const,
    speakerLabel: 'TREXX AI Receptionist',
    timestamp: '00:34',
    stateLabel: 'Booking Locked & Workflow Triggered',
    message:
      'You’re all set, Rohan! Your physiotherapy session is confirmed for Saturday at 10:00 AM. I’ve just sent the appointment confirmation and clinic location to your WhatsApp.',
  },
];

export const FeaturedAIReceptionist: React.FC = () => {
  const [activeTurn, setActiveTurn] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [durationSec, setDurationSec] = useState(34);

  useEffect(() => {
    if (!autoPlay) return;
    const turnInterval = setInterval(() => {
      setActiveTurn((prev) => (prev + 1) % DEMO_CONVERSATION.length);
    }, 3400);
    return () => clearInterval(turnInterval);
  }, [autoPlay]);

  useEffect(() => {
    if (!autoPlay) return;
    const secInterval = setInterval(() => {
      setDurationSec((prev) => (prev >= 58 ? 12 : prev + 1));
    }, 1000);
    return () => clearInterval(secInterval);
  }, [autoPlay]);

  const currentMessage = DEMO_CONVERSATION[activeTurn];
  const isAiSpeaking = currentMessage.speaker === 'ai';

  const formatDuration = (s: number) => {
    const mins = Math.floor(s / 60);
    const rem = s % 60;
    return `${String(mins).padStart(2, '0')}:${String(rem).padStart(2, '0')}`;
  };

  return (
    <section
      id="ai-receptionist"
      className="relative py-28 md:py-36 bg-[#050505] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Dramatic Electric Blue Center Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full opacity-20 blur-[150px]"
        style={{
          background:
            'radial-gradient(circle, #0066FF 0%, rgba(0, 60, 180, 0.35) 50%, transparent 75%)',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-[780px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/35 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span className="text-[12px] font-semibold uppercase tracking-wider text-[#38BDF8]">
              Featured Flagship Product · AI Voice Agent
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-[38px] sm:text-[52px] md:text-[64px] leading-[1.05] tracking-[-0.04em] text-white"
          >
            Never Miss a Customer.{' '}
            <span className="bg-gradient-to-r from-[#38BDF8] via-[#0066FF] to-white bg-clip-text text-transparent">
              Ever Again.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-5 text-[16.5px] md:text-[18.5px] text-[#8A8F98] leading-[1.68]"
          >
            Meet your AI receptionist — an intelligent voice agent that answers calls, understands
            customer needs, schedules appointments, and handles conversations around the clock.
          </motion.p>
        </div>

        {/* Interactive Demo-Style Voice Conversation UI */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.12 }}
          className="mt-16 rounded-[28px] p-[1px] bg-gradient-to-b from-[#0066FF]/55 via-white/[0.12] to-white/[0.05] shadow-[0_30px_90px_-20px_rgba(0,102,255,0.28)]"
        >
          <div className="rounded-[27px] bg-[#07090F] overflow-hidden">
            {/* Top Voice Console Bar */}
            <div className="px-6 md:px-9 py-4 bg-[#0B0E17] border-b border-white/[0.07] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <span className="font-mono-code text-[12px] font-semibold text-white tracking-wider uppercase">
                  Call Status: Connected · Interactive Voice Demo
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] font-mono-code text-[12px] text-[#38BDF8]">
                  Duration: {formatDuration(durationSec)}
                </div>
                <button
                  type="button"
                  onClick={() => setAutoPlay(!autoPlay)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0066FF]/20 hover:bg-[#0066FF]/30 border border-[#0066FF]/40 text-[12px] font-medium text-white transition-colors cursor-pointer"
                >
                  {autoPlay ? (
                    <>
                      <Pause className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>Pause Stream</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>Resume Stream</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Interactive Voice Stage & Live Transcript */}
            <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left (5 cols): Animated Sound Waves & AI Speaking Indicator */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center rounded-2xl bg-[#0B0E16] border border-white/[0.08] p-7 relative overflow-hidden">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-30"
                  style={{
                    background: isAiSpeaking
                      ? 'radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.35), transparent 70%)'
                      : 'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.18), transparent 70%)',
                  }}
                />

                {/* AI / Caller Speaking Badge */}
                <div className="relative z-10 mb-6">
                  <span
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-mono-code font-semibold border transition-all ${
                      isAiSpeaking
                        ? 'bg-[#0066FF]/20 text-[#38BDF8] border-[#0066FF]/50 shadow-[0_0_25px_rgba(0,102,255,0.4)]'
                        : 'bg-white/[0.06] text-white/80 border-white/[0.15]'
                    }`}
                  >
                    {isAiSpeaking ? (
                      <>
                        <Volume2 className="w-3.5 h-3.5 text-[#38BDF8] animate-pulse" />
                        <span>AI RECEPTIONIST SPEAKING</span>
                      </>
                    ) : (
                      <>
                        <Mic className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                        <span>LISTENING TO CALLER</span>
                      </>
                    )}
                  </span>
                </div>

                {/* Central Glowing Voice Orb + Animated Sound Waves */}
                <div className="relative z-10 w-full py-6 flex items-center justify-center gap-1.5 h-28">
                  {[
                    16, 26, 42, 30, 58, 76, 48, 86, 64, 92, 54, 78, 44, 68, 36, 52, 28, 18,
                  ].map((barHeight, i) => (
                    <motion.span
                      key={i}
                      animate={
                        autoPlay
                          ? {
                              height: [
                                `${Math.max(10, barHeight * 0.28)}px`,
                                `${barHeight}px`,
                                `${Math.max(10, barHeight * 0.35)}px`,
                              ],
                            }
                          : { height: `${Math.max(12, barHeight * 0.35)}px` }
                      }
                      transition={{
                        duration: 0.65 + (i % 5) * 0.14,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className={`w-1.5 sm:w-2 rounded-full ${
                        isAiSpeaking
                          ? 'bg-gradient-to-t from-[#0066FF] via-[#38BDF8] to-white'
                          : 'bg-gradient-to-t from-emerald-500/70 to-emerald-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Active Turn Caption */}
                <div className="relative z-10 mt-4 text-center">
                  <div className="text-[11.5px] font-mono-code uppercase tracking-wider text-[#38BDF8]">
                    {currentMessage.stateLabel}
                  </div>
                  <p className="mt-2 text-[14px] text-white/90 leading-[1.6] min-h-[66px]">
                    &ldquo;{currentMessage.message}&rdquo;
                  </p>
                </div>

                {/* Step Selector Dots */}
                <div className="relative z-10 mt-5 pt-4 border-t border-white/[0.07] w-full flex items-center justify-between text-[11.5px] text-[#8A8F98]">
                  <span>Click any message to inspect turn</span>
                  <div className="flex items-center gap-1.5">
                    {DEMO_CONVERSATION.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => {
                          setActiveTurn(i);
                          setAutoPlay(false);
                        }}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${
                          activeTurn === i ? 'w-6 bg-[#0066FF]' : 'w-1.5 bg-white/25'
                        }`}
                        aria-label={`Jump to conversation turn ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right (7 cols): Interactive Conversation Messages Stream */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div className="space-y-3">
                  {DEMO_CONVERSATION.map((turn, idx) => {
                    const isCurrent = idx === activeTurn;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setActiveTurn(idx);
                          setAutoPlay(false);
                        }}
                        className={`w-full text-left rounded-2xl p-4 border transition-all cursor-pointer ${
                          isCurrent
                            ? 'bg-[#0F1526] border-[#0066FF]/60 shadow-[0_10px_30px_-10px_rgba(0,102,255,0.3)]'
                            : 'bg-white/[0.02] border-white/[0.06] opacity-70 hover:opacity-100'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <div className="flex items-center gap-2">
                            <span
                              className={`w-2 h-2 rounded-full ${
                                turn.speaker === 'ai' ? 'bg-[#0066FF]' : 'bg-emerald-400'
                              }`}
                            />
                            <span className="text-[12px] font-semibold text-white">
                              {turn.speakerLabel}
                            </span>
                            <span className="text-[11px] font-mono-code text-[#38BDF8] bg-[#0066FF]/15 px-2 py-0.5 rounded">
                              {turn.stateLabel}
                            </span>
                          </div>
                          <span className="font-mono-code text-[11px] text-white/40">
                            {turn.timestamp}
                          </span>
                        </div>
                        <p className="text-[13.5px] text-white/85 leading-[1.55]">
                          {turn.message}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* Live Extracted Call Record Footer */}
                <div className="mt-5 rounded-xl bg-white/[0.03] border border-white/[0.08] p-4 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-[13px] font-semibold text-white">
                        Call Outcome: Saturday 10:00 AM Slot Booked &amp; Logged
                      </div>
                      <div className="text-[12px] text-[#8A8F98]">
                        Caller: Rohan Kapoor · Service: Physiotherapy · WhatsApp Confirmation Sent
                      </div>
                    </div>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#050505] font-semibold text-[13px] hover:bg-white/90 transition-all"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Explore AI Receptionist</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* WITHOUT TREXX vs. WITH TREXX AI — CLIENT RETENTION & ZERO LEAD LEAKAGE */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* Left: Without TREXX (How Clients Are Lost) */}
          <div className="rounded-[24px] bg-[#0A0B0F] border border-white/[0.08] p-7 md:p-8 flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-[11.5px] font-mono-code uppercase tracking-wider mb-5">
                <PhoneMissed className="w-3.5 h-3.5" />
                <span>Without TREXX · How Businesses Lose Clients</span>
              </div>

              <h3 className="font-display font-bold text-[22px] sm:text-[25px] text-white tracking-[-0.02em] leading-[1.25]">
                Every missed call is a paying client handed to your competitor.
              </h3>

              <p className="mt-3 text-[14px] text-[#8A8F98] leading-[1.65]">
                When a customer calls and nobody picks up—because your staff is busy, on another
                line, or closed for the evening—they rarely leave a voicemail. They simply call the
                next business listed on Google Maps.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  'Calls ring out during peak rush hours or after-hours',
                  'Existing clients wait on hold just to reschedule or ask basic questions',
                  'Unanswered inquiries turn into lost revenue and silent client churn',
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-2.5 text-[13.5px] text-white/70"
                  >
                    <XCircle className="w-4 h-4 text-red-400/80 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[12px] font-mono-code text-red-400/90">
              <span>OUTCOME:</span>
              <span>PROSPECT CALLS NEXT COMPETITOR</span>
            </div>
          </div>

          {/* Right: With TREXX AI (Every Client Captured & Saved) */}
          <div className="rounded-[24px] bg-gradient-to-br from-[#0C1428] via-[#090C14] to-[#080A10] border border-[#0066FF]/45 p-7 md:p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,102,255,0.28)]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/20 border border-[#0066FF]/40 text-[#38BDF8] text-[11.5px] font-mono-code uppercase tracking-wider mb-5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>With TREXX AI Agents · Every Client Saved</span>
              </div>

              <h3 className="font-display font-bold text-[22px] sm:text-[25px] text-white tracking-[-0.02em] leading-[1.25]">
                Save every incoming lead and keep existing clients loyal—24/7.
              </h3>

              <p className="mt-3 text-[14px] text-white/80 leading-[1.65]">
                Our AI voice agents answer on the first ring with natural, human-like conversation—so
                prospects feel heard immediately, appointments get locked in, and existing clients
                receive instant support without ever waiting on hold.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  'Instant 1st-ring pickup at 2 PM or 2 AM—zero missed client calls',
                  'Immediate appointment booking, rescheduling & FAQ resolution',
                  'Automated WhatsApp confirmation & call summary sent in seconds',
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-2.5 text-[13.5px] text-white/90"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[12px] font-mono-code text-emerald-400">
              <span>OUTCOME:</span>
              <span>CLIENT SAVED · APPOINTMENT BOOKED</span>
            </div>
          </div>
        </motion.div>

        {/* 8 Core Capabilities Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CAPABILITIES.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="rounded-2xl bg-[#0A0B0F] border border-white/[0.07] p-6 glow-card-hover"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0066FF]/12 border border-[#0066FF]/30 flex items-center justify-center text-[#38BDF8] mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-semibold text-[16.5px] text-white tracking-[-0.015em]">
                  {cap.title}
                </h3>
                <p className="mt-2 text-[13px] text-[#8A8F98] leading-[1.6]">
                  {cap.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Section CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#2563EB] text-white font-semibold text-[15px] hover:opacity-95 transition-all shadow-[0_0_40px_-5px_rgba(0,102,255,0.5)]"
          >
            <span>Explore AI Receptionist</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};


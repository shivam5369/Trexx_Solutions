import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PhoneIncoming,
  Sparkles,
  CalendarCheck,
  UserCheck,
  FileText,
  Workflow,
  ArrowRight,
  CheckCircle2,
  Volume2,
  Play,
  Pause,
  RotateCcw,
  ChevronDown,
  Plus,
  Activity,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { HERO_SCENARIOS } from '../data/siteData';

export const HeroSection: React.FC = () => {
  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const [canvasMode, setCanvasMode] = useState<'agent' | 'workflow'>('agent');
  const [visibleMessages, setVisibleMessages] = useState(5);
  const [isPlaying, setIsPlaying] = useState(true);
  const [callSeconds, setCallSeconds] = useState(88);

  const scenario = HERO_SCENARIOS[activeScenarioIdx];

  // Live timer and message progression when playing
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCallSeconds((prev) => (prev >= 145 ? 72 : prev + 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  useEffect(() => {
    if (!isPlaying) return;
    if (visibleMessages < scenario.transcript.length) {
      const msgTimer = setTimeout(() => {
        setVisibleMessages((prev) => Math.min(prev + 1, scenario.transcript.length));
      }, 1700);
      return () => clearTimeout(msgTimer);
    }
  }, [visibleMessages, isPlaying, scenario.transcript.length]);

  const handleScenarioChange = (idx: number) => {
    setActiveScenarioIdx(idx);
    setVisibleMessages(2);
    setCallSeconds(14);
    setIsPlaying(true);
  };

  const handleReplay = () => {
    setVisibleMessages(1);
    setCallSeconds(4);
    setIsPlaying(true);
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${String(mins).padStart(2, '0')}:${String(rem).padStart(2, '0')}`;
  };

  return (
    <section
      id="home"
      className="relative pt-32 md:pt-40 pb-24 md:pb-32 overflow-hidden bg-[#050505]"
    >
      {/* Subtle Framer-style Ambient Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[520px] rounded-full opacity-25 blur-[135px]"
        style={{
          background:
            'radial-gradient(circle at 50% 20%, #0066FF 0%, rgba(0, 40, 140, 0.35) 45%, transparent 75%)',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
        {/* Framer-inspired Left-Aligned Editorial Hero Composition */}
        <div className="max-w-[920px]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.09] mb-7"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0066FF] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0066FF]" />
            </span>
            <span className="text-[12.5px] font-medium text-white/80 tracking-[-0.01em]">
              TREXX Solutions · AI Agents & Intelligent Business Automation
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-[44px] sm:text-[62px] md:text-[76px] leading-[1.04] tracking-[-0.04em] text-white"
          >
            Your Business.
            <br />
            <span className="bg-gradient-to-r from-white via-white to-[#60A5FA] bg-clip-text text-transparent">
              Reimagined with AI.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-[19px] md:text-[22px] font-medium text-white/90 tracking-[-0.02em] leading-[1.4]"
          >
            Intelligent AI agents and automation systems that work while you grow.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-[15.5px] md:text-[17px] text-[#8A8F98] max-w-[680px] leading-[1.68]"
          >
            From AI-powered receptionists to intelligent business automation, TREXX Solutions helps
            businesses eliminate repetitive work, improve customer experiences, and unlock their next
            stage of growth.
          </motion.p>
        </div>

        {/* Framer-style CTA Bar with Right-Side Feature Highlight Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
        >
          <div className="flex flex-wrap items-center gap-3.5">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#050505] font-semibold text-[14.5px] tracking-[-0.01em] hover:bg-white/90 active:scale-[0.99] transition-all shadow-[0_0_35px_rgba(255,255,255,0.2)]"
            >
              <span>Let&apos;s Build Together</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] text-white font-medium text-[14.5px] tracking-[-0.01em] border border-white/[0.1] transition-all"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 text-white/60" />
            </a>
          </div>

          <a
            href="#ai-receptionist"
            className="group inline-flex items-center gap-2 text-[13.5px] font-medium text-[#8A8F98] hover:text-white transition-colors"
          >
            <span className="text-white font-semibold">Flagship:</span>
            <span>24/7 AI Voice Receptionist</span>
            <ArrowRight className="w-4 h-4 text-[#0066FF] group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Framer-Inspired Interactive Dark Studio Canvas Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 relative rounded-[24px] p-[1px] bg-gradient-to-b from-white/[0.16] via-[#0066FF]/30 to-white/[0.04] shadow-[0_30px_100px_-20px_rgba(0,102,255,0.22)]"
        >
          {/* Top Electric Blue Rim Illumination */}
          <div
            aria-hidden="true"
            className="absolute -top-px left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-gradient-to-r from-transparent via-[#0066FF] to-transparent"
          />

          <div className="rounded-[23px] bg-[#07080B] overflow-hidden">
            {/* Framer-Style Interactive Canvas Top Control Bar */}
            <div className="px-5 md:px-8 py-4 border-b border-white/[0.07] bg-[#0A0B0F] flex flex-wrap items-center justify-between gap-4">
              {/* Left: Framer-Inspired "Agent | Workflow" Mode Switcher */}
              <div className="flex items-center gap-2">
                <div className="inline-flex items-center p-1 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                  <button
                    type="button"
                    onClick={() => setCanvasMode('agent')}
                    className={`px-4 py-1.5 rounded-lg text-[13px] font-semibold transition-all cursor-pointer ${
                      canvasMode === 'agent'
                        ? 'bg-white/[0.12] text-white shadow-sm'
                        : 'text-[#8A8F98] hover:text-white'
                    }`}
                  >
                    Agent
                  </button>
                  <button
                    type="button"
                    onClick={() => setCanvasMode('workflow')}
                    className={`px-4 py-1.5 rounded-lg text-[13px] font-semibold transition-all cursor-pointer ${
                      canvasMode === 'workflow'
                        ? 'bg-white/[0.12] text-white shadow-sm'
                        : 'text-[#8A8F98] hover:text-white'
                    }`}
                  >
                    Workflow
                  </button>
                </div>

                {/* Framer-inspired Action Pill Selector */}
                <div className="hidden sm:flex items-center gap-2 pl-2">
                  <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.07] rounded-xl px-3 py-1.5 text-[12.5px] text-white/80">
                    <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" />
                    <span>Live Scenario:</span>
                    <div className="flex items-center gap-1 ml-1">
                      {HERO_SCENARIOS.map((item, idx) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => handleScenarioChange(idx)}
                          className={`px-2.5 py-0.5 rounded-md text-[12px] font-medium transition-all cursor-pointer ${
                            activeScenarioIdx === idx
                              ? 'bg-[#0066FF] text-white'
                              : 'text-[#8A8F98] hover:text-white hover:bg-white/[0.05]'
                          }`}
                        >
                          {item.industry}
                        </button>
                      ))}
                    </div>
                    <ChevronDown className="w-3.5 h-3.5 text-white/40 ml-1" />
                  </div>
                  <button
                    type="button"
                    onClick={handleReplay}
                    title="Replay Call Simulation"
                    className="w-8 h-8 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.07] flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right: Live Telemetry & Playback Controls */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30">
                  <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                  <span className="font-mono-code text-[11.5px] text-[#38BDF8] font-medium">
                    AI AGENT ANSWERING · {formatTime(callSeconds)}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] text-white/80 hover:text-white transition-colors cursor-pointer"
                  aria-label={isPlaying ? 'Pause simulation' : 'Play simulation'}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
                <button
                  type="button"
                  onClick={handleReplay}
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] text-white/80 hover:text-white transition-colors cursor-pointer"
                  aria-label="Restart simulation"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Mobile Scenario Switcher */}
            <div className="flex sm:hidden items-center gap-1.5 px-5 py-3 bg-[#090A0E] border-b border-white/[0.06] overflow-x-auto">
              {HERO_SCENARIOS.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleScenarioChange(idx)}
                  className={`px-3 py-1 rounded-lg text-[12px] font-medium whitespace-nowrap transition-all ${
                    activeScenarioIdx === idx
                      ? 'bg-[#0066FF] text-white'
                      : 'bg-white/[0.04] text-[#8A8F98]'
                  }`}
                >
                  {item.industry}
                </button>
              ))}
            </div>

            {/* Main Dashboard Grid Inside the Product Canvas */}
            <div className="p-5 md:p-8 bg-framer-grid">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                {/* LEFT COLUMN (4 cols): Incoming Call Notification + Customer Profile + Appointment Status */}
                <div className="lg:col-span-4 flex flex-col gap-5">
                  {/* 1. Incoming Call Notification Card */}
                  <div className="rounded-2xl bg-[#0C0E14] border border-[#0066FF]/35 p-5 relative overflow-hidden shadow-[0_0_40px_-15px_rgba(0,102,255,0.3)]">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#0066FF]/20 border border-[#0066FF]/40 flex items-center justify-center text-[#38BDF8]">
                          <PhoneIncoming className="w-5 h-5 animate-bounce" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-mono-code uppercase tracking-wider text-[#38BDF8] font-semibold">
                              Incoming Call Connected
                            </span>
                          </div>
                          <h3 className="text-[16px] font-semibold text-white mt-0.5">
                            {scenario.callerName}
                          </h3>
                          <p className="text-[12.5px] font-mono-code text-[#8A8F98]">
                            {scenario.callerPhone}
                          </p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                        Live
                      </span>
                    </div>

                    {/* Active Voice Waveform Bar */}
                    <div className="mt-4 pt-4 border-t border-white/[0.07] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Volume2 className="w-4 h-4 text-[#0066FF]" />
                        <span className="text-[12px] text-white/80 font-medium">
                          {scenario.agentName}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 h-4">
                        {[0.4, 0.9, 0.6, 1, 0.5, 0.8, 0.3, 0.75, 0.95, 0.45].map((h, i) => (
                          <motion.span
                            key={i}
                            animate={
                              isPlaying
                                ? {
                                    height: [`${h * 6}px`, `${h * 16}px`, `${h * 6}px`],
                                  }
                                : { height: '4px' }
                            }
                            transition={{
                              duration: 0.7 + (i % 3) * 0.2,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            }}
                            className="w-1 rounded-full bg-gradient-to-t from-[#0066FF] to-[#38BDF8]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 2. Customer Information Panel */}
                  <div className="rounded-2xl bg-[#0B0C10] border border-white/[0.08] p-5">
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-[#8A8F98]">
                        <UserCheck className="w-4 h-4 text-[#0066FF]" />
                        <span>Customer Information</span>
                      </div>
                      <span className="text-[11px] font-mono-code text-white/50">CRM AUTO-SYNC</span>
                    </div>
                    <div className="space-y-2.5 text-[13px]">
                      <div className="flex items-center justify-between py-1.5 border-b border-white/[0.05]">
                        <span className="text-[#8A8F98]">Business Line</span>
                        <span className="text-white font-medium">{scenario.companyName}</span>
                      </div>
                      <div className="flex items-center justify-between py-1.5 border-b border-white/[0.05]">
                        <span className="text-[#8A8F98]">Detected Intent</span>
                        <span className="text-[#38BDF8] font-medium">{scenario.callerIntent}</span>
                      </div>
                      <div className="flex items-center justify-between py-1.5">
                        <span className="text-[#8A8F98]">CRM Record</span>
                        <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {scenario.crmStatus}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 3. Appointment Booking Status Panel */}
                  <div className="rounded-2xl bg-gradient-to-br from-[#0066FF]/15 via-[#0B0C10] to-[#0B0C10] border border-[#0066FF]/30 p-5">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-[#38BDF8]">
                        <CalendarCheck className="w-4 h-4" />
                        <span>Appointment Booking Status</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10.5px] font-mono-code bg-[#0066FF]/25 text-white border border-[#0066FF]/40">
                        CONFIRMED
                      </span>
                    </div>
                    <div className="text-[16px] font-semibold text-white mt-2">
                      {scenario.appointmentSlot}
                    </div>
                    <p className="text-[12.5px] text-[#8A8F98] mt-1">
                      Calendar locked &amp; automated WhatsApp confirmation dispatched to caller.
                    </p>
                  </div>
                </div>

                {/* CENTER / RIGHT COLUMN (8 cols): Live Conversation Transcription + Call Summary + Automation Workflow */}
                <div className="lg:col-span-8 flex flex-col gap-5">
                  {/* Live Conversation Transcription / Workflow View */}
                  <div className="rounded-2xl bg-[#0B0C10] border border-white/[0.08] p-5 md:p-6 flex-1 flex flex-col justify-between">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/[0.07]">
                      <div className="flex items-center gap-2.5">
                        <Activity className="w-4 h-4 text-[#0066FF]" />
                        <span className="text-[13.5px] font-semibold text-white">
                          {canvasMode === 'agent'
                            ? 'Live Voice Conversation Transcription'
                            : 'Autonomous Workflow Execution Graph'}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-[11.5px] font-mono-code text-[#8A8F98]">
                        <span className="inline-flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                          Natural Voice AI
                        </span>
                        <span>·</span>
                        <span>Turn {Math.min(visibleMessages, scenario.transcript.length)}/{scenario.transcript.length}</span>
                      </div>
                    </div>

                    {canvasMode === 'agent' ? (
                      <div className="my-4 space-y-3.5 min-h-[290px]">
                        <AnimatePresence mode="popLayout">
                          {scenario.transcript.slice(0, visibleMessages).map((msg, i) => (
                            <motion.div
                              key={`${scenario.id}-${i}`}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                              className={`flex flex-col ${
                                msg.speaker === 'ai' ? 'items-start' : 'items-end'
                              }`}
                            >
                              <div className="flex items-center gap-2 mb-1 px-1">
                                <span
                                  className={`text-[11px] font-mono-code uppercase font-semibold ${
                                    msg.speaker === 'ai' ? 'text-[#38BDF8]' : 'text-white/60'
                                  }`}
                                >
                                  {msg.speaker === 'ai' ? 'TREXX AI Receptionist' : scenario.callerName}
                                </span>
                                <span className="text-[10.5px] font-mono-code text-white/30">
                                  {msg.time}
                                </span>
                                {msg.actionTag && (
                                  <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono-code bg-[#0066FF]/15 text-[#38BDF8] border border-[#0066FF]/30">
                                    <Zap className="w-2.5 h-2.5" />
                                    {msg.actionTag}
                                  </span>
                                )}
                              </div>
                              <div
                                className={`max-w-[88%] rounded-2xl px-4 py-3 text-[13.5px] leading-[1.55] ${
                                  msg.speaker === 'ai'
                                    ? 'bg-[#111520] text-white/95 border border-[#0066FF]/25'
                                    : 'bg-white/[0.05] text-white/85 border border-white/[0.08]'
                                }`}
                              >
                                {msg.text}
                              </div>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-4 min-h-[290px] content-center">
                        {scenario.workflowNodes.map((node) => (
                          <div
                            key={node.step}
                            className={`rounded-xl p-4 border transition-all ${
                              node.status === 'active'
                                ? 'bg-[#0066FF]/10 border-[#0066FF]/45 shadow-[0_0_25px_-5px_rgba(0,102,255,0.25)]'
                                : 'bg-white/[0.02] border-white/[0.08]'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-mono-code text-[11px] px-2 py-0.5 rounded bg-white/[0.06] text-[#38BDF8]">
                                STEP {node.step}
                              </span>
                              <span className="text-[11px] font-mono-code text-emerald-400 flex items-center gap-1">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                {node.status === 'active' ? 'EXECUTING' : 'VERIFIED'}
                              </span>
                            </div>
                            <div className="text-[14.5px] font-semibold text-white">
                              {node.label}
                            </div>
                            <div className="text-[12.5px] text-[#8A8F98] mt-1">
                              {node.detail}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Bottom Call Summary & Automation Workflow Pipeline */}
                    <div className="pt-4 border-t border-white/[0.07] grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Call Summary */}
                      <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-3.5">
                        <div className="flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-wider text-white/75 mb-2">
                          <FileText className="w-3.5 h-3.5 text-[#0066FF]" />
                          <span>Automated Call Summary</span>
                        </div>
                        <ul className="space-y-1.5">
                          {scenario.summaryPoints.map((pt, index) => (
                            <li
                              key={index}
                              className="text-[12px] text-[#8A8F98] flex items-start gap-2 leading-[1.45]"
                            >
                              <span className="text-[#0066FF] mt-0.5">•</span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Automation Workflow Visualization */}
                      <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-3.5 flex flex-col justify-between">
                        <div className="flex items-center justify-between text-[11.5px] font-semibold uppercase tracking-wider text-white/75 mb-2">
                          <span className="flex items-center gap-2">
                            <Workflow className="w-3.5 h-3.5 text-[#38BDF8]" />
                            <span>Automation Workflow Pipeline</span>
                          </span>
                          <span className="text-[10.5px] font-mono-code text-emerald-400">
                            4/4 Nodes Active
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {scenario.workflowNodes.map((wf) => (
                            <div
                              key={wf.step}
                              className="px-2.5 py-2 rounded-lg bg-[#080A0F] border border-white/[0.07] flex items-center gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] shrink-0" />
                              <div className="truncate">
                                <div className="text-[11px] font-medium text-white truncate">
                                  {wf.label}
                                </div>
                                <div className="text-[10px] text-[#8A8F98] truncate">
                                  {wf.detail}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


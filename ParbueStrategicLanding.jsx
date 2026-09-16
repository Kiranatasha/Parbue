import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const services = [
  {
    title: "Performance Marketing",
    description:
      "Campaign systems designed for sharper acquisition economics, better signal quality, and more predictable revenue momentum.",
  },
  {
    title: "Brand Strategy",
    description:
      "Positioning, messaging, and offer clarity that help ambitious brands look more premium and convert with more authority.",
  },
  {
    title: "Growth Systems",
    description:
      "Operational frameworks that connect strategy, execution, reporting, and optimization into one scalable engine.",
  },
];

const proof = [
  {
    brand: "Consumer Growth Brand",
    result: "+186%",
    label: "Increase in qualified revenue pipeline",
    description:
      "Reframed the offer, tightened performance creative, and rebuilt the conversion journey into a more scalable system.",
  },
  {
    brand: "Regional Service Company",
    result: "-29%",
    label: "Lower customer acquisition cost",
    description:
      "Introduced cleaner campaign architecture, better landing page sequencing, and more disciplined optimization loops.",
  },
  {
    brand: "Modern Retail Operator",
    result: "3.9x",
    label: "Return on paid growth investment",
    description:
      "Aligned brand direction with demand capture so every campaign worked harder across acquisition and retention.",
  },
];

const process = [
  {
    step: "01",
    title: "Clarify",
    description:
      "Audit the market, offer, funnel, and acquisition bottlenecks to identify where growth is actually leaking.",
  },
  {
    step: "02",
    title: "Align",
    description:
      "Turn brand, messaging, and channel strategy into one coherent narrative buyers can trust quickly.",
  },
  {
    step: "03",
    title: "Execute",
    description:
      "Deploy high-performance assets, cleaner campaign systems, and tighter measurement foundations.",
  },
  {
    step: "04",
    title: "Compound",
    description:
      "Refine the engine continuously so each round of testing creates stronger economics and sharper market fit.",
  },
];

const testimonials = [
  {
    quote:
      "Parbue brought structure to our growth strategy without slowing execution. The brand became clearer and the numbers followed.",
    name: "Amelia Hart",
    role: "Founder, Growth Consumer Brand",
  },
  {
    quote:
      "They think like operators. Every recommendation had a strategic reason behind it and a measurable outcome attached.",
    name: "Rafi Nugraha",
    role: "Marketing Director, Regional Operator",
  },
  {
    quote:
      "What stood out most was the level of precision. The work felt premium, modern, and deeply aligned with scale.",
    name: "Nina Voller",
    role: "CEO, Retail Group",
  },
];

const logos = ["ALTURA", "NOVA", "KINETIC", "SOLACE", "BRIX", "ELEVATE"];

function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignment =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl";

  return (
    <div className={alignment}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.38em] text-cyan-300/80">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-slate-300/80 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-[28px] border border-white/10 bg-white/[0.06] p-6 shadow-[0_20px_80px_rgba(15,23,42,0.45)] backdrop-blur-2xl ${className}`}
    >
      {children}
    </div>
  );
}

export default function ParbueStrategicLanding() {
  return (
    <div
      className="min-h-screen overflow-hidden bg-[#02040a] text-white"
      style={{ fontFamily: '"Space Grotesk", "Satoshi", sans-serif' }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.22),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.12),transparent_20%),linear-gradient(135deg,#000_15%,#06101f_55%,#081a35_100%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(148,163,184,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.16)_1px,transparent_1px)] [background-size:72px_72px]" />
        <motion.div
          animate={{ x: [0, 35, -15, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-10%] top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -25, 20, 0], y: [0, 30, -10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-8%] top-40 h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-3xl"
        />
      </div>

      <div className="relative z-10">
        <motion.nav
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-7 sm:px-8 lg:px-10"
        >
          <p className="max-w-[13rem] text-sm font-bold uppercase leading-tight tracking-[0.35em] text-white sm:text-base">
            PARBUE STRATEGIC
          </p>
          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#services" className="transition hover:text-cyan-300">
              Services
            </a>
            <a href="#about" className="transition hover:text-cyan-300">
              About
            </a>
            <a href="#process" className="transition hover:text-cyan-300">
              Process
            </a>
            <a href="#contact" className="transition hover:text-cyan-300">
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="rounded-full border border-cyan-300/25 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:border-cyan-300/40 hover:bg-white/10"
          >
            Get in touch
          </a>
        </motion.nav>

        <section className="mx-auto grid max-w-7xl gap-14 px-6 pb-24 pt-10 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:pb-32 lg:pt-16">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <motion.p
              variants={item}
              className="mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200"
            >
              Strategic Growth Partner
            </motion.p>
            <motion.h1
              variants={item}
              className="text-[3.2rem] font-semibold leading-[0.92] tracking-[-0.06em] text-white sm:text-[4.5rem] md:text-[5.4rem]"
            >
              Strategic growth,
              <span className="block bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                engineered for scale.
              </span>
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-8 max-w-2xl text-lg leading-8 text-slate-300/82 sm:text-xl"
            >
              We help brands unlock sustainable growth through sharp strategy,
              high-performance execution, and systems designed to scale with
              clarity.
            </motion.p>
            <motion.div
              variants={item}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_15px_50px_rgba(56,189,248,0.35)] transition hover:scale-[1.02]"
              >
                Get in touch
              </a>
              <a
                href="#proof"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                See growth proof
              </a>
            </motion.div>
            <motion.div
              variants={item}
              className="mt-12 grid max-w-xl grid-cols-3 gap-4"
            >
              {[
                ["$32M+", "Growth influenced"],
                ["27%", "Average CAC improvement"],
                ["12", "Scalable systems deployed"],
              ].map(([value, label]) => (
                <GlassCard key={label} className="p-4">
                  <p className="text-2xl font-semibold tracking-[-0.04em] text-white">
                    {value}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">{label}</p>
                </GlassCard>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-[34rem]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                className="absolute inset-6 rounded-full border border-cyan-300/15"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                className="absolute inset-14 rounded-full border border-white/10"
              />
              <GlassCard className="relative overflow-hidden p-0">
                <div className="relative aspect-[0.95] overflow-hidden rounded-[28px]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(125,211,252,0.7),transparent_0),radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.35),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.16),transparent_30%),linear-gradient(180deg,rgba(2,6,23,0.7),rgba(2,6,23,0.94))]" />
                  <motion.div
                    animate={{
                      scale: [1, 1.08, 1],
                      rotate: [0, 8, -4, 0],
                    }}
                    transition={{
                      duration: 14,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-300/60 via-blue-500/20 to-transparent blur-2xl"
                  />
                  <motion.div
                    animate={{ y: [0, -16, 0] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-10 rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-xl"
                  >
                    <div className="absolute left-6 top-6 flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                      <span className="text-xs uppercase tracking-[0.32em] text-cyan-100/70">
                        Strategic Operating Layer
                      </span>
                    </div>
                    <div className="absolute inset-x-6 bottom-6 top-20 rounded-[24px] border border-white/8 bg-slate-950/60 p-5">
                      <div className="flex items-end justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                            Growth Efficiency
                          </p>
                          <p className="mt-3 text-5xl font-semibold tracking-[-0.05em] text-white">
                            142%
                          </p>
                        </div>
                        <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                          +9.8% trend
                        </div>
                      </div>
                      <div className="mt-8 grid grid-cols-6 items-end gap-2">
                        {[34, 56, 68, 81, 104, 122].map((height) => (
                          <motion.div
                            key={height}
                            initial={{ height: 0 }}
                            animate={{ height }}
                            transition={{
                              duration: 1.2,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="rounded-t-full bg-gradient-to-t from-cyan-400 to-blue-500"
                          />
                        ))}
                      </div>
                      <div className="mt-8 grid grid-cols-2 gap-4">
                        <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                            Funnel Clarity
                          </p>
                          <p className="mt-2 text-2xl font-medium text-white">
                            91%
                          </p>
                        </div>
                        <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                            Signal Strength
                          </p>
                          <p className="mt-2 text-2xl font-medium text-white">
                            4.8x
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </GlassCard>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-10">
          <GlassCard className="rounded-[32px] px-6 py-8 sm:px-8">
            <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
              <p className="text-sm font-medium uppercase tracking-[0.36em] text-slate-400">
                Trusted by ambitious teams building for durable growth
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-5 text-xl font-semibold tracking-[0.24em] text-white/72 sm:grid-cols-3">
                {logos.map((logo) => (
                  <div key={logo}>{logo}</div>
                ))}
              </div>
            </div>
          </GlassCard>
        </section>

        <section
          id="services"
          className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24"
        >
          <SectionHeading
            eyebrow="What We Do"
            title="We turn fragmented marketing activity into a coherent system built for scale."
            description="Parbue Strategic helps brands move from scattered execution to sharper strategy, stronger performance, and more scalable momentum."
          />
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 grid gap-6 md:grid-cols-3"
          >
            {services.map((service) => (
              <motion.div key={service.title} variants={item}>
                <GlassCard className="h-full p-8">
                  <div className="mb-6 h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-300/30 to-blue-500/20" />
                  <h3 className="text-2xl font-medium tracking-[-0.04em] text-white">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-300/75">
                    {service.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section
          id="about"
          className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24"
        >
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              eyebrow="About"
              title="Built for brands that want more than visibility."
              description="Parbue Strategic is a modern marketing partner for companies that want structured, scalable growth rather than disconnected tactics."
            />
            <GlassCard className="p-8 sm:p-10">
              <p className="text-lg leading-8 text-slate-200/90">
                We combine strategic clarity with execution precision, helping
                businesses move beyond fragmented marketing efforts into cohesive
                systems that drive real results. The work is designed to sharpen
                how your brand is perceived, improve how campaigns perform, and
                create a stronger operating rhythm for long-term growth.
              </p>
            </GlassCard>
          </div>
        </section>

        <section
          id="proof"
          className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24"
        >
          <SectionHeading
            eyebrow="Growth Proof"
            title="Measured outcomes, not surface-level activity."
            description="The goal is not more noise. It is better positioning, stronger economics, and a system that compounds over time."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {proof.map((study, index) => (
              <motion.div
                key={study.brand}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <GlassCard className="h-full overflow-hidden p-0">
                  <div className="h-56 bg-[radial-gradient(circle_at_20%_20%,rgba(103,232,249,0.18),transparent_0),linear-gradient(135deg,rgba(15,23,42,0.9),rgba(14,116,144,0.24),rgba(2,6,23,0.95))]" />
                  <div className="p-8">
                    <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">
                      {study.brand}
                    </p>
                    <p className="mt-5 text-5xl font-semibold tracking-[-0.06em] text-white">
                      {study.result}
                    </p>
                    <p className="mt-2 text-base text-slate-300">{study.label}</p>
                    <p className="mt-6 text-base leading-7 text-slate-400">
                      {study.description}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        <section
          id="process"
          className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24"
        >
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="Process"
              title="Structured like strategy. Executed like a growth system."
              description="Every phase is designed to reduce noise, increase decision quality, and create momentum that lasts beyond one campaign cycle."
            />
            <div className="space-y-5">
              {process.map((phase, index) => (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <GlassCard className="flex gap-5 p-6 sm:p-7">
                    <div className="text-sm font-semibold tracking-[0.32em] text-cyan-300/80">
                      {phase.step}
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium tracking-[-0.04em] text-white">
                        {phase.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-base leading-7 text-slate-300/75">
                        {phase.description}
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24"
        >
          <SectionHeading
            eyebrow="Testimonials"
            title="A strategic partner for brands that care how growth is built."
            description="Great performance is stronger when it is grounded in clarity, discipline, and better systems."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <GlassCard className="h-full p-8">
                  <p className="text-lg leading-8 text-slate-200">
                    “{testimonial.quote}”
                  </p>
                  <div className="mt-10">
                    <p className="text-base font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="mt-1 text-sm uppercase tracking-[0.2em] text-slate-400">
                      {testimonial.role}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-7xl px-6 pb-24 pt-16 sm:px-8 lg:px-10 lg:pb-32"
        >
          <GlassCard className="relative overflow-hidden rounded-[36px] p-8 sm:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(103,232,249,0.12),transparent_25%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent_45%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.36em] text-cyan-300/80">
                  Ready To Scale
                </p>
                <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.05em] text-white sm:text-5xl">
                  Ready to scale your growth with more precision?
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300/80">
                  Let&apos;s build a sharper strategic foundation, a cleaner
                  growth engine, and a marketing system that can scale with your
                  business.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:hello@parbuestrategic.com"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_15px_50px_rgba(56,189,248,0.3)] transition hover:scale-[1.02]"
                >
                  hello@parbuestrategic.com
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Schedule a call
                </a>
              </div>
            </div>
          </GlassCard>
        </section>

        <footer className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 px-6 py-8 text-sm text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© 2026 Parbue Strategic. All rights reserved.</p>
          <p className="uppercase tracking-[0.3em] text-slate-600">
            Strategy. Performance. Scale.
          </p>
        </footer>
      </div>
    </div>
  );
}

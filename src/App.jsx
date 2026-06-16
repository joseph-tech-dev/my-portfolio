import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  Radar,
  Server,
  Lock,
  Activity,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Cpu,
  Globe,
  Database,
  Crosshair,
  Menu,
  X,
} from 'lucide-react';

import { PROFILE, PROJECTS } from './data';

const navigation = [
  'Mission',
  'Operations',
  'Systems',
  'Capabilities',
  'Contact',
];

const metrics = [
  { value: '24/7',   label: 'System Readiness' },
  { value: '99.99%', label: 'Infrastructure Stability' },
  { value: '1M+',    label: 'Concurrent Operations' },
  { value: '40ms',   label: 'Average Latency' },
];

const operations = [
  {
    icon: <Shield size={22} />,
    title: 'Cyber Defense Systems',
    description:
      'Designing secure backend infrastructures with hardened authentication, threat-aware architecture, and resilient deployment strategies.',
  },
  {
    icon: <Server size={22} />,
    title: 'Distributed Infrastructure',
    description:
      'Building scalable distributed systems engineered for operational resilience and high-concurrency environments.',
  },
  {
    icon: <Radar size={22} />,
    title: 'Observability & Monitoring',
    description:
      'Implementing telemetry, monitoring pipelines, infrastructure visibility, and operational intelligence systems.',
  },
];

const stack = [
  'Python', 'Django', 'FastAPI', 'PostgreSQL',
  'Docker', 'Linux', 'Redis', 'MinIO',
  'Claude AI', 'TensorFlow (Keras)', 'Scikit learn', 'Linux server administration',
];

const statusFeed = [
  'AUTHENTICATION_CLUSTER_SECURED',
  'NETWORK_OBSERVABILITY_ACTIVE',
  'DEPLOYMENT_PIPELINE_OPERATIONAL',
  'SECURITY_SCANS_RUNNING',
];

/* ─── Background ─────────────────────────────────────────── */
const TacticalGrid = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0a0d0c]">
    <div
      className="absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(125,140,120,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(125,140,120,0.15) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    />
    <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#556b2f]/10 blur-[160px]" />
    <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#3e4f2d]/10 blur-[160px]" />
  </div>
);

/* ─── Header ─────────────────────────────────────────────── */
const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#2f3a2c] bg-[#0d1110]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
        {/* Brand */}
        <div className="min-w-0">
          <h1 className="truncate text-base font-bold tracking-wide text-[#d6d2b4] sm:text-xl">
            {PROFILE.name}
          </h1>
          <p className="hidden font-mono text-[11px] uppercase tracking-[0.25em] text-[#7f8b74] sm:block">
            Infrastructure Operations Command
          </p>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium uppercase tracking-[0.15em] text-[#94a08f] transition hover:text-[#d6d2b4]"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-xl border border-[#4b5a45] bg-[#1a211d] px-4 py-2.5 text-sm font-semibold uppercase tracking-[0.1em] text-[#d6d2b4] transition hover:bg-[#222b25] lg:inline-block"
        >
          Establish Contact
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-[#394238] bg-[#151a17] p-2 text-[#94a08f] transition hover:text-[#d6d2b4] lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-[#2f3a2c] bg-[#0d1110] lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navigation.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium uppercase tracking-[0.15em] text-[#94a08f] transition hover:bg-[#151a17] hover:text-[#d6d2b4]"
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl border border-[#4b5a45] bg-[#1a211d] px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.1em] text-[#d6d2b4]"
              >
                Establish Contact
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

/* ─── Section heading ────────────────────────────────────── */
const SectionHeading = ({ badge, title, description }) => (
  <div className="mb-12 max-w-3xl md:mb-16">
    <span className="mb-4 inline-flex rounded-full border border-[#394238] bg-[#151a17] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.25em] text-[#8f9b86] md:mb-5">
      {badge}
    </span>
    <h2 className="mb-4 text-3xl font-black uppercase tracking-tight text-[#d6d2b4] sm:text-4xl md:mb-6 md:text-5xl">
      {title}
    </h2>
    <p className="text-base leading-relaxed text-[#8e9689] sm:text-lg">
      {description}
    </p>
  </div>
);

/* ─── Metric card ────────────────────────────────────────── */
const MetricCard = ({ value, label }) => (
  <div className="rounded-2xl border border-[#2f3a2c] bg-[#111614] p-6 shadow-2xl sm:rounded-3xl sm:p-8">
    <h3 className="mb-2 text-3xl font-black tracking-tight text-[#d6d2b4] sm:mb-3 sm:text-5xl">
      {value}
    </h3>
    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#75806d] sm:text-xs">
      {label}
    </p>
  </div>
);

/* ─── Operation card ─────────────────────────────────────── */
const OperationCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="rounded-2xl border border-[#2f3a2c] bg-[#111614] p-6 transition hover:border-[#5e7152] sm:rounded-3xl sm:p-8"
  >
    <div className="mb-5 inline-flex rounded-xl border border-[#3a4536] bg-[#171d1a] p-3 text-[#c2c7a4] sm:mb-6 sm:rounded-2xl sm:p-4">
      {icon}
    </div>
    <h3 className="mb-3 text-xl font-bold uppercase tracking-wide text-[#d6d2b4] sm:mb-4 sm:text-2xl">
      {title}
    </h3>
    <p className="text-sm leading-relaxed text-[#8b9487] sm:text-base">
      {description}
    </p>
  </motion.div>
);

/* ─── Project card ───────────────────────────────────────── */
const ProjectCard = ({ project }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="group overflow-hidden rounded-[24px] border border-[#2f3a2c] bg-[#111614] transition hover:border-[#5f7555] sm:rounded-[32px]"
  >
    <div className="border-b border-[#2f3a2c] bg-[#171d1a] p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <span className="rounded-full border border-[#485543] bg-[#1c231f] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#aab39b] sm:px-4 sm:py-2">
          Tactical Infrastructure
        </span>
        <ArrowUpRight className="text-[#6e786a] transition group-hover:text-[#d6d2b4]" />
      </div>
    </div>

    <div className="p-6 sm:p-8">
      <h3 className="mb-3 text-2xl font-bold uppercase tracking-tight text-[#d6d2b4] sm:mb-4 sm:text-3xl">
        {project.title}
      </h3>
      <p className="mb-6 text-sm leading-relaxed text-[#899187] sm:mb-8 sm:text-base">
        {project.description}
      </p>

      <div className="mb-6 flex flex-wrap gap-2 sm:mb-8">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#394238] bg-[#171d1a] px-3 py-1 text-xs uppercase tracking-[0.1em] text-[#8e9888]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 border-t border-[#2f3a2c] pt-5 sm:pt-6">
        <div>
          <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#687265]">
            Security Status
          </p>
          <p className="text-xs text-[#d6d2b4] sm:text-sm">Hardened Infrastructure</p>
        </div>
        <div>
          <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#687265]">
            Deployment
          </p>
          <p className="text-xs text-[#d6d2b4] sm:text-sm">Production Ready</p>
        </div>
      </div>
    </div>
  </motion.div>
);

/* ─── Status panel ───────────────────────────────────────── */
const StatusPanel = () => (
  <div className="rounded-[24px] border border-[#2f3a2c] bg-[#111614] p-6 sm:rounded-[32px] sm:p-8">
    <div className="mb-6 flex items-center gap-3 sm:mb-8">
      <Activity className="text-[#a9b58e]" />
      <h3 className="text-xl font-bold uppercase tracking-wide text-[#d6d2b4] sm:text-2xl">
        Tactical Status Feed
      </h3>
    </div>
    <div className="space-y-3 sm:space-y-4">
      {statusFeed.map((item) => (
        <div
          key={item}
          className="flex items-center gap-3 rounded-xl border border-[#242c27] bg-[#161c18] px-4 py-3 sm:gap-4 sm:rounded-2xl sm:px-5 sm:py-4"
        >
          <div className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#8da56a]" />
          <span className="break-all font-mono text-xs tracking-wide text-[#9da696] sm:break-normal sm:text-sm">
            {item}
          </span>
        </div>
      ))}
    </div>
  </div>
);

/* ─── Main app ───────────────────────────────────────────── */
export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0a0d0c] text-[#d6d2b4]">
      <TacticalGrid />
      <Header />

      <main>
        {/* ── HERO ── */}
        <section id="mission" className="relative px-4 pb-20 pt-32 sm:px-6 sm:pb-32 sm:pt-40">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

              {/* Left copy */}
              <div>
                <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#394238] bg-[#151a17] px-4 py-2.5 sm:mb-8 sm:px-5 sm:py-3">
                  <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#9bb06f]" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#aeb69e] sm:text-xs">
                    SYSTEMS OPERATIONAL
                  </span>
                </div>

                <h1 className="mb-6 text-4xl font-black uppercase leading-none tracking-tight text-[#d6d2b4] sm:mb-8 sm:text-5xl md:text-6xl lg:text-7xl">
                  Engineering
                  <br />
                  Secure Digital
                  <br />
                  Infrastructure.
                </h1>

                <p className="mb-8 max-w-2xl text-base leading-relaxed text-[#8f9888] sm:mb-10 sm:text-xl">
                  Backend Engineer and Security-Focused Infrastructure Builder
                  specializing in resilient distributed systems, scalable APIs,
                  observability, and tactical cyber defense.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                  <a
                    href="#operations"
                    className="rounded-2xl border border-[#607256] bg-[#5a6a45] px-6 py-3.5 text-center font-semibold uppercase tracking-[0.1em] text-[#f5f3e6] transition hover:bg-[#6d8054] sm:px-8 sm:py-4"
                  >
                    View Operations
                  </a>
                  <a
                    href="#contact"
                    className="rounded-2xl border border-[#394238] bg-[#151a17] px-6 py-3.5 text-center font-semibold uppercase tracking-[0.1em] text-[#c5cab2] transition hover:bg-[#1c221e] sm:px-8 sm:py-4"
                  >
                    Contact Command
                  </a>
                </div>
              </div>

              {/* Right dashboard panel */}
              <div className="rounded-[28px] border border-[#2f3a2c] bg-[#111614] p-6 shadow-2xl sm:rounded-[36px] sm:p-8">
                <div className="mb-6 flex items-center justify-between sm:mb-8">
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-wide text-[#d6d2b4] sm:text-2xl">
                      Operations Dashboard
                    </h3>
                    <p className="text-xs text-[#7f897b] sm:text-sm">
                      Infrastructure Readiness Overview
                    </p>
                  </div>
                  <Crosshair className="text-[#8da56a]" />
                </div>

                <div className="space-y-3 sm:space-y-5">
                  {[
                    { title: 'API INFRASTRUCTURE',  status: 'ACTIVE'   },
                    { title: 'THREAT MONITORING',   status: 'ONLINE'   },
                    { title: 'DEPLOYMENT SYSTEMS',  status: 'READY'    },
                    { title: 'SECURITY OPERATIONS', status: 'SECURED'  },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center justify-between gap-3 rounded-xl border border-[#242c27] bg-[#171d1a] px-4 py-4 sm:rounded-2xl sm:px-5"
                    >
                      <div className="min-w-0">
                        <p className="mb-0.5 truncate font-mono text-[10px] uppercase tracking-[0.2em] text-[#a9b39d] sm:mb-1 sm:text-xs">
                          {item.title}
                        </p>
                        <p className="hidden text-sm text-[#75806f] sm:block">
                          Enterprise-grade operational systems
                        </p>
                      </div>
                      <div className="flex-shrink-0 rounded-full border border-[#526248] bg-[#20271f] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-[#b7c3a2] sm:px-4 sm:py-2 sm:text-xs">
                        {item.status}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech stack grid */}
                <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-8 sm:gap-4">
                  {stack.map((tech) => (
                    <div
                      key={tech}
                      className="rounded-xl border border-[#303a2d] bg-[#171d1a] px-3 py-3 text-center font-mono text-[10px] uppercase tracking-[0.1em] text-[#a3ab97] sm:rounded-2xl sm:px-4 sm:py-4 sm:text-sm"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── METRICS ── */}
        <section className="px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {metrics.map((metric) => (
                <MetricCard key={metric.label} {...metric} />
              ))}
            </div>
          </div>
        </section>

        {/* ── OPERATIONS ── */}
        <section id="operations" className="px-4 py-20 sm:px-6 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              badge="Core Operations"
              title="Mission-Critical Engineering Capabilities."
              description="Building resilient backend systems, tactical infrastructure, and secure digital environments engineered for high-performance operations."
            />
            <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
              {operations.map((op) => (
                <OperationCard key={op.title} {...op} />
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="systems" className="px-4 py-20 sm:px-6 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              badge="Infrastructure Projects"
              title="Operational Systems & Strategic Engineering."
              description="A portfolio of backend systems, cybersecurity tooling, observability platforms, and distributed infrastructure projects."
            />
            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {PROJECTS.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CAPABILITIES ── */}
        <section id="capabilities" className="px-4 py-20 sm:px-6 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 sm:gap-10 lg:grid-cols-2">
              <StatusPanel />

              <div className="rounded-[24px] border border-[#2f3a2c] bg-[#111614] p-8 sm:rounded-[32px] sm:p-10">
                <div className="mb-6 flex items-center gap-3 sm:mb-8">
                  <Lock className="text-[#a9b58e]" />
                  <h3 className="text-xl font-bold uppercase tracking-wide text-[#d6d2b4] sm:text-2xl">
                    Tactical Engineering Stack
                  </h3>
                </div>

                <div className="space-y-6 sm:space-y-8">
                  {[
                    { icon: <Cpu size={20} />,      label: 'Backend Systems',  value: 'Python, Go, Django, FastAPI' },
                    { icon: <Database size={20} />, label: 'Infrastructure',   value: 'Docker, Linux, Redis, PostgreSQL' },
                    { icon: <Globe size={20} />,    label: 'Operations',       value: 'Distributed APIs & Monitoring' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 border-b border-[#232b27] pb-5 sm:gap-5 sm:pb-6"
                    >
                      <div className="flex-shrink-0 rounded-xl border border-[#394238] bg-[#171d1a] p-3 text-[#b7c1a1]">
                        {item.icon}
                      </div>
                      <div>
                        <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#7f8a7a] sm:mb-2">
                          {item.label}
                        </p>
                        <p className="text-sm text-[#d2cfbb] sm:text-base">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="px-4 py-20 sm:px-6 sm:py-32">
          <div className="mx-auto max-w-5xl rounded-[28px] border border-[#2f3a2c] bg-[#111614] px-6 py-16 text-center shadow-2xl sm:rounded-[40px] sm:px-10 sm:py-20">
            <span className="mb-5 inline-flex rounded-full border border-[#44513f] bg-[#1a211d] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#aeb59c] sm:px-5 sm:text-xs">
              OPEN FOR OPERATIONS
            </span>

            <h2 className="mb-6 text-4xl font-black uppercase tracking-tight text-[#d6d2b4] sm:mb-8 sm:text-5xl md:text-6xl">
              Ready For
              <br />
              Mission Deployment.
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-[#8f9888] sm:mb-10 sm:text-lg">
              Available for backend engineering, infrastructure operations,
              cybersecurity initiatives, and scalable systems development.
            </p>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
              <a
                href={`mailto:${PROFILE.email}`}
                className="w-full rounded-2xl border border-[#647556] bg-[#5c6d48] px-8 py-4 font-semibold uppercase tracking-[0.1em] text-[#f4f2e7] transition hover:bg-[#71835b] sm:w-auto"
              >
                Initiate Contact
              </a>
              <a
                href={PROFILE.social.github}
                className="w-full rounded-2xl border border-[#394238] bg-[#171d1a] px-8 py-4 font-semibold uppercase tracking-[0.1em] text-[#c4cbb4] transition hover:bg-[#202620] sm:w-auto"
              >
                GitHub Intel
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#232b27] bg-[#0d1110] px-4 py-8 sm:px-6 sm:py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="mb-1.5 text-base font-bold uppercase tracking-wide text-[#d6d2b4] sm:mb-2 sm:text-lg">
              {PROFILE.name}
            </h3>
            <p className="text-sm text-[#7e887c]">
              Backend Engineering • Tactical Infrastructure • Cyber Defense
            </p>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={PROFILE.social.github}
              className="rounded-xl border border-[#313a2f] bg-[#151a17] p-2.5 text-[#a4ad9d] transition hover:bg-[#1d231f] sm:p-3"
            >
              <Github size={18} />
            </a>
            <a
              href={PROFILE.social.linkedin}
              className="rounded-xl border border-[#313a2f] bg-[#151a17] p-2.5 text-[#a4ad9d] transition hover:bg-[#1d231f] sm:p-3"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="rounded-xl border border-[#313a2f] bg-[#151a17] p-2.5 text-[#a4ad9d] transition hover:bg-[#1d231f] sm:p-3"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
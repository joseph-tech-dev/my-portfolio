import React from 'react';
import { motion } from 'framer-motion';
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
  {
    value: '24/7',
    label: 'System Readiness',
  },
  {
    value: '99.99%',
    label: 'Infrastructure Stability',
  },
  {
    value: '1M+',
    label: 'Concurrent Operations',
  },
  {
    value: '40ms',
    label: 'Average Latency',
  },
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
  'Python',
  'Django',
  'FastAPI',
  'PostgreSQL',
  'Docker',
  'Linux',
  'Redis',
  'MinIO',
  'Claude AI',
  'TensorFlow (Keras)',
  'Scikit learn',
  'Linux server administration'
];

const statusFeed = [
  'AUTHENTICATION_CLUSTER_SECURED',
  'NETWORK_OBSERVABILITY_ACTIVE',
  'DEPLOYMENT_PIPELINE_OPERATIONAL',
  'SECURITY_SCANS_RUNNING',
];

const Header = () => (
  <header className="fixed top-0 z-50 w-full border-b border-[#2f3a2c] bg-[#0d1110]/90 backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
      <div>
        <h1 className="text-xl font-bold tracking-wide text-[#d6d2b4]">
          {PROFILE.name}
        </h1>

        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#7f8b74]">
          Infrastructure Operations Command
        </p>
      </div>

      <nav className="hidden items-center gap-8 md:flex">
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

      <a
        href="#contact"
        className="rounded-xl border border-[#4b5a45] bg-[#1a211d] px-5 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-[#d6d2b4] transition hover:bg-[#222b25]"
      >
        Establish Contact
      </a>
    </div>
  </header>
);

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

const SectionHeading = ({ badge, title, description }) => (
  <div className="mb-16 max-w-3xl">
    <span className="mb-5 inline-flex rounded-full border border-[#394238] bg-[#151a17] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.25em] text-[#8f9b86]">
      {badge}
    </span>

    <h2 className="mb-6 text-4xl font-black uppercase tracking-tight text-[#d6d2b4] md:text-5xl">
      {title}
    </h2>

    <p className="text-lg leading-relaxed text-[#8e9689]">
      {description}
    </p>
  </div>
);

const MetricCard = ({ value, label }) => (
  <div className="rounded-3xl border border-[#2f3a2c] bg-[#111614] p-8 shadow-2xl">
    <h3 className="mb-3 text-5xl font-black tracking-tight text-[#d6d2b4]">
      {value}
    </h3>

    <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#75806d]">
      {label}
    </p>
  </div>
);

const OperationCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="rounded-3xl border border-[#2f3a2c] bg-[#111614] p-8 transition hover:border-[#5e7152]"
  >
    <div className="mb-6 inline-flex rounded-2xl border border-[#3a4536] bg-[#171d1a] p-4 text-[#c2c7a4]">
      {icon}
    </div>

    <h3 className="mb-4 text-2xl font-bold uppercase tracking-wide text-[#d6d2b4]">
      {title}
    </h3>

    <p className="leading-relaxed text-[#8b9487]">
      {description}
    </p>
  </motion.div>
);

const ProjectCard = ({ project }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="group overflow-hidden rounded-[32px] border border-[#2f3a2c] bg-[#111614] transition hover:border-[#5f7555]"
  >
    <div className="border-b border-[#2f3a2c] bg-[#171d1a] p-6">
      <div className="flex items-center justify-between">
        <span className="rounded-full border border-[#485543] bg-[#1c231f] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#aab39b]">
          Tactical Infrastructure
        </span>

        <ArrowUpRight className="text-[#6e786a] transition group-hover:text-[#d6d2b4]" />
      </div>
    </div>

    <div className="p-8">
      <h3 className="mb-4 text-3xl font-bold uppercase tracking-tight text-[#d6d2b4]">
        {project.title}
      </h3>

      <p className="mb-8 leading-relaxed text-[#899187]">
        {project.description}
      </p>

      <div className="mb-8 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#394238] bg-[#171d1a] px-3 py-1 text-xs uppercase tracking-[0.1em] text-[#8e9888]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 border-t border-[#2f3a2c] pt-6">
        <div>
          <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#687265]">
            Security Status
          </p>

          <p className="text-sm text-[#d6d2b4]">
            Hardened Infrastructure
          </p>
        </div>

        <div>
          <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#687265]">
            Deployment
          </p>

          <p className="text-sm text-[#d6d2b4]">
            Production Ready
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const StatusPanel = () => (
  <div className="rounded-[32px] border border-[#2f3a2c] bg-[#111614] p-8">
    <div className="mb-8 flex items-center gap-3">
      <Activity className="text-[#a9b58e]" />

      <h3 className="text-2xl font-bold uppercase tracking-wide text-[#d6d2b4]">
        Tactical Status Feed
      </h3>
    </div>

    <div className="space-y-4">
      {statusFeed.map((item) => (
        <div
          key={item}
          className="flex items-center gap-4 rounded-2xl border border-[#242c27] bg-[#161c18] px-5 py-4"
        >
          <div className="h-2.5 w-2.5 rounded-full bg-[#8da56a]" />

          <span className="font-mono text-sm tracking-wide text-[#9da696]">
            {item}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0a0d0c] text-[#d6d2b4]">
      <TacticalGrid />
      <Header />

      <main>
        {/* HERO */}
        <section
          id="mission"
          className="relative px-6 pb-32 pt-40"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-20 lg:grid-cols-2">
              <div>
                <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#394238] bg-[#151a17] px-5 py-3">
                  <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#9bb06f]" />

                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#aeb69e]">
                    SYSTEMS OPERATIONAL
                  </span>
                </div>

                <h1 className="mb-8 text-6xl font-black uppercase leading-none tracking-tight text-[#d6d2b4] md:text-7xl">
                  Engineering
                  <br />
                  Secure Digital
                  <br />
                  Infrastructure.
                </h1>

                <p className="mb-10 max-w-2xl text-xl leading-relaxed text-[#8f9888]">
                  Backend Engineer and Security-Focused Infrastructure
                  Builder specializing in resilient distributed systems,
                  scalable APIs, observability, and tactical cyber defense.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="#operations"
                    className="rounded-2xl border border-[#607256] bg-[#5a6a45] px-8 py-4 font-semibold uppercase tracking-[0.1em] text-[#f5f3e6] transition hover:bg-[#6d8054]"
                  >
                    View Operations
                  </a>

                  <a
                    href="#contact"
                    className="rounded-2xl border border-[#394238] bg-[#151a17] px-8 py-4 font-semibold uppercase tracking-[0.1em] text-[#c5cab2] transition hover:bg-[#1c221e]"
                  >
                    Contact Command
                  </a>
                </div>
              </div>

              {/* RIGHT PANEL */}
              <div className="rounded-[36px] border border-[#2f3a2c] bg-[#111614] p-8 shadow-2xl">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold uppercase tracking-wide text-[#d6d2b4]">
                      Operations Dashboard
                    </h3>

                    <p className="text-sm text-[#7f897b]">
                      Infrastructure Readiness Overview
                    </p>
                  </div>

                  <Crosshair className="text-[#8da56a]" />
                </div>

                <div className="space-y-5">
                  {[
                    {
                      title: 'API INFRASTRUCTURE',
                      status: 'ACTIVE',
                    },
                    {
                      title: 'THREAT MONITORING',
                      status: 'ONLINE',
                    },
                    {
                      title: 'DEPLOYMENT SYSTEMS',
                      status: 'READY',
                    },
                    {
                      title: 'SECURITY OPERATIONS',
                      status: 'SECURED',
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center justify-between rounded-2xl border border-[#242c27] bg-[#171d1a] px-5 py-5"
                    >
                      <div>
                        <p className="mb-1 font-mono text-xs uppercase tracking-[0.2em] text-[#a9b39d]">
                          {item.title}
                        </p>

                        <p className="text-sm text-[#75806f]">
                          Enterprise-grade operational systems
                        </p>
                      </div>

                      <div className="rounded-full border border-[#526248] bg-[#20271f] px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] text-[#b7c3a2]">
                        {item.status}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {stack.map((tech) => (
                    <div
                      key={tech}
                      className="rounded-2xl border border-[#303a2d] bg-[#171d1a] px-4 py-4 text-center font-mono text-sm uppercase tracking-[0.1em] text-[#a3ab97]"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* METRICS */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-4">
              {metrics.map((metric) => (
                <MetricCard
                  key={metric.label}
                  value={metric.value}
                  label={metric.label}
                />
              ))}
            </div>
          </div>
        </section>

        {/* OPERATIONS */}
        <section
          id="operations"
          className="px-6 py-32"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              badge="Core Operations"
              title="Mission-Critical Engineering Capabilities."
              description="Building resilient backend systems, tactical infrastructure, and secure digital environments engineered for high-performance operations."
            />

            <div className="grid gap-8 md:grid-cols-3">
              {operations.map((operation) => (
                <OperationCard
                  key={operation.title}
                  {...operation}
                />
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="systems"
          className="px-6 py-32"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              badge="Infrastructure Projects"
              title="Operational Systems & Strategic Engineering."
              description="A portfolio of backend systems, cybersecurity tooling, observability platforms, and distributed infrastructure projects."
            />

            <div className="grid gap-8 lg:grid-cols-2">
              {PROJECTS.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                />
              ))}
            </div>
          </div>
        </section>

        {/* STATUS */}
        <section
          id="capabilities"
          className="px-6 py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <StatusPanel />

            <div className="rounded-[32px] border border-[#2f3a2c] bg-[#111614] p-10">
              <div className="mb-8 flex items-center gap-3">
                <Lock className="text-[#a9b58e]" />

                <h3 className="text-2xl font-bold uppercase tracking-wide text-[#d6d2b4]">
                  Tactical Engineering Stack
                </h3>
              </div>

              <div className="space-y-8">
                {[
                  {
                    icon: <Cpu size={20} />,
                    label: 'Backend Systems',
                    value: 'Python, Go, Django, FastAPI',
                  },
                  {
                    icon: <Database size={20} />,
                    label: 'Infrastructure',
                    value: 'Docker, Linux, Redis, PostgreSQL',
                  },
                  {
                    icon: <Globe size={20} />,
                    label: 'Operations',
                    value: 'Distributed APIs & Monitoring',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-5 border-b border-[#232b27] pb-6"
                  >
                    <div className="rounded-xl border border-[#394238] bg-[#171d1a] p-3 text-[#b7c1a1]">
                      {item.icon}
                    </div>

                    <div>
                      <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-[#7f8a7a]">
                        {item.label}
                      </p>

                      <p className="text-[#d2cfbb]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="px-6 py-32"
        >
          <div className="mx-auto max-w-5xl rounded-[40px] border border-[#2f3a2c] bg-[#111614] px-10 py-20 text-center shadow-2xl">
            <span className="mb-5 inline-flex rounded-full border border-[#44513f] bg-[#1a211d] px-5 py-2 font-mono text-xs uppercase tracking-[0.2em] text-[#aeb59c]">
              OPEN FOR OPERATIONS
            </span>

            <h2 className="mb-8 text-5xl font-black uppercase tracking-tight text-[#d6d2b4] md:text-6xl">
              Ready For
              <br />
              Mission Deployment.
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[#8f9888]">
              Available for backend engineering, infrastructure
              operations, cybersecurity initiatives, and scalable
              systems development.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${PROFILE.email}`}
                className="rounded-2xl border border-[#647556] bg-[#5c6d48] px-8 py-4 font-semibold uppercase tracking-[0.1em] text-[#f4f2e7] transition hover:bg-[#71835b]"
              >
                Initiate Contact
              </a>

              <a
                href={PROFILE.social.github}
                className="rounded-2xl border border-[#394238] bg-[#171d1a] px-8 py-4 font-semibold uppercase tracking-[0.1em] text-[#c4cbb4] transition hover:bg-[#202620]"
              >
                GitHub Intel
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#232b27] bg-[#0d1110] px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="mb-2 text-lg font-bold uppercase tracking-wide text-[#d6d2b4]">
              {PROFILE.name}
            </h3>

            <p className="text-[#7e887c]">
              Backend Engineering • Tactical Infrastructure • Cyber Defense
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PROFILE.social.github}
              className="rounded-xl border border-[#313a2f] bg-[#151a17] p-3 text-[#a4ad9d] transition hover:bg-[#1d231f]"
            >
              <Github size={18} />
            </a>

            <a
              href={PROFILE.social.linkedin}
              className="rounded-xl border border-[#313a2f] bg-[#151a17] p-3 text-[#a4ad9d] transition hover:bg-[#1d231f]"
            >
              <Linkedin size={18} />
            </a>

            <a
              href={`mailto:${PROFILE.email}`}
              className="rounded-xl border border-[#313a2f] bg-[#151a17] p-3 text-[#a4ad9d] transition hover:bg-[#1d231f]"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Check,
  CheckCircle2,
  Code2,
  Database,
  Layers3,
  Mail,
  MapPin,
  MessageSquareText,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Store,
  Workflow,
} from "lucide-react";
import Image from "next/image";
import { ContactForm } from "./components/contact-form";
import { FaqItem } from "./components/faq-item";
import { GithubIcon } from "./components/github-icon";
import { FeatureCard } from "./components/feature-card";
import { PortfolioCard } from "./components/portfolio-card";
import { SectionHeading } from "./components/section-heading";
import { WhatsAppIcon } from "./components/whatsapp-icon";

const githubHref = "https://github.com/soomto12";

const whatsappNumber = "2348105715588";
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Hi SomtoScript, I'd like to talk about a project."
)}`;

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

const technologies = [
  "Next.js",
  "React",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "Redis",
  "Tailwind CSS",
  "Docker",
];

const services = [
  {
    icon: MonitorSmartphone,
    title: "Custom Business Websites",
    description: "High-converting marketing sites and business web experiences built to grow your brand.",
    points: ["Responsive on every device", "SEO and performance tuned"],
  },
  {
    icon: Layers3,
    title: "SaaS Development",
    description: "Scalable product platforms with modern architecture, auth, billing, and dashboards.",
    points: ["Stripe subscriptions & billing", "Role-based auth and admin views"],
  },
  {
    icon: Store,
    title: "E-commerce Development",
    description: "Fast, polished storefronts with streamlined checkout and inventory workflows.",
    points: ["Checkout built to convert", "Inventory and order management"],
  },
  {
    icon: Bot,
    title: "AI Integration",
    description: "Intelligent product features, copilots, and automation powered by current AI models.",
    points: ["Chat and copilot interfaces", "Document and data extraction"],
  },
  {
    icon: Workflow,
    title: "API Development",
    description: "Reliable APIs and third-party integrations that connect your tools and speed up operations.",
    points: ["REST APIs with typed contracts", "Third-party service integration"],
  },
  {
    icon: ShieldCheck,
    title: "Website Maintenance",
    description: "Monitoring, updates, and support that keep your product reliable and secure.",
    points: ["Dependency and security updates", "Uptime and performance monitoring"],
  },
];

const benefits = [
  {
    title: "Typed end to end",
    description: "TypeScript across the stack, so breaking changes surface at build time — not in front of your users.",
  },
  {
    title: "Built to be handed over",
    description: "Conventional structure and readable code, so the next developer can pick it up without a rewrite.",
  },
  {
    title: "Fast by default",
    description: "Server rendering, image optimization, and tight bundles — pages that load quickly on mobile data.",
  },
  {
    title: "Designed, not decorated",
    description: "Layout, type, and spacing decided deliberately, so the product feels considered rather than assembled.",
  },
];

const portfolioItems = [
  {
    title: "Weekly Fit",
    description:
      "A personalized weekly fitness planner powered by AI. Users get a custom workout and meal plan for every day of the week, log daily progress, and track the week at a glance — with JWT auth and Stripe-powered subscriptions.",
    tags: ["React + TypeScript", "Node.js + Express", "PostgreSQL", "Stripe", "AI"],
    href: "https://weeklyt-fit-frontend-bg56.vercel.app",
    image: "/project-weekly-fit.png",
    status: "Complete",
  },
  {
    title: "CookMate",
    description:
      "A REST API that turns whatever ingredients you have on hand into a full AI-generated recipe — complete with cook time, difficulty, and an auto-generated shopping list for anything you're missing. JWT auth and recipe history included, with hands-free voice guidance for cooking steps on the way; the frontend shown is the in-progress UI.",
    tags: ["Node.js + Express", "PostgreSQL + Prisma", "AI", "TypeScript"],
    href: "https://github.com/soomto12/CookMate",
    image: "/project-cookmate.png",
    status: "In Progress",
  },
];

const commitments = [
  {
    icon: ShieldCheck,
    title: "Fixed scope, fixed price",
    description:
      "You approve the spec and the quote before I write a line of code. No surprise invoices halfway through the build.",
  },
  {
    icon: Rocket,
    title: "Weekly demos, not status updates",
    description:
      "Every week you get a live staging link and software you can click through — not a percentage in a spreadsheet.",
  },
  {
    icon: Code2,
    title: "You own everything from day one",
    description:
      "The repo, the code, and every service account live in your name. No lock-in, no code held hostage.",
  },
  {
    icon: MessageSquareText,
    title: "A reply within one business day",
    description:
      "You talk directly to the person writing the code. No account managers, no ticket queues, no handoffs.",
  },
  {
    icon: CheckCircle2,
    title: "30 days of post-launch fixes",
    description:
      "Anything that breaks in the first month after launch gets fixed at no extra cost. Bugs are my problem, not yours.",
  },
  {
    icon: Database,
    title: "A handover you can actually use",
    description:
      "Documented setup, deploy steps, and a walkthrough call so your next developer doesn't start from zero.",
  },
];

const processSteps = [
  {
    title: "Discovery",
    description: "We map your goals, users, and constraints so scope is agreed before any code is written.",
  },
  {
    title: "Design",
    description: "Wireframes and a UI direction you sign off on, so there are no surprises later.",
  },
  {
    title: "Development",
    description: "Weekly builds pushed to a live staging link you can click through and comment on.",
  },
  {
    title: "Testing",
    description: "Cross-device and cross-browser checks, plus performance and accessibility passes.",
  },
  {
    title: "Launch",
    description: "Deploy, monitor, hand over the documentation — then 30 days of fixes on me.",
  },
];

const faqs = [
  {
    question: "How quickly can you start a project?",
    answer: "Most engagements begin within one week, depending on scope and availability.",
  },
  {
    question: "Do you work with startups and small businesses?",
    answer: "Yes. I partner with founders, teams, and operators who need reliable product delivery.",
  },
  {
    question: "Can you help with existing products?",
    answer: "Absolutely. I can improve, modernize, and extend existing web applications and internal tools.",
  },
  {
    question: "What is your typical engagement model?",
    answer: "I offer project-based builds as well as ongoing support retainers for maintenance and growth.",
  },
];

export default function Home() {
  return (
    <main className="bg-white">
      {/* ---------- Header ---------- */}
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5">
          <a href="#top" className="flex items-center gap-2.5">
            <Image
              src="/logo-icon.png"
              alt="SomtoScript Technologies logo"
              width={582}
              height={388}
              priority
              className="h-8 w-auto rounded-md object-contain"
            />
            <span className="text-base font-bold tracking-tight text-slate-900">SomtoScript</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <a
              href={githubHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View my GitHub profile"
              className="hidden h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 sm:flex"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="mr-1 hidden h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-mint-600 sm:flex"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* ---------- Hero ---------- */}
      <section
        id="top"
        className="relative overflow-hidden border-b border-slate-100 bg-[radial-gradient(60rem_30rem_at_10%_-10%,var(--color-brand-50),transparent)]"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-mint-500" />
              Available for new projects
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]">
              Websites and web apps that help your business{" "}
              <span className="text-brand-600">grow</span>.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              From polished landing pages to sophisticated SaaS platforms, I build custom digital
              products that feel premium, perform beautifully, and scale with your ambition.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-mint-400 px-6 py-3 text-sm font-semibold text-navy-950 transition hover:bg-mint-300"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                See my work
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-mint-500" /> Custom-built solutions
              </span>
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-mint-500" /> SEO &amp; performance focused
              </span>
            </div>
          </motion.div>

          {/* Browser mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10"
          >
            <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-mint-400" />
              <div className="ml-3 h-5 flex-1 rounded bg-white ring-1 ring-slate-200" />
            </div>

            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
                What I build
              </p>
              <div className="mt-4 grid gap-2.5">
                {[
                  "Custom web experiences",
                  "SaaS product builds",
                  "AI automation tools",
                  "Conversion-led design",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50/70 px-4 py-2.5 text-sm text-slate-700"
                  >
                    <Check className="h-4 w-4 shrink-0 text-brand-600" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-lg border border-slate-200 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Average delivery</span>
                  <span className="font-semibold text-slate-900">2–4 weeks</span>
                </div>
                <div className="mt-3 h-1.5 rounded-full bg-slate-100">
                  <div className="h-1.5 w-4/5 rounded-full bg-gradient-to-r from-brand-500 to-brand-600" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------- Tech stack (dark) ---------- */}
      <section className="bg-navy-900 py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-400">
            The infrastructure
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-2xl font-bold leading-snug text-white sm:text-3xl">
            Every project is crafted with reliable technologies chosen for speed, scalability, and
            developer confidence.
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-brand-400/40 hover:bg-white/[0.07]"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <SectionHeading
          eyebrow="Services"
          title="Solutions designed for growth"
          description="Whether you need a launch-ready site or a complex production platform, I deliver with clarity and precision."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <FeatureCard {...service} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- How it's built (dark) ---------- */}
      <section className="bg-navy-900 py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            tone="dark"
            eyebrow="How it's built"
            title="The engineering standards behind every project"
            description="The parts of a build you don't see on launch day are the parts that decide what it costs you a year later."
          />
          <div className="grid gap-3">
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35 }}
                className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/15 text-brand-400">
                  <Code2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{benefit.title}</h3>
                  <p className="mt-1.5 text-sm leading-7 text-slate-400">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Portfolio ---------- */}
      <section id="portfolio" className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <SectionHeading
          eyebrow="Portfolio"
          title="Recent work that balances impact and polish"
          description="A look at the kind of product I build for founders and teams."
        />
        <div className={`mt-12 grid gap-6 ${portfolioItems.length > 1 ? "md:grid-cols-2" : ""}`}>
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.title} {...item} featured={portfolioItems.length === 1} />
          ))}
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
          <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
            <p className="text-sm font-semibold text-slate-900">Weekly Fit — product walkthrough</p>
            <p className="mt-1 text-sm text-slate-600">
              A quick look at the AI plan generator, daily logs, and subscription flow in action.
            </p>
          </div>
          <video
            controls
            preload="none"
            poster="/project-weekly-fit.png"
            className="aspect-video w-full bg-black"
          >
            <source src="/weekly-fit-demo.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* ---------- About ---------- */}
      <section id="about" className="mx-auto max-w-6xl px-6 pb-20 lg:pb-28">
        <div className="grid items-center gap-10 lg:grid-cols-[380px_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="relative mx-auto w-full max-w-[320px] lg:max-w-none"
          >
            <div className="absolute -bottom-4 -left-4 h-full w-full rounded-2xl bg-brand-50" />
            <Image
              src="/somto.jpg"
              alt="Somtochukwu Edoka, founder of SomtoScript"
              width={800}
              height={1000}
              sizes="(min-width: 1024px) 380px, 320px"
              className="relative rounded-2xl border border-slate-200 object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">
              About
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Hi, I&apos;m Somtochukwu.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">
              <p>
                I&apos;m a self-taught full-stack developer based in Lagos, Nigeria. I started
                building for the web two years ago and haven&apos;t stopped since.
              </p>
              <p>
                I work mainly in React, Next.js, Node.js and PostgreSQL — building products with real
                authentication, real payments and real data behind them, not demos. Weekly Fit above
                is one of them.
              </p>
              <p>
                I take on a small number of projects at a time, so the one I&apos;m working on gets
                proper attention. If that sounds like what you need, the form below reaches me
                directly.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-600" /> Lagos, Nigeria
              </span>
              <span className="inline-flex items-center gap-2">
                <Code2 className="h-4 w-4 text-brand-600" /> Building since 2024
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-mint-500" /> Available for new projects
              </span>
            </div>

            <a
              href={githubHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              <GithubIcon className="h-4 w-4" />
              See my code on GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* ---------- Commitments ---------- */}
      <section className="border-y border-slate-100 bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            align="center"
            eyebrow="How I work"
            title="Commitments that go in the contract"
            description="Hiring a developer you haven't worked with before is a leap. These are the terms I hold myself to on every project — written into the agreement, not just onto a website."
          />
          <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {commitments.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35 }}
                className="flex gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-brand-600 ring-1 ring-slate-200">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section id="process" className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <SectionHeading
          align="center"
          eyebrow="Process"
          title="A proven path from idea to launch"
          description="The process stays focused, transparent, and tailored to your goals."
        />
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {processSteps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                {index + 1}
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section id="faq" className="border-t border-slate-100 bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            align="center"
            eyebrow="FAQ"
            title="Common questions"
            description="A few things clients ask before hiring."
          />
          <div className="mt-12 space-y-3">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="grid gap-12 rounded-3xl bg-navy-900 p-8 shadow-2xl shadow-slate-900/20 sm:p-12 lg:grid-cols-[1fr_1.05fr] lg:p-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-mint-400">
              Let&apos;s build something exceptional
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              Ready to turn your idea into a polished, high-performing digital product?
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Fill out the form and I&apos;ll get back to you within one business day, or reach out
              directly below.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href="mailto:edokasomtochukwu@gmail.com"
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200 transition hover:border-brand-400/40 hover:bg-white/[0.07]"
              >
                <Mail className="h-4 w-4 shrink-0 text-brand-400" />
                edokasomtochukwu@gmail.com
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200 transition hover:border-mint-400/40 hover:bg-white/[0.07]"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0 text-mint-400" />
                +234 810 571 5588
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-navy-950/60 p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ---------- Floating WhatsApp ---------- */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-mint-500 text-white shadow-xl shadow-mint-900/20 transition hover:bg-mint-400"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>

      {/* ---------- Footer ---------- */}
      <footer className="bg-navy-950 py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2.5">
                <Image
                  src="/logo-icon.png"
                  alt=""
                  width={582}
                  height={388}
                  className="h-8 w-auto rounded-md object-contain"
                />
                <span className="text-base font-bold tracking-tight text-white">SomtoScript</span>
              </div>
              <p className="mt-4 max-w-xs text-sm leading-7 text-slate-400">
                Full-stack web development for founders and small teams who need reliable delivery.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">Explore</p>
              <ul className="mt-4 space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-slate-400 transition hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">Contact</p>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="mailto:edokasomtochukwu@gmail.com"
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={githubHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
                  >
                    <GithubIcon className="h-4 w-4" />
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6">
            <p className="text-sm text-slate-500">
              © 2026 SomtoScript. Full-stack web development.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

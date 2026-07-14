"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  Database,
  Layers3,
  MessageSquareText,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Store,
  Workflow,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaqItem } from "./components/faq-item";
import { FeatureCard } from "./components/feature-card";
import { PortfolioCard } from "./components/portfolio-card";
import { SectionHeading } from "./components/section-heading";
import { WhatsAppIcon } from "./components/whatsapp-icon";

const whatsappNumber = "2348105715588";
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Hi SomtoScript, I'd like to talk about a project."
)}`;

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
  },
  {
    icon: Layers3,
    title: "SaaS Development",
    description: "Scalable product platforms with modern architecture, auth, billing, analytics, and dashboards.",
  },
  {
    icon: Store,
    title: "E-commerce Development",
    description: "Fast, polished storefronts with streamlined checkout experiences and inventory workflows.",
  },
  {
    icon: Bot,
    title: "AI Integration",
    description: "Intelligent product features, copilots, and automation powered by the latest AI models.",
  },
  {
    icon: Workflow,
    title: "API Development",
    description: "Reliable APIs and third-party integrations that connect your tools and accelerate operations.",
  },
  {
    icon: ShieldCheck,
    title: "Website Maintenance",
    description: "Performance monitoring, updates, and support to keep your product reliable and secure.",
  },
];

const benefits = [
  "Clean, maintainable code",
  "Fast delivery without sacrificing quality",
  "Responsive communication every step of the way",
  "Scalable architecture for future growth",
  "Modern UI/UX that feels premium",
];

const portfolioItems = [
  {
    title: "Weekly Fit",
    description:
      "A personalized weekly fitness planner powered by AI. Users get a custom workout and meal plan for every day of the week, log daily progress, and track the week at a glance — with JWT auth and Stripe-powered subscriptions.",
    tags: ["React + TypeScript", "Node.js + Express", "PostgreSQL", "Stripe", "AI"],
    href: "https://weeklyt-fit-frontend-bg56.vercel.app",
    image: "/project-weekly-fit.png",
  },
  {
    title: "CarePulse",
    description:
      "A healthcare appointment booking platform that lets patients register and schedule appointments in a few simple steps, with a clean intake flow for contact details and visit information.",
    tags: ["Next.js", "Appwrite", "TypeScript"],
    href: "https://healthcare-5geo.vercel.app/",
    image: "/project-carepulse.png",
  },
];

const testimonials = [
  {
    quote:
      "From the AI-generated workout plans to the Stripe subscription flow, everything just worked. The whole platform came together faster than I expected, and the code quality made it easy to keep iterating after launch.",
    name: "Efe Okafor",
    role: "Founder, Weekly Fit",
  },
  {
    quote:
      "Our patients needed a booking flow that felt effortless, and that's exactly what we got. The intake process is smooth, the build is solid, and support after launch has been quick and reliable.",
    name: "Dr. Amara Nwosu",
    role: "Medical Director, CarePulse",
  },
];

const processSteps = [
  "Discovery",
  "Design",
  "Development",
  "Testing",
  "Launch",
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
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(6,182,212,0.2),_transparent_30%),linear-gradient(135deg,_#030712,_#09090b)] text-zinc-100">
      <section className="mx-auto flex max-w-7xl flex-col px-6 py-6 sm:px-8 lg:px-10 lg:py-8">
        <header className="rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-icon.png"
                alt="SomtoScript Technologies logo"
                width={582}
                height={388}
                priority
                className="h-10 w-auto object-contain"
              />
              <div>
                <p className="text-lg font-semibold tracking-tight text-white">SomtoScript</p>
                <p className="text-sm text-zinc-400">Full-stack web development</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 transition hover:bg-emerald-500/20 sm:inline-flex"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href="#contact"
                className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-500/20"
              >
                Book a call
              </a>
            </div>
          </div>
        </header>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-8 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:p-10 lg:p-14"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-300">
              <Sparkles className="h-4 w-4" />
              Premium web experiences for ambitious brands
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              I build fast, beautiful websites and web apps that help businesses grow.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              From polished landing pages to sophisticated SaaS platforms, I create custom digital products that feel premium, perform beautifully, and scale with your ambition.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                See my work
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-zinc-400">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-300" /> Custom-built solutions
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-300" /> SEO & performance focused
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl sm:p-8"
          >
            <div className="rounded-[1.5rem] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_45%),linear-gradient(135deg,_rgba(255,255,255,0.08),_rgba(255,255,255,0.02))] p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-cyan-500/15 p-3 text-cyan-300">
                  <Cpu className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Product Strategy</p>
                  <p className="text-sm text-zinc-400">From concept to launch</p>
                </div>
              </div>
              <div className="mt-6 grid gap-3">
                {[
                  "Custom web experiences",
                  "SaaS product builds",
                  "AI automation tools",
                  "Conversion-led design",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950/50 px-4 py-3 text-sm text-zinc-300">
                    <ChevronRight className="h-4 w-4 text-cyan-300" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950/60 p-4">
                <div className="flex items-center justify-between text-sm text-zinc-400">
                  <span>Average delivery</span>
                  <span className="font-semibold text-white">2–4 weeks</span>
                </div>
                <div className="mt-4 h-2 rounded-full bg-white/10">
                  <div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <SectionHeading
          eyebrow="Trusted technologies"
          title="Built with modern tooling that performs"
          description="Every project is crafted with reliable technologies chosen for speed, scalability, and developer confidence."
          align="center"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((tech) => (
            <div key={tech} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center text-sm font-medium text-zinc-300 backdrop-blur-xl">
              {tech}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <SectionHeading
          eyebrow="Services"
          title="Solutions designed for growth"
          description="Whether you need a launch-ready site or a complex production platform, I deliver with clarity and precision."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <FeatureCard {...service} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-zinc-950/70 p-8 shadow-2xl shadow-black/30 backdrop-blur-2xl lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <SectionHeading
              eyebrow="Why choose me"
              title="A calm, strategic partner for high-stakes launches"
              description="I combine product thinking, sharp execution, and dependable communication to make your project feel effortless."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                  <Code2 className="h-5 w-5" />
                </div>
                <p className="text-sm leading-7 text-zinc-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <SectionHeading
          eyebrow="Portfolio"
          title="Recent work that balances impact and polish"
          description="Here are a few examples of the kind of products I build for founders and teams."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by founders who value execution"
          description="Clients come back because the experience is clear, collaborative, and results-driven."
          align="center"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/20 backdrop-blur-xl">
              <p className="text-lg leading-8 text-zinc-300">“{item.quote}”</p>
              <div className="mt-6">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-sm text-zinc-400">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <SectionHeading
          eyebrow="Process"
          title="A proven path from idea to launch"
          description="The process stays focused, transparent, and tailored to your goals."
          align="center"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/15 text-sm font-semibold text-cyan-300">
                0{index + 1}
              </div>
              <h3 className="font-semibold text-white">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions clients ask before hiring"
          description="A few common questions to help you decide quickly."
        />
        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 pt-10 sm:px-8 lg:px-10 lg:pb-24">
        <div className="rounded-[2rem] border border-cyan-400/20 bg-[linear-gradient(135deg,_rgba(34,211,238,0.14),_rgba(255,255,255,0.05))] p-8 shadow-2xl shadow-cyan-950/20 backdrop-blur-2xl sm:p-10 lg:p-14">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Let’s build something exceptional</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ready to turn your idea into a polished, high-performing digital product?
            </h2>
            <p className="mt-4 text-lg leading-8 text-zinc-300">
              Schedule a free consultation and I’ll help you shape the right approach for your product, launch, or growth plan.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:edokasomtochukwu@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300"
            >
              edokasomtochukwu@gmail.com
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-6 py-3 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/20"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-950/40 transition hover:bg-emerald-400"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>

      <footer className="border-t border-white/10 bg-zinc-950/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-zinc-400 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <p className="font-semibold text-white">SomtoScript</p>
            <p className="mt-1">© 2026 SomtoScript. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="https://github.com/soomto12" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">GitHub</a>
            <a href="mailto:edokasomtochukwu@gmail.com" className="transition hover:text-white">edokasomtochukwu@gmail.com</a>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">WhatsApp: +234 810 571 5588</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

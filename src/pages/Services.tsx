import { motion } from "framer-motion";
import { Code, Palette, Globe, Layers, Monitor, Briefcase, Search, PenTool, Rocket, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Full-stack websites built with modern technologies, optimized for performance and scalability.",
  },
  {
    icon: Code,
    title: "Frontend Development",
    desc: "Pixel-perfect, responsive user interfaces using React, TypeScript, and Tailwind CSS.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Intuitive, beautiful design systems that enhance user engagement and satisfaction.",
  },
  {
    icon: Layers,
    title: "Landing Page Development",
    desc: "High-converting landing pages designed to capture leads and drive business growth.",
  },
  {
    icon: Briefcase,
    title: "Business Website Creation",
    desc: "Professional websites that establish credibility and help businesses grow online.",
  },
  {
    icon: Monitor,
    title: "Responsive Design",
    desc: "Seamless experiences across all devices — desktop, tablet, and mobile.",
  },
];

const processSteps = [
  {
    icon: Search,
    title: "Discovery & Strategy",
    desc: "We study your business, audience, and goals to define the right website structure and conversion path.",
  },
  {
    icon: PenTool,
    title: "Design & Prototyping",
    desc: "We craft clean, modern layouts with clear hierarchy so your brand message is strong and easy to understand.",
  },
  {
    icon: Code,
    title: "Development & QA",
    desc: "Your website is developed with performance, responsiveness, and reliability in mind, then tested across devices.",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    desc: "After final review, we deploy your website and continue support with maintenance and improvements.",
  },
];

const deliverables = [
  "Fully responsive website",
  "SEO-ready page structure",
  "Fast-loading optimized assets",
  "Contact form and lead capture setup",
  "Basic analytics integration",
  "Deployment and launch support",
  "Handover and usage guidance",
  "1 year maintenance coverage",
];

const faqs = [
  {
    q: "How long does a project usually take?",
    a: "Most standard business websites are completed in about one week once content and requirements are finalized.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes. We can redesign outdated websites and rebuild them with modern UI, better performance, and improved UX.",
  },
  {
    q: "Do you provide hosting and domain support?",
    a: "Yes. We can guide you through domain and hosting setup, or manage deployment on your preferred platform.",
  },
  {
    q: "Will my site work well on mobile devices?",
    a: "Absolutely. Every project is built mobile-first and tested to ensure smooth behavior across screen sizes.",
  },
];

const Services = () => {
  return (
    <main className="pt-24 md:pt-32">
      <section className="pb-12 md:pb-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">What We Do</p>
            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight tracking-tight max-w-3xl">
              Services That
              <br />
              <span className="text-muted-foreground">Deliver Results</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.08}>
                <div className="group h-full p-8 rounded-2xl border border-border bg-card hover:bg-secondary hover:scale-[1.02] transition-all duration-500">
                  <s.icon className="text-muted-foreground mb-6 group-hover:text-foreground transition-colors duration-300" size={32} />
                  <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 border-t border-border">
        <div className="container">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Our Process</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-10 md:mb-14">How We Deliver</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 md:p-7">
                  <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-secondary p-3">
                    <step.icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Step {i + 1}</p>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
            <ScrollReveal className="lg:col-span-5">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">What You Get</p>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Service Deliverables</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Every service package includes practical outcomes you can use immediately to grow your online presence and generate leads.
                </p>
              </div>
            </ScrollReveal>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {deliverables.map((item, i) => (
                <ScrollReveal key={item} delay={i * 0.05}>
                  <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <p className="text-sm leading-relaxed">{item}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 border-t border-border">
        <div className="container">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">FAQs</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-10 md:mb-14">Common Questions</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {faqs.map((item, i) => (
              <ScrollReveal key={item.q} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 md:p-7">
                  <h3 className="text-lg font-semibold mb-3">{item.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;

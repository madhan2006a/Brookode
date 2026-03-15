import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Palette, Globe, Layers } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  { icon: Globe, title: "Website Development", desc: "Full-stack websites tailored to your brand." },
  { icon: Code, title: "Frontend Development", desc: "Pixel-perfect, performant user interfaces." },
  { icon: Palette, title: "UI/UX Design", desc: "Clean, intuitive design systems." },
  { icon: Layers, title: "Landing Pages", desc: "High-converting landing experiences." },
];

const projects = [
  { title: "E-Commerce Platform", category: "Web Development" },
  { title: "SaaS Dashboard", category: "UI/UX Design" },
  { title: "Portfolio Website", category: "Frontend" },
];

const Home = () => {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="container relative z-10 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6"
            >
              Digital Agency
            </motion.p>
            <h1 className="text-[2.6rem] sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1] md:leading-[0.95] tracking-tight mb-8">
              We Build Modern
              <br />
              <span className="text-muted-foreground">Websites &</span>
              <br />
              Digital Experiences
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-muted-foreground max-w-xl mx-auto mb-10"
            >
              Brookode crafts premium digital products that elevate brands and drive results.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-sm hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
              >
                Start a Project <ArrowRight size={16} />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-4 rounded-full font-medium text-sm hover:bg-secondary transition-colors duration-300 w-full sm:w-auto"
              >
                View Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-32">
        <div className="container">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">What We Do</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-10 md:mb-16">Our Services</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.1}>
                <div className="group p-8 rounded-2xl border border-border bg-card hover:bg-secondary transition-all duration-500 hover:scale-[1.02]">
                  <s.icon className="text-muted-foreground mb-6 group-hover:text-foreground transition-colors" size={28} />
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 md:py-32">
        <div className="container">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Selected Work</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-10 md:mb-16">Recent Projects</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.1}>
                <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary border border-border">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{p.category}</p>
                    <h3 className="text-xl font-semibold group-hover:text-primary-foreground transition-colors">{p.title}</h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="mt-12 text-center">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                View All Projects <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
};

export default Home;

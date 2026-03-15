import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

type CTAContent = {
  titleTop: string;
  titleAccent: string;
  description: string;
  primaryLabel: string;
  secondaryLabel: string;
};

const ctaByPath: Record<string, CTAContent> = {
  "/": {
    titleTop: "Ready to Build a Website",
    titleAccent: "That Stands Out?",
    description: "Let's turn your vision into a website that performs, scales, and lasts.",
    primaryLabel: "Start Your Project",
    secondaryLabel: "Explore Our Work",
  },
  "/about": {
    titleTop: "Learn More About",
    titleAccent: "How We Work",
    description: "Discover the process, values, and quality standards behind every Brookode project.",
    primaryLabel: "Discuss Your Idea",
    secondaryLabel: "See Our Services",
  },
  "/services": {
    titleTop: "Need The Right Service",
    titleAccent: "For Your Business?",
    description: "From design to development, choose solutions tailored to your goals and audience.",
    primaryLabel: "Get a Free Quote",
    secondaryLabel: "View Recent Work",
  },
  "/work": {
    titleTop: "Like What You See?",
    titleAccent: "Let's Build Yours",
    description: "We can create a polished, high-converting website tailored to your brand and niche.",
    primaryLabel: "Start a Project",
    secondaryLabel: "View Services",
  },
  "/contact": {
    titleTop: "Your Next Website",
    titleAccent: "Starts Here",
    description: "Share your requirements and get a fast, clear plan to bring your website to life.",
    primaryLabel: "Send Your Message",
    secondaryLabel: "Browse Portfolio",
  },
};

const CTASection = () => {
  const { pathname } = useLocation();
  const content = ctaByPath[pathname] ?? ctaByPath["/"];

  const secondaryLink = pathname === "/about"
    ? "/services"
    : pathname === "/services"
      ? "/work"
      : pathname === "/work"
        ? "/services"
        : pathname === "/contact"
          ? "/work"
          : "/work";

  return (
    <section className="py-16 md:py-32">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
              {content.titleTop}
              <br />
              <span className="text-muted-foreground">{content.titleAccent}</span>
            </h2>
            <p className="text-muted-foreground mb-10 text-lg">
              {content.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
              <Link
                to="/contact#contact-message-form"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-sm hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
              >
                {content.primaryLabel} <ArrowRight size={16} />
              </Link>
              <Link
                to={secondaryLink}
                className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-4 rounded-full font-medium text-sm hover:bg-secondary transition-colors duration-300 w-full sm:w-auto"
              >
                {content.secondaryLabel}
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;

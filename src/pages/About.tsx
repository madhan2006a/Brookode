import { motion } from "framer-motion";
import { Clock, DollarSign, Wrench, Shield } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const About = () => {
  return (
    <main className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="pb-16 md:pb-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">About Us</p>
            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight tracking-tight max-w-4xl">
              About Our
              <br />
              <span className="text-muted-foreground">Service</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Service Intro */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-4xl">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-6">
                At Brookode, we are constantly improving our services to deliver better quality websites for our clients. Our goal is to create modern, fast, and professional websites that help businesses grow online.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We focus on clean design, smooth user experience, and reliable development to ensure every project meets high standards.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Project Delivery */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container">
          <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-secondary">
                      <Clock className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold">Project Delivery</h2>
                </div>
              </div>
              <div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Every project is carefully planned and developed with attention to detail. Once the requirements are finalized, the website will be completed within one week.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We ensure that the final product is professional, responsive, and ready for real business use.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container">
          <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-secondary">
                      <DollarSign className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold">Pricing</h2>
                </div>
              </div>
              <div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our pricing is affordable and flexible, designed to support:
                </p>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {["Small businesses", "Startups", "Growing companies", "Established businesses"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The cost is not fixed, and it is negotiable based on project requirements. We also provide special discounts for clients whenever possible.
                </p>
                <p className="text-foreground font-medium">
                  Our aim is to make professional websites accessible to businesses of all sizes.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Free Maintenance */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container">
          <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-secondary">
                      <Shield className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold">Free Maintenance</h2>
                </div>
                <div className="mt-4 p-6 rounded-2xl bg-primary text-primary-foreground">
                  <p className="text-2xl font-bold mb-1">1 Year Free</p>
                  <p className="text-sm opacity-90">Website Maintenance Included</p>
                </div>
              </div>
              <div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  All project clients will receive 1 Year Free Website Maintenance. This includes:
                </p>
                <ul className="space-y-3">
                  {[
                    { icon: Wrench, text: "Minor updates" },
                    { icon: Shield, text: "Bug fixes" },
                    { icon: Wrench, text: "Small improvements" },
                    { icon: Shield, text: "Basic technical support" },
                  ].map((item) => (
                    <li key={item.text} className="flex items-center gap-3 p-3 rounded-xl bg-secondary">
                      <item.icon className="w-5 h-5 text-muted-foreground" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-6 leading-relaxed">
                  This ensures your website continues to run smoothly after launch.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About the Founder */}
      <section className="py-16 md:py-24">
        <div className="container">
          <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="p-10 rounded-2xl border border-border bg-card">
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Founder</p>
                <h3 className="text-3xl font-bold mb-2">Madhan</h3>
                <p className="text-sm text-muted-foreground uppercase tracking-widest mb-6">
                  Web Developer & Freelancer
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Brookode is founded and managed by Madhan, a passionate web developer and freelancer. As a student and independent developer, Madhan focuses on building high-quality websites while providing flexible and client-friendly services.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The mission of Brookode is to help businesses establish a strong digital presence with modern and reliable websites.
                </p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Our Mission</p>
                <h2 className="text-2xl md:text-4xl font-bold mb-6">About the Founder</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Driven by a passion for creating meaningful digital experiences, Madhan brings dedication and technical expertise to every project. The goal is simple: deliver exceptional websites that help businesses succeed online.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default About;
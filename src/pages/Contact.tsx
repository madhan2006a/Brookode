import { motion } from "framer-motion";
import { Mail, Phone, User, ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { toast } from "sonner";

const CONTACT_EMAIL = "madhanrajprivate2006@gmail.com";
const CONTACT_PHONE = "7695967955";
const CONTACT_PHONE_COUNTRY = "91";
const CONTACT_EMAIL_API = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We specialize in website development, frontend development, UI/UX design, landing page creation, and business website development. Whether you need a personal portfolio, a corporate site, or a modern web application, we deliver clean code and exceptional design.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Once requirements are finalized, most projects are completed within one week. The timeline may vary depending on the complexity and scope of the project.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes! All clients receive 1 year of free website maintenance, which includes minor updates, bug fixes, small improvements, and basic technical support.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We primarily use React, Tailwind CSS, and modern frontend technologies to build fast, responsive, and visually appealing websites.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing is flexible and negotiable based on project requirements. We offer affordable rates designed to support small businesses, startups, and growing companies. Special discounts are also available.",
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [sending, setSending] = useState(false);

  const buildContactMessage = () => {
    return [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      "",
      "Project Message:",
      form.message,
    ].join("\n");
  };

  const sendEmailAutomatically = async () => {
    const response = await fetch(CONTACT_EMAIL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
        _subject: `New Website Inquiry from ${form.name}`,
        _captcha: "false",
      }),
    });

    if (!response.ok) {
      throw new Error("Email submission failed");
    }

    const data = await response.json();
    const isSuccess = data?.success === true || data?.success === "true";
    if (!isSuccess) {
      throw new Error(data?.message || "Email submission response not successful");
    }
  };

  const openWhatsAppDraft = () => {
    const text = encodeURIComponent(buildContactMessage());
    window.location.assign(`https://wa.me/${CONTACT_PHONE_COUNTRY}${CONTACT_PHONE}?text=${text}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (sending) {
      return;
    }

    setSending(true);
    try {
      await sendEmailAutomatically();
      openWhatsAppDraft();
      toast.success("Email sent automatically. WhatsApp opened.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      const reason = error instanceof Error ? error.message : "Email failed to send automatically.";
      openWhatsAppDraft();
      toast.error(`${reason} WhatsApp opened to send manually.`);
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="pt-24 md:pt-32">
      <section className="pb-12 md:pb-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Get in Touch</p>
            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight tracking-tight max-w-3xl">
              Let's Start a
              <br />
              <span className="text-muted-foreground">Conversation</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Contact Info */}
            <ScrollReveal>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <User size={18} className="text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Name</p>
                        <p className="font-medium">Madhan</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail size={18} className="text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium hover:text-muted-foreground transition-colors">
                          {CONTACT_EMAIL}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone size={18} className="text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <a href={`tel:${CONTACT_PHONE_COUNTRY}${CONTACT_PHONE}`} className="font-medium hover:text-muted-foreground transition-colors">
                          +{CONTACT_PHONE_COUNTRY} {CONTACT_PHONE}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <MessageCircle size={18} className="text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">WhatsApp</p>
                        <a
                          href={`https://wa.me/${CONTACT_PHONE_COUNTRY}${CONTACT_PHONE}`}
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium hover:text-muted-foreground transition-colors"
                        >
                          Chat on WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-2xl border border-border bg-card">
                  <h3 className="font-semibold mb-2">Brookode</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We're always open to discussing new projects, creative ideas, or opportunities to help your business grow.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal delay={0.2}>
              <form id="contact-message-form" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-card border border-border rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-ring transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-card border border-border rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-ring transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-card border border-border rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-ring transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-medium hover:scale-[1.02] transition-transform duration-300 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {sending ? "Sending..." : "Send via WhatsApp + Email"}
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary border border-primary/20 rounded-full px-4 py-2 mb-6">
                Frequently Asked Questions
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Common Questions</h2>
              <p className="text-muted-foreground">
                Find answers to common questions about our services and process
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="border border-border rounded-2xl overflow-hidden bg-card">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-medium text-foreground">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center ${openFaq === i ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === i ? "auto" : 0,
                      opacity: openFaq === i ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">Couldn't find what you're looking for?</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-medium text-sm hover:scale-105 transition-transform duration-300"
              >
                Get in Touch with Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Contact;

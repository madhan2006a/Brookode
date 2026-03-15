import { Link } from "react-router-dom";
import { Instagram, Linkedin, MessageCircle, Facebook, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import logo from "@/assets/logo.png";

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL ?? "madhanrajprivate2006@gmail.com";
const CONTACT_EMAIL_API = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const cleanEmail = email.trim();
    if (!cleanEmail || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(CONTACT_EMAIL_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: cleanEmail,
          source: "Footer CTA",
          _subject: "New Footer Inquiry Email",
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

      toast.success("Thanks! Your email was sent successfully.");
      setEmail("");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Could not send email right now. Please try again.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-footer text-footer-foreground">

      {/* ── TOP: Logo + CTA/Email ── */}
      <div className="container pt-12 md:pt-16 pb-10">

        {/* MOBILE: centered stack */}
        <div className="flex flex-col items-center gap-6 md:hidden">
          <Link to="/">
            <img src={logo} alt="Brookode" className="h-12 brightness-0 invert" />
          </Link>
          <div className="w-full text-center">
            <p className="text-2xl font-bold leading-snug mb-5">
              Need website development<br />or web design?
            </p>
            <form
              onSubmit={handleEmailSubmit}
              className="flex items-center border border-footer-foreground/25 rounded-full overflow-hidden bg-footer-foreground/8 w-full"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-transparent px-5 py-3.5 text-sm text-footer-foreground placeholder:text-footer-foreground/45 focus:outline-none flex-1 min-w-0"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-3.5 text-footer-foreground/60 hover:text-footer-foreground transition-colors flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* DESKTOP: logo left, cta right */}
        <div className="hidden md:flex justify-between items-center gap-8">
          <Link to="/">
            <img src={logo} alt="Brookode" className="h-10 brightness-0 invert" />
          </Link>
          <div className="text-right">
            <p className="text-base font-semibold mb-3">Need website development or web design?</p>
            <form
              onSubmit={handleEmailSubmit}
              className="flex items-center border border-footer-foreground/20 rounded-full overflow-hidden bg-footer-foreground/5 w-[380px]"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="bg-transparent px-5 py-3 text-sm text-footer-foreground placeholder:text-footer-foreground/40 focus:outline-none flex-1 min-w-0"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-3 text-footer-foreground/60 hover:text-footer-foreground transition-colors flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ── MIDDLE: Nav + Social ── */}
      <div className="border-t border-footer-foreground/10">
        <div className="container py-5">

          {/* MOBILE: social icons centered only (nav hidden to keep it clean) */}
          <div className="flex justify-center gap-6 md:hidden">
            <a href="#" aria-label="Instagram" className="opacity-60 hover:opacity-100 transition-opacity"><Instagram size={20} /></a>
            <a href="#" aria-label="LinkedIn" className="opacity-60 hover:opacity-100 transition-opacity"><Linkedin size={20} /></a>
            <a href="#" aria-label="WhatsApp" className="opacity-60 hover:opacity-100 transition-opacity"><MessageCircle size={20} /></a>
            <a href="#" aria-label="Facebook" className="opacity-60 hover:opacity-100 transition-opacity"><Facebook size={20} /></a>
          </div>

          {/* DESKTOP: nav left, social right */}
          <div className="hidden md:flex justify-between items-center gap-6">
            <nav className="flex flex-wrap gap-x-7 gap-y-2 text-sm opacity-60">
              <Link to="/" className="hover:opacity-100 transition-opacity">Home</Link>
              <Link to="/about" className="hover:opacity-100 transition-opacity">About</Link>
              <Link to="/services" className="hover:opacity-100 transition-opacity">Services</Link>
              <Link to="/work" className="hover:opacity-100 transition-opacity">Our Portfolio of Work</Link>
              <Link to="/contact" className="hover:opacity-100 transition-opacity">Get a Free Quote</Link>
            </nav>
            <div className="flex gap-5 opacity-60">
              <a href="#" aria-label="Instagram" className="hover:opacity-100 transition-opacity"><Instagram size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:opacity-100 transition-opacity"><Linkedin size={18} /></a>
              <a href="#" aria-label="WhatsApp" className="hover:opacity-100 transition-opacity"><MessageCircle size={18} /></a>
              <a href="#" aria-label="Facebook" className="hover:opacity-100 transition-opacity"><Facebook size={18} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM: Copyright ── */}
      <div className="border-t border-footer-foreground/10">
        <div className="container py-5 text-center">
          <p className="text-sm opacity-50">© 2026 Brookode. All Rights Reserved.</p>
          <p className="text-xs opacity-30 italic mt-1">Building Modern Websites, Serving Clients Globally.</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;

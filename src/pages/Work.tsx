import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import proj1MobileImg from "@/assets/PROJECT-1 IMAGES/IMAG1_MOBILVIEW.png";
import proj1MobileImg2 from "@/assets/PROJECT-1 IMAGES/IMAG1_MOBILVIEW_2.png";
import proj1MobileImg3 from "@/assets/PROJECT-1 IMAGES/IMAG1_MOBILVIEW_3.png";
import proj1Img1 from "@/assets/PROJECT-1 IMAGES/PROJ1-IMG1.png";
import proj1Img2 from "@/assets/PROJECT-1 IMAGES/PROJ1-IMG2.png";
import proj1Img3 from "@/assets/PROJECT-1 IMAGES/PROJ1-IMG3.png";
import proj2MobileImg1 from "@/assets/PROJECT-2 IMAGES/IMAG1_MOBILVIEW_1.png";
import proj2MobileImg2 from "@/assets/PROJECT-2 IMAGES/IMAG1_MOBILVIEW_2.png";
import proj2MobileImg3 from "@/assets/PROJECT-2 IMAGES/IMAG1_MOBILVIEW_3.png";
import proj2Img1 from "@/assets/PROJECT-2 IMAGES/PROJ2-IMG1.png";
import proj2Img2 from "@/assets/PROJECT-2 IMAGES/PROJ2-IMG2.png";
import proj2Img3 from "@/assets/PROJECT-2 IMAGES/PROJ2-IMG3.png";
import proj3MobileImg1 from "@/assets/PROJECT-3 IMAGES/IMAG1_MOBILVIEW_1.png";
import proj3MobileImg2 from "@/assets/PROJECT-3 IMAGES/IMAG1_MOBILVIEW_2.png";
import proj3MobileImg3 from "@/assets/PROJECT-3 IMAGES/IMAG1_MOBILVIEW_3.png";
import proj3Img1 from "@/assets/PROJECT-3 IMAGES/PROJ3-IMG1.png";
import proj3Img2 from "@/assets/PROJECT-3 IMAGES/PROJ3-IMG2.png";
import proj3Img3 from "@/assets/PROJECT-3 IMAGES/PROJ3-IMG3.png";
import proj4MobileImg1 from "@/assets/PROJECT-4 IMAGES/IMAG1_MOBILVIEW_1.png";
import proj4MobileImg2 from "@/assets/PROJECT-4 IMAGES/IMAG1_MOBILVIEW_2.png";
import proj4MobileImg3 from "@/assets/PROJECT-4 IMAGES/IMAG1_MOBILVIEW_3.png";
import proj4Img1 from "@/assets/PROJECT-4 IMAGES/PROJ4-IMG1.png";
import proj4Img2 from "@/assets/PROJECT-4 IMAGES/PROJ4-IMG2.png";
import proj4Img3 from "@/assets/PROJECT-4 IMAGES/PROJ4-IMG3.png";
import proj5MobileImg1 from "@/assets/PROJECT-5 IMAGES/IMAG1_MOBILVIEW_1.png";
import proj5MobileImg2 from "@/assets/PROJECT-5 IMAGES/IMAG1_MOBILVIW_2.png";
import proj5MobileImg3 from "@/assets/PROJECT-5 IMAGES/IMAG1_MOBILVIEW_3.png";
import proj5Img1 from "@/assets/PROJECT-5 IMAGES/PROJ5-IMG1.png";
import proj5Img2 from "@/assets/PROJECT-5 IMAGES/PROJ5-IMG2.png";
import proj5Img3 from "@/assets/PROJECT-5 IMAGES/PROJ5-IMG3.png";

type Project = {
  title: string;
  category: string;
  desc: string;
  stack: string[];
  link: string;
  palette: string;
  gallery: string[];
  mobileImage?: string;
  mobileGallery?: string[];
};

const getDisplayHost = (url: string) => {
  try {
    return new URL(url).hostname;
  } catch {
    return "www.project-preview.com";
  }
};

const projects: Project[] = [
  {
    title: "Cookies Shop Website",
    category: "E-Commerce",
    desc: "A product-focused cookies storefront website designed for clear product discovery and smooth online ordering experience.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://cookies-project-alpha.vercel.app/",
    palette: "from-[#f6e6d6] via-[#fff6ea] to-[#f2dfcb]",
    gallery: [proj1Img1, proj1Img2, proj1Img3],
    mobileImage: proj1MobileImg,
    mobileGallery: [proj1MobileImg, proj1MobileImg2, proj1MobileImg3],
  },
  {
    title: "Sea Food Restaurant Website",
    category: "Restaurant",
    desc: "A seafood restaurant website featuring menu highlights, brand storytelling, and a conversion-oriented booking flow.",
    stack: ["React", "Tailwind", "TypeScript"],
    link: "https://sea-food-res-w8lo.vercel.app/",
    palette: "from-[#d9eef0] via-[#eef8f9] to-[#d6edf3]",
    gallery: [proj2Img1, proj2Img2, proj2Img3],
    mobileImage: proj2MobileImg1,
    mobileGallery: [proj2MobileImg1, proj2MobileImg2, proj2MobileImg3],
  },
  {
    title: "Coffee Shop Website",
    category: "Cafe",
    desc: "A warm coffee brand website crafted to showcase products, atmosphere, and customer engagement with modern UI.",
    stack: ["Next.js", "Framer Motion", "CMS"],
    link: "https://cafe-carner.vercel.app/",
    palette: "from-[#efe0d2] via-[#fbf4ec] to-[#ebdcc9]",
    gallery: [proj3Img1, proj3Img2, proj3Img3],
    mobileImage: proj3MobileImg1,
    mobileGallery: [proj3MobileImg1, proj3MobileImg2, proj3MobileImg3],
  },
  {
    title: "Restaurant Website",
    category: "Hospitality",
    desc: "A premium restaurant presentation with immersive visuals, signature dish highlights, and table reservation flow.",
    stack: ["React", "Node", "SEO"],
    link: "https://silver-nest-retreat.vercel.app/",
    palette: "from-[#e7e5d9] via-[#f6f5ee] to-[#e8e7dc]",
    gallery: [proj4Img1, proj4Img2, proj4Img3],
    mobileImage: proj4MobileImg1,
    mobileGallery: [proj4MobileImg1, proj4MobileImg2, proj4MobileImg3],
  },
  {
    title: "Hospital Website",
    category: "Healthcare",
    desc: "A healthcare website built for trust and clarity, with strong service communication and easy patient navigation.",
    stack: ["React", "Tailwind", "JavaScript"],
    link: "https://hospital-demo-fawn.vercel.app/",
    palette: "from-[#d9eadf] via-[#eef6f1] to-[#dceee6]",
    gallery: [proj5Img1, proj5Img2, proj5Img3],
    mobileImage: proj5MobileImg1,
    mobileGallery: [proj5MobileImg1, proj5MobileImg2, proj5MobileImg3],
  },
];

const ProjectShowcase = ({ project, delay }: { project: Project; delay: number }) => {
  const [activeImage, setActiveImage] = useState(0);
  const activeMobileImage = project.mobileGallery?.[activeImage] ?? project.mobileImage;

  return (
    <ScrollReveal delay={delay}>
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 xl:grid-cols-12 overflow-hidden rounded-[2rem] border border-border/80 bg-card shadow-[0_24px_70px_rgba(15,23,42,0.08)]"
      >
        <div className={`relative xl:col-span-7 min-h-[340px] md:min-h-[560px] p-5 md:p-8 bg-gradient-to-br ${project.palette}`}>
          <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-white/60 blur-2xl" />
          <div className="absolute right-8 bottom-8 h-28 w-28 rounded-full bg-white/70 blur-2xl" />

          <div className="relative h-full rounded-[1.7rem] border border-black/10 bg-[#0f1114] p-4 md:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            <div className="mb-4 flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 text-[10px] uppercase tracking-[0.12em] text-white/70">{getDisplayHost(project.link)}</span>
            </div>

            <div className="relative flex min-h-[320px] md:h-[82%] items-end overflow-hidden rounded-2xl border border-white/10 bg-[#111315]">
              <picture className="absolute inset-0">
                {activeMobileImage && (
                  <source media="(max-width: 767px)" srcSet={activeMobileImage} />
                )}
                <img
                  src={project.gallery[activeImage]}
                  alt={`${project.title} preview ${activeImage + 1}`}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </picture>

              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 via-black/35 to-transparent" />

              <div className="absolute bottom-3 left-3 right-3 flex justify-center gap-1 rounded-2xl bg-black/30 py-2 backdrop-blur-sm sm:gap-2 md:bottom-4 md:left-4 md:right-4">
                {project.gallery.map((_, index) => (
                  <button
                    key={`${project.title}-image-${index}`}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    className={`h-8 w-8 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl border text-[11px] sm:text-sm font-medium transition-colors ${
                      activeImage === index
                        ? "border-white bg-white text-black"
                        : "border-white/30 bg-white/20 text-white hover:bg-white/30"
                    }`}
                    aria-label={`Show image ${index + 1} for ${project.title}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

        <div className="xl:col-span-5 p-7 md:p-10 flex flex-col justify-center bg-card">
          <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground mb-5">{project.category}</p>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-[1.04] tracking-tight mb-6">{project.title}</h2>
          <p className="text-base md:text-[1.05rem] text-muted-foreground leading-relaxed mb-7">{project.desc}</p>

          <div className="mb-8 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 sm:w-auto"
          >
            Live Link <ArrowUpRight size={18} />
          </a>
        </div>
      </motion.article>
    </ScrollReveal>
  );
};

const Work = () => {
  return (
    <main className="pt-24 md:pt-32">
      <section className="pb-12 md:pb-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Portfolio</p>
            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight tracking-tight max-w-3xl">
              Selected
              <br />
              <span className="text-muted-foreground">Projects</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container">
          <div className="space-y-10 md:space-y-14">
            {projects.map((p, i) => (
              <ProjectShowcase key={p.title} project={p} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Work;

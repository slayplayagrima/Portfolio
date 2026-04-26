import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { fadeUp, stagger } from "@/animations/motion"
import { portfolioContent } from "@/data/content"

const socialLinks = [
  {
    label: "GitHub",
    href: portfolioContent.site.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: portfolioContent.site.linkedin,
    icon: Linkedin,
  },
  {
    label: "Email",
    href: `mailto:${portfolioContent.site.email}`,
    icon: Mail,
  },
]

export function HeroSection() {
  return (
    <section id="top" className="layout-container min-h-[calc(100vh-4.5rem)] pt-14">
      <div className="grid min-h-[calc(100vh-4.5rem)] items-center gap-12 py-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="order-2 flex flex-col items-start gap-7 lg:order-1"
        >
          <motion.span
            variants={fadeUp}
            className="hero-pill inline-flex rounded-full px-4 py-2 text-sm text-muted-foreground"
          >
            {portfolioContent.site.role}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            {portfolioContent.hero.greeting}
            <br />
            <span className="hero-highlight">{portfolioContent.hero.headline}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-lg leading-8 text-muted-foreground"
          >
            {portfolioContent.hero.summary}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <a
              href={portfolioContent.hero.primaryCta.href}
              className="button-ring inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              {portfolioContent.hero.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={portfolioContent.hero.secondaryCta.href}
              className="outline-button inline-flex items-center rounded-full px-6 py-3.5 text-sm font-medium text-foreground transition-colors"
            >
              {portfolioContent.hero.secondaryCta.label}
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-5 pt-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <div className="floating-image hero-image-shadow relative overflow-hidden rounded-full border-[4px] border-white/90">
            <img
              src={portfolioContent.site.profileImagePath}
              alt={portfolioContent.site.name}
              className="h-72 w-72 object-cover sm:h-80 sm:w-80 lg:h-[24rem] lg:w-[24rem]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

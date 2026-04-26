import { motion } from "framer-motion"
import { fadeUp, sectionViewport, stagger } from "@/animations/motion"
import { portfolioContent } from "@/data/content"
import { SectionHeader } from "@/components/sections/SectionHeader"

export function AboutSection() {
  return (
    <section id="about" className="layout-container section-space scroll-mt-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        variants={stagger}
        className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <SectionHeader
          eyebrow={portfolioContent.about.eyebrow}
          title={portfolioContent.about.title}
        />

        <motion.div
          variants={fadeUp}
          className="flex flex-col gap-6 text-lg leading-8 text-muted-foreground"
        >
          {portfolioContent.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

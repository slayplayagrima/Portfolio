import { motion } from "framer-motion"
import { Award } from "lucide-react"
import { fadeUp, sectionViewport, stagger, staggerFast } from "@/animations/motion"
import { portfolioContent } from "@/data/content"
import { SectionHeader } from "@/components/sections/SectionHeader"

export function AchievementsSection() {
  return (
    <section id="achievements" className="layout-container section-space scroll-mt-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        variants={stagger}
        className="flex flex-col gap-14"
      >
        <SectionHeader
          eyebrow={portfolioContent.achievements.eyebrow}
          title={portfolioContent.achievements.title}
        />

        <motion.div variants={staggerFast} className="flex flex-col gap-4">
          {portfolioContent.achievements.items.map((item, index) => (
            <motion.article
              key={item.id}
              variants={fadeUp}
              className="panel-surface panel-hover soft-shadow flex flex-col gap-5 p-6 sm:flex-row sm:items-start sm:gap-6 sm:p-8"
            >
              <div className="flex items-center gap-4 sm:w-24 sm:flex-col sm:items-start">
                <div className="icon-bubble inline-flex h-12 w-12 items-center justify-center rounded-full text-foreground">
                  <Award className="h-5 w-5" />
                </div>
                <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-3">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <span className="hero-pill w-fit rounded-full px-3 py-1 text-xs text-muted-foreground">
                    {item.meta}
                  </span>
                </div>
                <p className="max-w-4xl text-base leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

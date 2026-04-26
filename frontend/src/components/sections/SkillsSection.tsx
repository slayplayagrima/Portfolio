import { motion } from "framer-motion"
import { BarChart3, BrainCircuit, Database, LineChart, LucideIcon } from "lucide-react"
import { fadeUp, sectionViewport, stagger, staggerFast } from "@/animations/motion"
import { portfolioContent } from "@/data/content"
import { SectionHeader } from "@/components/sections/SectionHeader"

const icons: LucideIcon[] = [LineChart, Database, BarChart3, BrainCircuit]

export function SkillsSection() {
  return (
    <section id="skills" className="layout-container section-space scroll-mt-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        variants={stagger}
        className="flex flex-col gap-14"
      >
        <SectionHeader
          eyebrow={portfolioContent.skills.eyebrow}
          title={portfolioContent.skills.title}
          kicker={portfolioContent.skills.kicker}
        />

        <motion.div variants={staggerFast} className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {portfolioContent.skills.groups.map((group, index) => {
            const Icon = icons[index % icons.length]

            return (
              <motion.article
                key={group.title}
                variants={fadeUp}
                className="panel-surface panel-hover soft-shadow flex h-full flex-col p-8"
              >
                <div className="icon-bubble mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">{group.title}</h3>
                <ul className="mt-6 flex flex-col gap-3 text-base text-muted-foreground">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-foreground/45" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}

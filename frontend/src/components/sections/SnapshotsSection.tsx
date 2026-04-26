import { motion } from "framer-motion"
import { fadeUp, sectionViewport, stagger, staggerFast } from "@/animations/motion"
import { portfolioContent } from "@/data/content"
import { SectionHeader } from "@/components/sections/SectionHeader"

export function SnapshotsSection() {
  return (
    <section className="layout-container section-space pt-0">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        variants={stagger}
        className="flex flex-col gap-12"
      >
        <SectionHeader
          eyebrow={portfolioContent.snapshots.eyebrow}
          title={portfolioContent.snapshots.title}
          kicker={portfolioContent.snapshots.kicker}
        />

        <motion.div variants={staggerFast} className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {portfolioContent.snapshots.items.map((snapshot) => (
            <motion.figure
              key={snapshot.id}
              variants={fadeUp}
              className="panel-surface panel-hover soft-shadow overflow-hidden"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={snapshot.imagePath}
                  alt={snapshot.title}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <figcaption className="border-t border-border px-5 py-4 text-sm text-muted-foreground">
                {snapshot.title}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

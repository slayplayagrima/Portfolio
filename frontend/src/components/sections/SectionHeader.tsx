import { motion } from "framer-motion"
import { fadeUp } from "@/animations/motion"

type SectionHeaderProps = {
  eyebrow: string
  title: string
  kicker?: string
}

export function SectionHeader({ eyebrow, title, kicker }: SectionHeaderProps) {
  return (
    <motion.div variants={fadeUp} className="flex flex-col gap-4">
      <span className="section-label">{eyebrow}</span>
      <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {kicker ? (
        <p className="max-w-2xl text-lg leading-8 text-muted-foreground">{kicker}</p>
      ) : null}
    </motion.div>
  )
}

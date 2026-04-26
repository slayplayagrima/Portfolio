import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { fadeUp, sectionViewport, stagger, staggerFast } from "@/animations/motion"
import { portfolioContent } from "@/data/content"
import { SectionHeader } from "@/components/sections/SectionHeader"

export function ProjectsSection() {
  return (
    <section id="projects" className="layout-container section-space scroll-mt-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        variants={stagger}
        className="flex flex-col gap-14"
      >
        <SectionHeader
          eyebrow="Selected Work"
          title="Featured projects."
          kicker="A focused set of analysis and dashboard projects with clearer structure, screenshots, and reusable data-driven content."
        />

        <motion.div variants={staggerFast} className="grid gap-6 lg:grid-cols-2">
          {portfolioContent.projects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={fadeUp}
              className="group project-card panel-hover soft-shadow overflow-hidden rounded-[1.5rem]"
            >
              <div className="project-media relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.imagePath}
                  alt={project.imageAlt}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="project-overlay absolute inset-0" />
              </div>

              <div className="flex flex-col gap-6 p-7">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    {String(index + 1).padStart(2, "0")} / {String(portfolioContent.projects.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-3xl font-semibold tracking-tight text-white">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="project-chip rounded-full px-3 py-1 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 text-base leading-7 text-white/75">
                  <p>{project.description}</p>
                  <p>{project.outcome}</p>
                </div>

                <div className="project-divider flex flex-wrap gap-3 pt-6">
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-secondary-link inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-white transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  ) : null}

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="button-ring inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-[#171717] transition-transform hover:-translate-y-0.5"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Preview
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

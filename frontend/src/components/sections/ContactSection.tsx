import { FormEvent, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { fadeUp, sectionViewport, stagger } from "@/animations/motion"
import { portfolioContent } from "@/data/content"
import { SectionHeader } from "@/components/sections/SectionHeader"

const contactLinks = [
  {
    label: portfolioContent.site.email,
    href: `mailto:${portfolioContent.site.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: portfolioContent.site.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: portfolioContent.site.github,
    icon: Github,
  },
]

export function ContactSection() {
  const [status, setStatus] = useState("")

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get("name") ?? "").trim()
    const email = String(formData.get("email") ?? "").trim()
    const message = String(formData.get("message") ?? "").trim()

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)

    window.location.href = `mailto:${portfolioContent.site.email}?subject=${subject}&body=${body}`
    setStatus("Your email client should open with a drafted message.")
    event.currentTarget.reset()
  }

  return (
    <section id="contact" className="layout-container section-space scroll-mt-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        variants={stagger}
        className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10"
      >
        <motion.div variants={fadeUp} className="flex flex-col gap-8">
          <SectionHeader
            eyebrow={portfolioContent.contact.eyebrow}
            title={portfolioContent.contact.title}
            kicker={portfolioContent.contact.kicker}
          />

          <p className="max-w-xl text-sm leading-7 text-muted-foreground">
            {portfolioContent.contact.formNote}
          </p>

          <div className="flex flex-col gap-3">
            {contactLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="panel-surface panel-hover soft-shadow flex items-center gap-4 px-5 py-5"
              >
                <span className="icon-bubble inline-flex h-12 w-12 items-center justify-center rounded-full">
                  <Icon className="h-5 w-5 text-foreground" />
                </span>
                <span className="text-lg font-medium text-foreground">{label}</span>
                <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="panel-surface soft-shadow p-6 sm:p-8">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-foreground">Send a message</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              Fill out the form below and your default email app will open with the message ready to send.
            </p>
          </div>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <label className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Name</span>
              <input
                required
                name="name"
                placeholder="Your name"
                className="form-input-surface rounded-2xl px-4 py-3.5 text-foreground outline-none transition-colors placeholder:text-muted-foreground"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Email</span>
              <input
                required
                type="email"
                name="email"
                placeholder="you@example.com"
                className="form-input-surface rounded-2xl px-4 py-3.5 text-foreground outline-none transition-colors placeholder:text-muted-foreground"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Message</span>
              <textarea
                required
                name="message"
                placeholder="Tell me a little about the opportunity or project."
                rows={6}
                className="form-input-surface min-h-40 rounded-2xl px-4 py-3.5 text-foreground outline-none transition-colors placeholder:text-muted-foreground"
              />
            </label>

            <button
              type="submit"
              className="contact-submit-button button-ring inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-medium transition-transform hover:-translate-y-0.5"
            >
              Send Message
              <ArrowRight className="h-4 w-4" />
            </button>

            {status ? <p className="text-sm text-muted-foreground">{status}</p> : null}
          </form>
        </motion.div>
      </motion.div>
    </section>
  )
}

import { portfolioContent } from "@/data/content"

export function TechStrip() {
  const items = [...portfolioContent.featuredTools, ...portfolioContent.featuredTools]

  return (
    <section aria-hidden className="strip-surface overflow-hidden py-5">
      <div className="marquee-track gap-10 whitespace-nowrap">
        {items.map((tool, index) => (
          <span key={`${tool}-${index}`} className="text-sm font-medium tracking-wide text-white">
            {tool}
            <span className="mx-6 text-white/30">/</span>
          </span>
        ))}
      </div>
    </section>
  )
}

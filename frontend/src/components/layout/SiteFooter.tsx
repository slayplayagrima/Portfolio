import { portfolioContent } from "@/data/content"

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-8">
      <div className="layout-container flex flex-col gap-2 text-center text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {portfolioContent.site.name}. All rights reserved.</p>
        <p>{portfolioContent.site.role}</p>
      </div>
    </footer>
  )
}

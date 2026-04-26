import { SiteShell } from "@/components/layout/SiteShell"
import { AboutSection } from "@/components/sections/AboutSection"
import { AchievementsSection } from "@/components/sections/AchievementsSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { HeroSection } from "@/components/sections/HeroSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { SkillsSection } from "@/components/sections/SkillsSection"
import { SnapshotsSection } from "@/components/sections/SnapshotsSection"
import { TechStrip } from "@/components/sections/TechStrip"

export function HomePage() {
  return (
    <SiteShell>
      <HeroSection />
      <TechStrip />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <SnapshotsSection />
      <AchievementsSection />
      <ContactSection />
    </SiteShell>
  )
}

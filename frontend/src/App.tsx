import { useEffect } from "react"
import { ThemeProvider } from "@/components/theme/ThemeProvider"
import { HomePage } from "@/pages/HomePage"
import { portfolioContent } from "@/data/content"

function App() {
  useEffect(() => {
    document.title = portfolioContent.site.seoTitle
  }, [])

  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  )
}

export default App

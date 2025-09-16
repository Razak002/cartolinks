import { Header } from "@/components/header"
import { HeroCards } from "@/components/hero-cards"
import { GallerySection } from "@/components/gallery-section"
import { Footer } from "@/components/footer"
import ToolsGrid from "@/components/tools-grid"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroCards />
        <ToolsGrid />
        <GallerySection />
      </main>
      <Footer />
    </div>
  )
}

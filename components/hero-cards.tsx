"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const cardImages = [
  "/images/wan.webp",
  "/images/open.webp",
  "/images/land.webp",
  "/images/both.webp",
  "/images/source.webp",
  "/images/brush.webp",
  "/images/generate.webp",
]

export function HeroCards() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [cardWidth, setCardWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const getVisibleCards = () =>
    typeof window !== "undefined" && window.innerWidth >= 768 ? 2 : 1

  const visibleCards = getVisibleCards()
  const maxIndex = Math.max(0, cardImages.length - visibleCards)

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 3000)
    return () => clearInterval(interval)
  }, [isPaused, maxIndex])

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const card = containerRef.current.querySelector(".hero-card") as HTMLElement
        if (card) setCardWidth(card.offsetWidth + 24) // card width + gap
      }
    }
    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [visibleCards])

  const totalSlides = maxIndex + 1

  return (
    <div
      className="relative px-4 sm:px-6 py-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden" ref={containerRef}>
        <motion.div
          className="flex gap-6"
          animate={{ x: -currentIndex * cardWidth }}
          transition={{ type: "spring", stiffness: 70, damping: 20 }}
        >
          {cardImages.map((image, index) => (
            <motion.div
              key={index}
              className="hero-card relative w-[100%] sm:w-[50%] h-[250px] sm:h-[400px] rounded-xl overflow-hidden border border-border flex-shrink-0 shadow-md"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Card ${index + 1}`}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {totalSlides > 1 && (
        <>
          <Button
            variant="ghost"
            size="sm"
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full"
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full"
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </>
      )}

      {totalSlides > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex
                  ? "bg-gray-600"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              animate={index === currentIndex ? { scale: 1.3 } : { scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

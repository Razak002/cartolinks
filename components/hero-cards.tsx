"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

const cardImages = [
  "/images/wan.png",
  "images/open.png",
  "images/land.png",
  "images/source.png",
  "images/brush.png",
  "images/generate.png",
  "images/code.png",
  "images/whisky.png",
]

export function HeroCards() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const getVisibleCards = () => {

    return typeof window !== "undefined" && window.innerWidth >= 768 ? 2 : 1
  }

  const visibleCards = getVisibleCards()
  const maxIndex = Math.max(0, cardImages.length - visibleCards)

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  useEffect(() => {
    if (isPaused || visibleCards <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        return prev >= maxIndex ? 0 : prev + 1
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [isPaused, maxIndex, visibleCards])

  const totalSlides = maxIndex + 1

  return (
    <div className="relative px-6 py-8" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out gap-6"
          style={{
            transform: `translateX(-${currentIndex * (420 + 24)}px)`, 
          }}
        >
          {cardImages.map((image, index) => (
            <div
              key={index}
              className="relative min-w-[700px] h-[400px] rounded-xl overflow-hidden border border-border flex-shrink-0"
            >
              <Image src={image || "/placeholder.svg"} alt={`Card ${index + 1}`} fill className="object-fill" />
            </div>
          ))}
        </div>
      </div>

      {totalSlides > 1 && (
        <>
          <Button
            variant="ghost"
            size="sm"
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white disabled:opacity-50"
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white disabled:opacity-50"
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </>
      )}

      {totalSlides > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex ? "bg-gray-500" : "bg-gray-200 hover:bg-gray-100"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

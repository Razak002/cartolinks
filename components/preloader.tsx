"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true)

  // Hide after 2.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 flex items-center justify-center bg-black z-50"
        >
          {/* Animated logo/text */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="text-3xl font-bold text-white"
          >
            Krea AI🚀
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

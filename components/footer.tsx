"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="bg-neutral-900 px-4 py-6 border-t border-border">
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Left Logo */}
        <motion.div
          className="flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src="/images/rmbg2.webp"
            alt="logo"
            width={160}
            height={160}
            className="h-auto w-24 md:w-40 object-contain"
          />
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-2 md:gap-3 text-sm text-muted-foreground"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="font-semibold text-base md:text-lg text-mute">
            curated by
          </span>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Image
              src="/images/mob.webp"
              alt="curated by logo"
              width={160}
              height={160}
              className="h-auto w-20 md:w-32 object-contain"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { RiLogoutBoxLine } from "react-icons/ri"
import { IoCardSharp } from "react-icons/io5"
import { motion } from "framer-motion"

export function GallerySection() {
  return (
    <section className="px-2 sm:px-6 ml-5 sm:ml-0 mt-20">
      <motion.div
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.h2
          className="text-xl font-semibold text-foreground"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Gallery
        </motion.h2>

        <div className="flex flex-wrap sm:flex-nowrap items-start sm:items-center gap-2">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center text-foreground px-3 py-2 border rounded-lg hover:bg-muted/40 cursor-pointer"
            >
              <RiLogoutBoxLine className="w-4 h-4 sm:mr-2" />
              Logout
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center text-foreground border px-3 py-2 rounded-lg hover:bg-muted/40 cursor-pointer"
            >
              <IoCardSharp className="w-4 h-4 sm:mr-" />
              Pricing
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

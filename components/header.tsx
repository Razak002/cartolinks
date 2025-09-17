"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  ChevronDown,
  User,
} from "lucide-react"
import { GoHomeFill } from "react-icons/go"
import { FaFolder, FaVideo } from "react-icons/fa"
import { FaBell } from "react-icons/fa6"
import { ImMagicWand } from "react-icons/im"
import { TbMenuDeep } from "react-icons/tb";
import { HiMiniPaintBrush } from "react-icons/hi2"
import { PiHeadsetBold, PiPencilCircleDuotone } from "react-icons/pi"
import { BsCardImage } from "react-icons/bs"
import Image from "next/image"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import Link from "next/link"

export function Header() {
  const { theme } = useTheme()

  const fadeIn = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  const staggerMenu = {
    hidden: { opacity: 0, x: -15 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.07 },
    }),
  }

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.4 }}
      className="flex items-center justify-between px-3 py-4 border-b border-border bg-background backdrop-blur-sm sticky top-0 z-50"
    >
      <motion.div
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-4"
      >
        <div className="flex items-center gap-2">
          <Link href={'/'}>
            <motion.div
              whileHover={{ scale: 1.05, rotate: 3 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="rounded-sm flex items-center justify-center"
            >
              <Image
                src={theme === "dark" ? "/images/logoB.webp" : "/images/logoA.webp"}
                alt="logo"
                width={64}
                height={64}
                priority
                className="md:w-[50px] md:h-[50px]"
              />
            </motion.div>
          </Link>
          <div className="hidden sm:flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-b from-pink-400 to-blue-400 dark:from-pink-600 dark:to-blue-600 shadow-md">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm text-muted-foreground font-medium">
                personalmodelinstitute
              </span>
              <ChevronDown width={15} height={15} />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="hidden md:flex items-center gap-2 bg-muted p-2 rounded-xl shadow-sm"
      >
        {[GoHomeFill, BsCardImage, FaVideo, ImMagicWand, HiMiniPaintBrush, PiPencilCircleDuotone, FaFolder].map((Icon, idx) => (
          <motion.div key={idx} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
            <Button variant="ghost" size="sm" className="bg-background hover:bg-primary/10 transition-colors">
              <Icon className="w-5 h-5" />
            </Button>
          </motion.div>
        ))}
      </motion.div>
      <div className="flex items-center gap-4">
        <motion.div className="hidden sm:flex items-center gap-2" whileHover={{ scale: 1.05 }}>
          <BsCardImage className="w-4 h-4" />
          <span className="text-sm text-foreground">Gallery</span>
        </motion.div>
        <motion.div className="hidden sm:flex items-center gap-2" whileHover={{ scale: 1.05 }}>
          <PiHeadsetBold className="w-4 h-4" />
          <span className="text-sm text-foreground">Support</span>
        </motion.div>
        <motion.div whileHover={{ rotate: 15, scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <FaBell className="hidden sm:block w-4 h-4 cursor-pointer" />
        </motion.div>
        <ThemeToggle />

        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="w-12 h-12 md:w-10 md:h-10 hover:bg-primary/10"
              >
                <TbMenuDeep className="w-8 h-8 md:w-6 md:h-6 font-bold" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-72 sm:w-80 bg-background text-foreground p-6 flex flex-col"
            >
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-b from-pink-400 to-blue-400 dark:from-pink-600 dark:to-blue-600 shadow-md">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold">personalmodelinstitute</p>
                  <p className="text-xs text-muted-foreground">Pro Member</p>
                </div>
              </motion.div>

              <nav className="flex flex-col gap-2">
                {[
                  { icon: GoHomeFill, label: "Home" },
                  { icon: BsCardImage, label: "Images" },
                  { icon: FaVideo, label: "Videos" },
                  { icon: ImMagicWand, label: "Enhance" },
                  { icon: HiMiniPaintBrush, label: "Paint" },
                  { icon: PiPencilCircleDuotone, label: "Draw" },
                  { icon: FaFolder, label: "Folders" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={staggerMenu}
                  >
                    <Button variant="ghost" className="justify-start gap-3 text-sm font-medium hover:bg-primary/10 rounded-lg">
                      <item.icon className="w-5 h-5" /> {item.label}
                    </Button>
                  </motion.div>
                ))}
              </nav>

              <div className="my-4 border-t border-border"></div>
              <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">More</p>

              <nav className="flex flex-col gap-2">
                {[{ icon: BsCardImage, label: "Gallery" }, { icon: PiHeadsetBold, label: "Support" }].map((item, i) => (
                  <motion.div
                    key={item.label}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={staggerMenu}
                  >
                    <Button variant="ghost" className="justify-start gap-3 text-sm font-medium hover:bg-primary/10 rounded-lg">
                      <item.icon className="w-5 h-5" /> {item.label}
                    </Button>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto flex items-center justify-between pt-5 border-t border-border">
                <ThemeToggle />
                <p className="text-xs text-muted-foreground">© 2025 dev_razak</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-b from-pink-400 to-blue-400 dark:from-pink-600 dark:to-blue-600 shadow-md">
          <User className="w-4 h-4 text-white" />
        </motion.div>
      </div>
    </motion.header>
  )
}

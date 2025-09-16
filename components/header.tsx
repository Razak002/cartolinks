"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  ChevronDown,
  Menu,
  User,
} from "lucide-react"
import { GoHomeFill } from "react-icons/go"
import { FaFolder, FaVideo } from "react-icons/fa"
import { FaBell } from "react-icons/fa6"
import { ImMagicWand } from "react-icons/im"
import { HiMiniPaintBrush } from "react-icons/hi2"
import { PiHeadsetBold, PiPencilCircleDuotone } from "react-icons/pi"
import { BsCardImage } from "react-icons/bs"
import Image from "next/image"
import { useTheme } from "next-themes"

export function Header() {
  const { theme } = useTheme()
  return (
    <header className="flex items-center justify-between px-3 py-4 border-b border-border bg-background">
      {/* Left section: logo + account */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="rounded-sm flex items-center justify-center">
            <Image
              src={theme === "dark" ? "/images/logoB.png" : "/images/logoA.png"}
              alt="logo"
              width={50}
              height={50}
              priority
            />
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-b from-pink-400 to-blue-400 dark:from-pink-600 dark:to-blue-600">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm text-muted-foreground">
                personalmodelinstitute
              </span>
              <ChevronDown width={15} height={15} />
            </div>
          </div>
        </div>
      </div>

      {/* Middle section: nav icons (desktop only) */}
      <div className="hidden md:flex items-center gap-2 bg-muted p-2 rounded-xl shadow-sm">
        <Button variant="ghost" size="sm" className="bg-background hover:bg-primary/10">
          <GoHomeFill className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="sm" className="hover:bg-primary/10">
          <BsCardImage className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="sm" className="hover:bg-primary/10">
          <FaVideo className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="sm" className="hover:bg-primary/10">
          <ImMagicWand className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="sm" className="hover:bg-primary/10">
          <HiMiniPaintBrush className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="sm" className="hover:bg-primary/10">
          <PiPencilCircleDuotone className="w-6 h-6" />
        </Button>
        <Button variant="ghost" size="sm" className="hover:bg-primary/10">
          <FaFolder className="w-5 h-5" />
        </Button>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2">
          <BsCardImage className="w-4 h-4" />
          <span className="text-sm text-foreground">Gallery</span>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <PiHeadsetBold className="w-4 h-4" />
          <span className="text-sm text-foreground">Support</span>
        </div>
        <FaBell className="hidden sm:block w-4 h-4" />
        <ThemeToggle />

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-72 sm:w-80 bg-background text-mute p-6"
            >
              {/* Profile area */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-b from-pink-400 to-blue-400">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium">personalmodelinstitute</p>
                  <p className="text-xs opacity-80">Pro Member</p>
                </div>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col gap-4">
                <Button variant="ghost" className="justify-start text-mute hover:bg-white/10">
                  <GoHomeFill className="mr-3 w-5 h-5" /> Home
                </Button>
                <Button variant="ghost" className="justify-start text-mute hover:bg-white/10">
                  <BsCardImage className="mr-3 w-5 h-5" /> Images
                </Button>
                <Button variant="ghost" className="justify-start text-mute hover:bg-white/10">
                  <FaVideo className="mr-3 w-5 h-5" /> Videos
                </Button>
                <Button variant="ghost" className="justify-start text-mute hover:bg-white/10">
                  <ImMagicWand className="mr-3 w-5 h-5" /> Magic
                </Button>
                <Button variant="ghost" className="justify-start text-mute hover:bg-white/10">
                  <HiMiniPaintBrush className="mr-3 w-5 h-5" /> Paint
                </Button>
                <Button variant="ghost" className="justify-start text-mute hover:bg-white/10">
                  <PiPencilCircleDuotone className="mr-3 w-6 h-6" /> Draw
                </Button>
                <Button variant="ghost" className="justify-start text-mute hover:bg-white/10">
                  <FaFolder className="mr-3 w-5 h-5" /> Folders
                </Button>
              </nav>

              {/* Divider */}
              <div className="my-6 border-t border-white/20"></div>

              {/* Extras */}
              <nav className="flex flex-col gap-4">
                <Button variant="ghost" className="justify-start text-white hover:bg-white/10">
                  <BsCardImage className="mr-3 w-5 h-5" /> Gallery
                </Button>
                <Button variant="ghost" className="justify-start text-white hover:bg-white/10">
                  <PiHeadsetBold className="mr-3 w-5 h-5" /> Support
                </Button>
              </nav>

              {/* Footer */}
              <div className="mt-10 flex items-center justify-between">
                <ThemeToggle />
                <p className="text-xs opacity-75">© 2025 PMI</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Avatar always visible */}
        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-b from-pink-400 to-blue-400 dark:from-pink-600 dark:to-blue-600">
          <User className="w-4 h-4 text-white" />
        </div>
      </div>
    </header>
  )
}

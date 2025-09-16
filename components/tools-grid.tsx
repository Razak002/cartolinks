"use client"

import React from "react"
import { BsImage } from "react-icons/bs"
import { IoVideocamOutline } from "react-icons/io5"
import { PiMagicWandLight } from "react-icons/pi"
import { FaPaintBrush, FaWalking } from "react-icons/fa"
import { GrEdit } from "react-icons/gr"
import { GiMicrophone, GiCircleCage } from "react-icons/gi"
import { FaAngleDown } from "react-icons/fa6"

const tools = [
  {
    name: "Image",
    description: "Generate images with text prompts and AI-powered tools.",
    icon: BsImage,
    badge: "NEW",
    badgeColor: "bg-blue-500",
    iconBg: "bg-purple-600",
  },
  {
    name: "Video",
    description: "Generate videos with Haiku, Flux, Runway, Lumal, and more.",
    icon: IoVideocamOutline,
    badge: null,
    iconBg: "bg-orange-500",
  },
  {
    name: "Realtime",
    description: "Real-time AI rendering on a canvas. Instant feedback loops.",
    icon: FaPaintBrush,
    badge: null,
    iconBg: "bg-teal-500",
  },
  {
    name: "Enhancer",
    description: "Upscale and enhance images and videos up to 2K/4K.",
    icon: PiMagicWandLight,
    badge: "NEW",
    badgeColor: "bg-blue-500",
    iconBg: "bg-neutral-600",
  },
  {
    name: "Edit",
    description: "Add, delete, change style, or expand photos and generations.",
    icon: GrEdit,
    badge: null,
    iconBg: "bg-violet-500",
  },
  {
    name: "Video Lipsync",
    description: "Lip sync any video to any audio.",
    icon: GiMicrophone,
    badge: "NEW",
    badgeColor: "bg-blue-500",
    iconBg: "bg-slate-500",
  },
  {
    name: "Motion Transfer",
    description: "Transfer motion to improve sync and animate characters.",
    icon: FaWalking,
    badge: "NEW",
    badgeColor: "bg-blue-500",
    iconBg: "bg-gray-800",
  },
  {
    name: "Train",
    description: "Teach Flux to replicate your style, products, or characters.",
    icon: GiCircleCage,
    badge: null,
    iconBg: "bg-orange-400",
  },
]

export default function ToolsGrid() {
  return (
    <div className="max-w-full mx-auto px-6 pt-10 bg-background min-h-screen">
      {/* Header row */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-foreground">Generate</h2>
        <button className="text-primary hover:text-foreground text-sm flex items-center">
          <FaAngleDown className="w-4 h-4 ml-1" />
          Show all
        </button>
      </div>

      {/* Tools grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="p-3 rounded-xl border border-border bg-card hover:shadow-md transition-all duration-200"
          >
            <div className="flex gap-2 items-start mb-4">
              <div
                className={`${tool.iconBg} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}
              >
                <tool.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col items-start flex-grow">
                <div className="flex gap-3 items-center">
                  <h3 className="font-semibold text-foreground text-base">
                    {tool.name}
                  </h3>
                  {tool.badge && (
                    <span
                      className={`text-xs px-2 py-0.5 text-white font-medium rounded-full ${tool.badgeColor}`}
                    >
                      {tool.badge}
                    </span>
                  )}
                </div>
                <div className="flex justify-between items-center gap-2">
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1 flex-grow">
                    {tool.description}
                  </p>
                  <button className="border text-xs border-border text-foreground hover:bg-muted rounded-full px-3 py-2">
                    Open
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

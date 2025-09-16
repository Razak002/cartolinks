import { Button } from "@/components/ui/button"
import { RiLogoutBoxLine } from "react-icons/ri"
import { IoCardSharp } from "react-icons/io5"

export function GallerySection() {
  return (
    <div className="px-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-foreground">Gallery</h2>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="sm" className="text-foreground">
            <RiLogoutBoxLine className="w-4 h-4 mr-2" />
            Logout
          </Button>
          <Button variant="ghost" size="sm" className="text-foreground">
            <IoCardSharp className="w-4 h-4 mr-2" />
            Pricing
          </Button>
        </div>
      </div>
    </div>
  )
}

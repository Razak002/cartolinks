import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-neutral-900 px-6 py-4 border-t border-border">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center">
            <Image
              src="/images/rmbg2.png"
              alt="logo"
              width={200}
              height={200}
              className="h-auto w-28 md:w-40 object-contain"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-semibold text-lg text-mute">curated by</span>
          <Image
            src="/images/mob.png"
            alt="curated by logo"
            width={200}
            height={200}
            className="h-auto w-24 md:w-32 object-contain"
          />
        </div>
      </div>
    </footer>
  )
}

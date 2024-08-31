import Link from "next/link";
import { siteConfig } from "../config/site";
import { cn } from "../lib/utils";
import { buttonVariants } from "./ui/button";
import { Icons } from "./Icons";
import { MainNav } from "./MainNav";

export function SiteHeader () {
  return (
  <header className="sticky top-0 w-full border-b border-border bg-background/95 background-blur supports-[background-filter]:bg-background/60">
    <div className="container flex h-14 max-w-screen-sxl items-center">
      <MainNav />
      <div className="flex flex-1 items-center justify-end space-x-2">
        <nav className="flex items-center">
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <div className={cn(buttonVariants({ variant: "ghost"}), "w-10 px-0")}>
              <Icons.gitHub className="w-4 h-4" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
          <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
            <div className={cn(buttonVariants({ variant: "ghost"}), "w-10 px-0")}>
              <Icons.twitter className="w-4 h-4" />
              <span className="sr-only">Twitter</span>
            </div>
          </Link>
        </nav>
      </div>
    </div>
  </header>
  )
}
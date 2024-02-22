"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <>
      <Sheet>
        <header className="bg-slate-100 dark:bg-slate-950 sticky block top-0 pt-3 pb-3 z-40 w-full">
          <div className="container flex h-16 space-x-4 max-w-[980px] sm:space-x-0">
            <MainNav items={siteConfig.mainNav} />
            <div className="flex flex-1 items-center justify-end space-x-4">
              <nav className="flex items-center space-x-1">
                {/* <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link> */}
                {/* <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link> */}
                <div className="hidden sm:hidden md:flex">
                  <Link
                    href="/#experiences"
                    className={buttonVariants({ variant: "outline" })}
                    // className="mr-2 text-sm"
                  >
                    Experciences
                  </Link>
                  &nbsp;
                  <Link
                    href="/#projects"
                    scroll={true}
                    className={buttonVariants({ variant: "outline" })}
                    // className="mr-20 text-sm"
                  >
                    Projects
                  </Link>
                </div>
                {/* <div className="flex sm:flex md:hidden">
              <Link href="/#experiences" className="mr-2 text-sm">
                Experciences
              </Link>
              &nbsp;
              <Link href="/#projects" scroll={true} className="text-sm">
                Projects
              </Link>
            </div> */}

                {/* &nbsp;&nbsp; */}
                <Link
                  href={"mailto:janlord.luga@gmail.com"}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants()}
                >
                  Hire me
                </Link>
                <ThemeToggle />
                <SheetTrigger>
                  <div className="block sm:block md:hidden" rel="noreferrer">
                    <div
                      className={buttonVariants({
                        size: "icon",
                        variant: "ghost",
                      })}
                    >
                      <Icons.menu className="h-5 w-5" />
                    </div>
                  </div>
                </SheetTrigger>
              </nav>
            </div>
          </div>
        </header>

        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  )
}

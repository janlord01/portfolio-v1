import React from "react"
import Image from "next/image"
import Link from "next/link"
import WebDeb from "public/jl-web-icons_web-dev.png"

import { siteConfig } from "@/config/site"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default function Projects() {
  return (
    <div>
      <section
        id="projects"
        className="bg-slate-100 dark:bg-slate-950 items-center md:pt-10 w-full border-b border-gray-200 dark:border-gray-800"
      >
        <h1 className="mb-10 mt-10 text-center text-3xl font-extrabold leading-tight tracking-tighter ">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 max-w-[980px] m-auto py-10 border-b">
          <div className="hidden sm:hidden md:flex flex-col max-w-[980px] md:m-auto items-start gap-2">
            <h2 className="font-extrabold leading-tight tracking-tighter md:text-3xl">
              <Image src={WebDeb} alt="web dev" />
            </h2>
          </div>
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <div className="ml-10">
              <h2 className="font-extrabold leading-tight tracking-tighter text-2xl sm:text-3xl md:text-2xl">
                School Information Management System (Version 2)
              </h2>
              <p className="flex sm:flex md:hidden text-xl">2021 - Present</p>
              <p className="flex max-w-[340px] text-lg text-muted-foreground mb-3">
                Nehemiah create and develop Dynamic Websites, Automation
                Systems, and Consultation for Businesses and Leading Global
                Brands.
              </p>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                Quasar
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                VueJs
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                React
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                NextJs
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                Laravel
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                PHP
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                Javascript
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                Typescript
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                Wordpress
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                Moodle
              </Badge>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 max-w-[980px] m-auto py-10 border-b">
          <div className="hidden sm:hidden md:flex flex-col max-w-[980px] md:m-auto items-start gap-2">
            <h2 className="font-extrabold leading-tight tracking-tighter md:text-3xl">
              <Image src={WebDeb} alt="web dev" />
            </h2>
          </div>
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <div className="ml-10">
              <h2 className="font-extrabold leading-tight tracking-tighter text-2xl sm:text-3xl md:text-2xl">
                Employee Dating App
              </h2>
              <p className="flex sm:flex md:hidden text-xl">2018 - Present</p>
              <p className="flex max-w-[340px] text-lg text-muted-foreground mb-3">
                Here I stopped working as web developer and start own cosmetic
                business. My business focus on mens grooming like hair/beard
                growers, hair pomades, beard shampoo, beard oil, tattoo
                aftercare, perfumes and many other. I also build an ecommerce
                website to sell my products.
              </p>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                Wordpress
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                PHP
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                Javascript
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                CSS
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                E-Commerce
              </Badge>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 max-w-[980px] m-auto py-10 border-b">
          <div className="hidden sm:hidden md:flex flex-col max-w-[980px] md:m-auto items-start gap-2">
            <h2 className="font-extrabold leading-tight tracking-tighter md:text-3xl">
              <Image src={WebDeb} alt="web dev" />
            </h2>
          </div>
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <div className="ml-10">
              <h2 className="font-extrabold leading-tight tracking-tighter text-2xl sm:text-3xl md:text-2xl">
                Fitness Gym App
              </h2>
              <p className="flex sm:flex md:hidden text-xl">2017 - 2018</p>
              <p className="flex max-w-[340px] text-lg text-muted-foreground mb-3">
                Almac is a SEO company, but my work is creating Amazon-affliated
                niche websites. These websites are especially created to earn
                money then sold to website flippers.
              </p>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                Wordpress
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                PHP
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                Javascript
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                CSS
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                E-Commerce
              </Badge>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 max-w-[980px] m-auto py-10 border-b">
          <div className="hidden sm:hidden md:flex flex-col max-w-[980px] md:m-auto items-start gap-2">
            <h2 className="font-extrabold leading-tight tracking-tighter md:text-3xl">
              <Image src={WebDeb} alt="web dev" />
            </h2>
          </div>
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <div className="ml-10">
              <h2 className="font-extrabold leading-tight tracking-tighter text-2xl sm:text-3xl md:text-2xl">
                School Information Management System (Version 1)
              </h2>
              <p className="flex sm:flex md:hidden text-xl">2014 - 2017</p>
              <p className="flex max-w-[340px] text-lg text-muted-foreground mb-3">
                A company of well-known Australian photographers and coaches. I
                developed and managed their websites, keeping the websites up to
                date.
              </p>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                Wordpress
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                PHP
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                Javascript
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                CSS
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                E-Commerce
              </Badge>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 max-w-[980px] m-auto py-10 border-b">
          <div className="hidden sm:hidden md:flex flex-col max-w-[980px] md:m-auto items-start gap-2">
            <h2 className="font-extrabold leading-tight tracking-tighter md:text-3xl">
              <Image src={WebDeb} alt="web dev" />
            </h2>
          </div>
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <div className="ml-10">
              <h2 className="font-extrabold leading-tight tracking-tighter text-2xl sm:text-3xl md:text-2xl">
                Nehemiah HelpDesk
              </h2>
              <p className="flex sm:flex md:hidden text-xl">2014 - 2017</p>
              <p className="flex max-w-[340px] text-lg text-muted-foreground mb-3">
                A company of well-known Australian photographers and coaches. I
                developed and managed their websites, keeping the websites up to
                date.
              </p>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                Wordpress
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                PHP
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                Javascript
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                CSS
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                E-Commerce
              </Badge>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-slate-100 dark:bg-slate-950">
        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 max-w-[980px] m-auto p-5">
          <div>
            <p className="text-sm">
              Loosely designed in Figma and coded in Visual Studio Code by yours
              truly. Built with Next.js and Tailwind CSS, deployed with Vercel.
              All text is set in the Inter typeface.
            </p>
          </div>

          <div className="w-full text-right">
            <Link
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
                <Icons.gitHub className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
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
                <Icons.linkedin className="h-6 w-6 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

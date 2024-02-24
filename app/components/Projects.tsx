import React from "react"
import Image from "next/image"
import Link from "next/link"
import lms from "public/LMS.png"
import gym from "public/fitness-gym-app.png"
import ink from "public/ink&shears.png"
import WebDeb from "public/jl-web-icons_web-dev.png"
import relate from "public/relate.png"
import sims_v1 from "public/sims-v1.png"
import sims_v2 from "public/sims-v2.png"

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
              <Image
                src={ink}
                alt="web dev"
                width={450}
                className="shadow-md"
              />
            </h2>
            <div className="inline-grid grid-cols-3 gap-2 mt-3 text-center">
              <Link
                href="#"
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: "gray", size: "sm" })}
              >
                Link
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: "gray", size: "sm" })}
              >
                Demo
              </Link>
            </div>
          </div>
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <div className="ml-5 md:ml-10 px-5 md:px-0">
              <h2 className="font-extrabold leading-tight tracking-tighter text-2xl sm:text-3xl md:text-2xl">
                Barbershop & Tattooshop Business Management System
              </h2>

              {/* <p className="flex sm:flex md:hidden text-xl">2021 - Present</p> */}
              <p className="flex max-w-[400px] text-lg text-muted-foreground mb-3">
                This is a system I have created for primary, secondary and
                tertiary schools for them to be able to manage their business
                well. The system can be used by administrators, teachers,
                faculty and staff, students and their parents.
              </p>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                Quasar
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                VueJs
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                Pinia
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
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 max-w-[980px] m-auto py-10 border-b">
          <div className="hidden sm:hidden md:flex flex-col max-w-[980px] md:m-auto items-start gap-2">
            <h2 className="font-extrabold leading-tight tracking-tighter md:text-3xl">
              <Image
                src={sims_v2}
                alt="web dev"
                width={450}
                className="shadow-md"
              />
            </h2>
            <div className="inline-grid grid-cols-3 gap-2 mt-3 text-center">
              <Link
                href="#"
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: "gray", size: "sm" })}
              >
                Link
              </Link>
              <Link
                href="#"
                target="_blank"
                className={buttonVariants({ variant: "gray", size: "sm" })}
                rel="noreferrer"
              >
                Demo
              </Link>
            </div>
          </div>
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <div className="ml-5 md:ml-10 px-5 md:px-0">
              <h2 className="font-extrabold leading-tight tracking-tighter text-2xl sm:text-3xl md:text-2xl">
                School Information Management System (Version 2)
              </h2>
              {/* <p className="flex sm:flex md:hidden text-xl">2021 - Present</p> */}
              <p className="flex max-w-[400px] text-lg text-muted-foreground mb-3">
                This is a system I have created for primary, secondary and
                tertiary schools for them to be able to manage their business
                well. The system can be used by administrators, teachers,
                faculty and staff, students and their parents.
              </p>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                Quasar
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                VueJs
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                Vuex
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
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 max-w-[980px] m-auto py-10 border-b">
          <div className="hidden sm:hidden md:flex flex-col max-w-[980px] md:m-auto items-start gap-2">
            <h2 className="font-extrabold leading-tight tracking-tighter md:text-3xl">
              <Image
                src={relate}
                alt="web dev"
                width={450}
                className="shadow-md"
              />
            </h2>
            <div className="inline-grid grid-cols-3 gap-2 mt-3 text-center">
              <Link
                href="#"
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: "gray", size: "sm" })}
              >
                Link
              </Link>
              <Link
                href="#"
                target="_blank"
                className={buttonVariants({ variant: "gray", size: "sm" })}
                rel="noreferrer"
              >
                Demo
              </Link>
            </div>
          </div>
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <div className="ml-5 md:ml-10 px-5 md:px-0">
              <h2 className="font-extrabold leading-tight tracking-tighter text-2xl sm:text-3xl md:text-2xl">
                Peer-to-peer Meeting App
              </h2>
              {/* <p className="flex sm:flex md:hidden text-xl">2018 - Present</p> */}
              <p className="flex max-w-[400px] text-lg text-muted-foreground mb-3">
                In 2022, I had a client who requested the making of an Employee
                Meeting App so they can efficiently communicate with their
                employees.
              </p>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                Quasar
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                VueJs
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
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 max-w-[980px] m-auto py-10 border-b">
          <div className="hidden sm:hidden md:flex flex-col max-w-[980px] md:m-auto items-start gap-2">
            <h2 className="font-extrabold leading-tight tracking-tighter md:text-3xl">
              <Image
                src={gym}
                alt="web dev"
                width={450}
                className="shadow-md"
              />
            </h2>
            <div className="inline-grid grid-cols-3 gap-2 mt-3 text-center">
              <Link
                href="#"
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: "gray", size: "sm" })}
              >
                Link
              </Link>
              <Link
                href="#"
                target="_blank"
                className={buttonVariants({ variant: "gray", size: "sm" })}
                rel="noreferrer"
              >
                Demo
              </Link>
            </div>
          </div>
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <div className="ml-5 md:ml-10 px-5 md:px-0">
              <h2 className="font-extrabold leading-tight tracking-tighter text-2xl sm:text-3xl md:text-2xl">
                Fitness Gym App
              </h2>
              {/* <p className="flex sm:flex md:hidden text-xl">2017 - 2018</p> */}
              <p className="flex max-w-[400px] text-lg text-muted-foreground mb-3">
                In an effort to create a system that would be beneficial and
                profitable in our local community, I created a fitness gym app
                designed to help gym owners manage their business well and for
                their users to be able to maximize their membership benefits.
                This is an app that is ready for franchise business.
              </p>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                Quasar
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                VueJs
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
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 max-w-[980px] m-auto py-10 border-b">
          <div className="hidden sm:hidden md:flex flex-col max-w-[980px] md:m-auto items-start gap-2">
            <h2 className="font-extrabold leading-tight tracking-tighter md:text-3xl">
              <Image
                src={sims_v1}
                alt="web dev"
                width={450}
                className="shadow-md"
              />
            </h2>
            <div className="inline-grid grid-cols-3 gap-2 mt-3 text-center">
              <Link
                href="#"
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: "gray", size: "sm" })}
              >
                Link
              </Link>
              <Link
                href="#"
                target="_blank"
                className={buttonVariants({ variant: "gray", size: "sm" })}
                rel="noreferrer"
              >
                Demo
              </Link>
            </div>
          </div>
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <div className="ml-5 md:ml-10 px-5 md:px-0">
              <h2 className="font-extrabold leading-tight tracking-tighter text-2xl sm:text-3xl md:text-2xl">
                School Information Management System (Version 1)
              </h2>
              {/* <p className="flex sm:flex md:hidden text-xl">2014 - 2017</p> */}
              <p className="flex max-w-[400px] text-lg text-muted-foreground mb-3">
                I used full-stack Laravel in creating this system which is
                solely for Basic Education Schools. After a few months I made
                the Version 2 of this using back-end Laravel. The latter is
                suitable for primary up to tertiary education.
              </p>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                JQuery
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
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 max-w-[980px] m-auto py-10 border-b">
          <div className="hidden sm:hidden md:flex flex-col max-w-[980px] md:m-auto items-start gap-2">
            <h2 className="font-extrabold leading-tight tracking-tighter md:text-3xl">
              <Image
                src={lms}
                alt="web dev"
                width={450}
                className="shadow-md"
              />
            </h2>
            <div className="inline-grid grid-cols-3 gap-2 mt-3 text-center">
              <Link
                href="#"
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: "gray", size: "sm" })}
              >
                Link
              </Link>
              {/* <Link
                href="#"
                target="_blank"
                className={buttonVariants({ variant: "gray", size: "sm" })}
                rel="noreferrer"
              >
                Demo
              </Link> */}
            </div>
          </div>
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <div className="ml-5 md:ml-10 px-5 md:px-0">
              <h2 className="font-extrabold leading-tight tracking-tighter text-2xl sm:text-3xl md:text-2xl">
                Learning Management System
              </h2>
              {/* <p className="flex sm:flex md:hidden text-xl">2014 - 2017</p> */}
              <p className="flex max-w-[400px] text-lg text-muted-foreground mb-3">
                Using the Moodle platform, I have created this system with the
                goal to help people who need a training platform and the like.
                During the pandemic when most schools turned to the internet to
                continue their programs, our clients have used this as their
                tool for making online classes possible.
              </p>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                Moodle
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                CSS
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                PHP
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                Javascript
              </Badge>
            </div>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 max-w-[980px] m-auto py-10 border-b">
          <div className="hidden sm:hidden md:flex flex-col max-w-[980px] md:m-auto items-start gap-2">
            <h2 className="font-extrabold leading-tight tracking-tighter md:text-3xl">
              <Image src={WebDeb} alt="web dev" />
            </h2>
          </div>
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <div className="ml-5 md:ml-10 px-5 md:px-0">
              <h2 className="font-extrabold leading-tight tracking-tighter text-2xl sm:text-3xl md:text-2xl">
                Nehemiah HelpDesk
              </h2>
              <p className="flex max-w-[400px] text-lg text-muted-foreground mb-3">
                This a a practice project I created using React JS. This is to
                provide an online support for the clients of Nehemiah Solutions
                Inc.
              </p>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                React
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                Laravel
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                Javascript
              </Badge>
              <Badge className="mr-1 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-700">
                PHP
              </Badge>
            </div>
          </div>
        </div> */}
      </section>
      <footer className="bg-slate-100 dark:bg-slate-950">
        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 max-w-[980px] m-auto p-5">
          <div>
            <p className="text-sm">
              Designed with the use of PSD and coded in Visual Studio Code.
              Built with Next.js and Tailwind CSS, and deployed with Vercel.
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
              href={siteConfig.links.linkin}
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
                <span className="sr-only">Linkin</span>
              </div>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

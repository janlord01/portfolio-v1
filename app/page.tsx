import Image from "next/image"
import Link from "next/link"
import janlord from "public/jl-web-illus_janlord.png"

import { siteConfig } from "@/config/site"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"

import Experience from "./components/Experience"
import Projects from "./components/Projects"

export default function IndexPage() {
  return (
    <>
      <section
        id="home"
        className="w-full sm:pt-0 md:pt-48 bg-slate-100 dark:bg-slate-950 items-center border-b border-gray-200 dark:border-gray-800"
      >
        <div className="mt-20 flex max-w-[980px] flex-col items-start gap-2 sm:block md:hidden">
          <div className="ml-10">
            <Image
              src={janlord}
              alt="janlord"
              width={330}
              className="text-center"
            />
          </div>
        </div>
        <div className="m-auto grid sm:grid-cols-1 md:grid-cols-2 max-w-[980px]">
          <div className="m-auto md:mt-28 flex flex-col gap-2 items-start p-10 md:p-0">
            <h1 className="sm:hidden md:flex hidden font-extrabold leading-tight tracking-tighter md:text-6xl text-3xl">
              Hey there, <br />
              I&#39;m Janlord!
            </h1>
            <h1 className="sm:flex md:hidden flex text-center font-extrabold leading-tight tracking-tighter md:text-6xl text-3xl">
              Hey there, I&#39;m Janlord!
            </h1>
            <p className="sm:hidden md:flex hidden max-w-[700px] text-lg text-muted-foreground">
              I&#39;m a fullstack developer from the Philippines. <br /> I&#39;m
              also owned a small manufacturing business <br />
              providing cosmetics for both men and women.
            </p>
            <p className="sm:flex md:hidden flex max-w-[700px] text-lg text-muted-foreground">
              I&#39;m a fullstack developer from the Philippines. I&#39;m also
              owned a small manufacturing business providing cosmetics for both
              men and women.
            </p>
            <div className="flex gap-4 mt-5">
              <Link
                href={siteConfig.links.docs}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants()}
              >
                Hire me!
              </Link>
              {/* <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
              className={buttonVariants({ variant: "outline" })}
            >
              GitHub
            </Link> */}
            </div>
          </div>
          <div className="hidden sm:hidden md:flex max-w-[980px] flex-col items-start gap-2">
            <div className="ml-10">
              <Image
                src={janlord}
                alt="janlord"
                width={400}
                className="text-center"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Experience */}
      <Experience />

      {/* Projects */}
      <Projects />
    </>
  )
}

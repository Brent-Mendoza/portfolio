"use client"
import { Icon } from "@iconify/react"
import Link from "next/link"
export default function ContactMeCard() {
  return (
    <div className="w-full h-75 max-lg:h-auto bg-neutral-800/10 flex flex-col rounded-xl shadow shadow-cyan-100/70 p-5 font-inter max-lg:animate-none animate-topBottom">
      <h2 className=" text-2xl font-semibold text-cyan-100 flex gap-2 items-center">
        <Icon
          icon="fa7-solid:contact-book"
          width="25"
          height="25"
          className="h-[25px] w-[25px]"
        />
        Contact Me
      </h2>
      <div className="mt-7 flex gap-1 items-center">
        <Icon
          icon="mdi:envelope"
          width="20"
          height="20"
          className="inline mr-2 text-cyan-100/80"
        />
        <p className="text-md text-cyan-100/80">mjustinebrent@gmail.com</p>
      </div>
      <div className="mt-3 flex gap-1 items-center">
        <Icon
          icon="mdi:facebook"
          width="20"
          height="20"
          className="inline mr-2 text-cyan-100/80"
        />
        <Link
          href="https://web.facebook.com/justine.brent.mendoza.2025"
          target="_blank"
          className="text-md text-cyan-100/80"
        >
          Justine Brent Mendoza
        </Link>
      </div>
      <div className="mt-3 flex gap-1 items-center">
        <Icon
          icon="mdi:github"
          width="20"
          height="20"
          className="inline mr-2 text-cyan-100/80"
        />
        <Link
          href="https://github.com/Brent-Mendoza"
          target="_blank"
          className="text-md text-cyan-100/80"
        >
          Brent-Mendoza
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-center max-md:hidden">
        <p className="text-xl text-cyan-100/90">
          {"Let's build something amazing together!"}
        </p>
      </div>
    </div>
  )
}

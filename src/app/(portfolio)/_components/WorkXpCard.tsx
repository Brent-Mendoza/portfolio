"use client"
import { Icon } from "@iconify/react"

export default function WorkXpCard() {
  return (
    <div className="w-full flex-1  max-lg:h-auto bg-neutral-800/10 rounded-xl shadow shadow-cyan-100/70 p-5 font-inter max-lg:animate-none animate-bottomleft">
      <h2 className=" text-2xl font-semibold text-cyan-100 flex gap-2 items-center">
        <Icon
          icon="fa:briefcase"
          width="25"
          height="25"
          className="h-[25px] w-[25px]"
        />
        Work Experience
      </h2>
      <div className="flex flex-col">
        <p className="text-cyan-100/80 text-lg font-semibold mt-4">
          Software Developer Intern
        </p>
        <p className="text-white/90">North Triam Tech</p>
        <p className="text-white/90 text-sm italic">Feb 2025 - May 2025</p>
      </div>
      <div className="mt-7 flex flex-wrap w-full items-center justify-center">
        <ul className=" flex flex-col gap-2">
          <li className="text-white/90 text-sm">
            Developed responsive interfaces using Vue js and Tailwind CSS
          </li>
          <li className="text-white/90 text-sm">
            Integrated RESTful APIs for dynamic content loading
          </li>
          <li className="text-white/90 text-sm">
            Collaborated using Git and participated in code reviews
          </li>
          <li className="text-white/90 text-sm">
            Built a flexible Document Tracker system
          </li>
        </ul>
      </div>
    </div>
  )
}

"use client"
import { Icon } from "@iconify/react"
export default function EducationCard() {
  return (
    <div className="w-full h-auto max-lg:h-auto bg-neutral-800/10 rounded-xl shadow shadow-cyan-100/70  p-5 font-inter max-lg:animate-none animate-middleleft">
      <h2 className=" text-2xl font-semibold text-cyan-100 flex gap-2 items-center">
        <Icon
          icon="fa-solid:user-graduate"
          width="25"
          height="25"
          className="h-[25px] w-[25px]"
        />
        Education
      </h2>
      <div className="flex flex-col">
        <p className="text-cyan-100/80 text-lg font-semibold mt-2">
          Bachelor of Science in Information Technology
        </p>
        <p className="text-white/90 ">
          Cagayan State University - Carig, Tuguegarao City
        </p>
        <p className="text-white/90 italic text-sm">2021 - 2025</p>
      </div>
    </div>
  )
}

"use client"
import { Icon } from "@iconify/react"
export default function TechStackCard() {
  return (
    <div className="w-full h-75 max-lg:h-auto overflow-x-auto bg-neutral-800/10 rounded-xl shadow shadow-cyan-100/70 p-5 font-inter max-lg:animate-none animate-topMiddle">
      <h2 className=" text-2xl font-semibold text-cyan-100 flex gap-2 items-center">
        <Icon
          icon="gis:layer-stack"
          width="25"
          height="25"
          className="h-[25px] w-[25px]"
        />
        Tech Stack
      </h2>
      <div className="flex flex-wrap w-full items-center justify-center gap-5 mt-4">
        <div className="group flex flex-col gap-1 p-2 bg-neutral-800 shadow w-25 items-center justify-center rounded-lg shdow-xl">
          <Icon
            icon="fa:html5"
            width="50"
            height="50"
            className="h-[50px] w-[50px] text-cyan-100/80 group-hover:animate-bounce"
          />
          <p className="text-cyan-100/80 font-semibold">HTML5</p>
        </div>
        <div className="group flex flex-col gap-1 p-2 bg-neutral-800 shadow w-25 items-center justify-center rounded-lg shdow-xl">
          <Icon
            icon="fa-brands:css3"
            width="50"
            height="50"
            className="h-[50px] w-[50px] text-cyan-100/80 group-hover:animate-bounce"
          />
          <p className="text-cyan-100/80 font-semibold">CSS3</p>
        </div>
        <div className="group flex flex-col gap-1 p-2 bg-neutral-800 shadow w-25 items-center justify-center rounded-lg shdow-xl">
          <Icon
            icon="fa-brands:js-square"
            width="50"
            height="50"
            className="h-[50px] w-[50px] text-cyan-100/80 group-hover:animate-bounce"
          />
          <p className="text-cyan-100/80 font-semibold">Javascript</p>
        </div>
        <div className="group flex flex-col gap-1 p-2 bg-neutral-800 shadow w-25 items-center justify-center rounded-lg shdow-xl">
          <Icon
            icon="fa-brands:react"
            width="50"
            height="50"
            className="h-[50px] w-[50px] text-cyan-100/80 group-hover:animate-spin"
          />
          <p className="text-cyan-100/80 font-semibold">React</p>
        </div>
        <div className="group flex flex-col gap-1 p-2 bg-neutral-800 shadow w-25 items-center justify-center rounded-lg shdow-xl">
          <Icon
            icon="akar-icons:nextjs-fill"
            width="50"
            height="50"
            className="h-[50px] w-[50px] text-cyan-100/80 group-hover:animate-bounce"
          />
          <p className="text-cyan-100/80 font-semibold">Next Js</p>
        </div>
        <div className="group flex flex-col gap-1 p-2 bg-neutral-800 shadow w-25 items-center justify-center rounded-lg shdow-xl">
          <Icon
            icon="flowbite:tailwind-solid"
            width="50"
            height="50"
            className="h-[50px] w-[50px] text-cyan-100/80 group-hover:animate-bounce"
          />
          <p className="text-cyan-100/80 font-semibold">Tailwind</p>
        </div>
        <div className="group flex flex-col gap-1 p-2 bg-neutral-800 shadow w-25 items-center justify-center rounded-lg shdow-xl">
          <Icon
            icon="lineicons:mysql"
            width="50"
            height="50"
            className="h-[50px] w-[50px] text-cyan-100/80 group-hover:animate-bounce"
          />
          <p className="text-cyan-100/80 font-semibold">MySQL</p>
        </div>
        <div className="group flex flex-col gap-1 p-2 bg-neutral-800 shadow w-25 items-center justify-center rounded-lg shdow-xl">
          <Icon
            icon="flowbite:mongo-db-solid"
            width="50"
            height="50"
            className="h-[50px] w-[50px] text-cyan-100/80 group-hover:animate-bounce"
          />
          <p className="text-cyan-100/80 font-semibold">MongoDB</p>
        </div>
      </div>
    </div>
  )
}

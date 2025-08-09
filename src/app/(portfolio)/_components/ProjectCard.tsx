"use client"
import { Icon } from "@iconify/react"
import Link from "next/link"
export default function ProjectCard() {
  return (
    <div className="w-full h-full bg-neutral-800/10 rounded-xl shadow shadow-cyan-100/70  p-5 font-inter max-lg:animate-none animate-rightside">
      <h2 className=" text-2xl font-semibold text-cyan-100 flex gap-2 items-center">
        <Icon
          icon="gis:layer-stack"
          width="25"
          height="25"
          className="h-[25px] w-[25px]"
        />
        Projects
      </h2>
      <div className="flex-1 p-5 flex flex-col gap-5">
        <Link
          href="https://bucket-list-eta.vercel.app"
          target="_blank"
          className=" bg-neutral-800 p-3 shadow-xl rounded-lg flex flex-col cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out max-lg:animate-none animate-rightTop"
        >
          <p className="text-lg font-semibold text-cyan-100/80">
            Buck50 {"–"} Personal Bucket List Web App
          </p>
          <div className="flex w-full gap-2">
            <div
              className="bg-neutral-700 shadow p-2 items-center justify-center rounded-lg shdow-xl"
              title="Next js"
            >
              <Icon
                icon="akar-icons:nextjs-fill"
                width="25"
                height="25"
                className="h-[25px] w-[25px] text-cyan-100/80"
              />
            </div>
            <div
              className="bg-neutral-700 shadow p-2 items-center justify-center rounded-lg shdow-xl"
              title="React"
            >
              <Icon
                icon="fa-brands:react"
                width="25"
                height="25"
                className="h-[25px] w-[25px] text-cyan-100/80"
              />
            </div>
            <div
              className="bg-neutral-700 shadow p-2 items-center justify-center rounded-lg shdow-xl"
              title="Tailwind CSS"
            >
              <Icon
                icon="flowbite:tailwind-solid"
                width="25"
                height="25"
                className="h-[25px] w-[25px] text-cyan-100/80"
              />
            </div>
            <div
              className="bg-neutral-700 shadow p-2 items-center justify-center rounded-lg shdow-xl"
              title="MongoDB"
            >
              <Icon
                icon="flowbite:mongo-db-solid"
                width="25"
                height="25"
                className="h-[25px] w-[25px] text-cyan-100/80"
              />
            </div>
          </div>
          <ul className="list-disc flex flex-col gap-2 px-5 py-4">
            <li className="text-white/80 text-sm">
              Built a full-stack bucket list app that lets users register, log
              in, and manage personal goals (add, edit, complete, delete).
            </li>
            <li className="text-white/80 text-sm">
              Designed a responsive, notebook-style UI using Tailwind CSS and
              deployed to Vercel.
            </li>
          </ul>
        </Link>
        <Link
          href="/projects/documents"
          className=" bg-neutral-800 p-3 shadow-xl rounded-lg flex flex-col cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out max-lg:animate-none animate-rightMiddle"
        >
          <p className="text-lg font-semibold text-cyan-100/80">
            Document Tracking System - Internship Project
          </p>
          <div className="flex w-full gap-2">
            <div
              className="bg-neutral-700 shadow p-2 items-center justify-center rounded-lg shdow-xl"
              title="Vue js"
            >
              <Icon
                icon="flowbite:vue-solid"
                width="25"
                height="25"
                className="h-[25px] w-[25px] text-cyan-100/80"
              />
            </div>
            <div
              className="bg-neutral-700 shadow p-2 items-center justify-center rounded-lg shdow-xl"
              title="Laravel"
            >
              <Icon
                icon="flowbite:laravel-solid"
                width="25"
                height="25"
                className="h-[25px] w-[25px] text-cyan-100/80"
              />
            </div>
            <div
              className="bg-neutral-700 shadow p-2 items-center justify-center rounded-lg shdow-xl"
              title="Tailwind CSS"
            >
              <Icon
                icon="flowbite:tailwind-solid"
                width="25"
                height="25"
                className="h-[25px] w-[25px] text-cyan-100/80"
              />
            </div>
            <div
              className="bg-neutral-700 shadow p-2 items-center justify-center rounded-lg shdow-xl"
              title="MySQL"
            >
              <Icon
                icon="lineicons:mysql"
                width="25"
                height="25"
                className="h-[25px] w-[25px] text-cyan-100/80"
              />
            </div>
          </div>
          <ul className="list-disc flex flex-col gap-2 px-5 py-4">
            <li className="text-white/80 text-sm">
              Built a document tracking web app that tracks a physical document
              via serial code.
            </li>
            <li className="text-white/80 text-sm">
              Integrated document routing, tracking history, and audit logs.
            </li>
          </ul>
        </Link>
        <Link
          href="/projects/employees"
          className=" bg-neutral-800 p-3 shadow-xl rounded-lg flex flex-col cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out max-lg:animate-none animate-rightBottom"
        >
          <p className="text-lg font-semibold text-cyan-100/80">
            Employee Management System - Capstone
          </p>
          <div className="flex w-full gap-2">
            <div
              className="bg-neutral-700 shadow p-2 items-center justify-center rounded-lg shdow-xl"
              title="Javascript"
            >
              <Icon
                icon="fa-brands:js-square"
                width="25"
                height="25"
                className="h-[25px] w-[25px] text-cyan-100/80"
              />
            </div>
            <div
              className="bg-neutral-700 shadow p-2 items-center justify-center rounded-lg shdow-xl"
              title="PHP"
            >
              <Icon
                icon="file-icons:php"
                width="25"
                height="25"
                className="h-[25px] w-[25px] text-cyan-100/80"
              />
            </div>
            <div
              className="bg-neutral-700 shadow p-2 items-center justify-center rounded-lg shdow-xl"
              title="Bootstrap"
            >
              <Icon
                icon="fa-brands:bootstrap"
                width="25"
                height="25"
                className="h-[25px] w-[25px] text-cyan-100/80"
              />
            </div>
            <div
              className="bg-neutral-700 shadow p-2 items-center justify-center rounded-lg shdow-xl"
              title="MySQL"
            >
              <Icon
                icon="lineicons:mysql"
                width="25"
                height="25"
                className="h-[25px] w-[25px] text-cyan-100/80"
              />
            </div>
          </div>
          <ul className="list-disc flex flex-col gap-2 px-5 py-4">
            <li className="text-white/80 text-sm">
              Developed a web system for managing employee records and leave
              credits for a local government unit. Implemented structured file
              uploads, dynamic record display, generate printable
              documents(Personal Data Sheet, Statement of Assets, Liabilities,
              and Net Worth), and admin-level controls.
            </li>
          </ul>
        </Link>
      </div>
    </div>
  )
}

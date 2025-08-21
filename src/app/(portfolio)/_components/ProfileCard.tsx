"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Icon } from "@iconify/react"
import Link from "next/link"

export default function ProfileCard() {
  return (
    <div className="w-full h-auto  max-lg:h-auto flex flex-col bg-neutral-800/10 rounded-xl shadow shadow-cyan-100/70 p-5 max-lg:animate-none animate-topleft">
      <div className="flex gap-4">
        <Avatar className="w-25 h-25 rounded-lg shadow-md">
          <AvatarImage src="/jb.png" alt="profile-picture" />
          <AvatarFallback>JB</AvatarFallback>
        </Avatar>
        <div className="flex flex-col font-inter">
          <h2 className="text-2xl font-semibold text-cyan-100">Brent</h2>
          <p className="text-sm flex gap-1 items-center text-white/90 italic">
            <Icon
              icon="ic:baseline-location-on"
              width="17"
              height="17"
              className="text-cyan-100/80"
            />
            From the Philippines
          </p>
          <p className="text-sm flex gap-1 items-center text-white/90 italic">
            {" "}
            <Icon
              icon="game-icons:graduate-cap"
              width="17"
              height="17"
              className="text-cyan-100/80"
            />
            Fresh Graduate
          </p>
          <p className="text-sm flex gap-1 text-white/90 italic">
            {" "}
            <Icon
              icon="iconamoon:profile-fill"
              width="17"
              height="17"
              className="text-cyan-100/80"
            />
            21 y/o
          </p>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap w-full items-center justify-center">
        <p className="font-inter text-sm text-white/90 tracking-wider">
          Hello! I am a fresh graduate aspiring to become a FullStack Developer.
          During my internship, I worked with Vue.js and Laravel, gaining
          practical experience in real-world projects. Outside of that, I have
          focused primarily on React and Next.js, which I have used extensively
          in personal projects.{" "}
        </p>
      </div>
      <div className="mt-3 flex gap-2 items-center justify-end">
        <a href="/brent.pdf" target="_blank" title="Download Resume">
          <Icon
            icon="mdi:file-document"
            width="40"
            height="40"
            className="text-cyan-100/80 hover:text-cyan-100 hover:scale-120 transition-all duration-300 ease-in"
          />
        </a>
        <Link
          href="https://web.facebook.com/justine.brent.mendoza.2025"
          target="_blank"
          title="Facebook Profile"
        >
          <Icon
            icon="mdi:facebook"
            width="40"
            height="40"
            className="text-cyan-100/80 hover:text-cyan-100 hover:scale-120 transition-all duration-300 ease-in"
          />
        </Link>
        <Link
          href="https://github.com/Brent-Mendoza"
          target="_blank"
          title="GitHub Profile"
        >
          <Icon
            icon="mdi:github"
            width="40"
            height="40"
            className="text-cyan-100/80 hover:text-cyan-100 hover:scale-120 transition-all duration-300 ease-in"
          />
        </Link>
      </div>
    </div>
  )
}

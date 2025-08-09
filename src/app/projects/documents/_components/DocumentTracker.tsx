"use client"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Icon } from "@iconify/react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
export default function DocumentTracker() {
  const path = usePathname()
  return (
    <div className="w-full flex flex-col shadow shadow-cyan-100 font-inter rounded-xl bg-neutral-900/10 animate-fadeIn">
      <Menubar className="bg-transparent text-cyan-100/70 font-semibold border-0 flex gap-2">
        <MenubarMenu>
          <Link
            href="/"
            className="text-cyan-100 hover:text-cyan-200 transition-colors duration-300"
          >
            <Icon icon="mdi:home" width="24" height="24" />
          </Link>
        </MenubarMenu>
        <MenubarSeparator />
        <MenubarMenu>
          <MenubarTrigger
            className="
    data-[state=open]:bg-neutral-500/20
    data-[state=open]:text-cyan-200
    transition-colors duration-300
  "
          >
            <Icon
              icon="eos-icons:project"
              width="24"
              height="24"
              className="text-cyan-100 hover:text-cyan-200 transition-colors duration-300 cursor-pointer"
            />
          </MenubarTrigger>
          <MenubarContent className="bg-neutral-900 text-cyan-100/80">
            <MenubarItem disabled={path === "/projects/documents"}>
              <Link href="/projects/documents" className="font-inter">
                Document Tracking System
              </Link>
            </MenubarItem>
            <MenubarItem>
              <Link href="/projects/employees" className="font-inter">
                Employee Record Management System
              </Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <h1 className="self-center text-2xl font-semibold text-cyan-100">
        Document Tracking System
      </h1>
      <div className="flex flex-col items-center justify-center gap-5 p-5">
        <div className="w-full flex flex-col gap-2 bg-neutral-800/70 p-2 shadow-xl">
          <div className="relative w-full aspect-[4/2]">
            <Image
              src="/documentss.png"
              alt="Document Tracking System"
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-inter text-cyan-100/70">
              What is DOCX-HUNTER?
            </h2>
            <p className="text-white/90 font-inter tracking-wider text-justify max-md:text-sm">
              Doc-x Hunter was developed with the goal of streamlining
              document-related workflows while ensuring robust security,
              accountability, and real-time accessibility. Through clearly
              defined user roles, secure login mechanisms, document tagging, and
              comprehensive search and tracking features, the system empowers
              organizations to manage hard copy documents more effectively.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 bg-neutral-800/70 p-2 shadow-xl">
          <div className="relative w-full aspect-[4/2]">
            <Image
              src="/documentss2.png"
              alt="Routing Document Form"
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-inter text-cyan-100/70">
              How does it track and route documents?
            </h2>
            <p className="text-white/90 font-inter tracking-wider text-justify max-md:text-sm">
              The system tracks documents by assigning unique identifiers to
              each document, allowing users to log and monitor their movement
              within the organization. Users can route a document by providing
              their information inside the form and sending them to another
              user.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 bg-neutral-800/70 p-2 shadow-xl">
          <div className="relative w-full aspect-[4/2]">
            <Image
              src="/documentss3.png"
              alt="Tracking Form"
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-inter text-cyan-100/70">
              What does it track overall?
            </h2>
            <p className="text-white/90 font-inter tracking-wider text-justify max-md:text-sm">
              The system tracks the movement of physical documents within an
              organization, providing a comprehensive overview of document
              status, location, and history. It allows users to search for
              documents by various criteria, such as tags, dates, and document
              types, ensuring quick and efficient retrieval of information. The
              system also maintains a detailed log of document movements,
              including routing and receiving times, user actions, and any
              modifications made to the {`document's`} status. This tracking
              capability enhances accountability and transparency in document
              management processes, making it easier to monitor the lifecycle of
              each document from creation to final disposition.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

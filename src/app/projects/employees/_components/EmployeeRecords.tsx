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
export default function EmployeeRecords() {
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
          <MenubarTrigger>
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
            <MenubarItem disabled={path === "/projects/employees"}>
              <Link href="/projects/employees" className="font-inter">
                Employee Record Management System
              </Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <h1 className="self-center text-2xl font-semibold text-cyan-100">
        Employee Record Management System
      </h1>
      <div className="flex flex-col items-center justify-center gap-5 p-5">
        <div className="w-full flex flex-col gap-2 bg-neutral-800/70 p-2 shadow-xl">
          <div className="relative w-full aspect-[4/2]">
            <Image
              src="/employeess.png"
              alt="Employee Management System"
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-inter text-cyan-100/70">
              What is the ERMS?
            </h2>
            <p className="text-white/90 font-inter tracking-wider text-justify max-md:text-sm">
              The Employee Record Management System (ERMS) is a web-based
              application designed to streamline the management of employee
              records within an organization. It provides a centralized platform
              for storing, accessing, and managing employee information,
              including personal details, employment history, performance
              evaluations, and other relevant data. The ERMS allows HR personnel
              to efficiently track employee records, ensuring compliance with
              legal and regulatory requirements while enhancing data security
              and accessibility.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 bg-neutral-800/70 p-2 shadow-xl">
          <div className="relative w-full aspect-[4/2]">
            <Image
              src="/employeess2.png"
              alt="Work Experience Form"
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-inter text-cyan-100/70">
              What data does it specifically store?
            </h2>
            <p className="text-white/90 font-inter tracking-wider text-justify max-md:text-sm">
              The ERMS mainly focuses on {`employees'`} personal data sheet data
              and statement of assets and liabilities. It includes essential
              information such as employee names, contact details, job titles,
              department affiliations, employment dates, performance reviews,
              and any other relevant data that helps in managing employee
              records effectively. The system ensures that this information is
              securely stored and easily retrievable for HR personnel and
              authorized users.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 bg-neutral-800/70 p-2 shadow-xl">
          <div className="relative w-full aspect-[4/2]">
            <Image
              src="/employeess3.png"
              alt="Printing form"
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-inter text-cyan-100/70">
              Can you print your PDS and SALN through the system?
            </h2>
            <p className="text-white/90 font-inter tracking-wider text-justify max-md:text-sm">
              Yes, the ERMS provides functionality to print the Personal Data
              Sheet (PDS) and Statement of Assets, Liabilities, and Net Worth
              (SALN) directly from the system. This feature allows HR personnel
              and employees to generate hard copies of these important documents
              as needed, ensuring that they are readily available for official
              purposes or personal records.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

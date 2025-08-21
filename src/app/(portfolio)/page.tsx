import EducationCard from "./_components/EducationCard"
import ProfileCard from "./_components/ProfileCard"
import WorkXpCard from "./_components/WorkXpCard"
import TechStackCard from "./_components/TechStackCard"
import ProjectCard from "./_components/ProjectCard"
import ContactMeCard from "./_components/ContactMeCard"

export default function Home() {
  return (
    <div className="flex-1 p-10 flex max-lg:flex-col items-stretch bg-neutral-900 bg-blend-multiply justify-center gap-5">
      {/* LEFT SIDE */}
      <section className="w-full max-lg:w-full text-white flex flex-col gap-5">
        {/* Profile Section */}
        <ProfileCard />
        {/* Edcuation Section */}
        <EducationCard />
        {/* WorkXp Section */}
        <WorkXpCard />
      </section>
      {/* MIDDLE SIDE */}
      <section className="w-full max-lg:w-full flex flex-col gap-5">
        {/* TechStack Section */}
        <TechStackCard />
        <div className="flex-1 flex items-center bg-neutral-800/10 rounded-xl shadow shadow-cyan-100/70 max-lg:hidden p-5 justify-center">
          <div>
            <h1 className="text-6xl font-inter font-semibold text-cyan-100 tracking-wide">
              Brent Mendoza
            </h1>
            <p className="text-2xl font-inter text-cyan-100 tracking-wider">
              FullStack Developer
            </p>
          </div>
        </div>
        {/* ContactMe Section */}
        <ContactMeCard />
      </section>
      {/* RIGHT SIDE */}
      <section className="w-full max-lg:w-full text-white ">
        {/* ProjectCard Section */}
        <ProjectCard />
      </section>
    </div>
  )
}

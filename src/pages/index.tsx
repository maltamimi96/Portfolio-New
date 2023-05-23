import About from "@/components/About"
import ContactMe from "@/components/Contact/ContactMe"
import Header from "@/components/Header"
import Hero from "@/components/Hero/Hero"
import Projects from "@/components/Projects/Projects"
import Skills from "@/components/Skills/Skills"
import WorkExperience from "@/components/WorkExperience/WorkExperience"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <main className="bg-gray-900 text-white h-screen snap-y snap-mandatory scroll-smooth overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-cyan-500 overflow-x-hidden ">
        <Head>
          <title>Mohammad Altamimi Portfolio</title>
        </Head>

        <Header />
        {/* Header */}

        <section id="hero" className=" snap-start">
          <Hero />
        </section>
        <section id="about" className="snap-center">
          <About />
        </section>
        <section id="skills" className="snap-start scroll-smooth">
          <Skills />
        </section>
        <section id="projects" className="snap-start scroll-smooth">
          <Projects />
        </section>
        <section id="contact" className="snap-start scroll-smooth">
          <ContactMe />
        </section>
      </main>
    </>
  )
}

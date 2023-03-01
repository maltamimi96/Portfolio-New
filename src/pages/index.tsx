import About from "@/components/About"
import Header from "@/components/Header"
import Hero from "@/components/Hero/Hero"
import WorkExperience from "@/components/WorkExperience/WorkExperience"
import { Inter } from "next/font/google"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <main className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory scroll-smooth overflow-scroll z-0  ">
        <Head>
          <title>Portfolio</title>
        </Head>

        <Header />
        {/* Header */}

        <section id="hero" className=" snap-start">
          <Hero />
        </section>
        <section id="about" className="snap-center">
          <About />
        </section>
        <section id="experience" className="snap-center scroll-smooth">
          <WorkExperience />
        </section>
      </main>
    </>
  )
}

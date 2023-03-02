import React from "react"
import { Project } from "./Project"
import { motion } from "framer-motion"

type Props = {}

const Projects = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col md:flex-row max-w-full justify-evenly mx-auto items-center z-0 text-left">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative  w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-cyan-500  ">
        <Project />
        <Project />

        <Project />
      </div>
      <div className="w-full absolute top-[20%] bg-cyan-500/10 left-0 h-[600px] -skew-y-12" />
    </motion.div>
  )
}

export default Projects

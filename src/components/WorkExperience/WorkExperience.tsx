import React from "react"
import ExCard from "./ExCard"
import { motion } from "framer-motion"

type Props = {}

const WorkExperience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative h-screen   flex flex-col text-left md:flex-row max-w-full px-6 justify-evenly mx-auto
     items-center overflow-hidden ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex mt-40 py-10 space-x-5  snap-x snap-mandatory  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-cyan-500 ">
        <ExCard />
        <ExCard />
        <ExCard />
        <ExCard />

        <ExCard />
      </div>
    </motion.div>
  )
}

export default WorkExperience

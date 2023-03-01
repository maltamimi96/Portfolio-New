import React from "react"
import ExCard from "./ExCard"

type Props = {}

const WorkExperience = (props: Props) => {
  return (
    <div
      className="relative h-screen overflow-hidden flex flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto
     items-center ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex mt-40 space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-cyan-500 ">
        <ExCard />
        <ExCard />
        <ExCard />
      </div>
    </div>
  )
}

export default WorkExperience

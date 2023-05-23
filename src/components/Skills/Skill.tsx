import React from "react"
import { motion } from "framer-motion"

type Props = {
  directionLeft?: boolean
  image: string
  percentages: number
}

function Skill({ directionLeft, image, percentages }: Props) {
  return (
    <div className="group relative flex cursor-pointer ">
      <motion.img
        className="w-20 h-20 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full object-cover object-center filter group-hover:grayscale transition duration-300 ease-in-out "
        src={image}
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-out-out group-hover:bg-white rounded-full z-0 h-20 w-20 md:h-28 md:w-28 xl:h-32 xl:w-32 ">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100 ">
            {percentages}%
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skill

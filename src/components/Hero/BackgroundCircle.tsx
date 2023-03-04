import React from "react"
import { motion } from "framer-motion"

type Props = {}

const BackgroundCircle = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center">
      <div className="absolute border border-[#333333] rounded-full w-32 h-32  md:h-[200px] md:w-[200px]  animate-pulse mt-52  delay-1000" />
      <div className="absolute border border-[#333333] rounded-md w-44 h-44 md:h-[300px] md:w-[300px]  animate-pulse mt-52 skew-y-6 delay-1000" />
      <div />
      <div className="absolute border border-[#333333] rounded-xl h-52 w-52 md:h-[500px] md:w-[500px]  animate-pulse mt-52 delay-500 skew-y-12" />
      <div className="rounded-lg border border-cyan-800/50 w-64 h-64 md:h-[650px] md:w-[650px] absolute mt-52 animate-pulse opacity-20 skew-y-6 delay-500 " />

      <div className="rounded-lg border border-cyan-800/50 w-64 h-64 md:h-[600px] md:w-[600px] absolute mt-52 animate-pulse -skew-y-12 delay-500" />
    </motion.div>
  )
}

export default BackgroundCircle

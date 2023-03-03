import React from "react"
import { motion } from "framer-motion"

type Props = {}

export const Project = (props: Props) => {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen   ">
      <motion.img
        initial={{ y: -300, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="mx-auto w-fit h-32 md:h-64"
        src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
      />
      <div className="space-y-10 px-0 md:px-10 max-w-6xl mx-auto">
        <h4 className="text-4xl font-semibold text-center">
          Case Study 1 of 3
        </h4>
        <p className="text-lg text-center md:text-left ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
          impedit molestias, sit exercitationem cum laudantium itaque sed iste
        </p>
      </div>
    </div>
  )
}

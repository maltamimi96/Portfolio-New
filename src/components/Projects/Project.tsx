import React from "react"
import { motion } from "framer-motion"

type Props = {}

export const Project = (props: Props) => {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen   ">
      <motion.img
        initial={{ y: -300, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="mx-auto max-h-[400px]"
        src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
      />
      <div className="space-y-10 px-0 md:px-10 max-w-6xl mx-auto">
        <h4 className="text-4xl font-semibold text-center">
          Case Study 1 of 3
        </h4>
        <p className="text-lg text-center md:text-left ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
          impedit molestias, sit exercitationem cum laudantium itaque sed iste
          consequatur iusto, aspernatur similique quasi nesciunt labore omnis
          vel optio rem possimus nobis! Quibusdam, quaerat ut, unde expedita
          maiores doloremque dolores aliquid quis temporibus eos, non itaque
          commodi laboriosam inventore ratione aut.
        </p>
      </div>
    </div>
  )
}

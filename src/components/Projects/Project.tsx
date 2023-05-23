import React from "react"
import { motion } from "framer-motion"

type Props = {
  img: string
  title: string
  description: string[]
  link: string
}

export const Project = (props: Props) => {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen   ">
      <motion.img
        initial={{ y: -300, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className=" rounded-lg h-[14rem]   md:h-[22rem]  "
        src={props.img}
      />
      <div className=" px-0 md:px-10 max-w-6xl mx-auto space-y-4">
        <h4 className=" text-2xl md:text-4xl font-semibold  tracking-widest text-center">
          {props.title}
        </h4>
        <ul className="text-md text-center md:text-left ">
          {props.description?.map((item, index) => (
            <li key={index}>-{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

import React from "react"
import { motion } from "framer-motion"

function ExCard() {
  return (
    <article className="flex flex-col rounded-lg items-center   space-y-7 flex-shrink-0  w-full md:w-[600px] xl:w-[900px] snap-center bg-gray-800  hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200   p-10 overflow-hidden ">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="h-32 w-32 rounded-full md:h-64 md:w-64"
        src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
      <div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light"> Job Title</h4>
        <p className="font-bold text-2xl mt-1">Company</p>
        <div className="flex space-x-2 my-2">
          <img
            src="https://images.unsplash.com/photo-1555952494-efd681c7e3f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGpzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
            className="h-10 w-10 rounded-full"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">started work....</p>
        <ul
          className="list-disc space-y-4 ml-5 text-lg
        ">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          </li>{" "}
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          </li>
        </ul>
      </div>
    </article>
  )
}

export default ExCard

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
      className="h-screen relative flex overflow-hidden flex-col  max-w-full justify-evenly mx-auto items-center z-0 text-left">
      <div className="text-center my-4 md:my-8 ">
        <h3 className=" uppercase tracking-[20px] text-gray-500 text-2xl">
          Projects
        </h3>
      </div>
      <div className=" flex flex-row w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-cyan-500">
        {/* Project components */}
        <Project
          img="https://firebasestorage.googleapis.com/v0/b/msamowing-f8bb5.appspot.com/o/demo.png?alt=media&token=0353693d-6e64-4483-8ed7-5e68fbe1e7f7"
          description={[
            "Admin Dashboard: Secure web app for lawn mowing business built with React and Firebase.",
            "Manage: Customer info, orders, and invoices.",
            "Easy customer management: Add, delete, update, view details.",
            "Analytics: Visual charts for revenue, expenses, customer trends.",
            "Functionality: Calculate revenue, expenses, generate invoices.",
            "Firebase: Authentication, database storage.",
            "Streamlines operations, enhances financial management.",
          ]}
          title="Admin Dashboard"
          link=""
        />
        <Project
          img="https://firebasestorage.googleapis.com/v0/b/msamowing-f8bb5.appspot.com/o/trello.png?alt=media&token=62c9e737-1dde-4e10-9f59-fdc88f52a528&_gl=1*sbre7h*_ga*NjYzNDA1MC4xNjY1NTg1MjI1*_ga_CW55HF8NVT*MTY4NjU4NjkwOC40MS4xLjE2ODY1ODY5NzIuMC4wLjA."
          description={[
            "User-friendly interface",
            "Board organization",
            "Lists and cards",
            "Drag-and-drop functionality",
            "Search functionality",
            "Mobile and web accessibility",
          ]}
          title="Trello Clone"
          link=""
        />
      </div>
      <div className="w-full absolute top-[20%] bg-cyan-500/10 left-0 h-[400px] md:h-[600px] -skew-y-12" />
    </motion.div>
  )
}

export default Projects

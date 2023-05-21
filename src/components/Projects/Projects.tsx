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
      <div className=" w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-cyan-500 py-32  md:p-0 ">
        {/* Project components */}
        <Project
          img="https://firebasestorage.googleapis.com/v0/b/msamowing-f8bb5.appspot.com/o/demo.png?alt=media&token=0353693d-6e64-4483-8ed7-5e68fbe1e7f7"
          description="The Admin Dashboard for a lawn mowing business is a secure web application built with React and Firebase. It allows administrators to manage customer information, orders, and invoices. The dashboard offers easy customer management, including adding, deleting, updating, and viewing customer details. It provides analytics through visually appealing charts for revenue, expenses, and customer trends. The app also features functionality for calculating revenue and expenses, invoicing, and utilizes Firebase for authentication and database storage. Overall, the Admin Dashboard streamlines business operations, enhances financial management, and provides a comprehensive solution for the lawn mowing business."
          title="Admin Dashboard"
          link=""
        />
        <Project
          img="https://firebasestorage.googleapis.com/v0/b/msamowing-f8bb5.appspot.com/o/demo.png?alt=media&token=0353693d-6e64-4483-8ed7-5e68fbe1e7f7"
          description="The Admin Dashboard for a lawn mowing business is a secure web application built with React and Firebase. It allows administrators to manage customer information, orders, and invoices. The dashboard offers easy customer management, including adding, deleting, updating, and viewing customer details. It provides analytics through visually appealing charts for revenue, expenses, and customer trends. The app also features functionality for calculating revenue and expenses, invoicing, and utilizes Firebase for authentication and database storage. Overall, the Admin Dashboard streamlines business operations, enhances financial management, and provides a comprehensive solution for the lawn mowing business."
          title="Admin Dashboard"
          link=""
        />
        <Project
          img="https://firebasestorage.googleapis.com/v0/b/msamowing-f8bb5.appspot.com/o/demo.png?alt=media&token=0353693d-6e64-4483-8ed7-5e68fbe1e7f7"
          description="The Admin Dashboard for a lawn mowing business is a secure web application built with React and Firebase. It allows administrators to manage customer information, orders, and invoices. The dashboard offers easy customer management, including adding, deleting, updating, and viewing customer details. It provides analytics through visually appealing charts for revenue, expenses, and customer trends. The app also features functionality for calculating revenue and expenses, invoicing, and utilizes Firebase for authentication and database storage. Overall, the Admin Dashboard streamlines business operations, enhances financial management, and provides a comprehensive solution for the lawn mowing business."
          title="Admin Dashboard"
          link=""
        />
      </div>
      <div className="w-full absolute top-[20%] bg-cyan-500/10 left-0 h-[600px] -skew-y-12" />
    </motion.div>
  )
}

export default Projects

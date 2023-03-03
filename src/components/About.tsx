import { motion } from "framer-motion"

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:flex-row max-w-7xl md:text-left px-10 justify-evenly mx-auto  items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        about
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src={
          "https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        }
        className="-mb-32 md:mb-0 flex-shrink-0 w-56 h-56  rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]  object-cover "
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold ">
          A{" little "}
          <span className="text-gray-300 underline decoration-yellow-500 animate-pulse">
            background
          </span>
          about me
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          ullam error assumenda porro deserunt accusantium similique corporis
          perspiciatis explicabo! Fugit, aliquam doloremque voluptate amet culpa
          laudantium. Dignissimos magni dolor nihil ipsa est suscipit ad sed,
          magnam, corporis deleniti culpa sequi? Aliquam labore sequi sit quod
          veniam illum! Numquam, a et!
        </p>
      </div>
    </motion.div>
  )
}

export default About

import { motion } from "framer-motion"

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left  max-w-7xl px-10 justify-start mx-auto items-center ">
      <div className="text-center my-4 md:my-8 ">
        <h3 className=" uppercase tracking-[20px] text-gray-500 text-2xl">
          About
        </h3>
      </div>

      <div className="space-y-4 px-0 md:px-10">
        <div className="flex gap-2 flex-col md:flex-row">
          <div className="flex-shrink-0">
            <motion.img
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src={
                "https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              }
              className=" md:mb-0 flex-shrink-0  rounded-full object-cover w-40 h-40 mx-auto md:rounded-lg  xl:w-[500px] xl:h-[600px]"
            />
          </div>
          <div>
            <h4 className="text-4xl font-semibold mb-6  text-start ">
              A{" little "}
              <span className="text-gray-300 underline decoration-cyan-500 animate-pulse tracking-widest">
                background
              </span>
            </h4>
            <p className=" text-left tracking-wide text-xl  md:text-3xl  ">
              I am a passionate software developer experienced in various
              programming languages and methodologies. I thrive on
              problem-solving and continuous learning. My focus is on delivering
              high-quality, innovative solutions through clean and scalable
              code. I excel in collaborative environments and have a strong
              portfolio showcasing my technical expertise and user-friendly
              applications. Excited to contribute to the field of software
              development and take on new challenges.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About

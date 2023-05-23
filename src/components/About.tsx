import { motion } from "framer-motion"

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ">
      <h3 className=" absolute top-12 md:top-24  uppercase tracking-[20px] text-gray-500 text-2xl text-center  ">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src={
          "https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        }
        className="-mb-20 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-4 px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl font-semibold ">
          A{" little "}
          <span className="text-gray-300 underline decoration-cyan-500 animate-pulse tracking-widest">
            background
          </span>
        </h4>
        <p className=" tracking-wide  md:text-xl leading-loose ">
          I am a passionate software developer experienced in various
          programming languages and methodologies. I thrive on problem-solving
          and continuous learning. My focus is on delivering high-quality,
          innovative solutions through clean and scalable code. I excel in
          collaborative environments and have a strong portfolio showcasing my
          technical expertise and user-friendly applications. Excited to
          contribute to the field of software development and take on new
          challenges.
        </p>
      </div>
    </motion.div>
  )
}

export default About

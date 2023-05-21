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
        </h4>
        <p className="text-base tracking-wide text-xl">
          I am a passionate and dedicated software developer with a desire to
          create innovative and efficient solutions. I have experience in
          various programming languages, software development methodologies, and
          project management. My curiosity and love for problem-solving drive me
          to continuously learn and stay up-to-date with the latest technologies
          in the ever-evolving world of software development. With a focus on
          clean and scalable code, I am committed to delivering high-quality
          software solutions that exceed expectations. I thrive in collaborative
          environments, leveraging my strong communication skills to effectively
          work with cross-functional teams to deliver successful projects. My
          portfolio showcases a range of projects that highlight my technical
          expertise and demonstrate my ability to turn ideas into functional and
          user-friendly applications. I am excited to embark on new challenges
          and contribute to the ever-growing field of software development.
        </p>
      </div>
    </motion.div>
  )
}

export default About

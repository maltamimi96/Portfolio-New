import React from "react"
import { motion } from "framer-motion"
import Skill from "./Skill"

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" flex flex-col w-full text-center md:text-left  max-w-[2000px] xl:px-10 min-h-screen justify-start space-y-10 mx-auto items-center md:py-10 ">
      <div className="text-center my-4 md:my-6 ">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
          Skills
        </h3>
        <h3 className="  uppercase tracking-[3px] text-gray-500 text-sm">
          Hover over a skill for current proficiency
        </h3>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-5 md:gap-10 ">
        <Skill
          percentages={95}
          image="https://cdn-icons-png.flaticon.com/512/1532/1532556.png"
        />
        <Skill
          image="https://repository-images.githubusercontent.com/526345965/23034b2e-e185-4871-b686-80092d38eeb3"
          percentages={85}
        />
        <Skill
          percentages={79}
          image="https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg"
        />
        <Skill
          percentages={90}
          image="https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png"
        />
        <Skill
          percentages={89}
          image="https://yt3.googleusercontent.com/ikv41jMTr1uHGdILrJhvbfVJcDt4oqhwApKX37TjAleF_cRPbF2W-waj7uMnS5JySvnlvAlTCg=s900-c-k-c0x00ffffff-no-rj"
        />
        <Skill
          percentages={65}
          image="https://res.cloudinary.com/practicaldev/image/fetch/s--OBz5KyXu--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q41ofkh19js53kstmskv.png"
        />

        <Skill
          percentages={78}
          image="https://yt3.googleusercontent.com/GsP5Yvc5jOSop4SJf_75wdOYaEbO-7ZyYhnARodAGRnEMh-OQjGPGzUz2ZtzsHPtqFyHGvmbEtI=s900-c-k-c0x00ffffff-no-rj"
        />
        <Skill
          percentages={72}
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png"
        />
        <Skill
          percentages={85}
          image="https://www.typescripttutorial.net/wp-content/uploads/2020/04/favicon.png"
        />

        <Skill
          percentages={50}
          image="https://avatars.githubusercontent.com/u/4223"
        />
        <Skill
          percentages={65}
          image="https://plugins.jetbrains.com/files/6098/337493/icon/pluginIcon.png"
        />
        <Skill
          percentages={50}
          image="https://silksoftwarehouse.com/wp-content/uploads/2020/06/mongodb.svg"
        />
        <Skill
          percentages={60}
          image="https://sdtimes.com/wp-content/uploads/2020/04/1_oBm_3saYz4AI_MS6OekdFQ-490x197.png"
        />
        <Skill
          percentages={60}
          image="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
        />
        <Skill
          percentages={60}
          image="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        />
        <Skill
          percentages={95}
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png"
        />
      </div>
    </motion.div>
  )
}

export default Skills

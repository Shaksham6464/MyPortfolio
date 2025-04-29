import SingleSkill from "./SingleSkill";
import { FaHtml5, FaJava } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiMongoose, SiMysql, SiPython  } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";

import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaC } from "react-icons/fa6";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
 
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Java",
    icon: FaJava,
  },
  {
    skill: "Redux",
    icon: SiRedux,
  },
  {
    skill: "ExpressJs",
    icon: SiExpress,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "MogooseDB",
    icon: SiMongoose,
  },
  {
    skill: "Python",
    icon: SiPython,
  },
  {
    skills: "C ",
    icon: FaC,
  },
  {
    skill: "MySql",
    icon: SiMysql,
  },

];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-full mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
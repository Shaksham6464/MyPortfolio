import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiThealgorithms, SiTypescript } from "react-icons/si";
import { FaReact,FaJava } from "react-icons/fa";
import { SiRedux ,SiExpress,SiMongoose,SiPython,SiC,SiMysql} from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

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
     skill: "Java",
     icon: FaJava,
   },
   {
     skill: "ReactJS",
     icon: FaReact,
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
     skills: "C",
     icon: SiC,
   },
   {
     skill: "MySql",
     icon: SiMysql,
   },
  
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-black" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
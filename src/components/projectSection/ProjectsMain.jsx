import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Kanban board",
    year: "June 2025",
    align: "left",
    image: "public/Kanban.png",
    link: "https://github.com/Shaksham6464/Kanban.git",
  },
  {
    name: "Admin Dashboard",
    year: "May 2025",
    align: "right",
    image: "images/dashboard.png",
    link: "https://github.com/Shaksham6464/AdminDashboard.git",
  },
  {
    name: "MegaBlog Website",
    year: "March 2025",
    align: "left",
    image: "images/web1.png",
    link: "https://github.com/Shaksham6464/MegaBlog.git",
  },
  
 

 
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[600px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
import SingleExperience from "./SingleExperience";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "React JS Intern",
    company: "Celebal Technologies",
    date: "MAY-2025 - JULY-2025",
    responsibilities: [
      "Developed responsive and dynamic UI components using React.js and Tailwind CSS.",
      "Debugged and optimized frontend code for performance and usability.",
      "Used React Router for seamless page navigation and Firebase/Appwrite for backend integration in projects.",
"Integrated APIs and handled state management using tools like Zustand and React Context.",
    ],
  },
  {
    job: "Software Development Intern",
    company: "BlueStock FinTech",
    date: "DEC-2024 - JAN-2025",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
   

];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          < React.Fragment key={index}>
            <SingleExperience experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-black lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
           </React.Fragment>
        );
      })}
    </div>
  );
};

export default AllExperiences;
import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-black mb-10">About Me</h2>
      <p className="text-3xl text-center text-black">
      Hi, I’m an aspiring Full Stack Developer currently pursuing my BTech in Computer Science and Engineering at DIT University. I have a strong foundation in Data Structures and Algorithms, and a passion for building scalable, efficient web applications.

        Over time, I’ve developed a solid grasp of containerization with Docker and the principles of microservices architecture. I love tackling complex problems, learning new technologies, and collaborating on projects that make a real impact.

        I’m excited to bring my skills into a dynamic environment where I can contribute to innovative software solutions, grow as a developer, and work alongside inspiring teams.

        When I’m not coding, you’ll probably find me exploring new tech trends, fine-tuning my skills, or working on personal projects.

        Let’s build something amazing together!
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-black hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
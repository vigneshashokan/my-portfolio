import { motion } from "framer-motion";
import WorkExperienceCard from "./WorkExperienceCard";
import { Experience } from "@/typings";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

type Props = {
  experiences: [Experience];
};

const WorkExperience = ({ experiences }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col md:flex-row relative h-screen max-w-full px-5 md:px-10 mx-auto justify-evenly items-center
      overflow-hidden text-left"
    >
      <div className="flex absolute top-16 md:top-24 uppercase tracking-[5px] md:tracking-[20px] text-gray-500 text-2xl lg:text-4xl">
        <div className="md:hidden p-1 mr-5">
          <BsFillArrowLeftCircleFill />
        </div>
        <h3>Experience</h3>
        <div className="md:hidden p-1 ml-3">
          <BsFillArrowRightCircleFill />
        </div>
      </div>
      <div
        className="w-screen mt-24 md:mt-0 md:w-full flex space-x-5 md:p-10 overflow-x-scroll snap-x snap-mandatory
        scrollbar scrollbar-thumb-[#F7AB0A]/80"
      >
        {experiences.map((exp, i) => (
          <WorkExperienceCard key={i} experience={exp} />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;

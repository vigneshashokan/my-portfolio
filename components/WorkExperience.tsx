import React from "react";
import { motion } from "framer-motion";
import WorkExperienceCard from "./WorkExperienceCard";
import { Experience } from "@/typings";

type Props = {
  experiences: [Experience];
};

const WorkExperience = ({ experiences }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 p-10 overflow-x-scroll snap-x snap-mandatory">
        {experiences.map((exp) => (
          <WorkExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;

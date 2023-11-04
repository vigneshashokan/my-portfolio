import Skill from "./Skill";
import { iconsMap } from "@/data/iconData";
import { motion } from "framer-motion";

type Props = {};

export default function Skills({}: Props) {
  const techStack = Object.entries(iconsMap);
  const techStackMap = new Map(techStack);
  const techStackArray = [techStackMap.entries()];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col xl:flex-row relative h-screen px-0 md:px-10 mx-auto justify-evenly items-center text-center md:text-left max-w-[2000px] xl:space-y-0"
    >
      <h3 className="absolute top-16 md:top-24 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      {/* <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a technology to see whether it was gained from my past work
        experience or from personal interest
      </h3> */}
      <div className="grid grid-cols-5 md:grid-cols-8 place-items-center mt-10 md:mt-0">
        {techStack.map((skill, i) => (
          <Skill key={i} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

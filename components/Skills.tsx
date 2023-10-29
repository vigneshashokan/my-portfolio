import Skill from "./Skill";
import { iconsMap } from "@/data/iconData";
import { motion } from "framer-motion";

type Props = {};

export default function Skills({}: Props) {
  const techStack = Object.entries(iconsMap);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      {/* <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a technology to see whether it was gained from my past work
        experience or from personal interest
      </h3> */}
      <div className="grid grid-cols-4 md:grid-cols-8 place-items-center mt-20 md:mt-0">
        {techStack.map((skill, i) => (
          <Skill key={i} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

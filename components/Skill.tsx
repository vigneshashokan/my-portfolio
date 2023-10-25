import { motion } from "framer-motion";
import React from "react";
import { Icon } from "@/typings";

type Props = {
  directionLeft?: boolean;
  skill: Icon;
};

export default function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="object-cover h-24 w-24 filter group-hover:grayscale ease-in-out text-7xl group-hover:text-gray-600 flex items-center justify-center"
      >
        <div>{skill[1]}</div>
      </motion.div>
      {/* <div className="absolute opacity-0 group-hover:opacity-40 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div> */}
    </div>
  );
}

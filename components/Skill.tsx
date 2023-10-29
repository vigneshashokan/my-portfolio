import { motion } from "framer-motion";
import React from "react";
import { Icon } from "@/typings";

type Props = {
  directionLeft?: boolean;
  skill: Icon;
};

export default function Skill({ skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <div
        className="object-cover h-12 w-12 xl:h-28 xl:w-28 group-hover:grayscale ease-in-out text-3xl md:text-7xl
         group-hover:text-gray-600 flex items-center justify-center"
      >
        <div>{skill[1]}</div>
      </div>
      {/* <div className="absolute opacity-0 group-hover:opacity-40 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div> */}
    </div>
  );
}

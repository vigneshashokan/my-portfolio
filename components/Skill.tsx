import React from "react";
import { Icon } from "@/typings";
import { Tooltip } from "react-tooltip";

type Props = {
  directionLeft?: boolean;
  skill: Icon;
};

export default function Skill({ skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <div
        data-tooltip-id="my-tooltip"
        data-tooltip-content={skill[0]}
        className="object-cover h-14 w-14 xl:h-28 xl:w-28 group-hover:grayscale ease-in-out text-4xl md:text-7xl
         group-hover:text-gray-600 flex items-center justify-center"
      >
        <div>{skill[1]}</div>
      </div>
      <div className="font-medium">
        <Tooltip
          id="my-tooltip"
          style={{
            backgroundColor: "#F7AB0A",
            color: "#292929",
            borderRadius: "7px",
          }}
        />
      </div>
    </div>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/typings";

type Props = { experience: Experience };

export default function WorkExperienceCard({ experience }: Props) {
  const {
    id,
    companyName,
    companyLogo,
    period,
    position,
    techLogos,
    jobDuties,
  } = experience;
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-start"
        src={companyLogo.src}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{companyName}</h4>
        <p className="text-2xl font-bold mt-1">{position}</p>
        <p className="uppercase text-gray-300">{period}</p>
        <div className="flex space-x-2 my-2">
          {techLogos.map((logo, i) => (
            <img
              key={i + 1}
              className="h-10 w-10 rounded-full"
              src={logo.src}
              alt=""
            />
          ))}
        </div>
        <ul className="list-disc space-y-4 ml-5 text-sm">
          {jobDuties.map((jd, i) => (
            <li key={i + 1}>{jd}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

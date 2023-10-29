import { motion } from "framer-motion";
import { Experience } from "@/typings";
import { iconsMap } from "@/data/iconData";

type Props = { experience: Experience };

export default function WorkExperienceCard({ experience }: Props) {
  const { companyName, companyLogo, period, position, techStack, jobDuties } =
    experience;
  return (
    <article
      className="flex flex-col items-center space-y-5 md:space-y-7 flex-shrink-0 w-screen md:w-[600px] xl:w-[900px] snap-center 
    bg-[#292929] p-7 md:p-10 md:opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="flex flex-row items-center"
      >
        <img
          className="w-24 h-24 md:w-32 md:h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-start"
          src={companyLogo.src}
        />
        <div className="pl-5">
          <code className="text-2xl md:text-4xl font-light">{companyName}</code>
          <p className="text-base md:text-2xl font-bold mt-1">{position}</p>
          <p className="text-gray-300 text-sm md:text-2xl">{period}</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="flex space-x-2 my-2"
      >
        {techStack.map((logo, i) => {
          return (
            <div key={i} className="text-2xl md:text-3xl">
              {Object.entries(iconsMap).filter((icon) => icon[0] == logo)[0][1]}
            </div>
          );
        })}
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="px-0 md:px-10"
      >
        <ul className="list-disc space-y-4 ml-5 text-sm text-justify">
          {jobDuties.map((jd, i) => (
            <li key={i + 1}>{jd}</li>
          ))}
        </ul>
      </motion.div>
    </article>
  );
}

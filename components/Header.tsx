import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LuMail } from "react-icons/lu";
import { BsDownload } from "react-icons/bs";
import { SiLinkedin, SiGithub } from "react-icons/si";
// import { Link } from "react-scroll";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center"
      >
        <a
          href="https://www.linkedin.com/in/vigneshashokan"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 text-[#808080] hover:text-white"
        >
          <SiLinkedin size={25} />
        </a>
        <a
          href="https://github.com/vigneshashokan"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 text-[#808080] hover:text-white"
        >
          <SiGithub size={25} />
        </a>
        <Link href="#contact">
          <div className="flex flex-row items-center text-[#808080] hover:text-white cursor-pointer px-3 text-md">
            <div className="cursor-pointer">
              <LuMail size={27} />
            </div>
            <p className="uppercase hidden md:inline-flex px-3">Get In Touch</p>
          </div>
        </Link>
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <div className="invisible md:visible cursor-pointer py-2 px-3 text-black font-bold bg-[#F7AB0A] hover:bg-[#F7AB0A]/60 rounded-full">
          <a
            href="/Vignesh_Ashokan_Resume_2022.pdf"
            download="Vignesh_Ashokan_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <button className="flex">
              <div className="pr-2">
                <BsDownload size={25} />
              </div>
              Download resume as .pdf
            </button>
          </a>
        </div>
      </motion.div>
    </header>
  );
}

import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { LuMail } from "react-icons/lu";
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
        <SocialIcon
          url="https://www.linkedin.com/in/vigneshashokan/"
          target="_blank"
          rel="noopener noreferrer"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/vigneshashokan"
          target="_blank"
          rel="noopener noreferrer"
          fgColor="gray"
          bgColor="transparent"
        />
        <Link href="#contact">
          <div className="flex flex-row items-center text-[#808080] cursor-pointer pl-5 text-md">
            <div className="cursor-pointer pr-2">
              <LuMail size={25} />
            </div>
            <p className="uppercase hidden md:inline-flex">Get In Touch</p>
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
        <div className="cursor-pointer py-2 px-3 border-2 border-[#808080] text-black font-bold bg-[#F7AB0A] rounded-md">
          <a
            href="/Vignesh_Ashokan_Resume_2022.pdf"
            download="Vignesh_Ashokan_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <button>Download resume as .pdf</button>
          </a>
        </div>
      </motion.div>
    </header>
  );
}

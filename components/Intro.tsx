import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { MapPinIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

type Props = {};

export default function Intro({}: Props) {
  const [text] = useTypewriter({
    words: ["Hello World!", "I'm Vignesh Ashokan.", "<Fullstack Developer/>"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 item-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://lh3.googleusercontent.com/pw/ADCreHfBHs5V-CuAuTj1yBjihS0mnCWwkQDh3chM56phKWtzJOMg2cFS2N3f1aRpeLbdu7OVOsGEdn7vJoXFe1swxQT4Bm7c113OldKzYA_NeTVkcLARlrz9=w2400"
        alt=""
        height={1080}
        width={1920}
      />
      <div className="z-20">
        <h2 className="text-lg uppercase text-gray-500 pb-2 tracking-[10px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Vancouver, BC, Canada</p>
          </div>
        </div>
        <div className="pt-5">
          <Link href="#about">
            <button className="introButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="introButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="introButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="introButton">Projects</button>
          </Link>
          <Link href="#contactme">
            <button className="introButton">Contact Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

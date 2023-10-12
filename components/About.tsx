import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:w-64 md:h-96 md:rounded-lg xl:w-[400px] xl:h-[500px]"
        src="https://lh3.googleusercontent.com/pw/ADCreHfqDWXOyrmYu0r4xmOPWeNG7n-UgLLmucundADduMxFg43exFgnAqZ2WfbRZAs_sUI7XesXy7Y6Y6UN1qWTjhm6LchfMgRMA-vJpVCduIgyB7H2VfcQ=w2400"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="space-y-10 px-0 md:px-10"
      >
        <h4 className="text-4xl font-semibold">Here's a little background</h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          non pharetra dolor, nec vehicula lacus. Cras orci risus, faucibus quis
          metus malesuada, dignissim euismod risus. Proin quis ligula tellus.
          Proin vel pulvinar ante. Fusce a purus mattis, semper lacus nec,
          tristique massa. Fusce fermentum semper purus, mattis ornare lorem.
          Pellentesque sed quam sagittis, commodo orci quis, malesuada risus.
          Morbi vitae augue sodales, ornare eros quis, mollis lacus. Quisque non
          ex vel est blandit malesuada. Ut nisl nunc, volutpat eget nisl sed,
          vulputate varius sapien. Aenean interdum mauris at lorem lacinia
          tincidunt. Quisque at aliquam lectus. Aliquam erat volutpat. In
          consequat.
        </p>
      </motion.div>
    </div>
  );
}

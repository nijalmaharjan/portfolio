"use client";
import React from "react";
import { motion } from "framer-motion";

const PageRevealer = () => {
  const letters = "WELCOME".split("");

  return (
    <motion.div
      className="fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center border border-black bg-white text-xl text-black"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{
        duration: 0.7,
        delay: 1.9,
        ease: [0.4, 0.0, 0.2, 1.0],
      }}
    >
      <motion.div
        className="flex"
        initial={{ x: 50 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {letters.map((letter, index) => (
          <motion.span
            className="ml-1 text-xl font-semibold"
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default PageRevealer;

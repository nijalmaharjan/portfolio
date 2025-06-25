import React from "react";
import { motion } from "framer-motion";
import { education, experience } from "@/app/assets";

const TimelineItem = ({ title, organization, date, index }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2, duration: 0.6 }}
    className="relative pb-4 pl-6"
  >
    <div className="absolute left-1 top-1 h-full w-0.5 bg-gray-500 opacity-60" />
    <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-black lg:bg-white" />
    <h4 className="font-semibold text-black lg:text-white">{title}</h4>
    <p className="text-gray-700 lg:text-gray-300">{organization}</p>
    <p className="text-sm text-gray-500">{date}</p>
  </motion.div>
);

const AboutContent = () => {
  return (
    <>
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="Analogist mx-auto mb-6 hidden w-fit text-3xl font-bold lg:flex"
      >
        ABOUT ME
      </motion.h2>
      <p className="mx-auto mb-10 max-w-xl text-justify text-sm opacity-80 lg:mb-20 lg:text-center">
        Driven by passion, charged by coffee. I am from Kathmandu, Nepal, and I
        love Creating Visual Stories.
      </p>
      <div className="flex w-full flex-col justify-evenly gap-6 md:flex-row lg:gap-0">
        <div>
          <h3 className="mb-5 text-xl font-bold">Education</h3>
          {[...education].reverse().map((item, index) => (
            <TimelineItem
              key={index}
              index={index}
              title={item.title}
              organization={item.institution}
              date={item.date}
            />
          ))}
        </div>

        <div>
          <h3 className="mb-5 text-xl font-bold">Work Experience</h3>
          {[...experience].reverse().map((item, index) => (
            <TimelineItem
              key={index}
              index={index}
              title={item.title}
              organization={item.company}
              date={item.date}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutContent;

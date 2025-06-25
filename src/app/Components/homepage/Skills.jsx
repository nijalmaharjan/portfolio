"use client";
import React, { useContext, useState } from "react";
import SectionWrapper from "../SectionWrapper";
import { FaReact, FaNode, FaAws, FaDocker } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  SiAdobepremierepro ,
  SiAdobeaftereffects,
  SiAdobephotoshop ,
  SiAdobeillustrator,
  SiAdobelightroom ,
  SiDavinciresolve,
  SiBlender ,
  SiFigma,
  SiCanva,
} from "react-icons/si";
import { CursorVariantContext } from "@/app/Contexts/CursorVariantContext";
import Header from "../Header";

const Skills = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { setCursorVariant } = useContext(CursorVariantContext);

  const skills = [
    // {
    //   name: "React",
    //   icon: <FaReact size={"100%"} />,
    // },
    {
      name: "Firebase",
      icon: <SiBlender  size={"100%"} />,
    },
    {
      name: "MySQL",
      icon: <SiAdobepremierepro  size={"100%"} />,
    },
    {
      name: "Next.js",
      icon: <SiAdobeaftereffects size={"100%"} />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiDavinciresolve size={"100%"} />,
    },
    {
      name: "TypeScript",
      icon: <SiAdobephotoshop  size={"100%"} />,
    },
    {
      name: "PostgreSQL",
      icon: <SiAdobeillustrator size={"100%"} />,
    },
    {
      name: "Figma",
      icon: <SiFigma size={"100%"} />,
    },
    {
      name: "MongoDB",
      icon: <SiAdobelightroom  size={"100%"} />,
    },
    {
      name: "Vercel",
      icon: <SiCanva size={"100%"} />,
    },
    // {
    //   name: "Node.js",
    //   icon: <FaNode size={"100%"} />,
    // },
    // {
    //   name: "AWS",
    //   icon: <FaAws size={"100%"} />,
    // },
    // {
    //   name: "Docker",
    //   icon: <FaDocker size={"100%"} />,
    // },
  ];

  return (
    <div className="Wrapper mb-20 overflow-hidden lg:mb-56">
      <Header heading="What I do" />

      <div
        onMouseEnter={() => {
          setIsHovered(true);
          setCursorVariant("text");
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setCursorVariant("default");
        }}
        className="relative mx-auto mt-10 flex w-[400px] overflow-hidden p-1 py-4 sm:w-[595px] md:w-[695px] lg:w-[855px] lg:py-10 xl:w-[1110px] 2xl:w-[1400px]"
      >
        <div
          className={`infinite-scroll flex ${isHovered ? "scroll-hover" : ""}`}
        >
          {skills.map((skill, index) => (
            <div
              className={`icon mx-6 h-[50px] w-[50px] flex-shrink-0 lg:mx-10 lg:h-[80px] lg:w-[80px]`}
              key={index}
            >
              {skill.icon}
            </div>
          ))}
        </div>
        <div
          className={`infinite-scroll flex ${isHovered ? "scroll-hover" : ""}`}
          aria-hidden="true"
        >
          {skills.map((skill, index) => (
            <div
              className="icon mx-6 h-[50px] w-[50px] flex-shrink-0 lg:mx-10 lg:h-[80px] lg:w-[80px]"
              key={index}
            >
              {skill.icon}
            </div>
          ))}
        </div>
        {/* fader */}
        <div className="fade-edges absolute inset-0"></div>
      </div>
      <p className="Analogist ml-auto mt-8 w-full text-justify text-xl font-semibold tracking-wider md:w-[400px] xl:w-[500px]">
        As a Video Editor, I work with various software tools to create engaging
        visual content. While my focus is on editing, I truly enjoy creating
        motion designs that bring ideas to life.
      </p>
    </div>
  );
};

export default Skills;

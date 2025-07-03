"use client";
import React, { useContext, useRef } from "react";
import SectionWrapper from "../SectionWrapper";
import { CursorVariantContext } from "@/app/Contexts/CursorVariantContext";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import Header from "../Header";
import AboutContent from "./AboutContent";

const About = () => {
  const { setCursorVariant } = useContext(CursorVariantContext);

  const parallaxTarget = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxTarget,
    offset: ["start end", "end start"],
  });

  const topParallax = useTransform(scrollYProgress, [0, 1], [-50, -150]);
  const bottomParallax = useTransform(scrollYProgress, [0, 1], [50, 150]);
  return (
    <>
      <SectionWrapper className="hidden items-center justify-center lg:flex">
        <div
          id="about"
          ref={parallaxTarget}
          onMouseEnter={() => setCursorVariant("about")}
          onMouseLeave={() => setCursorVariant("default")}
          className="Analogist relative flex h-[500px] w-fit items-center justify-center overflow-hidden text-3xl hover:cursor-none lg:text-[10rem] xl:text-[13rem]"
        >
          <motion.p
            style={{ y: topParallax }}
            className="STROKE-TEXT FADE-T0-BOTTOM absolute top-1/2 -translate-y-32 opacity-50"
          >
            ABOUT
          </motion.p>
          <p className="z-20 text-black">ABOUT</p>
          <motion.p
            style={{ y: bottomParallax }}
            className="STROKE-TEXT absolute bottom-1/2 translate-y-32 opacity-50"
          >
            ABOUT
          </motion.p>
          <p className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 pb-10 font-sans text-[0.6rem] text-gray-400">
            (Hover)
          </p>
          {/* to fadeout the background */}
          <div className="ABOUT-FADE absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2" />
        </div>
      </SectionWrapper>
      <SectionWrapper className={"my-16 lg:hidden"}>
        <Header heading={"ABOUT ME"} />
        <div className="mt-5 text-black">
          <AboutContent />
        </div>
      </SectionWrapper>
    </>
  );
};

export default About;

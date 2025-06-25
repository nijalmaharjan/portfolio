"use client";
import { variants } from "@/framer-motion-variants";
// import logo from "@/images/logo.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { Allura } from "next/font/google";
import Image from "next/image";
import { useContext, useRef, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { CursorVariantContext } from "../../Contexts/CursorVariantContext";
import SectionWrapper from "../SectionWrapper";
import { cn } from "@/lib/utils.js";
import { ArrowDown, ArrowRight, ChevronsRight, Download } from "lucide-react";

const bigFont = Allura({ subsets: ["latin"], weight: "400" });

function Hero() {
  const { setCursorVariant } = useContext(CursorVariantContext);
  const [isHoveredHireMe, setIsHoveredHireMe] = useState(false);
  const [isHoveredCV, setIsHoveredCV] = useState(false);

  const parallaxTarget = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxTarget,
    offset: ["end end", "end start"],
  });

  const smParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const mdParallax = useTransform(scrollYProgress, [0, 1], [0, -75]);
  const lgParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div ref={parallaxTarget} className="Wrapper">
      <nav className="flex w-full items-center justify-between py-7">
        <img src="/logo.png" alt="Logo" width={44} height={44} />
        <ul className="md:text-md text-md flex list-disc gap-10 pl-4 lg:pl-8">
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="relative mt-10 flex w-full flex-col-reverse items-center lg:flex-row lg:justify-center">
        {/* Left Section */}
        <div className="mt-10 text-center lg:mt-0 lg:w-1/3 lg:items-end lg:px-6 lg:text-left">
          <div className="max-w-[450px] lg:text-left">
            <motion.h1
              style={{ y: lgParallax }}
              className="mb-4 text-xl font-semibold"
              variants={variants.stack_1}
              initial="initial"
              animate="animate"
            >
              Hey👋 I am Nijal Maharjan.
            </motion.h1>
            <motion.p
              variants={variants.stack_2}
              initial="initial"
              animate="animate"
              className="text-md mb-3 text-justify xl:text-lg"
              style={{ y: mdParallax }}
            >
              I’m a creative Video Editor and Motion Designer, passionate about
              bringing ideas to life through engaging visuals. Let’s work
              together and turn your vision into reality.
            </motion.p>
            <motion.div
              variants={variants.stack_3}
              initial="initial"
              animate="animate"
              className="mt-8 flex justify-center gap-4 lg:justify-start"
              style={{ y: lgParallax }}
            >
              <motion.button
                className="group flex w-44 items-center justify-center gap-1 rounded-full border border-black bg-white px-6 py-2 ring ring-black"
                style={{ boxShadow: "5px 5px 0px 0px black" }}
                whileHover={{
                  boxShadow: "6px 7px 2px 0px black",
                  scale: 1.001,
                }}
                whileTap={{
                  boxShadow: "4px 4px 0px 0px black",
                  scale: 0.991,
                }}
                transition={{ duration: 0.2 }}
                onMouseEnter={() => setIsHoveredHireMe(true)}
                onMouseLeave={() => setIsHoveredHireMe(false)}
              >
                <motion.span
                  initial={{ x: 6 }}
                  animate={isHoveredHireMe ? { x: 0, opacity: 1 } : { x: 6 }}
                  transition={{ duration: 0.3 }}
                >
                  Hire me
                </motion.span>
                <span className="overflow-hidden">
                  <motion.div
                    initial={{ x: -6, opacity: 0 }}
                    animate={
                      isHoveredHireMe
                        ? { x: 0, opacity: 1 }
                        : { x: -6, opacity: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className="flex items-center"
                  >
                    <ChevronsRight size={16} />
                  </motion.div>
                </span>
              </motion.button>
              <motion.a
                href={`/Prajal Maharjan Resume.pdf`}
                download="Prajal Maharjan Resume.pdf"
                className="group flex w-44 cursor-none items-center justify-center gap-1 rounded-full border border-black bg-white px-6 py-2"
                style={{ boxShadow: "5px 5px 0px 0px black" }}
                whileHover={{
                  boxShadow: "6px 7px 2px 0px black",
                  scale: 1.001,
                }}
                whileTap={{
                  boxShadow: "4px 4px 0px 0px black",
                  scale: 0.991,
                }}
                transition={{ duration: 0.2 }}
                onMouseEnter={() => setIsHoveredCV(true)}
                onMouseLeave={() => setIsHoveredCV(false)}
              >
                <motion.span
                  initial={{ x: 6 }}
                  animate={isHoveredCV ? { x: 0, opacity: 1 } : { x: 6 }}
                  transition={{ duration: 0.3 }}
                >
                  Resume
                </motion.span>
                <span className="overflow-hidden">
                  <motion.div
                    initial={{ x: -6, opacity: 0 }}
                    animate={
                      isHoveredCV ? { x: 0, opacity: 1 } : { x: -6, opacity: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className="flex items-center"
                  >
                    <Download size={16} />
                  </motion.div>
                </span>
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Center Image */}
        <motion.div
          variants={variants.heroImage}
          initial="initial"
          animate="animate"
          className="relative mt-8 flex min-w-fit flex-1 justify-center pb-10 pr-10 xl:mt-10"
        >
          <motion.div className="relative">
            <motion.img
              src={"/images/potrait2.jpeg"}
              alt="Portrait"
              className="relative z-10 h-[320px] w-[220px] object-cover shadow-md drop-shadow-md md:h-[500px] md:w-[350px]"
              width={280}
              height={420}
              style={{ y: lgParallax }}
            />
            <motion.div
              variants={variants.heroImageShadow}
              initial="initial"
              animate="animate"
              className="absolute left-7 top-7 z-0 h-[320px] w-[220px] border-2 border-black md:h-[500px] md:w-[350px]"
              style={{ y: smParallax }}
            />
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div className="mt-8 hidden flex-1 text-center lg:mt-0 lg:block lg:px-6 lg:text-left">
          <ul className="space-y-2 text-lg">
            <a
              href="https://www.instagram.com/nijal.mhrzn/"
              target="_blank"
              className="instagram-gradient group flex w-fit items-center justify-center gap-1 space-x-2 rounded-full px-3 py-1 transition-all duration-300 ease-in-out lg:justify-start"
              variants={variants.stack_1}
              initial="initial"
              animate="animate"
              onMouseEnter={() => setCursorVariant("hide")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <FaInstagram size={20} />
              <p>Instagram</p>
            </a>

            <a
              href=""
              target="_blank"
              className="group flex w-fit items-center justify-center space-x-2 rounded-full px-3 py-1 transition-all duration-300 ease-in-out hover:bg-sky-700 hover:text-white lg:justify-start"
              variants={variants.stack_2}
              initial="initial"
              animate="animate"
              onMouseEnter={() => setCursorVariant("hide")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <FaLinkedin size={20} />
              <p>LinkedIn</p>
            </a>

            <a
              href="https://x.com/MaharjanNi18663"
              target="_blank"
              className="group flex w-fit items-center justify-center space-x-2 rounded-full px-3 py-1 transition-all duration-300 ease-in-out hover:bg-black hover:text-white lg:justify-start"
              variants={variants.stack_3}
              initial="initial"
              animate="animate"
              onMouseEnter={() => setCursorVariant("hide")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <FaGithub size={20} />
              <p>X</p>
            </a>
          </ul>
          {/* dfdf */}
        </motion.div>
      </div>
      {/* //testing */}
      {/* <div className="my-6 w-full lg:my-0 lg:mt-10">
        <div className="-pb-8 mx-auto w-fit">
          <motion.h2
            variants={variants.mainName}
            initial="initial"
            animate="animate"
            className={cn(
              bigFont.className,
              "mx-auto mb-0 w-fit font-light leading-none text-black",
            )}
            style={{ fontSize: "clamp(2rem, 12vw, 12rem)", y: lgParallax }}
            onMouseEnter={() => setCursorVariant("text")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            Prajal Maharjan
          </motion.h2>
          <motion.div
            style={{ y: mdParallax }}
            variants={variants.underText}
            initial="initial"
            animate="animate"
            className="flex items-center justify-center gap-2 text-center text-sm text-gray-800 lg:-mt-2 lg:text-2xl"
          >
            <span className="flex items-center">
              <IoLocationSharp size={20} />
              <h3>Kathmandu, Nepal</h3>
            </span>
          </motion.div>
        </div>
      </div> */}
    </div>
  );
}

export default Hero;

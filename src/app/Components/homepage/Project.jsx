"use client";
import React, { useContext, useRef } from "react";
import SectionWrapper from "../SectionWrapper";
import { useScroll, useTransform, motion } from "framer-motion";
import { CursorVariantContext } from "@/app/Contexts/CursorVariantContext";
import { useRouter } from "next/navigation";

const Project = ({
  title,
  description,
  image1,
  image2,
  image3,
  horizontalImage,
  index,
}) => {
  const { setCursorVariant } = useContext(CursorVariantContext);

  const parallaxTarget = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxTarget,
    offset: ["start end", "end start"],
  });

  const smParallax = useTransform(scrollYProgress, [0, 1], [0, -25]);
  const mdParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const lgParallax = useTransform(scrollYProgress, [0, 1], [0, -75]);
  const smZoomOut = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const smZoomIn = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);

  const fadeInTitle = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const fadeInDesc = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  const router = useRouter();

  return (
  <>
    <video src="/videos/project1.mp4"></video>
  </>
  );
};

export default Project;

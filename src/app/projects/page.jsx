"use client";
import React, { useContext, useEffect } from "react";
import { CursorVariantContext } from "../Contexts/CursorVariantContext";

const Projects = () => {
  const { setCursorVariant, setAnimateCursor } =
    useContext(CursorVariantContext);
  useEffect(() => {
    setAnimateCursor(false);
    setCursorVariant("default");

    setTimeout(() => {
      setAnimateCursor(true);
    }, 2000);
  }, []);
  return <div>Projectssss</div>;
};

export default Projects;

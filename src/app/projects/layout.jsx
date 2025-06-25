import React from "react";
import Navbar from "./components/Navbar";

const ProjectsLayout = ({ children }) => {
  return (
    <div className="Wrapper">
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default ProjectsLayout;

import React, { useState } from "react";
import SectionWrapper from "../SectionWrapper";
import Header from "../Header";
import { createPortal } from "react-dom";
import { videoData } from "@/videoLinks";

const ProjectsSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div
      id="projects"
      className="mb-20 w-full max-w-[1700px] space-y-20 px-4 md:px-8 lg:px-20"
    >
      <Header heading="MY WORKS" />

      {Object.entries(videoData).map(([section, videos]) => (
        // <SectionWrapper key={section}>
        <div className="px-10">
          <h2 className="Analogist mb-4 mt-20 text-center text-2xl font-semibold">
            {section}
          </h2>
          {/* <div className="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"> */}
          <div className="mb-14 grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-4">
            {videos.map((video, index) => (
              <video
                key={index}
                className="w-full max-w-[400px] cursor-pointer rounded-lg object-cover object-center"
                muted
                autoPlay
                loop
                playsInline
                onClick={() => setSelectedVideo(`${video}`)}
              >
                <source src={`${video}`} type="video/mp4" />
              </video>
            ))}
          </div>
        </div>
        // </SectionWrapper>
      ))}

      {selectedVideo &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
            onClick={() => setSelectedVideo(null)}
          >
            <video
              className="max-h-full max-w-full"
              src={selectedVideo}
              controls
              autoPlay
            />
          </div>,
          document.body,
        )}
    </div>
  );
};

export default ProjectsSection;

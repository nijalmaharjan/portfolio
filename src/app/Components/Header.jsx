import React from "react";

const Header = ({ heading,center }) => {
  return (
    <h2 className={`Analogist w-full text-4xl md:text-6xl 2xl:text-8xl ${center?"text-center":""}`}>
      {heading}
    </h2>
  );
};

export default Header;

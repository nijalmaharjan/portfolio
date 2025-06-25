import React from "react";

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between py-7">
      <img src="/logo.png" alt="Logo" width={44} height={44} />
      <ul className="md:text-md text-md flex list-disc gap-10 pl-4 lg:pl-8">
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;

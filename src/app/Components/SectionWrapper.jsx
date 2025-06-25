import { cn } from "@/lib/utils";
import React from "react";

const SectionWrapper = ({ children, className }) => {
  return (
    <section
      className={cn(
        className,
        "h-[90vh] max-h-[870px] min-h-[700px] w-full max-w-[1700px] px-6 md:px-8 lg:px-20",
      )}
    >
      {children}
    </section>
  );
};
// hello

export default SectionWrapper;

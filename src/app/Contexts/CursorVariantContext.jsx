"use client";
import { createContext, useState } from "react";

export const CursorVariantContext = createContext("default");

const CursorVariantProvider = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [animateCursor, setAnimateCursor] = useState(true);

  return (
    <CursorVariantContext.Provider
      value={{
        cursorVariant,
        setCursorVariant,
        setAnimateCursor,
        animateCursor,
      }}
    >
      {children}
    </CursorVariantContext.Provider>
  );
};

export default CursorVariantProvider;

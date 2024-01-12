import gsap from "gsap";
import React, { createContext, useContext, useRef, useState } from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <StateContext.Provider
      value={{
        drawerOpen,
        handleDrawerClose,
        handleDrawerOpen,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

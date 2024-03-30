import gsap from "gsap";
import React, { createContext, useContext, useRef, useState } from "react";
import MobileView from "../components/mobileview/MobileView"

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleOpenAndClose = () => {
    setDrawerOpen((prev)=>(!prev));
  };

  return (
    <StateContext.Provider
      value={{
        drawerOpen,
        handleOpenAndClose,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

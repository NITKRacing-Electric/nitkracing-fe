import { useEffect, useRef } from "react";
import useGsap from "../hooks/useGsap";
import gsap from "gsap";
import ToggleButton from "./toggle";
import { useStateContext } from "../context";

function Drawer() {
  const rootRef = useRef();
  const { drawerOpen, handleDrawerClose } = useStateContext();
  useGsap(rootRef.current, () => {});
  const height = drawerOpen ? "100vh" : "0";
  const opacity = drawerOpen ? 1 : 0;
  const translate = drawerOpen ? 50 : 0;

  useEffect(() => {
    if (!drawerOpen)
      gsap.set(".drawer-root .link", {
        x: 0,
        delay: 0.3,
      });
    gsap.to(rootRef.current, {
      height,
      duration: 0.1,
    });

    gsap.to(".drawer-root .link", {
      opacity: opacity,
      stagger: 0.1,
      duration: 1,
      delay: 0.1,
      ease: "expo.out",
    });
  }, [drawerOpen]);

  return (
    <div
      ref={rootRef}
      className={`drawer-root h-0 w-full z-50 fixed bg-black overflow-hidden transition-all duration-500`}
    >
      <div className="py-10" />

      <div className="flex flex-col">
        <BigLink label="Crowdfunding" to="/crowdfunding" />
        <BigLink label="Gallery" to="/gallery" />

        <BigLink label="Sponsors" to="/sponsors" />

        <BigLink label="About" to="/about" />

        <BigLink label="Contact" to="/contact" />
      </div>
      <div className="pl-8 md:pl-20">
        <ToggleButton handleClick={handleDrawerClose} />
      </div>
    </div>
  );
}

function BigLink({ label, to }) {
  return (
    <a href={to}>
      <h1 className="link opacity-100 text-5xl md:text-6xl pl-10 md:pl-20 py-5 font-[outfit] font-bold tracking-normal transition-all hover:bg-red-600 hover:text-red-950 hover:tracking-[0.5rem]">
        {label}
      </h1>
    </a>
  );
}

export default Drawer;

import { useLayoutEffect } from "react";
import gsap from "gsap";

const useGsap = (container, cb) => {
  useLayoutEffect(() => {
    let ctx = gsap.context(cb, container);
    return () => ctx.revert();
  }, []);
};

export default useGsap;

import gsap from "gsap";
import { ANIMATIONS } from "./index";
import ScrollTrigger from "gsap/ScrollTrigger";

const animations = {
  title: {
    from: { x: -100, opacity: 0 },
    to: { x: 0, opacity: 1, duration: 1, delay: 0.2, ease: "expo.out" },
  },
  subtitle: {
    from: { x: -100, opacity: 0 },
    to: { x: 0, opacity: 1, duration: 1, ease: "expo.out" },
  },
  heading: (gsap, trigger) => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        toggleActions: "restart pause restart reverse",
      },
    });
    tl.fromTo(".G_Subtitle", ANIMATIONS.subtitle.from, ANIMATIONS.subtitle.to);
    tl.fromTo(".G_Title", ANIMATIONS.title.from, ANIMATIONS.title.to, "<");
  },
};

export default animations;

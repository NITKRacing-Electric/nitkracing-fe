import gsap from "gsap";
import { ANIMATIONS } from "./index";
import ScrollTrigger from "gsap/ScrollTrigger";
const dur = gsap.utils.random(0.1, 1, 0.2);
const colors = ["blue", "red", "black"];

const animations = {
  title: {
    from: { x: -100, opacity: 0 },
    to: { x: 0, opacity: 1, duration: 1, delay: 0.2, ease: "expo.out" },
  },
  subtitle: {
    from: { x: -100, opacity: 0 },
    to: { x: 0, opacity: 1, duration: 1, ease: "expo.out" },
  },
  appear: {
    from: { opacity: 0 },
    to: { opacity: 1, duration: 1, ease: "expo.out" },
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
  appearStagger: (gsap, trigger, target) => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      target,
      { opacity: 0, y: "-100" },
      {
        opacity: 1,
        y: "0",
        scrollTrigger: {
          trigger: trigger,
          toggleActions: "restart pause restart reverse",
        },
        stagger: 0.2,
        ease: "expo.out",
        duration: "1",
      }
    );
  },
  emerge: (gsap, trigger, target) => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      target,
      { y: "100", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: trigger,
        },
        stagger: 0.2,
        ease: "expo.out",
        duration: "1",
        delay: "0.5",
      }
    );
  },
  fromBelow: (gsap, trigger, target) => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      target,
      { opacity: 0, y: "100" },
      {
        opacity: 1,
        y: "0",
        scrollTrigger: {
          trigger: trigger,
          toggleActions: "restart pause restart reverse",
        },
        stagger: 0.2,
        ease: "expo.out",
        duration: "1",
      }
    );
  },
  flicker: (gsap, trigger, target) => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      target,
      {
        opacity: gsap.utils.random(0.5, 1, 0.4),
      },
      {
        opacity: 1,
        repeat: -1,
        yoyo: true,
        repeatRefresh: true,
        ease: "expo.out",
        duration: 1,
        repeatDelay: gsap.utils.random(0.3, 3, 0.5),
      }
    );
  },
};

export default animations;

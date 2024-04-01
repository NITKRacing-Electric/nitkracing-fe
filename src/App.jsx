import Home from "./pages/Home/Index";
import Header, { StaticHeader } from "./components/Header/index";
import "./App.css";
import { useLayoutEffect, useRef, useEffect } from "react";
import Footer from "./components/Footer/index";
import React from "react";
import About from "./pages/About/Index";
import { Route, Switch } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import theme from "./theme/theme";
import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import useGsap from "./hooks/useGsap.js";
import Lenis from "@studio-freight/lenis";
import { MouseCircle, StyledDrawer } from "./components/index.js";
import { StateContextProvider, useStateContext } from "./context/index.jsx";
import {
  ContactPage,
  CrowdfundingPage,
  GalleryPage,
  SponsorsPage,
  TeamPage,
  AchievementPage,
  FormulaBharatPage,
} from "./pages";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger.js";
import NewsLetterPage from "./pages/About/sections/Newsletter/Index.jsx";

const queryClient = new QueryClient();

function App() {
  const appRef = useRef(null);

  useGsap(appRef.current, () => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    requestAnimationFrame(raf);
  });

  useEffect(() => {
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });
    const handleMouseMove = (e) => {
      gsap.to(".cursor__ball--big", {
        x: e.clientX - 15,
        y: e.clientY - 15,
        duration: 0.6,
        ease: "power4.out",
      });
      gsap.to(".cursor__ball--small", {
        x: e.clientX - 5,
        y: e.clientY - 7,
        duration: 0.1,
        ease: "power4.out",
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <StateContextProvider>
          <div className="App overflow-x-hidden" ref={appRef}>
            <CssBaseline />
            {/* <Header /> */}
            {/* <StyledDrawer /> */}
            <MouseCircle />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <StaticHeader />

                <TeamPage />
              </Route>
              <Route exact path="/gallery">
                <StaticHeader />
                <GalleryPage />
              </Route>
              <Route exact path="/sponsors">
                <StaticHeader />

                <SponsorsPage />
              </Route>
              <Route exact path="/contact">
                <StaticHeader />

                <ContactPage />
              </Route>
              <Route exact path="/crowdfunding">
                <StaticHeader />

                <CrowdfundingPage />
              </Route>

              <Route exact path="/achievements">
                <StaticHeader />

                <AchievementPage />
              </Route>

              <Route exact path="/fbharat">
                <StaticHeader />

                <FormulaBharatPage />
              </Route>

              <Route exact path="/newsletter">
                <StaticHeader />

                <NewsLetterPage />
              </Route>

              <Route exact path="/alumni">
                <StaticHeader />

                <About />
              </Route>
            </Switch>

            <Footer />
          </div>
        </StateContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

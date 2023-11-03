import Home from "./pages/Home/Index";
import Header from "./components/Header/index";
import "./App.css";
import { useLayoutEffect, useRef, useState } from "react";
import Footer from "./components/Footer/index";
import React from "react";
import About from "./pages/About/Index";
import { Route, Switch } from "react-router-dom";
import Drawer from "./components/Drawer/Drawer";
import { CssBaseline } from "@mui/material";
import theme from "./theme/theme";
import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import useGsap from "./hooks/useGsap.js";
import Lenis from "@studio-freight/lenis";

const queryClient = new QueryClient()


function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const appRef = useRef(null);

  useGsap(appRef.current, ()=> {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

  })
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
      <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <div className="App" ref={appRef}>
        <CssBaseline />
        <Header
          drawerOpen={open}
          handleDrawerOpen={handleOpen}
          handleDrawerClose={handleClose}
          isVisible={isVisible}
        />
        <Drawer handleClose={handleClose} open={open} />
        <Switch>
          <Route exact path="/">
            <Home setIsVisible={setIsVisible} />
          </Route>
          <Route exact path="/About">
            <About isVisible={isVisible} setIsVisible={setIsVisible} />
          </Route>
        </Switch>

        <Footer />
      </div>
    </ThemeProvider>
      </QueryClientProvider>

  );
}

export default App;

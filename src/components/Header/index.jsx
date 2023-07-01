import React from "react";
import "./styles.css";
import properties from "./header.module.css";
import whiteLogo from "../../images/logo/logo_white.png";
import navigation from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { ICONS } from "../../assets/data";
import { AppBar, Box, Toolbar } from "@mui/material";

const Header = ({ drawerOpen, ...props }) => {
  const wheelAction = drawerOpen
    ? props.handleDrawerClose
    : props.handleDrawerOpen;

  return (
    <AppBar position="absolute" color="transparent" elevation="0">
      <Toolbar>
        <Box flexGrow={2}>
          <img
            className={properties.logo_img}
            src={whiteLogo}
            alt="nitk racing logo"
          />
        </Box>

        <Box>
          <Box
            sx={{
              display: {
                md: "block",
                xs: "none",
              },
            }}
          >
            <ul className={properties.action_container}>
              <Link to="/">
                <li className={properties.link}>Home</li>
              </Link>

              <Link to="/About">
                <li className={properties.link}>About</li>
              </Link>
            </ul>
          </Box>
          <Box
            sx={{
              display: {
                xs: "block",
                md: "none",
              },
            }}
          >
            <div onClick={wheelAction} className={properties.navigation}>
              <img width="32px" src={ICONS.wheel} />
            </div>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

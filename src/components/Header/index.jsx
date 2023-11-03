import React from "react";
import "./styles.css";
import properties from "./header.module.css";
import whiteLogo from "../../images/logo/logo_white.png";
import navigation from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { ICONS } from "../../assets/data";
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import {BsGrid, BsGrid3X3, BsGrid3X3Gap, BsShare} from "react-icons/bs";
import {GiShare} from "react-icons/gi";

const Header = ({ drawerOpen, ...props }) => {
  const wheelAction = drawerOpen
    ? props.handleDrawerClose
    : props.handleDrawerOpen;

  return (
    <AppBar position="absolute" color="transparent" elevation="0">
      <Toolbar sx={{
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Box>
          <IconButton>
            <BsGrid3X3Gap fontSize='18px'/>
          </IconButton>


        </Box>

        <MenuItems />

        <IconButton><GiShare fontSize='18px'/></IconButton>
      </Toolbar>
    </AppBar>
  );
};

function MenuItems ( ) {
  return (
      <Box>
        <ul className={properties.action_container}>
          <Link to="/">
            <Typography variant='body2'>Alumni</Typography>

          </Link>
          <Typography variant='body2'>Gallery</Typography>
          <Typography variant='body2'>Sponsors</Typography>


          <Box>
            <img
                className={properties.logo_img}
                src={whiteLogo}
                alt="nitk racing logo"
            />
          </Box>

          <Link to="/About">
            <Typography variant='body2'>About</Typography>

          </Link>
          <Typography variant='body2'>Contact</Typography>
          <Typography variant='body2'>Crowdfunding</Typography>

        </ul>
      </Box>
  )
}

export default Header;

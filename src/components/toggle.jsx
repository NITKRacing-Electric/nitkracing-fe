import { IconButton } from "@mui/material";
import { FiMenu, FiX } from "react-icons/fi";
import { useStateContext } from "../context";
import { useEffect } from "react";
import gsap from "gsap";
function ToggleButton({ handleClick }) {
  const { drawerOpen } = useStateContext();
  return (
    <div className="z-10" onClick={handleClick}>
      <IconButton disableRipple>{drawerOpen ? <FiX /> : <FiMenu />}</IconButton>
    </div>
  );
}

export default ToggleButton;

import { IconButton } from "@mui/material";
import { FiMenu, FiX } from "react-icons/fi";
import { useStateContext } from "../context";
import { useEffect } from "react";
import { useState } from "react";
import gsap from "gsap";
function ToggleButton({ handleClick }) {
  //taking the screen size
  const [screenSize , setScreenSize] = useState(window.innerWidth)

    
  useEffect(() => {
      const handleResize = () => {
        setScreenSize(prevSize => {
          const newSize = window.innerWidth;
          // Perform additional actions if needed
          // console.log(newSize);
          return newSize;
        });
      };
  
      window.addEventListener('resize', handleResize);
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
  }, []);

  //every time keeping the record of the screen size
  console.log(screenSize) 
  const { drawerOpen } = useStateContext();
  return (
    <div className="z-10" onClick={handleClick}>
      {screenSize < "500" ? <IconButton disableRipple>{drawerOpen ? <FiX /> : <FiMenu />}</IconButton>: null}
      {/* <IconButton disableRipple>{drawerOpen ? <FiX /> : <FiMenu />}</IconButton> */}
    </div>
  );
}

export default ToggleButton;

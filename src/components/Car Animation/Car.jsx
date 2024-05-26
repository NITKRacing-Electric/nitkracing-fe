import { motion } from "framer-motion";
import car from '../../images/hero/jeff-cooper-TsQfovTCM8E-unsplash-removebg.png'

export const Car = () => {
  return (
    <motion.img
    initial={{ x: 0, opacity: 1, scale: 1 }} // move car off the right edge of the screen
      whileInView={{ x: "-50%", opacity: 1, scale: 1 }} // move car to the center of the screen
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      src={car}
      alt="Car"
      style={{
        width: "1700px",
        height: "1000px",
        position: "absolute",
        top: "calc(50% - 350px)", // center the car vertically
        left: "50%", // center the car horizontally
        transform: "translate(-50%, -50%)", // center the car vertically and horizontally
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}
    />
  );
};
import { motion } from "framer-motion";
import car from '../../images/hero/jeff-cooper-TsQfovTCM8E-unsplash-removebg.png'

export const Car = () => {
  return (
    <motion.img
      initial={{ x: 0, opacity: 1, scale: 1 }}
      whileInView={{ x: "-50%", opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 4 }}
      src={car}
      alt="Car"
      className="absolute top-[-350px] left-1/2 transform -translate-x-1/2 bg-cover bg-no-repeat bg-center"
      style={{
        position: "absolute",
        top: "calc(50% - 350px)",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}
    />
  );
};

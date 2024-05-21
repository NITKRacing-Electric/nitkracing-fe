import { LuCrown, LuLinkedin } from "react-icons/lu";
import { useStateContext } from "../context";
import { div } from "three/examples/jsm/nodes/Nodes.js";

function Person({ position, name , image }) {
  
  return (
    <div className="w-[250px] relative">
      <div className="h-[200px] w-[200px] bg-white  rounded-full relative z-30 m-auto">
          <img src={image} alt="image" className="bg-cover bg-no-repeat bg-center overflow-hidden rounded-full absolute top-[0px] w-full h-full"/>
        <div className="absolute w-[40px] h-[40px] bg-red-600 z-10 rounded-full bottom-2 left-5 grid place-content-center">
          <LuCrown />
        </div>
      </div>

      <p className="text-center pt-5 text-lg">{name}</p>
      <p className="text-center text-md text-red-400">{position}</p>
      <p className="text-sm flex items-center gap-3 justify-center pt-2">
        Follow
        <LuLinkedin />
      </p>
    </div>
  );
}

export default Person;

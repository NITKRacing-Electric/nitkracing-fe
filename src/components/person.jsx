import { LuCrown, LuLinkedin } from "react-icons/lu";

function Person({ label, position }) {
  return (
    <div className="w-[250px] relative">
      <div className="h-[200px] w-[200px] bg-white  rounded-full relative z-30 m-auto">
        <div className="absolute w-[40px] h-[40px] bg-red-600 z-10 rounded-full bottom-2 left-5 grid place-content-center">
          <LuCrown />
        </div>
      </div>

      <p className="text-center pt-5 text-lg">Anas Aijaz</p>
      <p className="text-center text-md text-red-400">Senior Execuetive</p>
      <p className="text-sm flex items-center gap-3 justify-center pt-2">
        Follow
        <LuLinkedin />
      </p>
    </div>
  );
}

export default Person;

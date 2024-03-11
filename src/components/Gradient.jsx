import React from "react";

export const RedGradient = () => {
  return <div className="absolute z-[0] w-[40%] h-[35%] top-0 red__gradient" />;
};

export const BlueGradient = () => {
  return (
    <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
  );
};

export const WhiteGradient = () => {
  return (
    <div className="absolute z-[0] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
  );
};

export const Gradient = () => {
  return (
    <>
      <WhiteGradient />
      <PinkGradient />
      <BlueGradient />
    </>
  );
};

function HoverEffect({ children }) {
  return (
    <span className="relative hover:before:bg-red-500 hover:-translate-y-1 before:absolute before:bottom-0 before:left-0 before:h-full hover:before:h-1/2 before:w-full hover:before:translate-y-2 transition-all before:transition-all before:bg-red-300 before:z-0 z-10 before:opacity-20">
      {children}
    </span>
  );
}

export default HoverEffect;

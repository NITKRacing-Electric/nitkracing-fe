function MouseCircle() {
  return (
    <div className="cursor pointer-events-none absolute">
      <div className="cursor__ball cursor__ball--big fixed top-0 left-0 mix-blend-difference z-50">
        <svg height="60" width="60">
          <circle
            className=" fill-[#f7f8fa]"
            cx="0"
            cy="0"
            r="0"
            stroke-width="0"
          ></circle>
        </svg>
      </div>

      <div className="cursor__ball cursor__ball--small">
        <svg height="10" width="10">
          <circle
            className="fill-[#000]"
            cx="5"
            cy="5"
            r="4"
            stroke-width="0"
          ></circle>
        </svg>
      </div>
    </div>
  );
}

export default MouseCircle;

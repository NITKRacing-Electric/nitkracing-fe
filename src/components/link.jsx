function MenuLink({ to, label }) {
  return (
    <a href={to}>
      <p className="link font-[Outfit] relative hover:before:bg-red-500 text-sm hover:-translate-y-1 before:absolute before:bottom-0 before:left-0 before:h-[20px] hover:before:h-[5px] before:w-full hover:before:translate-y-2 transition-all before:transition-all  before:z-0 z-10 before:opacity-20 hidden md:block">
        {label}
      </p>
    </a>
  );
}

export default MenuLink;

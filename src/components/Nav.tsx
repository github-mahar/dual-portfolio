export const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-paper/88 backdrop-blur-[8px] border-b border-line">
      <div className="max-w-[1140px] mx-auto px-8 flex items-center justify-between h-[72px]">
        <a href="#" className="font-display font-extrabold text-[19px] flex items-center gap-3">
          <img src="/GM.png" alt="GM Logo" className="w-8 h-8 rounded-full object-cover" />
          <span>MAHAR <span className="text-clay">GM</span></span>
        </a>
        <div className="hidden md:flex gap-9 text-[14px] font-medium">
          <a href="#work" className="text-ink-soft hover:text-ink transition-colors duration-150">Work</a>
          <a href="#about" className="text-ink-soft hover:text-ink transition-colors duration-150">About</a>
          <a href="#stack" className="text-ink-soft hover:text-ink transition-colors duration-150">Stack</a>
        </div>
        <a href="#contact" className="bg-ink text-paper px-5 py-2.5 rounded text-[14px] font-semibold hover:bg-clay transition-colors duration-150">Let's Talk</a>
      </div>
    </nav>
  );
};

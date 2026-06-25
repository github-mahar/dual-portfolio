export const Hero = () => {
  return (
    <section className="pt-[110px] pb-[90px] relative overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-8 grid grid-cols-1 md:grid-cols-[1fr_200px] gap-10 items-start">
        <div>
          <div className="font-mono text-[13px] uppercase tracking-[0.12em] text-clay mb-[22px] flex items-center gap-2.5 before:content-[''] before:w-2 before:h-2 before:bg-clay before:rounded-full before:inline-block">
            Frontend Developer · Shopify Expert
          </div>
          <h1 className="font-display text-[clamp(40px,6vw,68px)] font-extrabold leading-[1.03] mb-[26px] tracking-[-0.01em]">
            <span className="block text-ink-soft font-semibold text-[0.42em] mb-3.5 tracking-normal">Mahar GM</span>
            I build Shopify stores that convert, and websites that perform.
          </h1>
          <p className="text-[18px] text-ink-soft max-w-[540px] mb-[38px]">
            Frontend and Shopify developer based in Lahore, Pakistan. I help brands launch and scale Shopify stores, and build fast, modern websites for businesses that need more than a template.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a href="#shopify-work" className="inline-flex items-center gap-2 px-6 py-3.5 rounded font-semibold text-[14.5px] transition-all duration-150 border-[1.5px] border-transparent bg-ink text-paper hover:bg-clay">View Shopify Work →</a>
            <a href="#web-work" className="inline-flex items-center gap-2 px-6 py-3.5 rounded font-semibold text-[14.5px] transition-all duration-150 border-[1.5px] border-line text-ink hover:border-ink">View Web Work →</a>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded font-medium text-[14.5px] transition-all duration-150 text-ink-soft hover:text-clay">Let's Talk</a>
          </div>
        </div>
        <div className="md:border-l-[1.5px] md:border-t-0 border-t-[1.5px] border-line md:pl-6 md:pt-2 pt-6 flex flex-row md:flex-col gap-10 md:gap-7">
          <div>
            <span className="font-mono text-[11.5px] text-ink-soft uppercase block mb-1.5 tracking-[0.02em]">Discipline 01</span>
            <span className="text-[14px] font-semibold text-clay">Shopify Dev</span>
          </div>
          <div>
            <span className="font-mono text-[11.5px] text-ink-soft uppercase block mb-1.5 tracking-[0.02em]">Discipline 02</span>
            <span className="text-[14px] font-semibold text-sage">Website Dev</span>
          </div>
        </div>
      </div>
    </section>
  );
};

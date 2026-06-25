export const About = () => {
  return (
    <section className="py-[90px] border-t border-line" id="about">
      <div className="max-w-[1140px] mx-auto px-8 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-[60px]">
        <h2 className="font-display text-[30px] font-bold leading-[1.2]">About</h2>
        <div>
          <p className="text-[17px] text-ink-soft mb-[18px] max-w-[600px]">
            I'm a <strong className="text-ink font-semibold">Computer Science student at the University of Lahore</strong> (4th semester) and a working frontend/Shopify developer. I split my time between client work — building and maintaining storefronts like <strong className="text-ink font-semibold">Imrozia Serene</strong> — and my own products, like <strong className="text-ink font-semibold">MAEVEN</strong> and <strong className="text-ink font-semibold">ProposalCraft</strong>.
          </p>
          <p className="text-[17px] text-ink-soft max-w-[600px]">
            I care about shipping things that work in production, not just things that look good in a portfolio.
          </p>
        </div>
      </div>
    </section>
  );
};

export const Services = () => {
  return (
    <section className="py-[70px] border-y border-line bg-paper-dim">
      <div className="max-w-[1140px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="md:border-r border-line md:border-b-0 border-b pb-9 mb-9 md:pb-2 md:mb-0 md:px-10 py-2">
            <span className="font-mono text-[12px] uppercase tracking-[0.1em] px-[11px] py-[5px] rounded-[3px] inline-block mb-[18px] font-medium bg-clay-dim text-clay">Shopify Development</span>
            <h3 className="font-display text-[23px] font-bold mb-3">Stores built to sell.</h3>
            <p className="text-ink-soft text-[15.5px] leading-[1.65]">
              Theme customization & OS 2.0 builds, checkout & payment gateway integration, store automation with Make.com, speed & conversion optimization, custom app development.
            </p>
          </div>
          <div className="md:px-10 py-2">
            <span className="font-mono text-[12px] uppercase tracking-[0.1em] px-[11px] py-[5px] rounded-[3px] inline-block mb-[18px] font-medium bg-sage-dim text-sage">Website Development</span>
            <h3 className="font-display text-[23px] font-bold mb-3">Sites built to perform.</h3>
            <p className="text-ink-soft text-[15.5px] leading-[1.65]">
              Custom websites with React & TypeScript, landing pages built to convert, dashboards & internal tools, API integrations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

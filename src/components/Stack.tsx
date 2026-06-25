export const Stack = () => {
  return (
    <section className="py-[60px] border-t border-line bg-paper-dim" id="stack">
      <div className="max-w-[1140px] mx-auto px-8 flex flex-wrap items-center gap-10">
        <span className="font-mono text-[13px] uppercase tracking-[0.1em] text-ink-soft">Stack</span>
        <div className="flex flex-1 flex-wrap gap-2.5">
          {['React.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Shopify Liquid / CLI', 'Make.com', 'REST APIs'].map(tech => (
            <span key={tech} className="font-mono text-[13.5px] px-[14px] py-[7px] border border-line rounded-[4px] bg-paper text-ink">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

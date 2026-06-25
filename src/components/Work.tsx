import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export const Work = () => {
  const shopifyProjects = projects.filter(p => p.category === 'shopify');
  const webProjects = projects.filter(p => p.category === 'website');

  return (
    <section className="pt-[100px] pb-[60px]" id="work">
      <div className="max-w-[1140px] mx-auto px-8">
        <div className="flex justify-between items-baseline mb-[50px]">
          <h2 className="font-display text-[34px] font-bold">Selected Work</h2>
          <span className="font-mono text-[13px] text-ink-soft tracking-[0.02em]">05 PROJECTS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 mb-[30px]">
          {/* SHOPIFY LANE */}
          <div id="shopify-work">
            <div className="flex items-center gap-3 mb-[26px]">
              <span className="w-[9px] h-[9px] rounded-full bg-clay"></span>
              <span className="font-mono text-[13px] uppercase tracking-[0.08em] font-medium text-ink-soft">Shopify Development</span>
            </div>
            {shopifyProjects.map(project => (
              <ProjectCard key={project.title} project={project} />
            ))}
            
            {/* Visual Anchor for asymmetry */}
            <div className="border-[1.5px] border-dashed border-clay/30 rounded-[6px] py-10 px-6 bg-paper flex items-center justify-center text-center opacity-70 mt-[-4px]">
              <span className="font-mono text-[12.5px] text-ink-soft lowercase tracking-wide">
                more shopify projects in progress...
              </span>
            </div>
          </div>

          {/* WEBSITE LANE */}
          <div id="web-work">
            <div className="flex items-center gap-3 mb-[26px]">
              <span className="w-[9px] h-[9px] rounded-full bg-sage"></span>
              <span className="font-mono text-[13px] uppercase tracking-[0.08em] font-medium text-ink-soft">Website Development</span>
            </div>
            {webProjects.map(project => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import type { Project } from '../data/projects';

export const ProjectCard = ({ project }: { project: Project }) => {
  const isShopify = project.category === 'shopify';

  return (
    <div className={`border border-line rounded-[6px] p-[26px] mb-[22px] bg-paper transition-all duration-150 hover:-translate-y-[2px] ${isShopify ? 'hover:border-clay' : 'hover:border-sage'}`}>
      {project.image && (
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-auto rounded-[4px] mb-6 object-cover border border-line"
        />
      )}
      <div className="font-mono text-[11.5px] uppercase text-ink-soft mb-2.5 tracking-[0.05em]">
        {project.meta}
      </div>
      <h4 className="font-display text-[19px] font-bold mb-2.5 leading-[1.3]">
        {project.title}
      </h4>
      <p className="text-ink-soft text-[14.5px] leading-[1.6] mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-[7px] mb-4">
        {project.stack.map(tech => (
          <span key={tech} className="font-mono text-[11px] px-[9px] py-1 rounded-[3px] bg-paper-dim text-ink-soft border border-line">
            {tech}
          </span>
        ))}
      </div>
      {project.links && project.links.length > 0 && (
        <div className="flex flex-wrap gap-4 mt-1">
          {project.links.map((link, idx) => (
            <a key={idx} href={link.url} className={`text-[13.5px] font-semibold inline-flex items-center gap-[5px] ${isShopify ? 'text-clay' : 'text-sage'} hover:opacity-80 transition-opacity`}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

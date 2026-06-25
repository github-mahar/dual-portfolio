import { links } from '../data/links';
import { ContactForm } from './ContactForm';

export const Contact = () => {
  return (
    <section className="pt-[110px] pb-[100px] text-center px-8" id="contact">
      <div className="max-w-[1140px] mx-auto">
        <h2 className="font-display text-[clamp(32px,5vw,48px)] font-extrabold mb-[18px] max-w-[700px] mx-auto leading-[1.1]">
          Let's build something — Shopify store or website.
        </h2>
        <p className="text-[17px] text-ink-soft mb-[46px]">
          Fill out the form below, or email me directly at <a href={links.email} className="text-ink font-medium hover:text-clay transition-colors">{links.email.replace('mailto:', '')}</a>.
        </p>

        <ContactForm />

        <div className="flex flex-wrap justify-center gap-3.5 mb-[50px]">
          <a href={links.upwork} className="inline-flex items-center gap-2 px-6 py-3.5 rounded font-semibold text-[14.5px] transition-all duration-150 border-[1.5px] border-line text-ink hover:border-ink">
            View on Upwork
          </a>
        </div>
        <div className="flex justify-center gap-[30px] text-[14px] font-medium text-ink-soft">
          <a href={links.github} className="hover:text-clay transition-colors duration-150">GitHub</a>
          <a href={links.linkedin} className="hover:text-clay transition-colors duration-150">LinkedIn</a>
          <a href={links.upwork} className="hover:text-clay transition-colors duration-150">Upwork</a>
        </div>
      </div>
    </section>
  );
};

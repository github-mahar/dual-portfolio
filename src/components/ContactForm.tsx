import { useState } from 'react';
import { links } from '../data/links';

interface FormData {
  name: string;
  email: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  budget?: string;
  message?: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', budget: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.budget) newErrors.budget = 'Please select a budget';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    try {
      const response = await fetch('https://formspree.io/f/xgojodka', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  if (status === 'success') {
    return (
      <div className="border border-line rounded-[6px] p-[40px] bg-paper text-center max-w-[600px] mx-auto min-h-[300px] flex flex-col items-center justify-center mb-[40px]">
        <div className="w-12 h-12 rounded-full bg-clay-dim text-clay flex items-center justify-center mb-5 text-[24px]">
          ✓
        </div>
        <h3 className="font-display text-[22px] font-bold text-ink mb-2">Message Sent</h3>
        <p className="text-ink-soft text-[16px]">Thanks — I'll get back to you within a day or two.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="text-left max-w-[600px] mx-auto mb-[40px]" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-mono text-[13px] text-ink-soft uppercase tracking-[0.05em]">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            disabled={status === 'submitting'}
            className={`border rounded-[4px] px-4 py-3 bg-paper text-ink focus:outline-none focus:border-clay transition-colors ${errors.name ? 'border-clay' : 'border-line'}`}
          />
          {errors.name && <span className="text-clay text-[12.5px] mt-1">{errors.name}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-mono text-[13px] text-ink-soft uppercase tracking-[0.05em]">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            disabled={status === 'submitting'}
            className={`border rounded-[4px] px-4 py-3 bg-paper text-ink focus:outline-none focus:border-clay transition-colors ${errors.email ? 'border-clay' : 'border-line'}`}
          />
          {errors.email && <span className="text-clay text-[12.5px] mt-1">{errors.email}</span>}
        </div>
      </div>

      <div className="flex flex-col gap-2 mb-6">
        <label htmlFor="budget" className="font-mono text-[13px] text-ink-soft uppercase tracking-[0.05em]">Budget</label>
        <div className="relative">
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            disabled={status === 'submitting'}
            className={`w-full border rounded-[4px] px-4 py-3 bg-paper text-ink focus:outline-none focus:border-clay transition-colors appearance-none ${errors.budget ? 'border-clay' : 'border-line'} ${!formData.budget ? 'text-ink-soft' : ''}`}
          >
            <option value="" disabled>Select a budget...</option>
            <option value="Under $500">Under $500</option>
            <option value="$500 – $1,500">$500 – $1,500</option>
            <option value="$1,500 – $5,000">$1,500 – $5,000</option>
            <option value="$5,000+">$5,000+</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-ink-soft">
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        {errors.budget && <span className="text-clay text-[12.5px] mt-1">{errors.budget}</span>}
      </div>

      <div className="flex flex-col gap-2 mb-8">
        <label htmlFor="message" className="font-mono text-[13px] text-ink-soft uppercase tracking-[0.05em]">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          disabled={status === 'submitting'}
          placeholder="Tell me about your project — Shopify store, website, or something else?"
          className={`border rounded-[4px] px-4 py-3 bg-paper text-ink focus:outline-none focus:border-clay transition-colors resize-y ${errors.message ? 'border-clay' : 'border-line'}`}
        />
        {errors.message && <span className="text-clay text-[12.5px] mt-1">{errors.message}</span>}
      </div>

      {status === 'error' && (
        <div className="text-clay text-[14px] mb-4 text-center">
          Something went wrong — try again, or email me directly at <a href={links.email} className="underline hover:text-ink transition-colors">{links.email.replace('mailto:', '')}</a>.
        </div>
      )}

      <div className="flex flex-wrap justify-center items-center gap-4">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-[4px] font-semibold text-[15px] transition-all duration-150 border-[1.5px] border-transparent bg-ink text-paper hover:bg-clay disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
};

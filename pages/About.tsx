import React from 'react';
import { AccessConfig } from '../types';

export const About: React.FC<{ accessConfig: AccessConfig }> = ({ accessConfig }) => {
  const textColor = accessConfig.highContrast ? 'text-white' : 'text-slate-600';
  const headingColor = accessConfig.highContrast ? 'text-yellow-400' : 'text-navy-900';

  return (
    <div className={`min-h-screen py-12 ${accessConfig.highContrast ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className={`text-4xl font-extrabold ${headingColor} mb-8`}>Inclusive Advocacy. Disability Justice in Action.</h1>
        
        <div className={`prose lg:prose-xl ${textColor}`}>
          <p className="mb-6 text-lg leading-relaxed">
            G.H. Disability Law Group was founded on a simple premise: <strong>The law should be a tool for liberation, not a barrier to it.</strong>
          </p>
          <p className="mb-6 text-lg leading-relaxed">
             We understand that for many of our clients, entering a legal battle is not just about a case number—it's about your livelihood, your education, and your dignity. That's why we operate on a trauma-informed model. We prioritize your emotional safety as much as your legal success.
          </p>
          <h2 className={`text-2xl font-bold mt-8 mb-4 ${headingColor}`}>Our Commitment to Accessibility</h2>
          <p className="mb-6 text-lg leading-relaxed">
            We believe that access is a civil right. From our physical office designed with universal design principles to our WCAG-compliant digital spaces, we ensure that no client is left behind because of a barrier we created.
          </p>
          <h2 className={`text-2xl font-bold mt-8 mb-4 ${headingColor}`}>Who We Serve</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
             <li>Disabled women facing intersectional discrimination.</li>
             <li>Parents fighting for their child's right to a free and appropriate public education.</li>
             <li>Employees navigating complex accommodation requests.</li>
             <li>Individuals seeking to secure their future through SSDI/SSI.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

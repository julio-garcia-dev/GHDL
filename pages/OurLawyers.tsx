import React from 'react';
import { AccessConfig } from '../types';

export const OurLawyers: React.FC<{ accessConfig: AccessConfig }> = ({ accessConfig }) => {
  const headingColor = accessConfig.highContrast ? 'text-yellow-400' : 'text-navy-900';
  const textColor = accessConfig.highContrast ? 'text-white' : 'text-slate-600';
  const cardBg = accessConfig.highContrast ? 'bg-gray-900 border border-white' : 'bg-white border border-slate-100 shadow-sm';
  const roleColor = accessConfig.highContrast ? 'text-yellow-200' : 'text-teal-600';
  const quoteBorder = accessConfig.highContrast ? 'border-yellow-400' : 'border-teal-500';
  const quoteText = accessConfig.highContrast ? 'text-gray-300' : 'text-slate-500';

  const team = [
    {
      name: "Gabriella Hernandez, Esq.",
      role: "Founding Partner",
      bio: "Gabriella founded G.H. Disability Law Group after navigating the legal system for her own family members. She specializes in employment discrimination and high-stakes housing justice cases. She believes legal advocacy is a form of community care.",
      quote: "I don't just fight for the law; I fight for the person standing behind it.",
      image: "https://picsum.photos/seed/gabriella/400/400"
    },
    {
      name: "David Chen",
      role: "Senior Associate Attorney",
      bio: "A former special education teacher, David brings a pedagogical perspective to Education Rights (IDEA/504) cases. He works tirelessly to ensure schools provide the environment every student deserves.",
      quote: "Every child has a right to learn without barriers.",
      image: "https://picsum.photos/seed/david/400/400"
    },
    {
      name: "Sarah Jenkins",
      role: "Client Care Coordinator",
      bio: "Sarah is often the first voice you hear. With a background in social work, she ensures our intake process is accessible, trauma-informed, and welcoming for all clients.",
      quote: "Accessibility starts with the first 'Hello'.",
      image: "https://picsum.photos/seed/sarah/400/400"
    }
  ];

  return (
    <div className={`min-h-screen py-12 ${accessConfig.highContrast ? 'bg-black' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className={`text-4xl font-extrabold ${headingColor} mb-4`}>Our Team</h1>
          <p className={`text-xl max-w-3xl mx-auto ${textColor}`}>
            We are advocates, educators, and allies. Our team combines legal expertise with lived experience to provide representation that truly understands you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className={`flex flex-col overflow-hidden rounded-2xl transition-all hover:-translate-y-1 ${cardBg}`}>
              <div className="h-72 w-full overflow-hidden relative bg-gray-200">
                <img 
                  src={member.image} 
                  alt={`Portrait of ${member.name}`} 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className={`text-2xl font-bold mb-1 ${headingColor}`}>{member.name}</h3>
                <p className={`text-sm font-bold uppercase tracking-wide mb-4 ${roleColor}`}>
                  {member.role}
                </p>
                <p className={`mb-6 flex-grow leading-relaxed ${textColor}`}>
                  {member.bio}
                </p>
                <blockquote className={`pl-4 border-l-4 italic ${quoteBorder} ${quoteText}`}>
                  "{member.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
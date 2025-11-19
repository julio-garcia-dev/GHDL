import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AccessConfig } from '../types';
import { SERVICES } from '../constants';

interface PageProps {
  accessConfig: AccessConfig;
}

export const PracticeAreas: React.FC<PageProps> = ({ accessConfig }) => {
  const textColor = accessConfig.highContrast ? 'text-white' : 'text-slate-600';
  const headingColor = accessConfig.highContrast ? 'text-yellow-400' : 'text-navy-900';
  
  return (
    <div className={`min-h-screen py-12 ${accessConfig.highContrast ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className={`text-4xl font-extrabold ${headingColor} mb-4`}>Our Practice Areas</h1>
          <p className={`text-xl ${textColor}`}>
            We specialize in cases that intersect with disability justice, employment, and education.
          </p>
        </div>

        <div className="space-y-12">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col md:flex-row gap-8 items-start p-8 rounded-2xl transition-all
                ${accessConfig.highContrast 
                  ? 'bg-gray-900 border border-white' 
                  : 'bg-slate-50 hover:shadow-lg border border-transparent hover:border-slate-200'
                }`}
            >
              <div className={`p-4 rounded-full shrink-0 ${accessConfig.highContrast ? 'bg-white text-black' : 'bg-white text-teal-600 shadow-sm'}`}>
                <service.icon size={40} />
              </div>
              <div className="flex-grow">
                <h2 className={`text-2xl font-bold mb-3 ${headingColor}`}>{service.title}</h2>
                <p className={`text-lg mb-6 ${textColor}`}>{service.description}</p>
                
                {/* Mock Details */}
                <div className={`mb-6 p-4 rounded-lg ${accessConfig.highContrast ? 'bg-black border border-gray-700' : 'bg-white/50 border border-slate-200'}`}>
                   <h4 className={`font-semibold mb-2 ${headingColor}`}>Common Issues We Handle:</h4>
                   <ul className={`list-disc pl-5 space-y-1 ${textColor}`}>
                     <li>Failure to provide reasonable accommodations</li>
                     <li>Retaliation for requesting access</li>
                     <li>Harassment based on disability status</li>
                   </ul>
                </div>

                <Link 
                  to="/contact" 
                  className={`inline-flex items-center font-medium hover:underline ${accessConfig.highContrast ? 'text-yellow-400' : 'text-teal-700'}`}
                >
                  Request a Consultation <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

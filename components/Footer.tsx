import React from 'react';
import { AccessConfig } from '../types';
import { BRAND_NAME } from '../constants';

export const Footer: React.FC<{ accessConfig: AccessConfig }> = ({ accessConfig }) => {
  const bgClass = accessConfig.highContrast ? 'bg-black border-t border-white' : 'bg-navy-900';
  const textClass = accessConfig.highContrast ? 'text-white' : 'text-slate-300';
  
  return (
    <footer className={`${bgClass} py-12`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start">
            <p className={`text-lg font-bold ${accessConfig.highContrast ? 'text-yellow-400' : 'text-white'}`}>
              {BRAND_NAME}
            </p>
          </div>
          <div className="mt-8 md:mt-0 flex justify-center space-x-6">
            <span className={textClass}>© {new Date().getFullYear()} All rights reserved.</span>
          </div>
        </div>
        <div className={`mt-8 border-t ${accessConfig.highContrast ? 'border-white' : 'border-navy-800'} pt-8 md:flex md:items-center md:justify-between`}>
           <div className={`text-sm ${textClass} text-center md:text-left`}>
             <p>123 Justice Avenue, Suite 400, City, ST 12345</p>
             <p>Phone: (555) 123-4567 | TTY: 711</p>
           </div>
        </div>
      </div>
    </footer>
  );
};

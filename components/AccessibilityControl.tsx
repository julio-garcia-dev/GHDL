import React, { useState, useEffect } from 'react';
import { Eye, Type, Sun, Moon, Accessibility } from 'lucide-react';
import { AccessConfig } from '../types';

interface AccessibilityControlProps {
  config: AccessConfig;
  setConfig: React.Dispatch<React.SetStateAction<AccessConfig>>;
}

export const AccessibilityControl: React.FC<AccessibilityControlProps> = ({ config, setConfig }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleHighContrast = () => setConfig(prev => ({ ...prev, highContrast: !prev.highContrast }));
  const toggleLargeText = () => setConfig(prev => ({ ...prev, largeText: !prev.largeText }));
  const toggleDyslexia = () => setConfig(prev => ({ ...prev, dyslexiaFriendly: !prev.dyslexiaFriendly }));

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className={`mb-4 p-4 rounded-lg shadow-xl border ${config.highContrast ? 'bg-black border-white text-white' : 'bg-white border-gray-200 text-slate-800'}`}>
          <h3 className="font-bold mb-3 flex items-center gap-2">
            <Accessibility size={20} />
            Display Settings
          </h3>
          
          <div className="space-y-3">
            <button 
              onClick={toggleHighContrast}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded border transition-colors ${config.highContrast ? 'bg-yellow-400 text-black' : 'hover:bg-slate-100'}`}
            >
              {config.highContrast ? <Sun size={18} /> : <Moon size={18} />}
              {config.highContrast ? 'Normal Contrast' : 'High Contrast'}
            </button>

            <button 
              onClick={toggleLargeText}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded border transition-colors ${config.largeText ? 'bg-teal-100 border-teal-500' : 'hover:bg-slate-100'}`}
            >
              <Type size={18} />
              {config.largeText ? 'Normal Text Size' : 'Larger Text'}
            </button>

            <button 
              onClick={toggleDyslexia}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded border transition-colors ${config.dyslexiaFriendly ? 'bg-teal-100 border-teal-500' : 'hover:bg-slate-100'}`}
            >
              <Eye size={18} />
              Dyslexia Font
            </button>
          </div>
        </div>
      )}
      
      <button
        onClick={toggleMenu}
        className={`p-4 rounded-full shadow-lg transition-transform hover:scale-110 focus:ring-4 focus:ring-teal-400 ${config.highContrast ? 'bg-yellow-400 text-black' : 'bg-navy-900 text-white'}`}
        aria-label="Accessibility Menu"
      >
        <Accessibility size={28} />
      </button>
    </div>
  );
};

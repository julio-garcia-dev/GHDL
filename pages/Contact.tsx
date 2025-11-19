import React, { useState } from 'react';
import { MessageSquare, Phone, Video, Mail, Loader2, Sparkles } from 'lucide-react';
import { AccessConfig, ContactMethod, AiAssistantResponse } from '../types';
import { analyzeCaseDescription } from '../services/geminiService';

interface PageProps {
  accessConfig: AccessConfig;
}

export const Contact: React.FC<PageProps> = ({ accessConfig }) => {
  const textColor = accessConfig.highContrast ? 'text-white' : 'text-slate-600';
  const headingColor = accessConfig.highContrast ? 'text-yellow-400' : 'text-navy-900';
  const inputBg = accessConfig.highContrast ? 'bg-black border-white text-white' : 'bg-white border-slate-300 text-slate-900 focus:ring-teal-500 focus:border-teal-500';

  // Form State
  const [story, setStory] = useState('');
  const [aiAnalysis, setAiAnalysis] = useState<AiAssistantResponse | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [preferredMethod, setPreferredMethod] = useState<ContactMethod>(ContactMethod.EMAIL);

  const handleAiAnalysis = async () => {
    if (!story.trim()) return;
    setIsAnalyzing(true);
    const result = await analyzeCaseDescription(story);
    setAiAnalysis(result);
    setIsAnalyzing(false);
  };

  return (
    <div className={`min-h-screen py-12 ${accessConfig.highContrast ? 'bg-black' : 'bg-slate-50'}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10">
          <h1 className={`text-3xl font-extrabold ${headingColor} mb-4`}>Start Your Journey to Justice</h1>
          <p className={`text-lg ${textColor} mb-4`}>
            We know reaching out can be hard. You are in control here. 
            Share only what you feel comfortable with right now.
          </p>
          
          {/* Accessibility Note */}
          <div className={`p-4 rounded-lg border-l-4 ${accessConfig.highContrast ? 'bg-gray-900 border-yellow-400' : 'bg-blue-50 border-blue-500'}`}>
            <p className={`text-sm ${textColor}`}>
              <strong>Accessibility Promise:</strong> All our intake forms are screen-reader friendly. 
              If you prefer not to type, you can call us directly at (555) 123-4567.
            </p>
          </div>
        </div>

        <div className={`shadow-xl rounded-2xl overflow-hidden ${accessConfig.highContrast ? 'bg-gray-900 border border-white' : 'bg-white'}`}>
          <form className="p-8 space-y-8" onSubmit={(e) => e.preventDefault()}>
            
            {/* Personal Info */}
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className={`block text-sm font-medium ${headingColor}`}>First name</label>
                <input type="text" name="first-name" id="first-name" className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm p-3 border ${inputBg}`} />
              </div>
              <div>
                <label htmlFor="last-name" className={`block text-sm font-medium ${headingColor}`}>Last name</label>
                <input type="text" name="last-name" id="last-name" className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm p-3 border ${inputBg}`} />
              </div>
            </div>

            {/* Story / AI Section */}
            <div>
              <label htmlFor="story" className={`block text-sm font-medium ${headingColor}`}>
                Tell us briefly what happened (Optional AI Assistance available)
              </label>
              <div className="mt-1 relative">
                <textarea
                  id="story"
                  name="story"
                  rows={4}
                  className={`block w-full rounded-md shadow-sm sm:text-sm p-3 border ${inputBg}`}
                  placeholder="I was denied a reasonable accommodation at work..."
                  value={story}
                  onChange={(e) => setStory(e.target.value)}
                />
                {/* AI Button */}
                <div className="mt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={handleAiAnalysis}
                    disabled={!story || isAnalyzing}
                    className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm
                      ${isAnalyzing ? 'opacity-50 cursor-not-allowed' : ''}
                      ${accessConfig.highContrast ? 'bg-white text-black' : 'bg-teal-50 text-teal-700 hover:bg-teal-100'}
                    `}
                  >
                    {isAnalyzing ? <Loader2 className="animate-spin mr-2 h-4 w-4"/> : <Sparkles className="mr-2 h-4 w-4" />}
                    {isAnalyzing ? 'Analyzing...' : 'Use AI to categorize my case'}
                  </button>
                </div>
              </div>

              {/* AI Result Display */}
              {aiAnalysis && (
                <div className={`mt-4 p-4 rounded-md animate-fade-in ${accessConfig.highContrast ? 'bg-black border border-yellow-400' : 'bg-teal-50 border border-teal-200'}`}>
                  <h3 className={`text-sm font-bold ${headingColor} mb-2`}>Based on your description:</h3>
                  <p className={`text-sm mb-2 ${textColor}`}><strong>Suggested Area:</strong> {aiAnalysis.suggestedPracticeArea}</p>
                  <p className={`text-sm italic ${textColor}`}>"{aiAnalysis.helpfulTip}"</p>
                </div>
              )}
            </div>

            {/* Contact Preferences */}
            <div>
              <label className={`block text-sm font-medium ${headingColor} mb-3`}>How would you like us to contact you?</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { method: ContactMethod.EMAIL, icon: Mail },
                  { method: ContactMethod.PHONE, icon: Phone },
                  { method: ContactMethod.VIDEO, icon: Video },
                  { method: ContactMethod.TEXT, icon: MessageSquare },
                ].map((opt) => (
                  <button
                    key={opt.method}
                    type="button"
                    onClick={() => setPreferredMethod(opt.method)}
                    className={`flex flex-col items-center justify-center p-3 rounded-lg border text-sm font-medium transition-all
                      ${preferredMethod === opt.method 
                        ? (accessConfig.highContrast ? 'bg-yellow-400 text-black border-white' : 'bg-teal-50 border-teal-500 text-teal-700 ring-1 ring-teal-500') 
                        : (accessConfig.highContrast ? 'bg-gray-800 text-gray-300 border-gray-600' : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50')}
                    `}
                  >
                    <opt.icon size={20} className="mb-1" />
                    {opt.method}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className={`w-full flex justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium
                  ${accessConfig.highContrast 
                    ? 'bg-yellow-400 text-black hover:bg-white' 
                    : 'bg-navy-900 text-white hover:bg-navy-800 focus:ring-2 focus:ring-offset-2 focus:ring-navy-500'}
                `}
              >
                Request Confidential Consultation
              </button>
              <p className={`mt-4 text-center text-sm ${textColor}`}>
                By submitting this form, you agree to our privacy policy. No attorney-client relationship is formed until a written agreement is signed.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

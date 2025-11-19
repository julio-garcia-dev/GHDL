import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Heart, Shield } from 'lucide-react';
import { AccessConfig } from '../types';
import { SERVICES, BRAND_MOTTO, TESTIMONIALS } from '../constants';

interface PageProps {
  accessConfig: AccessConfig;
}

export const Home: React.FC<PageProps> = ({ accessConfig }) => {
  const textColor = accessConfig.highContrast ? 'text-white' : 'text-slate-600';
  const headingColor = accessConfig.highContrast ? 'text-yellow-400' : 'text-navy-900';
  const cardBg = accessConfig.highContrast ? 'bg-gray-900 border border-white' : 'bg-white border border-slate-100 shadow-sm';

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className={`relative overflow-hidden py-16 sm:py-24 ${accessConfig.highContrast ? 'bg-black' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className={`text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl ${headingColor}`}>
                <span className="block">Justice isn't just legal.</span>
                <span className={`block ${accessConfig.highContrast ? 'text-white' : 'text-teal-600'}`}>It's personal.</span>
              </h1>
              <p className={`mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 ${textColor}`}>
                {BRAND_MOTTO} You are heard, believed, and supported here.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className={`inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10
                    ${accessConfig.highContrast 
                      ? 'bg-yellow-400 text-black hover:bg-white' 
                      : 'bg-navy-900 text-white hover:bg-navy-800 shadow-lg shadow-navy-900/20'}
                  `}
                >
                  Get a Free Consultation
                  <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                </Link>
                <Link
                  to="/practice-areas"
                  className={`inline-flex items-center justify-center px-8 py-3 border text-base font-medium rounded-md md:py-4 md:text-lg md:px-10
                    ${accessConfig.highContrast
                      ? 'border-white text-white hover:bg-gray-800'
                      : 'border-slate-300 text-navy-900 bg-white hover:bg-slate-50'}
                  `}
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
               <div className={`relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md overflow-hidden ${accessConfig.highContrast ? 'border-2 border-white' : ''}`}>
                  <img 
                    className="w-full h-full object-cover"
                    src="https://picsum.photos/600/800?grayscale" 
                    alt="A warm, professional consultation setting with diverse individuals." 
                  />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals / Values */}
      <section className={`py-12 ${accessConfig.highContrast ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Trauma-Informed", desc: "We move at your pace, prioritizing your emotional safety." },
              { icon: Shield, title: "Disability Justice", desc: "Rooted in the movement for equity, access, and dignity." },
              { icon: CheckCircle, title: "Clear Communication", desc: "No legalese. Just honest, accessible advice." },
            ].map((item, idx) => (
              <div key={idx} className={`flex flex-col items-center text-center p-6 rounded-xl ${cardBg}`}>
                <div className={`p-3 rounded-full mb-4 ${accessConfig.highContrast ? 'bg-white text-black' : 'bg-teal-50 text-teal-600'}`}>
                  <item.icon size={32} />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${headingColor}`}>{item.title}</h3>
                <p className={textColor}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas Preview */}
      <section className={`py-16 ${accessConfig.highContrast ? 'bg-black' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-extrabold ${headingColor}`}>How We Advocate For You</h2>
            <p className={`mt-4 max-w-2xl mx-auto text-xl ${textColor}`}>Comprehensive legal support designed for your lived reality.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <Link key={service.id} to="/practice-areas" className={`group block p-6 rounded-lg transition-all hover:-translate-y-1 ${cardBg}`}>
                <service.icon className={`h-8 w-8 mb-4 ${accessConfig.highContrast ? 'text-yellow-400' : 'text-teal-600'}`} />
                <h3 className={`text-lg font-semibold mb-2 ${headingColor} group-hover:text-teal-500`}>{service.title}</h3>
                <p className={`text-sm ${textColor}`}>{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-16 ${accessConfig.highContrast ? 'bg-gray-900' : 'bg-navy-900 text-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className={`text-3xl font-bold text-center mb-12 ${accessConfig.highContrast ? 'text-yellow-400' : 'text-white'}`}>Voices of our Community</h2>
           <div className="grid md:grid-cols-2 gap-8">
             {TESTIMONIALS.map((t) => (
               <div key={t.id} className={`p-8 rounded-2xl relative ${accessConfig.highContrast ? 'bg-black border border-white' : 'bg-navy-800'}`}>
                 <p className={`text-lg italic mb-6 ${accessConfig.highContrast ? 'text-white' : 'text-slate-200'}`}>"{t.text}"</p>
                 <div className="flex items-center gap-3">
                   <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${accessConfig.highContrast ? 'bg-yellow-400 text-black' : 'bg-teal-500 text-white'}`}>
                     {t.author[0]}
                   </div>
                   <div>
                     <p className={`font-bold ${accessConfig.highContrast ? 'text-yellow-400' : 'text-white'}`}>{t.author}</p>
                     <p className={`text-sm ${accessConfig.highContrast ? 'text-gray-300' : 'text-slate-400'}`}>{t.role}</p>
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>
    </main>
  );
};
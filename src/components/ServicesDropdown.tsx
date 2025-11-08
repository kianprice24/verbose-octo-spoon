import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Phone, Lightbulb, Rocket, Users, MessageSquare, BarChart3, CheckCircle, Clock, Target, ArrowRight } from 'lucide-react';

const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      id: 1,
      title: "Discovery & Analysis",
      subtitle: "Strategic Foundation",
      description: "We dive deep into your brand DNA, market position, and competitive landscape to create a data-driven foundation for viral success.",
      icon: Phone,
      color: "from-cyan-500 to-blue-600",
      accentColor: "cyan-400",
      duration: "2-3 Days"
    },
    {
      id: 2,
      title: "Strategic Blueprint",
      subtitle: "Viral Framework Development",
      description: "Our team crafts a comprehensive viral strategy blueprint tailored to your unique brand voice and market positioning.",
      icon: Lightbulb,
      color: "from-blue-500 to-indigo-600",
      accentColor: "blue-400",
      duration: "3-5 Days"
    },
    {
      id: 3,
      title: "Creative Production",
      subtitle: "Content That Converts",
      description: "Our creative team produces high-impact, scroll-stopping content designed to maximize engagement and viral potential.",
      icon: Rocket,
      color: "from-indigo-500 to-purple-600",
      accentColor: "indigo-400",
      duration: "5-7 Days"
    },
    {
      id: 4,
      title: "Launch & Amplification",
      subtitle: "Maximum Impact Deployment",
      description: "Strategic content deployment with precision timing and amplification tactics to maximize reach and engagement.",
      icon: Users,
      color: "from-purple-500 to-pink-600",
      accentColor: "purple-400",
      duration: "Ongoing"
    },
    {
      id: 5,
      title: "Performance Coaching",
      subtitle: "Skill Transfer & Optimization",
      description: "One-on-one coaching sessions to transfer knowledge and optimize your team's social media capabilities for sustained growth.",
      icon: MessageSquare,
      color: "from-pink-500 to-red-600",
      accentColor: "pink-400",
      duration: "Weekly"
    },
    {
      id: 6,
      title: "Analytics & Optimization",
      subtitle: "Data-Driven Growth",
      description: "Comprehensive performance analysis with actionable insights and continuous optimization for sustained viral growth.",
      icon: BarChart3,
      color: "from-red-500 to-orange-600",
      accentColor: "red-400",
      duration: "Monthly"
    }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Auto-cycle through services when dropdown is open
  useEffect(() => {
    if (!isOpen) return;
    
    const interval = setInterval(() => {
      setActiveService(prev => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isOpen, services.length]);

  return (
    <div className="fixed top-20 right-8 z-50" ref={dropdownRef} id="services">
      {/* Dropdown Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative px-6 py-3 bg-gradient-to-r from-slate-800/90 to-slate-900/90 text-white font-semibold rounded-2xl border border-cyan-400/30 backdrop-blur-xl transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-cyan-500/20 ${isOpen ? 'shadow-cyan-500/30' : ''}`}
      >
        <span className="flex items-center space-x-3">
          <Target className="w-5 h-5 text-cyan-400" />
          <span>Our Services</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </span>
        
        {/* Button glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </button>

      {/* Dropdown Content */}
      <div className={`absolute top-full right-0 mt-2 w-96 bg-gradient-to-br from-slate-800/95 to-slate-900/95 rounded-3xl border border-cyan-400/20 backdrop-blur-2xl shadow-2xl transition-all duration-500 overflow-hidden ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'}`}>
        
        {/* Header */}
        <div className="p-6 border-b border-slate-700/50">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
              <Target className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">Our Process</h3>
          </div>
          <p className="text-slate-400 text-sm">6-step methodology for viral success</p>
        </div>

        {/* Services List */}
        <div className="max-h-80 overflow-y-auto custom-scrollbar">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeService === index;
            
            return (
              <div
                key={service.id}
                className={`p-4 border-b border-slate-700/30 last:border-b-0 cursor-pointer transition-all duration-300 hover:bg-slate-700/20 ${isActive ? 'bg-slate-700/30' : ''}`}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="flex items-start space-x-4">
                  {/* Service Icon */}
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center shadow-lg ${isActive ? 'scale-110' : ''} transition-transform duration-300`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  
                  {/* Service Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-white font-semibold text-sm truncate">{service.title}</h4>
                      <div className="flex items-center space-x-1 text-xs text-slate-400">
                        <Clock className="w-3 h-3" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                    
                    <p className={`text-${service.accentColor} text-xs font-medium mb-2`}>
                      {service.subtitle}
                    </p>
                    
                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                {/* Active indicator */}
                {isActive && (
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${service.color} rounded-r-full`}></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="p-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 border-t border-slate-700/30">
          <button className="w-full group relative px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:scale-105">
            <span className="flex items-center justify-center space-x-2">
              <Rocket className="w-4 h-4" />
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(51, 65, 85, 0.3);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #3b82f6);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #2563eb);
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default ServicesDropdown;
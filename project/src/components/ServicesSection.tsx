import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Phone, Lightbulb, Rocket, Users, MessageSquare, BarChart3, CheckCircle, Clock, Target, ArrowRight, Star, Zap, TrendingUp, Eye, Shield, Award } from 'lucide-react';

const ServicesSection = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      id: 1,
      step: "Step 1",
      title: "Discovery & Analysis",
      subtitle: "Strategic Foundation",
      description: "We dive deep into your brand DNA, market position, and competitive landscape to create a data-driven foundation for viral success.",
      icon: Phone,
      color: "from-cyan-500 to-blue-600",
      accentColor: "cyan-400",
      duration: "2-3 Days",
      details: [
        { icon: Target, title: "Brand DNA Analysis", description: "Deep dive into your brand's core values, mission, and unique positioning in the market." },
        { icon: Eye, title: "Competitive Research", description: "Comprehensive analysis of your competitors' strategies, strengths, and market gaps." },
        { icon: BarChart3, title: "Market Assessment", description: "Data-driven evaluation of your target market, audience behavior, and growth opportunities." },
        { icon: Shield, title: "Risk Analysis", description: "Identification of potential challenges and development of mitigation strategies." }
      ]
    },
    {
      id: 2,
      step: "Step 2",
      title: "Strategic Blueprint",
      subtitle: "Viral Framework Development",
      description: "Our team crafts a comprehensive viral strategy blueprint tailored to your unique brand voice and market positioning.",
      icon: Lightbulb,
      color: "from-blue-500 to-indigo-600",
      accentColor: "blue-400",
      duration: "3-5 Days",
      details: [
        { icon: Zap, title: "Content Strategy", description: "Development of viral content frameworks and messaging strategies that resonate with your audience." },
        { icon: TrendingUp, title: "Growth Roadmap", description: "Step-by-step plan for scaling your social media presence and engagement rates." },
        { icon: Users, title: "Audience Targeting", description: "Precise audience segmentation and targeting strategies for maximum impact." },
        { icon: Award, title: "Brand Positioning", description: "Strategic positioning to differentiate your brand in the competitive landscape." }
      ]
    },
    {
      id: 3,
      step: "Step 3",
      title: "Creative Production",
      subtitle: "Content That Converts",
      description: "Our creative team produces high-impact, scroll-stopping content designed to maximize engagement and viral potential.",
      icon: Rocket,
      color: "from-indigo-500 to-purple-600",
      accentColor: "indigo-400",
      duration: "5-7 Days",
      details: [
        { icon: Star, title: "Visual Content Creation", description: "High-quality graphics, videos, and animations designed for maximum social media impact." },
        { icon: MessageSquare, title: "Copy & Messaging", description: "Compelling copy and messaging that drives engagement and conversions." },
        { icon: Rocket, title: "Campaign Assets", description: "Complete campaign asset packages ready for multi-platform deployment." },
        { icon: CheckCircle, title: "Quality Assurance", description: "Rigorous testing and optimization of all creative assets before launch." }
      ]
    },
    {
      id: 4,
      step: "Step 4",
      title: "Launch & Amplification",
      subtitle: "Maximum Impact Deployment",
      description: "Strategic content deployment with precision timing and amplification tactics to maximize reach and engagement.",
      icon: Users,
      color: "from-purple-500 to-pink-600",
      accentColor: "purple-400",
      duration: "Ongoing",
      details: [
        { icon: Clock, title: "Strategic Timing", description: "Optimal posting schedules based on audience behavior and platform algorithms." },
        { icon: TrendingUp, title: "Amplification Tactics", description: "Advanced techniques to boost content reach and viral potential." },
        { icon: Users, title: "Community Management", description: "Active engagement and community building to sustain momentum." },
        { icon: BarChart3, title: "Real-time Monitoring", description: "Continuous monitoring and adjustment of campaigns for optimal performance." }
      ]
    },
    {
      id: 5,
      step: "Step 5",
      title: "Performance Coaching",
      subtitle: "Skill Transfer & Optimization",
      description: "One-on-one coaching sessions to transfer knowledge and optimize your team's social media capabilities for sustained growth.",
      icon: MessageSquare,
      color: "from-pink-500 to-red-600",
      accentColor: "pink-400",
      duration: "Weekly",
      details: [
        { icon: Users, title: "Team Training", description: "Comprehensive training sessions for your internal team on best practices and strategies." },
        { icon: Target, title: "Skill Development", description: "Focused skill development in content creation, community management, and analytics." },
        { icon: Award, title: "Certification Program", description: "Structured learning path with certifications to validate team competencies." },
        { icon: MessageSquare, title: "Ongoing Support", description: "Continuous support and guidance to ensure sustained success." }
      ]
    },
    {
      id: 6,
      step: "Step 6",
      title: "Analytics & Optimization",
      subtitle: "Data-Driven Growth",
      description: "Comprehensive performance analysis with actionable insights and continuous optimization for sustained viral growth.",
      icon: BarChart3,
      color: "from-red-500 to-orange-600",
      accentColor: "red-400",
      duration: "Monthly",
      details: [
        { icon: BarChart3, title: "Performance Analytics", description: "Detailed analysis of all metrics including reach, engagement, and conversion rates." },
        { icon: TrendingUp, title: "Growth Insights", description: "Actionable insights and recommendations for continuous improvement." },
        { icon: Target, title: "ROI Optimization", description: "Strategies to maximize return on investment and campaign effectiveness." },
        { icon: Rocket, title: "Future Planning", description: "Strategic planning for future campaigns based on performance data." }
      ]
    }
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-cycle through steps for line animations
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length]);

  const toggleDropdown = (serviceId: number) => {
    setOpenDropdown(openDropdown === serviceId ? null : serviceId);
  };

  return (
    <section ref={sectionRef} className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 px-4 sm:px-8" id="services">
      {/* Animated Background Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Horizontal flowing lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-600/25 to-transparent animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}}></div>
        
        {/* Vertical connecting lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/15 to-transparent animate-pulse" style={{animationDuration: '7s', animationDelay: '3s'}}></div>
        
        {/* Dynamic grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233B82F6' fill-opacity='0.3'%3E%3Cpath d='M0 0h60v1H0zM0 0v60h1V0z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-cyan-500/30">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-5xl font-black text-white">Our Process</h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our proven 6-step methodology transforms brands into <span className="text-cyan-400 font-bold">digital empires</span> through strategic planning, creative excellence, and data-driven optimization.
          </p>
        </div>

        {/* Services Grid */}
        <div className="relative grid gap-6">
          {/* Central connecting line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-blue-500/30 to-cyan-500/40 animate-pulse" style={{animationDuration: '6s'}}></div>
          
          {services.map((service, index) => {
            const Icon = service.icon;
            const isOpen = openDropdown === service.id;
            const isActive = activeStep === index;
            
            return (
              <div
                key={service.id}
                className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Service Card */}
                <div className="relative group" onMouseEnter={() => setActiveStep(index)}>
                  {/* Background Effects */}
                  
                  {/* Step Connection Node */}
                  <div className={`absolute left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${service.color} border-2 border-gray-900 z-10 transition-all duration-500 ${isActive ? 'scale-150' : 'scale-100'}`}>
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.color} animate-ping opacity-75 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
                  </div>
                  
                  {/* Main Card */}
                  <div className={`relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-3xl border border-slate-700/50 backdrop-blur-xl overflow-hidden transition-all duration-500 ${isActive ? 'border-cyan-400/50' : ''}`}>
                    
                    {/* Liquid Glass Overlay */}
                    <div className={`absolute inset-0 rounded-3xl transition-all duration-1000 ${isActive ? 'opacity-100' : 'opacity-80'}`}>
                      {/* Main glass layer */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/2 to-transparent rounded-3xl backdrop-blur-sm"></div>
                      
                      {/* Liquid flow effect */}
                      <div className="absolute inset-0 rounded-3xl overflow-hidden">
                        <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-${service.accentColor}/8 via-${service.accentColor}/4 to-transparent rounded-3xl animate-pulse`} style={{animationDuration: '6s'}}></div>
                        <div className={`absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-${service.accentColor}/6 via-transparent to-${service.accentColor}/3 rounded-3xl animate-pulse`} style={{animationDuration: '8s', animationDelay: '3s'}}></div>
                      </div>
                      
                      {/* Glass reflection highlights */}
                      <div className="absolute top-2 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                      <div className="absolute top-4 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                      
                      {/* Liquid droplet effects */}
                      <div className="absolute top-3 right-8 w-1.5 h-1.5 bg-white/12 rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
                      <div className={`absolute top-6 right-12 w-1 h-1 bg-${service.accentColor}/20 rounded-full animate-pulse`} style={{animationDuration: '6s', animationDelay: '2s'}}></div>
                      <div className={`absolute bottom-4 left-10 w-1 h-1 bg-${service.accentColor}/15 rounded-full animate-pulse`} style={{animationDuration: '5s', animationDelay: '1s'}}></div>
                      
                      {/* Glossy overlay for enhanced shine */}
                      <div className="absolute inset-0 rounded-3xl overflow-hidden">
                        {/* Primary glossy layer */}
                        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/4 via-white/2 to-transparent rounded-t-3xl"></div>
                        
                        {/* Secondary glossy accent */}
                        <div className="absolute top-0 left-1/4 right-1/4 h-1/4 bg-gradient-to-b from-white/6 via-white/3 to-transparent rounded-t-3xl opacity-70"></div>
                        
                        {/* Glossy edge highlights */}
                        <div className="absolute top-1 left-3 right-3 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
                        <div className="absolute top-3 left-5 right-5 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent"></div>
                        
                        {/* Subtle side reflections */}
                        <div className="absolute top-0 left-0 w-px h-1/3 bg-gradient-to-b from-white/10 to-transparent"></div>
                        <div className="absolute top-0 right-0 w-px h-1/3 bg-gradient-to-b from-white/10 to-transparent"></div>
                        
                        {/* Corner glossy accents */}
                        <div className="absolute top-2 left-2 w-6 h-6 bg-gradient-to-br from-white/6 to-transparent rounded-full blur-sm"></div>
                        <div className="absolute top-2 right-2 w-4 h-4 bg-gradient-to-bl from-white/4 to-transparent rounded-full blur-sm"></div>
                      </div>
                    </div>
                    
                    {/* Flowing line animation inside card */}
                    <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                    </div>
                    
                    {/* Service Header - Clickable */}
                    <button
                      onClick={() => toggleDropdown(service.id)}
                      className="w-full p-8 text-left hover:bg-slate-700/20 transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                          {/* Step Number */}
                          <div className="flex-shrink-0">
                            <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center transition-all duration-500 ${isActive ? 'scale-110' : ''}`}>
                              <Icon className="w-8 h-8 text-white" />
                              
                              {/* Icon glass overlay */}
                              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/12 via-white/6 to-transparent rounded-t-2xl"></div>
                                <div className="absolute top-1 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
                                <div className="absolute top-0 left-0 w-px h-1/2 bg-gradient-to-b from-white/8 to-transparent"></div>
                                <div className="absolute top-0 right-0 w-px h-1/2 bg-gradient-to-b from-white/8 to-transparent"></div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Service Info */}
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <span className={`text-${service.accentColor} text-sm font-bold uppercase tracking-wider transition-all duration-300 ${isActive ? 'text-cyan-300' : ''}`}>
                                {service.step}
                              </span>
                              <div className="flex items-center space-x-1 text-xs text-slate-400">
                                <Clock className="w-3 h-3" />
                                <span>{service.duration}</span>
                              </div>
                            </div>
                            <h3 className={`text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 ${isActive ? 'text-cyan-300' : ''}`}>
                              {service.title}
                            </h3>
                            <p className={`text-${service.accentColor} text-sm font-medium mb-3`}>
                              {service.subtitle}
                            </p>
                            <p className="text-slate-300 leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        </div>
                        
                        {/* Dropdown Arrow */}
                        <div className="flex-shrink-0 ml-4">
                          <ChevronDown className={`w-6 h-6 text-slate-400 transition-all duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : 'group-hover:text-white'} ${isActive ? 'text-cyan-300' : ''}`} />
                        </div>
                      </div>
                    </button>
                    
                    {/* Dropdown Content */}
                    <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-8 pb-8 border-t border-slate-700/30">
                        {/* Connecting line in dropdown */}
                        <div className="absolute left-8 top-0 w-px h-full bg-gradient-to-b from-cyan-400/30 to-transparent"></div>
                        
                        <div className="pt-6">
                          <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                            <Target className="w-5 h-5 text-cyan-400" />
                            <span>What's Included</span>
                          </h4>
                          
                          <div className="grid md:grid-cols-2 gap-4">
                            {service.details.map((detail, detailIndex) => {
                              const DetailIcon = detail.icon;
                              return (
                                <div
                                  key={detailIndex}
                                  className="relative flex items-start space-x-3 p-4 rounded-xl bg-slate-800/50 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 group/detail"
                                >
                                  {/* Detail item connecting dot */}
                                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400/60 opacity-0 group-hover/detail:opacity-100 transition-opacity duration-300"></div>
                                  
                                  <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                                    <DetailIcon className="w-4 h-4 text-white" />
                                  </div>
                                  <div className="flex-1">
                                    <h5 className="text-white font-semibold text-sm mb-1">
                                      {detail.title}
                                    </h5>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                      {detail.description}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button className="group relative px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xl rounded-2xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center space-x-3">
              <Rocket className="w-6 h-6" />
              <span>Start Your Digital Empire</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>
      
      {/* Custom keyframes for grid animation */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
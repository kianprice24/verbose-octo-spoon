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
      title: "Discovery Call",
      subtitle: "Understanding Your Vision",
      description: "We start with an in-depth conversation to understand your unique needs, goals, and what you're looking for in your next opportunity or hire.",
      icon: Phone,
      color: "from-cyan-500 to-blue-600",
      accentColor: "cyan-400",
      duration: "30-45 Minutes",
      details: [
        { icon: Target, title: "Goals Assessment", description: "Define your career aspirations or hiring needs and what success looks like for you." },
        { icon: Eye, title: "Culture Fit Analysis", description: "Understanding work style, values, and company culture requirements." },
        { icon: BarChart3, title: "Requirements Review", description: "Detailed discussion of skills, experience, and expectations on both sides." },
        { icon: Shield, title: "Confidentiality", description: "Your information is handled with complete discretion and privacy." }
      ]
    },
    {
      id: 2,
      step: "Step 2",
      title: "Strategic Matching",
      subtitle: "Precision Pairing Process",
      description: "Using our extensive network and insights, we carefully match high-potential talent with brands that align with their skills and aspirations.",
      icon: Lightbulb,
      color: "from-blue-500 to-emerald-600",
      accentColor: "blue-400",
      duration: "3-5 Days",
      details: [
        { icon: Zap, title: "Network Activation", description: "Tap into our curated network of forward-thinking companies and rising stars." },
        { icon: TrendingUp, title: "Opportunity Mapping", description: "Identify the best matches based on skills, culture, and growth potential." },
        { icon: Users, title: "Profile Presentation", description: "Present talent profiles to companies or opportunities to candidates professionally." },
        { icon: Award, title: "Mutual Alignment", description: "Ensure both parties are excited and aligned before moving forward." }
      ]
    },
    {
      id: 3,
      step: "Step 3",
      title: "Introduction & Connection",
      subtitle: "Facilitating First Contact",
      description: "We facilitate warm introductions between matched parties, setting the stage for a successful partnership with proper context and preparation.",
      icon: Rocket,
      color: "from-emerald-500 to-teal-600",
      accentColor: "emerald-400",
      duration: "1-2 Days",
      details: [
        { icon: Star, title: "Warm Introduction", description: "Professional introduction with context and mutual interest established upfront." },
        { icon: MessageSquare, title: "Preparation Support", description: "Guidance on what to expect and how to make the best impression." },
        { icon: Rocket, title: "Scheduling Coordination", description: "Handle logistics and scheduling to make the process seamless." },
        { icon: CheckCircle, title: "Expectation Setting", description: "Ensure both sides know what to expect and what the next steps entail." }
      ]
    },
    {
      id: 4,
      step: "Step 4",
      title: "Interview Support",
      subtitle: "Guided Partnership Development",
      description: "We provide ongoing support throughout the interview and evaluation process, offering coaching and feedback to help both sides succeed.",
      icon: Users,
      color: "from-teal-500 to-sky-600",
      accentColor: "teal-400",
      duration: "Ongoing",
      details: [
        { icon: Clock, title: "Interview Coaching", description: "Preparation tips and strategies for successful interviews and conversations." },
        { icon: TrendingUp, title: "Feedback Loop", description: "Collect and share constructive feedback between both parties." },
        { icon: Users, title: "Negotiation Guidance", description: "Support throughout discussions of terms, expectations, and agreements." },
        { icon: BarChart3, title: "Progress Tracking", description: "Stay connected and informed at every stage of the process." }
      ]
    },
    {
      id: 5,
      step: "Step 5",
      title: "Partnership Formation",
      subtitle: "Finalizing the Match",
      description: "Once both sides are aligned, we help finalize the partnership, ensuring all details are clear and both parties are excited to move forward.",
      icon: MessageSquare,
      color: "from-sky-500 to-blue-600",
      accentColor: "sky-400",
      duration: "1-2 Weeks",
      details: [
        { icon: Users, title: "Offer Coordination", description: "Facilitate clear communication of offers, terms, and expectations." },
        { icon: Target, title: "Agreement Support", description: "Ensure all details are understood and both parties are aligned." },
        { icon: Award, title: "Onboarding Prep", description: "Provide guidance for a smooth transition and successful start." },
        { icon: MessageSquare, title: "Final Questions", description: "Address any last-minute concerns or questions from either side." }
      ]
    },
    {
      id: 6,
      step: "Step 6",
      title: "Ongoing Success",
      subtitle: "Long-Term Partnership Support",
      description: "Our commitment doesn't end at placement. We check in regularly to ensure the partnership is thriving and provide support as needed.",
      icon: BarChart3,
      color: "from-blue-500 to-cyan-600",
      accentColor: "blue-400",
      duration: "Continuous",
      details: [
        { icon: BarChart3, title: "Regular Check-ins", description: "Periodic follow-ups to ensure everything is going smoothly." },
        { icon: TrendingUp, title: "Growth Support", description: "Guidance for continued development and mutual success." },
        { icon: Target, title: "Issue Resolution", description: "Available to help navigate any challenges that arise." },
        { icon: Rocket, title: "Future Opportunities", description: "Continue to provide value and opportunities as your needs evolve." }
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
    <section ref={sectionRef} className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-12 sm:py-16 px-3 sm:px-4 md:px-8" id="services">
      <div className="max-w-3xl mx-auto">

        {/* Section Header */}
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 px-2">Our Process</h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto px-4">
            Our proven 6-step process creates meaningful connections between top talent and innovative brands through personalized matching, ongoing support, and long-term partnership development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line on the left */}
          <div className="absolute left-2 sm:left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/40 via-blue-500/30 to-cyan-500/40"></div>

          {services.map((service, index) => {
            const Icon = service.icon;
            const isOpen = openDropdown === service.id;

            return (
              <div
                key={service.id}
                className={`relative mb-4 sm:mb-6 pl-8 sm:pl-10 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 top-0">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-gray-900 border-2 border-gray-800 shadow-lg flex items-center justify-center">
                    <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                  </div>
                </div>

                {/* Card */}
                <div className="bg-slate-800/60 backdrop-blur-sm rounded-lg sm:rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                  <div className="p-3 sm:p-4">
                    <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-bold text-white mb-0.5 truncate">{service.title}</h3>
                        <p className="text-xs text-cyan-400">{service.duration}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed">{service.description}</p>

                    {/* What to Expect */}
                    <button
                      onClick={() => toggleDropdown(service.id)}
                      className="w-full text-left group"
                    >
                      <div className="bg-slate-900/50 rounded-lg p-2.5 sm:p-3 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300">
                        <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                          <h4 className="font-semibold text-white text-xs flex items-center gap-1 sm:gap-1.5">
                            <Target className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-cyan-400" />
                            <span className="text-xs">What to Expect</span>
                          </h4>
                          <ChevronDown className={`w-3 h-3 text-gray-400 group-hover:text-cyan-400 transition-all duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
                        </div>
                        <div className={`space-y-1 sm:space-y-1.5 overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-12 sm:max-h-14 opacity-70'}`}>
                          {service.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-1.5 sm:gap-2">
                              <div className="w-1 h-1 rounded-full bg-cyan-400 mt-1 sm:mt-1.5 flex-shrink-0"></div>
                              <p className="text-xs text-gray-300 leading-relaxed">{detail.title}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-8 sm:mt-10 pl-8 sm:pl-10 transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button className="group px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs sm:text-sm rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-xl hover:shadow-cyan-500/50 hover:scale-105 flex items-center justify-center space-x-1.5 sm:space-x-2 mx-auto">
            <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Start Your Journey</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
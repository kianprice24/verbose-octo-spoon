import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Users, Award, Target, Rocket, Star, TrendingUp, Heart, Zap, Crown, Diamond, Shield } from 'lucide-react';

const AboutUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedOwner, setExpandedOwner] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const owners = [
    {
      id: 1,
      name: "Sarah Mitchell",
      title: "CEO & Founder",
      avatar: "https://media.discordapp.net/attachments/1404920478367350858/1433465502461853787/Kieron_Logo_Founder__CEO.png?ex=6910a7c8&is=690f5648&hm=568e7df9b762733f84881c869b36626b1cfc56a024197b5c48fcbac480ea9e50&=&format=webp&quality=lossless",
      shortBio: "Visionary leader with 10+ years in digital marketing",
      fullBio: "Sarah is the driving force behind Dispulse Agency, with over a decade of experience in digital marketing and brand strategy. She has helped launch over 200 successful campaigns and has been recognized as one of the top 40 under 40 marketing executives. Her passion for innovation and data-driven strategies has positioned Dispulse as a leader in the digital space.",
      achievements: [
        "Forbes 30 Under 30 Marketing",
        "Digital Marketing Executive of the Year 2023",
        "Led campaigns generating $50M+ in revenue"
      ],
      expertise: ["Strategic Planning", "Brand Development", "Team Leadership"],
      stats: { campaigns: 200, revenue: "50M+", years: 10 }
    },
    {
      id: 2,
      name: "Marcus Chen",
      title: "CTO & Co-Founder",
      avatar: "https://media.discordapp.net/attachments/1404920478367350858/1433465501279060191/Ted_Director_of_Operations.jpg?ex=6910a7c8&is=690f5648&hm=9437ba0021a5bbc1ae289c8acd0bc865841ddde23d00990dbad5d848f8ea69f&=&format=webp",
      shortBio: "Tech innovator specializing in AI-driven marketing solutions",
      fullBio: "Marcus brings cutting-edge technology to every campaign at Dispulse. With a background in AI and machine learning, he has developed proprietary algorithms that predict viral content with 89% accuracy. His technical expertise combined with marketing insight makes him invaluable in creating data-driven strategies that deliver exceptional results.",
      achievements: [
        "MIT Technology Review Innovator",
        "Built AI systems with 89% viral prediction accuracy",
        "15+ patents in marketing technology"
      ],
      expertise: ["AI & Machine Learning", "Marketing Automation", "Data Analytics"],
      stats: { patents: 15, accuracy: "89%", systems: 25 }
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      title: "Creative Director & Co-Founder",
      avatar: "https://media.discordapp.net/attachments/1404920478367350858/1433465501836906537/Fin_Logo_Founder__CEO.jpg?ex=6910a7c8&is=690f5648&hm=77a433f78164f7d98bb7073fded2997b629b40e97b158d3db1c3c0001dda963c&=&format=webp",
      shortBio: "Award-winning creative with a passion for viral storytelling",
      fullBio: "Elena is the creative genius behind Dispulse's most memorable campaigns. Her unique ability to blend storytelling with viral mechanics has earned her numerous industry awards. She has created content that has been viewed over 2 billion times across all platforms and has worked with A-list celebrities and Fortune 500 companies.",
      achievements: [
        "Cannes Lions Gold Winner",
        "Content viewed 2B+ times globally",
        "Creative Director of the Year 2022"
      ],
      expertise: ["Creative Strategy", "Content Creation", "Brand Storytelling"],
      stats: { views: "2B+", awards: 12, campaigns: 300 }
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

  const toggleOwner = (ownerId: number) => {
    setExpandedOwner(expandedOwner === ownerId ? null : ownerId);
  };

  return (
    <section ref={sectionRef} className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 px-4 sm:px-8" id="about">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Flowing lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent animate-pulse" style={{animationDuration: '5s'}}></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-400/20 to-transparent animate-pulse" style={{animationDuration: '7s', animationDelay: '2s'}}></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-600/25 to-transparent animate-pulse" style={{animationDuration: '6s', animationDelay: '1s'}}></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          >
            <div 
              className={`${i % 4 === 0 ? 'w-1 h-1 rounded-full bg-emerald-400/60' : i % 4 === 1 ? 'w-2 h-2 rounded-full bg-teal-500/40' : i % 4 === 2 ? 'w-1 h-1 rotate-45 bg-cyan-600/50' : 'w-3 h-px bg-emerald-400/30'} animate-pulse`}
              style={{animationDuration: `${4 + Math.random() * 6}s`}}
            ></div>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center shadow-2xl shadow-emerald-500/30">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-5xl font-black text-white">About Us</h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet the visionary leaders behind Dispulse Agency. Our founders bring together decades of experience in 
            <span className="text-emerald-400 font-bold"> digital marketing</span>, cutting-edge technology, and 
            <span className="text-teal-400 font-bold"> creative excellence</span>.
          </p>
        </div>

        {/* Company Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {[
            { icon: Rocket, label: "Years Experience", value: "10+" },
            { icon: Star, label: "Successful Campaigns", value: "500+" },
            { icon: TrendingUp, label: "Revenue Generated", value: "$100M+" },
            { icon: Award, label: "Industry Awards", value: "25+" }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-600/20 flex items-center justify-center border border-emerald-400/30">
                  <Icon className="w-8 h-8 text-emerald-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Owners Section */}
        <div className="space-y-6">
          {owners.map((owner, index) => {
            const isExpanded = expandedOwner === owner.id;
            
            return (
              <div
                key={owner.id}
                className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ transitionDelay: `${600 + index * 200}ms` }}
              >
                {/* Owner Card */}
                <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-3xl border border-slate-700/50 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-emerald-400/50">
                  
                  {/* Liquid Glass Overlay */}
                  <div className={`absolute inset-0 rounded-3xl transition-all duration-1000 ${isExpanded ? 'opacity-100' : 'opacity-80'}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/2 to-transparent rounded-3xl backdrop-blur-sm"></div>
                    <div className="absolute inset-0 rounded-3xl overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-400/8 via-teal-400/4 to-transparent rounded-3xl animate-pulse" style={{animationDuration: '6s'}}></div>
                      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-emerald-400/6 via-transparent to-teal-400/3 rounded-3xl animate-pulse" style={{animationDuration: '8s', animationDelay: '3s'}}></div>
                    </div>
                    <div className="absolute top-2 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    <div className="absolute top-4 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    <div className="absolute inset-0 rounded-3xl overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/4 via-white/2 to-transparent rounded-t-3xl"></div>
                      <div className="absolute top-0 left-1/4 right-1/4 h-1/4 bg-gradient-to-b from-white/6 via-white/3 to-transparent rounded-t-3xl opacity-70"></div>
                    </div>
                  </div>
                  
                  {/* Owner Header - Clickable */}
                  <button
                    onClick={() => toggleOwner(owner.id)}
                    className="w-full p-8 text-left hover:bg-slate-700/20 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        {/* Avatar */}
                        <div className="relative">
                          <img 
                            src={owner.avatar} 
                            alt={owner.name}
                            className="w-20 h-20 rounded-2xl object-cover border-2 border-emerald-400/30"
                          />
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                            <Crown className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        
                        {/* Owner Info */}
                        <div className="flex-1">
                          <h3 className={`text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300 ${isExpanded ? 'text-emerald-300' : ''}`}>
                            {owner.name}
                          </h3>
                          <p className="text-emerald-400 text-lg font-medium mb-3">
                            {owner.title}
                          </p>
                          <p className="text-slate-300 leading-relaxed">
                            {owner.shortBio}
                          </p>
                        </div>
                      </div>
                      
                      {/* Dropdown Arrow */}
                      <div className="flex-shrink-0 ml-4">
                        <ChevronDown className={`w-6 h-6 text-slate-400 transition-all duration-300 ${isExpanded ? 'rotate-180 text-emerald-400' : 'group-hover:text-white'}`} />
                      </div>
                    </div>
                  </button>
                  
                  {/* Dropdown Content */}
                  <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-8 pb-8 border-t border-slate-700/30">
                      <div className="pt-6">
                        
                        {/* Full Bio */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                            <Target className="w-5 h-5 text-emerald-400" />
                            <span>Background</span>
                          </h4>
                          <p className="text-slate-300 leading-relaxed">
                            {owner.fullBio}
                          </p>
                        </div>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {Object.entries(owner.stats).map(([key, value], statIndex) => (
                            <div key={statIndex} className="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-700/30">
                              <div className="text-2xl font-bold text-emerald-400">{value}</div>
                              <div className="text-xs text-slate-400 capitalize">{key}</div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Expertise & Achievements */}
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Expertise */}
                          <div>
                            <h5 className="text-white font-semibold text-sm mb-3 flex items-center space-x-2">
                              <Zap className="w-4 h-4 text-emerald-400" />
                              <span>Expertise</span>
                            </h5>
                            <div className="space-y-2">
                              {owner.expertise.map((skill, skillIndex) => (
                                <div key={skillIndex} className="flex items-center space-x-2">
                                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                                  <span className="text-slate-300 text-sm">{skill}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Achievements */}
                          <div>
                            <h5 className="text-white font-semibold text-sm mb-3 flex items-center space-x-2">
                              <Award className="w-4 h-4 text-emerald-400" />
                              <span>Key Achievements</span>
                            </h5>
                            <div className="space-y-2">
                              {owner.achievements.map((achievement, achievementIndex) => (
                                <div key={achievementIndex} className="flex items-start space-x-2">
                                  <Star className="w-3 h-3 text-emerald-400 mt-1 flex-shrink-0" />
                                  <span className="text-slate-300 text-sm leading-relaxed">{achievement}</span>
                                </div>
                              ))}
                            </div>
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

        {/* Company Mission */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-3xl p-8 border border-slate-700/50 backdrop-blur-xl">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Our Mission</h3>
            </div>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
              At Dispulse Agency, we believe every brand has the potential to become a <span className="text-emerald-400 font-bold">digital empire</span>. 
              Our mission is to unlock that potential through innovative strategies, cutting-edge technology, and creative excellence that 
              drives measurable results and lasting impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
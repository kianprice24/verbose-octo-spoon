import React, { useState, useRef, useEffect } from 'react';
import { Star, Users, TrendingUp, Award, Eye, Heart, MessageCircle, Share2, Play, Instagram, Twitter, Youtube, Atom as Tiktok, Linkedin, Camera, Video, Mic, Edit3, Palette, Code, Megaphone, BarChart3 } from 'lucide-react';
import AdminDashboard from './AdminDashboard';
import LoginModal from './LoginModal';
import { adminAuth, supabase } from '../lib/supabase';

interface Talent {
  id: number;
  name: string;
  role: string;
  category: string;
  followers: string;
  engagement: string;
  platforms: any[];
  avatar: string;
  specialty: string;
  achievements: string[];
  stats: {
    posts: number;
    collaborations: number;
    campaigns: number;
  };
}

const TalentsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredTalent, setHoveredTalent] = useState<number | null>(null);
  const [showAdminDashboard, setShowAdminDashboard] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', name: 'All Talents', icon: Users },
    { id: 'influencers', name: 'Influencers', icon: Star },
    { id: 'creators', name: 'Content Creators', icon: Camera },
    { id: 'artists', name: 'Digital Artists', icon: Palette },
    { id: 'developers', name: 'Developers', icon: Code },
    { id: 'marketers', name: 'Marketers', icon: Megaphone }
  ];

  const [talents, setTalents] = useState<Talent[]>([
    {
      id: 1,
      name: "Alexandra Chen",
      role: "Lifestyle Influencer",
      category: "influencers",
      followers: "2.4M",
      engagement: "8.2%",
      platforms: [Instagram, Youtube, Tiktok],
      avatar: "image.png",
      specialty: "Fashion & Beauty",
      achievements: ["Forbes 30 Under 30", "Brand Ambassador of the Year"],
      stats: { posts: 1247, collaborations: 89, campaigns: 156 }
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Tech Content Creator",
      category: "creators",
      followers: "890K",
      engagement: "12.1%",
      platforms: [Youtube, Twitter, Linkedin],
      avatar: "image2.png",
      specialty: "Tech Reviews & Tutorials",
      achievements: ["YouTube Creator Award", "Tech Influencer of the Year"],
      stats: { posts: 892, collaborations: 67, campaigns: 134 }
    },
    {
      id: 3,
      name: "Sophia Williams",
      role: "Digital Artist",
      category: "artists",
      followers: "1.2M",
      engagement: "15.3%",
      platforms: [Instagram, Twitter, Youtube],
      avatar: "image3.png",
      specialty: "3D Art & Animation",
      achievements: ["Digital Art Excellence Award", "NFT Artist of the Month"],
      stats: { posts: 567, collaborations: 45, campaigns: 78 }
    }
  ]);

  const handleUpdateTalents = (updatedTalents: Talent[]) => {
    setTalents(updatedTalents);
  };

  const filteredTalents = activeCategory === 'all' 
    ? talents 
    : talents.filter(talent => talent.category === activeCategory);

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

  // Check authentication status on component mount
  useEffect(() => {
    const checkAuth = async () => {
      // Only check auth if Supabase is properly configured
      if (!supabase) return;
      const isAdmin = await adminAuth.isAdmin();
      setIsAuthenticated(isAdmin);
    };
    checkAuth();
  }, []);

  const handleAdminAccess = () => {
    if (isAuthenticated) {
      setShowAdminDashboard(true);
    } else {
      setShowLoginModal(true);
    }
  };

  const handleLoginSuccess = async () => {
    const isAdmin = await adminAuth.isAdmin();
    setIsAuthenticated(isAdmin);
    setShowLoginModal(false);
    if (isAdmin) {
      setShowAdminDashboard(true);
    }
  };
  return (
    <section ref={sectionRef} className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 px-4 sm:px-8" id="talents">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Flowing lines */}
        <div className="absolute top-1/6 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-pulse" style={{animationDuration: '5s'}}></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400/20 to-transparent animate-pulse" style={{animationDuration: '7s', animationDelay: '2s'}}></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-600/25 to-transparent animate-pulse" style={{animationDuration: '6s', animationDelay: '1s'}}></div>
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
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
              className={`${i % 3 === 0 ? 'w-1 h-1 rounded-full bg-purple-400/60' : i % 3 === 1 ? 'w-2 h-2 rounded-full bg-pink-500/40' : 'w-1 h-1 rotate-45 bg-blue-600/50'} animate-pulse`}
              style={{animationDuration: `${4 + Math.random() * 6}s`}}
            ></div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center shadow-2xl shadow-purple-500/30">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-5xl font-black text-white">Our Talents</h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet the exceptional creators, influencers, and digital professionals who trust us to amplify their <span className="text-purple-400 font-bold">digital presence</span> and build their empires.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative px-6 py-3 rounded-2xl font-semibold transition-all duration-500 hover:scale-105 ${
                  isActive 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-2xl shadow-purple-500/30' 
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/60 border border-slate-600/50 hover:border-purple-400/50'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </span>
                {!isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Talents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {filteredTalents.map((talent, index) => (
            <div
              key={talent.id}
              className={`relative group transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ transitionDelay: `${600 + index * 150}ms` }}
              onMouseEnter={() => setHoveredTalent(talent.id)}
              onMouseLeave={() => setHoveredTalent(null)}
            >
              {/* Talent Card */}
              <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-3xl border border-slate-700/50 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-purple-400/50 group-hover:scale-105">
                
                {/* Liquid Glass Overlay */}
                <div className={`absolute inset-0 rounded-3xl transition-all duration-1000 ${hoveredTalent === talent.id ? 'opacity-100' : 'opacity-70'}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/2 to-transparent rounded-3xl backdrop-blur-sm"></div>
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400/8 via-pink-400/4 to-transparent rounded-3xl animate-pulse" style={{animationDuration: '6s'}}></div>
                    <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-purple-400/6 via-transparent to-pink-400/3 rounded-3xl animate-pulse" style={{animationDuration: '8s', animationDelay: '3s'}}></div>
                  </div>
                  <div className="absolute top-2 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  <div className="absolute top-4 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/4 via-white/2 to-transparent rounded-t-3xl"></div>
                    <div className="absolute top-0 left-1/4 right-1/4 h-1/4 bg-gradient-to-b from-white/6 via-white/3 to-transparent rounded-t-3xl opacity-70"></div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative z-10 p-6">
                  {/* Avatar and Basic Info */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative">
                      <img 
                        src={talent.avatar} 
                        alt={talent.name}
                        className="w-16 h-16 rounded-2xl object-cover border-2 border-purple-400/30"
                      />
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                        <Star className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">{talent.name}</h3>
                      <p className="text-purple-400 text-sm font-medium">{talent.role}</p>
                      <p className="text-slate-400 text-xs">{talent.specialty}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{talent.followers}</div>
                      <div className="text-xs text-slate-400">Followers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">{talent.engagement}</div>
                      <div className="text-xs text-slate-400">Engagement</div>
                    </div>
                  </div>

                  {/* Platforms */}
                  <div className="flex justify-center space-x-3 mb-4">
                    {talent.platforms.map((Platform, platformIndex) => (
                      <div key={platformIndex} className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-600/20 flex items-center justify-center border border-purple-400/30">
                        <Platform className="w-4 h-4 text-purple-400" />
                      </div>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2">
                    {talent.achievements.slice(0, 2).map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center space-x-2">
                        <Award className="w-3 h-3 text-purple-400 flex-shrink-0" />
                        <span className="text-xs text-slate-300">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Stats */}
                  {hoveredTalent === talent.id && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/95 to-transparent p-4 rounded-b-3xl transition-all duration-500">
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div>
                          <div className="text-sm font-bold text-white">{talent.stats.posts}</div>
                          <div className="text-xs text-slate-400">Posts</div>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-purple-400">{talent.stats.collaborations}</div>
                          <div className="text-xs text-slate-400">Collabs</div>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-pink-400">{talent.stats.campaigns}</div>
                          <div className="text-xs text-slate-400">Campaigns</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-3xl p-8 border border-slate-700/50 backdrop-blur-xl">
            <h3 className="text-3xl font-bold text-white mb-4">Join Our Talent Network</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Ready to amplify your digital presence? Join our exclusive network of creators and influencers who are building their digital empires with our expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold text-lg rounded-2xl hover:from-purple-400 hover:to-pink-500 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center space-x-3">
                  <Users className="w-5 h-5" />
                  <span>Apply to Join</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              
              <button 
                onClick={handleAdminAccess}
                className="group relative px-12 py-4 bg-gradient-to-r from-slate-700 to-slate-800 text-white font-bold text-lg rounded-2xl hover:from-slate-600 hover:to-slate-700 transition-all duration-300 shadow-2xl hover:shadow-slate-500/50 hover:scale-105 overflow-hidden border border-slate-600/50"
              >
                <span className="relative z-10 flex items-center justify-center space-x-3">
                  <Star className="w-5 h-5" />
                  <span>{isAuthenticated ? 'Admin Dashboard' : 'Admin Login'}</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Admin Dashboard Modal */}
      {showAdminDashboard && (
        <AdminDashboard
          talents={talents}
          onUpdateTalents={handleUpdateTalents}
          onClose={() => setShowAdminDashboard(false)}
        />
      )}
      
      {/* Login Modal */}
      <LoginModal 
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </section>
  );
};

export default TalentsSection;
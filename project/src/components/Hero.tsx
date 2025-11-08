import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Play, TrendingUp, Users, Zap, Heart, MessageCircle, Share2, Sparkles, Target, Rocket, Star, Award, CheckCircle2, Instagram, Twitter, Youtube, Linkedin, Facebook, Globe, BarChart3, Eye, Clock, Shield, Camera, Video, Mic, Edit3, Layers, TrendingUp as Trending, Hash, AtSign, Send, Bell, Bookmark, Flame, Crown, Diamond, Hexagon, Triangle, Circle, Square, Octagon } from 'lucide-react';
import Header from './Header';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeOrb, setActiveOrb] = useState(0);
  const [floatingShapes, setFloatingShapes] = useState([]);
  const heroRef = useRef(null);

  useEffect(() => {
    // Trigger main animations
    const timer = setTimeout(() => setIsLoaded(true), 500);
    
    // Mouse tracking for parallax
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    // Cycle through orbs
    const orbInterval = setInterval(() => {
      setActiveOrb(prev => (prev + 1) % 6);
    }, 3000);

    // Generate floating geometric shapes
    const shapes = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      shape: [Triangle, Circle, Square, Diamond, Hexagon, Octagon][i % 6],
      size: Math.random() * 20 + 10,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
      speed: Math.random() * 0.5 + 0.2,
      color: ['from-blue-400 to-cyan-500', 'from-violet-400 to-purple-500', 'from-orange-400 to-red-500', 'from-pink-400 to-rose-500', 'from-amber-400 to-yellow-500', 'from-indigo-400 to-blue-500'][i % 6]
    }));
    setFloatingShapes(shapes);

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      clearInterval(orbInterval);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const orbs = [
    { icon: Flame, title: 'Viral Content', color: 'from-blue-400 to-cyan-500', size: 'w-20 h-20', glow: 'shadow-blue-500/50' },
    { icon: Crown, title: 'Brand Authority', color: 'from-violet-400 to-purple-500', size: 'w-16 h-16', glow: 'shadow-violet-500/50' },
    { icon: Diamond, title: 'Premium Strategy', color: 'from-orange-400 to-red-500', size: 'w-24 h-24', glow: 'shadow-orange-500/50' },
    { icon: Target, title: 'Precision Targeting', color: 'from-pink-400 to-rose-500', size: 'w-18 h-18', glow: 'shadow-pink-500/50' },
    { icon: Rocket, title: 'Growth Acceleration', color: 'from-amber-400 to-yellow-500', size: 'w-14 h-14', glow: 'shadow-amber-500/50' },
    { icon: Star, title: 'Influencer Network', color: 'from-indigo-400 to-blue-500', size: 'w-22 h-22', glow: 'shadow-indigo-500/50' }
  ];

  return (
    <div ref={heroRef} className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      <Header />
      
      {/* Unique Floating Orb System */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic Background Grid */}
        <div 
          className="absolute inset-0 opacity-10 transition-transform duration-1000"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233B82F6' fill-opacity='0.3'%3E%3Cpath d='M0 0h100v1H0zM0 0v100h1V0z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px',
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }}
        />
        
        {/* Floating Geometric Shapes */}
        {floatingShapes.map((shape) => {
          const Shape = shape.shape;
          return (
            <div
              key={shape.id}
              className={`absolute transition-all duration-2000 ${isLoaded ? 'opacity-60 scale-100' : 'opacity-0 scale-0'}`}
              style={{
                left: `${shape.x}%`,
                top: `${shape.y}%`,
                transform: `translate(-50%, -50%) rotate(${shape.rotation + Date.now() * shape.speed / 1000}deg) translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
                transitionDelay: `${shape.id * 100}ms`
              }}
            >
              <div className={`w-${Math.floor(shape.size/4)} h-${Math.floor(shape.size/4)} rounded-lg bg-gradient-to-r ${shape.color} opacity-40 animate-pulse`} style={{animationDuration: `${3 + shape.id}s`}}>
                <Shape className="w-full h-full text-white/60" />
              </div>
            </div>
          );
        })}
        
        {/* Floating Service Orbs */}
        {orbs.map((orb, index) => {
          const Icon = orb.icon;
          const isActive = activeOrb === index;
          const angle = (index * 60) + (Date.now() / 80);
          const radius = 350 + Math.sin(Date.now() / 3000 + index) * 80;
          const x = 50 + Math.cos(angle * Math.PI / 180) * (radius / 10);
          const y = 50 + Math.sin(angle * Math.PI / 180) * (radius / 10);
          
          return (
            <div
              key={index}
              className={`absolute transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: `translate(-50%, -50%) translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
                transitionDelay: `${index * 200}ms`
              }}
            >
              <div className={`${orb.size} rounded-2xl bg-gradient-to-r ${orb.color} flex items-center justify-center shadow-2xl ${orb.glow} ${isActive ? 'scale-125 shadow-3xl' : ''} transition-all duration-500 cursor-pointer group border border-white/20`}>
                <Icon className={`${orb.size === 'w-24 h-24' ? 'w-12 h-12' : orb.size === 'w-22 h-22' ? 'w-11 h-11' : orb.size === 'w-20 h-20' ? 'w-10 h-10' : orb.size === 'w-18 h-18' ? 'w-9 h-9' : orb.size === 'w-16 h-16' ? 'w-8 h-8' : 'w-7 h-7'} text-white`} />
                <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Orb Label */}
                <div className={`absolute top-full mt-4 left-1/2 transform -translate-x-1/2 bg-gray-800/90 text-white px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 ${isActive ? 'opacity-100' : ''} border border-white/10 backdrop-blur-sm`}>
                  {orb.title}
                </div>
              </div>
              
              {/* Connecting Lines to Center */}
              <div className={`absolute top-1/2 left-1/2 w-px bg-gradient-to-r ${orb.color} opacity-20 ${isActive ? 'opacity-60' : ''} transition-opacity duration-500`}
                style={{
                  height: '200px',
                  transformOrigin: 'top',
                  transform: `rotate(${Math.atan2(y - 50, x - 50) * 180 / Math.PI + 90}deg)`
                }}
              />
            </div>
          );
        })}
        
        {/* Animated Social Media Icons */}
        {[Instagram, Twitter, Youtube, Linkedin, Facebook, Hash, AtSign, Send, Bell, Heart, Share2, Eye].map((Icon, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-2000 ${isLoaded ? 'opacity-30 scale-100' : 'opacity-0 scale-0'}`}
            style={{
              left: `${10 + (index * 8)}%`,
              top: `${15 + (index % 5) * 18}%`,
              transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
              transitionDelay: `${1000 + index * 150}ms`
            }}
          >
            <div className={`w-8 h-8 rounded-xl bg-gradient-to-r ${['from-blue-400/20 to-cyan-500/20', 'from-violet-400/20 to-purple-500/20', 'from-orange-400/20 to-red-500/20'][index % 3]} backdrop-blur-sm border border-white/10`}>
              <Icon className="w-4 h-4 text-white/60 animate-pulse" style={{animationDuration: `${3 + index}s`}} />
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 px-4 sm:px-8 pt-32 pb-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Unique Central Content Hub */}
          <div className="text-center mb-20">
            
            {/* Revolutionary Headline System */}
            <div className="space-y-6 mb-12">
              <div className={`transition-all duration-1500 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                <h1 className="text-7xl lg:text-9xl font-black leading-none tracking-tight">
                  <span className="block text-white">WE IGNITE</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 animate-pulse">
                    DIGITAL
                  </span>
                  <span className="block text-white">EMPIRES</span>
                </h1>
              </div>
              
              <div className={`transition-all duration-1500 delay-600 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Forge your brand into a <span className="text-blue-400 font-bold">digital dynasty</span> through 
                  revolutionary content strategies, elite influencer networks, and AI-powered campaigns that 
                  <span className="text-cyan-400 font-bold"> dominate every platform</span>.
                </p>
              </div>
            </div>

            {/* Revolutionary CTA System */}
            <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 transition-all duration-1500 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <button className="group relative px-12 py-6 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold text-xl rounded-2xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center space-x-3">
                  <Flame className="w-6 h-6" />
                  <span>Ignite Your Empire</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></div>
              </button>
              
              <button className="group px-12 py-6 bg-gray-800/80 text-white font-bold text-xl rounded-2xl hover:bg-gray-700/80 transition-all duration-300 border-2 border-gray-600/50 hover:border-blue-400/50 flex items-center justify-center space-x-3 hover:scale-105 backdrop-blur-sm">
                <Play className="w-6 h-6" />
                <span>Empire Showcase</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
            {['Netflix', 'Spotify', 'Nike', 'Apple', 'Google', 'Meta'].map((brand, index) => (
              <div 
                key={brand}
                className="text-gray-400 font-bold text-xl hover:text-gray-200 transition-all duration-300 cursor-pointer hover:scale-110"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
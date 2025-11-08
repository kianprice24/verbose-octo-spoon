import React, { useEffect, useState } from 'react';

const SlowLoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Professional timing sequence
    const logoTimer = setTimeout(() => setShowLogo(true), 1000);
    const progressTimer = setTimeout(() => setShowProgress(true), 2500);

    // Smooth progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onLoadingComplete, 800);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 2 + 1;
      });
    }, 200);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(progressTimer);
      clearInterval(progressInterval);
    };
  }, [onLoadingComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-gradient-to-br from-black via-gray-900 to-slate-800 overflow-hidden transition-all duration-1000 ${isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      
      {/* Unique Black & Blue Background */}
      <div className="absolute inset-0">
        {/* Animated blue grid pattern */}
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233B82F6' fill-opacity='0.3'%3E%3Cpath d='M0 0h60v1H0zM0 0v60h1V0z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
          animation: 'gridMove 40s linear infinite'
        }}></div>
        
        {/* Dynamic blue gradient waves */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/30 via-transparent to-blue-800/20 animate-pulse" style={{animationDuration: '8s'}}></div>
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-700/20 via-transparent to-blue-900/30 animate-pulse" style={{animationDuration: '12s', animationDelay: '4s'}}></div>
        </div>
        
        {/* Flowing blue lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent animate-pulse" style={{animationDuration: '6s'}}></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent animate-pulse" style={{animationDuration: '8s', animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-600/50 to-transparent animate-pulse" style={{animationDuration: '10s', animationDelay: '4s'}}></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent animate-pulse" style={{animationDuration: '7s', animationDelay: '1s'}}></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-700/50 to-transparent animate-pulse" style={{animationDuration: '9s', animationDelay: '3s'}}></div>
        
        {/* Vertical blue accent lines */}
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-blue-500/40 to-transparent animate-pulse" style={{animationDuration: '12s'}}></div>
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-blue-600/40 to-transparent animate-pulse" style={{animationDuration: '10s', animationDelay: '4s'}}></div>
        
        {/* Floating blue particles */}
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
              className={`${i % 4 === 0 ? 'w-1 h-1 rounded-full bg-blue-400/60' : i % 4 === 1 ? 'w-2 h-2 rounded-full bg-blue-500/40' : i % 4 === 2 ? 'w-1 h-1 rotate-45 bg-blue-600/50' : 'w-3 h-px bg-blue-400/30'} animate-pulse`}
              style={{animationDuration: `${4 + Math.random() * 8}s`}}
            ></div>
          </div>
        ))}
        
        {/* Radial blue glow from center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-blue-600/20 via-blue-800/10 to-transparent rounded-full animate-pulse" style={{animationDuration: '16s'}}></div>
        
        {/* Orbiting blue rings */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="absolute w-80 h-80 border border-blue-500/20 rounded-full animate-spin" style={{animationDuration: '80s'}}></div>
          <div className="absolute w-96 h-96 border border-blue-400/15 rounded-full animate-spin" style={{animationDuration: '120s', animationDirection: 'reverse'}}></div>
          <div className="absolute w-64 h-64 border border-blue-600/25 rounded-full animate-spin" style={{animationDuration: '60s'}}></div>
          
          {/* Rotating Orbs around the logo */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full shadow-lg"
              style={{
                top: '50%',
                left: '50%',
                transformOrigin: '0 0',
                animation: `orbit ${30 + i * 6}s linear infinite`,
                animationDelay: `${i * 1.5}s`,
                transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateX(${120 + i * 15}px)`,
                background: `linear-gradient(45deg, ${
                  i % 4 === 0 ? '#3B82F6, #60A5FA' : 
                  i % 4 === 1 ? '#1D4ED8, #3B82F6' : 
                  i % 4 === 2 ? '#1E40AF, #2563EB' : 
                  '#0F172A, #1E293B'
                })`,
                boxShadow: `0 0 ${8 + i * 2}px ${
                  i % 4 === 0 ? '#3B82F6' : 
                  i % 4 === 1 ? '#60A5FA' : 
                  i % 4 === 2 ? '#2563EB' : 
                  '#1D4ED8'
                }/60`
              }}
            >
              <div 
                className="w-full h-full rounded-full animate-pulse" 
                style={{
                  background: `radial-gradient(circle, ${
                    i % 4 === 0 ? '#60A5FA' : 
                    i % 4 === 1 ? '#3B82F6' : 
                    i % 4 === 2 ? '#2563EB' : 
                    '#1D4ED8'
                  }/80, transparent)`,
                  animationDuration: `${4 + Math.random() * 6}s`
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        
        {/* Professional Logo Container */}
        <div className={`relative transition-all duration-3000 ease-out ${showLogo ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`}>
          
          {/* Subtle outer glow */}
          <div className="absolute inset-0 w-32 h-32 mx-auto bg-gradient-to-r from-blue-500/30 via-blue-600/40 to-blue-500/30 rounded-3xl blur-2xl animate-pulse" style={{animationDuration: '8s'}}></div>
          
          {/* Professional logo container */}
          <div className="relative w-28 h-28 mx-auto bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/50 border border-blue-400/50 backdrop-blur-sm group">
            <img 
              src="/logo.png" 
              alt="Dispulse Agency Logo" 
              className="h-16 w-16 filter brightness-110 drop-shadow-lg transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Subtle inner highlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 rounded-2xl"></div>
          </div>
          
          {/* Elegant rotating ring */}
          <div className="absolute inset-0 w-36 h-36 mx-auto border border-blue-400/40 rounded-full animate-spin" style={{animationDuration: '60s'}}></div>
          
          {/* Professional corner accents */}
          <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-blue-500/30 rounded-tl"></div>
          <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-blue-500/30 rounded-tr"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-blue-500/30 rounded-bl"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-blue-500/30 rounded-br"></div>
        </div>

        {/* Professional progress indicator */}
        <div className={`absolute bottom-16 left-1/2 transform -translate-x-1/2 transition-all duration-2500 ${showProgress ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
          
          {/* Modern loading container */}
          <div className="flex flex-col items-center space-y-6">
            
            {/* Animated loading dots */}
            <div className="flex items-center space-x-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="relative"
                  style={{ animationDelay: `${i * 0.4}s` }}
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-bounce shadow-lg shadow-blue-500/50" style={{animationDuration: '2s'}}>
                    <div className="absolute inset-0 bg-blue-300/60 rounded-full animate-ping" style={{animationDuration: '4s'}}></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Elegant progress bar */}
            <div className="w-96 max-w-sm">
              <div className="relative bg-black/40 rounded-full h-2 overflow-hidden border border-blue-500/40 shadow-inner">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-blue-700/40 to-blue-900/30 animate-pulse" style={{animationDuration: '6s'}}></div>
                
                {/* Progress fill with enhanced effects */}
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 transition-all duration-1000 ease-out relative shadow-lg shadow-blue-500/60"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                >
                  {/* Multiple shimmer layers */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 animate-pulse" style={{animationDuration: '3s'}}></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-300/50 via-blue-200/60 to-blue-300/50 animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}}></div>
                </div>
                
                {/* Progress indicator dot */}
                <div 
                  className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full border-2 border-white/80 shadow-xl shadow-blue-500/60 transition-all duration-1000"
                  style={{ left: `${Math.min(progress, 100)}%`, marginLeft: '-8px' }}
                >
                  <div className="absolute inset-0 bg-blue-300/80 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
                </div>
              </div>
              
              {/* Progress percentage and status */}
              <div className="flex justify-between items-center mt-4">
                <span className="text-blue-300/90 text-sm font-medium tracking-wide">Initializing</span>
                <span className="text-blue-400 text-sm font-mono font-bold">{Math.round(progress)}%</span>
              </div>
            </div>
            
            {/* Subtle loading message */}
            <div className="text-center">
              <p className="text-blue-200/70 text-xs font-light tracking-widest uppercase">
                Preparing Experience
              </p>
            </div>
            
          </div>
        </div>
      </div>

      {/* Professional corner elements */}
      <div className={`absolute top-8 left-8 w-6 h-6 border-l border-t border-blue-400/60 transition-all duration-2500 ${showLogo ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
      <div className={`absolute top-8 right-8 w-6 h-6 border-r border-t border-blue-500/60 transition-all duration-2500 delay-500 ${showLogo ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
      <div className={`absolute bottom-8 left-8 w-6 h-6 border-l border-b border-blue-600/60 transition-all duration-2500 delay-1000 ${showLogo ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
      <div className={`absolute bottom-8 right-8 w-6 h-6 border-r border-b border-blue-400/60 transition-all duration-2500 delay-1500 ${showLogo ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>

      {/* Custom keyframes for smooth animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        @keyframes orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(var(--orbit-radius, 120px)) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(var(--orbit-radius, 120px)) rotate(-360deg); }
        }
      `}</style>
    </div>
  );
};

export default SlowLoadingScreen;
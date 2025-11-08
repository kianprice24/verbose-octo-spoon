import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [showLogo, setShowLogo] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    // Staggered animation sequence
    const logoTimer = setTimeout(() => setShowLogo(true), 300);
    const textTimer = setTimeout(() => setShowText(true), 800);
    const progressTimer = setTimeout(() => setShowProgress(true), 1200);

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsAnimating(false);
            setTimeout(onLoadingComplete, 800);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(textTimer);
      clearTimeout(progressTimer);
      clearInterval(progressInterval);
    };
  }, [onLoadingComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center transition-all duration-800 ${isAnimating ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving gradient lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent animate-pulse"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-600/25 to-transparent animate-pulse delay-700"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-pulse delay-500"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-600/30 to-transparent animate-pulse delay-1000"></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main loading content */}
      <div className="relative z-10 text-center">
        {/* Logo container with multiple effects */}
        <div className={`relative mb-8 transition-all duration-1000 ${showLogo ? 'translate-y-0 opacity-100 scale-100 rotate-0' : 'translate-y-20 opacity-0 scale-50 rotate-180'}`}>
          {/* Outer rotating ring */}
          <div className="absolute inset-0 w-24 h-24 mx-auto border-2 border-blue-500/30 rounded-2xl animate-spin-slow"></div>
          
          {/* Middle pulsing ring */}
          <div className="absolute inset-2 w-20 h-20 mx-auto border border-blue-400/40 rounded-2xl animate-pulse"></div>
          
          {/* Inner glow ring */}
          <div className="absolute inset-4 w-16 h-16 mx-auto border border-blue-300/20 rounded-xl animate-pulse delay-500"></div>
          
          {/* Main logo container */}
          <div className="relative w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-2xl border border-blue-500/50">
            <img 
              src="/logo.png" 
              alt="Dispulse Agency Logo" 
              className="h-12 w-12 filter brightness-110 drop-shadow-lg"
            />
            {/* Inner glow */}
            <div className="absolute inset-0 bg-white/10 rounded-2xl animate-pulse"></div>
          </div>
          
          {/* Status indicator */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full border-4 border-gray-800 shadow-lg shadow-blue-400/50">
            <div className="w-full h-full bg-blue-300 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Company text */}
        <div className={`mb-12 transition-all duration-1000 delay-300 ${showText ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide drop-shadow-lg mb-2">
            DISPULSE
          </h1>
          <p className="text-lg text-slate-400 font-medium tracking-widest uppercase drop-shadow-sm">
            Digital Agency
          </p>
          <div className="mt-4 text-blue-400 text-sm animate-pulse">
            Initializing Experience...
          </div>
        </div>

        {/* Progress bar */}
        <div className={`w-80 max-w-sm mx-auto transition-all duration-1000 delay-500 ${showProgress ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Progress container */}
          <div className="relative bg-gray-800/50 rounded-full h-2 overflow-hidden border border-blue-500/30 shadow-lg">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-blue-600/30 to-blue-700/20 animate-pulse"></div>
            
            {/* Progress fill */}
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 transition-all duration-300 ease-out shadow-lg shadow-blue-500/50"
              style={{ width: `${Math.min(progress, 100)}%` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-pulse"></div>
            </div>
          </div>
          
          {/* Progress text */}
          <div className="flex justify-between mt-3 text-sm">
            <span className="text-slate-400">Loading</span>
            <span className="text-blue-400 font-mono">{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Loading dots */}
        <div className={`mt-8 flex justify-center space-x-2 transition-all duration-1000 delay-700 ${showProgress ? 'opacity-100' : 'opacity-0'}`}>
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      {/* Corner accents */}
      <div className={`absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-blue-400/60 rounded-tl transition-all duration-700 delay-1000 ${showLogo ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
      <div className={`absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-blue-500/60 rounded-tr transition-all duration-700 delay-1100 ${showLogo ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
      <div className={`absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-blue-600/60 rounded-bl transition-all duration-700 delay-1200 ${showLogo ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
      <div className={`absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-blue-400/60 rounded-br transition-all duration-700 delay-1300 ${showLogo ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
    </div>
  );
};

export default LoadingScreen;
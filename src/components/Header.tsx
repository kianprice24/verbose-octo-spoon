import React, { useEffect, useState } from 'react';
import LoginModal from './LoginModal';

const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="px-4 sm:px-8 py-4 sm:py-6 relative overflow-hidden z-40">
      <div className="max-w-7xl mx-auto relative">
        {/* Animated background elements - Blue only */}
        <div className={`absolute inset-0 overflow-hidden transition-all duration-1500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          {/* Moving gradient lines - Blue only */}
          <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-pulse transition-all duration-1500 delay-500 ${isLoaded ? 'translate-x-0' : '-translate-x-full'}`}></div>
          <div className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent animate-pulse delay-700 transition-all duration-1500 delay-700 ${isLoaded ? 'translate-x-0' : 'translate-x-full'}`}></div>
        </div>

        {/* Professional curved container with enhanced effects */}
        <div className={`relative transition-all duration-1500 delay-400 ${isLoaded ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-10 opacity-0 scale-95'}`}>
          {/* Multi-layered glow effects - Blue only */}
          <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/15 to-indigo-500/20 rounded-2xl sm:rounded-3xl blur-lg animate-pulse transition-all duration-1500 delay-600 ${isLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}></div>
          <div className={`absolute inset-0 bg-gradient-to-r from-blue-400/10 via-transparent to-cyan-400/10 rounded-2xl sm:rounded-3xl blur-md transition-all duration-1500 delay-800 ${isLoaded ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}></div>
          
          {/* Liquid Glass Overlay */}
          <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl transition-all duration-1500 delay-900 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            {/* Main glass layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-2xl sm:rounded-3xl backdrop-blur-md"></div>
            
            {/* Liquid flow effect */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-300/20 via-blue-400/15 to-indigo-500/10 rounded-2xl sm:rounded-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
              <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-bl from-blue-300/15 via-transparent to-cyan-400/10 rounded-2xl sm:rounded-3xl animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
            </div>
            
            {/* Glass reflection highlights */}
            <div className="absolute top-2 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"></div>
            <div className="absolute top-4 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"></div>
            
            {/* Liquid droplet effects */}
            <div className="absolute top-3 right-8 w-2 h-2 bg-white/20 rounded-full animate-pulse" style={{animationDuration: '3s'}}></div>
            <div className="absolute top-6 right-12 w-1 h-1 bg-cyan-300/30 rounded-full animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}}></div>
            <div className="absolute bottom-4 left-10 w-1.5 h-1.5 bg-blue-300/25 rounded-full animate-pulse" style={{animationDuration: '4s', animationDelay: '2s'}}></div>
            
            {/* Glossy overlay for enhanced shine */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden">
              {/* Primary glossy layer */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/8 via-white/4 to-transparent rounded-t-2xl sm:rounded-t-3xl"></div>
              
              {/* Secondary glossy accent */}
              <div className="absolute top-0 left-1/4 right-1/4 h-1/3 bg-gradient-to-b from-white/12 via-white/6 to-transparent rounded-t-2xl sm:rounded-t-3xl opacity-80"></div>
              
              {/* Glossy edge highlights */}
              <div className="absolute top-1 left-2 right-2 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="absolute top-3 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
              
              {/* Subtle side reflections */}
              <div className="absolute top-0 left-0 w-px h-1/2 bg-gradient-to-b from-white/20 to-transparent"></div>
              <div className="absolute top-0 right-0 w-px h-1/2 bg-gradient-to-b from-white/20 to-transparent"></div>
              
              {/* Corner glossy accents */}
              <div className="absolute top-2 left-2 w-8 h-8 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-sm"></div>
              <div className="absolute top-2 right-2 w-6 h-6 bg-gradient-to-bl from-white/8 to-transparent rounded-full blur-sm"></div>
            </div>
          </div>
          
          {/* Main professional container with enhanced styling */}
          <div className="relative bg-gradient-to-r from-slate-900/60 via-blue-900/50 to-indigo-900/60 rounded-2xl sm:rounded-3xl p-3 sm:p-6 backdrop-blur-xl border border-cyan-400/30">
            {/* Enhanced corner accents with glow - Blue only */}
            <div className={`absolute top-2 sm:top-3 left-2 sm:left-3 w-2 sm:w-3 h-2 sm:h-3 border-l-2 border-t-2 border-cyan-400/60 rounded-tl transition-all duration-1000 delay-1000 ${isLoaded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
            <div className={`absolute top-2 sm:top-3 right-2 sm:right-3 w-2 sm:w-3 h-2 sm:h-3 border-r-2 border-t-2 border-blue-400/60 rounded-tr transition-all duration-1000 delay-1100 ${isLoaded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
            <div className={`absolute bottom-2 sm:bottom-3 left-2 sm:left-3 w-2 sm:w-3 h-2 sm:h-3 border-l-2 border-b-2 border-indigo-400/60 rounded-bl transition-all duration-1000 delay-1200 ${isLoaded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
            <div className={`absolute bottom-2 sm:bottom-3 right-2 sm:right-3 w-2 sm:w-3 h-2 sm:h-3 border-r-2 border-b-2 border-purple-400/60 rounded-br transition-all duration-1000 delay-1300 ${isLoaded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>

            {/* Subtle scan line effect */}
            <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-cyan-300/10 to-transparent h-px animate-pulse rounded-2xl sm:rounded-3xl transition-all duration-1500 delay-900 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}></div>

            <div className="flex items-center justify-between relative z-10 flex-wrap lg:flex-nowrap gap-4 lg:gap-0">
              {/* Enhanced logo with multiple effects */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                <div className={`relative group transition-all duration-1500 delay-600 ${isLoaded ? 'translate-x-0 opacity-100 rotate-0 scale-100' : '-translate-x-20 opacity-0 -rotate-180 scale-50'}`}>
                  {/* Rotating outer ring - Blue */}
                  <div className="absolute inset-0 w-10 sm:w-14 h-10 sm:h-14 border-2 border-cyan-400/40 rounded-xl animate-spin-slow"></div>
                  
                  {/* Pulsing middle ring - Blue */}
                  <div className="absolute inset-1 w-8 sm:w-12 h-8 sm:h-12 border border-blue-400/50 rounded-xl animate-pulse"></div>
                  
                  {/* Main logo container with enhanced effects - Blue gradient */}
                  <div className="relative w-8 sm:w-12 h-8 sm:h-12 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 rounded-xl flex items-center justify-center border border-cyan-400/50 group-hover:scale-110 transition-all duration-500">
                    <img 
                      src="/logo.png" 
                      alt="Dispulse Agency Logo" 
                      className="h-4 sm:h-7 w-4 sm:w-7 filter brightness-110"
                    />
                    {/* Inner glow */}
                    <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Enhanced status indicator - Blue */}
                  <div className="absolute -top-1 -right-1 w-3 sm:w-4 h-3 sm:h-4 bg-cyan-400 rounded-full border-2 border-slate-800">
                    <div className="w-full h-full bg-blue-300 rounded-full animate-ping"></div>
                  </div>
                </div>
                
                {/* Enhanced company branding */}
                <div className={`text-center sm:text-left transition-all duration-1500 delay-800 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                  <h1 className="text-lg sm:text-xl font-bold text-white tracking-wide drop-shadow-lg">
                    DISPULSE
                  </h1>
                  <p className="hidden sm:block text-xs text-slate-400 font-medium tracking-widest uppercase">
                    Digital Agency
                  </p>
                  <p className="sm:hidden text-xs text-slate-400 font-medium tracking-wider uppercase">
                    Agency
                  </p>
                </div>
              </div>

              {/* Enhanced navigation with more effects - Blue hovers only */}
              <nav className="hidden lg:flex items-center space-x-1">
                <a href="#" className={`group relative px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-blue-400 transition-all duration-500 transform hover:scale-105 text-sm sm:text-base ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`} style={{transitionDelay: '1000ms'}}>
                  <span className="relative z-10">Home</span>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                  <div className="absolute inset-0 bg-cyan-400/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </a>
                
                <a href="#services" className={`group relative px-3 sm:px-5 py-2 sm:py-2.5 bg-blue-800/50 text-white font-semibold rounded-full hover:bg-blue-700/60 transition-all duration-500 transform hover:scale-105 border border-blue-600/40 hover:border-cyan-400/50 text-sm sm:text-base ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`} style={{transitionDelay: '1100ms'}}>
                  <span className="relative z-10">Services</span>
                  <div className="absolute inset-0 bg-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                </a>
                
                <a href="#" className={`group relative px-3 sm:px-5 py-2 sm:py-2.5 bg-blue-800/50 text-white font-semibold rounded-full hover:bg-blue-700/60 transition-all duration-500 transform hover:scale-105 border border-blue-600/40 hover:border-blue-400/50 text-sm sm:text-base ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`} style={{transitionDelay: '1200ms'}}>
                  <span className="relative z-10">Our Talents</span>
                  <div className="absolute inset-0 bg-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                </a>
                
                <a href="#" className={`group relative px-3 sm:px-5 py-2 sm:py-2.5 bg-blue-800/50 text-white font-semibold rounded-full hover:bg-blue-700/60 transition-all duration-500 transform hover:scale-105 border border-blue-600/40 hover:border-indigo-400/50 text-sm sm:text-base ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`} style={{transitionDelay: '1300ms'}}>
                  <span className="relative z-10">FAQ</span>
                  <div className="absolute inset-0 bg-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                </a>
                
                <a href="#" className={`group relative px-3 sm:px-5 py-2 sm:py-2.5 bg-blue-800/50 text-white font-semibold rounded-full hover:bg-blue-700/60 transition-all duration-500 transform hover:scale-105 border border-blue-600/40 hover:border-purple-400/50 text-sm sm:text-base ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`} style={{transitionDelay: '1400ms'}}>
                  <span className="relative z-10">Contact</span>
                  <div className="absolute inset-0 bg-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                </a>
                
                <button 
                  onClick={() => setShowLoginModal(true)}
                  className={`group relative px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-full hover:from-orange-400 hover:to-red-500 transition-all duration-500 transform hover:scale-105 border border-orange-400/50 text-sm sm:text-base ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`} 
                  style={{transitionDelay: '1500ms'}}
                >
                  <span className="relative z-10">LOGIN</span>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                  <div className="absolute inset-0 bg-orange-400/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              </nav>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden relative p-2 bg-blue-800/50 text-white rounded-full hover:bg-blue-700/60 transition-all duration-500 border border-blue-600/40 hover:border-cyan-400/50 ${isLoaded ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-10 opacity-0 scale-75'}`}
                style={{transitionDelay: '1600ms'}}
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`block w-5 h-0.5 bg-white transition-all duration-500 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                  <span className={`block w-5 h-0.5 bg-white mt-1 transition-all duration-500 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-5 h-0.5 bg-white mt-1 transition-all duration-500 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
                </div>
              </button>

              {/* Enhanced CTA with multiple effects - Blue only */}
              <button className={`hidden sm:block group relative px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-blue-400 transition-all duration-500 transform hover:scale-110 border border-cyan-400/50 text-sm sm:text-base ${isLoaded ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-20 opacity-0 scale-75'}`} style={{transitionDelay: '1500ms'}}>
                <span className="relative z-10">Get in Touch</span>
                
                {/* Multiple glow layers - Blue only */}
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                <div className="absolute inset-0 bg-cyan-400/40 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500 rounded-full"></div>
              </button>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden overflow-hidden transition-all duration-700 ${isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
              <nav className="flex flex-col space-y-2 pt-4 border-t border-cyan-400/20">
                <a href="#" className="group relative px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-blue-400 transition-all duration-500 shadow-lg text-center">
                  <span className="relative z-10">Home</span>
                </a>
                <a href="#services" className="group relative px-4 py-2.5 bg-blue-800/50 text-white font-semibold rounded-full hover:bg-blue-700/60 transition-all duration-500 shadow-lg border border-blue-600/40 hover:border-cyan-400/50 text-center">
                  <span className="relative z-10">Services</span>
                </a>
                <a href="#" className="group relative px-4 py-2.5 bg-blue-800/50 text-white font-semibold rounded-full hover:bg-blue-700/60 transition-all duration-500 shadow-lg border border-blue-600/40 hover:border-blue-400/50 text-center">
                  <span className="relative z-10">Our Talents</span>
                </a>
                <a href="#" className="group relative px-4 py-2.5 bg-blue-800/50 text-white font-semibold rounded-full hover:bg-blue-700/60 transition-all duration-500 shadow-lg border border-blue-600/40 hover:border-indigo-400/50 text-center">
                  <span className="relative z-10">FAQ</span>
                </a>
                <a href="#" className="group relative px-4 py-2.5 bg-blue-800/50 text-white font-semibold rounded-full hover:bg-blue-700/60 transition-all duration-500 shadow-lg border border-blue-600/40 hover:border-purple-400/50 text-center">
                  <span className="relative z-10">Contact</span>
                </a>
                <button 
                  onClick={() => setShowLoginModal(true)}
                  className="group relative px-4 py-2.5 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-full hover:from-orange-400 hover:to-red-500 transition-all duration-500 shadow-lg border border-orange-400/50 text-center w-full"
                >
                  <span className="relative z-10">LOGIN</span>
                </button>
                <button className="group relative px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-blue-400 transition-all duration-500 shadow-xl border border-cyan-400/50 hover:shadow-cyan-400/30 text-center mt-2">
                  <span className="relative z-10">Get in Touch</span>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
      
      {/* Login Modal */}
      <LoginModal 
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLoginSuccess={() => {
          // Handle successful login - could redirect or show success message
          console.log('Login successful!');
        }}
      />
    </header>
  );
};

export default Header;
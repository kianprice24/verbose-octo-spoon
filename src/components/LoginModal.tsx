import React, { useState } from 'react';
import { X, Lock, Mail, Eye, EyeOff, Shield, AlertCircle, CheckCircle } from 'lucide-react';
import { adminAuth, supabase } from '../lib/supabase';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    // Check if Supabase is configured
    if (!supabase) {
      setError('Supabase not configured. Please connect to Supabase first.')
      setIsLoading(false)
      return
    }

    try {
      const { data, error } = await adminAuth.signIn(email, password);
      
      if (error) {
        setError('Invalid credentials. Please try again.');
        return;
      }

      if (data.user) {
        // Check if user is admin
        const isAdmin = await adminAuth.isAdmin();
        if (!isAdmin) {
          setError('Access denied. Admin privileges required.');
          await adminAuth.signOut();
          return;
        }

        setSuccess('Login successful! Redirecting...');
        setTimeout(() => {
          onLoginSuccess();
          onClose();
          // Reset form
          setEmail('');
          setPassword('');
          setSuccess('');
        }, 1500);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setEmail('');
    setPassword('');
    setError('');
    setSuccess('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 rounded-3xl border border-slate-700/50 backdrop-blur-xl w-full max-w-md overflow-hidden">
        
        {/* Liquid Glass Overlay */}
        <div className="absolute inset-0 rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/2 to-transparent rounded-3xl backdrop-blur-sm"></div>
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-400/8 via-red-400/4 to-transparent rounded-3xl animate-pulse" style={{animationDuration: '6s'}}></div>
            <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-orange-400/6 via-transparent to-red-400/3 rounded-3xl animate-pulse" style={{animationDuration: '8s', animationDelay: '3s'}}></div>
          </div>
          <div className="absolute top-2 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="absolute top-4 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/4 via-white/2 to-transparent rounded-t-3xl"></div>
            <div className="absolute top-0 left-1/4 right-1/4 h-1/4 bg-gradient-to-b from-white/6 via-white/3 to-transparent rounded-t-3xl opacity-70"></div>
          </div>
        </div>

        {/* Header */}
        <div className="relative z-10 p-6 border-b border-slate-700/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center shadow-2xl shadow-orange-500/30">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Admin Login</h2>
                <p className="text-slate-400 text-sm">Access the dashboard</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="p-2 bg-slate-700/50 text-slate-400 rounded-xl hover:bg-slate-600/50 hover:text-white transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Login Form */}
        <div className="relative z-10 p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5 text-slate-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-orange-400/50 focus:outline-none transition-colors"
                  placeholder="admin@dispulse.com"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="w-5 h-5 text-slate-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-orange-400/50 focus:outline-none transition-colors"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center space-x-2 p-3 bg-red-500/20 border border-red-500/30 rounded-xl">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                <span className="text-red-300 text-sm">{error}</span>
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="flex items-center space-x-2 p-3 bg-green-500/20 border border-green-500/30 rounded-xl">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-green-300 text-sm">{success}</span>
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full group relative px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl hover:from-orange-400 hover:to-red-500 transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Signing In...</span>
                  </>
                ) : (
                  <>
                    <Shield className="w-5 h-5" />
                    <span>Sign In</span>
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            </button>

            {/* Demo Credentials */}
            <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/30">
              <h4 className="text-sm font-semibold text-slate-300 mb-2">Demo Credentials:</h4>
              <div className="text-xs text-slate-400 space-y-1">
                <p><strong>Email:</strong> admin@dispulse.com</p>
                <p><strong>Password:</strong> admin123</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
import React, { useState, useEffect } from 'react';
import { Plus, Edit3, Trash2, Save, X, Users, Star, Camera, Palette, Code, Megaphone, Instagram, Twitter, Youtube, Linkedin, Eye, TrendingUp, Award, Upload } from 'lucide-react';

interface Talent {
  id: number;
  name: string;
  role: string;
  category: string;
  followers: string;
  engagement: string;
  platforms: string[];
  avatar: string;
  specialty: string;
  achievements: string[];
  stats: {
    posts: number;
    collaborations: number;
    campaigns: number;
  };
}

interface AdminDashboardProps {
  talents: Talent[];
  onUpdateTalents: (talents: Talent[]) => void;
  onClose: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ talents, onUpdateTalents, onClose }) => {
  const [localTalents, setLocalTalents] = useState<Talent[]>(talents);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [newTalent, setNewTalent] = useState<Partial<Talent>>({
    name: '',
    role: '',
    category: 'influencers',
    followers: '',
    engagement: '',
    platforms: [],
    avatar: '',
    specialty: '',
    achievements: [''],
    stats: { posts: 0, collaborations: 0, campaigns: 0 }
  });

  const categories = [
    { id: 'influencers', name: 'Influencers', icon: Star },
    { id: 'creators', name: 'Content Creators', icon: Camera },
    { id: 'artists', name: 'Digital Artists', icon: Palette },
    { id: 'developers', name: 'Developers', icon: Code },
    { id: 'marketers', name: 'Marketers', icon: Megaphone }
  ];

  const platformOptions = [
    { id: 'Instagram', name: 'Instagram', icon: Instagram },
    { id: 'Twitter', name: 'Twitter', icon: Twitter },
    { id: 'Youtube', name: 'YouTube', icon: Youtube },
    { id: 'Linkedin', name: 'LinkedIn', icon: Linkedin },
    { id: 'Tiktok', name: 'TikTok', icon: Camera }
  ];

  const sampleAvatars = [
    "image.png",
    "image2.png",
    "image3.png",
    "image.png",
    "image2.png",
    "image3.png",
    "image.png",
    "image2.png"
  ];

  const handleAddTalent = () => {
    if (!newTalent.name || !newTalent.role) return;

    const talent: Talent = {
      id: Math.max(...localTalents.map(t => t.id), 0) + 1,
      name: newTalent.name || '',
      role: newTalent.role || '',
      category: newTalent.category || 'influencers',
      followers: newTalent.followers || '0',
      engagement: newTalent.engagement || '0%',
      platforms: newTalent.platforms || [],
      avatar: newTalent.avatar || sampleAvatars[0],
      specialty: newTalent.specialty || '',
      achievements: newTalent.achievements?.filter(a => a.trim()) || [],
      stats: newTalent.stats || { posts: 0, collaborations: 0, campaigns: 0 }
    };

    setLocalTalents([...localTalents, talent]);
    setNewTalent({
      name: '',
      role: '',
      category: 'influencers',
      followers: '',
      engagement: '',
      platforms: [],
      avatar: '',
      specialty: '',
      achievements: [''],
      stats: { posts: 0, collaborations: 0, campaigns: 0 }
    });
    setIsAddingNew(false);
  };

  const handleDeleteTalent = (id: number) => {
    setLocalTalents(localTalents.filter(t => t.id !== id));
  };

  const handleSaveChanges = () => {
    onUpdateTalents(localTalents);
    onClose();
  };

  const handlePlatformToggle = (platform: string, isNew: boolean = false) => {
    if (isNew) {
      const currentPlatforms = newTalent.platforms || [];
      if (currentPlatforms.includes(platform)) {
        setNewTalent({
          ...newTalent,
          platforms: currentPlatforms.filter(p => p !== platform)
        });
      } else {
        setNewTalent({
          ...newTalent,
          platforms: [...currentPlatforms, platform]
        });
      }
    }
  };

  const handleAchievementChange = (index: number, value: string, isNew: boolean = false) => {
    if (isNew) {
      const achievements = [...(newTalent.achievements || [''])];
      achievements[index] = value;
      setNewTalent({ ...newTalent, achievements });
    }
  };

  const addAchievement = (isNew: boolean = false) => {
    if (isNew) {
      setNewTalent({
        ...newTalent,
        achievements: [...(newTalent.achievements || ['']), '']
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 rounded-3xl border border-slate-700/50 backdrop-blur-xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-700/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Admin Dashboard</h2>
                <p className="text-slate-400 text-sm">Manage your talent network</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsAddingNew(true)}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-400 hover:to-pink-500 transition-all duration-300 flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add Talent</span>
              </button>
              <button
                onClick={handleSaveChanges}
                className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-400 hover:to-emerald-500 transition-all duration-300 flex items-center space-x-2"
              >
                <Save className="w-4 h-4" />
                <span>Save Changes</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 bg-slate-700/50 text-slate-400 rounded-xl hover:bg-slate-600/50 hover:text-white transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          
          {/* Add New Talent Form */}
          {isAddingNew && (
            <div className="bg-slate-800/50 rounded-2xl p-6 mb-6 border border-slate-700/30">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                <Plus className="w-5 h-5 text-purple-400" />
                <span>Add New Talent</span>
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Basic Info */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                    <input
                      type="text"
                      value={newTalent.name || ''}
                      onChange={(e) => setNewTalent({ ...newTalent, name: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-purple-400/50 focus:outline-none transition-colors"
                      placeholder="Enter talent name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Role</label>
                    <input
                      type="text"
                      value={newTalent.role || ''}
                      onChange={(e) => setNewTalent({ ...newTalent, role: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-purple-400/50 focus:outline-none transition-colors"
                      placeholder="e.g., Lifestyle Influencer"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Category</label>
                    <select
                      value={newTalent.category || 'influencers'}
                      onChange={(e) => setNewTalent({ ...newTalent, category: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:border-purple-400/50 focus:outline-none transition-colors"
                    >
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Specialty</label>
                    <input
                      type="text"
                      value={newTalent.specialty || ''}
                      onChange={(e) => setNewTalent({ ...newTalent, specialty: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-purple-400/50 focus:outline-none transition-colors"
                      placeholder="e.g., Fashion & Beauty"
                    />
                  </div>
                </div>
                
                {/* Stats & Social */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Followers</label>
                      <input
                        type="text"
                        value={newTalent.followers || ''}
                        onChange={(e) => setNewTalent({ ...newTalent, followers: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-purple-400/50 focus:outline-none transition-colors"
                        placeholder="e.g., 2.4M"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Engagement</label>
                      <input
                        type="text"
                        value={newTalent.engagement || ''}
                        onChange={(e) => setNewTalent({ ...newTalent, engagement: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-purple-400/50 focus:outline-none transition-colors"
                        placeholder="e.g., 8.2%"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Avatar URL</label>
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={newTalent.avatar || ''}
                        onChange={(e) => setNewTalent({ ...newTalent, avatar: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-purple-400/50 focus:outline-none transition-colors"
                        placeholder="Enter image URL or select from samples"
                      />
                      <div className="flex flex-wrap gap-2">
                        {sampleAvatars.slice(0, 4).map((avatar, index) => (
                          <button
                            key={index}
                            onClick={() => setNewTalent({ ...newTalent, avatar })}
                            className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                              newTalent.avatar === avatar ? 'border-purple-400' : 'border-slate-600/50 hover:border-slate-500'
                            }`}
                          >
                            <img src={avatar} alt={`Sample ${index + 1}`} className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Platforms</label>
                    <div className="flex flex-wrap gap-2">
                      {platformOptions.map(platform => {
                        const Icon = platform.icon;
                        const isSelected = (newTalent.platforms || []).includes(platform.id);
                        return (
                          <button
                            key={platform.id}
                            onClick={() => handlePlatformToggle(platform.id, true)}
                            className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                              isSelected
                                ? 'bg-purple-500 text-white'
                                : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                            <span className="text-sm">{platform.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-slate-300 mb-2">Stats</label>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <input
                      type="number"
                      value={newTalent.stats?.posts || 0}
                      onChange={(e) => setNewTalent({
                        ...newTalent,
                        stats: { ...newTalent.stats!, posts: parseInt(e.target.value) || 0 }
                      })}
                      className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-purple-400/50 focus:outline-none transition-colors"
                      placeholder="Posts"
                    />
                    <label className="text-xs text-slate-400 mt-1 block">Posts</label>
                  </div>
                  <div>
                    <input
                      type="number"
                      value={newTalent.stats?.collaborations || 0}
                      onChange={(e) => setNewTalent({
                        ...newTalent,
                        stats: { ...newTalent.stats!, collaborations: parseInt(e.target.value) || 0 }
                      })}
                      className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-purple-400/50 focus:outline-none transition-colors"
                      placeholder="Collaborations"
                    />
                    <label className="text-xs text-slate-400 mt-1 block">Collaborations</label>
                  </div>
                  <div>
                    <input
                      type="number"
                      value={newTalent.stats?.campaigns || 0}
                      onChange={(e) => setNewTalent({
                        ...newTalent,
                        stats: { ...newTalent.stats!, campaigns: parseInt(e.target.value) || 0 }
                      })}
                      className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-purple-400/50 focus:outline-none transition-colors"
                      placeholder="Campaigns"
                    />
                    <label className="text-xs text-slate-400 mt-1 block">Campaigns</label>
                  </div>
                </div>
              </div>
              
              {/* Achievements */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-slate-300">Achievements</label>
                  <button
                    onClick={() => addAchievement(true)}
                    className="text-purple-400 hover:text-purple-300 text-sm flex items-center space-x-1"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Add</span>
                  </button>
                </div>
                <div className="space-y-2">
                  {(newTalent.achievements || ['']).map((achievement, index) => (
                    <input
                      key={index}
                      type="text"
                      value={achievement}
                      onChange={(e) => handleAchievementChange(index, e.target.value, true)}
                      className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-purple-400/50 focus:outline-none transition-colors"
                      placeholder={`Achievement ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setIsAddingNew(false)}
                  className="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-xl hover:bg-slate-600/50 transition-all duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddTalent}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-400 hover:to-pink-500 transition-all duration-300"
                >
                  Add Talent
                </button>
              </div>
            </div>
          )}

          {/* Existing Talents */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center space-x-2">
              <Users className="w-5 h-5 text-purple-400" />
              <span>Current Talents ({localTalents.length})</span>
            </h3>
            
            <div className="grid gap-4">
              {localTalents.map((talent) => (
                <div key={talent.id} className="bg-slate-800/30 rounded-2xl p-4 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={talent.avatar} 
                        alt={talent.name}
                        className="w-12 h-12 rounded-xl object-cover border border-slate-600/50"
                      />
                      <div>
                        <h4 className="text-white font-semibold">{talent.name}</h4>
                        <p className="text-purple-400 text-sm">{talent.role}</p>
                        <p className="text-slate-400 text-xs">{talent.specialty}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-white font-semibold">{talent.followers}</div>
                        <div className="text-xs text-slate-400">Followers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-purple-400 font-semibold">{talent.engagement}</div>
                        <div className="text-xs text-slate-400">Engagement</div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleDeleteTalent(talent.id)}
                          className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-all duration-300"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
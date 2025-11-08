import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

// Check if Supabase is properly configured
const isSupabaseConfigured = supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl !== 'https://your-project.supabase.co' &&
  supabaseUrl !== 'YOUR_SUPABASE_URL' &&
  supabaseAnonKey !== 'your-anon-key' &&
  supabaseAnonKey !== 'YOUR_SUPABASE_ANON_KEY' &&
  supabaseUrl.includes('.supabase.co') &&
  supabaseUrl.startsWith('https://')

// Create a safe Supabase client that won't make network requests if not configured
export const supabase = (() => {
  if (!isSupabaseConfigured) {
    return null;
  }
  
  try {
    return createClient(supabaseUrl, supabaseAnonKey);
  } catch (error) {
    console.warn('Failed to initialize Supabase client:', error);
    return null;
  }
})();

// Admin authentication functions
export const adminAuth = {
  // Sign in admin user
  signIn: async (email: string, password: string) => {
    if (!supabase || !isSupabaseConfigured) {
      return { 
        data: null, 
        error: new Error('Supabase not configured. Please connect to Supabase first.') 
      }
    }
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      
      if (error) throw error
      
      // Update last login
      if (data.user) {
        await supabase
          .from('admin_users')
          .update({ last_login: new Date().toISOString() })
          .eq('email', email)
      }
      
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  },

  // Sign out admin user
  signOut: async () => {
    if (!supabase || !isSupabaseConfigured) {
      return { error: new Error('Supabase not configured') }
    }
    
    try {
      const { error } = await supabase.auth.signOut()
      return { error }
    } catch (error) {
      return { error }
    }
  },

  // Get current admin user
  getCurrentUser: async () => {
    if (!supabase || !isSupabaseConfigured) {
      return { user: null, adminData: null, error: new Error('Supabase not configured') }
    }
    
    try {
      const { data: { user }, error } = await supabase.auth.getUser()
      
      if (error || !user) {
        return { user: null, adminData: null, error }
      }

      // Get admin user data
      const { data: adminData, error: adminError } = await supabase
        .from('admin_users')
        .select('*')
        .eq('email', user.email)
        .single()

      return { user, adminData, error: adminError }
    } catch (error) {
      return { user: null, adminData: null, error }
    }
  },

  // Check if user is admin
  isAdmin: async () => {
    if (!supabase || !isSupabaseConfigured) return false
    
    try {
      const { adminData } = await adminAuth.getCurrentUser()
      return adminData && adminData.is_active && (adminData.role === 'admin' || adminData.role === 'super_admin')
    } catch (error) {
      return false
    }
  }
}

// Database types
export interface AdminUser {
  id: string
  email: string
  password_hash: string
  role: 'admin' | 'super_admin'
  is_active: boolean
  last_login: string | null
  created_at: string
  updated_at: string
}
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPA_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPA_ANON;

export const supabase = (supabaseUrl && supabaseAnonKey && supabaseUrl !== "https://gbdyrurzyyfmuobeckit.supabase.co") 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;
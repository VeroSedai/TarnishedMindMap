import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPA_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPA_ANON;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Database types
export interface Submission {
  id?: number;
  name: string;
  email: string;
  phone: string;
  car_model: string;
  created_at?: string;
}

export interface Visitor {
  id?: number;
  ip: string;
  city: string;
  region: string;
  country: string;
  created_at?: string;
}

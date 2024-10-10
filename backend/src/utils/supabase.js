import { createClient } from '@supabase/supabase-js';

// Specify Supabase URL and Key directly here
const supabaseUrl = 'SUPABASE_URL';
const supabaseKey = 'SUPABASE_KEY';

// Create the Supabase client using the hardcoded values
export const supabase = createClient(supabaseUrl, supabaseKey);

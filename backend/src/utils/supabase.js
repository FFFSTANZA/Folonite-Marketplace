import { createClient } from '@supabase/supabase-js';

// Specify Supabase URL and Key directly here
const supabaseUrl = '-----';
const supabaseKey = '----';

// Create the Supabase client using the hardcoded values
export const supabase = createClient(supabaseUrl, supabaseKey);

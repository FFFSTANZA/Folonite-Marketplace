import { createClient } from '@supabase/supabase-js';

// Specify Supabase URL and Key directly here
const supabaseUrl = 'https://djcjpwclaykmyqglhtca.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqY2pwd2NsYXlrbXlxZ2xodGNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgyMDU5NjMsImV4cCI6MjA0Mzc4MTk2M30.bk5WxSjzFq6fxrV-W5I-Q_y7pOKkXSChTxIB6-iFZfE';

// Create the Supabase client using the hardcoded values
export const supabase = createClient(supabaseUrl, supabaseKey);

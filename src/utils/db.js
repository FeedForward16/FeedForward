// firebase config paste here 
     // supabaseClient.js
     import { createClient } from '@supabase/supabase-js';
     import 'dotenv/config';

     const supabaseUrl = 'https://zctbzgtpfgkfjvzgkkcs.supabase.co';
     const supabaseAnonKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjdGJ6Z3RwZmdrZmp2emdra2NzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1MTMzNjcsImV4cCI6MjA2MjA4OTM2N30.2xWsfL_KHsCjzaxRNFL6VxZuvutUh2ypnaj1sZFx6Ag';

     const supabase = createClient(supabaseUrl, supabaseAnonKey);

     export default supabase;
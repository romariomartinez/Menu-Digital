import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tkcrkwrrcvvcqsyeliex.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrY3Jrd3JyY3Z2Y3FzeWVsaWV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcxMTU4NzEsImV4cCI6MjA3MjY5MTg3MX0.7VotmnuLOnbX9p5xUE6bPIKAUkvsFnBvI23u4RlzjEs";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

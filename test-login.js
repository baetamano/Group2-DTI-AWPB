import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://engimvovjhbuozskneys.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuZ2ltdm92amhidW96c2tuZXlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzNzE1MjcsImV4cCI6MjA5MTk0NzUyN30.PKo0hXy0_8zZClNJrqZieSQcGU2tL1yNdp_NLQhbfWA');

console.log('Testing login...');
try {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'admin@test.com',
    password: 'password123'
  });

  if (error) {
    console.log('Login error:', error.message);
  } else {
    console.log('Login success! User:', data.user?.email);
    console.log('Session exists:', !!data.session);

    // Try to get profile
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', data.user.id)
      .single();

    if (profileError) {
      console.log('Profile error:', profileError.message);
    } else {
      console.log('Profile:', profile);
    }
  }
} catch (err) {
  console.log('Exception:', err.message);
}
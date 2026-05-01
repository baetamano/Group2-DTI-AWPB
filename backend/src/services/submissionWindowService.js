import { supabaseAdmin } from '../config/supabaseClient.js';

// For now, we'll store submission window in a simple table
// In production, this could be a settings table or config
export const getSubmissionWindow = async () => {
  const { data, error } = await supabaseAdmin
    .from('submission_windows')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(1);

  if (error) throw error;
  return data[0] || null;
};

export const updateSubmissionWindow = async (windowData) => {
  // First, try to update existing record
  const existing = await getSubmissionWindow();

  if (existing) {
    const { data, error } = await supabaseAdmin
      .from('submission_windows')
      .update(windowData)
      .eq('id', existing.id)
      .select();

    if (error) throw error;
    return data[0];
  } else {
    // Create new record
    const { data, error } = await supabaseAdmin
      .from('submission_windows')
      .insert(windowData)
      .select();

    if (error) throw error;
    return data[0];
  }
};
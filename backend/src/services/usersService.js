import { supabaseAdmin } from '../config/supabaseClient.js';

export const getAllUsers = async () => {
  const { data, error } = await supabaseAdmin
    .from('users')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
};

export const updateUser = async (userId, updates) => {
  const { data, error } = await supabaseAdmin
    .from('users')
    .update(updates)
    .eq('id', userId)
    .select();

  if (error) throw error;
  if (!data || data.length === 0) {
    throw new Error('No user updated');
  }

  return data[0];
};
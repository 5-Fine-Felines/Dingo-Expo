import { supabase } from '../../supabase';
import { Category } from './types';

export const getCategories = async (): Promise<Category[] | null> => {
  try {
    const { data, error } = await supabase
      .from('categories')
      .select('*');

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return null;
  }
};

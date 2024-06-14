import { supabase } from '../../supabase';

type Pet = {
  id: string;
  image_url: string;
  name: string;
  breed: string;
  address: string;
  special_notes: string;
  medical_notes: string;
  next_injection_date: string; 
};

export const getPets = async (): Promise<Pet[] | null> => {
  try {
    const { data, error } = await supabase
      .from('pets')
      .select('*');

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching pets:', error);
    return null;
  }
};

export const getPetById = async (id: string): Promise<Pet | null> => {
  try {
    const { data, error } = await supabase
      .from('pets')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching pet:', error);
    return null;
  }
};

export const createPet = async (pet: Omit<Pet, 'id'>): Promise<Pet | null> => {
  try {
    const { data, error } = await supabase
      .from('pets')
      .insert([pet]);

    if (error) throw error;
    return data[0];
  } catch (error) {
    console.error('Error creating pet:', error);
    return null;
  }
};

export const updatePet = async (id: string, pet: Partial<Pet>): Promise<Pet | null> => {
  try {
    const { data, error } = await supabase
      .from('pets')
      .update(pet)
      .eq('id', id);

    if (error) throw error;
    return data[0];
  } catch (error) {
    console.error('Error updating pet:', error);
    return null;
  }
};

export const deletePet = async (id: string): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('pets')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Error deleting pet:', error);
    return false;
  }
};

import { supabase } from '../../supabase'; 

interface Reminder {
  id: number;
  title: string;
  description: string;
  datetime: string;
}

const createReminder = async (title: string, description: string, datetime: string): Promise<Reminder | null> => {
  try {
    const { data, error } = await supabase
      .from('reminders')
      .insert({ title, description, datetime })
      .single();

    if (error) {
      throw error;
    }

    return data as Reminder; // Return the created reminder data
  } catch (error) {
    console.error('Error creating reminder:', error);
    throw error;
  }
};

const getReminderById = async (id: number): Promise<Reminder | null> => {
  try {
    const { data, error } = await supabase
      .from('reminders')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    return data as Reminder; // Return the fetched reminder data
  } catch (error) {
    console.error('Error fetching reminder:', error);
    throw error;
  }
};

const updateReminder = async (id: number, title: string, description: string, datetime: string): Promise<Reminder | null> => {
  try {
    const { data, error } = await supabase
      .from('reminders')
      .update({ title, description, datetime })
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    return data as Reminder; // Return the updated reminder data
  } catch (error) {
    console.error('Error updating reminder:', error);
    throw error;
  }
};

const deleteReminder = async (id: number): Promise<void> => {
  try {
    const { error } = await supabase
      .from('reminders')
      .delete()
      .eq('id', id);

    if (error) {
      throw error;
    }

    console.log('Reminder deleted successfully');
  } catch (error) {
    console.error('Error deleting reminder:', error);
    throw error;
  }
};

export { createReminder, getReminderById, updateReminder, deleteReminder };

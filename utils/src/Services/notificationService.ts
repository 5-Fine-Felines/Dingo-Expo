import { supabase } from '../../supabase'; 

interface Notification {
  id: number;
  title: string;
  description: string;
  datetime: string;
}

const createNotification = async (title: string, description: string, datetime: string): Promise<Notification | null> => {
  try {
    const { data, error } = await supabase
      .from('notifications')
      .insert({ title, description, datetime })
      .single();

    if (error) {
      throw error;
    }

    return data as Notification; // Return the created notification data
  } catch (error) {
    console.error('Error creating notification:', error);
    throw error;
  }
};

const getNotificationById = async (id: number): Promise<Notification | null> => {
  try {
    const { data, error } = await supabase
      .from('notifications')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    return data as Notification; // Return the fetched notification data
  } catch (error) {
    console.error('Error fetching notification:', error);
    throw error;
  }
};

const updateNotification = async (id: number, title: string, description: string, datetime: string): Promise<Notification | null> => {
  try {
    const { data, error } = await supabase
      .from('notifications')
      .update({ title, description, datetime })
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    return data as Notification; // Return the updated notification data
  } catch (error) {
    console.error('Error updating notification:', error);
    throw error;
  }
};

const deleteNotification = async (id: number): Promise<void> => {
  try {
    const { error } = await supabase
      .from('notifications')
      .delete()
      .eq('id', id);

    if (error) {
      throw error;
    }

    console.log('Notification deleted successfully');
  } catch (error) {
    console.error('Error deleting notification:', error);
    throw error;
  }
};

export { createNotification, getNotificationById, updateNotification, deleteNotification };

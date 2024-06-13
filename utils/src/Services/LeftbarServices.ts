import { supabase } from '../../supabase'; 
interface UserProfile {
  username: string;
  email: string;
  avatar_url: string;
}

const getUserProfile = async (userId: string): Promise<UserProfile | null> => {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('username, email, avatar_url')
      .eq('user_id', userId)
      .single();

    if (error) {
      throw error;
    }

    return data as UserProfile;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

const updateProfile = async (userId: string, username: string, email: string, avatarUrl: string): Promise<void> => {
  try {
    const { error } = await supabase
      .from('profiles')
      .update({ username, email, avatar_url: avatarUrl })
      .eq('user_id', userId);

    if (error) {
      throw error;
    }

    console.log('Profile updated successfully');
  } catch (error) {
    console.error('Error updating profile:', error);
    throw error;
  }
};

export { getUserProfile, updateProfile };

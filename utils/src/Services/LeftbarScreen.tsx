import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import { supabase } from '../../supabase';

// Define UserProfile type directly in this file
type UserProfile = {
  id: string;
  username: string;
  email: string;
  avatar_url: string;
};

const LeftbarScreen: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) throw error;

      const user = session?.user;
      if (user) {
        const profile = await getUserProfile(user.id);
        if (profile) {
          setUserProfile(profile);
          setUsername(profile.username);
          setEmail(profile.email);
          setAvatarUrl(profile.avatar_url);
        }
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const handleUpdateProfile = async () => {
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) throw error;

      const user = session?.user;
      if (user) {
        await updateProfile(user.id, username, email, avatarUrl);
        fetchUserProfile(); // Refresh profile after update
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      console.log('Signed out successfully');
      // Navigate to login screen or clear app state as needed
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Define getUserProfile function directly in this file
  const getUserProfile = async (userId: string): Promise<UserProfile | null> => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('id, username, email, avatar_url')
        .eq('id', userId)
        .single();

      if (error) throw error;
      return data as UserProfile;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }
  };

  // Define updateProfile function directly in this file
  const updateProfile = async (userId: string, username: string, email: string, avatarUrl: string): Promise<void> => {
    try {
      const { error } = await supabase
        .from('profiles')
        .update({ username, email, avatar_url: avatarUrl })
        .eq('id', userId);

      if (error) throw error;
      console.log('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: avatarUrl }} style={styles.profilePicture} />
      <Text>Username:</Text>
      <TextInput value={username} onChangeText={setUsername} />
      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} />
      <Button title="Update Profile" onPress={handleUpdateProfile} />
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default LeftbarScreen;

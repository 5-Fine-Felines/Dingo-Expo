import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { createNotification, getNotificationById, updateNotification, deleteNotification } from '../../../utils/src/Services/notificationService'; 

const NotificationScreen = () => {
  const [notification, setNotification] = useState<{ id: number; title: string; description: string; datetime: string } | null>(null);

  // Example: Create a notification
  const handleCreateNotification = async () => {
    try {
      const newNotification = await createNotification('Meeting', 'Team meeting at 10:00 AM', '2024-06-14 10:00:00');
      setNotification(newNotification);
      console.log('Created Notification:', newNotification);
    } catch (error) {
      console.error('Error creating notification:', error);
    }
  };

  // Example: Get a notification by ID
  const handleGetNotificationById = async () => {
    const notificationId = 1; // Replace with actual notification ID
    try {
      const fetchedNotification = await getNotificationById(notificationId);
      setNotification(fetchedNotification);
      console.log('Fetched Notification:', fetchedNotification);
    } catch (error) {
      console.error('Error fetching notification:', error);
    }
  };

  // Example: Update a notification
  const handleUpdateNotification = async () => {
    if (notification) {
      try {
        const updatedNotification = await updateNotification(notification.id, 'Updated Meeting', notification.description, notification.datetime);
        setNotification(updatedNotification);
        console.log('Updated Notification:', updatedNotification);
      } catch (error) {
        console.error('Error updating notification:', error);
      }
    }
  };

  // Example: Delete a notification
  const handleDeleteNotification = async () => {
    if (notification) {
      try {
        await deleteNotification(notification.id);
        setNotification(null);
        console.log('Notification deleted successfully.');
      } catch (error) {
        console.error('Error deleting notification:', error);
      }
    }
  };

  return (
    <View>
      <Text>Notification: {notification ? notification.title : 'No notification loaded'}</Text>
      <Button title="Create Notification" onPress={handleCreateNotification} />
      <Button title="Get Notification by ID" onPress={handleGetNotificationById} />
      <Button title="Update Notification" onPress={handleUpdateNotification} />
      <Button title="Delete Notification" onPress={handleDeleteNotification} />
    </View>
  );
};

export default NotificationScreen;

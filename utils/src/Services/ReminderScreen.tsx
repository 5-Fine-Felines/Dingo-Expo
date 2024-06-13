import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { createReminder, getReminderById, updateReminder, deleteReminder } from './reminderService'; 

const ReminderScreen = () => {
  const [reminder, setReminder] = useState<{ id: number; title: string; description: string; datetime: string } | null>(null);

  // Example: Create a reminder
  const handleCreateReminder = async () => {
    try {
      const newReminder = await createReminder('Study', 'Study for exam at 4:00 PM', '2024-06-15 16:00:00');
      setReminder(newReminder);
      console.log('Created Reminder:', newReminder);
    } catch (error) {
      console.error('Error creating reminder:', error);
    }
  };

  // Example: Get a reminder by ID
  const handleGetReminderById = async () => {
    const reminderId = 1; // Replace with actual reminder ID
    try {
      const fetchedReminder = await getReminderById(reminderId);
      setReminder(fetchedReminder);
      console.log('Fetched Reminder:', fetchedReminder);
    } catch (error) {
      console.error('Error fetching reminder:', error);
    }
  };

  // Example: Update a reminder
  const handleUpdateReminder = async () => {
    if (reminder) {
      try {
        const updatedReminder = await updateReminder(reminder.id, 'Updated Study Plan', reminder.description, reminder.datetime);
        setReminder(updatedReminder);
        console.log('Updated Reminder:', updatedReminder);
      } catch (error) {
        console.error('Error updating reminder:', error);
      }
    }
  };

  // Example: Delete a reminder
  const handleDeleteReminder = async () => {
    if (reminder) {
      try {
        await deleteReminder(reminder.id);
        setReminder(null);
        console.log('Reminder deleted successfully.');
      } catch (error) {
        console.error('Error deleting reminder:', error);
      }
    }
  };

  return (
    <View>
      <Text>Reminder: {reminder ? reminder.title : 'No reminder loaded'}</Text>
      <Button title="Create Reminder" onPress={handleCreateReminder} />
      <Button title="Get Reminder by ID" onPress={handleGetReminderById} />
      <Button title="Update Reminder" onPress={handleUpdateReminder} />
      <Button title="Delete Reminder" onPress={handleDeleteReminder} />
    </View>
  );
};

export default ReminderScreen;

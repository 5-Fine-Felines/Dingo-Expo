import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import HeaderBar from '@/components/HeaderBar';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const UserHome = () => {
  const [searchText, setSearchText] = React.useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchText);
  };

  const pets = [
    { 
      id: '1',
      name: 'Pedro', 
      status: 'In sit proident',
      imagePath: require('../../assets/images/pup01.jpg'),

    },
    { 
      id: '2', 
      name: 'Ryan', 
      status: 'Et qui velit',
      imagePath: require('../../assets/images/pup02.jpg'),
      
    },
    { 
      id: '3', 
      name: 'Brian', 
      status: 'Elit ut qui duis',
      imagePath: require('../../assets/images/pup03.jpg'),
      
    }
  ];

  const reminders = [
    { id: '1', title: 'Doctor Appointment', type: 'External' },
    { id: '2', title: 'Vaccine Reminder', type: 'External' },
  ];

  return (
    <View style={styles.container}>
      <HeaderBar />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <MaterialIcons name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={styles.heading}>My Pets</Text>
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.petCard}>
            <Image source={item.imagePath} style={styles.petImage} />
            <View style={styles.petTextContainer}>
              <Text style={styles.petName}>{item.name}</Text>
              <Text style={styles.petStatus}>{item.status}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <Text style={styles.remindersHeading}>Reminders</Text>
      <FlatList
        data={reminders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.reminderItem}>
            <Text style={styles.reminderTitle}>{item.title}</Text>
            <View style={styles.reminderTypeContainer}>
              <Text style={styles.reminderType}>{item.type}</Text>
              <FontAwesome name="external-link" size={16} color="orange" />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  announcementButton: {
    padding: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    padding: 10,
    marginHorizontal: 2,
    backgroundColor: 'white',
  },
  searchButton: {
    height: 40,
    width: 80,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  petCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    marginBottom: 8,
    borderRadius: 5,
  },
  petImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 16,
  },
  petTextContainer: {
    flex: 1,
  },
  petName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  petStatus: {
    fontSize: 14,
    color: 'gray',
  },
  remindersHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  reminderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    marginBottom: 8,
    borderRadius: 5,
  },
  reminderTitle: {
    fontSize: 16,
  },
  reminderTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reminderType: {
    fontSize: 14,
    color: 'gray',
    marginRight: 4,
  },
});

export default UserHome;

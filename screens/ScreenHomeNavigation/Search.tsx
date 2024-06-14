import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

/* import { useNavigation } from '@react-navigation/native'; */

const Search = () => {
  const [searchText, setSearchText] = React.useState("");

  /* const navigation = useNavigation(); */

  const handleSearch = () => {
    console.log("Searching for:", searchText);
  };

  const pets = [
    { id: '1', name: 'Pedro', status: 'In sit proident' },
    { id: '2', name: 'Ryan', status: 'Et qui velit' },
    { id: '3', name: 'Brian', status: 'Elit ut qui duis' },
  ];

  const reminders = [
    { id: '1', title: 'Meeting title', type: 'External' },
    { id: '2', title: 'Another meeting', type: 'External' },
  ];

 /*  const handleCardPress = (pet) => {
    pula methenna path eka demmanm hari mn hitanne
  }; */

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Image source={{ uri: 'https://via.placeholder.com/40' }} style={styles.profileImage} />
          <Text style={styles.profileName}>Carl Jonson</Text>
        </View>
        <TouchableOpacity style={styles.announcementButton}>
          <FontAwesome name="bullhorn" size={24} color="orange" />
        </TouchableOpacity>
      </View>
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
          <TouchableOpacity style={styles.petCard} /* onPress={() => handleCardPress(item)} */ >
            <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.petImage} />
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
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    padding: 10,
    backgroundColor: 'white',
  },
  searchButton: {
    height: 40,
    width: 40,
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

export default Search;

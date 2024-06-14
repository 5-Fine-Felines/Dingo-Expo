// Library.js

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Library = () => {
  const navigation = useNavigation();

  const pets = [
    { id: '1', name: 'Pedro', description: 'In sit proident' },
    { id: '2', name: 'Ryan', description: 'Et qui velit' },
    { id: '3', name: 'Brian', description: 'Elit ut qui duis' },
  ];

  const contacts = [
    { id: '1', name: 'Dr. Anna Jones', specialty: 'General Practitioner', rating: 4.5 },
    { id: '2', name: 'Dr. John Smith', specialty: 'Veterinarian', rating: 4.8 },
  ];

/*   const handlePetCardPress = (pet) => {
    navigation.navigate('PetDetails', { pet });
  };

  const handleContactCardPress = (contact) => {
    navigation.navigate('ContactDetails', { contact });
  }; */

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://via.placeholder.com/50' }}
            style={styles.profileIcon}
          />
          <Text style={styles.profileName}>Carl Jonson</Text>
        </View>
        <TouchableOpacity style={styles.announcementButton}>
          <MaterialIcons name="announcement" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Conversation Section */}
      <View style={styles.conversationSection}>
        <Text style={styles.sectionTitle}>Conversation</Text>
        <View style={styles.conversationContent}>
          <TouchableOpacity style={styles.conversationButton}>
            <Image source={require('../../assets/images/icon-button-10.png')} style={styles.profileIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.conversationButton}>
            <Image source={require('../../assets/images/icon-button-101.png')} style={styles.profileIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.conversationButton}>
            <Image source={require('../../assets/images/icon-button-102.png')} style={styles.profileIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.conversationButton}>
            <Image source={require('../../assets/images/icon-button-103.png')} style={styles.profileIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.conversationButton}>
            <Image source={require('../../assets/images/icon-button-104.png')} style={styles.profileIcon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* My Pets Section */}
      <View style={styles.petsSection}>
        <View style={styles.petsHeader}>
          <Text style={styles.sectionTitle}>My Pets</Text>
          <TouchableOpacity style={styles.addPetButton}>
            <FontAwesome name="plus" size={16} color="white" />
            <Text style={styles.addPetButtonText}>Add My Pet</Text>
          </TouchableOpacity>
        </View>
        {pets.map(pet => (
          <TouchableOpacity key={pet.id} style={styles.petCard} /* onPress={() => handlePetCardPress(pet)} */>
            <Image
              source={{ uri: 'https://via.placeholder.com/50' }}
              style={styles.petImage}
            />
            <View style={styles.petInfo}>
              <Text style={styles.petName}>{pet.name}</Text>
              <Text style={styles.petDescription}>{pet.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Last Contact Section */}
      <View style={styles.lastContactSection}>
        <Text style={styles.sectionTitle}>Last Contact</Text>
        {contacts.map(contact => (
          <TouchableOpacity key={contact.id} style={styles.doctorCard} /* onPress={() => handleContactCardPress(contact)} */>
            <Image
              source={{ uri: 'https://via.placeholder.com/50' }}
              style={styles.profileIcon}
            />
            <View style={styles.doctorInfo}>
              <Text style={styles.doctorName}>{contact.name}</Text>
              <Text style={styles.doctorSpecialty}>{contact.specialty}</Text>
            </View>
            <View style={styles.rating}>
              <FontAwesome name="star" size={16} color="black" />
              <Text style={styles.ratingText}>{contact.rating}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Calendar Section */}
      <View style={styles.calendarSection}>
        <Text style={styles.calendarTitle}>Next available today at 03:30 PM</Text>
  
{/* Calendar ekak metenna demmnm hari */}

   
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileName: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  announcementButton: {
    padding: 5,
  },
  conversationSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  conversationContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ff8c00',
    padding: 10,
    borderRadius: 5,
  },
  conversationButton: {
    padding: 10,
  },
  petsSection: {
    marginBottom: 20,
  },
  petsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addPetButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff8c00',
    padding: 10,
    borderRadius: 5,
  },
  addPetButtonText: {
    color: 'white',
    marginLeft: 5,
  },
  petCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  petImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  petInfo: {
    marginLeft: 10,
  },
  petName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  petDescription: {
    fontSize: 14,
    color: '#666',
  },
  lastContactSection: {
    marginBottom: 20,
  },
  doctorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  doctorInfo: {
    marginLeft: 10,
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  doctorSpecialty: {
    fontSize: 14,
    color: '#666',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 16,
  },
  calendarSection: {
    marginBottom: 20,
  },
  calendarTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },


});

export default Library;

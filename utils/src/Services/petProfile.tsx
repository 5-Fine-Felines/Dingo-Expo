import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, ScrollView } from 'react-native';
import { getPetById, updatePet } from '../Services/petService';

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

const petProfile: React.FC<{ route: any }> = ({ route }) => {
  const [pet, setPet] = useState<Pet | null>(null);
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [address, setAddress] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');
  const [medicalNotes, setMedicalNotes] = useState('');
  const [nextInjectionDate, setNextInjectionDate] = useState('');

  const { petId } = route.params;

  useEffect(() => {
    fetchPet(petId);
  }, [petId]);

  const fetchPet = async (id: string) => {
    const pet = await getPetById(id);
    if (pet) {
      setPet(pet);
      setName(pet.name);
      setBreed(pet.breed);
      setAddress(pet.address);
      setSpecialNotes(pet.special_notes);
      setMedicalNotes(pet.medical_notes);
      setNextInjectionDate(pet.next_injection_date);
    }
  };

  const handleSaveChanges = async () => {
    if (pet) {
      const updatedPet: Partial<Pet> = {
        name,
        breed,
        address,
        special_notes: specialNotes,
        medical_notes: medicalNotes,
        next_injection_date: nextInjectionDate,
      };

      const result = await updatePet(pet.id, updatedPet);
      if (result) {
        setPet(result);
        alert('Pet information updated successfully.');
      } else {
        alert('Failed to update pet information.');
      }
    }
  };

  if (!pet) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: pet.image_url }} style={styles.petImage} />
      <Text>Name:</Text>
      <TextInput value={name} onChangeText={setName} style={styles.input} />
      <Text>Breed:</Text>
      <TextInput value={breed} onChangeText={setBreed} style={styles.input} />
      <Text>Address:</Text>
      <TextInput value={address} onChangeText={setAddress} style={styles.input} />
      <Text>Special Notes:</Text>
      <TextInput value={specialNotes} onChangeText={setSpecialNotes} style={styles.input} />
      <Text>Medical Notes:</Text>
      <TextInput value={medicalNotes} onChangeText={setMedicalNotes} style={styles.input} />
      <Text>Next Injection Date:</Text>
      <TextInput value={nextInjectionDate} onChangeText={setNextInjectionDate} style={styles.input} />
      <Button title="Save Changes" onPress={handleSaveChanges} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  petImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default petProfile;

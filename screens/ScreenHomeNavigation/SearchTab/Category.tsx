import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Image, Modal } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';

interface Dog {
  id: string;
  breed: string;
  origin: string;
  description: string;
  imagePath: any;

}

const dogs: Dog[] = [
  {
    id: '1',
    breed: 'Rottweiler',
    origin: 'German',
    description: 'Rottweilers are robust, powerful dogs with a solid build. Historically, they were used to herd livestock and pull carts for butchers. They have a calm, confident demeanor and are known for their loyalty and protective nature. Rottweilers are intelligent, trainable, and make excellent working dogs as well as family companions.',
    imagePath: require('../../../assets/images/category/011.png')
  },
  {
    id: '2',
    breed: 'German Shepherd',
    origin: 'German',
    description: 'German Shepherds are large, agile, and muscular dogs with a noble character and high intelligence. They were initially developed for herding sheep but have since become popular as police, military, and search-and-rescue dogs. They are known for their loyalty, courage, and trainability, making them excellent working dogs and loyal family pets.',
    imagePath: require('../../../assets/images/category/012.jpg')
  },
  {
    id: '3',
    breed: 'Labrador retriever',
    origin: 'Canada',
    description: 'Labrador Retrievers are medium to large-sized dogs known for their friendly and outgoing nature. They were originally bred as fishing and hunting dogs and are now one of the most popular family pets due to their gentle temperament, intelligence, and versatility. Labradors excel in various roles, including service dogs, therapy dogs, and search-and-rescue dogs.',
    imagePath: require('../../../assets/images/category/013.jpg')
  },
  {
    id: '4',
    breed: 'Golden Retriever',
    origin: 'Scotland',
    description: 'Golden Retrievers are medium to large-sized dogs with a friendly, tolerant attitude. They were initially bred for retrieving game during hunting due to their soft mouths. Golden Retrievers are known for their intelligence, friendliness, and devotion to their families. They are popular as family pets and also excel in roles such as guide dogs, therapy dogs, and search-and-rescue dogs.',
    imagePath: require('../../../assets/images/category/014.png')
  },
  {
    id: '5',
    breed: 'Pitbull Terrier',
    origin: 'United State of America',
    description: 'Pitbull Terriers, often referred to simply as Pitbulls, encompass several breeds, including the American Pit Bull Terrier. They are medium-sized, muscular dogs known for their strength, agility, and determination. Despite their reputation, many Pitbulls are affectionate and loyal companions when properly trained and socialized. They were originally bred for bull-baiting and later as farm dogs and family companions.',
    imagePath: require('../../../assets/images/category/015.jpg')
  },{
    id: '6',
    breed: 'Beagle',
    origin: 'England',
    description: 'Beagles are small to medium-sized dogs with a keen sense of smell and tracking instinct. They were originally bred for hunting hare and other small game. Beagles are known for their friendly and curious nature, making them great family pets. They are also used in detection roles due to their exceptional scent-tracking abilities.',
    imagePath: require('../../../assets/images/category/016.jpg')
  },
  {
    id: '7',
    breed: 'Dalmatian',
    origin: 'Croatia',
    description: 'Dalmatians are medium-sized dogs with a distinctive white coat adorned with black or liver spots. They were initially used as carriage dogs, guarding horses and carriages. Dalmatians are known for their energetic and playful nature, making them good companions for active families. They are also intelligent and can be trained for various activities, including obedience and agility.',
    imagePath: require('../../../assets/images/category/017.jpg')
  }
]

const Category = () => {

  const [searchText, setSearchText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPet, setSelectedPet] = useState<Dog | null>(null);

  const handleSearch = () => {
    console.log("Searching for:", searchText);
  };

  const handlePetPress = (dogs: Dog) => {
    setSelectedPet(dogs);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedPet(null);
  };
  
  return (
    <View style={styles.container}>
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
      <Text style={styles.heading}>Browse Category</Text>
      <FlatList
        data={dogs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.petCard} onPress={() => handlePetPress(item)}>
            <Image source={item.imagePath} style={styles.petImage} />
            <View style={styles.petTextContainer}>
              <Text style={styles.petName}>{item.breed}</Text>
              <Text style={styles.petStatus}>{item.origin}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

{selectedPet && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={handleCloseModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image resizeMode='contain' source={selectedPet.imagePath} style={styles.modalImage} />
              
              <Text style={styles.modalPetDetails}>Breed: {selectedPet.breed}</Text>
            
              <Text style={styles.modalPetDetails}>Origin Country: {selectedPet.origin}</Text>
              {/* <Text style={styles.modalPetDetails}>Vaccination Details: {selectedPet.vaccinationDetails}</Text> */}
              <Text style={styles.modalPetDetails}>Notes: {selectedPet.description}</Text>
              {/* <TouchableOpacity style={styles.vaccinationButton} onPress={handleVaccinationPress}>
                <Text style={styles.vaccinationButtonText}>Vaccination</Text>
              </TouchableOpacity> */}
              <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 6,
    top:12,
    backgroundColor: '#f5f5f5',
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  modalPetName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  modalPetDetails: {
    fontSize: 16,
    marginBottom: 4,
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

})

export default Category
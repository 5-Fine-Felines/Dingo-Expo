import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Pressable, ScrollView, Dimensions } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

interface NewsCardProps {
  profileName: string;
  profileImg: string;
  location: string;
  date: string;
  text: string;
  hashtags: string[];
  images: string[];
  likes: number;
  comments: number;
  shares: number;
}

const NewsCard: React.FC<NewsCardProps> = ({ profileName, profileImg, location, date, text, hashtags, images, likes, comments, shares }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (image: string) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeImage = () => {
    setSelectedImage(null);
    setModalVisible(false);
  };

  return (
    <View>
      <View style={styles.card}>
        <View style={styles.header}>
          <Image source={{ uri: profileImg }} style={styles.profileImage} />
          <View>
            <Text style={styles.profileName}>{profileName}</Text>
            <Text style={styles.location}>{location}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
        </View>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.hashtags}>{hashtags.join(' ')}</Text>
        <View style={styles.imagesContainer}>
          {images.map((image, index) => (
            <TouchableOpacity key={index} onPress={() => openImage(image)}>
              <Image source={{ uri: image }} style={styles.image} />
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton}>
            <FontAwesome name="thumbs-o-up" size={20} color="gray" />
            <Text style={styles.actionText}>{likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <FontAwesome name="comment-o" size={20} color="gray" />
            <Text style={styles.actionText}>{comments}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <MaterialIcons name="share" size={20} color="gray" />
            <Text style={styles.actionText}>{shares}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {selectedImage && (
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeImage}
        >
          <Pressable style={styles.modalOverlay} onPress={closeImage}>
            <View style={styles.modalContent}>
              <Image source={{ uri: selectedImage }} style={styles.modalImage} />
            </View>
          </Pressable>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    shadowColor: '#000',
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  profileName: {
    fontWeight: 'bold',
  },
  location: {
    color: 'gray',
  },
  date: {
    color: 'gray',
    fontSize: 12,
  },
  text: {
    marginBottom: 8,
  },
  hashtags: {
    color: 'blue',
    marginBottom: 8,
  },
  imagesContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 8,
    borderRadius: 8,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    marginLeft: 4,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    height: '70%',
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default NewsCard;

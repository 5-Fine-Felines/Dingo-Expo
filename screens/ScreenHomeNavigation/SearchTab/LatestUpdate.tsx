import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const LatestUpdate = () => {
  const data = [
    { imageId: 1, imagePath: 'https://th.bing.com/th/id/OIF.cBNewkSyLnCERRd5yQzNMA?rs=1&pid=ImgDetMain', imageTitle: 'New Pet Camera', imageDate: 'June 15, 2024', readTime: '5 mins read' },
    { imageId: 2, imagePath: 'https://th.bing.com/th/id/OIP.PfE0kj5m1EcmEdlQ-sKSmwHaE8?rs=1&pid=ImgDetMain', imageTitle: 'Does Parrots Have Teeth', imageDate: 'June 13, 2024', readTime: '2 hours read' },
    { imageId: 3, imagePath: 'https://d.newsweek.com/en/full/2073469/photo-ted-dog.jpg', imageTitle: "Dog's Hilarious Expression Perfectly Caught on Camera:", imageDate: 'June 10, 2024', readTime: ' 1 day ago read' },
    { imageId: 4, imagePath: 'https://th.bing.com/th/id/OIF.doR1YggpDc86c216bW886A?rs=1&pid=ImgDetMain', imageTitle: 'What is a Young Rabbit Called? - WhatAboutPets - Everything About Pets', imageDate: 'June 09, 2024', readTime: '4 days ago read' },
    { imageId: 5, imagePath: 'https://th.bing.com/th?id=OIF.ggdQajt%2fujeY8oynPLRoeA&rs=1&pid=ImgDetMain', imageTitle: "Marion County animal shelter's post of dog chilling in ac goes viral", imageDate: 'June 05, 2024', readTime: 'a weak ago read' },
  ];

/*   const handleCardPress = (id) => {
    // Handle card press event
    console.log('Card pressed', id);
  }; */

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput placeholder="Search" style={styles.searchInput} />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.content}>
        <Text style={styles.exploreText}>Explore</Text>
        {data.map(item => (
          <TouchableOpacity key={item.imageId} style={styles.card}/*  onPress={() => handleCardPress(item.id)} */>
            <Image source={{ uri: item.imagePath }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.imageTitle}</Text>
              <Text style={styles.readTime}>{item.readTime}</Text>
              <Text style={styles.date}>{item.imageDate}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 10,
  },
  searchInput: {
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
  searchButtonText: {
    color: '#fff',
  },
  content: {
    flex: 1,
  },
  exploreText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  readTime: {
    fontSize: 12,
    marginBottom: 5,
  },
  date: {
    fontSize: 12,
    color: '#888',
  },
});

export default LatestUpdate;

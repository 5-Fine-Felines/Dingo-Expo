import NewsCard from '@/components/NewsCard';
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';


interface NewsItem {
  id: string;
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

const LatestNewsTab: React.FC = () => {
  const newsData: NewsItem[] = [
    {
      id: '1',
      profileName: 'Jena',
      profileImg:'https://media.istockphoto.com/id/1272950678/photo/side-view-of-smiling-mature-woman.jpg?s=1024x1024&w=is&k=20&c=jreiLF6BBx8_zaWwieE2dFG33tKEWTlDtY7Oq3OeOhU=',
      location: 'England',
      date: 'Mar 25, 2024',
      text: 'How cute is this Puppies',
      hashtags: ['#cute', '#love'],
      images: [
        'https://img.goodfon.com/wallpaper/nbig/7/d2/shchenok-son-milyi.webp',
        'https://img.goodfon.com/wallpaper/nbig/9/72/sobaka-vzglyad-portret.webp',
        'https://img.goodfon.com/wallpaper/nbig/1/4b/sobaka-vzglyad-drug-5398.webp'
      ],
      likes: 20,
      comments: 3,
      shares: 1
    },
    {
      id: '2',
      profileName: 'Natale',
      profileImg:'https://media.istockphoto.com/id/1468857930/photo/simple-portrait-of-mid-adult-woman-in-her-40s-with-a-short-blonde-bob-in-casual-clothing.jpg?s=1024x1024&w=is&k=20&c=zsLLudHwCnCUjVYiy3wiK8hVivIGyLdjgBsvYotfPYg=',
      location: 'USA',
      date: 'Mar 25, 2024',
      text: 'Love is a four-legged word.',
      hashtags: ['#cute', '#love'],
      images: [
        'https://hips.hearstapps.com/hmg-prod/images/cute-dog-captions-1563456568.jpg?crop=0.668xw:1.00xh;0.241xw,0&resize=980:*',
        'https://hips.hearstapps.com/hmg-prod/images/dog-instagram-captions-sentimental-64da8806ddbdf.jpg?crop=0.626xw:0.939xh;0.197xw,0.0204xh&resize=980:*',
        'https://hips.hearstapps.com/hmg-prod/images/funny-dog-captions-1563456605.jpg?crop=0.747xw:1.00xh;0.0459xw,0&resize=980:*'
      ],
      likes: 32,
      comments: 8,
      shares: 6
    },
    {
      id: '3',
      profileName: 'Sumiko',
      profileImg:'https://media.istockphoto.com/id/1680455253/photo/a-profile-portrait-of-a-woman.jpg?s=1024x1024&w=is&k=20&c=43u62qM48Mdd3C6X2GE1A_B3Umbu7plI_ESUZG4znBU=',
      location: 'Japan',
      date: 'Mar 20, 2024',
      text: 'They call it puppy love.',
      hashtags: ['#cute', '#love'],
      images: [
        'https://hips.hearstapps.com/hmg-prod/images/dog-captions-for-instagram-1563456770.jpg?crop=0.668xw:1.00xh;0.213xw,0&resize=980:*',
        'https://img.goodfon.com/wallpaper/nbig/9/72/sobaka-vzglyad-portret.webp',
        'https://img.goodfon.com/wallpaper/nbig/1/4b/sobaka-vzglyad-drug-5398.webp'
      ],
      likes: 30,
      comments: 12,
      shares: 4
    },
    // Add more news data as needed
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={newsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NewsCard {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top:8,
    padding: 4,
    backgroundColor: '#f5f5f5',
  },
});

export default LatestNewsTab;

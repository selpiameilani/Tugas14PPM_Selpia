import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchScreen: React.FC = () => {
  const navigation = useNavigation();
  const [orientation, setOrientation] = useState('portrait');

  useEffect(() => {
    const updateLayout = () => {
      const { width, height } = Dimensions.get('window');
      setOrientation(width > height ? 'landscape' : 'portrait');
    };

    Dimensions.addEventListener('change', updateLayout);
    updateLayout(); // Set initial orientation

    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="search"
          placeholderTextColor="#000"
        />
      </View>
      <Text style={styles.categoryTitle}>category</Text>
      <ScrollView
        contentContainerStyle={
          orientation === 'portrait'
            ? styles.categoryContainerPortrait
            : styles.categoryContainerLandscape
        }>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={
              orientation === 'portrait'
                ? styles.categoryItemPortrait
                : styles.categoryItemLandscape
            }
            onPress={() =>
              navigation.navigate('CategoryScreen', { category: category.name })
            }>
            <Image
              source={category.image}
              style={
                orientation === 'portrait'
                  ? styles.categoryImagePortrait
                  : styles.categoryImageLandscape
              }
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const categories = [
  { name: 'Seafood', image: require('../../assets/seafood.png') },
  { name: 'Meat', image: require('../../assets/meat.png') },
  { name: 'Pasta', image: require('../../assets/noodle.png') },
  { name: 'Bread', image: require('../../assets/roti.png') },
  { name: 'Chicken', image: require('../../assets/chiken.png') },
  { name: 'Diet', image: require('../../assets/diet.png') },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#93F4A8',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchInput: {
    backgroundColor: '#64EB81',
    borderRadius: 20,
    padding: 10,
    fontSize: 18,
    flex: 1,
    marginLeft: 10,
  },
  categoryTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#000',
  },
  // Portrait Container
  categoryContainerPortrait: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  // Landscape Container
  categoryContainerLandscape: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  // Portrait Item
  categoryItemPortrait: {
    width: '48%',
    marginVertical: 10,
  },
  // Landscape Item
  categoryItemLandscape: {
    width: '30%', // Lebih kecil pada landscape untuk lebih banyak item
    margin: 5,
  },
  // Portrait Image
  categoryImagePortrait: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  // Landscape Image
  categoryImageLandscape: {
    width: '100%',
    height: 150, // Lebih kecil agar lebih banyak konten tampil
    borderRadius: 10,
  },
});

export default SearchScreen;

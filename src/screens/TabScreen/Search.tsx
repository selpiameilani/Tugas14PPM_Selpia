import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScaledSize,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchScreen: React.FC = () => {
  const navigation = useNavigation();
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>(
    'portrait',
  );

  useEffect(() => {
    const updateLayout = ({window}: {window: ScaledSize}) => {
      setOrientation(window.width > window.height ? 'landscape' : 'portrait');
    };

    const subscription = Dimensions.addEventListener('change', updateLayout);
    updateLayout({window: Dimensions.get('window')});

    return () => {
      subscription.remove();
    };
  }, []);

  const categories = [
    {name: 'Seafood', image: require('../../assets/seafood.png')},
    {name: 'Meat', image: require('../../assets/meat.png')},
    {name: 'Pasta', image: require('../../assets/noodle.png')},
    {name: 'Bread', image: require('../../assets/roti.png')},
    {name: 'Chicken', image: require('../../assets/chiken.png')},
    {name: 'Diet', image: require('../../assets/diet.png')},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#000"
        />
      </View>
      <Text style={styles.categoryTitle}>Category</Text>
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
              navigation.navigate('CategoryScreen', {category: category.name})
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
  categoryContainerPortrait: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryContainerLandscape: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  categoryItemPortrait: {
    width: '48%',
    marginVertical: 10,
  },
  categoryItemLandscape: {
    width: '30%',
    margin: 5,
  },
  categoryImagePortrait: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  categoryImageLandscape: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
});

export default SearchScreen;

import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const CategoryScreen: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { category } = route.params;

  const recipes = {
    seafood: [
      {
        id: '1',
        name: 'Sambal Cabe Ijo Cumi Asin',
        image: require('../../assets/cumi.jpeg'),
      },
      {
        id: '2',
        name: 'Udang Saus Padang',
        image: require('../../assets/udang.jpeg'),
      },
      {
        id: '3',
        name: 'Tomyam Seafood',
        image: require('../../assets/tomyam.webp'),
      },
      {
        id: '4',
        name: 'Udang Goreng',
        image: require('../../assets/udanggg.jpeg'),
      },
    ],
    // tambahkan kategori lainnya sesuai kebutuhan
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{category}</Text>
      <ScrollView contentContainerStyle={styles.recipeContainer}>
        {recipes[category.toLowerCase()]?.map((recipe) => (
          <TouchableOpacity
            key={recipe.id}
            style={styles.recipeCard}
            onPress={() => navigation.navigate('RecipeDetail', { recipeId: recipe.id })}
          >
            <Image source={recipe.image} style={styles.recipeImage} />
            <Text style={styles.recipeName}>{recipe.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#93F4A8',
    padding: 10,
  },
  backButton: {
    marginBottom: 10,
  },
  backButtonText: {
    fontSize: 18,
    color: '#4b3c30',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4b3c30',
    marginBottom: 20,
    textAlign: 'center',
  },
  recipeContainer: {
    flexDirection: 'column',
  },
  recipeCard: {
    marginBottom: 20,
  },
  recipeImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  recipeName: {
    fontSize: 20,
    color: '#4b3c30',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default CategoryScreen;

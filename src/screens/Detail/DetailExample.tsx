import React from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const DetailExample = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Detail Resep</Text>
        </View>

        {/* Recipe Image */}
        <Image
          source={require('../../assets/resep-image.jpg')}
          style={styles.recipeImage}
        />

        {/* Recipe Information */}
        <View style={styles.infoContainer}>
          <Text style={styles.recipeTitle}>Nasi Goreng Sea Food</Text>
          <Text style={styles.recipeDescription}>
            Nasi goreng dengan berbagai campuran seafood segar dan bumbu khas.
          </Text>
        </View>

        {/* Ingredients Section */}
        <Text style={styles.sectionTitle}>Bahan-Bahan</Text>
        <View style={styles.ingredientList}>
          <Text style={styles.ingredientItem}>- Nasi Putih</Text>
          <Text style={styles.ingredientItem}>- Udang</Text>
          <Text style={styles.ingredientItem}>- Cumi</Text>
          <Text style={styles.ingredientItem}>- Bumbu Nasi Goreng</Text>
          <Text style={styles.ingredientItem}>- Daun Bawang</Text>
        </View>

        {/* Steps Section */}
        <Text style={styles.sectionTitle}>Langkah-Langkah</Text>
        <View style={styles.stepsList}>
          <Text style={styles.stepItem}>
            1. Panaskan minyak, tumis bumbu hingga harum.
          </Text>
          <Text style={styles.stepItem}>
            2. Masukkan udang dan cumi, aduk hingga matang.
          </Text>
          <Text style={styles.stepItem}>
            3. Tambahkan nasi, aduk hingga bumbu merata.
          </Text>
          <Text style={styles.stepItem}>
            4. Sajikan hangat dengan taburan daun bawang.
          </Text>
        </View>

        {/* Back to Home Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backButtonText}>Kembali ke Home</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9fd3c7',
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4b3c30',
  },
  recipeImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginVertical: 20,
  },
  infoContainer: {
    paddingHorizontal: 20,
  },
  recipeTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4b3c30',
  },
  recipeDescription: {
    fontSize: 16,
    color: '#4b3c30',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4b3c30',
    marginTop: 20,
    marginLeft: 20,
  },
  ingredientList: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  ingredientItem: {
    fontSize: 16,
    color: '#4b3c30',
  },
  stepsList: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  stepItem: {
    fontSize: 16,
    color: '#4b3c30',
    marginBottom: 5,
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  backButton: {
    backgroundColor: '#ffb6c1',
    padding: 15,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 16,
    color: '#4b3c30',
    fontWeight: 'bold',
  },
});

export default DetailExample;

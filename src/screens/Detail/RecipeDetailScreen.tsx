import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
  Alert,
} from 'react-native';
import {RouteProp, useRoute, useNavigation} from '@react-navigation/native';
import axios from 'axios';

// Define the type for the route parameters
type RootStackParamList = {
  RecipeDetailScreen: {title: string};
};

type RecipeDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'RecipeDetailScreen'
>;

const RecipeDetailScreen: React.FC = () => {
  const route = useRoute<RecipeDetailScreenRouteProp>();
  const navigation = useNavigation();
  const {title} = route.params;

  let recipeImage = require('../../assets/nasi.jpeg'); // Default image
  let ingredients: string[] = [];
  let steps: string[] = [];

  if (title === 'nasi goreng sea food') {
    recipeImage = require('../../assets/nasi.jpeg');
    ingredients = [
      '200 gr baby cumi asin',
      '150 gr cabai hijau (mix rawit hijau)',
      '3 siung bawang merah',
      '3 siung bawang putih',
      '2 buah tomat hijau (potong dadu kecil)',
      '1 sdt air jeruk nipis',
      '1/2 sdt garam',
      '1 sdt kaldu bubuk',
      '3 sdt gula pasir',
      'Secukupnya minyak goreng',
    ];
    steps = [
      'Didihkan air, masukkan cumi, matikan api, aduk rata, rendam cumi 30 menit. Kalani serap rendaman hangat sambil mengerjakan yg lain. Kemudian cuci bersih cumi, tiriskan.',
      'Panaskan minyak, tumis bawang merah dan bawang putih sampai harum.',
      'Masukkan cabai hijau dan tomat, tumis hingga layu.',
      'Tambahkan cumi yang sudah direbus, aduk rata.',
      'Tambahkan garam, kaldu bubuk, gula, dan air jeruk nipis, aduk rata.',
      'Sajikan dengan nasi hangat.',
    ];
  } else if (title === 'Tteokbokki') {
    recipeImage = require('../../assets/topoki.jpeg');
    ingredients = [
      '250 gr tteok (rice cakes)',
      '1 sdt minyak wijen',
      '1/2 sdt gochugaru (chili flakes)',
      '2 siung bawang putih (cincang halus)',
      '1 sdm kecap manis',
      '2 sdm gochujang (Korean chili paste)',
      '500 ml kaldu ikan',
      '2 sdm gula',
      '1 batang daun bawang (iris tipis)',
    ];
    steps = [
      'Rebus tteok dalam air mendidih selama 5-7 menit, tiriskan.',
      'Tumis bawang putih dengan minyak wijen hingga harum.',
      'Masukkan gochujang, gochugaru, dan kecap manis, aduk rata.',
      'Tuang kaldu ikan dan gula, masukkan tteok, masak hingga kuah mengental.',
      'Taburi dengan daun bawang dan sajikan.',
    ];
  } else if (title === 'sambal ijo cumi asin') {
    recipeImage = require('../../assets/cumi.jpeg');
    ingredients = [
      '200 gr baby cumi asin',
      '150 gr cabai hijau (mix rawit hijau)',
      '3 siung bawang merah',
      '3 siung bawang putih',
      '2 buah tomat hijau (potong dadu kecil)',
      '1 sdt air jeruk nipis',
      '1/2 sdt garam',
      '1 sdt kaldu bubuk',
      '3 sdt gula pasir',
      'Secukupnya minyak goreng',
    ];
    steps = [
      'Didihkan air, masukkan cumi, matikan api, aduk rata, rendam cumi 30 menit. Kalani serap rendaman hangat sambil mengerjakan yg lain. Kemudian cuci bersih cumi, tiriskan.',
      'Panaskan minyak, tumis bawang merah dan bawang putih hingga harum.',
      'Masukkan cabai hijau dan tomat, tumis hingga layu.',
      'Tambahkan cumi yang sudah direbus, aduk rata.',
      'Tambahkan garam, kaldu bubuk, gula, dan air jeruk nipis, aduk rata.',
      'Sajikan dengan nasi hangat.',
    ];
  }

  const handleAddRecipe = async () => {
    const newFavorite = {
      nama: title,
      image: Image.resolveAssetSource(recipeImage).uri, // Get the URI of the local image
      porsi: '2-4 Porsi',
      cooktime: '30 menit',
    };

    try {
      await axios.post(
        'https://673445baa042ab85d1197089.mockapi.io/FavoriteRecipe/favoriteRecipe',
        newFavorite,
      );
      Alert.alert('Success', 'Recipe has been added to favorites');
      navigation.navigate('Favorites');
    } catch (error) {
      console.error('Failed to add recipe:', error);
      Alert.alert('Error', 'Failed to add recipe');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={recipeImage} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>👥 2-4 Porsi</Text>
        <Text style={styles.infoText}>⏱️ 30 menit</Text>
      </View>
      <Text style={styles.subtitle}>Bahan - Bahan</Text>
      <Text style={styles.content}>
        {ingredients.map((item, index) => (
          <Text key={index}>
            • {item}
            {'\n'}
          </Text>
        ))}
      </Text>
      <Text style={styles.subtitle}>Cara Membuat</Text>
      <Text style={styles.content}>
        {steps.map((step, index) => (
          <Text key={index}>
            {index + 1}. {step}
            {'\n'}
          </Text>
        ))}
      </Text>
      <Button title="Tambah Resep" onPress={handleAddRecipe} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#93F4A8',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4b3c30',
    marginBottom: 10,
    textAlign: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#4b3c30',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4b3c30',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: '#4b3c30',
    marginBottom: 10,
  },
});

export default RecipeDetailScreen;

import React from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('window');

// Navigation type
type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'RecipeDetail'
>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleRecipePress = (recipeTitle: string) => {
    navigation.navigate('RecipeDetail', {title: recipeTitle});
  };

  const isLandscape = width > height; // Cek orientasi layar

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.title}>let's cooking !!!</Text>
            <Text style={styles.subtitle}>
              bikin menu spesial di setiap masakanmu
            </Text>
          </View>
          <Image
            source={require('../../assets/selpi.jpg')}
            style={styles.avatar}
          />
        </View>

        {/* Recommended Recipes */}
        <Text style={styles.sectionTitle}>recommended recipe</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.recipeScroll}>
          {isLandscape ? (
            <>
              <TouchableOpacity
                style={styles.recipeCard}
                onPress={() => handleRecipePress('nasi goreng sea food')}>
                <Image
                  source={require('../../assets/nasi.jpeg')}
                  style={styles.recipeImage}
                />
                <Text style={styles.recipeText}>nasi goreng sea food</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.recipeCard}
                onPress={() => handleRecipePress('Tteokbokki')}>
                <Image
                  source={require('../../assets/topoki.jpeg')}
                  style={styles.recipeImage}
                />
                <Text style={styles.recipeText}>Tteokbokki</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.recipeCard}
                onPress={() => handleRecipePress('sambal ijo cumi asin')}>
                <Image
                  source={require('../../assets/cumi.jpeg')}
                  style={styles.recipeImage}
                />
                <Text style={styles.recipeText}>sambal ijo cumi asin</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.recipeCard}
                onPress={() => handleRecipePress('sate ayam')}>
                <Image
                  source={require('../../assets/cumi.jpeg')}
                  style={styles.recipeImage}
                />
                <Text style={styles.recipeText}>sate ayam</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity
                style={styles.recipeCard}
                onPress={() => handleRecipePress('nasi goreng sea food')}>
                <Image
                  source={require('../../assets/nasi.jpeg')}
                  style={styles.recipeImage}
                />
                <Text style={styles.recipeText}>nasi goreng sea food</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.recipeCard}
                onPress={() => handleRecipePress('Tteokbokki')}>
                <Image
                  source={require('../../assets/topoki.jpeg')}
                  style={styles.recipeImage}
                />
                <Text style={styles.recipeText}>Tteokbokki</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.recipeCard}
                onPress={() => handleRecipePress('sambal ijo cumi asin')}>
                <Image
                  source={require('../../assets/cumi.jpeg')}
                  style={styles.recipeImage}
                />
                <Text style={styles.recipeText}>sambal ijo cumi asin</Text>
              </TouchableOpacity>
            </>
          )}
        </ScrollView>

        {/* Popular Recipes */}
        <Text style={styles.sectionTitle}>popular recipes</Text>
        <View style={styles.popularWrapper}>
          <TouchableOpacity
            style={styles.popularCard}
            onPress={() => handleRecipePress('Sea Food')}>
            <Image
              source={require('../../assets/seafood.png')}
              style={styles.popularImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.popularCard}
            onPress={() => handleRecipePress('Rumahan')}>
            <Image
              source={require('../../assets/rumahan.png')}
              style={styles.popularImage}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#93F4A8',
  },
  header: {
    backgroundColor: '#339A3A',
    padding: hp('3%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: hp('2%'),
  },
  headerTextContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    color: '#4b3c30',
    fontStyle: 'italic',
  },
  subtitle: {
    fontSize: wp('4%'),
    color: '#4b3c30',
    marginTop: hp('0.5%'),
    fontStyle: 'italic',
  },
  avatar: {
    width: wp('12%'),
    height: wp('12%'),
    borderRadius: wp('6%'),
    position: 'absolute',
    right: wp('3%'),
    top: hp('1%'),
  },
  sectionTitle: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    color: '#4b3c30',
    marginLeft: wp('5%'),
    marginVertical: hp('2%'),
  },
  recipeScroll: {
    marginLeft: wp('4%'),
  },
  recipeCard: {
    width: wp('30%'),
    alignItems: 'center',
    marginRight: wp('4%'),
    backgroundColor: '#339A3A',
    borderRadius: hp('2%'),
    overflow: 'hidden',
  },
  recipeImage: {
    width: '100%',
    height: hp('15%'),
  },
  recipeText: {
    padding: hp('2%'),
    fontSize: wp('3.5%'),
    color: '#000',
    textAlign: 'center',
  },
  popularWrapper: {
    marginVertical: hp('1%'),
    alignItems: 'center',
  },
  popularCard: {
    width: wp('90%'),
    alignItems: 'center',
    marginVertical: hp('2%'),
    backgroundColor: '#339A3A',
    borderRadius: hp('2%'),
    overflow: 'hidden',
  },
  popularImage: {
    width: '100%',
    height: hp('25%'),
  },
});

export default HomeScreen;

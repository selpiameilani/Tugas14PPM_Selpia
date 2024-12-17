import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StartScreen = () => {
  const navigation = useNavigation();

  const [isPortrait, setIsPortrait] = useState(
    Dimensions.get('window').height > Dimensions.get('window').width
  );

  const handlePress = () => {
    try {
      navigation.navigate('Main');
    } catch (error) {
      console.error('Error navigating to Main screen: ', error);
      alert('Terjadi kesalahan saat berpindah ke layar utama.');
    }
  };

  // Listener untuk mendeteksi perubahan orientasi layar
  useEffect(() => {
    const onChange = () => {
      const { height, width } = Dimensions.get('window');
      setIsPortrait(height > width);
    };

    const subscription = Dimensions.addEventListener('change', onChange);
    return () => subscription?.remove();
  }, []);

  return (
    <ImageBackground
      source={require('../../assets/cover.png')}
      style={isPortrait ? styles.backgroundPortrait : styles.backgroundLandscape}
      resizeMode="cover">
      <View
        style={
          isPortrait ? styles.containerPortrait : styles.containerLandscape
        }>
        <TouchableOpacity
          style={isPortrait ? styles.buttonPortrait : styles.buttonLandscape}
          onPress={handlePress}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  // Background untuk Portrait
  backgroundPortrait: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Background untuk Landscape
  backgroundLandscape: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  // Container Portrait
  containerPortrait: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  // Container Landscape
  containerLandscape: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  // Button Portrait
  buttonPortrait: {
    backgroundColor: '#64EB81',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginBottom: 20,
  },
  // Button Landscape
  buttonLandscape: {
    backgroundColor: '#64EB81',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginBottom: 10,
  },
  // Teks Tombol Tetap Sama
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StartScreen;

import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';

type RootStackParamList = {
  StartScreen: undefined;
  Login: undefined;
};

const StartScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [isPortrait, setIsPortrait] = useState(
    Dimensions.get('window').height > Dimensions.get('window').width,
  );

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Fade animation effect
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Automatic navigation to 'Login' screen after 3 seconds
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);

    return () => clearTimeout(timer); // Clear timer on unmount
  }, []);

  const handlePress = () => {
    Animated.timing(slideAnim, {
      toValue: -Dimensions.get('window').width,
      duration: 700,
      useNativeDriver: true,
    }).start(() => navigation.navigate('Login'));
  };

  useEffect(() => {
    const onChange = () => {
      const {height, width} = Dimensions.get('window');
      setIsPortrait(height > width);
    };

    const subscription = Dimensions.addEventListener('change', onChange);
    return () => subscription?.remove();
  }, []);

  return (
    <Animated.View style={{transform: [{translateX: slideAnim}]}}>
      <ImageBackground
        source={require('../../assets/cover.png')} // Adjust the path to your assets folder
        style={
          isPortrait ? styles.backgroundPortrait : styles.backgroundLandscape
        }
        resizeMode="cover">
        <View
          style={
            isPortrait ? styles.containerPortrait : styles.containerLandscape
          }>
          <Animated.View style={{opacity: fadeAnim}}>
            <TouchableOpacity
              style={
                isPortrait ? styles.buttonPortrait : styles.buttonLandscape
              }
              onPress={handlePress}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </ImageBackground>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  backgroundPortrait: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundLandscape: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  containerPortrait: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  containerLandscape: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  buttonPortrait: {
    backgroundColor: '#64EB81',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonLandscape: {
    backgroundColor: '#64EB81',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StartScreen;

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const SignInScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      console.log('Login dengan:', email, password);
      navigation.navigate('Main'); // Ganti 'HomeScreen' menjadi 'Main'
    } else {
      alert('Harap isi email dan password terlebih dahulu.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Login to your account</Text>

      {/* Email Input */}
      <Text style={styles.inputLabel}>email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.inputUnderline}
        keyboardType="email-address"
      />

      {/* Password Input */}
      <Text style={styles.inputLabel}>password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.inputUnderline}
      />

      {/* Tombol Login */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Navigasi ke Halaman Register */}
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.switchText}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 30,
    color: 'white',
  },
  inputLabel: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'InriaSerif',
    marginBottom: 5,
  },
  inputUnderline: {
    borderBottomWidth: 1,
    borderColor: 'white',
    marginBottom: 20,
    fontSize: 18,
    color: 'white',
    fontFamily: 'InriaSerif',
  },
  button: {
    backgroundColor: '#388E3C',
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  switchText: {
    textAlign: 'center',
    marginTop: 20,
    color: 'white',
    textDecorationLine: 'underline',
  },
});

export default SignInScreen;

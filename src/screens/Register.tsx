import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const SignUpScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    console.log('Register dengan:', email, password);
    alert('Registration successful! Please login.');
    navigation.navigate('Login'); // Navigasi ke halaman login
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Create your account</Text>

      <Text style={styles.inputLabel}>email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.inputUnderline}
        keyboardType="email-address"
      />

      <Text style={styles.inputLabel}>password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.inputUnderline}
      />

      <Text style={styles.inputLabel}>confirm password</Text>
      <TextInput
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.inputUnderline}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.switchText}>Already have an account? Login</Text>
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
    marginBottom: 5,
  },
  inputUnderline: {
    borderBottomWidth: 1,
    borderColor: 'white',
    marginBottom: 1,
    fontSize: 18,
    color: 'white',
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

export default SignUpScreen;

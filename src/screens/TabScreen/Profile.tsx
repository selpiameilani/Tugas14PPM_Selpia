import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileScreen: React.FC = () => {
  const handleSignOut = () => {
    Alert.alert('Signed Out', 'You have been signed out successfully!');
  };

  return (
    <View style={styles.container}>
      {/* Profile Title */}
      <Text style={styles.title}>profile</Text>

      {/* Profile Image */}
      <Image
        source={require('../../assets/selpi.jpg')} // Ganti dengan path gambar yang sesuai
        style={styles.profileImage}
      />

      {/* Profile Name */}
      <Text style={styles.profileName}>Selpia Meilani</Text>

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.optionButton}>
        <Ionicons name="person-outline" size={24} color="black" />
        <Text style={styles.optionText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Change Password Button */}
      <TouchableOpacity style={styles.optionButton}>
        <Ionicons name="lock-closed-outline" size={24} color="black" />
        <Text style={styles.optionText}>Change Password</Text>
      </TouchableOpacity>

      {/* Sign Out Button */}
      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Ionicons name="log-out-outline" size={24} color="black" />
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7CF392',
    paddingTop: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    fontStyle: 'italic',
    color: '#000',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#000',
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 30,
    color: '#000',
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    padding: 25,
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  optionText: {
    fontSize: 18,
    marginLeft: 10,
    color: '#000',
    fontWeight: 'bold',
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    padding: 15,
    backgroundColor: '#64D57A',
    borderRadius: 10,
    width: '80%',
    justifyContent: 'center',
  },
  signOutText: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: '600',
    color: '#000'
  },
});

export default ProfileScreen;

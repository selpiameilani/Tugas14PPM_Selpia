import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Modal,
  TextInput,
  Button,
  Dimensions,
} from 'react-native';
import axios from 'axios';

interface Favorite {
  id: string;
  nama: string;
  image: string;
  porsi: string;
  cooktime: string;
}

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [selectedFavorite, setSelectedFavorite] = useState<Favorite | null>(
    null,
  );
  const [newName, setNewName] = useState('');
  const [newPorsi, setNewPorsi] = useState('');
  const [newCooktime, setNewCooktime] = useState('');
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>(
    'portrait',
  );

  const fetchFavorites = async () => {
    try {
      const response = await axios.get(
        'https://673445baa042ab85d1197089.mockapi.io/FavoriteRecipe/favoriteRecipe',
      );
      setFavorites(response.data);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(
        `https://673445baa042ab85d1197089.mockapi.io/FavoriteRecipe/favoriteRecipe/${id}`,
      );
      setFavorites(favorites.filter(item => item.id !== id));
      Alert.alert('Success', 'Recipe has been deleted');
    } catch (error) {
      console.error('Failed to delete recipe:', error);
    }
  };

  const handleEdit = (favorite: Favorite) => {
    setSelectedFavorite(favorite);
    setNewName(favorite.nama);
    setNewPorsi(favorite.porsi);
    setNewCooktime(favorite.cooktime);
    setEditModalVisible(true);
  };

  const saveEdit = async () => {
    if (selectedFavorite) {
      try {
        const updatedFavorite = {
          nama: newName,
          porsi: newPorsi,
          cooktime: newCooktime,
        };

        await axios.put(
          `https://673445baa042ab85d1197089.mockapi.io/FavoriteRecipe/favoriteRecipe/${selectedFavorite.id}`,
          updatedFavorite,
        );

        setFavorites(
          favorites.map(item =>
            item.id === selectedFavorite.id
              ? {...item, ...updatedFavorite}
              : item,
          ),
        );
        setEditModalVisible(false);
        Alert.alert('Success', 'Recipe has been updated');
      } catch (error) {
        console.error('Failed to update recipe:', error);
      }
    }
  };

  useEffect(() => {
    fetchFavorites();

    // Detect orientation changes
    const updateLayout = () => {
      const {width, height} = Dimensions.get('window');
      setOrientation(width > height ? 'landscape' : 'portrait');
    };

    Dimensions.addEventListener('change', updateLayout);
    updateLayout();

    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  }, []);

  const renderItem = ({item}: {item: Favorite}) => (
    <View
      style={[
        styles.card,
        orientation === 'landscape' ? styles.cardLandscape : null,
      ]}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.nama}</Text>
        <Text style={styles.subText}>🍽️ {item.porsi}</Text>
        <Text style={styles.subText}>⏱️ {item.cooktime}</Text>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity onPress={() => handleEdit(item)}>
          <Text style={styles.editButton}>✏️</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(item.id)}>
          <Text style={styles.deleteButton}>🗑️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View
      style={[
        styles.container,
        orientation === 'landscape' ? styles.containerLandscape : null,
      ]}>
      <Text style={styles.header}>Favorites</Text>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />

      {/* Edit Modal */}
      <Modal
        visible={isEditModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setEditModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Recipe</Text>
            <TextInput
              placeholder="Recipe Name"
              style={styles.input}
              value={newName}
              onChangeText={setNewName}
            />
            <TextInput
              placeholder="Portion"
              style={styles.input}
              value={newPorsi}
              onChangeText={setNewPorsi}
            />
            <TextInput
              placeholder="Cook Time"
              style={styles.input}
              value={newCooktime}
              onChangeText={setNewCooktime}
            />
            <Button title="Save" onPress={saveEdit} />
            <Button
              title="Cancel"
              onPress={() => setEditModalVisible(false)}
              color="red"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A1E5A1',
    paddingTop: 20,
  },
  containerLandscape: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10,
    color: 'black',
  },
  card: {
    backgroundColor: '#5FCF65',
    margin: 10,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  cardLandscape: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  subText: {
    fontSize: 14,
    color: 'white',
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editButton: {
    fontSize: 18,
    color: 'black',
    marginRight: 10,
  },
  deleteButton: {
    fontSize: 18,
    color: 'black',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#64EB81',
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
    padding: 5,
  },
});

export default FavoritesScreen;

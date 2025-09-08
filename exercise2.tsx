import React from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';

//Komponen utama
const App = () => {
  // Base64 string contoh (gambar kecil 1x1 px hitam)
  const base64Image =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAVklEQVR4nO3PMQEAAAjDMM6f9GJXCMoZJmYmJmYmJmYmJmYmJmYmJmYmJmYmJmYmJmYmJmYmJmYmJmYmJmYmJmYmJmYmJmYmJmYmJmYmJmYmJmYmJmYmJmYmJjYnAJMEQVIVAAAAAElFTkSuQmCC';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Program Yang Menampilkan 3 gambar</Text>
      <Text>static resource/local disk</Text>
      <Text>network image</Text>
      <Text> base64 image </Text>

      {/* 1. Gambar dari local resource */}
      <Image
        source={require('./assets/local_image.png')}
        style={styles.image}
      />

      {/* 2. Gambar dari internet */}
      <Image
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        style={styles.image}
      />

      {/* 3. Gambar dari base64 */}
      <Image source={{uri: base64Image}} style={styles.image} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    margin: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
});

import React from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';

// Komponen utama
const App = () => {
  return (
    <View style={styles.container}>
      {/* Foto Profil dari file lokal */}
      <Image source={require('./assets/img1.jpg')} style={styles.image} />
      {/* Biodata Sederhana */}
      <Text style={styles.name}>Zeavani Misetya Putri Patuli</Text>
      <Text style={styles.info}>
        Tempat, Tanggal Lahir: Parigi, 22 Agustus 2005
      </Text>
      <Text style={styles.info}>Alamat: Jln. Arnolmononutu, Minut</Text>
      <Text style={styles.info}>Email: Zeavhany@gmail.com</Text>
      <Text style={styles.info}>Telepon: +62 812 3456 7890</Text>
      <Text style={styles.info}>Status: Mahasiswa</Text>
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
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#333',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
});

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import TextInput from './components/TextInput';
import Button from './components/Button';

const Exercise5 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <TextInput placeholder="Masukan username anda" label="Username" />
      <TextInput
        placeholder="Masukan password anda"
        label="Password"
        secureTextEntry={true}
      />
      <Button label="Sign In" />
      <Button label="Create New Account" color="#797171" colorText="#ffffff" />
      <Button label="Sign in with Google" color="#DB4437" colorText="#fff" />
      <Button label="Sign in with Facebook" color="#1877F2" colorText="#fff" />
      <Button label="Sign in with Apple" color="#000000" colorText="#fff" />
    </View>
  );
};

export default Exercise5;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 40,
  },
});

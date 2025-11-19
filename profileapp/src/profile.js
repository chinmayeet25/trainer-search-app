import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/300' }}
        style={styles.profileImage}
      />

      <Text style={styles.name}>Your Name</Text>
      <Text style={styles.email}>yourname@example.com</Text>

      <View style={styles.box}>
        <Text style={styles.info}>Age: 21</Text>
        <Text style={styles.info}>Location: India</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  box: {
    padding: 20,
    width: '80%',
    backgroundColor: '#eee',
    borderRadius: 10,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
});

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default function SecondScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Trickle
      </Text>
      <Image source={require('./assets/cash-coins.png')} style={styles.image} />
      <Text style={styles.title}>Second screen title</Text>
      <Text style={styles.description}>
        This is the description for the second onboarding screen.
      </Text>

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        <View style={styles.dot} />
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },
  image: {
    width: 600,
    height: 350,
    resizeMode: 'contain',
    marginBottom: 12,
  },
  title: {
    fontFamily: 'FungkyBrow',
    fontSize: 38,
    color: '#A7D338',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  description: {
    fontSize: 18,
    color: '#4B5563',
    textAlign: 'center',
    paddingHorizontal: 30,
    marginBottom: 40,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 38,
    marginTop: 2,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D3E7C9',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#88CC3A',
    width: 10,
    height: 10,
  },
  button: {
    backgroundColor: '#A7D338',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
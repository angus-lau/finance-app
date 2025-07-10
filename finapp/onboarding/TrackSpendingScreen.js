import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import styles from './SharedStyles';

export default function TrackSpendingScreen() {
  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Trickle</Text>
      <Image source={require('../assets/cash-coins.png')} style={styles.illustration} resizeMode="contain" />
      <Text style={styles.descriptor}>Track Spending</Text>
      <Text style={styles.description}>
        Monitor your expenses across all cards and categories in real-time.
      </Text>
      <View style={styles.pagination}>
        <View style={styles.dot} />
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
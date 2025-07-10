import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';

export default function AddMultipleCardsScreen({ goToNextPage, styles, pageIndex }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Trickle</Text>
      <Image source={require('../assets/wallet-cards.png')} style={styles.illustration} resizeMode="contain" />
      <Text style={styles.descriptor}>Add Multiple Cards</Text>
      <Text style={styles.description}>
        Add any kind of debit or credit card from Visa to American Express to MasterCard.
      </Text>
      <View style={styles.pagination}>
        <View style={[styles.dot, pageIndex === 0 && styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
      <TouchableOpacity style={styles.button} onPress={goToNextPage}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
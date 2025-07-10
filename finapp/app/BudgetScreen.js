import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { AreaChart } from 'react-native-gifted-charts';
import { Ionicons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

const chartData = [
  { value: 24724, label: 'Mon' },
  { value: 20866, label: 'Tue' },
  { value: 18151, label: 'Wed' },
  { value: 18695, label: 'Thu' },
  { value: 25326, label: 'Fri' },
  { value: 22412, label: 'Sat' },
  { value: 24632, label: 'Sun' },
];


export default function SavingsScreen() {
  return (
    
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.topRow}>
          <Text style={styles.label}>Total savings</Text>
          <Ionicons name="notifications-outline" size={20} color="white" />
        </View>

        <Text style={styles.amount}>
          £25,301<Text style={styles.amountDecimal}>.67</Text>
        </Text>

        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: '55%' }]} />
        </View>

        <View style={styles.progressMeta}>
          <Text style={styles.percent}>55%</Text>
          <Text style={styles.target}>Target £50,000</Text>
        </View>

        <AreaChart
          data={chartData}
          width={screenWidth - 40}
          height={160}
          showPointer
          initialSpacing={10}
          spacing={35}
          color="rgba(255,165,0,0.5)"
          strokeColor="orange"
          pointerConfig={{
            radius: 6,
            pointerColor: 'white',
            showBubble: true,
            bubbleColor: '#333',
            bubbleTextColor: '#fff',
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#000',
    borderRadius: 20,
    padding: 20,
    elevation: 2,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    color: '#fff',
    fontSize: 16,
  },
  amount: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
  },
  amountDecimal: {
    fontSize: 24,
    fontWeight: '300',
  },
  progressBarContainer: {
    height: 6,
    backgroundColor: '#444',
    borderRadius: 3,
    marginTop: 20,
    overflow: 'hidden',
  },
  progressBar: {
    height: 6,
    backgroundColor: 'orange',
  },
  progressMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  percent: {
    color: 'orange',
    fontSize: 12,
  },
  target: {
    color: '#fff',
    fontSize: 12,
  },
});
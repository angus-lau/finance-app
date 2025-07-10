import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Dimensions, Image} from 'react-native';
import { LineChart } from "react-native-gifted-charts";

const ptData = [
{ value: 160, date: '1 Jun 2025' },
{ value: 180, date: '2 Jun 2025' },
{ value: 190, date: '3 Jun 2025' },
{ value: 180, date: '4 Jun 2025' },
{ value: 140, date: '5 Jun 2025' },
{ value: 145, date: '6 Jun 2025' },
{ value: 160, date: '7 Jun 2025' },
{ value: 200, date: '8 Jun 2025' },
{ value: 220, date: '9 Jun 2025' },
{ value: 280, date: '11 Jun 2025' },
{ value: 260, date: '12 Jun 2025' },
{ value: 340, date: '13 Jun 2025' },
{ value: 385, date: '14 Jun 2025' },
{ value: 280, date: '15 Jun 2025' },
{ value: 390, date: '16 Jun 2025' },
{ value: 370, date: '17 Jun 2025' },
{ value: 285, date: '18 Jun 2025' },
{ value: 295, date: '19 Jun 2025' },
{ value: 280, date: '21 Jun 2025' },
{ value: 295, date: '22 Jun 2025' },
{ value: 260, date: '23 Jun 2025' },
{ value: 255, date: '24 Jun 2025' },
{ value: 280, date: '25 Jun 2025' },
{ value: 220, date: '26 Jun 2025' },
{ value: 562, date: '27 Jun 2025' },
{ value: 530, date: '28 Jun 2025' },
{ value: 623, date: '29 Jun 2025' },
];



export default function SavingsScreen() {
  return (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
    <View style={styles.content}>
      <Text style={styles.heading}>Savings</Text>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardLabel}>
            Total <Text style={{ fontWeight: 'normal' }}>savings</Text>
          </Text>
        </View>
        <View style={{ position: 'relative', alignSelf: 'flex-start', marginLeft: 20 }}>
  <Text
    style={{
      position: 'absolute',
      top: 4,
      left: -14,
      fontSize: 18,
      color: 'black',
      fontWeight: '400',
    }}
  >
    $
  </Text>
  <Text style={styles.amount}>
    623<Text style={styles.amountDecimal}>.67</Text>
  </Text>
</View>
      </View>

      {/* Graph placed BELOW the card */}
      <View
        style={{
          width: Dimensions.get('window').width,
          padding: 0,
          margin: 0,
          paddingLeft: 0,
          marginLeft: 0,
        }}
      >
        <LineChart
          width={Dimensions.get('window').width}
          adjustToWidth={true}
          initialSpacing={0}
          endSpacing={0}
          spacing={13.5}
          areaChart
          curved
          isAnimated
          animateOnDataChange
          data={ptData}
          height={250}
          hideDataPoints
          color="green"
          thickness={2}
          startFillColor="lightgreen"
          endFillColor="white"
          startOpacity={1.5}
          endOpacity={0.1}
          noOfSections={6}
          maxValue={1000}
          xAxisColor="black"
          rulesColor="transparent"
          yAxisSide="right"
          yAxisColor="black"
          yAxisTextStyle={{ color: 'black', fontSize: 10 }}
          xAxisLabelTextStyle={{ color: 'lightgray' }}
          pointerConfig={{
            pointerStripHeight: 200,
            pointerStripColor: 'black',
            pointerStripWidth: 2,
            pointerColor: 'black',
            radius: 6,
            pointerLabelWidth: 100,
            pointerLabelHeight: 90,
            activatePointersOnLongPress: true,
            autoAdjustPointerLabelPosition: false,
            pointerLabelComponent: items => (
              <View style={{ alignItems: 'center' }}>
                <Text style={{ color: 'black', fontSize: 14, marginBottom: 6 }}>
                  {items[0].date}
                </Text>
                <View style={{ backgroundColor: 'white', padding: 6, borderRadius: 12 }}>
                  <Text style={{ color: 'black', fontWeight: 'bold' }}>
                    ${items[0].value}
                  </Text>
                </View>
              </View>
            ),
          }}
        />
      </View>
    </View>
    {/* Savings Accounts Section */}
<View style={{ marginTop: 40 }}>
  <Text style={{
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderColor: '#000',
    backgroundColor: '#fff',
  }}>
    SAVINGS ACCOUNTS
  </Text>

  {[
    {
      bank: 'Chase Bank',
      type: 'Standard Savings',
      amount: '$12.34',
      icon: 'https://img.icons8.com/?size=512&id=AlOUqf3Ydtt7&format=png'
    },
    {
      bank: 'Merrill Lynch',
      type: 'Money Market',
      amount: '$402.71',
      icon: 'https://logos-world.net/wp-content/uploads/2021/03/Merrill-Emblem.png'
    },
    {
      bank: 'Bank of America',
      type: 'Essentials',
      amount: '208.62',
      icon: 'https://brandlogos.net/wp-content/uploads/2021/11/bank_of_america-logo.png'
    }
  ].map((item, index) => (
    <View key={index} style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 16,
      paddingHorizontal: 14,
      borderBottomWidth: index !== 2 ? 1 : 0,
      borderColor: '#ccc',
      backgroundColor: '#fff'
    }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={{ uri: item.icon }} style={{ width: 40, height: 40, marginRight: 12, resizeMode: 'contain' }} />
        <View>
          <Text style={{ fontSize: 10, color: '#444' }}>{item.bank}</Text>
          <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{item.type}</Text>
        </View>
      </View>
      <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{item.amount}</Text>
    </View>
  ))}
</View>
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', 
  },
  content: {
    flex: 1,
    padding: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    color: '#222',
    alignSelf: 'center',
  },
  card: {
  borderRadius: 20,
  padding: 5,
  marginBottom: 50,
},
cardHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},
cardLabel: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '600',
},
amount: {
  color: 'black',
  fontSize: 50,
  fontWeight: 'bold',
},
amountDecimal: {
  fontSize: 20,
  fontWeight: '300',
},
});
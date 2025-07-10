import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar, FlatList, Image, TouchableOpacity, ScrollView,} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function DashboardScreen() {
    const navigation = useNavigation();
            
        const handleSavings = () => {
        navigation.navigate('SavingsScreen');
        };

        const handleTransaction = () => {
        navigation.navigate('TransactionScreen');
        };

        const handleBudget = () => {
        navigation.navigate('BudgetScreen');
        };

        const handleAnalytics = () => {
        navigation.navigate('AnalyticsScreen');
        };

  const transactions = [
    {
      id: '1',
      name: 'Trevor Yu',
      subtitle: 'Zelle',
      amount: '+$317.38',
      date: 'July 1, 2025 21:01',
      image: 'https://www.hrlact.org/wp-content/uploads/2020/12/generic-user-icon.jpg',
      positive: true,
    },
    {
      id: '2',
      name: 'Dunkin Donuts',
      subtitle: 'Purchased with **** 4125',
      amount: '-$25.13',
      date: 'June 27, 2025 13:05',
      image: 'https://www.pngmart.com/files/22/Dunkin-Donuts-Logo-PNG-Picture.png',
      positive: false,
    },
    {
      id: '3',
      name: 'Starbucks',
      subtitle: 'Purchased with **** 1142',
      amount: '-$8.17',
      date: 'June 13, 2025 03:42',
      image: 'https://download.logo.wine/logo/Starbucks/Starbucks-Logo.wine.png',
      positive: false,
    },
    {
      id: '4',
      name: 'Netflix',
      subtitle: 'Purchased with **** 3515',
      amount: '-$6.99',
      date: 'June 7, 2025 19:10',
      image: 'https://toppng.com/uploads/preview/netflix-logo-transparent-png-11660600805igxhzrr6b7.png',
      positive: false,
    },
    {
      id: '5',
      name: 'Spotify',
      subtitle: 'Purchased with **** 9101',
      amount: '-$4.99',
      date: 'June 2, 2025 18:30',
      image: 'https://www.pngmart.com/files/22/Spotify-Logo-PNG-Transparent.png',
      positive: false,
    },
    {
      id: '6',
      name: 'Apple',
      subtitle: 'Purchased with **** 1234',
      amount: '-$1,932.12',
      date: 'May 29, 2025 17:00',
      image: 'https://images.icon-icons.com/2429/PNG/512/apple_logo_icon_147318.png',
      positive: false,
    },
    {
      id: '7',
      name: 'Wilson Leung',
      subtitle: 'Venmo',
      amount: '+$20.00',
      date: 'May 28, 2025 15:30',
      image: 'https://www.hrlact.org/wp-content/uploads/2020/12/generic-user-icon.jpg',
      positive: true,
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.transactionRow}>
      {item.image ? (
        <Image source={{ uri: item.image }} style={styles.avatar} />
      ) : (
        <View style={styles.iconPlaceholder} />
      )}
      <View style={styles.transactionInfo}>
        <Text style={styles.transactionName}>{item.name}</Text>
        <Text style={styles.transactionSubtitle}>{item.subtitle}</Text>
      </View>
      <View style={styles.transactionMeta}>
        <Text
          style={[
            styles.transactionAmount,
            { color: item.positive ? 'green' : 'red' },
          ]}
        >
          {item.amount}
        </Text>
        <Text style={styles.transactionDate}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.content}>
        <View style={styles.cardContainer}>
        <View style={styles.card}>
            <View style={styles.cardHeader}>
            <Text style={styles.cardBrand}>MASTERCARD</Text>
            <Text style={styles.cardNumber}>**** **** **** 3567</Text>
            </View>
            <View style={styles.cardFooter}>
            <View>
                <Text style={styles.cardLabel}>Balance</Text>
                <Text style={styles.cardBalance}>$123,456</Text>
            </View>
            </View>
        </View>
        </View>
        <Text style={styles.heading}>Saved</Text>
        <View style={{ marginBottom: 20 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: -10 }}>
          <View style={styles.savedItem}>
            <Text style={styles.plusIcon}>+</Text>
          </View>
            <TouchableOpacity onPress={handleAnalytics}>
          <View style={styles.savedItem}>
            <Image source={{ uri: 'https://i.imgur.com/CgB521a.png'}} style={styles.savedIcon} />
            <Text style={styles.savedLabel}>Analytics</Text>
          </View>
          </TouchableOpacity>
            <TouchableOpacity onPress={handleBudget}>
          <View style={styles.savedItem}>
            <Image source={{ uri: 'https://i.imgur.com/cDIzcBf.png' }} style={styles.savedIcon} />
            <Text style={styles.savedLabel}>Budget</Text>
          </View>
          </TouchableOpacity>
            <TouchableOpacity onPress={handleSavings}>
          <View style={styles.savedItem}>
            <Image source={{ uri: 'https://i.imgur.com/hA9r88I.png' }} style={styles.savedIcon} />
            <Text style={styles.savedLabel}>Savings</Text>
          </View>
          </TouchableOpacity>
            <TouchableOpacity onPress={handleTransaction}>
          <View style={styles.savedItem}>
            <Image source={{ uri: 'https://i.imgur.com/Dll0zfB.png' }} style={styles.savedIcon} />
            <Text style={styles.savedLabel}>Transaction</Text>
          </View>
        </TouchableOpacity>
        </ScrollView>
        </View>
        <Text style={styles.heading}>Transactions</Text>
        <FlatList
        data={transactions.slice(0, 7)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
            <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
        }
        />
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
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#222',
  },
  savedItem: {
    width: 80,
    height: 80,
    marginRight: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  savedIcon: {
    width: 32,
    height: 32,
    marginBottom: 5,
  },
  savedLabel: {
    fontSize: 12,
    textAlign: 'center',
  },
  plusIcon: {
    fontSize: 28,
    color: '#999',
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    color: '#222',
    marginBottom: 20,
    marginTop: 40,
  },
  transactionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  iconPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  transactionInfo: {
    flex: 1,
  },
  transactionName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  transactionSubtitle: {
    fontSize: 12,
    color: '#777',
  },
  transactionMeta: {
    alignItems: 'flex-end',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '600',
  },
  transactionDate: {
    fontSize: 12,
    color: '#777',
  },
  viewAllButton: {
    marginTop: 10,
    alignSelf: 'center',
  },
  viewAllText: {
    color: '#007AFF',
    fontSize: 14,
  },
  cardContainer: {
  marginBottom: -20,
},
card: {
  backgroundColor: '#252525',
  borderRadius: 12,
  padding: 20,
  marginBottom: 10,
  height: 200,
  justifyContent: 'space-between',
},
cardHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 20,
},
cardBrand: {
  color: '#fff',
  fontSize: 18,
  fontWeight: 'bold',
},
cardNumber: {
  color: '#fff',
  fontSize: 14,
},
cardFooter: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
},
cardLabel: {
  color: '#aaa',
  fontSize: 13,
  marginBottom: 4,
},
cardBalance: {
  color: '#fff',
  fontSize: 24,
  fontWeight: '600',
},
applePayLogo: {
  width: 45,
  height: 20,
},
dotsContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 4,
},
dot: {
  width: 6,
  height: 6,
  borderRadius: 3,
  backgroundColor: '#ccc',
  marginHorizontal: 4,
},
dotActive: {
  backgroundColor: '#000',
  width: 8,
  height: 8,
},
});
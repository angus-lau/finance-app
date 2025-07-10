import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import PagerView from 'react-native-pager-view';
import AddMultipleCardsScreen from './onboarding/AddMultipleCardsScreen';
import TrackSpendingScreen from './onboarding/TrackSpendingScreen';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const pagerRef = React.useRef(null);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'FungkyBrow': require('./assets/fonts/Fungky Brow DEMO.otf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  const goToNextPage = () => {
    if (pagerRef.current && pageIndex < 1) {
      pagerRef.current.setPage(pageIndex + 1);
    }
  };

  return (
    <PagerView
      style={styles.pagerView}
      initialPage={0}
      onPageSelected={(e) => setPageIndex(e.nativeEvent.position)}
      ref={pagerRef}
    >
      <AddMultipleCardsScreen
        key="1"
        styles={styles}
        pageIndex={pageIndex}
        goToNextPage={goToNextPage}
      />

      <TrackSpendingScreen
        key="2"
        styles={styles}
        pageIndex={pageIndex}
      />
    </PagerView>
  );
}

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  title: {
    fontFamily: 'FungkyBrow',
    fontSize: 38,
    color: '#A7D338',
    textAlign: 'center',
    paddingTop: 80,
    paddingBottom: 20,
  },
  illustration: {
    width: 600,
    height: 350,
    marginBottom: 36,
  },
  descriptor: {
    fontFamily: 'sans-serif',
    fontWeight: '600',
    fontSize: 38,
    color: '#A7D338',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  description: {
    fontSize: 15,
    color: '#434343',
    textAlign: 'center',
    marginHorizontal: 24,
    marginBottom: 18,
    lineHeight: 22,
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
    width: 270,
    height: 48,
    backgroundColor: '#A7E065',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
    position: 'absolute',
    bottom: 34,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 19,
    fontWeight: '500',
  },
});
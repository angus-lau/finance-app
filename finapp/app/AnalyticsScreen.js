import React from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { BarChart } from "react-native-gifted-charts";

const barData = [
  { value: 230, label: "Mon", frontColor: "#4ABFF4" },
  { value: 180, label: "Tues", frontColor: "#79C3DB" },
  { value: 195, label: "Weds", frontColor: "#28B2B3" },
  { value: 250, label: "Thur", frontColor: "#4ADDBA" },
  { value: 130, label: "Fri", frontColor: "#2f7cfb" },
  { value: 241, label: "Sat", frontColor: "#1957e3" },
  { value: 195, label: "Sun", frontColor: "#162d6c" },
];

export default function AnalyticsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.content}>
        <Text style={styles.heading}>Analytics</Text>
        <BarChart
          showFractionalValue
          showYAxisIndices
          noOfSections={4}
          maxValue={400}
          data={barData}
          isAnimated={true}
          height={300}
          barWidth={29}
          spacing={15}
          labelWidth={30}
          frontColor="#4ABFF4"
          barBorderTopLeftRadius={10}
          barBorderTopRightRadius={10}
          yAxisLabelWidth={30}
          xAxisLabelTextStyle={{ color: "#555", fontWeight: "bold" }}
          yAxisTextStyle={{ color: "#888" }}
          disableScroll={true}
          renderTooltip={(item) => (
            <View
              style={{
                padding: 6,
                backgroundColor: item.frontColor,
                borderRadius: 6,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                ${item.value}
              </Text>
            </View>
          )}
        />
        <View
          style={{
            height: 1,
            backgroundColor: "#ccc",
            marginTop: 30,
            marginBottom: 0,
          }}
        />
        <View style={styles.transactionContainer}>
          <Text style={styles.transactionTitle}>This Weeks Transactions</Text>
          <Text style={styles.transactionAmount}>$1,234.56</Text>

          <View style={styles.transactionItem}>
            <View style={[styles.dot, { backgroundColor: "#3DD598" }]} />
            <Text style={styles.transactionLabel}>Food</Text>
            <Text style={styles.transactionValue}>-$23.51</Text>
          </View>

          <View style={styles.transactionItem}>
            <View style={[styles.dot, { backgroundColor: "#A66DD4" }]} />
            <Text style={styles.transactionLabel}>Transport</Text>
            <Text style={styles.transactionValue}>-$152.67</Text>
          </View>

          <View style={styles.transactionItem}>
            <View style={[styles.dot, { backgroundColor: "#826f88" }]} />
            <Text style={styles.transactionLabel}>Clothes</Text>
            <Text style={styles.transactionValue}>-$163.11</Text>
          </View>

          <View style={styles.transactionItem}>
            <View style={[styles.dot, { backgroundColor: "#fcb384" }]} />
            <Text style={styles.transactionLabel}>Entertainment</Text>
            <Text style={styles.transactionValue}>-$734.26</Text>
          </View>

          <View style={styles.transactionItem}>
            <View style={[styles.dot, { backgroundColor: "#8bf7fe" }]} />
            <Text style={styles.transactionLabel}>Miscellaneous</Text>
            <Text style={styles.transactionValue}>-$213.13</Text>
          </View>

          <View style={styles.transactionItem}>
            <View style={[styles.dot, { backgroundColor: "#ba5acf" }]} />
            <Text style={styles.transactionLabel}>Gifts</Text>
            <Text style={styles.transactionValue}>-$1,531.83</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "600",
    color: "#222",
    marginBottom: 20,
    alignSelf: "center",
  },
  transactionContainer: {
    marginTop: 0,
    padding: 15,
    height: "40%",
    borderRadius: 16,
  },
  transactionTitle: {
    color: "black",
    fontSize: 15,
    marginBottom: 4,
  },
  transactionAmount: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15,
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  transactionLabel: {
    flex: 1,
    color: "grey",
    marginLeft: 20,
    fontSize: 17,
  },
  transactionValue: {
    color: "black",
    fontWeight: "800",
    fontSize: 15,
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
});

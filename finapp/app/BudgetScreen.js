import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
} from "react-native";

export default function BudgetScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Text style={styles.heading}>Budget</Text>
      <Text style={styles.budgetLabel}>July 2025</Text>
      <Text style={styles.budgetTotal}>$3,500</Text>

      <View style={styles.summaryCard}>
        <View style={styles.summaryRow}>
          <View>
            <Text style={styles.label}>Left to spend</Text>
            <Text style={styles.amount}>$738</Text>
          </View>
          <View>
            <Text style={styles.label}>Monthly budget</Text>
            <Text style={styles.amount}>$3,500</Text>
          </View>
        </View>
        <View style={styles.progressBarContainer}>
          <View
            style={[
              styles.progressSegment,
              { flex: 1, backgroundColor: "#FF6B6B" },
            ]}
          />
          <View
            style={[
              styles.progressSegment,
              { flex: 2, backgroundColor: "#FF6B6B" },
            ]}
          />
          <View
            style={[
              styles.progressSegment,
              { flex: 3, backgroundColor: "#D3D3D3" },
            ]}
          />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.categoryCard}>
          <View style={styles.categoryHeaderAligned}>
            <Image
              source={{ uri: "https://i.imgur.com/aB9CguI.png" }}
              style={styles.categoryIconImage}
            />
            <Text style={styles.categoryTitle}>Vehicle</Text>
            <Text style={styles.categoryAmount}>$1,000</Text>
          </View>

          <View style={styles.subItemRow}>
            <View>
              <Text style={styles.subItemTitle}>Gas</Text>
              <View style={styles.subProgressBar}>
                <View style={[styles.subProgress, { width: "60%" }]} />
              </View>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.supItemAmount}>$800</Text>
              <Text style={styles.subItemAmount}>Left $122</Text>
            </View>
          </View>

          <View style={styles.subItemRow}>
            <View>
              <Text style={styles.subItemTitle}>Insurance</Text>
              <View style={styles.subProgressBar}>
                <View style={[styles.subProgress, { width: "50%" }]} />
              </View>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.supItemAmount}>$240</Text>
              <Text style={styles.subItemAmount}>Left $120</Text>
            </View>
          </View>
        </View>

        <View style={styles.categoryCard}>
          <View style={styles.categoryHeaderAligned}>
            <Image
              source={{ uri: "https://i.imgur.com/8VMEGHn.png" }}
              style={styles.categoryIconImage}
            />
            <Text style={styles.categoryTitle}>Shopping</Text>
            <Text style={styles.categoryAmount}>$1000</Text>
          </View>

          <View style={styles.subItemRow}>
            <View>
              <Text style={styles.subItemTitle}>Hoodies</Text>
              <View style={styles.subProgressBar}>
                <View style={[styles.subProgress, { width: "80%" }]} />
              </View>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.supItemAmount}>$800</Text>
              <Text style={styles.subItemAmount}>Left $194</Text>
            </View>
          </View>

          <View style={styles.subItemRow}>
            <View>
              <Text style={styles.subItemTitle}>Shoes</Text>
              <View style={styles.subProgressBar}>
                <View style={[styles.subProgress, { width: "10%" }]} />
              </View>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.supItemAmount}>$200</Text>
              <Text style={styles.subItemAmount}>Left $15</Text>
            </View>
          </View>
        </View>

        <View style={styles.categoryCard}>
          <View style={styles.categoryHeaderAligned}>
            <Image
              source={{ uri: "https://i.imgur.com/WKt1ME7.png" }}
              style={styles.categoryIconImage}
            />
            <Text style={styles.categoryTitle}>Food</Text>
            <Text style={styles.categoryAmount}>$2,500</Text>
          </View>

          <View style={styles.subItemRow}>
            <View>
              <Text style={styles.subItemTitle}>Groceries</Text>
              <View style={styles.subProgressBar}>
                <View style={[styles.subProgress, { width: "50%" }]} />
              </View>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.supItemAmount}>$1000</Text>
              <Text style={styles.subItemAmount}>Left $500</Text>
            </View>
          </View>

          <View style={styles.subItemRow}>
            <View>
              <Text style={styles.subItemTitle}>Eating Out</Text>
              <View style={styles.subProgressBar}>
                <View style={[styles.subProgress, { width: "100%" }]} />
              </View>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.supItemAmount}>$1500</Text>
              <Text style={styles.subItemAmount}>Left $0</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#FFFFFF",
  },
  content: { padding: 20 },
  heading: {
    fontSize: 24,
    fontWeight: "600",
    color: "#222",
    marginBottom: 20,
    alignSelf: "center",
  },

  summaryCard: {
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  label: { color: "#555", fontSize: 14 },
  amount: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 4,
  },

  progressBarContainer: {
    flexDirection: "row",
    height: 8,
    borderRadius: 4,
    overflow: "hidden",
    backgroundColor: "#E0E0E0",
  },
  progressSegment: { height: "100%" },

  categoryCard: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 20,
    marginTop: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  categoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  categoryAmount: {
    fontSize: 16,
    fontWeight: "500",
    color: "grey",
  },

  subItemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  subItemTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 10,
  },
  subProgressBar: {
    height: 6,
    backgroundColor: "#E0E0E0",
    borderRadius: 3,
    width: 180,
  },
  subProgress: {
    height: "100%",
    backgroundColor: "#5C4DFF",
    borderRadius: 3,
  },
  categoryIconWrapper: {
    marginRight: 10,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryIconImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  subItemAmount: {
    fontSize: 12,
    color: "#777",
    paddingTop: 5,
  },

  supItemAmount: {
    fontSize: 15,
    fontWeight: 600,
    color: "black",
  },
  categoryHeaderAligned: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  budgetTotal: {
    fontSize: 50,
    fontWeight: "700",
    color: "#222",
    textAlign: "center",
    marginBottom: 20,
  },
  budgetLabel: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
});

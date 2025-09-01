import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Headings({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>{title}</Text>
      <Text style={styles.text2}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 12,
  },
  text1: {
    fontFamily: "ClashGroteskSemiBold",
    fontWeight: "600",
    fontSize: 32,
    lineHeight: 32,
    letterSpacing: 0.64,
    color: "#FFFFFF",
  },
  text2: {
    fontFamily: "SatoshiMedium",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.24,
    color: "#F5F5F5",
  },
});

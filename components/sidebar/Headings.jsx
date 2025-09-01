import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Headings({ heading }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{heading}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 8,
  },
  text: {
    fontFamily: "ClashGroteskSemiBold",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.32,
    color: "#FFFFFF",
  },
});

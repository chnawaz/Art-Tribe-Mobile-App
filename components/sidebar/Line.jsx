import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Line() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#262626",
  },
});

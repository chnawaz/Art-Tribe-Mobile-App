import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Explore2 from "../../components/Explore2";

export default function Explore() {
  return (
    // <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <Explore2 />
      </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    backgroundColor: "#0E0F11",
    paddingVertical: 12,
  },
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    gap: 32,
    marginBottom: 32,
    // marginBottom: 432,
     backgroundColor: "#0E0F11",
    paddingVertical: 12,
  },
});

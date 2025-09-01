import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import Tabs from "./explore/Tabs";
import ImageGallery from "./explore/ImageGallery";

export default function Explore() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.text1}>Explore Arttribe</Text>
        <Tabs />
      </View>
      <View style={styles.view2}>
        <ImageGallery />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 16,
    width: "100%",
  },
  view1: {
    flexDirection: "column",
    gap: 16,
    paddingRight: 16,
    paddingLeft: 16,
  },
  text1: {
    fontFamily: "ClashGrotesk",
    fontWeight: "600", // "600" = Semibold
    fontSize: 20,
    lineHeight: 20,
    letterSpacing: 0.02 * 20,
    color: "#FFFFFF",
  },
  view2: {
    width: "100%",
    backgroundColor: "#0E0F11",
  }
});

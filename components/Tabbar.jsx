import { Pressable, StyleSheet, Text, View } from "react-native";
import { BlurView } from "expo-blur";
import Addsvg from "../assets/svgs/Add";
import React from "react";

export default function Tabbar() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button1}>
        <Text style={styles.text1}>Generate</Text>
        <Addsvg />
      </Pressable>
      <BlurView
        intensity={70}
        tint="systemUltraThinMaterialDark"
        style={styles.blurContainer}
      >
        <Text style={{ color: "white" }}>Tabbar</Text>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  button1: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 8,
    paddingRight: 118,
    paddingBottom: 8,
    paddingLeft: 118,
    gap: 4,
    borderRadius: 8,
    backgroundColor: "#00FF00",
  },
  text1: {
    fontFamily: "ClashGroteskMedium",
    fontWeight: "500",
    fontSize: 16,
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0.32,
    color: "#000000",
  },
  blurContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 12,
    paddingRight: 56,
    paddingBottom: 16,
    paddingLeft: 56,
  },
});

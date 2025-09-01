import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Tabsbtn({ image, title }) {
  return (
    <Pressable style={styles.container}>
      <Image source={image} />
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "48%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 12,
    paddingRight: 16,
    paddingBottom: 12,
    paddingLeft: 16,
    borderWidth: 1,
    borderRadius: 8,
    opacity: 1,
    backgroundColor: "rgba(30, 30, 30, 0.85)",
    borderColor: "#FFFFFF0D",
  },
  title: {
    fontFamily: "ClashGroteskMedium",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.28,
    color: "#FFFFFF",
  },
});

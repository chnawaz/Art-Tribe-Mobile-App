import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import ImageGeneration  from "../image generation/ImageGeneration";
import React from "react";

export default function Tabsbtn({ image, title }) {
  return (
    <Pressable style={styles.containerPress}>
      <Image source={image} />
      <Text style={styles.titleBtn}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  containerPress: {
    width: "48%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 12,
    paddingRight: 16,
    paddingBottom: 12,
    paddingLeft: 16,
    borderWidth: 1,
    borderRadius: 8,
    // opacity: 1,
    // backgroundColor: "rgba(30, 30, 30, 0.85)",
    // backgroundColor: "rgba(14, 15, 17, 0.8)",
    backgroundColor: "#262626",
    borderColor: "#FFFFFF0D",
  },
  titleBtn: {
    fontFamily: "ClashGroteskMedium",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.28,
    color: "#FFFFFF",
  },
});

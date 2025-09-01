import { StyleSheet, Text, View,Image } from "react-native";
import React from "react";

export default function Card({ img, title }) {
  return (
    <View style={styles.container}>
      <Image source={img} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderRadius: 12,
    paddingTop: 6,
    paddingRight: 8,
    paddingBottom: 6,
    paddingLeft: 8,
    gap: 12,
  },
//   img: {
//     borderRadius: 8,
//   },
  title: {
    fontFamily: "ClashGrotesk",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.28,
    color: "#D4D4D4",
  },
});

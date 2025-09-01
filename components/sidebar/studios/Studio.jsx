import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Studio({ studioName, details, img }) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={img} resizeMode="contain" />
      <View style={styles.view1}>
        <Text style={styles.name}>{studioName}</Text>
        <Text style={styles.details} numberOfLines={1} ellipsizeMode="tail">
          {details}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    opacity: 1,
    paddingTop: 6,
    paddingRight: 8,
    paddingBottom: 6,
    paddingLeft: 8,
    borderRadius: 12,
  },
  view1: {
    flexDirection: "column",
    gap: 8,
  },
  name: {
    fontFamily: "ClashGroteskMedium",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: 0.28,
    color: "#FFFFFF",
  },
  details: {
    fontFamily: "SatoshiMedium",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: 0,
    color: "#737373",
    width: 140,
  },
  img: {
    borderRadius: 8,
  },
});

import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Cross from "../../assets/svgs/cross";
import Gallary2 from "../../assets/svgs/gallary2";
import RightArrow from "../../assets/svgs/rightArrow";
import Qrcode from "../../assets/svgs/qrcode";
import React from "react";

export default function ImageGeneration() {
  return (
    <View style={styles.containerIG}>
      <View style={styles.view101}>
        <Text style={styles.title101}>Image Generation</Text>
        <Pressable>
          <Cross />
        </Pressable>
      </View>
      <View style={styles.view2}>
        <Pressable style={styles.btn1}>
          <View style={styles.view201}>
            <Gallary2 />
            <Text style={styles.btn201}>Text to Image</Text>
            
          </View>
          <RightArrow />
        </Pressable>
        <Pressable style={styles.btn1}>
          <View style={styles.view201}>
            <Qrcode />
            <Text style={styles.btn201}>Text to Image</Text>
            
          </View>
          <RightArrow />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerIG: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 24,
    backgroundColor: "#171717",
  },
  view101: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title101: {
    fontFamily: "ClashGroteskSemiBold",
    fontWeight: "600",
    fontStyle: "normal",
    fontSize: 18,
    lineHeight: 18,
    letterSpacing: 0.36,
    color: "#FFFFFF",
  },
  view2: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  btn1: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#262626",
  },
  view201: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  btn201: {
    fontFamily: "ClashGroteskMedium",
    fontWeight: "500",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0.32,
    color: "#D4D4D4",
  },
});

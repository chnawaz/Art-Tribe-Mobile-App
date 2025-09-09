import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import Menu from "../../assets/svgs/menu";
import Search from "../../assets/svgs/search";
import Diamond1 from "../../assets/svgs/diamond1";
import React from "react";

export default function Navbar() {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={["rgba(0,0,0,0.15)", "transparent"]}
      start={{ x: 0.5, y: 0 }} // top
      end={{ x: 0.5, y: 1 }} // bottom
      style={styles.container}
    >
      <BlurView
        intensity={70}
        tint="systemUltraThinMaterialDark"
        style={styles.blurContainer}
      >
        <Pressable onPress={() => navigation.openDrawer()} style={styles.view1}>
          <Menu />
        </Pressable>
        <View style={styles.view2}>
          <Pressable style={styles.press1}>
            <Search />
          </Pressable>
          <Pressable style={styles.press2}>
            <Diamond1 />
            <Text style={styles.text1}>Upgrade</Text>
          </Pressable>
        </View>
      </BlurView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // backgroundColor: "rgba(49, 48, 48, 0.3)",
  },
  blurContainer: {
    overflow: "hidden",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 12,
    // backgroundColor: "rgba(49, 48, 48, 0.3)",
    alignItems: "center",
  },

  view2: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  press1: {
    padding: 5,
  },
  press2: {
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    gap: 4,
    overflow: "hidden",
    backgroundColor: "#00FF001A",
    alignItems: "center",
  },
  text1: {
    fontFamily: "ClashGroteskMedium",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 14 * 1.5,
    letterSpacing: 0.28,
    color: "#00FF00",
  },
});

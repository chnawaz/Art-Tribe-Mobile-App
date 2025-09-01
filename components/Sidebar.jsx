import { StyleSheet, Text, View, Image, SafeAreaView , ScrollView } from "react-native";
import Line from "./sidebar/Line";
import Tabs from "./sidebar/Tabs";
import Studio from "./sidebar/Studios";
import SocialMedia from "./sidebar/SocialMedia";
import Billing from "./sidebar/Billing";
import React from "react";

export default function Sidebar() {
  return (
    // <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <View style={styles.view1}>
            <Image
              source={require("../assets/images/Logo.png")}
              style={styles.img}
            />
            <Text style={styles.text1}>Arttribe</Text>
          </View>
          <View style={styles.view2}>
            <Tabs />
            <Line />
            <Studio />
            <Line />
            <SocialMedia />
            <Line />
            <Billing />
            <Line />
          </View>
        </View>
      </ScrollView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    flexDirection: "column",
    width: 260,
    padding: 16,
    borderRadius: 16,
    gap: 24,
    backgroundColor: "#0E0F11",
  },
  view1: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  text1: {
    fontFamily: "ClashGroteskSemiBold",
    fontWeight: "600",
    fontSize: 22,
    lineHeight: 33,
    letterSpacing: 0.44,
    color: "#FFFFFF",
  },
  view2: {
    flexDirection: "column",
    gap: 16,
    paddingBottom: 90,
  },
});

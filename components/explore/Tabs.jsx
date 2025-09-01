import { StyleSheet, Text, View , ScrollView, Pressable} from "react-native";
import React, { useState } from "react";

export default function Tabs() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = [
    "All",
    "Images",
    "Videos",
    "Shorts",
    "Audio",
    "Documents",
    "Others",
    "Favorites",
  ];
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.tabContainer}
    >
      {categories.map((category) => (
        <Pressable
          key={category}
          onPress={() => setActiveCategory(category)}
          style={[styles.tab, activeCategory === category && styles.activeTab]}
        >
          <Text
            style={[
              styles.tabText,
              activeCategory === category && styles.activeTabText,
            ]}
          >
            {category}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
  },
  tab: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginRight: 12,
  },
  activeTab: {
    backgroundColor: "#1E2025",
  },
  tabText: {
    color: "#D4D4D4",
    fontFamily: "ClashGroteskRegular",
    fontWeight: "400",
    fontSize: 16,
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0.32,
  },
  activeTabText: {
    color: "#FAFAFA",
    fontFamily: "ClashGroteskMedium", 
    fontWeight: "500", 
    fontStyle: "normal", 
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.32,
  },
});

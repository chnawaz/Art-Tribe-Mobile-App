import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, ScrollView, Dimensions } from "react-native";
import { Asset } from "expo-asset";

const localImages = [
  require("../../assets/images/exploreImages/3.png"),
  require("../../assets/images/exploreImages/4.png"),
  require("../../assets/images/exploreImages/5.png"),
  require("../../assets/images/exploreImages/6.png"),
  require("../../assets/images/exploreImages/7.png"),
  require("../../assets/images/exploreImages/8.png"),
  require("../../assets/images/exploreImages/9.png"),
  require("../../assets/images/exploreImages/10.png"),
  require("../../assets/images/exploreImages/11.png"),
  require("../../assets/images/exploreImages/12.png"),
  require("../../assets/images/exploreImages/13.png"),
  require("../../assets/images/exploreImages/14.png"),
  require("../../assets/images/exploreImages/15.png"),
  require("../../assets/images/exploreImages/16.png"),
  require("../../assets/images/exploreImages/17.png"),
  require("../../assets/images/exploreImages/18.png"),
  require("../../assets/images/exploreImages/19.png"),
  require("../../assets/images/exploreImages/20.png"),
  require("../../assets/images/exploreImages/21.png"),
  require("../../assets/images/exploreImages/22.png"),
  require("../../assets/images/exploreImages/23.png"),
  require("../../assets/images/exploreImages/24.png"),
  require("../../assets/images/exploreImages/25.png"),
  require("../../assets/images/exploreImages/26.png"),
  require("../../assets/images/exploreImages/27.png"),
  require("../../assets/images/exploreImages/28.png"),
  require("../../assets/images/exploreImages/29.png"),
  require("../../assets/images/exploreImages/30.png"),
  require("../../assets/images/exploreImages/31.png"),
  require("../../assets/images/exploreImages/32.png"),
  require("../../assets/images/exploreImages/33.png"),
  require("../../assets/images/exploreImages/34.png"),
  require("../../assets/images/exploreImages/35.png"),
  require("../../assets/images/exploreImages/36.png"),
  require("../../assets/images/exploreImages/37.png"),
];

export default function ImageGallery() {
  const [columns, setColumns] = useState([[], []]);
  const screenWidth = Dimensions.get("window").width;
  const columnWidth = (screenWidth - 4) / 2;

  useEffect(() => {
    const left = [];
    const right = [];
    let leftHeight = 0;
    let rightHeight = 0;

    localImages.forEach((source) => {
      const asset = Asset.fromModule(source);

      // scale height according to column width
      const scaledHeight = (columnWidth / asset.width) * asset.height;

      if (leftHeight <= rightHeight) {
        left.push({ source, height: scaledHeight });
        leftHeight += scaledHeight;
      } else {
        right.push({ source, height: scaledHeight });
        rightHeight += scaledHeight;
      }
    });

    setColumns([left, right]);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.row}>
        {columns.map((col, i) => (
          <View key={i} style={styles.column}>
            {col.map((img, index) => (
              <Image
                key={index}
                source={img.source}
                style={{
                  width: columnWidth,
                  height: img.height,
                  borderRadius: 8,
                }}
                resizeMode="cover"
              />
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {},
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    flex: 1,
    flexDirection: "column",
    gap: 4,
  },
});

import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet, View } from "react-native";

const screenWidth = Dimensions.get("window").width;
const columnGap = 4;
const columnWidth = screenWidth / 2 - columnGap;

const ImageGallery = () => {
  const imageList = [
    { id: "1", uri: require("../../assets/images/1.png"), height: 300 },
    { id: "2", uri: require("../../assets/images/2.png"), height: 140 },
    { id: "3", uri: require("../../assets/images/3.png"), height: 260 },
    { id: "4", uri: require("../../assets/images/4.png"), height: 150 },
    { id: "5", uri: require("../../assets/images/5.png"), height: 300 },
    { id: "6", uri: require("../../assets/images/6.png"), height: 130 },
    { id: "7", uri: require("../../assets/images/7.png"), height: 300 },
    { id: "8", uri: require("../../assets/images/8.png"), height: 180 },
  ];

  const splitImages = (images) => {
    const leftColumn = [];
    const rightColumn = [];
    let leftHeight = 0;
    let rightHeight = 0;

    images.forEach((image) => {
      if (leftHeight <= rightHeight) {
        leftColumn.push(image);
        leftHeight += image.height + columnGap;
      } else {
        rightColumn.push(image);
        rightHeight += image.height + columnGap;
      }
    });

    return { leftColumn, rightColumn };
  };

  const { leftColumn, rightColumn } = splitImages(imageList);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.column}>
        {leftColumn.map((image) => (
          <Image key={image.id} source={image.uri} style={styles.image} />
        ))}
      </View>
      <View style={styles.column}>
        {rightColumn.map((image) => (
          <Image key={image.id} source={image.uri} style={styles.image} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    gap: 4,
    backgroundColor: "#0E0F11",
  },
  image: {
    width: "100%",
    overflow: "hidden",
  },
  column: {
    flexDirection: "column",
    width: "50%",
    gap: 4,
  },
});

export default ImageGallery;

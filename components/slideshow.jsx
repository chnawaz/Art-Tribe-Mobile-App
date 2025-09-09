import React, { useEffect, useRef, useState } from "react";
import {
  View,
  FlatList,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Text,
} from "react-native";

const { width, height } = Dimensions.get("window");

const images = [
  {
    uri: require("../assets/images/8.png"),
    title: "Open AI Sora",
    desc: "Transform your words into visual masterpieces: Leverage AI technology to craft breathtaking images.",
  },
  {
    uri: require("../assets/images/3.png"),
    title: "Image Generation",
    desc: "Bring your imagination to life with stunning AI-generated images.",
  },
  {
    uri: require("../assets/images/1.png"),
    title: "Video Generation",
    desc: "Create captivating AI-powered videos with ease.",
  },
];

export default function BackgroundCarousel() {
  const flatListRef = useRef(null);
  const [index, setIndex] = useState(0);
  const currentIndex = useRef(0);

  // Auto slide only once
  useEffect(() => {
    const timer = setInterval(() => {
      let nextIndex = (currentIndex.current + 1) % images.length;
      currentIndex.current = nextIndex;
      setIndex(nextIndex);

      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
        getItemLayout={(_, i) => ({
          length: width,
          offset: width * i,
          index: i,
        })}
        onMomentumScrollEnd={(e) => {
          const newIndex = Math.round(e.nativeEvent.contentOffset.x / width);
          setIndex(newIndex);
          currentIndex.current = newIndex; // keep ref in sync
        }}
        renderItem={({ item }) => (
          <ImageBackground
            source={item.uri}
            style={styles.background}
            resizeMode="contain"
          >
            <View style={styles.overlay}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.desc}>{item.desc}</Text>
            </View>
          </ImageBackground>
        )}
      />

      {/* Dots */}
      <View style={styles.dotsContainer}>
        {images.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              { backgroundColor: i === index ? "#fff" : "#888" },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: {
    width: "100%",
    height: 293,
    justifyContent: "flex-end",
    paddingBottom: 100,
  },
  overlay: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  desc: {
    fontSize: 14,
    color: "#ddd",
    lineHeight: 20,
  },
  dotsContainer: {
    position: "absolute",
    bottom: 70,
    flexDirection: "row",
    alignSelf: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 5,
  },
});

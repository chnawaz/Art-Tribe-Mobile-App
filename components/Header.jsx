import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  Image,
  Modal,
  Alert,
} from "react-native";
import Cross from "../assets/svgs/cross";
import Gallary2 from "../assets/svgs/gallary2";
import RightArrow from "../assets/svgs/rightArrow";
import Qrcode from "../assets/svgs/qrcode";
import ImageGeneration from "./image generation/ImageGeneration";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import NavBar from "./header/Navbar";
import Tabsbtn from "./header/Tabsbtn";
import Headings from "./header/Headings";

export default function Header() {
  const [modalVisible, setModalVisible] = useState(false);
  const [generationType, setGenerationType] = useState(null);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.container2}
        source={require("../assets/images/bg.png")}
        resizeMode="cover"
      >
        {/* Gradient overlay inside ImageBackground */}
        <LinearGradient
          colors={["rgba(0,0,0,0.15)", "#0E0F11"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={StyleSheet.absoluteFillObject}
        />

        <NavBar />
        <View style={styles.headings}>
          <Headings
            title="Open AI Sora"
            subtitle="Transform your words into visual masterpieces: Leverage AI technology to craft breathtaking images."
          />
        </View>
      </ImageBackground>

      {/* Bottom buttons */}
      <View style={styles.containerAbsolute}>
        <Pressable
          onPress={() => {
            setModalVisible(true);
            setGenerationType("ImageGeneration");
          }}
          style={styles.containerPress}
        >
          <Image source={require("../assets/images/Gallery_2.png")} />
          <Text style={styles.titleBtn}>Image Generation</Text>
        </Pressable>
        {/* modal start */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          {/* <ImageGeneration /> */}
          {generationType === "ImageGeneration" && (
            <View style={styles.modalOverlay}>
              <View style={styles.containerIG}>
                <View style={styles.view101}>
                  <Text style={styles.title101}>Image Generation</Text>
                  <Pressable onPress={() => setModalVisible(!modalVisible)}>
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
                  <Pressable
                    onPress={() => {
                      setGenerationType("ImagetoImage");
                    }}
                    style={styles.btn1}
                  >
                    <View style={styles.view201}>
                      <Qrcode />
                      <Text style={styles.btn201}>Image to Image</Text>
                    </View>
                    <RightArrow />
                  </Pressable>
                </View>
              </View>
            </View>
          )}
          {generationType === "ImagetoImage" && (
            <View style={styles.modalOverlay}>
            <View style={styles.containerIG}>
              <View style={styles.view101}>
                <Text style={styles.title101}>Image to Image</Text>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <Cross />
                </Pressable>
              </View>
              <View style={styles.view3}>
                <Pressable style={styles.btnview3}>
                  <Image
                    style={{ borderRadius: 12 }}
                    source={require("../assets/images/blub.png")}
                    resizeMode="contain"
                  />
                  <View style={styles.btnview3view}>
                    <Text style={styles.btnview3viewtext}>
                      Product Photography
                    </Text>
                    <Text style={styles.btnview3viewtext2}>
                      All-In-One Studio for image generation, AI editing and
                      more
                    </Text>
                  </View>
                  <RightArrow />
                </Pressable>
              </View>
              <View style={styles.view3}>
                <Pressable style={styles.btnview3}>
                  <Image
                    style={{ borderRadius: 12 }}
                    source={require("../assets/images/ph.png")}
                    resizeMode="contain"
                  />
                  <View style={styles.btnview3view}>
                    <Text style={styles.btnview3viewtext}>
                      Professional Headshot
                    </Text>
                    <Text style={styles.btnview3viewtext2}>
                      All-In-One Studio for image generation, AI editing and
                      more
                    </Text>
                  </View>
                  <RightArrow />
                </Pressable>
              </View>
              <View style={styles.view3}>
                <Pressable style={styles.btnview3}>
                  <Image
                    style={{ borderRadius: 12 }}
                    source={require("../assets/images/cu.png")}
                    resizeMode="contain"
                  />
                  <View style={styles.btnview3view}>
                    <Text style={styles.btnview3viewtext}>
                      Creative Upscale
                    </Text>
                    <Text style={styles.btnview3viewtext2}>
                      All-In-One Studio for image generation, AI editing and
                      more
                    </Text>
                  </View>
                  <RightArrow />
                </Pressable>
              </View>
              <View style={styles.view3}>
                <Pressable style={styles.btnview3}>
                  <Image
                    style={{ borderRadius: 12 }}
                    source={require("../assets/images/aie.png")}
                    resizeMode="contain"
                  />
                  <View style={styles.btnview3view}>
                    <Text style={styles.btnview3viewtext}>
                      AI Image Editing
                    </Text>
                    <Text style={styles.btnview3viewtext2}>
                      All-In-One Studio for image generation, AI editing and
                      more
                    </Text>
                  </View>
                  <RightArrow />
                </Pressable>
              </View>
            </View>
            </View>
          )}
        </Modal>
        {/* modal end */}

        <Tabsbtn
          image={require("../assets/images/Play.png")}
          title="Video Generation"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 336,
    width: "100%",
    justifyContent: "space-between",
  },
  container2: {
    width: "100%",
    height: 293,
  },
  containerAbsolute: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 16,
    gap: 16,
    justifyContent: "space-between",
  },
  headings: {
    marginTop: 56,
    marginLeft: 16,
  },
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

  // image generation styles start
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
  // image generation styles end
  // image to image styles start
  view3: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  btnview3: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 12,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 16,
    gap: 12,
    backgroundColor: "#262626",
    // overflow: "hidden"
  },
  btnview3view: {
    flexDirection: "column",
    gap: 10,
    flex: 3,
  },
  btnview3viewtext: {
    fontFamily: "ClashGroteskMedium",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0.32,
    color: "#D4D4D4",
  },
  btnview3viewtext2: {
    fontFamily: "SatoshiMedium",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 15.6,
    letterSpacing: 0,
    color: "#A3A3A3",
  },

  // image to image styles end
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end", // 👈 push content to bottom
    backgroundColor: "rgba(0,0,0,0.5)", // blur-like dark overlay
  },
});

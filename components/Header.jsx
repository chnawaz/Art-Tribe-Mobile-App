import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  Image,
  Modal,
  TextInput,
} from "react-native";
import Cross from "../assets/svgs/cross";
import Gallary2 from "../assets/svgs/gallary2";
import RightArrow from "../assets/svgs/rightArrow";
import RightArrow2 from "../assets/svgs/rightArrow2";
import Qrcode from "../assets/svgs/qrcode";
import ImageGeneration from "./image generation/ImageGeneration";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import NavBar from "./header/Navbar";
import Tabsbtn from "./header/Tabsbtn";
import Headings from "./header/Headings";
import ArrowDown from "../assets/svgs/arrowdown";
import Addsvg from "../assets/svgs/Add";
import Gallary3 from "../assets/svgs/gallary3";
import Camera from "../assets/svgs/camera";

export default function Header() {
  const [value, setValue] = useState("");
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
          {/* image generation end */}
          {/* image to image start */}
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
                  <Pressable
                    onPress={() => {
                      setGenerationType("ProductPhotography");
                    }}
                    style={styles.btnview3}
                  >
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
          {/* image to image end */}
          {/* Product Photography start */}
          {generationType === "ProductPhotography" && (
            <View style={styles.modalOverlay}>
              <View style={styles.containerPP}>
                <View style={styles.view101}>
                  <View style={styles.view101a}>
                    <Text style={styles.title101}>Product Photography</Text>
                    <ArrowDown />
                  </View>
                  <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <Cross />
                  </Pressable>
                </View>
                <View style={styles.ppview2}>
                  <View style={styles.ppview2o1}>
                    <View style={styles.ppview2o1a}>
                      <Pressable style={styles.uploadimage}>
                        <Gallary3 />
                        <View style={styles.uploadimagetext}>
                          <Text style={styles.head}>Upload Image</Text>
                          <Text style={styles.desc}>Browse from gallery</Text>
                        </View>
                      </Pressable>
                      <Pressable style={styles.takeimage}>
                        <Camera />
                        <Text style={styles.head}>Use Camer</Text>
                      </Pressable>
                    </View>
                    <View style={styles.ppview2o1b}>
                      <TextInput
                      spellCheck={false}
                        style={styles.textArea}
                        value={value}
                        onChangeText={setValue}
                        multiline={true}
                        underlineColorAndroid="transparent"
                        selectionColor="transparent"
                      />
                    </View>
                    <View style={styles.ppview2o1c}>
                      <Pressable style={styles.btns}>
                        <Text style={styles.btnstext}>4:5</Text>
                        <RightArrow2 />
                      </Pressable>
                      <Pressable style={styles.btns}>
                        <Text style={styles.btnstext}>Product Photography</Text>
                        <RightArrow2 />
                      </Pressable>
                    </View>
                  </View>
                  <View style={styles.ppview2o2Line}></View>
                  <Pressable style={styles.button1}>
                    <Text style={styles.text1}>Generate</Text>
                    <Addsvg />
                  </Pressable>
                </View>
              </View>
            </View>
          )}
          {/* Product Photography end */}
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
  // Product Photography styles start
  containerPP: {
    maxHeight: 881,
    height: "100%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    // gap: 441,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 24,
    backgroundColor: "#171717",
  },
  view101a: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  ppview2: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  button1: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 8,
    paddingRight: 12,
    paddingBottom: 8,
    paddingLeft: 12,
    gap: 4,
    borderRadius: 8,
    backgroundColor: "#00FF00",
  },
  ppview2o2Line: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#262626",
  },
  ppview2o1: {
    width: "100%",
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  ppview2o1a: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
  },
  uploadimage: {
    flex: 2,
    flexDirection: "row",
    gap: 8,
    padding: 16,
    borderWidth: 1,
    borderRadius: 16,
    borderStyle: "dashed",
    borderColor: "#525252",
    alignItems: "center",
  },
  uploadimagetext: {
    flexDirection: "column",
    //  alignItems: "center",
    gap: 4,
  },
  head: {
    fontFamily: "ClashGroteskSemibold",
    fontWeight: "600",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.32,
    color: "#FFFFFF",
  },
  desc: {
    fontFamily: "SatoshiMedium",
    fontWeight: "500",
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0,
    color: "#D4D4D4",
  },
  takeimage: {
    // flex: 1,
    flexDirection: "column",
    gap: 8,
    padding: 16,
    borderWidth: 1,
    borderRadius: 16,
    borderStyle: "dashed",
    borderColor: "#525252",
    alignItems: "center",
    // justifyContent: "center"
  },
  ppview2o1b: {
    width: "100%",
    borderRadius: 12,
    backgroundColor: "#262626",
  },
  textArea: {
    flex: 1,
    // color: "#262626",
    color: "#D4D4D4",
    minHeight:132,
    paddingHorizontal: 16,
    paddingTop: 16,
    outlineWidth: 0,
    
  },
  ppview2o1c: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  btns: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    borderRadius: 12,
    paddingTop: 12,
    paddingRight: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    backgroundColor: "#262626"
  },
  btnstext:{
     fontFamily: "ClashGroteskMedium",
    fontWeight: "500",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0.32,
    color: '#FFFFFF'
  },
  // Product Photography styles end
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    // backgroundColor: "rgba(0,0,0,0.5)",
    backgroundColor: "#090909CC",
  },
  
});

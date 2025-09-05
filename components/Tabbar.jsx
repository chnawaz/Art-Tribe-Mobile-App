// import { Pressable, StyleSheet, Text, View } from "react-native";
// import { BlurView } from "expo-blur";
// import Addsvg from "../assets/svgs/Add";
// import HomeTab from "./tabbar/hometab";
// import ExploreTab from "./tabbar/explore";
// import MyCreations from "./tabbar/creations";
// import React from "react";

// export default function Tabbar() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.btncontainer}>
//         <Pressable style={styles.button1}>
//         <Text style={styles.text1}>Generate</Text>
//         <Addsvg />
//       </Pressable>
//       </View>
//       <BlurView
//         intensity={70}
//         tint="systemUltraThinMaterialDark"
//         style={styles.blurContainer}
//       >
//         <HomeTab />
//         <ExploreTab />
//         <MyCreations />
//       </BlurView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     width: "100%",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     gap: 8,
//   },
//   button1: {
//     width: '100%',
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     paddingTop: 8,
//     paddingRight: 12,
//     paddingBottom: 8,
//     paddingLeft: 12,
//     gap: 4,
//     borderRadius: 8,
//     backgroundColor: "#00FF00",
//   },
//   text1: {
//     fontFamily: "ClashGroteskMedium",
//     fontWeight: "500",
//     fontSize: 16,
//     fontStyle: "normal",
//     lineHeight: 24,
//     letterSpacing: 0.32,
//     color: "#000000",
//   },
//   blurContainer: {
//     width: "100%",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingTop: 12,
//     paddingRight: 56,
//     paddingBottom: 16,
//     paddingLeft: 56,
//   },
//   btncontainer: {
//     width: "100%",
//     paddingHorizontal: 48,
//   }
// });

// .....................................

import { Pressable, Text, View, StyleSheet, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import Addsvg from "../assets/svgs/Add";
import HomeSvg from "../assets/svgs/home";
import ExploreSvg from "../assets/svgs/explore";
import MyCreationsSvg from "../assets/svgs/creations";
import {
  // StyleSheet,
  // Text,
  // View,
  ImageBackground,
  // Pressable,
  Image,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
// import { BlurView } from "expo-blur";
import Cross from "../assets/svgs/cross";
import Gallary2 from "../assets/svgs/gallary2";
import RightArrow from "../assets/svgs/rightArrow";
import RightArrow2 from "../assets/svgs/rightArrow2";
import Qrcode from "../assets/svgs/qrcode";
import ImageGeneration from "./image generation/ImageGeneration";
// import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import NavBar from "./header/Navbar";
import Tabsbtn from "./header/Tabsbtn";
import Headings from "./header/Headings";
import ArrowDown from "../assets/svgs/arrowdown";
// import Addsvg from "../assets/svgs/Add";
import Gallary3 from "../assets/svgs/gallary3";
import Camera from "../assets/svgs/camera";
import Bglogo from "../assets/svgs/bglogo";
import PlayIcon from "../assets/svgs/playicon";
// import React from "react";

export default function Tabbar({ state, descriptors, navigation }) {
  if (!state || !state.routes) return null;

  // modal functionalty start
  const [image, setImage] = useState(null);
  const [value, setValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [generationType, setGenerationType] = useState(null);

  // pick image from gallery
  const pickImageFromGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Denied", "We need access to your gallery.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // take picture from camera
  const takePicture = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Denied", "We need access to your camera.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  // modal functionalty end

  return (
    <View style={styles.wrapper}>
      {/* Generate Button */}
      <View style={styles.btncontainer}>
        <Pressable
          onPress={() => {
            setModalVisible(true);
            setGenerationType("ImageGeneration");
          }}
          style={styles.button1}
        >
          <Text style={styles.text1}>Generate</Text>
          <Addsvg />
        </Pressable>
        {/* <Pressable
          onPress={() => {
            setModalVisible(true);
            setGenerationType("ImageGeneration");
          }}
          style={styles.containerPress}
        >
          <Image source={require("../assets/images/Gallery_2.png")} />
          <Text style={styles.titleBtn}>Image Generation</Text>
        </Pressable> */}
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
            // <View style={styles.modalOverlay}>
            <BlurView intensity={50} tint="dark" style={styles.modalOverlay}>
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
              {/* </View> */}
            </BlurView>
          )}
          {/* image generation end */}
          {/* image to image start */}
          {generationType === "ImagetoImage" && (
            <BlurView intensity={50} tint="dark" style={styles.modalOverlay}>
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
            </BlurView>
          )}
          {/* image to image end */}
          {/* Product Photography start */}
          {generationType === "ProductPhotography" && (
            <BlurView intensity={50} tint="dark" style={styles.modalOverlay}>
              <View style={styles.containerPP}>
                <View style={styles.logo}>
                  {image ? (
                    <Image
                      source={{ uri: image }}
                      style={styles.imagePhone}
                      resizeMode="contain"
                    />
                  ) : (
                    <Bglogo />
                  )}
                </View>
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
                      <Pressable
                        onPress={pickImageFromGallery}
                        style={styles.uploadimage}
                      >
                        <Gallary3 />
                        <View style={styles.uploadimagetext}>
                          <Text style={styles.head}>Upload Image</Text>
                          <Text style={styles.desc}>Browse from gallery</Text>
                        </View>
                      </Pressable>
                      <Pressable onPress={takePicture} style={styles.takeimage}>
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
            </BlurView>
          )}
          {/* Product Photography end */}
        </Modal>
        {/* modal end */}
      </View>

      {/* Blur Tabs */}
      <LinearGradient
        colors={["#0E0F11", "rgba(14, 15, 17, 0.8)"]}
        start={{ x: 0.5, y: 0 }} // top
        end={{ x: 0.5, y: 1 }} // bottom
        style={styles.container}
      >
        <BlurView intensity={90} tint="dark" style={styles.blurContainer}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label = options.title ?? route.name;
            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            let Icon = null;
            if (route.name === "index") Icon = HomeSvg;
            if (route.name === "explore") Icon = ExploreSvg;
            if (route.name === "myCreations") Icon = MyCreationsSvg;

            return (
              <Pressable
                key={route.key}
                onPress={onPress}
                style={styles.tabItem}
              >
                {Icon && <Icon color={isFocused ? "#00FF00" : "#FFF"} />}
                <Text style={isFocused ? styles.presLabel : styles.label}>
                  {label}
                </Text>
              </Pressable>
            );
          })}
        </BlurView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    // bottom: Platform.OS === "ios" ? 40 : 40,
    bottom: 0,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    overflow: "hidden",
  },
  blurContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 12,
    paddingRight: 56,
    paddingBottom: 16,
    paddingLeft: 56,
  },
  tabItem: {
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
  },
  label: {
    fontFamily: "ClashGroteskMedium",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: 0.24,
    color: "#FFFFFF",
  },
  btncontainer: {
    width: "100%",
    paddingHorizontal: 48,
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
  text1: {
    fontFamily: "ClashGroteskMedium",
    fontWeight: "500",
    fontSize: 16,
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0.32,
    color: "#000000",
  },
  presLabel: {
    fontFamily: "ClashGroteskSemiBold",
    fontWeight: "600",
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: 0.24,
    color: "#00FF00",
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
    // flex: 1,
    color: "#D4D4D4",
    minHeight: 132,
    paddingHorizontal: 16,
    paddingTop: 16,
    outlineWidth: 0,
    textAlignVertical: "top",
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
    backgroundColor: "#262626",
  },
  btnstext: {
    fontFamily: "ClashGroteskMedium",
    fontWeight: "500",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0.32,
    color: "#FFFFFF",
  },
  logo: {
    position: "absolute",
    top: 211,
  },
  imagePhone: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  // Product Photography styles end
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#090909CC",
  },
});

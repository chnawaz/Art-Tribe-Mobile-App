import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  Image,
  Modal,
  TextInput,
  Alert,
  Animated,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { BlurView } from "expo-blur";
import Cross from "../assets/svgs/cross";
import Gallary2 from "../assets/svgs/gallary2";
import RightArrow from "../assets/svgs/rightArrow";
import RightArrow2 from "../assets/svgs/rightArrow2";
import Qrcode from "../assets/svgs/qrcode";
import ImageGeneration from "./image generation/ImageGeneration";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useEffect, useRef } from "react";
import NavBar from "./header/Navbar";
import Tabsbtn from "./header/Tabsbtn";
import Headings from "./header/Headings";
import ArrowDown from "../assets/svgs/arrowdown";
import Addsvg from "../assets/svgs/Add";
import Gallary3 from "../assets/svgs/gallary3";
import Camera from "../assets/svgs/camera";
import Bglogo from "../assets/svgs/bglogo";
import PlayIcon from "../assets/svgs/playicon";
import { PanGestureHandler, State } from "react-native-gesture-handler";

// Get device screen dimensions
const { width } = Dimensions.get('window');

export default function Header() {
  // Existing state variables
  const [image, setImage] = useState(null);
  const [value, setValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [vmodalVisible, setVmodalVisible] = useState(false);
  const [generationType, setGenerationType] = useState(null);
  const [vgenerationType, setVgenerationType] = useState(null);
  
  // New slideshow state variables
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);
  const translateX = useRef(new Animated.Value(0)).current;

  // Array of slide data with local images and your styling
  const slides = [
    {
      id: 1,
      title: "Open AI Sora",
      subtitle: "Transform your words into visual masterpieces: Leverage AI technology to craft breathtaking images.",
      background: require("../assets/images/bg.png") // Your existing background
    },
    {
      id: 2,
      title: "AI Image Generation",
      subtitle: "Create stunning visuals with advanced artificial intelligence. Turn imagination into reality with our powerful tools.",
      background: require("../assets/images/bg1.png") // Add more backgrounds to your assets
    },
    {
      id: 3,
      title: "Video Generation",
      subtitle: "Revolutionary video creation powered by AI. Bring your stories to life with cutting-edge technology.",
      background: require("../assets/images/bg2.png") // Add more backgrounds to your assets
    },
    // {
    //   id: 4,
    //   title: "Creative Studio",
    //   subtitle: "Your complete creative workspace. Design, edit, and produce content with intelligent AI-powered tools.",
    //   background: require("../assets/images/bg4.png") // Add more backgrounds to your assets
    // }
  ];

  // Function to go to next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => {
      return prevSlide === slides.length - 1 ? 0 : prevSlide + 1;
    });
  };

  // Function to go to specific slide
  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
    resetAutoSlide();
  };

  // Function to reset auto-slide timer
  const resetAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 4000); // 4 seconds
  };

  // Start auto-slide when component mounts
  useEffect(() => {
    resetAutoSlide();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Handle swipe gestures
  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: translateX } }],
    { useNativeDriver: false }
  );

  const onHandlerStateChange = (event) => {
    const { translationX, state } = event.nativeEvent;
    
    if (state === State.END) {
      if (translationX > 50) {
        // Swipe right - go to previous slide
        setCurrentSlide((prev) => prev === 0 ? slides.length - 1 : prev - 1);
      } else if (translationX < -50) {
        // Swipe left - go to next slide
        nextSlide();
      }
      
      // Reset gesture animation
      Animated.spring(translateX, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
      
      resetAutoSlide();
    }
  };

  // Existing functions remain the same
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

  return (
    <View style={styles.container}>
      {/* Slideshow Container with Gesture Handler */}
      <PanGestureHandler
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onHandlerStateChange}
      >
        <Animated.View style={[styles.slideshowContainer, { transform: [{ translateX }] }]}>
          <ImageBackground
            style={styles.container2}
            source={slides[currentSlide].background}
            resizeMode="cover"
          >
            {/* Gradient overlay */}
            <LinearGradient
              colors={["rgba(0,0,0,0.15)", "#0E0F11"]}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              style={StyleSheet.absoluteFillObject}
            />

            <NavBar />
            <View style={styles.headings}>
              <Headings
                title={slides[currentSlide].title}
                subtitle={slides[currentSlide].subtitle}
              />
            </View>
          </ImageBackground>
        </Animated.View>
      </PanGestureHandler>

      {/* Navigation Dots */}
      <View style={styles.dotsContainer}>
        {slides.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dot,
              currentSlide === index && styles.activeDot
            ]}
            onPress={() => goToSlide(index)}
          />
        ))}
      </View>

      {/* Bottom buttons - keeping your existing design */}
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

        {/* All your existing modals remain exactly the same */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          {generationType === "ImageGeneration" && (
            <BlurView intensity={50} tint="dark" style={styles.modalOverlay}>
              <View style={styles.containerIG}>
                <View style={styles.view101}>
                  <Text style={styles.title101}>Image Generation</Text>
                  <Pressable
                    onPress={() => {
                      console.log("pressed---");
                      setModalVisible(!modalVisible);
                      setGenerationType("");
                    }}
                  >
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
            </BlurView>
          )}

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
                        <Text style={styles.head}>Use Camera</Text>
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
        </Modal>

        {/* Video Generation Button */}
        <Pressable
          onPress={() => {
            setVmodalVisible(true);
            setVgenerationType("VideoGeneration");
          }}
          style={styles.containerPress}
        >
          <PlayIcon />
          <Text style={styles.titleBtn}>Video Generation</Text>
        </Pressable>

        {/* Video Generation Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={vmodalVisible}
          onRequestClose={() => {
            setVmodalVisible(!vmodalVisible);
          }}
        >
          {vgenerationType === "VideoGeneration" && (
            <BlurView intensity={50} tint="dark" style={styles.modalOverlay}>
              <View style={styles.containerIG}>
                <View style={styles.view101}>
                  <Text style={styles.title101}>Video Generation</Text>
                  <Pressable onPress={() => setVmodalVisible(!vmodalVisible)}>
                    <Cross />
                  </Pressable>
                </View>
                <View style={styles.view2}>
                  <Pressable style={styles.btn1}>
                    <View style={styles.view201}>
                      <Text style={styles.btn201}>
                        Video Generation{" "}
                        <Text style={{ color: "red" }}>
                          is in Developing Phase...
                        </Text>
                      </Text>
                    </View>
                    <RightArrow />
                  </Pressable>
                </View>
              </View>
            </BlurView>
          )}
        </Modal>
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
  
  // New slideshow styles
  slideshowContainer: {
    flex: 1,
  },
  
  container2: {
    width: "100%",
    height: 293,
  },
  
  // Navigation dots styling with your theme
  dotsContainer: {
    position: "absolute",
    top: 250,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.6)",
  },
  
  activeDot: {
    backgroundColor: "#00FF00", // Using your green color
    borderColor: "#00FF00",
    transform: [{ scale: 1.3 }],
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

  // All your existing styles remain the same
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
  containerPP: {
    maxHeight: 881,
    height: "100%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
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
  text1: {
    fontFamily: "ClashGroteskMedium",
    fontWeight: "500",
    fontSize: 16,
    color: "#000000",
  },
  ppview2o2Line: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#262626",
  },
  ppview2o1: {
    width: "100%",
    flexDirection: "column",
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
    flexDirection: "column",
    gap: 8,
    padding: 16,
    borderWidth: 1,
    borderRadius: 16,
    borderStyle: "dashed",
    borderColor: "#525252",
    alignItems: "center",
  },
  ppview2o1b: {
    width: "100%",
    borderRadius: 12,
    backgroundColor: "#262626",
  },
  textArea: {
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
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#090909CC",
  },
});
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
import React from "react";

export default function Tabbar({ state, descriptors, navigation }) {
  if (!state || !state.routes) return null;

  return (
    <View style={styles.wrapper}>
      {/* Generate Button */}
      <View style={styles.btncontainer}>
        <Pressable style={styles.button1}>
          <Text style={styles.text1}>Generate</Text>
          <Addsvg />
        </Pressable>
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
            <Pressable key={route.key} onPress={onPress} style={styles.tabItem}>
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
    bottom:0,
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
});

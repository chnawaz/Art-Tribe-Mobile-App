// import { StyleSheet, Text, View, ImageBackground } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import React from "react";
// import NavBar from "./header/Navbar";
// import Tabsbtn from "./header/Tabsbtn";
// import Headings from "./header/Headings";
// export default function Header() {
//   return (
//     <LinearGradient
//       colors={["rgba(0,0,0,0.6)", "#0E0F11"]}
//       start={{ x: 0.5, y: 0 }}
//       end={{ x: 0.5, y: 1 }} // bottom center
//       style={styles.container}
//     >
//       <View style={styles.container2}>
//         <ImageBackground
//           style={styles.container2}
//           source={require("../assets/images/bg.png")}
//           resizeMode="cover"
//         >
//           <NavBar />
//           <View style={styles.headings}>
//             <Headings
//               title="Open AI Sora"
//               subtitle="Transform your words into visual masterpieces: Leverage AI technology to craft breathtaking images."
//             />
//           </View>
//         </ImageBackground>
//       </View>
//       <View style={styles.containerAbsolute}>
//         <Tabsbtn
//           image={require("../assets/images/Gallery_2.png")}
//           title="Image Generation"
//         />
//         <Tabsbtn
//           image={require("../assets/images/Play.png")}
//           title="Video Generation"
//         />
//       </View>
//       {/* // </View> */}
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     height: 336,
//     flexDirection: "column",
//     width: "100%",
//     justifyContent: "space-between",
//   },
//   container2: {
//     width: "100%",
//     height: 293,
//     // paddingBottom: 43,
//   },
//   containerAbsolute: {
//     position: "absolute",
//     bottom: 0,
//     width: "100%",
//     flexDirection: "row",
//     paddingHorizontal: 16,
//     gap: 16,
//     justifyContent: "center",
//   },
//   headings: {
//     marginTop: 56,
//     marginLeft: 16,
//   },
// });




// ........................


import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import NavBar from "./header/Navbar";
import Tabsbtn from "./header/Tabsbtn";
import Headings from "./header/Headings";

export default function Header() {
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
        <Tabsbtn
          image={require("../assets/images/Gallery_2.png")}
          title="Image Generation"
        />
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
});

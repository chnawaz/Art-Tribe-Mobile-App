// import { Tabs } from "expo-router";
// import { Ionicons } from "@expo/vector-icons";

// export default function TabLayout() {
//   return (
//     <Tabs screenOptions={{ headerShown: false }}>
//       <Tabs.Screen
//         name="index" // 👈 app/(tabs)/index.js
//         options={{
//           title: "Home",
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="home" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="explore"
//         options={{
//           title: "Explore",
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="compass" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="myCreations"
//         options={{
//           title: "My Creations",
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="albums" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="profile"
//         options={{
//           title: "Profile",
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="person" size={size} color={color} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }



// ..........................
// import { Tabs } from "expo-router";
// import { Ionicons } from "@expo/vector-icons";
// import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
// import { useSafeAreaInsets } from "react-native-safe-area-context";

// export default function TabLayout() {
//   const insets = useSafeAreaInsets();

//   const CustomTabBar = ({ state, descriptors, navigation }) => {
//     return (
//       <View style={[styles.tabBarContainer, { paddingBottom: insets.bottom }]}>
//         {/* Generate Button */}
//         <TouchableOpacity
//           style={styles.generateButton}
//           onPress={() => {
//             // Handle generate button press
//             console.log("Generate pressed");
//           }}
//         >
//           <Text style={styles.generateText}>Generate +</Text>
//         </TouchableOpacity>

//         {/* Tab Bar */}
//         <View style={styles.tabBar}>
//           {state.routes.map((route, index) => {
//             const { options } = descriptors[route.key];
//             const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

//             const isFocused = state.index === index;

//             const onPress = () => {
//               const event = navigation.emit({
//                 type: "tabPress",
//                 target: route.key,
//                 canPreventDefault: true,
//               });

//               if (!isFocused && !event.defaultPrevented) {
//                 navigation.navigate(route.name);
//               }
//             };

//             // Get the appropriate icon
//             let iconName;
//             switch (route.name) {
//               case "index":
//                 iconName = "home";
//                 break;
//               case "explore":
//                 iconName = "compass";
//                 break;
//               case "myCreations":
//                 iconName = "albums";
//                 break;
//               default:
//                 iconName = "home";
//             }

//             return (
//               <TouchableOpacity
//                 key={route.key}
//                 onPress={onPress}
//                 style={styles.tabItem}
//               >
//                 <Ionicons
//                   name={iconName}
//                   size={24}
//                   color={isFocused ? "#00ff88" : "#ffffff"}
//                 />
//                 <Text style={[
//                   styles.tabLabel,
//                   { color: isFocused ? "#00ff88" : "#ffffff" }
//                 ]}>
//                   {label}
//                 </Text>
//               </TouchableOpacity>
//             );
//           })}
//         </View>
//       </View>
//     );
//   };

//   return (
//     <Tabs
//       screenOptions={{ headerShown: false }}
//       tabBar={(props) => <CustomTabBar {...props} />}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: "Home",
//         }}
//       />
//       <Tabs.Screen
//         name="explore"
//         options={{
//           title: "Explore",
//         }}
//       />
//       <Tabs.Screen
//         name="myCreations"
//         options={{
//           title: "My Creations",
//         }}
//       />
//     </Tabs>
//   );
// }

// const styles = StyleSheet.create({
//   tabBarContainer: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     alignItems: "center",
//   },
//   generateButton: {
//     backgroundColor: "#00ff88",
//     paddingHorizontal: 40,
//     paddingVertical: 15,
//     borderRadius: 25,
//     marginBottom: 10,
//     elevation: 5,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//   },
//   generateText: {
//     color: "#000000",
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   tabBar: {
//     flexDirection: "row",
//     backgroundColor: "rgba(0, 0, 0, 0.9)",
//     paddingHorizontal: 20,
//     paddingVertical: 15,
//     borderRadius: 20,
//     marginHorizontal: 20,
//     marginBottom: 10,
//   },
//   tabItem: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   tabLabel: {
//     fontSize: 12,
//     marginTop: 4,
//     fontWeight: "500",
//   },
// });


// ........................


import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#00ff88",   // selected tab
        tabBarInactiveTintColor: "#ffffff", // unselected tabs
        tabBarStyle: {
          backgroundColor: "black",        // tab bar background
          borderTopLeftRadius: 20,         // rounded corners
          borderTopRightRadius: 20,
          height: 70,                      // bar height
          position: "absolute",            // floating effect
          marginHorizontal: 20,            // spacing left/right
          marginBottom: 10,                // spacing from bottom
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontFamily: "ClashGrotesk-Medium", // custom font
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="compass" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="myCreations"
        options={{
          title: "My Creations",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="albums" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

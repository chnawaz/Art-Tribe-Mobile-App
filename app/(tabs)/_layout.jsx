// import { Tabs } from "expo-router";
// import Tabbar from "../../components/Tabbar";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { StatusBar, StyleSheet } from "react-native";
// import * as NavigationBar from "expo-navigation-bar";
// import { useEffect } from "react";

// export default function TabLayout() {

//   return (
//     <SafeAreaView style={styles.container}>
//       <Tabs
//         screenOptions={{
//           headerShown: false,
//         }}
//         tabBar={(props) => <Tabbar {...props} />}
//       >
//         <Tabs.Screen name="index" options={{ title: "Home" }} />
//         <Tabs.Screen name="explore" options={{ title: "Explore" }} />
//         <Tabs.Screen name="myCreations" options={{ title: "My Creations" }} />
//         <Tabs.Screen name="profile" options={{ title: "Profile" }} />
//       </Tabs>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000'
//   },
// });

// ...............
import { Tabs } from "expo-router";
import Tabbar from "../../components/Tabbar";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar, StyleSheet } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { useEffect } from "react";

export default function TabLayout() {
  return (
    // < style={styles.container}>
      <Tabs
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props) => <Tabbar {...props} />}
      >
        <Tabs.Screen name="index" options={{ title: "Home" }} />
        <Tabs.Screen name="explore" options={{ title: "Explore" }} />
        <Tabs.Screen name="myCreations" options={{ title: "My Creations" }} />
        <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      </Tabs>
  
  );
}



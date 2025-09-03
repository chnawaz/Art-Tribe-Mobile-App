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

// ................................................

import { Tabs } from "expo-router";
import Tabbar from "../../components/Tabbar"; // adjust if path different

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <Tabbar {...props} />} 
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="explore" options={{ title: "Explore" }} />
      <Tabs.Screen name="myCreations" options={{ title: "My Creations" }} />
    </Tabs>
  );
}


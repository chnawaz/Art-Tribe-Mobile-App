import { Drawer } from "expo-router/drawer";

import Sidebar from "../components/Sidebar";

export default function RootLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "transparent", // remove white
          width: 260, // control width of drawer
        },
        overlayColor: "transparent", // removes gray overlay
        sceneContainerStyle: {
          backgroundColor: "transparent", // keeps main screen visible
        },
      }}
      drawerContent={(props) => <Sidebar {...props} />}
    >
      <Drawer.Screen name="(tabs)" options={{ drawerLabel: "Home" }} />
    </Drawer>
  );
}

import { Drawer } from "expo-router/drawer";
import { useFonts } from "expo-font";

import Sidebar from "../components/Sidebar";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    ClashGroteskRegular: require("../assets/fonts/ClashGrotesk-Regular.otf"),
    ClashGroteskMedium: require("../assets/fonts/ClashGrotesk-Medium.otf"),
    ClashGroteskBold: require("../assets/fonts/ClashGrotesk-Bold.otf"),
    ClashGroteskLight: require("../assets/fonts/ClashGrotesk-Light.otf"),
    ClashGroteskSemiBold: require("../assets/fonts/ClashGrotesk-Semibold.otf"),
    SatoshiLight: require("../assets/fonts/Satoshi-Light.otf"),
    SatoshiRegular: require("../assets/fonts/Satoshi-Regular.otf"),
    SatoshiMedium: require("../assets/fonts/Satoshi-Medium.otf"),
    SatoshiBold: require("../assets/fonts/Satoshi-Bold.otf"),
  });

  if (!fontsLoaded) {
    return null; // Or <AppLoading /> if you want a splash
  }
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "transparent", 
          width: 260, 
        },
        overlayColor: "transparent", 
        sceneContainerStyle: {
          backgroundColor: "transparent", 
        },
      }}
      drawerContent={(props) => <Sidebar {...props} />}
    >
      <Drawer.Screen name="(tabs)" options={{ drawerLabel: "Home" }} />
    </Drawer>
  );
}

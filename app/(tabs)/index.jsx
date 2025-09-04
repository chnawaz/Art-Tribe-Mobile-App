import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";

import Explore from "../../components/Explore";
import Header from "../../components/Header";
// import Svgg from "../../assets/svgs/home";
import Tabbar from "../../components/Tabbar";

export default function HomeScreen() {
  return (
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <Header />
          <Explore />
          <Tabbar />
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    backgroundColor: "#0E0F11",
    // padding: 16,
  },
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    gap: 32,
    marginBottom: 32,
    // marginBottom: 432,
  },
});

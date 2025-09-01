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

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <Header />
          <Explore />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0E0F11",
  },
  scrollContent: {
    // padding: 16,
  },
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    gap: 32,
  },
});

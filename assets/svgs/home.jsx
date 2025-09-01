import { StyleSheet, Text, View } from "react-native";

import * as React from "react";
import Svg, { Path } from "react-native-svg";

// import React from "react";

export default function home() {
  return (
    <Svg
    style={styles.svg}
      width={60} // fixed width
      height={60} // fixed height
      viewBox="0 0 24 24" // must match the coordinate system of your path
    >
      <Path
        d="M7 10 L12 4 L17 10 M12 4 V20" // simple path example (arrow)
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const styles = StyleSheet.create({
  svg: {
    // backgroundColor: "red",
    color: "blue",
  }
});

// ..........................

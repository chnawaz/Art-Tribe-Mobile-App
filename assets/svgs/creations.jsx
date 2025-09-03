import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function Creationssvg() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
    >
      <Path
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.306 18.694h3.339l8.764-8.764a2.36 2.36 0 0 0-3.339-3.34l-8.764 8.765v3.34ZM14.235 7.426l3.34 3.339M16.322 17.86h5.009M18.826 15.355v5.009"
      />
    </Svg>
  );
}

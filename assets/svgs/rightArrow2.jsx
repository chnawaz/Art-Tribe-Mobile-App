import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function RightArrow2() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
    >
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.333 5.833 12.5 10l-4.167 4.166"
      />
    </Svg>
  );
}

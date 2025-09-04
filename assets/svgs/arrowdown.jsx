import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function ArrowDown() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
    >
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m7 10 5 5 5-5"
      />
    </Svg>
  );
}

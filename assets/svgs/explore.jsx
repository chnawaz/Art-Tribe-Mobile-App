import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function Exploresvg() {
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
        d="m12.773 13.93 1.828 2.725a1.05 1.05 0 0 0 1.95-.27L19.967 4.5 8.099 7.916a1.05 1.05 0 0 0-.27 1.95l2.707 1.828M7.717 14.125a2.625 2.625 0 1 0 0 5.25 2.625 2.625 0 0 0 0-5.25ZM5.792 18.675 4.217 20.25"
      />
    </Svg>
  );
}

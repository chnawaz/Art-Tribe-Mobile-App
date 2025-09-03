import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function Home( { color = "#FFFFFF", ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
    >
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m7.077 7.742 4.935-2.519a2.02 2.02 0 0 1 1.845 0l4.935 2.519a2.33 2.33 0 0 1 1.112 2.252l.03 5.006a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4l.03-5a2.331 2.331 0 0 1 1.113-2.258Z"
        clipRule="evenodd"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.602 19v-2.334a2.334 2.334 0 1 1 4.668 0V19"
      />
    </Svg>
  );
}

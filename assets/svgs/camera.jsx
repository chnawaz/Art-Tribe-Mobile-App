import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function Camera() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={24}
      fill="none"
    >
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 10.765v4.94A3.314 3.314 0 0 0 7.833 19h8.333a3.314 3.314 0 0 0 3.334-3.294v-4.941a3.314 3.314 0 0 0-3.333-3.294H7.833A3.314 3.314 0 0 0 4.5 10.765Z"
        clipRule="evenodd"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 15.706a2.471 2.471 0 1 1 2.5-2.471 2.485 2.485 0 0 1-2.5 2.47Z"
        clipRule="evenodd"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.5 7.471v-.824A1.657 1.657 0 0 1 11.167 5h1.666A1.657 1.657 0 0 1 14.5 6.647v.824"
      />
    </Svg>
  );
}

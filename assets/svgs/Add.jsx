import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function SvgComponent() {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} fill="none">
      <Path
        fill="#000"
        // stroke="white"
        d="M7.934 11.25a.75.75 0 0 0 0 1.5v-1.5Zm5 1.5a.75.75 0 0 0 0-1.5v1.5Zm0-1.5a.75.75 0 0 0 0 1.5v-1.5Zm5 1.5a.75.75 0 0 0 0-1.5v1.5Zm-4.25-.75a.75.75 0 0 0-1.5 0h1.5Zm-1.5 5a.75.75 0 0 0 1.5 0h-1.5Zm0-5a.75.75 0 0 0 1.5 0h-1.5Zm1.5-5a.75.75 0 0 0-1.5 0h1.5Zm-5.75 5v.75h5v-1.5h-5V12Zm5 0v.75h5v-1.5h-5V12Zm0 0h-.75V17h1.5V12h-.75Zm0 0h.75V7h-1.5v5h.75Z"
      />
    </Svg>
  );
}

import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function RightArrow() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
    >
      <Path
        fill="#D4D4D4"
        d="M13.405 16.638a.5.5 0 0 0 .69.724L13.75 17l-.345-.362Zm5.94-4.276a.5.5 0 0 0-.69-.724L19 12l.345.362Zm-.69 0a.5.5 0 0 0 .69-.724L19 12l-.345.362Zm-4.56-5.724a.5.5 0 1 0-.69.724L13.75 7l.345-.362ZM19 12.5a.5.5 0 0 0 0-1v1Zm-14-1a.5.5 0 0 0 0 1v-1Zm8.75 5.5.345.362 5.25-5L19 12l-.345-.362-5.25 5 .345.362ZM19 12l.345-.362-5.25-5L13.75 7l-.345.362 5.25 5L19 12Zm0 0v-.5H5v1h14V12Z"
      />
    </Svg>
  );
}

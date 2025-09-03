import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function Qrcode() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
    >
      <Path
        fill="#D4D4D4"
        d="M5.25 9a.75.75 0 0 0 1.5 0h-1.5ZM6 6v-.75a.75.75 0 0 0-.75.75H6Zm3 .75a.75.75 0 0 0 0-1.5v1.5ZM17.25 9a.75.75 0 0 0 1.5 0h-1.5ZM18 6h.75a.75.75 0 0 0-.75-.75V6Zm-3-.75a.75.75 0 0 0 0 1.5v-1.5ZM18.75 15a.75.75 0 0 0-1.5 0h1.5ZM18 18v.75a.75.75 0 0 0 .75-.75H18Zm-3-.75a.75.75 0 0 0 0 1.5v-1.5ZM6.75 15a.75.75 0 0 0-1.5 0h1.5ZM6 18h-.75c0 .414.336.75.75.75V18Zm3 .75a.75.75 0 0 0 0-1.5v1.5Zm11-6a.75.75 0 0 0 0-1.5v1.5Zm-16-1.5a.75.75 0 0 0 0 1.5v-1.5ZM6 9h.75V6h-1.5v3H6Zm0-3v.75h3v-1.5H6V6Zm12 3h.75V6h-1.5v3H18Zm0-3v-.75h-3v1.5h3V6Zm0 9h-.75v3h1.5v-3H18Zm0 3v-.75h-3v1.5h3V18ZM6 15h-.75v3h1.5v-3H6Zm0 3v.75h3v-1.5H6V18Zm14-6v-.75H4v1.5h16V12Z"
      />
    </Svg>
  );
}

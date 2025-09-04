import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function Gallary2() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
    >
      <Path
        stroke="#A3A3A3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.692 5H9.308A4.332 4.332 0 0 0 5 9.356v5.288c0 .17.01.339.03.507A4.326 4.326 0 0 0 9.307 19h5.384A4.332 4.332 0 0 0 19 14.644V9.356A4.332 4.332 0 0 0 14.692 5Z"
        clipRule="evenodd"
      />
      <Path
        stroke="#A3A3A3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.053 8.546a.507.507 0 1 1-1.014 0 .507.507 0 0 1 1.014 0Z"
        clipRule="evenodd"
      />
      <Path
        stroke="#A3A3A3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.029 15.152A13.939 13.939 0 0 0 6.52 13.59a2.557 2.557 0 0 1 2.936-.881c2.524.8 4.777 3.738 6.938 2.21a5.51 5.51 0 0 0 1.777-2.342c.217-.51.496-.991.83-1.433"
      />
    </Svg>
  );
}

import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Menu() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
    >
      <Path
        stroke="#FFFFFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.967 6h16M4.967 12h16M4.967 18h16"
      />
    </Svg>
  )
}

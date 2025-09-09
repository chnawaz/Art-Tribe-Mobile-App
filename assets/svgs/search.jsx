import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Search() {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
    >
      <Path
        stroke="#FFFFFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.967 10.765a5.765 5.765 0 1 1 11.53 0 5.765 5.765 0 0 1-11.53 0Z"
        clipRule="evenodd"
      />
      <Path
        stroke="#FFFFFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.496 16.53 19.967 19"
      />
    </Svg>
  )
}

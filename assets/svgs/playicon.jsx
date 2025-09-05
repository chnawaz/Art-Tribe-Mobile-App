import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function PlayIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={33}
      height={32}
      fill="none"
    >
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15.144 12.233 4.215 2.864a.89.89 0 0 1 0 1.537l-4.215 3.133c-.8.543-2.01.08-2.01-.768v-6c0-.844 1.211-1.308 2.01-.766Z"
        clipRule="evenodd"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.134 14.667v2.667a8 8 0 0 0 8 8H17.8a8 8 0 0 0 8-8v-2.667a8 8 0 0 0-8-8h-2.667a8 8 0 0 0-8 8Z"
        clipRule="evenodd"
      />
    </Svg>
  )
}

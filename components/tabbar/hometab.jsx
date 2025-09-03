import { Pressable, StyleSheet, Text, View } from 'react-native'
import HomeSvg from '../../assets/svgs/home'
import React from 'react'

export default function Home() {
  return (
    <Pressable style={styles.container}>
      <HomeSvg />
      <Text style={styles.text}>Home</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
    },
    text: {
         fontFamily: "ClashGroteskMedium",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: 0.24, 
    color: "#FFFFFF",
    }
})
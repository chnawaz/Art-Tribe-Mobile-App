import { Pressable, StyleSheet, Text, View } from 'react-native'
import ExploreSvg from '../../assets/svgs/explore'
import React from 'react'

export default function Home() {
  return (
    <Pressable style={styles.container}>
        <ExploreSvg />
      <Text style={styles.text}>Explore</Text>
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
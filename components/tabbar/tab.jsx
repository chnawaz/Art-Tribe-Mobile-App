import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function tab() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}></Text>
    </View>
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
    }
})
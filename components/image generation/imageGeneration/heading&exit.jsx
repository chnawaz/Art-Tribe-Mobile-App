import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Headingexit() {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
    }
})
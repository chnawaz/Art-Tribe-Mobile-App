import { StyleSheet, Text, View } from 'react-native'
import Tab from './tabs/tab'
import React from 'react'

export default function Tabs() {
  return (
    <View style={styles.container}>
      <Tab img={require("../../assets/images/home.png")} title="Home" />
      <Tab img={require("../../assets/images/bell.png")} title="Updates & Community" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:"column",
        width:"100%",
    }
})
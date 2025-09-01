import { StyleSheet, Text, View } from 'react-native';
import Headings from './Headings';
import Card from './social&billing/Card';
import React from 'react'

export default function SocialMedia() {
  return (
    <View style={styles.container}>
      <Headings heading="Social Media Automation" />
      <Card img={require("../../assets/images/Instagram.png")} title="Instagram & Facebook" />
      <Card img={require("../../assets/images/Tik Tok.png")} title="Tiktok" />
      <Card img={require("../../assets/images/Youtube.png")} title="Youtube Shorts" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        gap: 8,
        width: "100%",
    }
})
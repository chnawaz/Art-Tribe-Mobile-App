import { StyleSheet, Text, View } from 'react-native';
import Headings from './Headings';
import Card from './social&billing/Card';
import React from 'react'

export default function Billing() {
  return (
    <View style={styles.container}>
      <Headings heading="Subscription & Billing" />
      <Card img={require("../../assets/images/Diamond2.png")} title="Manage Subscription" />
      <Card img={require("../../assets/images/Call.png")} title="Customer Support" />
      <Card img={require("../../assets/images/box_open.png")} title="Rewards" />
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
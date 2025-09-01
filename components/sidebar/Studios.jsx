import { StyleSheet, Text, View } from 'react-native'
import Headings  from './Headings'
import Studio from './studios/Studio'
import React from 'react'

export default function Studios() {
  return (
    <View style={styles.container}>
        <Headings heading="Studios" />
        <Studio studioName="Image Studio" details="12 Active Projects" img={require('../../assets/images/imgS.png')} />
        <Studio studioName="Video Studio" details="Create, edit & enhance" img={require('../../assets/images/vidS.png')} />
        <Studio studioName="Image Sketch" details="Create, edit & enhance" img={require('../../assets/images/skcS.png')} />
        <Studio studioName="Music Studio" details="Background music, edit & enhance" img={require('../../assets/images/musS.png')} />
        <Studio studioName="Voice Studio" details="Voiceover, story telling" img={require('../../assets/images/voiS.png')} />
        <Studio studioName="Graphic Studio" details="Brand graphic, graphical Posts" img={require('../../assets/images/graS.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
    },

})
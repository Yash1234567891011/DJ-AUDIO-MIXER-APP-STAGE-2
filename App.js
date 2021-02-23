import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';
import { Audio } from 'expo-av';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';

export default class App extends Component{ 
  async playSound(url) {
    try {
      await Audio.setIsEnabledAsync(true);
      var playbackObject = await Audio.Sound.createAsync(
        { uri: url },
        { shouldPlay: true }
      );
    } catch (error) {
      console.log();
    }
  }

  render(){
    return(
      <View
      style={{backgroundColor:'orange',justifyContent:'center', 
    alignItems:'center', paddingBottom:90, paddingTop:20}}>
      
        
        <View 
          style={{ width:200 , height:100,marginLeft:50}}>
          <TouchableOpacity
            style={{
              width: 200,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              backgroundColor: 'purple',
              borderWidth: 2,
              borderColor: 'white',
              marginTop:20
            }}
           
            onPress={() =>  {
              var url =
                'https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/rock-guitar-music-bed_z1y16Brd_NWM.mp3';
              this.playSound(url);
            }
            }>
            <Text>
              sound 1
            </Text>
            </TouchableOpacity>
        </View>

        <View
          style={{ width:200 , height:100, marginLeft:50}}>
          <TouchableOpacity
            style={{
              width: 200,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              backgroundColor: 'blue',
              borderWidth: 2,
              borderColor: 'white',
              marginTop:20
            }}
            onPress={() => {
              var url =
                'http://soundbible.com/mp3/labrador-barking-daniel_simon.mp3';
              this.playSound(url);
            }
            }>
            <Text>
              sound 2
            </Text>
        </TouchableOpacity>
         </View>
        <View
          style={{ width:200 , height:100, marginTop:20,marginLeft:50}}>
          <TouchableOpacity
            style={{
              width: 200,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              backgroundColor: 'brown',
              borderWidth: 2,
              borderColor: 'white',
              marginTop:20
            }}
           
            onPress={() =>  {
              var url =
                'https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/rock-guitar-underscore-music-bed_MJhF2rB__NWM.mp3';
              this.playSound(url);
            }
            }>
             <Text>
              sound 3
            </Text>
        </TouchableOpacity>
          </View>
        
        <View 
          style={{ width:180 , height:100, marginTop:20,marginLeft:50}}>
          <TouchableOpacity
            style={{
              width: 200,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              backgroundColor: 'green',
              borderWidth: 2,
              borderColor: 'white',
              marginTop:20
            }}
           
            onPress={() =>  {
              var url =
                'https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/bright-and-breezy-music-bed_MJA8hSHO_NWM.mp3';
              this.playSound(url);
            }
            }>
            <Text>
              sound 4
            </Text>
        </TouchableOpacity>
        </View>

        <View 
          style={{ width:180 , height:100, marginTop:20, marginLeft:50}}>
          <TouchableOpacity
            style={{
              width: 200,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              backgroundColor: 'red',
              borderWidth: 2,
              borderColor: 'white',
              marginTop:20
            }}
           
            onPress={() =>  {

     Audio.setIsEnabledAsync(false);
            }
            }>
            <Text>
              stop sound
            </Text>
        </TouchableOpacity>
        </View>

        
      </View>
    )
  }
}
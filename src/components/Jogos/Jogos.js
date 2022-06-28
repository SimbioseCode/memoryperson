import React, { Component , useEffect, useState} from 'react';
import { Button, View, Text , Image, TouchableOpacity} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as ScreenOrientation from 'expo-screen-orientation';
import styles from './styles'; 

// ScreenOrientation.unlockAsync()

export default class Desenhos extends Component {
  render() {
    
    return (
      
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Memoria</Text>
      
      <View style={{ flex: 0,  flexDirection: 'row', flexWrap: 'wrap'}}>        
        <TouchableOpacity style={styles.card}>
          <Image
          style={styles.image}
          source={require('../../../assets/Leon.jpeg')}      />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
        <Image
        style={styles.image}
        source={require('../../../assets/Leon.jpeg')}     />
      </TouchableOpacity>
        <TouchableOpacity style={styles.card} >
          <Image
          style={styles.image}
          source={require('../../../assets/Edgar.png')} 
           />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} >
          <Image
          style={styles.image}
          source={require('../../../assets/Edgar.png')}
           />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} >
          <Image
          style={styles.image}
          source={require('../../../assets/Poco.jpeg')}
                />
        </TouchableOpacity> 
        <TouchableOpacity style={styles.card} >
        <Image
        style={styles.image}
        source={require('../../../assets/Poco.jpeg')}
        />
      </TouchableOpacity> 
        <TouchableOpacity style={styles.card}>
          <Image
          style={styles.image}
          source={require('../../../assets/EMZ.jpeg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
        <Image
        style={styles.image}
        source={require('../../../assets/EMZ.jpeg')}
              />
      </TouchableOpacity>
        <TouchableOpacity style={styles.card} >
          <Image
          style={styles.image}
          source={require('../../../assets/Spike.jpeg')}
             />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}  >
          <Image
          style={styles.image}
          source={require('../../../assets/Spike.jpeg')}
        />
          </TouchableOpacity>
        <TouchableOpacity style={styles.card} >
          <Image
          style={styles.image}
          source={require('../../../assets/Shelly.jpeg')}
                />
        </TouchableOpacity> 
        <TouchableOpacity style={styles.card} >
          <Image
          style={styles.image}
          source={require('../../../assets/Shelly.jpeg')}
                />
        </TouchableOpacity>        
      </View> 
    </View>
    )
  }
}
import React, { Component , useEffect, useState} from 'react';
import { Button, View, Text , Image, TouchableOpacity} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as ScreenOrientation from 'expo-screen-orientation';
import styles from './styles'; 

// ScreenOrientation.unlockAsync()

export default class Personagens extends Component {
  render() {
    
    return (
      
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Memoria</Text>
      
      <View style={{ flex: 0,  flexDirection: 'row', flexWrap: 'wrap'}}>        
        <TouchableOpacity style={styles.card}>
          <Image
          style={styles.image}
          source={require('../../../assets/Personagens/Leon.jpeg')}      />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
        <Image
        style={styles.image}
        source={require('../../../assets/Personagens/Leon.jpeg')}     />
      </TouchableOpacity>
        <TouchableOpacity style={styles.card} >
          <Image
          style={styles.image}
          source={require('../../../assets/Personagens/Edgar.png')} 
           />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} >
          <Image
          style={styles.image}
          source={require('../../../assets/Personagens/Edgar.png')}
           />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} >
          <Image
          style={styles.image}
          source={require('../../../assets/Personagens/Poco.jpeg')}
                />
        </TouchableOpacity> 
        <TouchableOpacity style={styles.card} >
        <Image
        style={styles.image}
        source={require('../../../assets/Personagens/Poco.jpeg')}
        />
      </TouchableOpacity> 
        <TouchableOpacity style={styles.card}>
          <Image
          style={styles.image}
          source={require('../../../assets/Personagens/EMZ.jpeg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
        <Image
        style={styles.image}
        source={require('../../../assets/Personagens/EMZ.jpeg')}
              />
      </TouchableOpacity>
        <TouchableOpacity style={styles.card} >
          <Image
          style={styles.image}
          source={require('../../../assets/Personagens/Spike.jpeg')}
             />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}  >
          <Image
          style={styles.image}
          source={require('../../../assets/Personagens/Spike.jpeg')}
        />
          </TouchableOpacity>
        <TouchableOpacity style={styles.card} >
          <Image
          style={styles.image}
          source={require('../../../assets/Personagens/Shelly.jpeg')}
                />
        </TouchableOpacity> 
        <TouchableOpacity style={styles.card} >
          <Image
          style={styles.image}
          source={require('../../../assets/Personagens/Shelly.jpeg')}
                />
        </TouchableOpacity>        
      </View> 
    </View>
    )
  }
}